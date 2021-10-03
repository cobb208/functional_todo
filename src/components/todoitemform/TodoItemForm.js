import React, { useState } from 'react';

import TodoModel from '../../models/TodoModel';
import styles from './TodoItemForm.module.scss';

function TodoItemForm(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleFormSubmission = (e) => {
        e.preventDefault();

        const newTodoModel = new TodoModel(title, description);

        props.newTodo(newTodoModel);

        setTitle('');
        setDescription('');
    }

    const handleChange = (e) => {
        const stateName = e.target.name;
        const stateValue = e.target.value;

        switch (stateName) {
            case 'title':
                setTitle(stateValue);
                break;
            case 'description':
                setDescription(stateValue);
                break;
            default:
                break;
        }
    }   



    return (
        <form className={styles.new_todo_form} onSubmit={handleFormSubmission}>
            <fieldset>
                <legend>Create a new item.</legend>
                <div className={styles.new_todo_form_input_container}>
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" value={title} onChange={handleChange}/>
                </div>
                <div className={styles.new_todo_form_input_container}>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" value={description} onChange={handleChange}></textarea>
                </div>
                <input className={styles.new_todo_form_button} type="submit" value="Create"/>
            </fieldset>
        </form>
    )
}

export default TodoItemForm;