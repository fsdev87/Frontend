import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  const pageData = data.map((item) => {
    return <Entry key={item.id} {...item} />;
  });
  return (
    <>
      <Header />
      <main className="container">{pageData}</main>
    </>
  );
}
