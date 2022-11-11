import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/contact.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Contact() {
  return (
    <section className='section contact' id='contact'>
      <Container>
        <Row>
          <Col>
            <h1>Contact</h1>
            <a
              href='https://github.com/phuocantd'
              target={'_blank'}
              rel='noreferrer'>
              <GitHubIcon fontSize='large' />
            </a>
            <a
              href='https://www.linkedin.com/in/phuocantd/'
              target={'_blank'}
              rel='noreferrer'>
              <LinkedInIcon fontSize='large' />
            </a>
            <a href='mailto:phuocantd@gmail.com'>
              <EmailIcon fontSize='large' color='#fff' />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
