import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function since() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".since"));
  elements.forEach((element) => {
    const counters = element.querySelectorAll<HTMLElement>(
      ".since__card-amount-numbers"
    );
    counters.forEach((counter) => {
      const target = Number(counter.textContent);
      const duration = 2;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".since",
          start: "top bottom",
          markers: false,
        },
      });
      tl.fromTo(
        counter,
        {
          textContent: 0,
        },
        {
          textContent: target,
          duration: duration,
          ease: "power1.out",
          snap: { textContent: 1 },
          onUpdate: function () {
            counter.textContent = Math.ceil(
              Number(counter.textContent)
            ).toString();
          },
        }
      );
    });
  });
}
