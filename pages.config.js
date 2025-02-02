import about from "./pages-data/about";
import home from "./pages-data/home";
import notFound from "./pages-data/notFound";
import projects from "./pages-data/projects";
import service from "./pages-data/service";
import singleProjects from "./pages-data/singleProjects";
import singleTeam from "./pages-data/singleTeam";
import subservice from "./pages-data/subservice";
import subservice2 from "./pages-data/subservice-2";
import team from "./pages-data/team";

const pagesConfig = {
  ...home,
  ...projects,
  ...notFound,
  ...about,
  ...service,
  ...singleTeam,
  ...singleProjects,
  ...team,
  ...subservice,
  ...subservice2,
};

export default pagesConfig;
