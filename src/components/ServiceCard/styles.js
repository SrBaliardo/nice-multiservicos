import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 1024px) {
    transform: scale(0.9);
  }

  @media (max-width: 768px) {
    justify-content: space-between;
  }

  @media (max-width: 425px) {
    transform: scale(1);
    flex-direction: column !important;
    align-items: center;
  }
`;

export const Card = styled.div`
  width: 400px;
  border: 1px dashed #ffab00;
  border-radius: 25px;
  padding: 15px;
  display: flex;
  flex-direction: column !important;
  gap: 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    width: 80%;
    gap: 15px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.7rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.45rem;
  }

  @media (max-width: 425px) {
    font-size: 1.1rem;
  }
`;

export const Avatar = styled.img`
  height: 150px;
  border-radius: 10px;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const Button = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  background-color: #252b4f;
  color: #fff;
  border-radius: 10px;

  &:hover {
    background-color: #374276;
  }
`;
