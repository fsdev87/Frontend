import logo from "../assets/react.svg";

export default function Header() {
  return (
    <header className="flex items-center gap-4 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-md shadow-md mb-6">
      <img src={logo} alt="React Logo" className="w-12 h-12" />
      <h1 className="text-white text-2xl font-bold tracking-wide">
        Meme Generator
      </h1>
    </header>
  );
}
