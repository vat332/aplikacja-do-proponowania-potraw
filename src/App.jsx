import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="bodyPattern min-h-screen bg-[#f3f2f2] text-gray-900 dark:bg-[#323a6b] dark:text-gray-200">
      <Header />
      <Main />
    </div>
  );
};

export default App;
