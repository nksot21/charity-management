import React, { useState } from "react";
import {
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

function DonorInfoPage({ onCloseModal }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Modal onCloseModal={onCloseModal}>
      <Stack>
        <Typography fontSize={24}>Thông tin cá nhân</Typography>
      </Stack>
      <Stack direction="row" spacing={4} padding={2} marginTop={2}>
        <Stack>
          <Stack
            height={200}
            width={200}
            justifyContent="center"
            borderRadius="200px"
            overflow="hidden"
            style={{ boxShadow: "0 0 10px #00000022" }}
            flexShrink={0}
          >
            <img
              height="100%"
              width="100%"
              src="https://static.thiennguyen.app/public/user/profile/2023/2/24/649fb301-da9c-4d4b-be74-bca32ece39ae.jpg"
            ></img>
          </Stack>
          <Stack marginTop={3} alignItems={"center"}>
            <MuiFileInput
              label="Chọn ảnh"
              size="small"
              style={{ width: "120px" }}
            />
          </Stack>
        </Stack>

        <Stack spacing={2}>
          <TextField
            size="small"
            fullWidth
            label="Tên nhà hảo tâm"
            type="text"
            value={"Nguyễn Thị Mỹ Duyên"}
          />
          <TextField
            size="small"
            fullWidth
            label="Ngày sinh"
            type="date"
            value={"01-01-2000"}
          />
          <TextField
            size="small"
            fullWidth
            label="Số điện thoại"
            type="text"
            value={"0985902849"}
          />
          <TextField
            size="small"
            fullWidth
            label="Email"
            type="email"
            value={"nguyethimydung@gmail.com"}
          />
          <TextField
            size="small"
            fullWidth
            label="Địa chỉ"
            type="text"
            value={"Thị xã An Nhơn, tỉnh Bình Định"}
          />
          <TextField
            size="small"
            fullWidth
            label="Username"
            type="text"
            value={"@nguyenthimyduyen123"}
          />
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            size="small"
            fullWidth
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? "text" : "password"}
              value={"12345678"}
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
          {isChangingPassword && (
            <FormControl
              sx={{ m: 1, width: "25ch" }}
              variant="outlined"
              size="small"
              fullWidth
            >
              <InputLabel htmlFor="new-password">New password</InputLabel>
              <OutlinedInput
                id="new-password"
                type={showNewPassword ? "text" : "password"}
                value={""}
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
            <Button variant="contained" size="small">
              Cập nhật
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default DonorInfoPage;
