import React from "react";

// Import styles
import { 
Container,
InputStyled
}from "./styles";
//-------------------------------

interface InputProps {
    label: string;
    name: string;
    value: string;
    onChange: Function;
}

const Input = (props: InputProps) => {

    return (

        <Container>
            <label>{props.label}</label>
            <InputStyled
            required
            name={props.name}
            value={props.value}
            onChange={ev => {
                props.onChange((prev: any) => ({
                    ...prev, [props.name]: ev.target.value 
                }))
            }} />
        </Container>
    )
};

export default Input;