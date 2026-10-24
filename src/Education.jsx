import './Education.css';
function Education({ education }) {
  return (
    <section className="education">
      <h3>EDUCATION</h3>
      <hr />
      {education.map((edu, i) => (
        <div key={i} className="education-item">
          <strong>{edu.degree}</strong> - {edu.score}, {edu.institution} <span className="year">{edu.year}</span>
        </div>
      ))}
    </section>
  );
}
export default Education;
