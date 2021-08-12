import React from 'react';
import './post-list-item.css';

const PostListItem = ({label, important}) => {
    const classes = "app-list-item d-flex justify-content-between";
    return (
        <div className={ important ? classes + ' important' : classes }>
            <span className="app-list-item-label">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-star btn-sm">
                    <i className="fas fa-star"></i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="far fa-trash-alt"></i>
                </button>
                <i className="fas fa-heart"></i>
            </div>
        </div>
    )
}

export default PostListItem;