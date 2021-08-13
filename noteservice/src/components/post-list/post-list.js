import React from 'react';
import PostListItem from '../post-list-item/';
import { isEmpty } from '../services/'
import './post-list.css'

const PostList = ({ posts, onDelete }) => {

    const elements = posts.map((item) => {
        if (typeof item === 'object' && isEmpty(item)) {
            const {id, ...itemProps} = item;
            return (
                <li key={id} className="list-group-item">
                    <PostListItem
                        {...itemProps}
                        onDelete={() => onDelete(id)} />
                </li>
            )
        }
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;