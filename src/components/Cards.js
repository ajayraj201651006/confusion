import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';

class Cards extends Component {

    renderDish (dish) {
       return (
        <div>
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle tag="h3">{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
       );
    }

    render() {
          return (
             <div>
                {this.renderDish(this.props.cardDish)}
             </div>
          );
    }
}

export default Cards;