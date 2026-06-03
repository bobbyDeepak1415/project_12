import { cardsData } from "./data/cardsData";
import Card from "./components/card/Card";
import CardImage from "./components/card/CardImage";
import CardHeader from "./components/card/CardHeader";
import CardTitle from "./components/card/CardTitle";
import CardBody from "./components/card/CarBody";
import CardFooter from "./components/card/CardFooter";

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
              <div className="p-6">
                <CardHeader>
                  {card.category && (
                    <span className="text-sm inline-block rounded-full mb-2 font-semibold px-3 py-1 bg-blue-100 text-blue-700 ">
                      {card.category}
                    </span>
                  )}
                  <CardTitle
                    className={card.id % 2 === 0 ? "text-blue-800" : ""}
                  >
                    {card.title}
                  </CardTitle>
                  {card.rating && (
                    <div className="flex items-center gap-1">
                      <span>⭐</span>
                      <span>{card.rating}/5.0</span>
                    </div>
                  )}
                </CardHeader>
                {card.description ? (
                  <CardBody>{card.description}</CardBody>
                ) : (
                  <span className="text-gray-600 italic">
                    No description available
                  </span>
                )}

                <CardFooter className={card.id%2===0 ? "border-blue-200":""}>
                  <div className="flex items-center justify-between">
                    {card.price ? (
                      <span className="font-bold text-2xl">{card.price}</span>
                    ):
                    <span>Contact for pricing</span>
                    }
                    <button className="bg-blue-500 rounded-md px-3 py-1 text-white">Book now</button>
                  </div>
                </CardFooter>
                
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
