import { Header } from "./header/Header";
import { AllRoutes } from "./routes/Router";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />{" "}
    </div>
  );
}
