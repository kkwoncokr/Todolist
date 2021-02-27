import React from 'react';
import { TodoContents, TodoWrap } from './styles';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


const todoIndex = () => {
    return(
        <TodoWrap>
            <TodoContents>
                <TodoForm/>
                <TodoList/>
            </TodoContents>
        </TodoWrap>
    );
}

export default todoIndex;