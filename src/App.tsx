import Header from "@/components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Product from "@/components/Product";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Product />
      </Router>
    </div>
  );
}

export default App;
