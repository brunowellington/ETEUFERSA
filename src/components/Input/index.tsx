import React from "react";
import styled from "styled-components";
interface InputProps {
    err?: boolean
}
const InputData = styled.input`
    width: 130px;
    height: 35px;
    border: ${(props:InputProps ) => props.err ? "1px solid #828282" : "1px solid #e00000"};
    text-align: center;
    outline: none;
    border-radius: 8px;
`

function Input(props:any){
    function setValue(value:any){
        props.func(value)
    }
    return(
        <InputData type={props.type} value={props.value} err={props.err} onChange={e => setValue(e.target.value)} />
    )
}

export default Input