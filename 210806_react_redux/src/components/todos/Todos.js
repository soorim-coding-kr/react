import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todos = () => {
    return (
        <div>
            <h1>할일 입력하기</h1>
            <TodoInput />
            <TodoList />
        </div>
    );
};

export default Todos;