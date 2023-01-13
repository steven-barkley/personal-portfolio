import { Col, Container, Tab, Row, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/Grammarhub.png"
import projImg2 from "../assets/img/WiltonManors.png"
import projImg3 from "../assets/img/Menuqu.png"

export const Projects = () => {
    const links = [
        {
            href1: "https://www.figma.com/proto/j5cHrs7RoPCBudOmF7Fdk6/wiltonmanors.info?page-id=0%3A1&node-id=16%3A623&starting-point-node-id=16%3A623"
        },
        {
            href1: "https://www.figma.com/proto/lwvdFmmfNeEGAmNCbpiN5x/Grammarhub-Prototype-%2F-Wireframes?page-id=15%3A2&node-id=15%3A3&starting-point-node-id=15%3A3&scaling=scale-down"
        },
        {
            href1: "https://www.figma.com/proto/8CeLZALMAmzfl5Tb57lcID/Menuqu-Fidelities?page-id=29%3A2&node-id=138%3A362&starting-point-node-id=31%3A94&show-proto-sidebar=1&scaling=scale-down"
        },
    ]

    const projects = [
        {
            title: "GrammarHub.org",
            description: "Design",
            imgUrl: projImg1,

        },
        {
            title: "Wilton Manors App",
            description: "Design",
            imgUrl: projImg2,

        },
        {
            title: "Menuqu",
            description: "Design",
            imgUrl: projImg3,

        }
    ]

    /*     const webProjects = [
            {},
            {},
            {}
        ]
    
        const mixedProjects = [
            {},
            {},
            {}
        ] */
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Meaningful projects I have completed over the last five years.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">User Experience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Web Development</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Mixed Reality</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map( ( projects, index ) => {
                                                return (
                                                    <ProjectCard
                                                        key={ index }
                                                        { ...projects }
                                                    />
                                                )
                                            } )
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">       <Row>
                                    {
                                        projects.map( ( projects, index ) => {
                                            return (
                                                <ProjectCard
                                                    key={ index }
                                                    { ...projects }
                                                />
                                            )
                                        } )
                                    }
                                </Row></Tab.Pane>
                                <Tab.Pane eventKey="third">       <Row>
                                    {
                                        projects.map( ( projects, index ) => {
                                            return (
                                                <ProjectCard
                                                    key={ index }
                                                    { ...projects }
                                                />
                                            )
                                        } )
                                    }
                                </Row></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={ colorSharp2 } alt="Temp Color Text" />
        </section>
    )
}