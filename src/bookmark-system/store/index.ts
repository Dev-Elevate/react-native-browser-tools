import type { Bookmark } from './types';

class BMKStore {
  bookmarks: Array<Bookmark> = [];
  constructor() {
    this.bookmarks = [];
  }

  addBookmark(bookmark: Bookmark): string {
    this.bookmarks.push(bookmark);
    return bookmark.id;
  }

  removeBookmark(bookmarkId: string) {
    this.bookmarks = this.bookmarks.filter(
      (bookmark) => bookmark.id !== bookmarkId
    );
  }

  getBookmarks() {
    return this.bookmarks;
  }
}

const store = new BMKStore();

export default store;
