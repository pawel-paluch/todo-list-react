import React from "react";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectTaskById } from "../taskSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => selectTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegółowe informacje o zadaniu" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={!!task && (
                    <>
                        <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                    </>
                )}
            />
        </Container>
    );
}
export default TaskPage;