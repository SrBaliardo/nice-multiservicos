import { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import * as S from "../src/styles/homeStyles";
import { Header, ServiceCard, Footer } from "../src/components";
import { useInView } from "../src/utils/useInView";
import {
  WhatsAppOutlined,
  MailOutlined,
  PhoneOutlined,
  BuildOutlined,
  BlockOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import faceImg from "../public/faceNiceMultiservicos.png";
import aboutImg from "../public/about-sect.png";
import teamNice from "../public/nice_equipe-noBg.png";
import QRCodeWhatsapp from "../public/qrCodeChamaNice_Nice.png";
const DynamicMenuHamburgerBody = dynamic(
  () =>
    import("../src/components/MenuHamburgerBody/index.jsx").then(
      (mod) => mod.MenuHamburgerBody
    ),
  { ssr: false }
);

export default function Home() {
  const [aboutRef, aboutVisible] = useInView();
  const [servicesRef, servicesVisible] = useInView();
  const [teamsRef, teamVisible] = useInView();
  const [contactRef, contactVisible] = useInView();
  const [principal, setPrincipal] = useState(true);
  const [limpeza, setLimpeza] = useState(false);
  const [cozinha, setCozinha] = useState(false);
  const [cuidados, setCuidados] = useState(false);
  const showServiceContent = (serviceType) => {
    setPrincipal(false);
    setLimpeza(false);
    setCozinha(false);
    setCuidados(false);

    if (serviceType === "limpeza") {
      setLimpeza(true);
    } else if (serviceType === "cozinha") {
      setCozinha(true);
    } else if (serviceType === "cuidados") {
      setCuidados(true);
    }
  };

  const backToPrincipal = () => {
    setLimpeza(false);
    setCozinha(false);
    setCuidados(false);
    setPrincipal(true);
  };

  const menuOptions = [
    { label: "Voltar ao topo", id: "top" },
    { label: "Sobre", id: "about-section" },
    { label: "Serviços", id: "services-section" },
    { label: "Contato", id: "contact-section" },
  ];

  return (
    <S.Container>
      <Head>
        <title>NICE Multiserviços</title>
      </Head>

      <Header />
      <S.ContainerContent id="top">
        <S.FaceSection>
          <S.FaceSectionImg src={faceImg.src} alt="nice_equipe-background" />
        </S.FaceSection>

        <DynamicMenuHamburgerBody options={menuOptions} />

        <S.AboutSection
          id="about-section"
          ref={aboutRef}
          className={aboutVisible ? "visible" : ""}
        >
          <div className="sect">
            <S.AboutSectionImg
              src={aboutImg.src}
              alt="services-logo-nice-multiservices"
            />
            <div>
              <S.Text>
                Há mais de 20 anos no mercado, a Nice Multiserviços oferece
                soluções completas em limpeza, cozinha e cuidados
                especializados. Atuamos com responsabilidade, agilidade e
                atenção às necessidades de cada cliente, sempre comprometidos
                com qualidade e confiança.
              </S.Text>
              <S.Text>
                Realizamos serviços de limpeza e higienização para clínicas,
                escritórios, casas e apartamentos, garantindo ambientes
                organizados e seguros. Também contamos com uma linha de serviços
                de cozinha, produzindo salgados, bolos, doces, tortas, cafés e
                pães sob encomenda, com sabor artesanal e alto padrão.
              </S.Text>
              <S.Text>
                Além disso, oferecemos acompanhamento hospitalar e cuidados
                domiciliares para idosos, enfermos ou acamados, prestados por
                profissionais preparados e atenciosos.
              </S.Text>
              <S.Text>
                Na Nice Multiserviços, nosso objetivo é facilitar o seu dia a
                dia com soluções práticas, eficientes e feitas com respeito e
                dedicação.
              </S.Text>
            </div>
          </div>
        </S.AboutSection>

        <S.ServicesSection id="services-section">
          <section
            ref={servicesRef}
            className={servicesVisible ? "visible" : ""}
          >
            <S.HeaderSection>
              {principal && (
                <>
                  <div className="div-T">
                    <S.Title>
                      <BuildOutlined /> Serviços Prestados
                    </S.Title>
                  </div>

                  <ServiceCard onServiceClick={showServiceContent} />
                </>
              )}

              {limpeza && (
                <>
                  <div className="div-T">
                    <S.Title>
                      <BuildOutlined /> Serviços de Limpeza
                    </S.Title>
                  </div>

                  <S.Button onClick={backToPrincipal}>
                    <LeftOutlined /> Voltar
                  </S.Button>

                  <S.SubContentServicesSection>
                    <S.Text>
                      Detalhes sobre faxina, escritórios,
                      consultórios...Detalhes sobre faxina, escritórios,
                      consultórios...Detalhes sobre faxina, escritórios,
                      consultórios...Detalhes sobre faxina, escritórios,
                      consultórios...Detalhes sobre faxina, escritórios,
                      consultórios...Detalhes sobre faxina, escritórios,
                      consultórios...Detalhes sobre faxina, escritórios,
                      consultórios...Detalhes sobre faxina, escritórios,
                      consultórios...Detalhes sobre faxina, escritórios,
                      consultórios...Detalhes sobre faxina, escritórios,
                      consultórios...Detalhes sobre faxina, escritórios,
                      consultórios...Detalhes sobre faxina, escritórios,
                      consultórios...
                    </S.Text>

                    <S.DivCtt>
                      <div className="sub-divCtt">
                        <S.Text className="span">Escaneie o QR Code ou:</S.Text>
                        <S.Text>Telefone/Whatsapp: (16) 99262-3303</S.Text>
                        <S.Text>E-mail: nice.multiservicos@gmail.com</S.Text>
                        <S.Text className="span">CHAMA A NICE!</S.Text>
                      </div>

                      <S.QRCodeWhatsappImg
                        src={QRCodeWhatsapp.src}
                        alt="qrcode-whatsapp"
                      />
                    </S.DivCtt>
                  </S.SubContentServicesSection>
                </>
              )}

              {cozinha && (
                <>
                  <div className="div-T">
                    <S.Title>
                      <BuildOutlined /> Cozinha e Eventos
                    </S.Title>
                  </div>

                  <S.Button onClick={backToPrincipal}>
                    <LeftOutlined /> Voltar
                  </S.Button>

                  <S.SubContentServicesSection>
                    <S.Text>
                      Detalhes sobre bolos, doces, encomendas...Detalhes sobre
                      bolos, doces, encomendas...Detalhes sobre bolos, doces,
                      encomendas...Detalhes sobre bolos, doces,
                      encomendas...Detalhes sobre bolos, doces,
                      encomendas...Detalhes sobre bolos, doces,
                      encomendas...Detalhes sobre bolos, doces,
                      encomendas...Detalhes sobre bolos, doces,
                      encomendas...Detalhes sobre bolos, doces,
                      encomendas...Detalhes sobre bolos, doces,
                      encomendas...Detalhes sobre bolos, doces,
                      encomendas...Detalhes sobre bolos, doces, encomendas...
                    </S.Text>

                    <S.DivCtt>
                      <div className="sub-divCtt">
                        <S.Text className="span">Escaneie o QR Code ou:</S.Text>
                        <S.Text>Telefone/Whatsapp: (16) 99262-3303</S.Text>
                        <S.Text>E-mail: nice.multiservicos@gmail.com</S.Text>
                        <S.Text className="span">CHAMA A NICE!</S.Text>
                      </div>

                      <S.QRCodeWhatsappImg
                        src={QRCodeWhatsapp.src}
                        alt="qrcode-whatsapp"
                      />
                    </S.DivCtt>
                  </S.SubContentServicesSection>
                </>
              )}

              {cuidados && (
                <>
                  <div className="div-T">
                    <S.Title>
                      <BuildOutlined /> Cuidados Especiais
                    </S.Title>
                  </div>

                  <S.Button onClick={backToPrincipal}>
                    <LeftOutlined /> Voltar
                  </S.Button>

                  <S.SubContentServicesSection>
                    <S.Text>
                      Detalhes sobre homecare, acompanhantes
                      hospitalares...Detalhes sobre homecare, acompanhantes
                      hospitalares...Detalhes sobre homecare, acompanhantes
                      hospitalares...Detalhes sobre homecare, acompanhantes
                      hospitalares...Detalhes sobre homecare, acompanhantes
                      hospitalares...Detalhes sobre homecare, acompanhantes
                      hospitalares...Detalhes sobre homecare, acompanhantes
                      hospitalares...Detalhes sobre homecare, acompanhantes
                      hospitalares...Detalhes sobre homecare, acompanhantes
                      hospitalares...Detalhes sobre homecare, acompanhantes
                      hospitalares...Detalhes sobre homecare, acompanhantes
                      hospitalares...Detalhes sobre homecare, acompanhantes
                      hospitalares...
                    </S.Text>

                    <S.DivCtt>
                      <div className="sub-divCtt">
                        <S.Text className="span">Escaneie o QR Code ou:</S.Text>
                        <S.Text>Telefone/Whatsapp: (16) 99262-3303</S.Text>
                        <S.Text>E-mail: nice.multiservicos@gmail.com</S.Text>
                        <S.Text className="span">CHAMA A NICE!</S.Text>
                      </div>

                      <S.QRCodeWhatsappImg
                        src={QRCodeWhatsapp.src}
                        alt="qrcode-whatsapp"
                      />
                    </S.DivCtt>
                  </S.SubContentServicesSection>
                </>
              )}
            </S.HeaderSection>
          </section>
        </S.ServicesSection>

        <S.TeamSection
          id="team-section"
          ref={teamsRef}
          className={teamVisible ? "visible" : ""}
        >
          <S.HeaderSection>
            <div className="div-T"></div>
            <S.Text className="div-T">
              Estamos sempre prontas para te atender com respeito, carinho e
              cuidado. Eficiência é nosso sobrenome!
            </S.Text>
          </S.HeaderSection>
          <S.TeamNiceImg src={teamNice.src} alt="Team-Nice" />
        </S.TeamSection>

        <S.ContactSection
          id="contact-section"
          className={`${contactVisible ? "visible" : ""}`}
          ref={contactRef}
        >
          <S.HeaderSection>
            <div className="div-T">
              <S.Title>
                <BlockOutlined /> Contato
              </S.Title>
            </div>
            <div className="contacts">
              <a href="mailto:nice.multiservicos@gmail.com" target="_blank">
                <MailOutlined />
                <label>nice.multiservicos@gmail.com</label>
              </a>
              <a href="https://w.app/xax2tb" target="_blank">
                <WhatsAppOutlined />
                <label>Whatsapp</label>
              </a>
              <a href="tel:16992623393" target="_blank">
                <PhoneOutlined />
                <label>Fale com a gente</label>
              </a>
            </div>
          </S.HeaderSection>
        </S.ContactSection>
      </S.ContainerContent>
      <Footer />
    </S.Container>
  );
}
