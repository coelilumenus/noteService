import React from 'react';
import '../app-header/app-header.css';

const AppHeader = ({ liked, allPosts }) => {
    
    const changeWordsEnd = (wordRoot, number) => {
        let word;
        if (number === 0) {
            word = `${wordRoot}ей`;
        } else if (number === 1) {
            word = `${wordRoot}ь`;
        } else if (number > 1 && number < 5) {
            word = `${wordRoot}и`;
        } else if (number > 4 && number < 21) {
            word = `${wordRoot}ей`;
        } else {
            return changeWordsEnd(wordRoot, (number % 10));
        }
        
        return word;
    }
    
    return (
        <div className="app-header d-flex">
            <h1>Gorpenko Valentin</h1>
            <h2>{allPosts} {changeWordsEnd('запис', allPosts)}, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;