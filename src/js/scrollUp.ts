export default function scrollUp() {
  const scrollUpWrapper = document.querySelector<HTMLElement>(".scroll-up");
  const button = document.querySelector<HTMLButtonElement>(".scroll-up__btn");
  const footer = document.querySelector<HTMLElement>(".page-footer")!;
  button?.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  const checkScroll = () => {
    if (window.scrollY > window.innerHeight) {
      if (
        window.scrollY <
        document.body.scrollHeight - window.innerHeight - footer.offsetHeight
      ) {
        scrollUpWrapper?.classList.add("shown");
      } else {
        scrollUpWrapper?.classList.remove("shown");
      }
    } else {
      scrollUpWrapper?.classList.remove("shown");
    }
  };

  window.addEventListener("resize", checkScroll);
  window.addEventListener("scroll", checkScroll);

  checkScroll();
}
