import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail.js';
import ApprovalCard from './ApprovalCard.js';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45 PM"
                    content="Nice Blog Post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Gary"
                    timeAgo="Today at 2:00 AM"
                    content="Amazing Work Man!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Denis"
                    timeAgo="Yesterday at 5:00 PM"
                    content="That's high quality content"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));