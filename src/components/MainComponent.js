import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/Dishes';
import DishDetail from './DishDetailComponent';



class Main extends Component {

  state = {
        dishes: DISHES,
        selectedDish: null
    }
 
  onDishSelect = (dish) => {
        this.setState({selectedDish: dish});
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
             clicked={(dishId)=>{this.onDishSelect(dishId)}} />
       <DishDetail selectDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
