import {
  Alert,
  AlertTitle,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import charitySignup from "../../../assets/images/charity-singup.jpg";
import { MuiFileInput } from "mui-file-input";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { DonorService, StorageService } from "../../../services";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import MyDialog from "../../../globalComponents/Dialog/MyDialog";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState(new Date());
  const [photo, setPhoto] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState(null);
  const [slogan, setSlogan] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
  const [errors, setErrors] = useState([]);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/trang-ca-nhan");
      return;
    }
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const imageChooseHandler = (fileChosen) => {
    if (fileChosen) {
      const extension = fileChosen.name.split(".").pop();
      const sizeInMB = Math.floor(fileChosen.size / (1024 * 1024));

      if (extension !== "jpg" && extension !== "png") {
        setErrors((prev) => {
          if (prev.findIndex((error) => error.includes("Định dạng")) === -1) {
            return [...prev, "Định dạng ảnh không hợp lệ!"];
          }
          return prev;
        });
        return;
      } else {
        setErrors((prev) =>
          [...prev].filter((error) => error.includes("Định dạng") === false)
        );
      }

      if (sizeInMB > 3) {
        setErrors((prev) => {
          if (prev.findIndex((error) => error.includes("Kích thước")) === -1) {
            return [...prev, "Kích thước ảnh vượt quá 3MB!"];
          }
          return prev;
        });
        return;
      } else {
        setErrors((prev) =>
          [...prev].filter((error) => error.includes("Kích thước") === false)
        );
      }
      setFile(fileChosen);
    } else {
      setFile(null);
    }
  };

  const signUpHandler = () => {
    let haveError = false;
    setErrors([]);
    if (
      name === "" ||
      phone === "" ||
      email === "" ||
      file === null ||
      slogan === "" ||
      username === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      haveError = true;
      setErrors((prev) => [...prev, "Vui lòng điền đầy đủ các thông tin!"]);
    }

    if (password !== passwordConfirm) {
      haveError = true;
      setErrors((prev) => [...prev, "Mật khẩu xác nhận không đúng"]);
    }

    if (slogan.length > 1000) {
      haveError = true;
      setErrors((prev) => [
        ...prev,
        "Mô tả/Khẩu hiệu không được vượt quá 1000 ký tự",
      ]);
    }

    if (password.length < 8 || password.length > 30) {
      haveError = true;
      setErrors((prev) => [
        ...prev,
        "Mật khẩu phải có tối thiểu 8 ký tự và tối đa 30 ký tự",
      ]);
    }

    if (username.length > 30) {
      haveError = true;
      setErrors((prev) => [...prev, "Tên người dùng có tối đa 30 ký tự"]);
    }

    if (file === null) {
      haveError = true;
      setErrors((prev) => [...prev, "Vui lòng chọn ảnh đại diện"]);
    }

    if (haveError || errors.length > 0) return;

    const donorBodyWithoutImage = {
      name,
      phone,
      email,
      slogan,
      birthday,
      address,
      username,
      password,
    };

    const imageData = new FormData();
    imageData.append("image", file);

    StorageService.getImageURL(imageData)
      .then((res) => {
        const donorBody = {
          ...donorBodyWithoutImage,
          photo: res.data,
          joinDate: new Date(),
        };

        return DonorService.addDonor(donorBody);
      })
      .then((res) => {
        setSignupSuccess(true);
      })
      .catch((res) => {
        if (res.response.data.message.includes("already exists")) {
          setErrors((prev) => [...prev, "Tên người dùng đã tồn tại!"]);
        }
      });
  };

  return (
    <Stack width={"100%"} paddingX={"20%"} paddingY={4}>
      <Typography fontSize={24} fontWeight={"bold"} textAlign={"center"}>
        Đăng ký tài khoản quyên góp
      </Typography>
      <Stack width={"100%"} marginTop={2} borderRadius={6} overflow={"hidden"}>
        <img src={charitySignup} style={{ objectFit: "cover" }} />
      </Stack>
      <Stack spacing={2} marginTop={3} paddingX={"80px"}>
        <TextField
          size="large"
          fullWidth
          label="Họ tên đầy đủ"
          type="text"
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          size="large"
          fullWidth
          label="Số điện thoại cá nhân"
          type="text"
          value={phone}
          required
          onChange={(event) => setPhone(event.target.value)}
        />
        <TextField
          size="large"
          fullWidth
          label="Email cá nhân"
          type="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          size="large"
          fullWidth
          label="Ngày sinh"
          type="date"
          value={format(birthday, "yyyy-MM-dd")}
          required
          onChange={(event) => setBirthday(new Date(event.target.value))}
        />
        <MuiFileInput
          label="Chọn ảnh"
          size="large"
          style={{ width: "100%", whiteSpace: "nowrap" }}
          onChange={imageChooseHandler}
          value={file}
          hideSizeText
          helperText="Định dạng: JPEG, PNG, tối đa 1MB"
          fullWidth
        />
        <TextField
          size="large"
          fullWidth
          label="Mô tả ngắn về bản thân/Khẩu hiệu"
          helperText="Tối đa 1000 ký tự"
          type="text"
          multiline
          rows={2}
          value={slogan}
          required
          onChange={(event) => setSlogan(event.target.value)}
        />
        <TextField
          size="large"
          fullWidth
          label="Địa chỉ"
          type="text"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <TextField
          size="large"
          fullWidth
          label="Tên người dùng"
          type="text"
          helperText="Tối đa 30 ký tự, không chứa khoảng trắng, không được chứa các ký tự đặc biệt ngoài dấu @"
          value={username}
          required
          onChange={(event) => setUsername(event.target.value)}
        />
        <Stack direction={"row"} spacing={2}>
          <FormControl variant="outlined" size="large" fullWidth>
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
          <FormControl variant="outlined" size="large" fullWidth>
            <InputLabel htmlFor="passwordConfirm">Nhập lại mật khẩu</InputLabel>
            <OutlinedInput
              id="passwordConfirm"
              type={showPasswordConfirm ? "text" : "password"}
              value={passwordConfirm}
              onChange={(event) => setPasswordConfirm(event.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPasswordConfirm}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password Confirm"
            />
          </FormControl>
        </Stack>
      </Stack>

      {errors.length > 0 && (
        <Stack marginTop={3} paddingX={"80px"}>
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
          style={{ width: "200px", padding: "8px", backgroundColor: "#2AC48A" }}
          onClick={signUpHandler}
        >
          Đăng ký
        </Button>
      </Stack>
      <Stack
        marginTop={4}
        direction={"row"}
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography>Đã có tài khoản?</Typography>
        <Button
          variant="outlined"
          size="small"
          style={{
            borderColor: "#2AC48A",
            color: "#2AC48A",
          }}
          onClick={() => navigate("/dang-nhap")}
        >
          Đăng nhập
        </Button>
      </Stack>
      {signupSuccess && (
        <MyDialog
          title="Thông báo"
          message={"Đăng ký thành công, vui lòng đăng nhập để truy cập"}
          handleClose={() => {
            navigate("/trang-chu");
          }}
          handleAccept={() => navigate("/dang-nhap")}
        />
      )}
    </Stack>
  );
}

export default Signup;
