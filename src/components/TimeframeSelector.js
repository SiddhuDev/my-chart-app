import React from 'react';
import styled from 'styled-components';

const SelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  &:hover {
    background-color: #45a049;
  }
`;

const TimeframeSelector = ({ onSelect }) => (
  <SelectorContainer>
    <Button onClick={() => onSelect('daily')}>Daily</Button>
    <Button onClick={() => onSelect('weekly')}>Weekly</Button>
    <Button onClick={() => onSelect('monthly')}>Monthly</Button>
  </SelectorContainer>
);

export default TimeframeSelector;