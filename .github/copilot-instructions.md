# Copilot Instructions

## Project Overview
Responsywna **statyczna strona internetowa** (multi-page) dla firmy programistycznej UnitDev z zaawansowanymi animacjami i dark mode theme. Projekt wykorzystuje czysty HTML5, CSS3 i Vanilla JavaScript bez frameworków.

**Architektura:**
- **Statyczna, nie SPA**: Każda strona to osobny plik HTML (index, services, products, about, contact)
- **Server-side routing**: Tradycyjna nawigacja między stronami (lepsze SEO)
- **Dark mode**: Ciemny motyw z neonowymi akcentami i glow effects
- **Responsywność**: Mobile-first approach z breakpointem na 768px
- **Performance-first**: RequestAnimationFrame, Intersection Observer, CSS animations

## Project Structure
```
/home/onion/VSCODE/Unit/
├── index.html          # Strona główna (hero, usługi overview, produkty, stats)
├── services.html       # Szczegółowa strona usług (6 usług z opisami)
├── products.html       # Katalog produktów (3 produkty + porównanie)
├── about.html          # O firmie (historia, wartości, case studies)
├── contact.html        # Formularz kontaktowy + info
├── styles.css          # Wspólne style dla wszystkich stron
├── script.js           # Wspólny JavaScript dla wszystkich stron
└── README.md           # Dokumentacja użytkownika
```

## Development Workflow

### Setup i Podgląd
```bash
# WAŻNE: Strona wymaga serwera HTTP (nawigacja między stronami)
# Metoda 1: Python HTTP Server (zalecane)
python -m http.server 8000
# Otwórz: http://localhost:8000

# Metoda 2: Live Server w VS Code
# Zainstaluj rozszerzenie "Live Server" i kliknij "Go Live"

# Metoda 3: Node.js
npx http-server -p 8000
```

### Dodawanie Nowej Strony
1. Skopiuj `index.html` jako szablon
2. Zmień `<title>` i content
3. Dodaj `class="active"` do odpowiedniego linka w nav
4. Zaktualizuj wszystkie footer linki na innych stronach
5. Dodaj link w nawigacji na wszystkich stronach

### Sprawdzanie Responsywności
```bash
# Użyj Chrome DevTools (F12)
# Toggle Device Toolbar (Ctrl+Shift+M)
# Testuj na: Mobile (375px), Tablet (768px), Desktop (1200px+)
```

## Code Conventions

### HTML - Multi-Page Structure
Każda strona zawiera:
```html
<!DOCTYPE html>
<html lang="pl">
<head>
    <title>Strona - UnitDev</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="loader">...</div>
    <nav class="navbar">
        <!-- Link do aktywnej strony ma class="active" -->
        <a href="current-page.html" class="active">Strona</a>
    </nav>
    <!-- Unikalna treść strony -->
    <footer class="footer">...</footer>
    <button class="scroll-top">↑</button>
    <script src="script.js"></script>
</body>
</html>
```

### CSS - Dark Mode Palette
Kolory zdefiniowane w `:root` w `styles.css:1-17`:
```css
--bg-primary: #0a0e27;        /* Główne tło */
--bg-secondary: #1a1f3a;      /* Sekundarne tło */
--bg-card: #1e2442;           /* Tło kart */
--primary-color: #00a8ff;     /* Neonowy niebieski */
--text-color: #e0e0e0;        /* Jasny tekst */
--shadow-glow: 0 0 20px rgba(0, 168, 255, 0.3);  /* Świecenie */
```

### JavaScript - Page-Aware Code
```javascript
// Kod działa na wszystkich stronach, sprawdzaj dostępność elementów:
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    // Kod tylko dla strony contact.html
}

// Auto-highlight aktywnej strony:
const currentPage = window.location.pathname.split('/').pop();
// Dodaj class="active" do odpowiedniego linka
```

## Key Files and Components

**`index.html`** - Strona główna (hero + overview usług/produktów)  
**`services.html`** - Szczegółowa strona usług (6 usług z feature lists)  
**`products.html`** - Katalog produktów (pricing, badges, comparison table)  
**`about.html`** - O firmie (stats counter, testimonials grid, values)  
**`contact.html`** - Formularz kontaktowy + mapa + contact info  
**`styles.css:1-17`** - Dark mode color palette  
**`styles.css:750-900`** - Page-specific styles (page-header, forms, tables)  
**`script.js:1-7`** - Loading screen (wszystkie strony)  
**`script.js:58-95`** - Stats counter (tylko about.html)  
**`script.js:300-320`** - Contact form handler (tylko contact.html)  
**`script.js:322-330`** - Active page highlight (wszystkie strony)

## Integration Points

### Obecnie Statyczne (Do Rozbudowy)
- Formularze kontaktowe → pokazują notification z placeholder
- Przyciski CTA → wywołują notification system
- Brak integracji z backendem/CMS
- Stats numbers → hardcoded w HTML jako `data-target`

### Przygotowane do Integracji
```javascript
// script.js:125-160 - button handlers z ripple effect
// Zamień showNotification() na fetch() do API
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', async (e) => {
        // TODO: const response = await fetch('/api/endpoint', {...})
    });
});

// script.js:58-95 - Stats counter
// Dane można pobierać z API:
// const stats = await fetch('/api/stats').then(r => r.json());
```

### Animation Performance Tips
- Wszystkie animacje używają `transform` i `opacity` (GPU-accelerated)
- `will-change` nie jest używany domyślnie (używaj tylko dla konkretnych case'ów)
- Intersection Observer z `rootMargin: '-100px'` dla wcześniejszego triggera
- RequestAnimationFrame dla custom animations (stats counter, mouse trail)

## Common Tasks

### Dodanie Nowej Podstrony
1. Skopiuj istniejącą stronę HTML jako szablon:
```bash
cp index.html new-page.html
```
2. Zaktualizuj `<title>` i główną zawartość
3. Zmień `class="active"` w nawigacji
4. Dodaj link do nowej strony we wszystkich innych plikach HTML (nav + footer)

### Dodanie Nowej Sekcji na Istniejącej Stronie
1. Dodaj HTML w odpowiednim pliku:
```html
<section class="new-section">
    <div class="container">
        <h2>Tytuł</h2>
        <p class="section-subtitle">Podtytuł</p>
        <div class="new-grid"><!-- treść --></div>
    </div>
</section>
```
2. Dodaj style w `styles.css`:
```css
.new-section {
    padding: 80px 20px;
    background: var(--bg-secondary);
}
```

### Zmiana Kolorystyki Dark Mode
Edytuj zmienne w `styles.css:1-17`:
```css
:root {
    --primary-color: #twoj-kolor;
    --bg-primary: #twoj-kolor-tla;
}
```

### Dodanie Nowego Formularza
1. Dodaj HTML z `id`:
```html
<form id="myForm">...</form>
```
2. Dodaj handler w `script.js`:
```javascript
const myForm = document.getElementById('myForm');
if (myForm) {
    myForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle form
    });
}
```

### Deployment
- **GitHub Pages**: Push do repo, enable w settings
- **Netlify**: Drag & drop folder lub connect git
- **Vercel**: Auto-deploy z GitHub
- Wszystkie pliki statyczne, brak build step wymaganego
