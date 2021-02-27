import React, { useState } from 'react';
import useStore from '../../core/mobx/useStore';

const TodoForm = () => {
    const {todo} = useStore();
    const [content, setContent] = useState('');

    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log(todo);
        todo.addTodo(content);
        setContent('');
    }

    const onChangeContent = (e:React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }
    return(
        <>
            <h2 className="mainTitle">kkwon <br/>Todos</h2>
            <form onSubmit={onSubmit} className="addForm">
                <input type="text" onChange={onChangeContent} value={content} placeholder="내용"/>
                <button type="submit">입력</button>
            </form>
        </>
    );
}

export default TodoForm;