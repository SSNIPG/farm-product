import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import MainPage from "/src/components/pages/main-page/main-page";
import Order from "/src/components/pages/order/order";
import advantages from "/src/mocks/advantages";
import products from "../../mocks/products";
import { GlobalStyle } from "./styles";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";
import { AppRoute } from "../../const";
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop />
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage advantages={advantages} />} />
            <Route
              exast
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={<Order products={products} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
