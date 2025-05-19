import Logo from "../public/images/logo.png";
const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo_icon" />
      <h1>Chef Claude</h1>
    </header>
  );
};

export default Header;
