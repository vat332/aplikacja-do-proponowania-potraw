import Header from "./components/Header";
import Main from "./components/Main";
import { useDarkMode } from "./darkMode";

const App = () => {
  const [isDark, toggleDarkMode] = useDarkMode();
  return (
    <main className="bodyPattern min-h-screen bg-[#f3f2f2] text-gray-900 dark:bg-[#323a6b] dark:text-gray-200">
      <div className="bodyPattern min-h-screen bg-[#f3f2f2] text-gray-900 dark:bg-[#323a6b] dark:text-gray-200">
        <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <Main />
      </div>
    </main>
  );
};

export default App;
