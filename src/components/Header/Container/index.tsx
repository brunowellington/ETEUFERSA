import React from 'react';
import styled from 'styled-components';
import TopBar from '../TopBar';
import Banner, { BannerProps } from '../Banner';
import Retangle from '../../../assets/images/Rectangle.png';

const MainHeader = styled.header`
    width: 100%;
    height: 382px;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${Retangle});
`

const Header: React.FC<BannerProps> =  (props) => {
    return(
        <MainHeader>
            {props.topBar &&
                <TopBar /> 
            }
            <Banner {...props} />          
        </MainHeader>
    );
}

export default Header;