import logo from "./../assets/react.svg";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="React Logo" />
        <span>ReactFacts</span>
      </nav>
    </header>
  );
}
