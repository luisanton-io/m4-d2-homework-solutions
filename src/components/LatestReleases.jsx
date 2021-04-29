import React from 'react';
import { Row, Card, Col } from 'react-bootstrap'
import CommentArea from './CommentArea'
import fantasy from '../data/fantasy.json'

export default class LatestReleases extends React.Component {

    state = {
        selectedBook: null // the full book or null
    }


    render() {
        console.log(this.state)
        return <Row>
            {
                fantasy.map(book => {
                    // return <img className="book-cover" src={book.img} />
                    return <Col xs={12} md={4} lg={3}>
                        <Card className="book-cover" onClick={() => this.setState({ selectedBook: book })}>
                            < Card.Img variant="top" src={book.img} />
                            <Card.Body>
                                <Card.Title>
                                    {book.title}
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                })
            }
            <CommentArea book={this.state.selectedBook} deselectBook={() => this.setState({ selectedBook: null })} />
        </Row >
    }
}