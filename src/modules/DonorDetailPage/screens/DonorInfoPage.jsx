import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import quote from "../../../assets/images/quote.png";
import { Link } from "react-router-dom";
import Modal from "../../../globalComponents/Modal/Modal";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { MuiFileInput } from "mui-file-input";
import { format, setDate } from "date-fns";

function DonorInfoPage({ onCloseModal, donor }) {
  const [name, setName] = useState(donor.name);
  const [phone, setphone] = useState(donor.phone);
  const [birthday, setbirthday] = useState(donor.birthday);
  const [photo, setphoto] = useState(donor.photo);
  const [email, setemail] = useState(donor.email);
  const [address, setaddress] = useState(donor.address);
  const [slogan, setslogan] = useState(donor.slogan);
  const [username, setusername] = useState(donor.username);
  const [password, setPassword] = useState(donor.password);
  const [newPassword, setNewPassword] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const imageChooseHandler = (fileChosen) => {
    setFile(fileChosen);
    const extension = fileChosen.name.split(".").pop();

    if (extension !== "jpg" && extension !== "png") {
      setErrors((prev) => {
        if (prev.findIndex((error) => error.includes("Định dạng")) === -1) {
          return [...prev, "Định dạng ảnh không hợp lệ!"];
        }
        return prev;
      });
    } else {
      setErrors((prev) =>
        [...prev].filter((error) => error.includes("Định dạng") === false)
      );
    }
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      <Stack>
        <Stack>
          <Typography fontSize={24}>Thông tin cá nhân</Typography>
        </Stack>
        <Stack direction="row" spacing={4} padding={2} marginTop={2}>
          <Stack>
            <Avatar
              sx={{ width: 250, height: 250, boxShadow: "0 0 10px #00000022" }}
              src={photo}
            />
            <Stack marginTop={3} alignItems={"center"}>
              <MuiFileInput
                label="Chọn ảnh"
                size="small"
                style={{ width: "120px" }}
                onChange={imageChooseHandler}
                value={file}
              />
              <Typography
                fontSize={13}
                fontStyle={"italic"}
                marginTop={1}
                color={"#666"}
              >
                Định dạng: JPEG, PNG
              </Typography>
            </Stack>
            {errors.length > 0 && (
              <Stack
                marginTop={2}
                alignItems={"start"}
                width={"100%"}
                border={"1px solid red"}
                padding={1}
              >
                {errors.map((error) => (
                  <Typography
                    fontSize={14}
                    fontStyle={"italic"}
                    color={"error"}
                  >
                    {"- " + error}
                  </Typography>
                ))}
              </Stack>
            )}
          </Stack>

          <Stack spacing={2} width={400}>
            <TextField
              size="small"
              fullWidth
              label="Tên nhà hảo tâm"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              size="small"
              fullWidth
              label="Ngày sinh"
              type="date"
              value={format(new Date(birthday), "yyyy-MM-dd")}
              onChange={(event) => setbirthday(event.target.value)}
            />
            <TextField
              size="small"
              fullWidth
              label="Số điện thoại"
              type="text"
              value={phone}
              onChange={(event) => setphone(event.target.value)}
            />
            <TextField
              size="small"
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(event) => setemail(event.target.value)}
            />
            <TextField
              size="small"
              fullWidth
              label="Slogan"
              type="text"
              value={slogan}
              multiline
              rows={4}
              onChange={(event) => setslogan(event.target.value)}
            />
            <TextField
              size="small"
              fullWidth
              label="Địa chỉ"
              type="text"
              value={address}
              onChange={(event) => setaddress(event.target.value)}
            />
            <TextField
              size="small"
              fullWidth
              label="Username"
              type="text"
              value={username}
              onChange={(event) => setusername(event.target.value)}
            />
            {isChangingPassword && (
              <>
                <FormControl
                  sx={{ m: 1 }}
                  variant="outlined"
                  size="small"
                  fullWidth
                >
                  <InputLabel htmlFor="password">
                    Nhập lại mật khẩu cũ
                  </InputLabel>
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

                <FormControl
                  sx={{ m: 1 }}
                  variant="outlined"
                  size="small"
                  fullWidth
                >
                  <InputLabel htmlFor="new-password">
                    Nhập mật khẩu mới
                  </InputLabel>
                  <OutlinedInput
                    id="new-password"
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle new-password visibility"
                          onClick={handleClickShowNewPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showNewPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </>
            )}
            <Stack alignItems={"end"}>
              <Button
                variant="text"
                size="small"
                style={{ textTransform: "none", textDecoration: "underline" }}
                onClick={() => setIsChangingPassword((show) => !show)}
              >
                {isChangingPassword ? "Hủy" : "Đổi mật khẩu"}
              </Button>
            </Stack>
            <Stack>
              <Button variant="contained">Cập nhật</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default DonorInfoPage;
