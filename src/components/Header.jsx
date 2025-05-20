import LogoLight from "../public/images/logo-white.svg";
import LogoDark from "../public/images/logo.svg";

const Header = () => {
  return (
    <header className="fixed z-1000 flex w-full items-center justify-center gap-3 bg-[#FAFAFA] pb-2 shadow-md shadow-gray-200 md:shadow-lg dark:bg-[#272d53] dark:shadow-gray-800">
      <img src={LogoDark} alt="logo_icon" className="w-12 dark:hidden" />
      <img
        src={LogoLight}
        alt="logo_icon_dark"
        className="hidden w-12 dark:block"
      />
      <h1 className="bg-gradient-to-r from-[#dd6d48] to-[#eea992] bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-[#9507ee] dark:to-[#b5b1e7]">
        Chef Claude
      </h1>
    </header>
  );
};

export default Header;
