import Home from "pages/Home";
import Models from "pages/Models";
import Framework from "classes/Framework";

class App extends Framework {
  constructor() {
    super();
    requestAnimationFrame(this.update.bind(this));
    window.onunload = () => {
      scrollTo(0, 0);
      Canvas?.destroy();
    };
  }

  createPages() {
    this.pages = {
      home: new Home(),
      models: new Models(),
    };
    this.page = this.pages[this.template];
    this.createRouter();
  }

  update() {
    this.page?.update && this.page.update();
    this.canvas?.update();
    requestAnimationFrame(this.update.bind(this));
  }
}

new App();
