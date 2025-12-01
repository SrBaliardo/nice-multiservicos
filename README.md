🌟 Nice Multiserviços – Página Institucional

Este repositório contém o código-fonte da página institucional da Nice Multiserviços, uma empresa com mais de 20 anos de atuação especializada em serviços de limpeza, cozinha artesanal e cuidados domiciliares/hospitalares.

O objetivo da aplicação é apresentar a empresa, descrever seus serviços, mostrar a equipe e facilitar o contato via e-mail, telefone ou WhatsApp.

🚀 Tecnologias Utilizadas

A página foi desenvolvida com foco em desempenho, acessibilidade e responsividade, utilizando:

Next.js 13+ — renderização otimizada e estrutura moderna de rotas

React.js — componentes reutilizáveis e dinâmicos

Styled-Components — estilização com escopo local e server-side rendering

Ant Design Icons — ícones para navegação e comunicação visual

Dynamic Imports (Next.js) — carregamento otimizado do menu mobile

Custom Hooks — animações por visibilidade (useInView)

Google Fonts (Roboto / Varela Round)

Imagens otimizadas via public/

📌 Principais Recursos da Página
🏠 Home

Banner inicial com identidade visual da Nice Multiserviços.

Cabeçalho com navegação (fixo + menu hamburguer para mobile).

🧹 Seção "Sobre"

Conteúdo institucional detalhando:

serviços de limpeza

cozinha e confeitaria

cuidados e home-care

Texto animado conforme o usuário rola a página.

🛠️ Seção "Serviços"

Cards interativos exibindo:

Limpeza

Cozinha e Eventos

Cuidados Especiais

Cada categoria:

abre conteúdo dedicado

possui botão Voltar

mostra QR Code para contato

exibe informações de e-mail e telefone

O comportamento é controlado por estados (principal, limpeza, cozinha, cuidados) para alternar dinamicamente entre os conteúdos.

👩‍🦳 Nossa Equipe

Imagem institucional da equipe Nice.

Texto com foco em valores humanos: respeito, carinho e eficiência.

📞 Contato

Links funcionais:

E-mail

WhatsApp (via link encurtado)

Telefone

Ícones do Ant Design melhoram a comunicação visual.

🧩 Arquitetura do Projeto
/
├── pages/
│   ├── _app.js
│   ├── _document.js
│   └── index.jsx
├── public/
│   ├── imagens e ícones (faceNiceMultiservicos.png, QRCode, equipe etc.)
└── src/
    ├── components/
    │   ├── Header
    │   ├── MenuHamburgerBody
    │   ├── ServiceCard
    │   └── Footer
    ├── styles/
    │   ├── globalStyles.js
    │   └── homeStyles.js
    └── utils/
        └── useInView.js

📌 Detalhes técnicos importantes

_document.js usa ServerStyleSheet para renderização correta do Styled-Components.

_app.js injeta GlobalStyles globalmente.

index.jsx controla toda a navegação interna da SPA através de estados e componentes.

MenuHamburgerBody é carregado de forma dinâmica (SSR desligado) para melhorar performance em mobile.

📸 Screenshots

Se quiser, posso gerar as imagens e adicionar aqui diretamente.

⚙️ Como Executar Localmente
1. Clone o repositório
git clone https://github.com/SrBaliardo/nice-multiservicos

2. Instale as dependências
npm install
# ou
yarn install

3. Execute o ambiente de desenvolvimento
npm run dev
# ou
yarn dev

4. Abra no navegador
http://localhost:3000

📦 Build de Produção
npm run build
npm start

🤝 Contribuição

Pull requests são bem-vindos!
Para mudanças maiores, abra uma issue primeiro descrevendo sua proposta.

📄 Licença

Este projeto está licenciado sob a MIT License.
Sinta-se à vontade para usar, modificar e distribuir.