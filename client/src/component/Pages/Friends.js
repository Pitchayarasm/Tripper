import React from "react";
import { Row, Col, Card, CardTitle } from "react-materialize";

class Friends extends React.Component {
    state = {
        user: null
    };

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <Row className="FriendProfile">
                    <Col s={1} className='grid-example'></Col>
                    <Col s={3} className='grid-example'>
                        <Card className='small'
                            header={<CardTitle image='img/sample-1.jpg'>Card Title</CardTitle>}
                            actions={[<a href='#'>This is a Link</a>]}>
                            <img className="Friend" src="https://via.placeholder.com/346/666.png/fff" alt="tripper" />
                            <h3>Mr. Nobody</h3>
                            <p>CEO & Director</p>
                        </Card >
                    </Col>
                    <Col s={3} className='grid-example'>
                        <div className="SearchCard">
                            <img className="Friend" src="https://via.placeholder.com/346/666.png/fff" alt="tripper" />
                            <h3>Mr. Nobody</h3>
                            <p>CEO & Director</p>
                        </div></Col>
                    <Col s={3} className='grid-example'>
                        <div className="SearchCard">
                            <img className="Friend" src="https://via.placeholder.com/346/666.png/fff" alt="tripper" />
                            <h3>Mr. Nobody</h3>
                            <p>CEO & Director</p>
                        </div>
                    </Col>
                    <Col s={1} className='grid-example'></Col>
                </Row>
                <Row className="FriendProfile">
                    <Col s={1} className='grid-example'></Col>
                    <Col s={3} className='grid-example'>
                        <div className="SearchCard">
                            <img className="Friend" src="https://via.placeholder.com/346/666.png/fff" alt="tripper" />
                            <h3>Mr. Nobody</h3>
                            <p>CEO & Director</p>
                        </div></Col>
                    <Col s={3} className='grid-example'>
                        <div className="SearchCard">
                            <img className="Friend" src="https://via.placeholder.com/346/666.png/fff" alt="tripper" />
                            <h3>Mr. Nobody</h3>
                            <p>CEO & Director</p>
                        </div></Col>
                    <Col s={3} className='grid-example'>
                        <div className="SearchCard">
                            <img className="Friend" src="https://via.placeholder.com/346/666.png/fff" alt="tripper" />
                            <h3>Mr. Nobody</h3>
                            <p>CEO & Director</p>
                        </div>
                    </Col>
                    <Col s={1} className='grid-example'></Col>
                </Row>


            </div>
        );
    }
}


export default Friends;