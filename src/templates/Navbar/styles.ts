import styled from "styled-components";

export const StyledLi = styled.li.attrs(({ key }) => ({ key }))`
  & a {
    transition-duration: ${({ theme }) => theme.transitionDuration};
    transition-property: color;
  }
  & a:hover {
    color: ${({ theme }) => theme.stdColors.secondary};
  }
`;
