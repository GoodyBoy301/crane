import LongPage from "classes/LongPage";
import gsap from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

export default class Models extends LongPage {
  constructor() {
    super({
      element: ".models",
      id: "models",
      elements: {
        displays: ".models__intro__display",
        models: ".models__about",
        images: ".models__about__media",
        bios: ".models__about__bio",
        names: ".models__about__name",
        modelDetails: ".models__about *",
      },
    });
  }

  /** Life Cycle */
  create() {
    super.create();
    this.reCalculate({ scroll: {} });
    this.displays = ["list", "grid", "editorial"];
  }
  reCalculate() {
    super.reCalculate({ scroll: {} });
  }

  switchDisplay(index) {
    const states = [];
    this.elements.displays.forEach((element, i) => {
      if (i === index) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });

    const state = Flip.getState(
      [...this.elements.images, ...this.elements.bios],
      { props: "height, top" }
    );
    this.elements.models.className = `models__about ${this.displays[index]}`;
    Flip.from(state, {
      duration: 0.5,
      ease: "expo.inout",
      toggleClass: "fliiping",
      fade: true,
    });

    // Flip.fit(state1, state2);

    // this.elements.modelDetails.forEach(element => {
    //   states.push( Flip.getState(element))
    // })
    // const state = Flip.getState(this.elements.models)

    // Flip.from(state, {duration:2})
    // this.elements.modelDetails.forEach((element, index) => {
    //   Flip.fit(states[index], { duration: 0.5, fade:true});
    // })
  }

  addEventListeners() {
    super.addEventListeners();

    this.elements.displays.forEach((element, index) => {
      element.onclick = () => this.switchDisplay(index);
    });
  }
}
