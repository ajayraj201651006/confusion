import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem,
    Modal, ModalHeader, ModalBody, Button, Label, Row  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
// import CommentForm from './CommentForm';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);


class CommentForm extends Component {

       state = {
           isModalOpen: false
       }

       toggleModalComment = () => {
           this.setState({isModalOpen: !this.state.isModalOpen});
       }

       handleSubmitComment = (values) => {
         this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
       }

       render() {
           return (
               <div className="container">
                   <Button outline onClick={this.toggleModalComment}>
                       <span className="fa fa-comment-o"> Submit Comment</span>
                   </Button>
                   <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModalComment}>
                        <ModalHeader toggle={this.toggleModalComment}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values)=>this.handleSubmitComment(values)}>
                                <Row className="form-group m-1">
                                    <Label htmlFor="rating">Rating</Label>
                                        <Control.select md={6} model=".rating" name="rating"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                </Row>
                                <Row className="form-group m-1">
                                    <Label htmlFor="author">Your Name</Label>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control" 
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}/>
                                    <Errors 
                                      className="text-danger"
                                      model=".author"
                                      show="touched"
                                      messages={{
                                          required: 'Required ',
                                          minLength: 'Must be grater than 2 characters ',
                                          maxLength: 'Must be 15 characters or less'
                                      }}
                                    />
                                </Row>
                                <Row className="form-group m-1">
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Row>
                                <Row className="form-group m-1">
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Row>
                            </LocalForm>
                        </ModalBody>
                   </Modal>
               </div>
           );
       }
}


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
                   <CommentForm addComment={props.addComment} dishId={props.selectDish.id} />
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