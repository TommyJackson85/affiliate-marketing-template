// Import the React and ReactDOM libraries
import React from 'react';
import faker from 'faker';

// Create a react component
const CommentDetail = props => {
    //function based component.
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.image} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">
                        Today at {props.date}
                    </span>
                </div>
                <div className="text">{props.comment}</div>
            </div>                
        </div>
    );
};

export default CommentDetail;