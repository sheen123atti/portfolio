import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import mern from "../assets/img/mern.png";
import figma from "../assets/img/figma.png";
import ListGroup from 'react-bootstrap/ListGroup';
import html from "../assets/img/html.svg";
import javascript from "../assets/img/javascript.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import css from "../assets/img/css.svg";
import java from "../assets/img/java.svg";
import sql from "../assets/img/sql.svg";
import wordpress from "../assets/img/wordpress.svg";
import stars from "../assets/img/stars.svg";
import git from "../assets/img/git.svg";
import { MouseParallax } from 'react-just-parallax';
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse';


export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const ParallaxRef = useRef(null);

    return (
        <section className='skill' id='skills'>
            <Container>
                {/* <MouseParallaxContainer
                    className="skill-bx"
                    globalFactorX={0.1}
                    globalFactorY={0.1}
                    resetOnLeave
                    ref={ParallaxRef}
                >
                    <MouseParallaxChild
                        factorX={-0.3}
                        factorY={0.3}
                        style={{
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${stars})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            zIndex: 0
                        }}
                    /> */}

                    <div className='skill-bx' ref={ParallaxRef}>
                    <h2>Skills</h2>
                    <p>Below are my core competencies in web development, encompassing various languages, frameworks, and tools. Additionally, I am actively exploring additional skills to further enrich my expertise in this domain.</p>
                    <Row>
                        {/* <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={mern} alt='Image' />
                                <h5>Web Development</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt='Image' />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt='Image' />
                                <h5>Logo Design</h5>
                            </div>
                            <div className='item'>
                                <img src={meter1} alt='Image' />
                                <h5>iOS Development</h5>
                            </div>
                        </Carousel> */}
                        <Col>
                            <ListGroup>
                                <ListGroup.Item><img src={mern} alt='Image' />MERN Stack</ListGroup.Item>
                                <ListGroup.Item><img src={java} alt='Image' />Java</ListGroup.Item>
                                <ListGroup.Item><img src={javascript} alt='Image' />Javascript</ListGroup.Item>
                                <ListGroup.Item><img src={html} alt='Image' />HTML</ListGroup.Item>
                                <ListGroup.Item><img src={css} alt='Image' />CSS</ListGroup.Item>
                                <ListGroup.Item><img src={git} alt='Image' />GitHub</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup>
                                <ListGroup.Item><img src={sql} alt='Image' />SQL</ListGroup.Item>
                                <ListGroup.Item><img src={bootstrap} alt='Image' />Bootstrap</ListGroup.Item>
                                <ListGroup.Item><img src={wordpress} alt='Image' />Wordpress</ListGroup.Item>
                                <ListGroup.Item><img src={figma} alt='Image' className='figma' />Figma</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    <MouseParallax shouldResetPosition={true} lerpEase={0.05} strength={0.14} parallaxContainerRef={ParallaxRef} isAbsolutelyPositioned>
                        <img src={stars} alt='stars' style={{transform: "scale(1.1)", zIndex:"-4"}} />
                    </MouseParallax>
                    </div>

                {/* </MouseParallaxContainer> */}
            </Container>
            <img className='background-image-left' src={colorSharp} alt="Background Shape" />
        </section>
    )
}