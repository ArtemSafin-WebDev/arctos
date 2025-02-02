import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

export default function ourClients() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".our-clients")
  );
  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    if (!container) return;
    new Swiper(container, {
      slidesPerView: "auto",
      speed: 600,
      modules: [Navigation, Pagination],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(".slider-arrow--prev"),
        nextEl: element.querySelector<HTMLButtonElement>(".slider-arrow--next"),
      },
      pagination: {
        el: element.querySelector<HTMLElement>(".slider-pagination"),
        type: "fraction",
      },
    });
  });
}
