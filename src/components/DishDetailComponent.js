import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.selectDish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.selectDish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
               <div className="col-12 col-md-5 m-1">
                   <RenderDish dish={props.selectDish} />
               </div>
               <div className="col-12 col-md-5 m-1">
                   <RenderComments comment={props.comments} />
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