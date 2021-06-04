import React, {Component} from 'react';
import { Redirect } from 'react-router';
import {Form , Button, FormGroup,Label, Input, Row, Col } from "reactstrap";
import logoAjiCreative from "../assets/logo/logoAjiCreative.png";
import NewsAPI from "newsapi"

export class AccesCodeComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            code:"",
            redirectTo:null,
            value: ''
        }
    }
    accesCode(){
        if(this.state.code==="01234567890"){
            return <Redirect to={this.state.redirectTo} />
        }
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }

      
    
    render(){

        return(
            <>
            <Row>
                <Col md="3">
                </Col>
                <Col md="6">
                    <div>
                    <img src= {logoAjiCreative}/>
                    </div>            
                    <Form>
                        <h3><strong>Code accès</strong></h3>
                        <FormGroup>
                            <Input type="email"
                                name="email" 
                                id="exampleEmail" 
                                placeholder="code accès communiqué par votre admin"
                            />
                            <Button color="primary">
                                Suivant 
                            </Button>
                        </FormGroup>
                    </Form>
                </Col>
                <Col md="3">
                    
                </Col>
                </Row>

        </>
        )
    }
}

