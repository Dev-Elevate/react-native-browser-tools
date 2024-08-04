class Tab {
  url: string;
  title: string;
  lastScreenShot: string | null = null;
  id: string;
  type: 'Public' | 'Private' = 'Public';

  constructor(
    id: string,
    url: string,
    title: string,
    type: 'Public' | 'Private' = 'Public'
  ) {
    this.url = url;
    this.id = id;
    this.title = title;
    this.type = type;
  }

  takeScreenShot() {
    // take a screenshot of the tab
  }

  storeScreenShot() {
    // store the screenshot
  }
}
