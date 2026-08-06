# MARIMA DAY — Landing Page V2

Landing page estática, responsiva e editável para a primeira edição do MARIMA DAY.

## Novidades desta versão

- nova capa integrada ao fundo da hero, sem aparência de card;
- seção de professores confirmados;
- seção de parceiros com logos transparentes e Instagram;
- conteúdo de professores, parceiros e formulário centralizado em `content.js`;
- seções preparadas para exibir uma mensagem elegante enquanto os nomes ainda não estiverem confirmados.

## Estrutura

```text
marima-day-landing-v2/
├── assets/
│   ├── marima-day-cover.png
│   ├── professors/
│   │   └── LEIA-ME.txt
│   └── partners/
│       └── LEIA-ME.txt
├── content.js
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Como visualizar

Abra `index.html` diretamente no navegador.

Para uma visualização local mais fiel, abra a pasta no VS Code e use a extensão **Live Server**.

## Como conectar o formulário

Abra `content.js` e altere:

```js
registrationUrl: "COLE_AQUI_O_LINK_DO_FORMULARIO",
```

Exemplo Tally:

```js
registrationUrl: "https://tally.so/r/SEU-CODIGO",
```

Exemplo Google Forms:

```js
registrationUrl: "https://forms.gle/SEU-CODIGO",
```

## Como adicionar professores

1. Coloque a foto em `assets/professors/`.
2. Abra `content.js`.
3. Edite um bloco dentro de `professors`.
4. Troque `active: false` por `active: true`.

Exemplo:

```js
{
  active: true,
  name: "Ana Souza",
  role: "Dança",
  description: "Professora e coreógrafa convidada para conduzir a experiência de dança.",
  instagram: "@anasouza",
  instagramUrl: "https://www.instagram.com/anasouza/",
  image: "assets/professors/ana-souza.jpg",
},
```

Para ocultar temporariamente um professor que cancelou, altere apenas:

```js
active: false,
```

Para adicionar mais um, copie um bloco completo, cole abaixo e edite os dados.

## Como adicionar parceiros

1. Coloque a logo transparente em `assets/partners/`.
2. Abra `content.js`.
3. Edite um bloco dentro de `partners`.
4. Troque `active: false` por `active: true`.

Exemplo:

```js
{
  active: true,
  name: "Nome do parceiro",
  instagram: "@parceiro",
  instagramUrl: "https://www.instagram.com/parceiro/",
  logo: "assets/partners/parceiro.png",
},
```

## Fontes

A página procura primeiro pelas fontes definidas para o evento:

- All Round Gothic
- Dream Avenue
- American Typewriter ITC Pro

Como os arquivos dessas fontes não são distribuídos no projeto, a página usa alternativas web automáticas:

- Outfit
- Cormorant Garamond
- DM Mono

A tipografia original permanece preservada na arte oficial da capa.

## Publicação

A pasta pode ser publicada diretamente em Vercel, Netlify, GitHub Pages ou hospedagem comum. Não há etapa de build.
