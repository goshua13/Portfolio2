import React, {useEffect} from "react";

const Skills = () => {
  useEffect(() => {
    const text = document.querySelectorAll(".bounce");
    const bounceInit = e => {
      const target = e.target;
      target.classList.add("grow");
    };
    const bounceEnd = e => {
      const target = e.target;
      target.classList.remove("grow");
    };
    text.forEach(sentence => {
      const sentences = sentence.innerHTML.split(' ').map(word => {
        return word.replace(`${word}`, `<span>${word}</span>`)
      }).join(' ')
      sentence.innerHTML = sentences
    })
  
   const bouncyText = document.querySelectorAll('.bounce span')
   bouncyText.forEach(word => {
     word.addEventListener('mouseover', bounceInit)
     word.addEventListener('animationend', bounceEnd)
   })
  })
  return (
    <div className="skills">
      <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
      <main className="mainstuff">
       <div className='h1_tags'> <h1 className="bruh bounce">My Skills</h1></div>

        <div className="ptag paragraphs">
          <p className="bounce">
            I am a Front-End Developer who makes magic happen!
          </p>

          <p className="bounce">
            A strength of mine is how fast I can learn new technologies and
            everything I know is from my own research.
          </p>

          <p className="bounce">
            Very comfortable using adobe lightroom and Premiere Pro and, I also
            am familiar with other adobe programs as well.
          </p>

          <p className="bounce">
            Advanced in HTML, CSS, and Javascript making web apps using several
            technologies like Reactjs, React-Native, GraphQL, Apollo, Nodejs,
            Mongo, Express, and Cordova to build websites and other features.
          </p>

          <p className="bounce">
            For more information visit my Linkedin or Instagram on the navbar to
            see more of my personal life and passion for programming!
          </p>
        </div>
      </main>
      <span className="tags bottom-tags">
        {" "}
        &nbsp;&nbsp;&nbsp;&lt;/body&gt;
        <br /> &lt;/html&gt;{" "}
      </span>
    </div>
  );
};
export default Skills;
