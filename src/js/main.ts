import "virtual:svg-icons-register";
import "../scss/style.scss";
import accordions from "./accordions";
import ourClients from "./ourClients";
import realisedProjects from "./realisedProjects";
import ourTeam from "./ourTeam";
import gallery from "./gallery";
import fancybox from "./fancybox";
import pathSlider from "./pathSlider";
import tabs from "./tabs";
import reviews from "./reviews";
import header from "./header";

document.addEventListener("DOMContentLoaded", () => {
  header();
  tabs();
  accordions();
  ourClients();
  realisedProjects();
  ourTeam();
  gallery();
  fancybox();
  pathSlider();
  reviews();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
