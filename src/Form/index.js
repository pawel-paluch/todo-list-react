import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
    
        if (!newTaskContent || !newTaskContent.trim()) {
            return;
        }
    
        addNewTask(newTaskContent.trim());
        setNewTaskContent(""); // Resetuje pole tekstowe po dodaniu zadania
    };
    
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input 
                value={newTaskContent}
                className="form__text"
                type="text" 
                placeholder="Co jest do zrobienia?" 
                onChange={(event) => setNewTaskContent(event.target.value)} // Poprawka tutaj
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;
