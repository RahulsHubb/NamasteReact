const runReact = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("h1", {class:"red"}, "Created as Child")
  );
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(runReact);