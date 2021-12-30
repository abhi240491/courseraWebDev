import React, { Component } from "react";
//import DishDetailComponent from "./DishDetailComponent";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle tag="h3"> {dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        {/*this.state.selectedDish && (
            <DishDetailComponent selDish={this.state.selectedDish} />
        )*/}
      </div>
    );
  }
}

export default Menu;
