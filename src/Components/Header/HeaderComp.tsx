import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="grid grid-col-1 w-full place-items-center p-5">
        <h5 className="text-xl">Hello! I am</h5>
        <h1 className="text-4xl">Shane Franklin</h1>
        <h5 className="text-xl">Software Engineer</h5>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
