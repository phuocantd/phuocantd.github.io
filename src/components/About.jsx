import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import './styles/about.css';
import ScrollAnimation from 'react-animate-on-scroll';
import aboutImage from './images/about/about.png';

function About() {
  return (
    <div className='section about' id='about'>
      <h1>About</h1>
      <Row className='about-row'>
        <Col lg={4} className='about-col text-center'>
          <ScrollAnimation
            animateIn='animate__bounceInLeft'
            // animateOut="animate__bounceOutLeft"
          >
            <Image
              className='about-image'
              src={aboutImage}
              thumbnail
              alt='aboutImage'
            />
          </ScrollAnimation>
        </Col>
        <Col lg={8} className='about-row'>
          <ScrollAnimation
            animateIn='animate__bounceInRight'
            // animateOut="animate__bounceOutRight"
          >
            <h3>About me</h3>
            <p>
              I am a Mobile developer who can create, develop and upload app to
              store. I always want to change myself to have new experiences in
              life and work. I hope to learn new things from everyone.
              <br />I have experience with React-Native. I used to build
              application domains such as Medical, Fitness & Healthcare and
              dating app
            </p>
          </ScrollAnimation>
        </Col>
      </Row>
    </div>
  );
}

export default About;
