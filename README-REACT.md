# UnitDev Website - React SSR

Responsywna aplikacja React z Server-Side Rendering (SSR) dla firmy programistycznej UnitDev. Dark mode theme z zaawansowanymi animacjami i neonowymi efektami.

## 🚀 Technologie

- **React 18.2** - Biblioteka UI
- **React Router 6** - Routing
- **Express.js** - Serwer Node.js z SSR
- **Webpack 5** - Bundler (client + server)
- **Babel** - Transpilacja ES6+/JSX
- **CSS3** - Modułowe style z dark mode

## 📁 Struktura Projektu

```
/home/onion/VSCODE/Unit/
├── src/
│   ├── client/              # Client entry point (hydration)
│   │   └── index.js
│   ├── server/              # Express server z SSR
│   │   └── server.js
│   ├── components/          # Komponenty React
│   │   ├── icons/           # Ikony SVG
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── ScrollTop.jsx
│   │   ├── HeroCard.jsx
│   │   ├── ServiceCard.jsx
│   │   └── ProductCard.jsx
│   ├── pages/               # Strony aplikacji
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── styles/              # Modułowe pliki CSS
│   │   ├── main.css         # Główny plik CSS (wszystkie style)
│   │   ├── navbar.css
│   │   ├── footer.css
│   │   ├── loader.css
│   │   ├── scroll-top.css
│   │   ├── hero-card.css
│   │   ├── service-card.css
│   │   ├── product-card.css
│   │   ├── home.css
│   │   ├── services.css
│   │   ├── products.css
│   │   ├── about.css
│   │   └── contact.css
│   └── App.jsx              # Główny komponent aplikacji
├── public/
│   └── images/              # Obrazy statyczne
├── dist/                    # Build output
│   ├── public/              # Client bundle + CSS
│   │   ├── bundle.js
│   │   ├── styles.css
│   │   └── images/
│   └── server.js            # Server bundle
├── webpack.client.js        # Webpack config dla client
├── webpack.server.js        # Webpack config dla server
├── .babelrc                 # Babel config
└── package.json

```

## 🛠️ Skrypty NPM

### Development
```bash
# Uruchom development mode (watch + auto-reload)
npm run dev

# Tylko client (watch)
npm run dev:client

# Tylko server (nodemon + babel-node)
npm run dev:server
```

### Production
```bash
# Build client + server
npm run build

# Tylko client bundle
npm run build:client

# Tylko server bundle
npm run build:server

# Start production server
npm start
```

## 🚀 Uruchomienie

### Pierwszy raz:
```bash
# 1. Instalacja zależności
npm install

# 2. Build aplikacji
npm run build

# 3. Kopiuj obrazy do dist
cp -r public/images dist/public/

# 4. Uruchom serwer
npm start
```

Aplikacja będzie dostępna na: **http://localhost:3000**

### Development mode:
```bash
# Terminal 1 - Build client (watch mode)
npm run dev:client

# Terminal 2 - Server (auto-reload)
npm run dev:server
```

## 📦 Zależności

### Production
- `express` - Serwer HTTP
- `react` - UI library
- `react-dom` - React rendering
- `react-router-dom` - Routing
- `react-helmet-async` - SEO meta tags

### Development
- `@babel/core`, `@babel/preset-env`, `@babel/preset-react` - Transpilacja
- `webpack`, `webpack-cli` - Bundling
- `babel-loader`, `css-loader`, `mini-css-extract-plugin` - Loadery
- `nodemon`, `concurrently` - Development tools

## 🎨 Design System

### Kolory (Dark Mode)
```css
--bg-primary: #0a0e27        /* Główne tło */
--bg-secondary: #1a1f3a      /* Sekundarne tło */
--bg-card: #1e2442           /* Tło kart */
--primary-color: #00a8ff     /* Neonowy niebieski */
--accent-color: #33ccff      /* Jasny akcent */
--text-color: #e0e0e0        /* Jasny tekst */
```

### Efekty
- ✅ Glow effects na SVG ikonach
- ✅ Gradient borders
- ✅ Glassmorphism (backdrop-filter)
- ✅ Smooth transitions (0.3-0.5s)
- ✅ Hover animations (scale, translateY)

## 🔧 Komponenty

### Layout
- `<Navbar />` - Nawigacja z mobile hamburger menu
- `<Footer />` - Stopka z linkami
- `<ScrollTop />` - Przycisk scroll to top
- `<Loader />` - Loading screen

### UI Components
- `<HeroCard />` - Karty w hero section
- `<ServiceCard />` - Karty usług z obrazkami + SVG
- `<ProductCard />` - Karty produktów z cenami

### Strony
- `/` - Home (hero, usługi, produkty, stats, success stories)
- `/services` - Szczegółowa strona usług
- `/products` - Katalog produktów + comparison table
- `/about` - O firmie (stats counter, testimonials, values)
- `/contact` - Formularz kontaktowy

## 🌐 SSR (Server-Side Rendering)

Aplikacja renderuje się po stronie serwera dla:
- ✅ Lepszego SEO
- ✅ Szybszego First Contentful Paint
- ✅ Wsparcia dla botów crawlerów

### Jak działa:
1. **Server** (`src/server/server.js`) - renderuje React do HTML
2. **Client** (`src/client/index.js`) - hydratuje DOM
3. **Express** serwuje statyczne pliki z `dist/public/`

## 📱 Responsywność

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

Mobile menu (hamburger) aktywuje się automatycznie na < 768px.

## 🔄 Migracja z Vanilla JS

Zachowano **100% wyglądu** oryginalnej strony:
- ✅ Ten sam CSS (dark mode, kolory, animacje)
- ✅ Te same obrazy
- ✅ Te same ikony SVG
- ✅ Ta sama responsywność
- ✅ Ta sama struktura HTML

**Zmieniono tylko architekturę:**
- Vanilla JS → React components
- Multi-page HTML → SPA z React Router + SSR
- Inline scripts → React hooks (useState, useEffect)

## 📊 Bundle Size

```
Client: bundle.js (184 KB) + styles.css (47 KB) = 231 KB
Server: server.js (80 KB)
```

## 🚨 Known Issues

- Brak: Obrazy trzeba ręcznie kopiować po buildzie (`cp -r public/images dist/public/`)
- Rozwiązanie: Dodać `copy-webpack-plugin` w przyszłości

## 📝 TODO

- [ ] Dodać React Helmet dla meta tags SEO
- [ ] Zintegrować formularz kontaktowy z backend API
- [ ] Dodać testy (Jest + React Testing Library)
- [ ] Zoptymalizować bundle size (code splitting)
- [ ] Dodać Service Worker dla PWA

## 🤝 Development Workflow

1. Edytuj komponenty w `src/`
2. Style w `src/styles/`
3. Build: `npm run build`
4. Test: `npm start` → http://localhost:3000
5. Commit + push do GitHub

## 📄 License

MIT © 2025 UnitDev
