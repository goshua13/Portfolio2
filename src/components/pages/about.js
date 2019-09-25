import React, {useEffect} from "react";

const About = () => {
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
    <div className="about">
      <span className="tags top-tags" aria-hidden="true">
        &nbsp;&nbsp;&nbsp;&lt;body&gt;
      </span>
      <main>
        <div class='h1_tags'><h1 className="bruh bounce">About Me!</h1></div>

        <div className="paragraphs">
          <p className="bounce">
            Hi, I'm a Web developer and I am a Front-end developer who uses
            HTML, CSS and Several Javascript libraries to create sexy websites. 
            I also use React-Native to build hybrid applications.
          </p>
          <p className="bounce">
            In high-school I acquired my passion for web and app development
            in a 9 week bootcamp through Bottega.
          </p>
          <p className="bounce">
            2016 - I did code to success which was a bootcamp for web
            development. I was with a class of 30 students and we worked
            together on projects to complete a different projects.
          </p>
          <p className="bounce">
            2016 - 2018: I served in Colombia for two years helping the people
            better their lives while serving in many leadership and
            administrative positions
          </p>
          <p className="bounce">
            2018 - I worked for a Marketing Agency called Imagine Tech. and helped their web development 
            team create custom websites for their clients.
          </p>
          <p className="bounce">
            2019 - (May 2019) - I worked as an Intern at BlueRnd working in Reactjs and created websites using Redux. I 
            also made protoype applications with Cordova that allowed us to use the same code base for 
            Web, IOS, and Android. 
          </p>
          <p className="bounce">
            2019 (Present) - I Worked as a Front-end developer at UVU leading front-end projects with clients and performing QA 
            on products with userbases measured in the thousands.
          </p>
          <p className="bounce">
            Extra - I am a skilled communicator with fellow developers and non-technical clients alike. I 
            live in Utah and, I am fluent in Spanish and intermediate in French!
          </p>
        </div>
      </main>
      <span className="tags bottom-tags">
        
        &nbsp;&nbsp;&nbsp;&lt;/body&gt;
        <br /> &lt;/html&gt;
      </span>
    </div>
  );
};

export default About;