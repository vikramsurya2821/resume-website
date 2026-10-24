
import './Course.css';
function Course({ course }) {
  return (
    <section className='course'>
      <h3>COURSE</h3>
      <hr />
      {course.map((cour, i) => (
        <div className='course-container' key={i}>
          <h4>{cour.title} ({cour.year})</h4>
          <ul>
            {cour.details.map((detail, j) => <li key={j}>{detail}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
export default Course;