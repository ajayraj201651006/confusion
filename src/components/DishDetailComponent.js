import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import Cards from './Cards';

class DishDetail extends Component {

    renderComments (comment) {
        if(comment != null) {
         return (
            <div>
               
            </div>
         );
        }
          else {
              return (
                  <div></div>
              );
          }
    }
    
    render() {
        if(this.props.selectDish != null) {
        return (
            <div className="row">
               <div className="col-12 col-md-5 m-1">
                   <Cards cardDish={this.props.selectDish} />
               </div>
               <div className="col-12 col-md-5 m-1">
                  {this.renderComments(this.props.selectDish.comments)}
               </div>
            </div>
        );
    }
     else {
         return (
             <div>
             </div>
         );
     }
 } 
}

export default DishDetail;