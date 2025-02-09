export default function tabsBlock() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".tabs-block")
  );
  elements.forEach((element) => {
    const navBtns = Array.from(
      element.querySelectorAll<HTMLButtonElement>(".tabs-block__nav-card")
    );
    const tabItems = Array.from(
      element.querySelectorAll<HTMLElement>(".tabs-block__tab")
    );
    const navWrapper = element.querySelector<HTMLElement>(".tabs-block__nav")!;
    const itemsWrapper = element.querySelector<HTMLElement>(
      ".tabs-block__right-wrapper"
    )!;
    const setActive = (index: number) => {
      navBtns.forEach((btn) => btn.classList.remove("active"));
      tabItems.forEach((item) => item.classList.remove("active"));
      navBtns[index]?.classList.add("active");
      tabItems[index]?.classList.add("active");
    };

    setActive(0);

    navBtns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setActive(btnIndex);
      });
    });

    let swapped = false;
    const mql = window.matchMedia("(max-width: 640px)");

    const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches && !swapped) {
        tabItems.forEach((item, itemIndex) => {
          itemsWrapper.insertBefore(navBtns[itemIndex], item);
        });
        swapped = true;
      } else {
        if (!swapped) return;
        navBtns.forEach((btn) => navWrapper.append(btn));
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
}
