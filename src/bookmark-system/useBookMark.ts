import { useState } from 'react';
import store from './store';
import type { Bookmark } from './store/types';

export function useBookMark() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  function addBookMark(bookmark: Bookmark): string {
    const id = store.addBookmark(bookmark);
    setBookmarks((prevBookmarks) => [...prevBookmarks, bookmark]);
    return id;
  }

  function removeBookMark(id: string) {
    store.removeBookmark(id);
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((bookmark) => bookmark.id !== id)
    );
  }

  return {
    addBookMark,
    removeBookMark,
    bookmarks,
  };
}
