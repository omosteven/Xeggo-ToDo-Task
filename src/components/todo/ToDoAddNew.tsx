import { Grid, Modal } from "@mui/material";
import React, { useState } from "react";
import {
  Button,
  Card,
  ModalCard,
  Text,
  TextAreaField,
  TextField,
  TitleText,
} from "../../styles/UtilStyles";

let sample = {
  title: "",
  description: "",
  date: "",
  time: "",
};

type Props = {
  createNewToDo: Function;
  handleClose: Function;
  open: boolean;
};

const ToDoAddNew: React.FC<Props> = ({ createNewToDo, open, handleClose }) => {
  // const { open, handleClose } = props;

  const [formData, setFormData] = useState(sample);
  const [isError, setIsError] = useState(false);

  const handleCreate = () => {
    // console.log(getStoreData());

    if (
      formData.title.length &&
      formData.description.length &&
      formData.date.length &&
      formData.time.length
    ) {
      setIsError(false);
      createNewToDo(formData);
      handleClose();
    } else {
      setIsError(true);
    }
  };

  const updateForm = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

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
                    defaultValue={formData?.title}
                    onChange={(e) => updateForm("title", e.target.value)}
                    placeholder="Enter the title of the task"
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Text top="0.5em">Description</Text>
                  <TextAreaField
                    // height="60px"
                    border="#EEEEEE"
                    top="1em"
                    defaultValue={formData?.description}
                    onChange={(e) => updateForm("description", e.target.value)}
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
                    onChange={(e) => updateForm("date", e.target.value)}
                    defaultValue={formData?.date}
                  />
                </Grid>
                <Grid item lg={6} md={6} sm={6} xs={6}>
                  <Text top="0.5em">Time</Text>
                  <TextField
                    height="60px"
                    border="#EEEEEE"
                    type="time"
                    onChange={(e) => updateForm("time", e.target.value)}
                    defaultValue={formData?.time}
                    top="1em"
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  {isError && (
                    <Text color="rgba(200,0,0,0.9)" size="14px">
                      Some fields are missing.
                    </Text>
                  )}
                  <Button
                    background="#0d6efd"
                    width="15em"
                    left="auto"
                    radius="5px"
                    bottom="1em"
                    onClick={handleCreate}
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
