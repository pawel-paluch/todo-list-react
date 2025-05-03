import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../taskSlice";
import Button from "../Button";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {loading ? "Trwa ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
    );
};
