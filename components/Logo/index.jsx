import styled from 'styled-components'
import React from "react";
import Pic from '../../public/assets/aa.jpg'
import Image from 'next/image'

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
    width: 29px;
    height: 29px;

    img {
        width: 100%;
        height: 100%;
    }
`;


const LogoText = styled.h2`
    font-size: 18px;
    margin: 0;
    margin-left: 4px;
    color: #222;
    font-weight: 500;
`;

export function Logo(props) {
    return <LogoWrapper>
        <LogoImg><Image src={Pic} alt="logoimg" /></LogoImg>
        <LogoText>CliqonRefraich</LogoText>
    </LogoWrapper>
} 