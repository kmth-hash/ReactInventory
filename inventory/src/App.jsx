import "./App.css";
import { initialState, combineReducers } from "./reducers";
import { AppStateProvider } from "./context/AppState";
import { BrowserRouter, Link, Navigate, Routes, Route } from "react-router-dom";
import counterReducer from "./reducers/CounterReducer";
import ItemAdd from "./pages/ItemAdd";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Bills from "./pages/Bills";
import Items from "./pages/Items";

const appReducers = combineReducers({
  counter: counterReducer,
});

function App() {
  return (
    <AppStateProvider reducer={appReducers} initialState={initialState}>
      <div className="App primary-color-1">
        <Navbar />
        <Routes>
          <Route path="/item-add" element={<ItemAdd />} />
          <Route path="/home" element={<Home />} />
          <Route path="/items" element={<Items />} />
          <Route path="/products" element={<ItemAdd />} />
          <Route path="/record" element={<Bills />} />
          <Route exact path="/" element={<Navigate to={"/home"} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </AppStateProvider>
  );
}

export default App;
