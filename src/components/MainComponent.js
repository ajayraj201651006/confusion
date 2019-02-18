import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
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
       <Header />
       <Menu dishes={this.state.dishes} 
             clicked={(dishId)=>{this.onDishSelect(dishId)}} />
       <DishDetail selectDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }
}

export default Main;
