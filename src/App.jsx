import Card from "./components/Card";
import Header from "./components/Header";
import data from "./components/data";

export default function App() {
  const Cards = data.map((item) => {
    return  <Card {...item}></Card>
  });
  return (
    <div className="travel-journal">
      <Header></Header>
      <div className="cards-container">
        {Cards}
      </div>
    </div>
  );
}
