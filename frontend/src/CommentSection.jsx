import React from 'react';

const CommentSection = ({ comments }) => {
    return (
        <div className="comment-section">
            {comments.map((comment, index) => (
                <div key={index} className="comment">
                    <p>{comment}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentSection;