import { cardsData } from "./data/cardsData";
import Card from "./components/card/Card";
import CardImage from "./components/card/CardImage";

function App() {
  return (
    <div className="p-8 min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="mb-4 text-5xl font-bold text-gray-800">
            Travel destinations
          </h1>
          <p className="text-xl text-gray-600 ">
            Reusable card component with dynamic data
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              variant={card.id % 2 === 0 ? "primary" : "default"}
              padding="none"
            >
              {card.image && <CardImage src={card.image} alt={card.title} />}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
