import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
        Footer
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;

    border: 1px solid black;
`;