import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './styles/home.css';
// import useTypewriter from 'react-typewriter-hook';
import ScrollAnimation from 'react-animate-on-scroll';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import homeImage from './images/home/home.png';
import mycv from './file/PhuocAn_CV.pdf';

//Update wordsDisplay data
// const wordsDisplay = [
//   'Hello world',
//   'I`m a mobile developer',
//   'Nice to meet you'
// ];
// let index = 0;

function Home() {
  // const [displayName, setDisplayName] = useState('Welcome to my webpage');
  // const intervalRef = useRef({});
  // const name = useTypewriter(displayName);
  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     index = index > wordsDisplay.length ? 0 : ++index;
  //     setDisplayName(wordsDisplay[index]);
  //   }, 5000);
  //   return function clear() {
  //     clearInterval(intervalRef.current);
  //   };
  // }, [displayName]);

  return (
    <section className='section home' id='home'>
      <Row>
        <Col lg={6} className='home-col'>
          <ScrollAnimation animateIn='animate__backInLeft'>
            <h2>Hello, my name is</h2>
            <h1>An</h1>
            {/* <p>
              and <span>{name}</span>
            </p> */}
            <p>
              <span img='My CV' /> 👇👇👇 Pick me 👇👇👇
            </p>
            <Button
              className='button-home'
              variant='dark'
              size='lg'
              target='_blank'
              href={mycv}
              download>
              <PictureAsPdfIcon fontSize='large' />
              My CV
            </Button>
          </ScrollAnimation>
        </Col>
        <Col lg={6}>
          <img className='image-home' src={homeImage} alt='homeImage' />
        </Col>
      </Row>
    </section>
  );
}

export default Home;
