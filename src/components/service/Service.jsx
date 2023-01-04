import React from 'react';
import './service.css';
import { BiCheck } from 'react-icons/bi';

const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className='container service__container'>

        {/* 1 */}
        <article className='service'>
          <div className='service__header'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Portfolio Website Tutorial From Scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Portfolio Website Tutorial From Scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Portfolio Website Tutorial From Scratch</p>
            </li>
          </ul>
        </article>
        {/* 2 */}
        <article className='service'>
          <div className='service__header'>
            <h3>Developer</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Portfolio Website Tutorial From Scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Portfolio Website Tutorial From Scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Portfolio Website Tutorial From Scratch</p>
            </li>
          </ul>
        </article>

        {/* 3 */}
        <article className='service'>
          <div className='service__header'>
            <h3>Freelance</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Portfolio Website Tutorial From Scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Portfolio Website Tutorial From Scratch</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Portfolio Website Tutorial From Scratch</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Service