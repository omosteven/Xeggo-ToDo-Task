import { CancelOutlined } from "@mui/icons-material";
import { Dispatch, useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../../redux/actionCreators";
import { Card, Text, TitleText } from "../../styles/UtilStyles";
import { IToDoData } from "../../types/type.d";

const ToDoItemCard = (props: IToDoData) => {
  const { pos, title, description, date, time } = props;

  const dispatch: Dispatch<any> = useDispatch();

  const deleteToDoItem = useCallback(
    (toDoData: IToDoData) => dispatch(deleteToDo(toDoData)),
    [dispatch]
  );
  const handleDelete = () => {
    deleteToDoItem({ pos, title, description, date, time });
  };

  return (
    <>
      <Card
        background="rgba(3,95,161,0.05)"
        borderColor="1px solid rgba(3,95,161,0.1)"
        radius="0.5em"
        top="1em"
        bottom="1em"
      >
        <Card
          background="transparent"
          left="1em"
          top="1em"
          bottom="1em"
          right="1em"
        >
          <Card bottom="1em" background="transparent">
            <CancelOutlined
              style={{ float: "right", cursor: "pointer" }}
              onClick={handleDelete}
            />
          </Card>
          <TitleText lineHeight="32px" heavy={true}>
            {title}
          </TitleText>
          <Text lineHeight="32px">{description}</Text>
          <Text size="14px" top="1em" heavy={true}>
            {date + "-" + time}
          </Text>
        </Card>
      </Card>
    </>
  );
};

export default ToDoItemCard;
