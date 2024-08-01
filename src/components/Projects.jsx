import React from 'react';
import { Container, Row, Col, Nav, Tab, Card } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import realEstate from '../assets/img/real_estate.png';
import chatSite from '../assets/img/chat-site.png';
import skinCare from '../assets/img/skincare.png';
import cropCare from '../assets/img/crop-care.png';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-bootstrap-icons';

export default function Projects() {
    const projects = [
        {
            title: "Chambers",
            description: "A comprehensive real estate marketplace for buying, selling, and leasing commercial properties. Crafted using React.js and made responsive, accessible web pages for seamless navigation. Gained project management experience and utilized React Router DOM for nested routing.",
            imgUrl: realEstate,
            status: "Done",
            linkTo: "https://polite-dango-285329.netlify.app/"
        },
        {
            title: "Chat Site",
            description: "Chat site built using React.js and Node.js wherein user can sign up with a username and start chat with the online users.Facilitated real-time communication, enabling users to connect, exchange messages, and engage in conversations. Uses socket.io to establish connections.",
            imgUrl: chatSite,
            status: "Done",
            linkTo: "https://tangerine-biscochitos-a7c6e4.netlify.app/"

        },
        {
            title: "Skincare Recommender",
            description: "Designed a user-friendly iOS frontend for a skincare app, focusing on intuitive navigation and seamless interaction. Created captivating product showcases with high-quality visuals and SwiftUI animations. Enabled personalized skincare routines and progress tracking using Core Data",
            imgUrl: skinCare,
            status: "Done",
            linkTo: "/"
        },
        {
            title: "Crop Care Tech - Ecommerce",
            description: "It is an e-commerce site for farming equipment by Utilizing React.js, Bootstrap, and custom CSS with animations for visual appeal and interactivity as well as ensuring mobile responsiveness. Implemented secure sign-up and sign-in functionalities for personalized user experiences. Created and managed custom APIs with Node.js for efficient data handling.",
            imgUrl: cropCare,
            status: "In Progress",
            linkTo: "/"
        },
    ];

    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p>Here are some of my projects</p>
                                </div>}
                        </TrackVisibility>

                        



                        {/* <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                            {
                                projects.map((project, index) => {
                                    return (
                                        <div
                                            className={`md:flex even:md:translate-y-[7rem]  p-0.25 rounded-[2.5rem] bg-conic-gradient }`}
                                            key={index}
                                        >
                                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                                <div className="absolute top-0 left-0 max-w-full">
                                                    <img
                                                        className="w-full"
                                                        src={project.imgUrl}
                                                        width={550}
                                                        height={550}
                                                        alt="Grid"
                                                    />
                                                </div>
                                                <div className="relative z-1">
                                                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                                        {/* <Tagline>{item.date}</Tagline> 
                                                        <h3>DATE</h3>

                                                        <div className="flex items-center px-4  bg-n-1 rounded text-n-8">
                                                            <img
                                                                className="mr-2.5"
                                                                src={""}
                                                                width={16}
                                                                height={16}
                                                                alt="status"
                                                            />
                                                            <div className="tagline">"status"</div>
                                                        </div>
                                                    </div>

                                                    <div className=" mb-5 -my-10">
                                                        <img
                                                            className="w-5/6"
                                                            src={""}
                                                            width={400}
                                                            height={300}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <Link to="/">
                                                        <h4 className="h4 mb-4 border-b-2 border-n-10 w-fit">
                                                            {project.title}
                                                        </h4>
                                                    </Link>
                                                    <p className="body-2 text-n-4">item.text</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div> */}


                        {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
                            <Nav.Item>
                                <Nav.Link eventKey="first">Fullstack</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">iOS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Java</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return(
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container> */}
                    </Col>

                </Row>
                <Row xs={1} md={2} className="g-5 pb-5 relative ">
      {projects.map((project, idx) => (
        <Col key={idx} className='custom-translate bg-conic-gradient'>
          <Card>
            <div className='black-bg'>
                <div className='status'>{project.status}</div>
            <Card.Img variant="top" src={project.imgUrl} />
            <Card.Body>
              <Card.Title><a href={project.linkTo}>{project.title}</a></Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
            </Card.Body>
            </div>
          </Card>
        </Col>
      ))}
    </Row>

    <div className='more-project-btn'>
        <button className='vvd' onClick={()=>console.log("Clicked")}><a href='https://github.com/sheen123atti'>More Projects</a></button>
    </div>
            </Container>
            <img className='background-image-right' src={colorSharp2} />
        </section>
    )
}