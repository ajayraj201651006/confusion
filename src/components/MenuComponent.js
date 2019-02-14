import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import DishDetailComponent from './DishDetailComponent';

class Menu extends Component {

    state = {
       selectedDish: null
    }

    onDishSelect = (dish) => {
       this.setState({selectedDish: dish});
    }

    
    
    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                   <Card 
                     onClick={() => this.onDishSelect(dish)}>
                       <CardImg width="100%" src={dish.image} alt={dish.name} />
                       <CardImgOverlay>
                           <CardTitle>{dish.name}</CardTitle>
                       </CardImgOverlay>
                   </Card>
                </div>
            );
        });

        return (
             <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                   <DishDetailComponent selectDish={this.state.selectedDish} />
                </div>    
             </div>   
        );
    }
}

export default Menu;