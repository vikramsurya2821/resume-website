import resume from './resume.json';
import Header from './Header';
import Education from './Education';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

import Course from './Course';
import './App.css';
import Regfrm from './Regfrm';



function App() {
  const handleNameFromChild = (name) => {
    console.log("Received from child:", name); // This will log: "Received from child: John"
  };
  console.log("uyghuyg")
  return (
    <div className="resume">
      <div className='start'></div>
      <Header {...resume} />
      <About about={resume.about} />
      <Education education={resume.education} />
      <Skills technicalSkills={resume.technicalSkills} softSkills={resume.softSkills} />
      <Projects projects={resume.projects} />
      <Course course={resume.course} />
      <div className='end'></div>
      <>
          <Regfrm sendNameToParent={handleNameFromChild}/>
      </>
    </div>
    
  );
}

export default App;




