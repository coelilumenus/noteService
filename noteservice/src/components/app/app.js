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

// Практика 4:
// 1. Пробросить важность и лайки в app.js +
// 2. создать там методы onToggleImportant(id) и onToggleLiked(id) +
// 3. забиндить эти функции +
// 4. передать и запустить методы в postlist +
// 5. вытащить эти функции в postlistitem из пропсов +
// 6. убрать пропсы, функции, стэйт из postlistitem +
// 7. достать важность и лайки из пропсов в postlistitem +
// 8. создать метод onToggleLiked с учётом принципа иммутабельности