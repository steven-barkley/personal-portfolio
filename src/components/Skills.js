import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import searchEngine from "../assets/img/SEO2022Training-1.png";
import reactCert from "../assets/img/React_Developer_ZTM-1.png";
import mixedReality from "../assets/img/courseraGoogleDayDream.png";
import cloud from "../assets/img/aws-certified-cloud-practitioner.png";
import design from "../assets/img/google-ux-design-certificate.2.png";
import colorSharp from "../assets/img/color-sharp.png";


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
                                    <img src={ searchEngine } alt="User Experience Skill" />
                                    <h5>Search Engine Optimization</h5>
                                </div>
                                <div className="item">
                                    <img src={ reactCert } alt=" web design" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={ mixedReality } alt=" digital" />
                                    <h5>Mixed Reality</h5>
                                </div>
                                <div className="item cloudStyle">
                                    <img src={ cloud } alt=" Amazon Web Services Badge" />
                                    <h5>Amazon Web Services</h5>
                                </div>
                                <div className="item cloudStyle">
                                    <img src={ design } alt=" Google User Experience Badge" />
                                    <h5>Google User Experience Design</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={ colorSharp } alt="XUS" />
        </section>
    )
}