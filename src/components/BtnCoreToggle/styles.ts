import styled from "styled-components";

export const StyledSpan = styled.span.attrs(({ className }) => ({
  className,
}))`
  & > * {
    transition-duration: ${({ theme }) => theme.transitionDuration};
    transition-property: opacity, transform;
  }
  &:hover svg > * {
    color: ${({ theme }) => theme.stdColors.secondary};
    transition-duration: ${({ theme }) => theme.transitionDuration};
    transition-property: color;
  }
`;
