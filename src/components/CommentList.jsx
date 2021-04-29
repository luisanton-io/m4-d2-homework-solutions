import React, { Component } from 'react'
import Comment from './Comment'
export default class CommentList extends Component {

    state = {
        comments: null
    }

    componentDidMount = () => {
        this.getComments()
    }

    componentDidUpdate = (prevProps) => {
        prevProps.asin !== this.props.asin && this.getComments()
    }

    getComments = async () => {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdlY2NmNzRjMWE1YjAwMTU0ODc4MjUiLCJpYXQiOjE2MTk3MDY0ODgsImV4cCI6MTYyMDkxNjA4OH0.VhqhOCFmAszoAGrk9vmpAO83dKjQgiEVtaFkWdCSe1M"
            }
        })
        const comments = await response.json()

        this.setState({ comments })
    }

    render() {
        return (
            <div>
                {
                    this.state.comments &&
                    this.state.comments.map(comment => <Comment comment={comment} />)
                }
            </div>
        )
    }
}
