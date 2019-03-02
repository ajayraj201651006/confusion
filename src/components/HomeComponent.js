import React from 'react';
import { Card, CardImg, CardBody,  CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { Loading } from './LoadingComponent';

const RenderCard = ({item, isLoading, errMess}) => {
    
    if(isLoading) {
        return (
            <Loading />
        );
    }

    else if(errMess) {
        return (
            <h4>{errMess}</h4>
        );
    }

    else {
        return (
            <Card>
                <CardImg src={item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
    }
}

const home = (props) => {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}
                            isLoading={props.dishLoading}
                            errMess={props.dishErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>
    );
}

export default home;