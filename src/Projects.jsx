import './Project.css';
function Projects({ projects }) {
  return (
    <section className='projects'>
      <h3>PROJECTS</h3>
      <hr />
      {projects.map((proj, i) => (
        <div className='projects-container'key={i}>
          <h4>{proj.title} <span className='year'>{proj.year}</span></h4>
          <ul>
            {proj.details.map((detail, j) => <li key={j}>{detail}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
export default Projects;