import Card from "./components/card/Card";
import CardHeader from "./components/card/CardHeader";

function App() {
  return (
    <div className="p-8 min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Card>
        Hello
        <h2>Card baby</h2>
        <p>This is working</p>
        <CardHeader>
          <p>Header</p>
        </CardHeader>
      </Card>
    </div>
  );
}

export default App;
