//This component will now be the main source of state for this page.
import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetailComponent from './DishDetailComponent';
import {DISHES} from '../shared/dishes';
class MainComponent extends Component {
    constructor(props){
      super(props)
      this.state = {
        dishes: DISHES,
        selectedDish: null,
      };
    }

    onDishSelect(dishId) {
        const selDish = this.state.dishes.filter((dish) => dish.id === dishId)[0];
        this.setState({ selectedDish: selDish });
        
      }

    render(){
        console.log(this.state.selectedDish);
    return (
      <div>
        <Navbar dark color="primary">
        <div className = 'container'>
          <NavbarBrand href='/'>Ristorante Con fusion</NavbarBrand>
        </div>
        </Navbar>
        <Menu dishes = {this.state.dishes}
                onClick = {(dishId) => this.onDishSelect(dishId)}/>
        {this.state.selectedDish&&<DishDetailComponent selDish = {this.state.selectedDish}/>}
      </div>
    );
    }
  }
  
  export default MainComponent;