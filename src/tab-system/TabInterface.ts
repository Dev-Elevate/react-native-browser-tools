class Tab {
  url: string;
  title: string;
  lastScreenShot: string | null = null;
  id: string;

  constructor(id: string, url: string, title: string) {
    this.url = url;
    this.id = id;
    this.title = title;
  }

  takeScreenShot() {
    // take a screenshot of the tab
  }

  storeScreenShot() {
    // store the screenshot
  }
}
