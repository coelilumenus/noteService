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
                { label: "Going to learn React", important: false, like: false, id: 1 },
                { label: "it's really interesting c:", important: false, like: false, id: 2 },
                { label: "I need a brake...", important: false, like: false, id: 3 }
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        
        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id)
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }
    
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    
    onToggleImportant(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const oldItem = data[index];
            const newItem = {...oldItem, important: !oldItem.important}
            
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            
            return {
                data: newArr
            }
        })
    }
    
    onToggleLiked(id) {
        this.setState(({ data }) => {
            const index = data.findIndex(elem => elem.id === id);
            
            const oldItem = data[index];
            const newItem = {...oldItem, like: !oldItem.like}
            
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            
            return {
                data: newArr
            }
        })
    }

    render() {
        const { data } = this.state;
        
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        
        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostStatusFilter />
                </div>
                <PostList
                    onDelete={this.deleteItem}
                    posts={this.state.data} 
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem} />
            </div>
        )
    }
}

// Практика 5:
// 1. поменять див на form снова +
// 2. переделать postaddform в класс +
// 3. добавить событие Onchange +
// 4. забиндить +
// 5. обновить state text e.target.value
// 6. добавить обработчик события на форму onsubmit
// 7. отменить стандартное поведение на онсабмит
// 8. забиндить онсабмит
// 9. добавить value this.state.text
// 10. this.setState({text: ''})