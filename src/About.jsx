import './About.css';
function About({ about }) {
  return (
    <section className="about">
      <h3>ABOUT ME</h3>
      <hr />
      
      <p>{about}</p>
    </section>
  );
}
export default About;