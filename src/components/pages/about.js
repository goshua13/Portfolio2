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
      const sentences = sentence.innerHTML.split(' ').map(word => word.replace(`${word}`, `<span>${word}</span>`)).join(' ')
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
            Hi, I'm a Front-end developer who uses 
            HTML, CSS and Several Javascript libraries to create modern websites. 
            I also use React-Native to build hybrid applications.
          </p>
          <p className="bounce">
            In High-school I acquired my passion for Web and App development
            in a 9 week bootcamp through Bottega.
          </p>
          <p className="bounce">
            2016 - I did code to success which was a bootcamp for web development. I was with a class of over 30 students and we worked together to complete a different projects.
          </p>
          <p className="bounce">
          2016 - 2018: I was in Colombia for two years serving the people there. I also served in many leadership and administrative positions.
          </p>
          <p className="bounce">
            2018 - I worked for a Marketing Agency called Imagine Tech. and helped their web development team create custom websites for their clients.
          </p>
          <p className="bounce">
        2019 - I worked as an Intern at BlueRnd and worked on several applications from scratch. We used a lot of React with Redux and Cordova to make applications that allowed us to have the same code base for IOS, Android, and Web.
          </p>
          <p className="bounce">
           2019 - I Worked as a Front-end developer at UVU leading front-end projects with clients and performing QA on products with userbases measured in the thousands.
          </p>
          <p className="bounce">
           2019 - (present) As a Software developer for Bellalash I worked on creating an LMS known as Skillsuite from the ground up.
          </p>
          <p className="bounce">
            Extra - I am a skilled communicator with fellow developers and non-technical clients alike. I live in Utah and I am fluent in Spanish and intermediate in French.
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
