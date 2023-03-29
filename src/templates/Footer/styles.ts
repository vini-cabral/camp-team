import styled from "styled-components";
import { shade } from "polished";

export const StyledFooter = styled.footer.attrs(({ className }) => ({
  className,
}))`
  background-color: ${({ theme }) => shade(0.4, theme.stdColors.aux)};
  & * {
    color: ${({ theme }) => theme.stdColors.light};
  }
  a,
  cite {
    color: ${({ theme }) => theme.stdColors.light};
    text-decoration: underline;
  }
  a:hover,
  cite:hover {
    color: ${({ theme }) => theme.stdColors.secondary};
    transition-property: color;
    transition-duration: ${({ theme }) => theme.transitionDuration};
  }
  em * {
    color: ${({ theme }) => theme.stdColors.primary};
  }
`;
