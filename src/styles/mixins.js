import { css } from 'styled-components'

export const roundShape = props => css`
  border-radius: 50%;  
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;  
  padding: 0;
  width: ${props.diameter};
  height: ${props.diameter};  
`;

export const roundedBorders = `
  border-radius: 8px;
`;