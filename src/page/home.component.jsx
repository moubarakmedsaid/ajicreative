import React, {Component} from 'react';
import {Form , Button, FormGroup,Label, Input } from "reactstrap";
import logoAjiCreative from "../assets/logo/logoAjiCreative.png";

export class HomePageComponenet extends React.Component{

    render(){
        return(
            <>
            <div>
               <img src= {logoAjiCreative}/>
            </div>            
                <Form>
                    <h3><strong>Connexion</strong></h3>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        <p>Vous n'avez pas encore de compte ? <a href="./acces-code">Créez-en un !</a> </p>
                        <Button color="primary">
                            Suivant 
                        </Button>
                    </FormGroup>
  
                </Form>
        </>
        )
    }
}

