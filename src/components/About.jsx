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
              Mobile developer with more than 2 years of experience with strong
              focus on React Native. I have experience with creating,
              developing, and publishing app to store. I used to build
              application domains such as Dating app, Education, Medical,
              Fitness & Healthcare and apps for internal organizations.
            </p>
          </ScrollAnimation>
        </Col>
      </Row>
    </div>
  );
}

export default About;
