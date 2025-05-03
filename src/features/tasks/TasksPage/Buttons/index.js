import { Wrapper} from "./styled";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsEveryTaskDone,
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectHideDone,
  fetchExampleTasks,
} from "../../taskSlice";

const Buttons = () => {
  const dispatch = useDispatch();
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
              Pobierz przykładowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
