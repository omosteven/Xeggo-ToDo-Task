import { AddCircleOutlined, MenuOutlined } from "@mui/icons-material";
import { Drawer, Grid } from "@mui/material";
import { useState } from "react";
import { ToDoAddNew, ToDoFolders, ToDoItemCard } from "../../components";

import {
  Card,
  Main,
  MainSection,
  ScreenControl,
  Text,
  TitleText,
} from "../../styles/UtilStyles";
import { IToDoPage } from "../../types/type.d";

// const todos = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

const folders = [{}, {}, {}, {}];

const ToDoPage = (props: IToDoPage) => {
  const [open, setOpen] = useState(false);
  const [drawOpen, setDrawOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { createNewToDo, toDoList } = props;

  return (
    <>
      <Main background="white">
        <MainSection width="100%">
          <Grid container spacing={0}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <ScreenControl lg md>
                <ToDoFolders folders={folders} />
              </ScreenControl>
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <Card height="20vh" borderColor="#2042e3">
                <Card
                  background="transparent"
                  left="1em"
                  right="1em"
                  bottom="1em"
                  top="2em"
                >
                  <ScreenControl top="-2em" sm xs>
                    <MenuOutlined onClick={() => setDrawOpen(true)} />
                  </ScreenControl>
                  <Card flex={true} spaceBetween={true}>
                    <TitleText color="#035FA1" size="24px" heavy={true}>
                      TODAY
                    </TitleText>
                    <ScreenControl
                      left="auto"
                      width="fit-content"
                      top="0em"
                      sm
                      xs
                    >
                      <AddCircleOutlined
                        style={{
                          width: "1.5em",
                          height: "1.5em",
                          color: "rgba(3,95,161,0.8)",
                          cursor: "pointer",
                        }}
                        onClick={handleOpen}
                      />
                    </ScreenControl>
                  </Card>

                  <Text color="rgba(5,5,5,0.8)">Tuesday, March 2022</Text>
                </Card>
              </Card>
              <Card width="100%" height="65vh">
                {toDoList.length ? (
                  <Card
                    background="transparent"
                    left="1em"
                    right="1em"
                    //   bottom="1em"
                    top="1em"
                    height="60vh"
                    overflowY="scroll"
                  >
                    {toDoList.map((item, pos) => (
                      <ToDoItemCard key={pos} {...item} pos={pos} />
                    ))}
                  </Card>
                ) : (
                  <Card
                    background="transparent"
                    left="1em"
                    right="1em"
                    //   bottom="1em"
                    top="1em"
                    height="60vh"
                    overflowY="scroll"
                  >
                    <TitleText top="2em" size="1.1em">
                      You do not have anything yet!
                    </TitleText>
                  </Card>
                )}

                <Card height="fit-content">
                  <ScreenControl lg md>
                    <Card left="auto" width="fit-content" right="4em" top="0em">
                      <AddCircleOutlined
                        style={{
                          width: "2.2em",
                          height: "2.2em",
                          color: "rgba(3,95,161,0.8)",
                          cursor: "pointer",
                          marginTop: "0.5em",
                        }}
                        onClick={handleOpen}
                      />
                    </Card>
                  </ScreenControl>
                </Card>
              </Card>
            </Grid>
          </Grid>
        </MainSection>
      </Main>

      <ToDoAddNew
        open={open}
        handleClose={handleClose}
        createNewToDo={createNewToDo}
      />

      <ScreenControl xs sm>
        <Drawer
          anchor={"left"}
          open={drawOpen}
          sx={{
            display: { xs: "block", sm: "block", md: "none", lg: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "270px" },
          }}
          onClose={() => setDrawOpen(false)}
        >
          <ToDoFolders folders={folders} />
        </Drawer>
      </ScreenControl>
    </>
  );
};

export default ToDoPage;
