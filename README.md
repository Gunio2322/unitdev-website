# UnitDev - Strona Internetowa Firmy Programistycznej

Profesjonalna, **statyczna strona internetowa** dla firmy programistycznej inspirowana strukturą Unitronics.

## Struktura Projektu

```
Unit/
├── index.html          # Strona główna
├── services.html       # Strona usług
├── products.html       # Strona produktów
├── about.html          # O firmie
├── contact.html        # Strona kontaktowa
├── styles.css          # Arkusz stylów CSS
├── script.js           # Logika JavaScript
└── README.md           # Dokumentacja projektu
```

## Architektura

**Typ:** Statyczna strona internetowa (Multi-Page)
- Każda strona to osobny plik HTML
- Wspólny arkusz stylów CSS
- Wspólny plik JavaScript
- Tradycyjna nawigacja między stronami (server-side routing)

### Dlaczego statyczna, a nie SPA?

1. **SEO**: Każda strona ma unikalny URL i może być indeksowana przez wyszukiwarki
2. **Performance**: Szybsze pierwsze ładowanie, mniejszy bundle JavaScript
3. **Prostota**: Łatwiejsze w utrzymaniu i hostingu (np. GitHub Pages, Netlify)
4. **Accessibility**: Lepsza dostępność, działa bez JavaScript
5. **Caching**: Łatwiejsze cache'owanie przez przeglądarki

## Funkcjonalności

### Strony
- **index.html** - Strona główna z hero, usługami, produktami, statystykami
- **services.html** - Szczegółowy opis wszystkich usług
- **products.html** - Katalog produktów z cenami i porównaniem
- **about.html** - Historia firmy, wartości, zespół, case studies
- **contact.html** - Formularz kontaktowy i informacje kontaktowe

### Wspólne Elementy
- **Nawigacja** - Sticky navbar z highlight aktywnej strony
- **Footer** - Stopka z linkami do wszystkich podstron
- **Loading Screen** - Animowany ekran ładowania
- **Scroll to Top** - Przycisk powrotu na górę

### Zaawansowane Funkcje JavaScript
- ✨ **Loading Screen** - Animowany ekran ładowania przy starcie każdej strony
- 🎯 **Smooth Scrolling** - Płynne przewijanie do sekcji (tylko dla anchor links)
- 🎨 **Intersection Observer** - Animacje elementów przy przewijaniu
- 📊 **Stats Counter** - Animowane liczniki statystyk (strona about.html)
- 🚀 **Scroll to Top** - Przycisk powrotu na górę (na wszystkich stronach)
- 🎭 **Parallax Effect** - Efekt paralaksy w hero section
- 💫 **Ripple Effect** - Efekt fali na przyciskach przy kliknięciu
- 🧲 **Magnetic Buttons** - Przyciski reagujące na pozycję kursora (desktop)
- 🖱️ **Mouse Trail** - Ślad kursora myszy z glow effect (desktop)
- ⌨️ **Typing Effect** - Animacja pisania w hero section (index.html)
- 🔔 **Notification System** - System powiadomień
- 📱 **Responsive Menu** - Animowane menu mobilne
- 📝 **Form Handling** - Obsługa formularza kontaktowego (contact.html)
- 🔗 **Active Page Highlight** - Podświetlenie aktywnej strony w nawigacji

### Technologie
- **HTML5** - Semantyczna struktura, oddzielne pliki dla każdej strony
- **CSS3** - Dark mode theme, responsywny design, animacje, gradienty
- **Vanilla JavaScript** - Zaawansowane interaktywne elementy bez frameworków

### Dark Mode Theme
- Ciemne tło z gradientami (`#0a0e27`, `#1a1f3a`)
- Neonowe akcenty (`#00a8ff`)
- Efekty świecenia (glow effects)
- Glassmorphism na niektórych elementach
- Gradient text effects

## Uruchomienie

### Metoda 1: Bezpośrednie otwarcie
Otwórz plik `index.html` w przeglądarce. **Uwaga:** Nawigacja między stronami będzie działać tylko przez serwer HTTP.

