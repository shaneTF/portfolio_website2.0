import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="m-auto relative p-10 w-3/4">
      <div className="grid grid-col-1 place-items-center p-5">
        <h5 className="text-xl">Hello! I am</h5>
        <h1 className="text-4xl">Shane Franklin</h1>
        <h5 className="text-xl">Software Engineer</h5>
      </div>
      <div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
