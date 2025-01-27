# Battleship Game

**Battleship** es una implementación del clásico juego de batalla naval en la web. El juego te permite enfrentarte a la computadora, colocando tus barcos en un tablero y luego atacando al enemigo en un tablero similar. El juego utiliza `React` para la interfaz de usuario y `Redux` para la gestión del estado.

## Características

- **Tablero interactivo**: Coloca tus barcos y realiza ataques sobre el tablero del enemigo.
- **Sonidos y animaciones**: Efectos de sonido para las interacciones y animaciones de los impactos.
- **uso de logs**: Registro de los eventos del juego, incluyendo los impactos en los barcos y en el agua.
- **Manejo del estado**: Utiliza `Redux` para gestionar el estado del juego (tablero, turnos, impacto, etc.).
- **Responsive Design**: La interfaz es completamente adaptable a diferentes tamaños de pantalla, gracias a `Tailwind CSS`.

## Tecnologías

- **React**: Librería de JavaScript para construir interfaces de usuario.
- **Redux**: Herramienta para la gestión de estados globales en aplicaciones JavaScript.
- **Tailwind CSS**: Framework de CSS que permite un diseño responsivo y altamente personalizable.
- **Vite**: Herramienta de construcción rápida para aplicaciones modernas de JavaScript.
- **React-Redux**: Librería que permite conectar el estado global de Redux con los componentes de React.

## Instalación

1. Clona el repositorio en tu máquina local:
   ```bash
   https://github.com/edwinmoreno77/BattleShip_Game.git
   ```
2. Accede a la carpeta del proyecto:
   ```bash
   cd battleship-game
   ```
3. instala las dependencias:
   ```bash
   pnpm install
   ```
4. Ejecuta el proyecto en modo desarrollo:
   ```bash
   pnpm run dev
   ```
5. abre tu navegador local
   ```bash
   Abre tu navegador y ve a http://localhost:3000 para jugar.
   ```


```bash
   Directory structure:
└── edwinmoreno77-battleship_game/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vite.config.js
    ├── public/
    └── src/
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── assets/
        │   └── audio/
        ├── components/
        │   ├── BackgroundMusic.jsx
        │   ├── Board.jsx
        │   ├── Cell.jsx
        │   ├── Controls.jsx
        │   └── Logs.jsx
        ├── hooks/
        │   ├── useComputerAttack.js
        │   └── useConfetti.js
        ├── icons/
        ├── store/
        │   ├── index.js
        │   └── game/
        │       ├── gameSlice.js
        │       └── thunks.js
        └── utils/
            └── constants.js

   ```
