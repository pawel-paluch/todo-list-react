import React from "react";
import "./style.css";

const Buttons = (props) => (

    <div className="buttons">
        {props.tasks.length > 0 && (
            <>
                <button className="buttons__button">
                    {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button className="buttons__button"
                    disabled={props.tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;