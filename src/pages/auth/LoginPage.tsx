import { Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setIsLoggedIn } from "../../redux/Util";

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

  const [loginData, setLoginData] = useState({
    email: null,
    password: null,
  });

  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    if (loginData.email && loginData.password) {
      setIsError(false);
      setIsLoggedIn();
      navigate("/todo/");
    } else {
      setIsError(true);
    }
  };

  const updateLoginData = (key: string, value: string) => {
    setLoginData({
      ...loginData,
      [key]: value,
    });
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
                    onChange={(e) => updateLoginData("email", e.target.value)}
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  <TextField
                    border="#EEEEEE"
                    type="password"
                    placeholder="Password"
                    height="60px"
                    onChange={(e) =>
                      updateLoginData("password", e.target.value)
                    }
                  />
                </Grid>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  {isError && (
                    <Text color="rgba(200,0,0,0.9)" size="14px" bottom="1em">
                      Some fields are missing.
                    </Text>
                  )}
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
