import './Education.css';
function Education({ education }) {
  return (
    <section className="education">
      <h3>EDUCATION</h3>
      {education.map((edu, i) => (
        <div key={i} className="education-item">
          <span>
            <strong>{edu.degree}</strong>, {edu.institution} | {edu.score}
          </span>
          <span className="year">{edu.year}</span>
        </div>
      ))}
    </section>
  );
}
export default Education;
