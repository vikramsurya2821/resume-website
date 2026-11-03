import './Project.css';
function Projects({ projects }) {
  return (
    <section className="projects">
      <h3>PROJECTS</h3>
      {projects.map((proj, i) => (
        <div className="projects-container" key={i}>
          <h4>
            {proj.title}
            <span className="sep">|</span>
            <em>{proj.tech}</em>
          </h4>
          <ul>
            {proj.details.map((detail, j) => <li key={j}>{detail}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
export default Projects;
