import "./Skills.css"
function Skills({ technicalSkills, softSkills }) {
  return (
    <section className="skills">
      <div className="skill-container">
        <h3>TECHNICAL SKILLS</h3>
        <hr />
        {Object.entries(technicalSkills).map(([key, value], i) => (
          <p key={i}>
            <strong>{key}:</strong> {value}
          </p>
        ))}
      </div>

      <div>
        <h3>SOFT SKILLS</h3>
        <hr />
        <ul>
          {softSkills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Skills;
