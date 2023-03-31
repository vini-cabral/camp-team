import styled from "styled-components";
import { lighten, shade } from "polished";

export const StyledCard = styled.div`
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
  h3 {
    color: ${({ theme }) => lighten(0.2, theme.stdColors.aux)};
  }
`;
