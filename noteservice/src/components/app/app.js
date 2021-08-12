import React from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form/';

import './app.css';

const App = () => {
    
    const data = [
        {label: "Going to learn React", important: false, id: 'skfkas'},
        {label: "it's really interesting c:", important: false, id: 'alsdlf'},
        {label: "I need a brake...", important: true, id: 'asldflas'}
    ]
    
    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data}/>
            <PostAddForm />
        </div>
    )
}

// Практика 2:
// 1. Изменить текст по умолчанию +
// 2. Изменить состояние звёздочек (добавить класс important) +
// 3. Добавить пропсы элементов в имитацию данных пришедших с сервера +
// 4. Добавить keys для постов +
// 5. Создать новый класс расширяющий Component в postListItem
// 6. Добавить state
// 7. Создать метод onImportant (использовать setstate), обернуть в круглые скобки
// 8. Привязать контекст вызова через bind
// 9. Реализовать подобный механизм для лайков

export default App;
