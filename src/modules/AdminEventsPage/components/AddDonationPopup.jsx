import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "../../../globalComponents/Modal/Modal";
import {
  DonationService,
  DonorService,
  ItemService,
  TransferService,
} from "../../../services";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../../../store/events";

function AddDonationPopup({ onCloseModal, event }) {
  const [donorId, setDonorId] = useState("");
  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const [donors, setDonors] = useState([]);
  const [donorsResult, setDonorsResult] = useState([]);
  const [donorChosen, setDonorChosen] = React.useState(null);
  const dispatch = useDispatch();

  const fetchDonors = async () => {
    await DonorService.getAllDonors().then((fetchedDonors) => {
      setDonors(fetchedDonors.data);
    });
  };

  useEffect(() => {
    fetchDonors();
  }, []);

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

  const donorIdChangeHandler = (e) => {
    const value = e.target.value;
    setDonorId(value);
    if (value.length > 0) {
      setDonorsResult(
        donors.filter(
          (donor) =>
            donor.id.toString() === e.target.value ||
            donor.username
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            donor.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setDonorsResult([]);
    }
  };

  const handleToggle = (value) => () => {
    setDonorChosen(value);
  };

  const addDonationHandler = async () => {
    setErrors([]);
    let haveError = false;
    if (donorChosen === null) {
      haveError = true;
      setErrors((prev) => [...prev, "Vui lòng chọn nhà hảo tâm!"]);
    }
    if (
      event.category.name === "Tiền" &&
      (bank === "" || account === "" || amount === "" || content === "")
    ) {
      haveError = true;
      setErrors((prev) => [...prev, "Vui lòng điền đầy đủ thông tin!"]);
    }
    if (event.category.name !== "Tiền" && amount === "") {
      haveError = true;
      setErrors((prev) => [...prev, "Vui lòng điền đầy đủ thông tin!"]);
    }

    if (haveError) return;

    let newDonation;
    if (event.category.name === "Tiền") {
      let transferFrom = {
        bank,
        account,
        amount,
        content,
        time: new Date().toISOString(),
      };
      // save transferFrom to database
      let newTransfer;
      try {
        newTransfer = await TransferService.addTransferFrom(transferFrom);
        console.log(newTransfer.data);
      } catch (e) {
        throw e.response;
      }

      newDonation = {
        donor: donorChosen,
        event: event,
        transfer: newTransfer.data,
        item: null,
      };

      console.log(newDonation);
    } else {
      let itemFrom = {
        amount,
        categoryId: event.category.id,
      };

      // save itemFrom to database
      let newItemFrom;
      try {
        newItemFrom = await ItemService.addItemFrom(itemFrom);
        console.log(newItemFrom.data);
      } catch (e) {
        throw e.response;
      }

      newDonation = {
        donor: donorChosen,
        event: event,
        item: newItemFrom.data.data,
        transfer: null,
      };

      console.log(newDonation);
    }

    await DonationService.addDonation(newDonation)
      .then((res) => {
        dispatch(fetchEvents());
        onCloseModal();
      })
      .catch((e) => {
        throw e;
      });
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      <Stack>
        <Typography fontSize={20}>
          Thêm quyên góp ({" "}
          {event.category?.name === "Tiền" ? "chuyển khoản" : "hàng hóa"})
        </Typography>
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
            {donorsResult.slice(0, 4).map((donor) => {
              const labelId = `checkbox-list-secondary-label-${donor.id}`;
              return (
                <ListItem
                  key={donor.id}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={handleToggle(donor)}
                      checked={
                        donorChosen ? donor.id === donorChosen.id : false
                      }
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${donor.name + 1}`}
                        src={donor.photo}
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
        {event.category?.name === "Tiền" && (
          <>
            <FormControl fullWidth size="small">
              <InputLabel id="category">Chọn ngân hàng</InputLabel>
              <Select
                labelId="category"
                id="demo-simple-select"
                value={bank}
                label="Chọn ngân hàng"
                onChange={(event) => setBank(event.target?.value)}
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
              onChange={(event) => setAccount(event.target?.value)}
            />
            <TextField
              size="small"
              fullWidth
              label="Nội dung"
              type="text"
              value={content}
              multiline
              rows={2}
              required
              onChange={(event) => setContent(event.target?.value)}
            />
          </>
        )}
        <FormControl variant="outlined" fullWidth size="small">
          <InputLabel htmlFor="amount">Số lượng</InputLabel>
          <OutlinedInput
            id="amount"
            type="text"
            value={amount}
            label="Số lượng"
            required
            endAdornment={
              <InputAdornment position="end">
                {event.category?.name === "Tiền"
                  ? event.category?.unit
                  : (
                      event.category?.unit +
                      " " +
                      event.category?.name
                    ).toLowerCase()}
              </InputAdornment>
            }
            onChange={(event) => setAmount(event.target?.value)}
          />
        </FormControl>
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
              <Typography fontSize={14} fontStyle={"italic"} color={"error"}>
                {"- " + error}
              </Typography>
            ))}
          </Stack>
        )}
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
