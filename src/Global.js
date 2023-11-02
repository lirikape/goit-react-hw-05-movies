import { createGlobalStyle } from 'styled-components';
import background from './assets/images/background.jpeg';
export const Global = createGlobalStyle`
body{
    background-image: url(${background});

}

`;
