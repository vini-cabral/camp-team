import { createGlobalStyle } from "styled-components";

const PresetStyle = createGlobalStyle<{ isRead: boolean }>`
  body {
    opacity: ${({ isRead }) => (isRead ? 1 : 0)};
    background-color: ${({ theme, isRead }) =>
      isRead ? theme.colors.background01 : "transparent"};
  }
`;

export default PresetStyle;
