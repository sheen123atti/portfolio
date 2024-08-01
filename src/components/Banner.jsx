import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [];
    // const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 2000;


    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return ()=>{clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText  = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }

        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible}) => 
                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className='tagline'>Welcome to My Artistry Hub</span>
                        <h1>{`Hi I'm Sheen `}<span className='wrap'>{text}</span></h1>
                        <p>A place where creativity meets craftsmanship and innovation shapes every project.
                        As a passionate web developer with a creative mind and a strong ability to solve problems, I am dedicated to transforming ideas into functional, beautiful web applications.</p>
                        <button onClick={()=>console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </div>
                    }
                    </TrackVisibility> 
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='header img'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
