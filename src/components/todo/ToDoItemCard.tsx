import { Card, Text } from "../../styles/UtilStyles";

const ToDoItemCard = () => {
  return (
    <>
      <Card background="rgba(3,95,161,0.05)" borderColor="1px solid rgba(3,95,161,0.1)" radius="0.5em" top="1em" bottom="1em">
        <Card
          background="transparent"
          left="1em"
          top="1em"
          bottom="1em"
          right="1em"
        >
          <Text  lineHeight="32px">
            This morning's meeting must not hold. The team must first round up
            their project please.
          </Text>
          <Text  size="14px" top="1em" heavy={true}>
            28/02/2020
          </Text>
        </Card>
      </Card>
    </>
  );
};

export default ToDoItemCard;
