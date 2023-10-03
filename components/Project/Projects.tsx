import { FC } from "react";
import { Project } from "./../../components";
import { projects } from "../../utils/projects";
import { StyledProjects } from "./StyledProjects";
import { StyledSection } from "../Style/StyledHomeContent";
import Fade from "react-reveal/Fade";

const Projects: FC = () => {
  return (
    <StyledSection id="projects" aria-label="Projects' Section">
      <Fade top>
        <header className="section__header-main">
          <h2 className="section__header-main-head">PROJECTS</h2>
          <p>
            These are some of the projects I built to practice and get better at
            the technologies mentioned above.
          </p>
        </header>
      </Fade>
      <StyledProjects>
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </StyledProjects>
    </StyledSection>
  );
};

export default Projects;
