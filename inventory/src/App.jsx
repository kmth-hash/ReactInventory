import "./App.css";
import { initialState, combineReducers } from "./reducers";
import { AppStateProvider } from "./context/AppState";
import { BrowserRouter, Link, Redirect, Routes, Route } from "react-router-dom";
// import { Routes, Route } from "react-router";
import counterReducer from "./reducers/CounterReducer";
import ItemAdd from "./pages/ItemAdd";
import Navbar from "./components/Navbar";
import Counter from "./pages/Counter";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";

const appReducers = combineReducers({
  counter: counterReducer,
});

function App() {
  return (
    <AppStateProvider reducer={appReducers} initialState={initialState}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="item-add" element={<ItemAdd />} />
          <Route path="home" element={<Home />} />
          <Route path="items" element={<ItemAdd />} />
          <Route path="products" element={<ItemAdd />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </AppStateProvider>
  );
}

export default App;