### Metoda 2: Live Server (zalecane)
```bash
# Jeśli masz Python zainstalowany
cd /path/to/Unit
python -m http.server 8000

# Lub użyj VS Code Live Server extension
# Kliknij prawym na index.html → "Open with Live Server"
```

Następnie otwórz: `http://localhost:8000`

### Metoda 3: Node.js http-server
```bash
npx http-server -p 8000
```

## Struktura Nawigacji

```
index.html (Strona główna)
    ├── services.html (Usługi)
    ├── products.html (Produkty)
    ├── about.html (O nas)
    └── contact.html (Kontakt)
```

Każda strona zawiera:
- Wspólny header z nawigacją
- Unikalną zawartość
- Wspólny footer
- Wspólne skrypty JavaScript

## Responsywność

Strona jest w pełni responsywna i dostosowuje się do różnych rozdzielczości:
- Desktop (> 768px) - Pełny layout z wszystkimi funkcjami
- Tablet/Mobile (≤ 768px) - Menu hamburger, zoptymalizowany układ

## Personalizacja

### Zmiana kolorów
Edytuj zmienne CSS w pliku `styles.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #004999;
    --accent-color: #00a8ff;
    /* ... więcej zmiennych */
}
```

### Wyłączenie efektów myszy
Jeśli chcesz wyłączyć ślad kursora, zakomentuj sekcję "MOUSE TRAIL EFFECT" w `script.js`.

### Dostosowanie animacji
Prędkość animacji można zmienić w `script.js`:
```javascript
// Zmień duration dla liczników statystyk
const duration = 2000; // milliseconds

// Zmień prędkość typowania
setTimeout(typeWriter, 50); // czas między znakami
```

### Dodawanie treści
1. Otwórz `index.html`
2. Znajdź odpowiednią sekcję
3. Dodaj nowe elementy zgodnie z istniejącą strukturą

## Przyszłe Rozszerzenia

- [ ] Backend API dla formularza kontaktowego
- [ ] System CMS do zarządzania treścią
- [ ] Blog z artykułami technicznymi
- [ ] Panel klienta z dashboardem
- [ ] Wielojęzyczność (i18n) - wersje językowe
- [ ] Dark/Light mode toggle
- [ ] Strona portfolio z projektami
- [ ] System newslettera
- [ ] Live chat support

## Performance

Strona jest zoptymalizowana pod kątem wydajności:
- **Brak zewnętrznych bibliotek** - czysty vanilla JS
- **Minimalna liczba requestów HTTP** - wszystkie style w jednym pliku
- **Lazy loading** dla animacji
- **RequestAnimationFrame** dla płynnych animacji (60fps)
- **CSS animations** zamiast JavaScript gdzie możliwe
- **Statyczne pliki** - łatwe cache'owanie
- **Separation of concerns** - HTML, CSS, JS w oddzielnych plikach

## SEO & Accessibility

- ✅ Semantyczny HTML5 (header, nav, main, section, article, footer)
- ✅ Opisowe meta tagi na każdej stronie
- ✅ Alt texts dla wszystkich obrazów
- ✅ ARIA labels gdzie potrzebne
- ✅ Keyboard navigation support
- ✅ Unikalne title dla każdej strony
- ✅ Czysta struktura URL (/services.html, /products.html)

## Deployment

### GitHub Pages
```bash
git add .
git commit -m "Deploy website"
git push origin main
# Enable GitHub Pages in repository settings
```

### Netlify
1. Przeciągnij folder do Netlify Drop
2. Lub połącz z Git repository

### Vercel/Railway/Render
- Wspiera statyczne strony out-of-the-box
- Auto-deploy z GitHub

## Browser Support

- Chrome/Edge (ostatnie 2 wersje) ✅
- Firefox (ostatnie 2 wersje) ✅
- Safari (ostatnie 2 wersje) ✅
- Mobile browsers ✅

## Licencja

© 2025 UnitDev. Wszelkie prawa zastrzeżone.
