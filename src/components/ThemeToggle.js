import React from 'react';
import styled from 'styled-components';

const ToggleContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Button = styled.button`
  padding: 10px;
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

const ThemeToggle = ({ toggleTheme }) => (
  <ToggleContainer>
    <Button onClick={toggleTheme}>Toggle Theme</Button>
  </ToggleContainer>
);

export default ThemeToggle;