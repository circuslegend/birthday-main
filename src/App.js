import './styles/App.css';
import {Carousel} from './Components/Carousel.jsx';
import Section from './Components/Section.jsx';
import video1 from './Vids/dasha.mp4';
import video5 from './Vids/zlata.mp4';
import video6 from './Vids/varya1.mp4';
import video4 from './Vids/mark.mp4';
import video2 from './Vids/nastya.mp4';
import video7 from './Vids/illia.mp4';
import video3 from './Vids/misha.mp4';
import { FaChevronDown} from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import { HashLink} from 'react-router-hash-link';
import ScrollAnimation from 'react-animate-on-scroll';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { TypeAnimation } from 'react-type-animation';
import MovingText from 'react-moving-text'
import 'animate.css';

function App() {

  let video11='https://media.w3.org/2010/05/sintel/trailer_hd.mp4';
  return (
    <div className="App">
      <div className="Start">
       <div className="baloons"> 
       <p class="type">
        <TypeAnimation
          sequence={[
          'C Днем рождения,', // Types 'One'
          1000 ,      
      ]}
      className="typingText"
      cursor={false}
      repeat={0}
      style={{ fontSize: '2rem', textAlign:'center' }}
    /></p><p class="type">
    <MovingText
     type="pulse"
     duration="2000ms"
     delay="9.5s"
     direction="normal"
     timing="ease-in-out"
     iteration="1"
     fillMode="both">
      <TypeAnimation
          sequence={[
          "",
          1500,
          "Cолнце",
          700,
          "Зайка",
          700,
          "Чудо",
          700,
          "Милая",
          700,
          "Умница",
          700,
          "Ника!",
      ]}
      className="typingText"
      cursor={true}
      repeat={0}
      style={{ fontSize: '2rem', textAlign:'center' }}
    />
    </MovingText></p>
       </div>
       <div className="btn">
       <MovingText
          type="flash"
          duration="5000ms"
          delay="9.5s"
          direction="normal"
          timing="ease"
          iteration="infinite"
          fillMode="both">
          <AnchorLink href='#things'><FaChevronDown></FaChevronDown></AnchorLink>
          </MovingText>
       </div>
      </div>
      <section id="things" className='car'>
      <ScrollAnimation animateIn="animate__fadeIn" duration={3}>
          <Carousel id="carousel">
            <div className='item'>
              <Section name={'Даша'} smile={`(｡◕‿◕｡)`} vidOp={video1} id={1} 
              text={`Как я уже сказала в видео, желаю тебе быть счастливой в твоей жизни. От себя, от тех кто тебя окружает, и что ... Улыбайся чаще)`}/>
            </div>
            <div className='item'>
              <Section name={'Настя'} smile={`(´･ᴗ･ )`} vidOp={video2} id={2} 
              text={`люби себя, люби своих близких, будь любима и счастлива!!!!`}/>
            </div>
            <div className='item'>
              <Section name={'Миша'} smile={`:3`} vidOp={video3} id={3} 
              text={`Из всех сперматозоидов своего отца ты оказалась быстрее всех.
              Продолжай в том же духе!`}/>
            </div>
            <div className='item'>
              <Section name={'Марк'} smile={`(•◡•)`} vidOp={video4} id={4} 
              text={`молодец что решилась на стрижку , тебе идет)`}/>
            </div>
            <div className='item'>
              <Section name={'Злата'} smile={`(￣︶￣)`} vidOp={video5} id={5} 
              text={`хорошо кушай(особенно хорни помело) и не забывай КАК ОН ЕГО СЛОВИЛ`}/>
            </div>
            <div className='item'>
              <Section name={'Варя'} smile={`(ღ˘⌣˘ღ) `} vidOp={video6} id={6} 
              text={`обычный Детективчик`}/>
            </div>
            <div className='item'>
              <Section name={'Илья'} smile={` ;)`} vidOp={video7} id={7} 
              text={`оставайся такой же невероятной и таким же МОЦ ))`}/>
            </div>
        </Carousel>
        </ScrollAnimation>
      </section>

    </div> 
  );

}

export default App;
