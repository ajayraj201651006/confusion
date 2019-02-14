import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

class Cards extends Component {

    renderDish (dish) {
       return (
        <Card>
            <CardImg top width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle tag="h3">{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
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