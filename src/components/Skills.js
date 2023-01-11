import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Badges
                            </h2>
                            <p>Below are my badges and professional credentials earned<br></br>These are most effective for Solutions Architect roles</p>
                            <Carousel responsive={ responsive } infinite={ true } className="skill-slider">
                                <div className="item">
                                    <img src={ meter1 } alt="User Experience Skill" />
                                    <h5>User Experience</h5>
                                </div>
                                <div className="item">
                                    <img src={ meter2 } alt=" web design" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={ meter3 } alt=" digital" />
                                    <h5>Mixed Reality</h5>
                                </div>
                                <div className="item">
                                    <img src={ meter1 } alt=" seo" />
                                    <h5>Amazon Web Services</h5>
                                </div>
                                <div data-iframe-width="100" data-iframe-height="180" data-share-badge-id="944835ab-2136-4902-9eff-9c618a2a5ea7" data-share-badge-host="https://www.credly.com"></div><script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={ colorSharp } alt="XUS" />
        </section>
    )
}