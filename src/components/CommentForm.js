import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button, Label, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


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
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
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
                                <Row >
                                    <Label htmlFor="rating">Rating</Label>
                                        <Control.select model=".rating" name="rating"
                                            className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                </Row>
                                <Row className="form-group">
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
                                <Row className="form-group">
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Row>
                                <Row className="form-group">
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

export default CommentForm;