import Card from "./components/Card";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header></Header>
      <div className="cards-container">
        <Card></Card>
      </div>
    </>
  );
}
