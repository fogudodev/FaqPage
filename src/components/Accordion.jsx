import { useState } from 'react';
import More from '../assets/images/icon-plus.svg'
import Less from '../assets/images/icon-minus.svg'
import '../assets/styles/Accordion.css'


const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <section  className='container-acc'>
      <h4>{title}</h4>
      <a className='btn-acc' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <img src={Less} /> : <img src={More} />}
      </a>
      </section>
      {isOpen && <div className='content-acc'>{children}</div>}
    </div>
  );
};

export default Accordion;