import { createGlobalStyle } from "styled-components";
import { lighten, shade } from "polished";

const GlobalStyle = createGlobalStyle`
  * {
    ::-webkit-scrollbar {
      height: 5px;
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => lighten(.3, theme.stdColors.dark)};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => lighten(.6, theme.stdColors.dark)};
    }
  }
  body, button, input, textarea, p, a, strong, em, cite, q, blockquote {
    color: ${({ theme }) => theme.colors.text01};
  }
  button {
    color: ${({ theme }) => theme.stdColors.light};
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.title};
    transition-duration: ${({ theme }) => theme.transitionDuration};
    transition-property: color;
  }
`;

export default GlobalStyle;
