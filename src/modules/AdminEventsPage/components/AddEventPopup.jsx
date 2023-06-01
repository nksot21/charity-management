import React, { useState } from "react";
import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "../../../globalComponents/Modal/Modal";
import { MuiFileInput } from "mui-file-input";

function AddEventPopup({ onCloseModal, event }) {
  console.log(event);
  const [title, setTitle] = useState(event ? event.title : "");
  const [description, setDescription] = useState(
    event ? event.description : ""
  );
  const [amountNeeded, setAmountNeeded] = useState(
    event ? event.amountNeeded : ""
  );
  const [dateBegin, setDateBegin] = useState(
    event ? event.dateBegin : new Date()
  );
  const [dateEnd, setDateEnd] = useState(event ? event.dateEnd : new Date());
  const [address, setAddress] = useState(event ? event.address : "");

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Tiền",
      unit: "VNĐ",
    },
    {
      id: 2,
      name: "Gạo",
      unit: "tấn",
    },
  ]);
  const [category, setCategory] = useState(
    event ? event.category : categories[0]
  );

  return (
    <Modal onCloseModal={onCloseModal}>
      <Stack>
        <Typography fontSize={24}>Thêm sự kiện</Typography>
      </Stack>
      <Stack direction="row" spacing={4} padding={2} marginTop={2}>
        <Stack>
          <Avatar
            sx={{ width: 290, height: 290, boxShadow: "0 0 10px #00000022" }}
            variant="square"
            src={
              "https://static.thiennguyen.app/public/user/profile/2023/2/24/649fb301-da9c-4d4b-be74-bca32ece39ae.jpg"
            }
          />
          <Stack marginTop={3} alignItems={"center"}>
            <MuiFileInput
              label="Chọn ảnh"
              size="small"
              style={{ width: "120px" }}
            />
          </Stack>
        </Stack>

        <Stack spacing={2} width={450}>
          <TextField
            size="small"
            fullWidth
            label="Tiêu đề"
            type="text"
            value={title}
            multiline
            rows={2}
            required
            onChange={(event) => setTitle(event.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            label="Mô tả về câu chuyện"
            type="text"
            value={description}
            multiline
            rows={4}
            required
            onChange={(event) => setDescription(event.target.value)}
          />
          <FormControl fullWidth size="small">
            <InputLabel id="category">Loại quyên góp</InputLabel>
            <Select
              labelId="category"
              id="demo-simple-select"
              value={category}
              label="Loại quyên góp"
              onChange={(event) => setCategory(event.target.value)}
            >
              {categories.map((cate) => (
                <MenuItem value={cate}>
                  {"Quyên góp " + cate.name + " (" + cate.unit + ")"}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            size="small"
            fullWidth
            label="Số lượng cần quyên góp"
            type="text"
            value={amountNeeded}
            required
            onChange={(event) => setAmountNeeded(event.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            label="Ngày bắt đầu"
            type="date"
            value={dateBegin}
            required
            onChange={(event) => setDateBegin(event.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            label="Ngày kết thúc"
            type="date"
            value={dateEnd}
            required
            onChange={(event) => setDateEnd(event.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            label="Địa chỉ"
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <Stack alignItems={"center"}>
            <Button variant="contained">Cập nhật</Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default AddEventPopup;
