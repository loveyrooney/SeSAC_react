import logo from '../logo.svg';
import styled, { keyframes } from 'styled-components';

const Mydiv = styled.div`
  text-align: center;
`;
const Myheader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const spin = keyframes`from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}`;
const Myimg = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${spin} infinite 20s linear;
`;
const Mya = styled.a`
  color: #61dafb;
`;

function AppCopy() {
  return (
    <Mydiv>
      <Myheader>
        <Myimg src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Mya href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </Mya>
      </Myheader>
    </Mydiv>
  );
}

export default AppCopy;
