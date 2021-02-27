import React from 'react';

import useStore from '../../core/mobx/useStore';
import {TodoData} from '../../core/mobx/stores/todo';

interface Props {
    data:TodoData;
}

const TodoItem =({data}:Props) => {
    const {todo} = useStore();
    const removeItem = () => {
        todo.removeTodo(data.id);
    }
    return(
        <article className="Todoitem">
            <input type="checkbox"/>
            <p className="TodoContent">{data.content}</p>
            <button type="button" onClick={removeItem}>삭제하기</button>
        </article>
    );
}

export default TodoItem;