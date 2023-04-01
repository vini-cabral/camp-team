import styled from "styled-components";
import { lighten, shade } from "polished";

export const StyledCard = styled.div.attrs(({ className }) => ({
  className,
}))`
  & {
    border-color: ${({ theme }) =>
      theme.name === "dark"
        ? lighten(0.07, theme.stdColors.dark)
        : shade(0.07, theme.stdColors.light)};
  }
  &:hover {
    background-color: ${({ theme }) =>
      theme.name === "dark"
        ? lighten(0.05, theme.stdColors.dark)
        : lighten(0.05, theme.stdColors.light)};
  }
  h3,
  & > span {
    color: ${({ theme }) =>
      theme.name === "dark"
        ? lighten(0.5, theme.stdColors.aux)
        : shade(0.4, theme.stdColors.aux)};
  }
`;
