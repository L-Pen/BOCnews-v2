import {Navbar, Container} from 'react-bootstrap'
import image from "../../images/BOC_logo_text.png"
import './header.css'
const NavigationBar = () => {
    return (
        <>
        <Navbar className="test">
        <Container>
            <Navbar.Brand href="#home" style={{color:"white",fontSize:"16px"}}>
                <img
                alt=""
                src={image}
                width="201"
                height="59"
                className="boclogo d-inline-block align-top"
                />{''}
            </Navbar.Brand>
        </Container>
        </Navbar>
        </>
       
    )
}
export default NavigationBar