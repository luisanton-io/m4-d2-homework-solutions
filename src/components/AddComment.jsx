import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

export default class AddComment extends Component {

    state = {
        comment: '',
        rate: 5
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const body = JSON.stringify({
            ...this.state,
            elementId: this.props.asin
        })

        console.log(body);

        const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDdlY2NmNzRjMWE1YjAwMTU0ODc4MjUiLCJpYXQiOjE2MTk3MDY0ODgsImV4cCI6MTYyMDkxNjA4OH0.VhqhOCFmAszoAGrk9vmpAO83dKjQgiEVtaFkWdCSe1M"
            },
            body
        })

        if (response.ok) {
            alert("Comment posted!")
        } else { alert("Something went wrong") }
    }

    render() {
        return (
            <Form className="mt-auto w-100" onSubmit={this.handleSubmit}>
                <select value={this.state.rate} onChange={e => this.setState({ rate: e.target.value })}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <Form.Control value={this.state.comment} onChange={e => this.setState({ comment: e.target.value })} />
            </Form>
        )
    }
}
