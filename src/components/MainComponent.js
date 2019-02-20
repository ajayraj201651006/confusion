import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent.js';
import { DISHES } from '../shared/Dishes';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import { Route, Switch, Redirect } from 'react-router-dom';



class Main extends Component {

  state = {
        dishes: DISHES
        // selectedDish: null
    }
 
  // onDishSelect = (dish) => {
  //       this.setState({selectedDish: dish});
  //   }

  render() {
    const HomePage = () => {
       return (
          <Home />
       );
    }

    return (
      <div>
       <Header />
       <Switch>
         <Route path="/home" component={HomePage} />
         <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
         <Route exact path="/contactus" component={Contact} />
         <Redirect to="/home" />
       </Switch>
       <Footer />
      </div>
    );
  }
}

export default Main;
