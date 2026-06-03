import { cardsData } from "./data/cardsData";
import Card from "./components/card/Card";
import CardImage from "./components/card/CardImage";
import CardHeader from "./components/card/CardHeader";
import CardTitle from "./components/card/CardTitle";
import CardBody from "./components/card/CarBody";
import CardFooter from "./components/card/CardFooter";

function App() {
  return (
    <div className="p-8 min-h-screen bg-linear-to-br from-gray-200 to-gray-400">
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

                <CardFooter>
                  <div className="flex items-center justify-between">
                    {card.price ? (
                      <span className="font-bold text-2xl text-gray-800">
                        {card.price}
                      </span>
                    ) : (
                      <span className="text-gray-500 text-sm">
                        Contact for pricing
                      </span>
                    )}
                    <button className="bg-blue-500 hover:bg-blue-700 transition-colors rounded-md px-3 py-1 text-white font-medium">
                      Book now
                    </button>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-16">
          <Card variant="dark">
            <h2 className="font-bold text-3xl mb-4">Project structure</h2>
            <div className="space-y-3 text-gray-300 text-lg font-mono">
              <p>📁src/</p>
              <p className="ml-4">📁components/</p>
              <p className="ml-6">📁card/</p>

              <p className="ml-12">📄Card.jsx - Main card wrapper</p>
              <p className="ml-12">📄CardHeader.jsx Header</p>
              <p className="ml-12">📄CardTitle.jsx Title</p>
              <p className="ml-12">📄CardBody.jsx Body Content</p>
              <p className="ml-12">📄CardFooter.jsx Footer</p>
              <p className="ml-12">📄CardImage.jsx Image with fallback ui</p>
              <p className="ml-4">📁data/</p>
              <p className="ml-8">📄cardsData.jsx</p>
              <p className="ml-4">📄App.jsx Main Application</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
