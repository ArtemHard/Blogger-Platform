import React from 'react'
import styled from 'styled-components'

const WrapperHeader = styled.header`
width: 100%;
height: 60px;
background: #FCFBFB;
box-shadow: 0px 5px 20px rgba(29, 33, 38, 0.03), 0px 1px 2px rgba(29, 33, 38, 0.1);
display: flex;
align-items: center;
justify-content: flex-start;
`

const Title = styled.h1`
padding-left: 3%;
    /* H1 / Neutral Dark+60 */

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 26px;
line-height: 36px;
/* identical to box height, or 138% */


/* Neutral Dark / -60 */

color: #1A1718;
`

export const Header = () => {
  return (
    <WrapperHeader>
        <Title>Blogger Platform</Title>
    </WrapperHeader>
  )
}
