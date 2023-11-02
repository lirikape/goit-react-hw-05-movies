import { createGlobalStyle } from 'styled-components';
import background from './components/images/background.jpeg';
export const Global = createGlobalStyle`
body{
    background-image: url(${background});

}

`;
