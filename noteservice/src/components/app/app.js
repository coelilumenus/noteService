import React, { Component } from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form/';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { label: "Going to learn React", important: false, id: 'skfkas' },
                { label: "it's really interesting c:", important: false, id: 'alsdlf' },
                { label: "I need a brake...", important: true, id: 'asldflas' }
            ]
        }
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id)
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
            
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList onDelete={this.onDelete} posts={this.state.data} />
                <PostAddForm />
            </div>
        )
    }
}

// Практика 3:
// 1. Создать событие в postlistitem +
// 2. Передать функцию через пропс в postlist +
// 3. Передать функцию через пропс в app +
// 4. Перевести app в класс и добавить ему state +
// 5. Переместить data в state +
// 6. Перенести вёрстку в метод render() {} +
// 7. забиндить метод deleteItem +
// 8. Не изменять state напрямую, создать промежуточную переменную и добавлять её в state
// 9. с 19 минуты продолжение