import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';


    function RenderComments ({ comment }) {
        const rdc = comment.map((cmt)=>{
            return (
                <div key={cmt.id}>
                 <ul className="list-unstyled">
                   <li>{cmt.comment}</li>
                   <p></p>
                   <li>-- {cmt.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</li>
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

    function RenderDish({ dish }) {
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
    
    const DishDetail = (props) => {
        if(props.selectDish != null) {
        return (
            <div className="container">
            <div className="row">
               <div className="col-12 col-md-5 m-1">
                   <RenderDish dish={props.selectDish} />
               </div>
               <div className="col-12 col-md-5 m-1">
                   <RenderComments comment={props.selectDish.comments} />
               </div>
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


export default DishDetail;