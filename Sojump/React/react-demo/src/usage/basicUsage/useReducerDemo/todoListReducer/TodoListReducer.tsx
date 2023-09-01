import { ChangeEvent, FC, useReducer, useState } from "react";
import { initialState, reducer } from "./store";


const TodoListReducer: FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [newTodoTitle, setNewTodoTitle] = useState("");
    return (
        <>
            <h3>TodoList</h3>
            <input placeholder="add new todo..." type="text" value={newTodoTitle} onChange={(e: ChangeEvent<HTMLInputElement>) => { setNewTodoTitle(e.target.value) }} />
            <button onClick={() => dispatch({ type: "addTodoItem", payload: { title: newTodoTitle } })}>添加</button>
            <div>
                <ul>
                    {
                        state.map(todo => {
                            const { id, title, isCompleted } = todo;
                            return <li key={id}>
                                <span onClick={() => dispatch({ type: "toggleIsCompleted", payload : {id}})} style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{title}</span>
                                <button onClick={() => dispatch({ type: "deleteTodoItem", payload : {id}})}>删除</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}


export default TodoListReducer;