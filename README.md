# Chef Claude

Aplikacja **Chef Claude** pozwala użytkownikowi wprowadzić listę składników, a następnie generuje propozycję przepisu na podstawie tych składników, korzystając z AI.

## Funkcje

- Dodawanie i usuwanie składników z listy.
- Generowanie przepisu na podstawie podanych składników (wsparcie AI).
- Przejrzysty interfejs użytkownika z loaderem podczas generowania przepisu.
- Odpowiedzi formatują się automatycznie w Markdown.

## Jak uruchomić projekt

1. **Zainstaluj zależności:**
   ```sh
   npm install
   ```

2. **Utwórz plik `.env` z kluczem API HuggingFace:**
   ```
   VITE_HF_ACCESS_TOKEN=twoj_token_huggingface
   ```

3. **Uruchom aplikację w trybie deweloperskim:**
   ```sh
   npm run dev
   ```

4. **Otwórz przeglądarkę i przejdź do:**
   ```
   http://localhost:5173
   ```

## Struktura projektu

- `src/` – kod źródłowy aplikacji
  - `components/` – komponenty Reacta (np. Header, IngredientsList, ClaudeRecipe)
  - `ai.js` – obsługa komunikacji z API AI
  - `App.jsx`, `Main.jsx` – główne komponenty aplikacji
  - `index.css`, `normalize.css` – style

## Technologie

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [@huggingface/inference](https://www.npmjs.com/package/@huggingface/inference)
- [react-markdown](https://github.com/remarkjs/react-markdown)

## Licencja

MIT
