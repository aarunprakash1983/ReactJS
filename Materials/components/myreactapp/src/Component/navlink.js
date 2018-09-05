import React from "react";
import { HashRouter, Switch, Route, NavLink } from "react-router-dom";
import "./navlink.css";

const Page = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <p>Active navigation link must have a yellow background...</p>
  </div>
);
const Home = () => <Page title="Home" />;
const About = () => <Page title="About" />;

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" className="normal" activeClassName="active" exact>
          home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="normal" activeClassName="active" exact>
          about
        </NavLink>
      </li>
    </ul>
  );
};

const Root = () => {
  return (
    <HashRouter>
      <div>
        <AddressBar />
        <Nav />
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </HashRouter>
  );
};

const AddressBar = () => {
  return (
    <Route
      render={({ location: { pathname }, history: { goBack, goForward } }) => (
        <div className="address-bar">
          <a onClick={goBack}>◀︎</a> <a onClick={goForward}>▶</a>
          <div className="url">URL: {pathname}</div>
        </div>
      )}
    />
  );
};

export default Root;
