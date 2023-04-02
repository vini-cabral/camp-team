import { lighten, shade } from "polished";
import styled from "styled-components";

export const StyledDiv = styled.div.attrs(({ className }) => ({
  className,
}))`
  background-color: ${({ theme }) => lighten(0.5, theme.stdColors.danger)};
  border-color: ${({ theme }) => shade(0.35, theme.stdColors.danger)};
  & * {
    color: ${({ theme }) => shade(0.6, theme.stdColors.danger)};
  }
`;
