import React from 'react';
import styled from 'styled-components';

const Container  = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 2.4rem;
    color: var(--branco);
`
const Description = styled.p`
    width: 450px;
    font-size: 20px;
    color: white;
`
export interface BannerProps{
    imageSrc?: boolean;
    title?: boolean;
    topBar?: boolean;
}
const Message: React.FC<BannerProps> = () => {
    return(
        <Container>
            <Title>Seja bem-vindo ao ETEUFERSA!
            </Title>
            <br />
            <Description>O pré-dimensionamento para uma estação de tratamento de esgoto, específica para o sistema australiano, nunca foi tão fácil!</Description>
        </Container>
    );
}
export default Message;