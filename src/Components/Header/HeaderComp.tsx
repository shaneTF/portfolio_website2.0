import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="grid grid-col-1 w-full place-items-center">
        <h5>Hello! I am</h5>
        <h1>Shane Franklin</h1>
        <h5>Software Engineer</h5>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
