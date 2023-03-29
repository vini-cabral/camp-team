import { createGlobalStyle } from "styled-components";
import { lighten } from "polished";

const GlobalStyle = createGlobalStyle<{ hideBodyScrollbar: boolean }>`
  * {
    ::-webkit-scrollbar {
      height: 5px;
      width: 8px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => lighten(0.25, theme.stdColors.dark)};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => lighten(0.6, theme.stdColors.dark)};
    }
  }
  body, button, input, textarea, p, a, strong, em, cite, q, blockquote {
    color: ${({ theme }) => theme.colors.text01};
  }
  body {
    ::-webkit-scrollbar {
      width: ${({ hideBodyScrollbar }) => (hideBodyScrollbar ? "0px" : "8px")}
    }
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
