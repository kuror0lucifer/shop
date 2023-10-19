import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItems: [],
      orders: [],
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
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
