import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <h1 className="header__title">!Facebook</h1>
      <img
        src="./notFavicon.png"
        alt="!Facebook logo"
        className="header__logo"
        width={48}
        height={48}
      />
    </HeaderStyled>
  );
};

export default Header;
