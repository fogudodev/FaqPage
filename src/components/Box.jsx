import '../assets/styles/Box.css'
import Star from '../assets/images/icon-star.svg'
import Accordion from './Accordion'

export default function Box() {
  return (
    <section className='box'>
      <div className='header-box'>
        <img src={Star} alt="Estela" />
        <h1 className='title'>FAQs</h1>
      </div>

      <Accordion title="What is Frontend Development">
        <p className='conteudo-acc'>The front-end refers to the visual and interactive part of a website or application that users directly interact with. This presentation layer includes the entire user interface (UI), the visual design, and functionality that users can see and use. Examples include menus, buttons, forms, and content. </p>
      </Accordion>

      <Accordion title="What Frontend Technologies">
        <p className='conteudo-acc'>
          <ul style={{marginLeft: 15}}>
            <li>HTML (HyperText Markup Language)</li>
            <li>CSS (Cascading Style Sheets)</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Angular</li>
          </ul>
        </p>
      </Accordion>

      <Accordion title="Why Frontend is Important?">
        <p className='conteudo-acc'>Why Front-end is important. Front-end is important as it connects two crucial areas: the website design (vision, look, feel, personality of the site) and the back-end development (the working pieces, content, management areas, and dynamically-driven data of the site).</p>
      </Accordion>

    </section>
  )
}
