import "./Header.css";
import logo from "../../assets/chef.png";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <img src={logo} alt="Chef Claude" />
        <h1>Chef Claude</h1>
      </div>
    </nav>
  );
}
