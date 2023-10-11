import Product from "./components/Product";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Fancy Florist</h1>
      <Product
        name="Congratulations Bouquet"
        description="The perfect bouquet for a celebration such as a birthday or graduation."
        price={70}
        sale={true}
        url={"./CongratulationsBouquet.jpg"}
      />
      <Product
        name="Apology Bouquet"
        description="You need something extra when you know you messed up."
        price={150}
        sale={false}
        url={"./ApologyBouquet.jpg"}
      />
      <Product
        name="Wedding Bouquet"
        description="Beautiful collection of flowers to turn heads on your special day!"
        price={200}
        sale={true}
        url={"./WeddingBouquet.jpg"}
      />
    </div>
  );
}

export default App;
