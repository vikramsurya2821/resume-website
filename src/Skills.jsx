import "./Skills.css"
function Skills({ technicalSkills }) {
  return (
    <section className="skills">
      <h3>TECHNICAL SKILLS</h3>
      {Object.entries(technicalSkills).map(([key, value]) => (
        <p key={key}>
          <strong>{key}:</strong> {value}
        </p>
      ))}
    </section>
  );
}
export default Skills;
