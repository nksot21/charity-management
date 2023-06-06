import React, { useEffect, useState } from "react";
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
import { format } from "date-fns";
import {
  CategoryService,
  EventService,
  StorageService,
} from "../../../services";
import { useDispatch } from "react-redux";
import { fetchEvents } from "../../../store/events";

function AddEventPopup({ onCloseModal, event = null }) {
  const [title, setTitle] = useState(event?.title || "");
  const [description, setDescription] = useState(event?.description || "");
  const [amountNeeded, setAmountNeeded] = useState(event?.amountNeeded || 0);
  const [dateBegin, setDateBegin] = useState(event?.dateBegin || new Date());
  const [dateEnd, setDateEnd] = useState(event?.dateEnd || new Date());
  const [address, setAddress] = useState(event?.address || "");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(event?.image || "");
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  useEffect(() => {
    CategoryService.getCategories()
      .then((res) => {
        setCategories(res.data);
        setCategory(event ? event.category.id : res.data[0].id);
      })
      .catch((e) => {
        throw e;
      });
  }, []);

  useEffect(() => {
    if (!file) {
      setImage(event?.image);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setImage(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const addEventHandler = async () => {
    let haveError = false;
    setErrors([]);
    if (title.length === 0 || description.length === 0) {
      haveError = true;
      setErrors((prev) => [...prev, "Vui lòng điền đầy đủ các thông tin!"]);
    }
    if (amountNeeded <= 0) {
      haveError = true;
      setErrors((prev) => [...prev, "Số tiền cần quyên góp không hợp lệ!"]);
    }
    if (new Date(dateBegin).getTime() > new Date(dateEnd).getTime()) {
      haveError = true;
      setErrors((prev) => [
        ...prev,
        "Ngày bắt đầu phải ở trước ngày kết thúc!",
      ]);
    }
    if (!event && new Date(dateBegin).getTime() < new Date().getTime()) {
      haveError = true;
      setErrors((prev) => [...prev, "Ngày bắt đầu phải là từ ngày hôm nay!"]);
    }

    if (event === null && file === null) {
      haveError = true;
      setErrors((prev) => [...prev, "Vui lòng chọn ảnh cho sự kiện"]);
    }

    if (haveError === true) return;

    const eventWithoutImage = {
      title,
      description,
      address,
      amountNeeded,
      dateBegin,
      dateEnd,
      category: categories.find((cate) => cate.id === category),
    };

    if (file !== null) {
      //   Upload image to firebase and get image url
      const imageData = new FormData();
      imageData.append("image", file);

      await StorageService.getImageURL(imageData)
        .then((imageURL) => {
          console.log(imageURL.data);
          let eventBody = {
            ...eventWithoutImage,
            image: imageURL.data,
          };

          if (event) {
            eventBody = { ...eventBody, id: event.id };
          }

          return EventService.addEvent(eventBody);
        })
        .then((newEvent) => {
          console.log(newEvent.data);
        })
        .catch((e) => {
          throw e;
        });
    } else {
      let eventBody = {
        ...eventWithoutImage,
        id: event.id,
        image: event.image,
      };

      await EventService.addEvent(eventBody)
        .then((newEvent) => {
          console.log(newEvent.data);
        })
        .catch((e) => {
          throw e;
        });
    }

    if (!haveError && errors.length === 0) {
      dispatch(fetchEvents())
      onCloseModal();
    }
  };

  const imageChooseHandler = (fileChosen) => {
    const extension = fileChosen.name.split(".").pop();

    if (extension !== "jpg" && extension !== "png") {
      setErrors((prev) => {
        if (prev.findIndex((error) => error.includes("Định dạng")) === -1) {
          return [...prev, "Định dạng ảnh không hợp lệ!"];
        }
        return prev;
      });
    } else {
      setFile(fileChosen);
      setErrors((prev) =>
        [...prev].filter((error) => error.includes("Định dạng") === false)
      );
    }
  };

  return (
    <Modal onCloseModal={onCloseModal}>
      <Stack>
        <Typography fontSize={24}>
          {!event ? "Thêm sự kiện" : "Chỉnh sửa sự kiện"}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        spacing={3}
        paddingX={2}
        paddingTop={2}
        marginTop={2}
      >
        <Stack width={290}>
          <Avatar
            sx={{ width: 290, height: 290, boxShadow: "0 0 10px #00000022" }}
            variant="square"
            src={image}
          />
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
          {categories.length > 0 && (
            <FormControl fullWidth size="small" disabled={event}>
              <InputLabel id="category">Loại quyên góp</InputLabel>
              <Select
                labelId="category"
                id="demo-simple-select"
                value={category}
                label="Loại quyên góp"
                onChange={(event) => setCategory(event.target.value)}
              >
                {categories.map((cate) => (
                  <MenuItem key={cate.id} value={cate.id}>
                    {"Quyên góp " + cate.name + " (" + cate.unit + ")"}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
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
            value={format(new Date(dateBegin), "yyyy-MM-dd")}
            required
            onChange={(event) => setDateBegin(event.target.value)}
            disabled={event}
          />
          <TextField
            size="small"
            fullWidth
            label="Ngày kết thúc"
            type="date"
            value={format(new Date(dateEnd), "yyyy-MM-dd")}
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

          <Stack justifyContent={"center"} direction={"row"} spacing={2}>
            <Button variant="outlined" onClick={onCloseModal} fullWidth>
              Hủy
            </Button>
            <Button variant="contained" onClick={addEventHandler} fullWidth>
              {event ? "Cập nhập" : "Thêm sự kiện"}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Modal>
  );
}

export default AddEventPopup;
