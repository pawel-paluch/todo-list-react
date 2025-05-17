import styled from "styled-components";

export default styled.button`
  background: transparent;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  margin: 0 0 0 20px;
  transition: filter 0.3s;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
  }
`;