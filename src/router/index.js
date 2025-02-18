import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";

// Manually import each page component instead of dynamically using lazy()
import Home from "../pages/Home";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
