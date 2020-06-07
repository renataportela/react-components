import styled from '@emotion/styled'

const Overlay = styled.div`
  background-color: rgba(0,0,0,0.6);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
`;

export default Overlay