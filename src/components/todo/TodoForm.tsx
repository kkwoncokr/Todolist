import { useObserver } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import useStore from '../../core/mobx/useStore';

const TodoForm = ({history}:RouteComponentProps) => {
    const {todo,auth} = useStore();
    const [content, setContent] = useState('');

    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        console.log(todo);
        todo.addTodo(content);
        setContent('');
    }
    useEffect(()=> {
        if(auth.userData.email === '') {
            history.push('/login')
        }
    },[auth.userData])

    const handleLogout = () => {
        auth.logout();
    }
    const onChangeContent = (e:React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    }
    return useObserver(() =>
        <>
            <h2 className="mainTitle">{auth.userData.email} <br/>Todos</h2>
            <button type="button" className="logoutBtn" onClick={handleLogout}>Log out</button>
            <form onSubmit={onSubmit} className="addForm">
                <input type="text" onChange={onChangeContent} value={content} placeholder="내용"/>
                <button type="submit">입력</button>
            </form>
        </>
    );
}

export default withRouter(TodoForm);