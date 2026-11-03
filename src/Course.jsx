import './Course.css';
function Course({ course }) {
  return (
    <section className="course">
      <h3>TRAINING</h3>
      {course.map((cour, i) => (
        <div className="course-container" key={i}>
          <div className="course-title">
            <span><strong>{cour.title}</strong>, {cour.institution}</span>
            <span className="year">{cour.year}</span>
          </div>
          <ul>
            {cour.details.map((detail, j) => <li key={j}>{detail}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
export default Course;
