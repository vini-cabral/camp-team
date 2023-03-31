import { createGlobalStyle } from "styled-components";
import { lighten, shade } from "polished";

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
    background-color: ${({ theme }) => theme.stdColors.aux};
    border: .1rem solid ${({ theme }) => theme.stdColors.aux};
    padding: .5rem 1.5rem;
    border-radius: .3rem;
    cursor: pointer;
    transition-property: background, border;
    transition-duration: ${({ theme }) => theme.transitionDuration};
    -webkit-box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.75);
  }
  button>span {
    padding: 0 .25rem;
  }
  button:hover {
    background-color: ${({ theme }) =>
      theme.name === "dark"
        ? lighten(0.2, theme.stdColors.aux)
        : shade(0.2, theme.stdColors.aux)};
    border-color: ${({ theme }) =>
      theme.name === "dark"
        ? lighten(0.2, theme.stdColors.aux)
        : shade(0.2, theme.stdColors.aux)};
  }
  button:active {
    transform: scaleX(.99);
    -webkit-box-shadow: 0px 0px 0px 0px transparent;
    -moz-box-shadow: 0px 0px 0px 0px transparent;
    box-shadow: 0px 0px 0px 0px transparent;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.title};
    transition-duration: ${({ theme }) => theme.transitionDuration};
    transition-property: color;
  }
`;

export default GlobalStyle;
