import React, { useState } from "react";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
} from "@mui/material";
import charitySignup from "../../../assets/images/charity-singup.jpg";
import { Alert, AlertTitle, Typography } from "@mui/material";
import {
  StackedLineChartTwoTone,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { DonorService } from "../../../services";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";

function Login() {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginHandler = () => {
    let haveError = false;
    setErrors([]);
    if (username === "" || password === "") {
      haveError = true;
      setErrors((prev) => [...prev, "Vui lòng điền đầy đủ các thông tin!"]);
    }

    if (haveError) return;

    DonorService.logIn(username, password)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify({ ...res.data }));
        dispatch(authActions.logUserIn(res.data));

        navigate("/trang-chu");
      })
      .catch((res) => {
        console.log(res);
        if (res.response.data.message.includes("not found")) {
          setErrors((prev) => [...prev, "Tên người dùng/Email chưa đăng ký!"]);
        }

        if (res.response.data.message.includes("not correct")) {
          setErrors((prev) => [...prev, "Mật khẩu không đúng!"]);
        }
      });
  };

  return (
    <Stack
      width={"100%"}
      paddingX={"15%"}
      marginY={8}
      direction={"row"}
      justifyContent={"center"}
      borderRadius={6}
      overflow={"hidden"}
      height={500}
    >
      <Stack width={"60%"}>
        <img
          src={charitySignup}
          height={"100%"}
          style={{ objectFit: "cover" }}
        />
      </Stack>

      <Stack
        paddingX={5}
        style={{ backgroundColor: "#eeeeee55" }}
        paddingY={3}
        width={"40%"}
      >
        <Typography fontSize={24} fontWeight={"bold"} textAlign={"center"}>
          Đăng nhập
        </Typography>

        <Stack spacing={3} marginTop={4}>
          <TextField
            size="small"
            fullWidth
            label="Email/Tên cgười dùng"
            type="text"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
            style={{ backgroundColor: "white" }}
          />
          <FormControl
            variant="outlined"
            size="small"
            fullWidth
            style={{ backgroundColor: "white" }}
          >
            <InputLabel htmlFor="password">Mật khẩu</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Stack>

        {errors.length > 0 && (
          <Stack marginTop={3}>
            <Alert severity="error">
              <AlertTitle>Lỗi</AlertTitle>
              {errors.map((e) => (
                <Typography>{e}</Typography>
              ))}
            </Alert>
          </Stack>
        )}

        <Stack marginTop={4} alignItems={"center"}>
          <Button
            variant="contained"
            style={{
              width: "200px",
              padding: "6px",
              backgroundColor: "#2AC48A",
            }}
            size="small"
            onClick={loginHandler}
          >
            Đăng nhập
          </Button>
        </Stack>

        <Stack
          marginTop={4}
          direction={"row"}
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography>Chưa có tài khoản?</Typography>
          <Button
            variant="outlined"
            size="small"
            style={{
              borderColor: "#2AC48A",
              color: "#2AC48A",
            }}
            onClick={() => navigate("/dang-ky")}
          >
            Tham gia ngay
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Login;
