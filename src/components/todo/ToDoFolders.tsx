import { ScheduleRounded } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { Card, Text, TitleText } from "../../styles/UtilStyles";
import { FoldersProps } from "../../types/ToDoTypes";

const ToDoFolders = (props: FoldersProps) => {
  const { folders } = props;
  return (
    <>
      <Card width="100%" height="100vh">
        <Card top="1em" left="1em" right="1em" bottom="1em">
          <TitleText color="#035FA1" size="24px" top="1.5em" heavy={true}>
            Your To-Do Lists
          </TitleText>
          <Card overflowY="scroll" height="80vh">
            {folders.map((items, pos) => (
              <Card
                key={pos}
                top="1em"
                height="4em"
                background="#333333"
                borderColor="1px solid rgba(3,95,161,0.1)"
                radius="0.5em"
              >
                <Card
                  background="transparent"
                  top="0.5em"
                  left="0.5em"
                  right="0.5em"
                  bottom="0.5em"
                >
                  <Grid container spacing={1}>
                    <Grid item lg={2} md={3} sm={3} xs={2}>
                      <ScheduleRounded
                        style={{
                          width: "1.2em",
                          height: "1.2em",
                          color: "white",
                          marginTop: "0.4em",
                        }}
                      />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6}>
                      <Text top="0.8em" color="white" heavy={true}>
                        Today
                      </Text>
                    </Grid>
                    <Grid item lg={4} md={3} sm={3} xs={4}>
                      <Text
                        top="0.8em"
                        color="white"
                        right="1em"
                        position="right"
                      >
                        50
                      </Text>
                    </Grid>
                  </Grid>
                </Card>
              </Card>
            ))}
          </Card>
        </Card>
      </Card>
    </>
  );
};

export default ToDoFolders;
