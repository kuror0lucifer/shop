import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Диван",
          img: "sofa.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          category: "sofa",
          price: "500.00",
        },
        {
          id: 2,
          title: "Стул",
          img: "chair.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          category: "chair",
          price: "49.90",
        },
        {
          id: 3,
          title: "Стол",
          img: "table.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          category: "table",
          price: "200.00",
        },
        {
          id: 4,
          title: "Комод",
          img: "dresser.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          category: "dresser",
          price: "150.49",
        },
        {
          id: 5,
          title: "Кровать",
          img: "bed.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          category: "bed",
          price: "249.49",
        },
        {
          id: 6,
          title: "Кресло",
          img: "armchair.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
          category: "armchair",
          price: "349.99",
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
