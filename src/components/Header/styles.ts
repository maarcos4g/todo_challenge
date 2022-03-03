import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 100%;

  position: absolute;
  bottom: 60%;
`;

export const ToggleButton = styled.button`
    width: 30px;
    height: 30px;

    border: none;
    background: transparent;

    cursor: pointer;

    position: absolute;
    right: 20%;
`;

export const ImageToggle = styled.img`
    width: 100%;
    height: 100%;
`;

export const TextToggle = styled.h1`
  position: absolute;

  left: 20%;

  font-size: 35px;
  color: #FFF;
  font-weight: 700;
`;
