import React from "react";
import { Row, Col, Icon, Button, Modal, Input } from "react-materialize";
import axios from "axios"

class Journal extends React.Component {
    state = {
        entryTitle: "",
        entryText: "",
        entryChange: "",
        titleChage: "",
        user: null
    };

    componentDidMount() {

    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.id;

        this.setState({
            [name]: value
        });
    };

    makeNewEntry = () => {
        //not sure how to access id for user, journal, or entry, but i think those will be necessary for making distinctions
        axios.post(`/journal/:userID/:journalID/:entryID`, {
            entryTitle: this.state.entryTitle,
            entryText: this.state.entryText
        }).catch(err => {
            console.log(err);
        });

        this.setState({
            entryText: "",
            entryTitle: "",
            entryChange: "",
            titleChage: ""
        });
    }

    updateEntry = () => {
        //not sure how to access id for user, journal, or entry, but i think those will be necessary for making distinctions
        axios.post("/journal/:userID/:journalID/:entryID", {
            entryTitle: this.state.entryTitle,
            entryText: this.state.entryText
        }).catch(err => {
            console.log(err);
        });

        this.setState({
            entryText: "",
            entryTitle: "",
            entryChange: "",
            titleChage: ""
        });
    }

    render() {
        return (
            <div>
                <Row>
                    <Col s={3} className='grid-example'></Col>
                    <Col s={3} className='grid-example'>
                            <h2>My trip to... </h2>
                            <br></br>
                            <span id="editBtn" className="journal-button">
                                <Modal
                                    header='Modal Header'
                                    trigger={<Button>
                                        <Icon>edit</Icon></Button>}>
                                    <Row id="updateEntryForm">
                                        <Input id="titleChange" value={this.state.titleChage} onChange={this.handleInputChange} type='title' />
                                        Title
                                <Input id="entryChange" value={this.state.entryChange} onChange={this.handleInputChange} type='textarea' />
                                        <Button id="newEntryConfirm" onClick={this.updateEntry} />
                                    </Row>
                                </Modal>
                            </span>
                            <p>Tell your story...</p>
                            <hr />
                    </Col>


                    <Col s={4} className='journal_pics'>
                        <img className="fit_img tile" src="https://via.placeholder.com/150/666.png/fff" alt="tripper" />
                        <img className="fit_img tile" src="https://via.placeholder.com/300x150/666.png/fff" alt="tripper" />
                        <img className="fit_img tile" src="https://via.placeholder.com/150x300/666.png/fff" alt="tripper" />
                        <img className="fit_img tile" src="https://via.placeholder.com/150/666.png/fff" alt="tripper" />
                        <img className="fit_img tile" src="https://via.placeholder.com/150/666.png/fff" alt="tripper" />
                        <img className="fit_img tile" src="https://via.placeholder.com/150/666.png/fff" alt="tripper" />
                        <img className="fit_img tile" src="https://via.placeholder.com/150/666.png/fff" alt="tripper" />
                        <Modal
                            header='Modal Header'
                            trigger={<Button waves='light'>Add<Icon right>insert_chart</Icon></Button>}>
                            <Row id="addNewEntryForm">

                                <Input type='file' id="entryText" value={this.state.entryText} onChange={this.handleInputChange} />

                                <Button id="newEntryConfirm" onClick={this.makeNewEntry} />
                            </Row>
                        </Modal>

                    </Col>
                    <Col s={2} className='grid-example'></Col>
                </Row>
            </div>
        );
    }
}


export default Journal;