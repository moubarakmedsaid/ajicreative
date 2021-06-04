import React, {Component} from "react";
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Navbar,
    Nav,
    Container,
    Media,
    Button
} from "reactstrap";
import {Link, Redirect} from 'react-router-dom';
import {InternationalizationButtonComponent} from "./internationalization-button.component";


export class NavbarComponent extends Component{

    constructor(){
        super();
    }

    render() {

        return (
            <>
                <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
                    <Container fluid>
                    <Button className="btn-actuality"
                            style={{backgroundColor:"#63CFD9"}}>
                                Actuatilé
                            </Button>
                        <Link
                            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
                            to="/"
                        ></Link>
                        
                        <Nav className="align-items-center d-none d-md-flex" navbar>
                            
                            <UncontrolledDropdown nav>
                                <DropdownToggle className="pr-0" nav>
                                    <Media className="align-items-center">
                                        <span className="avatar avatar-sm rounded-circle">
                                            <span className="ni ni-circle-08" />
                                        </span>
                                    <Media className="ml-2 d-none d-lg-block">
                                        <span className="mb-0 text-sm font-weight-bold" style={{color:"black"}}>
                                            nom et prenom
                                        </span>
                                    </Media>
                                    </Media>
                                </DropdownToggle>
                            </UncontrolledDropdown>
                            <InternationalizationButtonComponent/>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}
