import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getPopular } from '../test/test';

const TestPage = () => {
  useEffect(() => {
    getPopular();
  }, []);

  return (
    <Wrapper>
      TestPage
    </Wrapper>
  );
};

export default TestPage;

const Wrapper = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
