const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

class App extends React.Component {
  handletTitleCLick() {
    alert("Ýou clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        {
          onClick: this.handletTitleCLick
        },
        "Adopt ME"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "dog",
        breed: "breeze"
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "bird",
        breed: "Cokcatiel"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "cat",
        breed: "mixed"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
