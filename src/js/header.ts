import { debounce } from "lodash";

export default function header() {
  const header = document.querySelector<HTMLElement>(".page-header");
  if (!header) return;

  const checkHeader = () => {
    if (window.scrollY > 20) {
      header.classList.add("page-header--fixed");
    } else {
      header.classList.remove("page-header--fixed");
    }
  };

  checkHeader();
  window.addEventListener("scroll", () => {
    checkHeader();
  });

  window.addEventListener("resize", debounce(checkHeader, 300));

  const search = header.querySelector<HTMLElement>(".page-header__search");

  if (search) {
    const btn = search.querySelector<HTMLButtonElement>("button");

    btn?.addEventListener("click", (event) => {
      event.preventDefault();
      search.classList.toggle("open");
    });
  }

  const allSubmenuLinks = Array.from(
    header.querySelectorAll<HTMLLinkElement>(".page-header__submenu-link")
  );
  const allNavLinks = Array.from(
    header.querySelectorAll<HTMLLinkElement>(".page-header__nav-link")
  );
  const secondLevelLinks = Array.from(
    header.querySelectorAll<HTMLElement>(
      ".page-header__submenu-second-level-link"
    )
  );

  const thirdLevelSubmenues = Array.from(
    header.querySelectorAll<HTMLElement>(".page-header__third-level-submenu")
  );

  secondLevelLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      thirdLevelSubmenues.forEach((menu) => menu.classList.remove("active"));
      secondLevelLinks.forEach((link) => link.classList.remove("active"));
      const id = link.dataset.id;
      if (!id) return;
      const matchingMenu = thirdLevelSubmenues.find(
        (item) => item.dataset.id === id
      );
      if (!matchingMenu) return;
      matchingMenu.classList.add("active");
      link.classList.add("active");
    });
  });

  allSubmenuLinks.forEach((link) => {
    const hasSubmenu = !!link.parentElement?.querySelector(
      ".page-header__submenu-second-level"
    );
    link.addEventListener("mouseenter", () => {
      thirdLevelSubmenues.forEach((menu) => menu.classList.remove("active"));
    });

    if (!hasSubmenu) return;
    link.addEventListener("click", (event) => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        event.preventDefault();
        link.parentElement?.classList.toggle("accordion-open");
      }
    });

    console.log("Has submenu", hasSubmenu);
  });

  allNavLinks.forEach((link) => {
    const hasSubmenu = !!link.parentElement?.querySelector(
      ".page-header__submenu"
    );
    if (!hasSubmenu) return;
    link.addEventListener("click", (event) => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        event.preventDefault();
        link.parentElement?.classList.toggle("submenu-open");
      }
    });
  });

  const burger = document.querySelector<HTMLButtonElement>(
    ".page-header__burger"
  );

  burger?.addEventListener("click", (event) => {
    event.preventDefault();
    document.body.classList.toggle("menu-open");
  });
}
