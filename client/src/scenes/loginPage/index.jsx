import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Form from "./Form";



const LoginPage = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const DisplayErrorMessage = () => {
    return (
       error ?  <Alert severity="error" sx={{ background: "white",
        color:"black",
        fontWeight: "bold"
        }}>
          {errorMessage}
        </Alert> : ""
    );
  };

  const DisplayCredentials = () => {
    return (
        <Alert severity="success">FOR TESTING PURPOSES USE
        Email: fakeman@gmail.com, Password: fake123
        </Alert> 
    );
  };

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <DisplayErrorMessage />
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Connectify
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Connectify, the only social media you need to connect with
          people!
        </Typography>
        <Form />
        <DisplayCredentials />
      </Box>
    </Box>
  );
};

export default LoginPage;
