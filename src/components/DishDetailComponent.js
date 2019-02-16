import React, { Component } from 'react';
// import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import Cards from './Cards';

class DishDetail extends Component {

    renderComments (comment) {
        const rdc = comment.map((cmt)=>{
            return (
                <div key={cmt.id}>
                 <ul className="list-unstyled">
                   <li>{cmt.comment}</li>
                   <p></p>
                   <li>-- {cmt.author} {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</li>
                 </ul>
                </div>
            );
        });

        if(comment != null) {
         return (
               <div className="container">
                 <h4>Comments</h4>
                 {rdc}
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
        if(this.props.dish != null) {
        return (
            <div className="row">
               <div className="col-12 12 col-md-5 m-1">
                   <Cards cardDish={this.props.dish} />
               </div>
               <div className="col-12 col-md-5 m-1">
                  {this.renderComments(this.props.dish.comments)}
               </div>
            </div>
        );
    }
     else {
         return (
             <div></div>
         );
     }
 } 
}

export default DishDetail;