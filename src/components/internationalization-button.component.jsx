import React,{Component} from "react";


export class InternationalizationButtonComponent extends Component{

    constructor(){
        super();
    }

    render() {
        const {t}=this.props;
        return (
            <div>
                
                <a
                    aria-pressed={true}
                    activate={"button"}
                    >
                    <span
                        className="flag-icon flag-icon-gb"
                        style={{"borderRadius":"30%",marginLeft:"5px","width":"30px","height":"30px"}}
                    />
                </a>
            </div>
        )
    }
}
