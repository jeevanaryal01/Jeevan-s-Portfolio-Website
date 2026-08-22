"use client";

import { useCallback, useSyncExternalStore } from "react";

export type Highlight = { id: string; label: string; kind: string };

type Snapshot = { items: Highlight[]; ready: boolean; returning: boolean };

const STORAGE_KEY = "ja.highlights.v1";
const VISIT_KEY = "ja.visited.v1";

// Server and first client paint agree on this, so hydration stays quiet.
const EMPTY: Snapshot = { items: [], ready: false, returning: false };

let snapshot: Snapshot = EMPTY;
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function persist(items: Highlight[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Blocked or full storage: highlights just last for this session.
  }
}

function hydrate() {
  if (hydrated) return;
  hydrated = true;

  let items: Highlight[] = [];
  let returning = false;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) items = parsed as Highlight[];
    }
    returning = window.localStorage.getItem(VISIT_KEY) === "1";
    window.localStorage.setItem(VISIT_KEY, "1");
  } catch {
    // Same as above — read failures leave the page in its empty state.
  }

  snapshot = { items, ready: true, returning };
  emit();
}

function subscribe(listener: () => void) {
  hydrate();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot() {
  return snapshot;
}

function getServerSnapshot() {
  return EMPTY;
}

export function toggleHighlight(item: Highlight) {
  const items = snapshot.items.some((existing) => existing.id === item.id)
    ? snapshot.items.filter((existing) => existing.id !== item.id)
    : [...snapshot.items, item];
  snapshot = { ...snapshot, items };
  persist(items);
  emit();
}

export function clearHighlights() {
  snapshot = { ...snapshot, items: [] };
  persist([]);
  emit();
}

export function useHighlights() {
  const state = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const has = useCallback(
    (id: string) => state.items.some((item) => item.id === id),
    [state.items]
  );

  return {
    items: state.items,
    ready: state.ready,
    returning: state.returning,
    has,
    toggle: toggleHighlight,
    clear: clearHighlights,
  };
}
