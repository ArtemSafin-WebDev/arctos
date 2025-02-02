import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default function pathSlider() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".path"));

  elements.forEach((element) => {
    const mql = window.matchMedia("(max-width: 640px)");
    const container = element.querySelector<HTMLElement>(".swiper");
    let instance: Swiper | null = null;
    if (!container) return;

    const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (!e.matches) {
        instance = new Swiper(container, {
          slidesPerView: "auto",
          speed: 600,
          modules: [Navigation, Pagination],
          navigation: {
            prevEl: element.querySelector<HTMLButtonElement>(
              ".slider-arrow--prev"
            ),
            nextEl: element.querySelector<HTMLButtonElement>(
              ".slider-arrow--next"
            ),
          },
        });
      } else {
        if (instance) {
          instance.destroy();
          instance = null;
        }
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
}
