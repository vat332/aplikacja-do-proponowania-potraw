import Logo from "../public/images/logo.png";
const Header = () => {
  return (
    <header className="flex items-center justify-center gap-3 shadow-md shadow-gray-100 pb-2 bg-[#FAFAFA]">
      <img src={Logo} alt="logo_icon" className="w-12" />
      <h1 className="bg-gradient-to-r from-[#dd6d48] to-[#eea992] bg-clip-text text-transparent">
        Chef Claude
      </h1>
    </header>
  );
};

export default Header;
