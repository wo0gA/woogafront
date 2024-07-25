import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <Wrapper>
        Main
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;

    border: 1px solid black;
`;