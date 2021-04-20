import React, { useState } from 'react';
import './modals.css'
import { GlobalContext } from '../../context/Global'
import { ThemeContext } from '../../context/Theme'
import { Grid, TextField, Typography } from '@material-ui/core';
import CloseButtons from '../Buttons/CloseButtons';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

export default function NewParagraph() {
    const { state, setModal, addTodo, setInfoModal, completeToDo } = React.useContext(GlobalContext);
    const { ui } = React.useContext(ThemeContext);
    const { todos } = state;
    const [todo, setTodo] = useState('');
    const [hovered, setHovered] = useState(false);
    const [hoveredTodo, setHoveredTodo] = useState(false);

    const addNewTodo = (todo) => {
        addTodo(todo);
        setTodo('');
    }
    const setHoveredHandler = (bool, todo) => {
        setHovered(bool);
        setHoveredTodo(todo);
    }

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Grid className='todos' item style={{ backgroundColor: ui.second }}>
                {todos.map((todo, i) => {
                    return <Typography onMouseEnter={() => setHoveredHandler(true, todo)} onMouseLeave={() => setHoveredHandler(false, todo)} style={{ color: ui.fontColor1 }} className={!todo.completed ? 'todo' : 'todo-completed'} variant="subtitle1">
                        <span style={{ color: ui.fontColor1, marginRight: 10, textDecoration: 'none' }}>{todo.id}.</span>{todo.text}
                        {hovered && hoveredTodo.id === todo.id && !todo.completed && <CheckCircleOutlineIcon className="save-write-item todo-check" onClick={() => completeToDo(todo)}/>}
                    </Typography>
                })}
            </Grid>
            <Grid className='add-todo item-hover' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <TextField
                    fullWidth
                    style={{ backgroundColor: ui.second, color: ui.fontColor1, fontSize: '22px', marginLeft: 15 }}
                    id="todo"
                    label="New todo"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <CheckCircleOutlineIcon className="save-write-item" onClick={() => todo !== '' ? addNewTodo(todo) : setInfoModal(true, 'You need to enter a gist!', 'warning')} />
            </Grid>
            <CloseButtons close={() => setModal('')} submit={() => setModal('')} />
        </div>
    );
}
