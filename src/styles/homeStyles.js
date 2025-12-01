import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #dee2f3;
  overflow-x: hidden;

  section {
    width: 100%;
    height: 100vh;
    padding: 50px 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  }

  section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    section {
      width: 100%;
      padding: 30px 100px;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 30px 70px;
    }
  }

  @media (max-width: 425px) {
    section {
      padding: 20px;
      align-items: center;
    }
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .title {
    color: #000;
  }

  .div-T {
    padding-bottom: 50px;
  }

  @media (max-width: 768px) {
    .div-T {
      padding-bottom: 30px;
    }
  }

  @media (max-width: 425px) {
    .div-T {
      justify-content: center;
    }
  }
`;

export const Title = styled.h2`
  color: #ffab00;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 425px) {
    font-size: 1.7rem;
  }
`;

export const Text = styled.p`
  color: #1f1f1f;

  @media (max-width: 425px) {
    font-size: 0.85rem;
  }
`;

export const FaceSection = styled.div`
  height: calc(100vh - 70px);
  padding-right: 30px;

  @media (max-width: 1024px) {
    height: 100%;
  }

  @media (max-width: 425px) {
  }
`;

export const FaceSectionImg = styled.img`
  max-width: 100%;
`;

export const AboutSection = styled.section`
  height: 800px !important;
  background-color: #dee2f3;
  width: 100vw !important;

  .sect {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 70px;
  }

  div {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 768px) {
    .sect {
      gap: 30px;
    }
  }

  @media (max-width: 425px) {
    .sect {
      gap: 15px;
    }

    div {
      gap: 10px;
    }
  }
`;

export const AboutSectionImg = styled.img`
  width: 400px;

  @media (max-width: 1444px) {
    width: 300px;
  }

  @media (max-width: 1024px) {
    width: 230px;
  }

  @media (max-width: 425px) {
    width: 90px;
  }
`;

export const ServicesSection = styled.div`
  width: 100%;
  background: #5d6ec6;

  section {
    height: 100%;
    margin-top: 50px !important;
    margin-bottom: 50px !important;
  }
`;

export const TeamSection = styled.section`
  height: 100% !important;
  position: relative;
  margin-top: 50px !important;
  margin-bottom: 50px !important;
  justify-content: center !important;
  align-items: center;

  label {
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const TeamNiceImg = styled.img`
  width: 300px;

  @media (max-width: 1444px) {
    width: 250px;
  }

  @media (max-width: 1024px) {
    width: 230px;
  }

  @media (max-width: 768px) {
    width: 210px;
  }

  @media (max-width: 425px) {
    width: 180px;
  }
`;

export const ContactSection = styled.section`
  height: 500px !important;
  position: relative;
  background-color: #5d6ec6;

  .contacts {
    display: flex;
    flex-direction: column;
    align-items: start;
    color: #fff;
    font-size: 2rem;

    a {
      display: flex;
      align-items: center;
      gap: 20px;
      text-decoration: none;
      color: #fff;

      &:hover {
        color: #ffab00;
      }
    }

    label {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    section {
      position: relative;
      top: 40px;
      left: 20px;
    }
  }

  @media (max-width: 768px) {
    .contacts {
      font-size: 1.7rem;

      a {
        gap: 10px;
      }

      label {
        font-size: 1.3rem;
      }
    }
  }

  @media (max-width: 425px) {
    section {
      position: static;
      display: flex;
      align-items: center;
    }

    .contacts {
      font-size: 1.3rem;

      a {
        gap: 8px;
      }

      label {
        font-size: 1rem;
      }
    }
  }
`;

export const Button = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  background-color: #252b4f;
  color: #fff;
  border-radius: 10px;
  margin-bottom: 40px;

  &:hover {
    background-color: #374276;
  }
`;

export const QRCodeWhatsappImg = styled.img`
  width: 150px;
  border-radius: 10px;
  z-index: 111;
`;

export const SubContentServicesSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;

  @media (max-width: 890px) {
    flex-direction: column !important;
  }
`;

export const DivCtt = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;
  padding: 10px;

  .sub-divCtt {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 0.8rem;

    p {
      color: #fff;
    }

    .span {
      color: #ffab00;
    }
  }
`;
