import Card from "./components/card/Card";
import CardImage from "./components/card/CardImage";

function App() {
  return (
    <div className="p-8 min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Card>
        Hello
        <h2>Card baby</h2>
        <p>This is working</p>
        <CardImage src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" />
      </Card>
    </div>
  );
}

export default App;
