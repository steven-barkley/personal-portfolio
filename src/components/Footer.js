import { Container, Col, Row } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import logo from "../assets/img/logo2.svg"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={ 5 }>
                        <div className="logoRotateContainer">
                            <img src={ logo } alt="Personal Logo" className="logoRotate" />
                        </div>
                    </Col>
                    <Col sm={ 6 } className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/stevenbarkley/"><img src={ navIcon1 } alt="LinkedIn" /></a>
                            <a href="https://www.facebook.com/steven.r.barkley"><img src={ navIcon2 } alt="Facebook" /></a>
                            <a href="https://www.instagram.com/steven_barkley/"><img src={ navIcon3 } alt="Instagram" /></a>
                        </div>
                        <p>Copyright 2023</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}