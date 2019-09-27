// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


// Create a react component
const App = () => {
    //function based component.

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Alex" date="4:45PM" comment="Where are you?" image={faker.image.avatar()} />
            </ApprovalCard>
            <Message>
                <div>
                    <h1>What Ever</h1>
                    <p>Sure</p>
                </div>
            </Message>
            <Message>
                <div>
                    <h1>Are you sure</h1>
                    <h1>Are you sure</h1>
                    <p>Sure</p>
                </div>
            </Message>
            <CommentDetail author="Alex" date="4:45PM" comment="Where are you?" image={faker.image.avatar()} />
            <CommentDetail author="Jane" date="5:45PM" comment="Where are thee?" image={faker.image.avatar()}/>
            <CommentDetail author="James" date="7:45PM" comment="Where are though?" image={faker.image.avatar()}/>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className="ui message">
            {props.children}
        </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);