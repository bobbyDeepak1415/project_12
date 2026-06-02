import Card from "./components/card/Card";
import CardTitle from "./components/card/CardTitle";

function App() {
  return (
    <div className="p-8 min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Card>
        Hello
        <h2>Card baby</h2>
        <p>This is working</p>
        <CardTitle>
          <p>Title</p>
        </CardTitle>
      </Card>
    </div>
  );
}

export default App;
