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
import fileUpload from "./fileUpload";
import selects from "./selects";
import components from "./components";
import modals from "./modals";
import forms from "./forms";
import tabsBlock from "./tabs-block";
import since from "./since";

document.addEventListener("DOMContentLoaded", () => {
  header();
  tabs();
  modals();
  accordions();
  fileUpload();
  ourClients();
  realisedProjects();
  ourTeam();
  gallery();
  fancybox();
  pathSlider();
  reviews();
  selects();
  components();
  forms();
  tabsBlock();
  since();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});
