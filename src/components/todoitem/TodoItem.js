import React, { useState } from 'react';
import styles from './TodoItem.module.scss';

function ToDoItem(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [todoModel, setTodoModel] = useState(props.todoModel);


    const handleChange = (e) => {
        const stateName = e.target.name;
        const stateValue = e.target.value;

        switch(stateName) {
            case 'title':
                setTodoModel({...todoModel, title: stateValue});
                break;
            case 'description':
                setTodoModel({...todoModel, description: stateValue});
                break;
            default:
                break;
        }

    }

    const handleEditMode = (e) => {
        setIsEditing(!isEditing);
    }

    const handleEditSave = () => {
        props.editTodo(todoModel);
        handleEditMode();
    }

    let editHtmlState;
    let buttonHtmlState;
    let completedStatus;

    const setEditModeHtml = () => {
        if(isEditing) {
            editHtmlState = (
                <div>
                    <label>Title</label>
                    <input  name="title" id="title" value={todoModel.title} onChange={handleChange}/>
                    <label>Description</label>
                    <textarea name="description" id="description" value={todoModel.description} onChange={handleChange}></textarea>
                </div>
            )
            buttonHtmlState = (
                <button onClick={handleEditSave} className={styles.todoButton}>Save</button>
            )
        } else {
            editHtmlState = (
                <div className={styles.todo_item_header}>
                    <h3>Task: {todoModel.title}</h3>
                    <p>Description: {todoModel.description}</p>
                </div>
            )
            buttonHtmlState = (
                <button onClick={handleEditMode} className={styles.todoButton}>Edit</button>
            )
        }
    }

    const handleComplete = () => {
        setTodoModel({...todoModel, completed: !todoModel.completed});
        props.editTodo(todoModel);
    }

    const completedStatusHtml = () => {
        if(todoModel.completed) {
            completedStatus = <p>Complete</p>
        } else {
            completedStatus = <p>Not Complete</p>
        }
    }



    setEditModeHtml();
    completedStatusHtml();

    return (
        <li className={styles.todo_item_container}>
            <div>
                {editHtmlState}
            </div>
            <div className={styles.button_container}>
                    <div className={styles.button_container_inner}>
                        {buttonHtmlState}
                        <button className={styles.todoButton} onClick={handleComplete}>Complete</button>
                    </div>
                </div>
                <div className={styles.todo_item_completed_container}>
                    {completedStatus}
                </div>
        </li>
    )
}

export default ToDoItem;