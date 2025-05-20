import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="min-h-screen bg-[#f3f2f2] text-gray-900 dark:bg-[#272d53] dark:text-gray-200">
      <Header />
      <Main />
    </div>
  );
};

export default App;
