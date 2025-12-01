import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  right: 5vw;
  bottom: 11vh;
  z-index: 1111;

  @media (max-width: 1024px) {
    right: 7vw;
  }

  @media (max-width: 768px) {
    right: 8vw;
  }

  @media (max-width: 425px) {
    right: 12vw;
    transform: scale(0.8);
  }
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 40px;
  height: 50px;
  position: absolute;

  div {
    width: 100%;
    height: 4px;
    background-color: #252b4f;
    border-radius: 7px;
    margin: 4px 0;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(45deg) translate(8px, 8px)" : "rotate(0)"};
      background-color: ${({ $isOpen }) => ($isOpen ? "#e33756" : "#252b4f")};
    }
    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(-45deg) translate(8px, -8px)" : "rotate(0)"};
      background-color: ${({ $isOpen }) => ($isOpen ? "#e33756" : "#252b4f")};
    }
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  bottom: 0;
  right: -40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
`;

export const MenuItem = styled.li`
  position: relative;
  width: 150px;
  padding: 10px;
  background-color: #252b4f;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem;
  color: #fff;
  font-weight: 500;
  opacity: 0;
  transform: scale(0.8);
  ${({ $isOpen, $delay }) =>
    $isOpen &&
    css`
      animation: ${fadeIn} 0.3s ease-out ${$delay}s forwards;
    `}
  transition: all 0.3s ease;
  z-index: 3;

  &:hover {
    background-color: #374276;
    color: #ffab00;
    font-weight: 700;
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom: thin solid;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
    border-bottom: thin solid;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
    border-bottom: thin solid;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;
