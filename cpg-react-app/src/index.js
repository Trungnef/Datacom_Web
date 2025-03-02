import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import MainSectionOne from "./components/main-section/mainSectionOne";
import MainSectionTwo from "./components/main-section/mainSectionTwo";
import NewArrivalItem from "./components/new-arrival/newArrivalItem";
import OurProduct from "./components/our-product/ourProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <HeroBanner />
    <MainSectionOne />
    <MainSectionTwo />
    <NewArrivalItem />
    <OurProduct />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
