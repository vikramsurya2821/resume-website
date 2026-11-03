import './About.css';
function About({ about }) {
  return (
    <section className="about">
      <h3>PROFESSIONAL SUMMARY</h3>
      <p>{about}</p>
    </section>
  );
}
export default About;
