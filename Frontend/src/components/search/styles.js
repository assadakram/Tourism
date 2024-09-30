import styled, { keyframes } from 'styled-components';

const focusAnimation = keyframes`
  from {
    width: 100%;
    border-radius: 50%;
    padding-right: 40px;
    padding-left: 0px;
  }
  to {
    width: 300px;
    border-radius: 24px;
    padding-right: 40px;
    padding-left: 12px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 200px; /* Adjust width as needed */
`;

export const SearchInput = styled.input`
  width: 0px;
  padding: 12px 40px 12px 0px;
  border: 1px solid #ccc;
  border-radius: 24px;
  transition: width 0.3s ease-in-out, padding 0.3s ease-in-out;
  outline: none;
  
  &:focus {
    width: 300px;
    padding-left: 12px;
  }
`;

export const SearchIconWrapper = styled.div`
position: absolute;
top: 50%;
transform: translateY(-40%);
right: 8px;
pointer-events: none;
`

