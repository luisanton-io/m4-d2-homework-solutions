import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import CommentList from './CommentList'
import AddComment from './AddComment'

export default class CommentArea extends Component {
    render() {
        const { book, deselectBook } = this.props
        return (<>
            {
                book &&
                <div id="comment-area">
                    <h5>{book.title}</h5>

                    <div className="d-flex p-3">

                        <img className="img-fluid w-25 my-auto" src={book.img} />
                        <div className="d-flex flex-column p-3">
                            <CommentList asin={this.props.book.asin} />
                            <AddComment asin={this.props.book.asin} />

                        </div>
                    </div>

                    <Button onClick={() => deselectBook()}>Close comment area</Button>
                </div>
            }
        </>
        )
    }
}
