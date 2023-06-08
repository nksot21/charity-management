import React, { useEffect, useState } from "react";
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
import { Link, useNavigate, useParams } from "react-router-dom";
import Modal from "../../../globalComponents/Modal/Modal";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { MuiFileInput } from "mui-file-input";
import { format, setDate } from "date-fns";
import { DonorService, StorageService } from "../../../services";
import MyDialog from "../../../globalComponents/Dialog/MyDialog";
import { useDispatch } from "react-redux";
import { authActions } from "../../../store/auth";

function DonorInfoPage({ onCloseModal, donor }) {
  const [name, setName] = useState(donor.name);
  const [phone, setphone] = useState(donor.phone);
  const [birthday, setbirthday] = useState(donor.birthday);
  const [photo, setphoto] = useState(donor.photo);
  const [email, setemail] = useState(donor.email);
  const [address, setaddress] = useState(donor.address);
  const [slogan, setslogan] = useState(donor.slogan);
  const [username, setusername] = useState(donor.username);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [updateSuccessfull, setUpdateSuccessful] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isProfile = !params.donorId;

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const imageChooseHandler = (fileChosen) => {
    if (fileChosen) {
      const extension = fileChosen.name.split(".").pop();
      const sizeInMB = fileChosen.size / (1024 * 1024);

      console.log(sizeInMB);

      if (extension !== "jpg" && extension !== "png") {
        setErrors((prev) => {
          if (prev.findIndex((error) => error.includes("Định dạng")) === -1) {
            return [...prev, "Định dạng ảnh không hợp lệ!"];
          }
          return prev;
        });
      } else if (fileChosen.size) {
        setErrors((prev) =>
          [...prev].filter((error) => error.includes("Định dạng") === false)
        );
      }

      if (sizeInMB > 1) {
        setErrors((prev) => {
          if (prev.findIndex((error) => error.includes("Kích thước")) === -1) {
            return [...prev, "Kích thước ảnh vượt quá 1MB!"];
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

  useEffect(() => {
    if (!file) {
      setphoto(donor.photo);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setphoto(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const addDonorHandler = async () => {
    let haveError = false;
    setErrors([]);
    if (
      name.length === 0 ||
      phone.length === 0 ||
      email.length === 0 ||
      slogan.length === 0 ||
      username.length === 0
    ) {
      haveError = true;
      setErrors((prev) => [...prev, "Vui lòng điền đầy đủ các thông tin!"]);
    }

    if (new Date(birthday).getTime() > new Date().getTime) {
      haveError = true;
      setErrors((prev) => [...prev, "Ngày sinh không hợp lệ"]);
    }

    // upload to firebase then get url
    let photoURL;
    if (file !== null) {
      const imageData = new FormData();
      imageData.append("image", file);

      photoURL = await StorageService.getImageURL(imageData)
        .then((imageURL) => {
          return imageURL.data;
        })
        .catch((e) => {
          throw e;
        });

      setphoto(photoURL);
    } else {
      photoURL = donor.photo;
    }

    let donorBody = {
      id: donor.id,
      name,
      phone,
      birthday,
      photo: photoURL,
      email,
      address,
      slogan,
      username,
    };

    if (isChangingPassword) {
      if (password.length === 0 && newPassword.length === 0) {
        haveError = true;
        setErrors((prev) => [
          ...prev,
          "Vui lòng điện mật khẩu hoặc/và mật khẩu mới",
        ]);
      }
      const isCorrectPassword = await DonorService.checkPassword(
        donor.id,
        password
      )
        .then((res) => res.data)
        .catch((e) => {
          haveError = true;
          throw e;
        });

      console.log(isCorrectPassword);

      if (!isCorrectPassword) {
        haveError = true;
        setErrors((prev) => [...prev, "Mật khẩu không đúng"]);
      } else {
        haveError = false;
      }

      donorBody = { id: donor.id, password: newPassword };
    }

    if (!haveError) {
      await DonorService.addDonor(donorBody)
        .then((res) => {
          console.log(res.data);
          dispatch(authActions.logUserIn(res.data));
          localStorage.setItem("user", JSON.stringify({ ...res.data }));
          setUpdateSuccessful(true);
        })
        .catch((e) => {
          setUpdateSuccessful(false);
          haveError = true;
          setErrors((prev) => [
            ...prev,
            "Có lỗi xảy ra! Cập nhật thông tin thất bại.",
          ]);
          throw e;
        });
    }
  };

  const navigateToLogin = () => {
    localStorage.removeItem("user");
    dispatch(authActions.logUserOut());
    navigate("/dang-nhap");
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      <Stack>
        <Stack>
          <Typography fontSize={24}>Thông tin cá nhân</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={3}
          paddingX={2}
          paddingTop={2}
          marginTop={2}
          alignItems={"stretch"}
        >
          <Stack width={250}>
            <Avatar
              sx={{ width: 250, height: 250, boxShadow: "0 0 10px #00000022" }}
              src={photo}
            />
            {isProfile && !isChangingPassword && (
              <Stack marginTop={3} alignItems={"center"}>
                <MuiFileInput
                  label="Chọn ảnh"
                  size="small"
                  style={{ width: "100%", whiteSpace: "nowrap" }}
                  onChange={imageChooseHandler}
                  value={file}
                  hideSizeText
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
            )}
            {errors.length > 0 && (
              <Stack
                marginTop={2}
                alignItems={"start"}
                width={"100%"}
                border={"1px solid red"}
                padding={1}
                borderRadius={1}
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
            {isProfile && (
              <Stack flexGrow={1} justifyContent={"end"} marginTop={2}>
                <Button variant="outlined" onClick={() => onCloseModal()}>
                  Hủy
                </Button>
              </Stack>
            )}
          </Stack>
          <Stack spacing={2} width={400}>
            {!isChangingPassword && (
              <>
                <TextField
                  size="small"
                  fullWidth
                  label="Tên nhà hảo tâm"
                  type="text"
                  value={name}
                  InputProps={{
                    readOnly: !isProfile,
                  }}
                  onChange={(event) => setName(event.target.value)}
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Ngày sinh"
                  type="date"
                  value={format(new Date(birthday), "yyyy-MM-dd")}
                  onChange={(event) => setbirthday(event.target.value)}
                  InputProps={{
                    readOnly: !isProfile,
                  }}
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Số điện thoại"
                  type="text"
                  value={phone}
                  onChange={(event) => setphone(event.target.value)}
                  InputProps={{
                    readOnly: !isProfile,
                  }}
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(event) => setemail(event.target.value)}
                  InputProps={{
                    readOnly: !isProfile,
                  }}
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
                  InputProps={{
                    readOnly: !isProfile,
                  }}
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Địa chỉ"
                  type="text"
                  value={address}
                  onChange={(event) => setaddress(event.target.value)}
                  InputProps={{
                    readOnly: !isProfile,
                  }}
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Username"
                  type="text"
                  value={username}
                  onChange={(event) => setusername(event.target.value)}
                  InputProps={{
                    readOnly: !isProfile,
                  }}
                />
              </>
            )}
            {isChangingPassword && isProfile && (
              <>
                <FormControl variant="outlined" size="small" fullWidth>
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
                    label="Nhập lại mật khẩu cũ"
                  />
                </FormControl>

                <FormControl variant="outlined" size="small" fullWidth>
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
                    label="Nhập mật khẩu mới"
                  />
                </FormControl>
              </>
            )}
            {isProfile && (
              <Stack alignSelf={"end"}>
                <Button
                  variant="text"
                  size="small"
                  style={{
                    textTransform: "none",
                    textDecoration: "underline",
                  }}
                  onClick={() => setIsChangingPassword((show) => !show)}
                >
                  {isChangingPassword ? "Hủy" : "Đổi mật khẩu"}
                </Button>
              </Stack>
            )}
            {isProfile && (
              <Stack flexGrow={1} justifyContent={"end"}>
                <Button variant="contained" onClick={addDonorHandler}>
                  Cập nhật
                </Button>
              </Stack>
            )}
            {updateSuccessfull && isChangingPassword && (
              <MyDialog
                handleAccept={() => {
                  setUpdateSuccessful(false);
                  navigateToLogin();
                }}
                title="Thông báo"
                message="Cập nhật mật khẩu thành công! Vui lòng đăng nhập lại!"
              ></MyDialog>
            )}
            {updateSuccessfull && !isChangingPassword && (
              <MyDialog
                handleAccept={() => {
                  setUpdateSuccessful(false);
                  onCloseModal();
                }}
                title="Thông báo"
                message="Cập nhật thông tin thành công!"
              ></MyDialog>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default DonorInfoPage;
