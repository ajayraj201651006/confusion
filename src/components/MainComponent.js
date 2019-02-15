import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/Dishes';
import DishDetailComponent from './DishDetailComponent';


class Main extends Component {

  state = {
    dishes: DISHES,
    selectedDish: null
  }

  onDishSelect = (dishId) => {
    this.setState({selectedDish: dishId});
 }

  render() {
    return (
      <div>
       <Navbar dark color="primary">
         <div className="container">
           <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
         </div>
       </Navbar>
       <Menu dishes={this.state.dishes} 
            onClick={(dishId)=>this.onDishSelect(dishId)} />
       <DishDetailComponent 
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selctedDish)[0]}/>
      </div>
    );
  }
}

export default Main;
