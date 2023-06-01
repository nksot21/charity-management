import React, { useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "../../../globalComponents/Modal/Modal";
import { donors } from "../../AdminDonorsPage/screens/data";

function AddDonationPopup({ onCloseModal, event }) {
  const [donorId, setDonorId] = useState("");
  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [content, setContent] = useState("");

  const [donorsResult, setDonorsResult] = useState([]);

  const banks = [
    "Vietcombank",
    "ACB",
    "BIDV",
    "Agribank",
    "Techcombank",
    "ViettinBank",
    "VPBank",
    "MB Bank",
    "Sacombank",
    "HPBank",
    "VIB",
    "TPBank",
    "SeABank",
    "OCB",
  ];

  const donorIdChangeHandler = (event) => {
    const value = event.target.value;
    setDonorId(value);
    if (value.length > 0) {
      setDonorsResult(
        donors.filter(
          (donor) =>
            donor.ID.toString() === event.target.value ||
            donor.username.includes(event.target.value)
        )
      );
    } else {
      setDonorsResult([]);
    }
  };

  const [donorChosen, setDonorChosen] = React.useState({});

  const handleToggle = (value) => () => {
    setDonorChosen(value);
  };

  const addDonationHandler = () => {
    console.log({
      donor: donorChosen,
      event,
      bank,
      account,
      amount,
      content,
    });
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      <Stack>
        <Typography fontSize={20}>Thêm quyên góp (chuyển khoản)</Typography>
      </Stack>
      <Stack spacing={2} marginTop={2}>
        <TextField
          size="small"
          fullWidth
          label="Nhập ID/Tên người dùng của người dùng"
          type="text"
          value={donorId}
          required
          onChange={donorIdChangeHandler}
        />
        {donorsResult.length > 0 && (
          <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
            {donorsResult.map((donor) => {
              const labelId = `checkbox-list-secondary-label-${donor.ID}`;
              return (
                <ListItem
                  key={donor.ID}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(donor)}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${donor.name + 1}`}
                        src={donor.image}
                      />
                    </ListItemAvatar>
                    <ListItemText id={labelId} primary={donor.name} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        )}
        {donorsResult.length === 0 && donorId.length > 0 && (
          <Typography paddingLeft={2} fontSize={13}>
            Không tìm thấy nhà hảo tâm
          </Typography>
        )}
        <FormControl fullWidth size="small">
          <InputLabel id="category">Chọn ngân hàng</InputLabel>
          <Select
            labelId="category"
            id="demo-simple-select"
            value={bank}
            label="Chọn ngân hàng"
            onChange={(event) => setBank(event.target.value)}
          >
            {banks.map((b) => (
              <MenuItem value={b} key={Math.random()}>
                {b}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          size="small"
          fullWidth
          label="Số tài khoản"
          type="text"
          value={account}
          required
          onChange={(event) => setAccount(event.target.value)}
        />
        <TextField
          size="small"
          fullWidth
          label="Số tiền chuyển"
          type="text"
          value={amount}
          required
          onChange={(event) => setAmount(event.target.value)}
        />
        <TextField
          size="small"
          fullWidth
          label="Nội dung"
          type="text"
          value={content}
          required
          onChange={(event) => setContent(event.target.value)}
        />
        <Stack direction={"row"} spacing={2}>
          <Button
            variant="outlined"
            style={{ borderColor: "#2AC48A", color: "#2AC48A", flexGrow: 1 }}
            onClick={() => onCloseModal()}
          >
            Hủy
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#2AC48A", flexGrow: 1 }}
            onClick={addDonationHandler}
          >
            Thêm quyên góp
          </Button>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default AddDonationPopup;
