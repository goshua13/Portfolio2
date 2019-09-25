import React, {useEffect} from 'react'

const Home = () => {
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
    <div className='home-page'>
    <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
    <main>
      <div className='h1_tags'>
      <h1 className='bounce'>Hi,</h1>
      <h1 className='bounce'>I'm Josh,</h1>
      <h1 className='bounce'>And I'm A Developer</h1>
      </div>
      <h2>Front-End Developer / Javascript / Reactjs</h2>
      <form method="post" action="mailto:joshuaaragon11@gmail.com">
       <button className='flat-button' >CONTACT ME</button>
      </form>
    </main>
    <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br /> &lt;/html&gt; </span>
  </div>
  )
}

export default Home;
