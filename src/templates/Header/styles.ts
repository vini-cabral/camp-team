import styled from "styled-components";

export const StyledHeader = styled.header.attrs(({ className }) => ({
  className,
}))`
  background-color: ${({ theme }) => theme.stdColors.primary};
  transition-duration: ${({ theme }) => theme.transitionDuration};
  transition-property: background-color;
  strong span {
    color: ${({theme}) => theme.stdColors.secondary};
  }
  * {
    color: ${({ theme }) => theme.stdColors.light};
  }
`;
