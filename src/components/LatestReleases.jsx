import React from 'react';
import { Card } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'

export default function LatestReleases() {
    console.log(fantasy)

    return <div className="d-flex flex-wrap">{
        fantasy.map(book => {
            // return <img className="book-cover" src={book.img} />
            return <Card className="book-cover">
                < Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>
                        {book.title}
                    </Card.Title>
                </Card.Body>
            </Card>
        })
    }</div >
}