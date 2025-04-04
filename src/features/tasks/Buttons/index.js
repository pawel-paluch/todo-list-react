import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsEveryTaskDone,
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectHideDone,
} from "../taskSlice";

const Buttons = () => {
  const dispatch = useDispatch();
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  return (
    <Wrapper>
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
