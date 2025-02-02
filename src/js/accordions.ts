import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function accordions() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".accordions")
  );

  elements.forEach((element) => {
    const accordions = Array.from(element.querySelectorAll(".accordion"));
    accordions.forEach((accordion) => {
      const dropdown = accordion.querySelector<HTMLElement>(
        ".faq__accordion-dropdown"
      );
      accordion.addEventListener("click", (event) => {
        event.preventDefault();
        accordions.forEach((otherAccordion) => {
          if (accordion !== otherAccordion)
            otherAccordion.classList.remove("active");
        });
        accordion.classList.toggle("active");
      });

      dropdown?.addEventListener("transitionend", () => {
        ScrollTrigger.refresh();
      });
    });
  });
}
