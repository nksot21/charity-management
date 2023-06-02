import { format } from "date-fns";

function createDonor(
  ID,
  name,
  username,
  phone,
  score,
  join_date,
  email,
  address,
  events_quantity,
  total_donates
) {
  return {
    ID,
    name,
    username,
    phone,
    score,
    join_date,
    email,
    address,
    events_quantity,
    total_donates,
  };
}

function createEvent(
  ID,
  title,
  dateBegin,
  dateEnd,
  amountNeeded,
  amountGot,
  address,
  category,
  amountDistributed,
  isDonating
) {
  return {
    ID,
    title,
    dateBegin,
    dateEnd,
    amountNeeded,
    amountGot,
    address,
    category,
    amountDistributed,
    isDonating,
  };
}

export const donors = [
  createDonor(
    1,
    "Lê Văn Thiện",
    "thienlv1812",
    "048928349",
    230,
    "2023-06-01T05:53:56.642Z",
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    17,
    14000000
  ),
  createDonor(
    2,
    "Nguyễn Hùng Thịnh",
    "nguyenhungthinh3829",
    "048928349",
    230,
    "2023-06-01T05:53:56.642Z",
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    17,
    13002300
  ),
  createDonor(
    3,
    "Nguyễn Đỗ Nhã Khuyên",
    "nhakhuyencute123",
    "048928349",
    230,
    "2023-06-01T05:53:56.642Z",
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    12,
    17000000
  ),
  createDonor(
    4,
    "Nguyễn Lê Thái Hoàng",
    "anhhoangdeptrai124",
    "048928349",
    230,
    "2023-06-01T05:53:56.642Z",
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    15,
    3000000
  ),
  createDonor(
    5,
    "Nguyễn Đình Khôi",
    "khoinguyen9837",
    "048928349",
    230,
    "2023-06-01T05:53:56.642Z",
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    17,
    13000000
  ),
  createDonor(
    6,
    "Ngô Thùy Duyên",
    "duyenthuyngohappy",
    "048928349",
    230,
    "2023-06-01T05:53:56.642Z",
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    7,
    1300000
  ),
  createDonor(
    7,
    "Đoàn Quốc Bảo",
    "baoDepTrai56",
    "048928349",
    230,
    "2023-06-01T05:53:56.642Z",
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    5,
    600000
  ),
  createDonor(
    8,
    "Nguyễn Thị Diệu Nhi",
    "dieunhidethuong673",
    "048928349",
    230,
    "2023-06-01T05:53:56.642Z",
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    7,
    14000000
  ),
  createDonor(
    9,
    "Trần Thị Thu Hà",
    "hatran@hehe",
    "048928349",
    230,
    "2023-06-01T05:53:56.642Z",
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    17,
    13000000
  ),
];

export const events = [
  createEvent(
    1,
    "Ta thêm lòng tiếp sức, để bớt cuộc chia ly",
    "2023-06-01T05:53:56.642Z",
    "2023-10-01T05:53:56.642Z",
    160000000,
    18800000,
    "An Lão, Bình Định",
    {
      id: 3,
      name: "Tiền",
      unit: "VNĐ",
    },
    0,
    true
  ),
  createEvent(
    2,
    "Ta thêm lòng tiếp sức, để bớt cuộc chia ly",
    "2023-06-01T05:53:56.642Z",
    "2023-12-23T05:53:56.642Z",
    120000000,
    16300000,
    "An Lão, Bình Định",
    {
      id: 3,
      name: "Tiền",
      unit: "VNĐ",
    },
    0,
    true
  ),
  createEvent(
    3,
    "Ta thêm lòng tiếp sức, để bớt cuộc chia ly",
    "2023-02-23T05:53:56.642Z",
    "2023-11-01T05:53:56.642Z",
    200000000,
    136000000,
    "An Lão, Bình Định",
    {
      id: 4,
      name: "Gạo",
      unit: "tấn",
    },
    0,
    true
  ),
  createEvent(
    4,
    "Ta thêm lòng tiếp sức, để bớt cuộc chia ly",
    "2023-04-01T05:53:56.642Z",
    "2023-09-11T05:53:56.642Z",
    120000000,
    12300000,
    "An Lão, Bình Định",
    {
      id: 3,
      name: "Tiền",
      unit: "VNĐ",
    },
    0,
    true
  ),
  createEvent(
    5,
    "Ta thêm lòng tiếp sức, để bớt cuộc chia ly",
    "2023-08-01T05:53:56.642Z",
    "2023-10-01T05:53:56.642Z",
    106000000,
    106000000,
    "An Lão, Bình Định",
    {
      id: 3,
      name: "Tiền",
      unit: "VNĐ",
    },
    106000000,
    false
  ),
];
