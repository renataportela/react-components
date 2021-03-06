import { keyframes } from 'styled-components'

export const easeInBackground = `background .3s ease-out, box-shadow 0.1s ease-in`

export const easeInOutColors = `color 0.2s ease-in-out, background-color 0.2s ease-in-out,
  border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out`

export const easeInOutShadow = `box-shadow 0.2s ease-in-out`
export const easeInOutColor = `color 0.2s ease-in-out`

export const opacityInOut  = `opacity 0.3s ease-in-out`

export const allEase  = `all .2s ease`

export const scaleUp = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

export const scaleDown = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

export const fadeInFromNone = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }

  1% {
    visibility: visible;
    opacity: 0;
  }

  100% {
    visibility: visible;
    opacity: 1;
  }
`


export const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 currentColor;
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;