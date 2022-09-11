import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class DownloadGames extends React.Component {
    constructor() {
        super()



        this.state = {
            "chesscomUsername" : "masslove",
            "dateBeg" : "2022-09-01",
            "dateEnd" : "2022-09-07"
        }

        this.dateBeg = new Date(2022,9,1)
    }

    handleChange(event) {
        const {name, value} = event.target
        console.log(name)
        console.log(value)        
        // this.setState( { "chesscomUsername" : value } )
        



        // const target = event.target
        // console.log(target)
        // const values = target.chesscomUsername.value
        // console.log(values)
        // //this.setState({value: event.target.value});

    }


    handleFormSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        formData.forEach((value, property) => this.state[property] = value);
        console.log(JSON.stringify(this.state))

    }

    render() {
        return (
            <Form onSubmit={ (event, values) =>
                this.handleFormSubmit(event, values)                    
            }>                
                <Form.Label>Download user games PGN</Form.Label>
                <Form.Group as={Row} controlId="formChessconUsername">
                    <Col><Form.Label>Chess.com username</Form.Label></Col>
                    <Col><Form.Control type="text" name="chesscomUsername"  onChange={this.handleChange}  /></Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formDateBeg">
                    <Col><Form.Label>Export games since</Form.Label></Col>
                    <Col><Form.Control type="date" name="dateBeg" defaultValue={this.state.dateBeg} onChange={this.handleChange} /></Col>
                </Form.Group>                       
                <Form.Group as={Row} >                       
                    <Col><Form.Label>till</Form.Label></Col>
                    <Col><Form.Control type="date" name="dateEnd" defaultValue={this.state.dateEnd} onChange={this.handleChange} /></Col>
                </Form.Group>                                  
                <Button variant="primary" type="submit">
                    Download
                </Button>                            
            </Form>


        )
    }
}

export default DownloadGames;