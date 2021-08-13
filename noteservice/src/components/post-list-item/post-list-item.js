import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    render() {
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = this.props;
        
        let classes = "app-list-item d-flex justify-content-between";
        if (important) {
            classes += ' important';
        }
        
        if (like) {
            classes += ' like'
        }
        
        return (
            <div className={classes}>
                <span 
                    className="app-list-item-label"
                    onClick={onToggleLiked}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                    type="button" 
                    className="btn-star btn-sm"
                    onClick={onToggleImportant}
                    >
                        <i className="fas fa-star"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="far fa-trash-alt"></i>
                    </button>
                    <i className="fas fa-heart"></i>
                </div>
            </div>
        )
    }
}

