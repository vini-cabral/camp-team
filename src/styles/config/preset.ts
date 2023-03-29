import { createGlobalStyle } from "styled-components";

const PresetStyle = createGlobalStyle<{ isRead: boolean}>`
  body {
    opacity: ${({ isRead }) => (isRead ? 1 : 0)};
    overflow: ${({ isRead }) => (isRead ? "auto" : "hidden")};
    background-color: ${({ theme, isRead }) =>
      isRead ? theme.colors.background01 : "transparent"};
  }
`;

export default PresetStyle;
