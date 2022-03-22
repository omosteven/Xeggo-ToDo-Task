import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  CentreAuthCard,
  LinkText,
  Main,
  Text,
  TextField,
  TitleText,
} from "../../styles/UtilStyles";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/todo/");
  };

  return (
    <>
      <Main background="white">
        <Card
          lgWidth="30em"
          smWidth="100%"
          top="10vh"
          radius="0.5em"
          widthResponsive={true}
        >
          <CentreAuthCard>
            <Card
              height="fit-content"
              left="1.5em"
              right="1.5em"
              top="2em"
              bottom="2em"
            >
              <TitleText
                color="#333333"
                size="32px"
                lineHeight="42px"
                heavy={true}
              >
                Hi There!
              </TitleText>
              <Text
                top="1em"
                bottom="1em"
                size="16px"
                color="#333333"
                lineHeight="23px"
              >
                Welcome Back
              </Text>
              <Grid container spacing={4}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    height="60px"
                    border="#EEEEEE"
                    type="email"
                    placeholder="Email Address"
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    border="#EEEEEE"
                    type="password"
                    placeholder="Password"
                    height="60px"
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Button
                    background="#0d6efd"
                    radius="5px"
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <LinkText
                    to="/auth/forgot-password/"
                    center={true}
                    noUnderline={true}
                  >
                    <Text color="#333333" center={true} cursor={true}>
                      Forgot Password
                    </Text>
                  </LinkText>
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <Card top="0em" flex={true} center={true}>
                    <Text size="14px" color="#B4B4B4" lineHeight="21px">
                      Don't have an account, yet?
                    </Text>{" "}
                    <LinkText
                      lineHeight="21px"
                      inline={true}
                      to="/auth/register/"
                      noUnderline={true}
                    >
                      <Text
                        size="14px"
                        color="#4A99D3"
                        left="0.5em"
                        cursor={true}
                      >
                        SignUp instead
                      </Text>
                    </LinkText>
                  </Card>
                </Grid>
              </Grid>
            </Card>
          </CentreAuthCard>
        </Card>
      </Main>
    </>
  );
};

export default LoginPage;
