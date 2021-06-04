import React from 'react';
import {Form , Button, FormGroup,Label, Input } from "reactstrap";
import logoAjiCreative from "../assets/logo/logoAjiCreative.png";

export class InscriptionComponenet extends React.Component{

    render(){
        return(
            <>
            <div>
               <img src= {logoAjiCreative}/>
            </div>            
                <Form>
                    <h3><strong>Inscription</strong></h3>
                    <p>Nous avons besoin de quelques informations supplumentaire pour configurer votre compte</p>
                    <FormGroup>
                        <Input type="text" name="prenom"  placeholder="Prénom" />
                        <Input type="text" name="nom" placeholder="Nom" />
                        <Input type="email" name="email" id="exampleEmail" placeholder="E-mail" />
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

