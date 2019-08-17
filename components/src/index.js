import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className = "ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45 PM" 
                    content="Nice blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Thomas" 
                    timeAgo="Today at 2:13 AM" 
                    content="I like the subject!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Dennis" 
                    timeAgo="Yesterday at 5:00 PM" 
                    content="I like the writing"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));