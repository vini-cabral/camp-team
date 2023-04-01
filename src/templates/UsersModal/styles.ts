import { lighten, shade } from "polished";
import styled from "styled-components";

export const StyledUserInfo = styled.div.attrs(({ className }) => ({
  className,
}))`
  background-color: ${({ theme }) => theme.colors.background01};
  & h3,
  & h4,
  & h5 {
    color: ${({ theme }) =>
      theme.name === "dark"
        ? lighten(0.3, theme.stdColors.aux)
        : shade(0.4, theme.stdColors.aux)};
  }
`;
