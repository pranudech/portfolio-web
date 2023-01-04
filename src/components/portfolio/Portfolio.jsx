import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio_container'>
          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src='assets/portfolio1.jpg' alt='1'/>
            </div>
            <h3>This is a portfolio item title1</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/' className='btn' target='_blank'>github</a>
              <a href='https://tailwindcss.com/' className='btn btn-primary' target='_blank'>Live Demo </a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src='assets/portfolio2.jpg' alt='2'/>
            </div>
            <h3>This is a portfolio item title2</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/' className='btn' target='_blank'>github</a>
              <a href='https://tailwindcss.com/' className='btn btn-primary' target='_blank'>Live Demo </a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src='assets/portfolio3.jpg' alt='3'/>
            </div>
            <h3>This is a portfolio item title3</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/' className='btn' target='_blank'>github</a>
              <a href='https://tailwindcss.com/' className='btn btn-primary' target='_blank'>Live Demo </a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src='assets/portfolio4.jpg' alt='4'/>
            </div>
            <h3>This is a portfolio item title4</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/' className='btn' target='_blank'>github</a>
              <a href='https://tailwindcss.com/' className='btn btn-primary' target='_blank'>Live Demo </a>
            </div>
          </article>

          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src='assets/portfolio5.png' alt='5'/>
            </div>
            <h3>This is a portfolio item title5</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/' className='btn' target='_blank'>github</a>
              <a href='https://tailwindcss.com/' className='btn btn-primary' target='_blank'>Live Demo </a>
            </div>
          </article>


          <article className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src='assets/portfolio6.jpg' alt='6'/>
            </div>
            <h3>This is a portfolio item title6</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/' className='btn' target='_blank'>github</a>
              <a href='https://tailwindcss.com/' className='btn btn-primary' target='_blank'>Live Demo </a>
            </div>
          </article>

        </div>

    </section>
  )
}

export default Portfolio