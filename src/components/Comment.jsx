import React from 'react'

export default function Comment({ comment: { comment, rate, author } }) {
    return (
        <div class="comment">
            <h6>{author}</h6>
            <span>{rate}</span>
            <p>{comment}</p>
        </div>
    )
}
