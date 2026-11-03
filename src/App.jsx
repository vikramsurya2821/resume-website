import resume from './resume.json';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Course from './Course';
import './App.css';

function App() {
  return (
    <div className="resume">
      <Header {...resume} />
      <About about={resume.about} />
      <Skills technicalSkills={resume.technicalSkills} />
      <Projects projects={resume.projects} />
      <Education education={resume.education} />
      <Course course={resume.course} />
    </div>
  );
}

export default App;
