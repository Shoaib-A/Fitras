import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (min-width: 320px) and (max-width: 480px) {
      ${props}
    }
  `;
};

export const medium = (props) => {
  return css`
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      ${props}
    }
  `;
};