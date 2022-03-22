import { Grid, Modal } from "@mui/material";
import {
  Button,
  Card,
  ModalCard,
  Text,
  TextAreaField,
  TextField,
  TitleText,
} from "../../styles/UtilStyles";
import { AddNewProps } from "../../types/ToDoTypes";

const ToDoAddNew = (props: AddNewProps) => {
  const { open, handleClose } = props;

  return (
    <>
      <Modal open={open} onClose={() => handleClose()}>
        <ModalCard height="fit-content" radius="0.5em">
          <Card left="1em" top="1em" bottom="2em" right="1em">
            <TitleText color="#035FA1" size="24px" heavy={true}>
              Create A New Task
            </TitleText>
            <Card top="1em">
              <Grid container spacing={2}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Text top="0.5em">Title</Text>
                  <TextField
                    height="60px"
                    border="#EEEEEE"
                    type="text"
                    top="1em"
                    placeholder="Enter the title of the task"
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Text top="0.5em">Description</Text>
                  <TextAreaField
                    // height="60px"
                    border="#EEEEEE"
                    top="1em"
                    placeholder="Enter the description of the task"
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <Text top="0.5em">Date</Text>
                  <TextField
                    height="60px"
                    border="#EEEEEE"
                    type="date"
                    top="1em"
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <Text top="0.5em">Time</Text>
                  <TextField
                    height="60px"
                    border="#EEEEEE"
                    type="time"
                    top="1em"
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Button
                    background="#0d6efd"
                    width="15em"
                    left="auto"
                    radius="5px"
                    bottom="1em"
                  >
                    CREATE
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Card>
        </ModalCard>
      </Modal>
    </>
  );
};

export default ToDoAddNew;
