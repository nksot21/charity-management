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
  date_begin,
  date_end,
  amount_needed,
  amount_got,
  address,
  category,
  amount_distributed,
  is_donating
) {
  return {
    ID,
    title,
    date_begin,
    date_end,
    amount_needed,
    amount_got,
    address,
    category,
    amount_distributed,
    is_donating,
  };
}

export const donors = [
  createDonor(
    1,
    "Lê Văn Thiện",
    "thienlv1812",
    "048928349",
    230,
    format(new Date(), "dd/MM/yyyy"),
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    17,
    14000000
  ),
  createDonor(
    2,
    "Lê Văn Thiện",
    "thienlv1812",
    "048928349",
    230,
    format(new Date(), "dd/MM/yyyy"),
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    17,
    13002300
  ),
  createDonor(
    3,
    "Lê Văn Thiện",
    "thienlv1812",
    "048928349",
    230,
    format(new Date(), "dd/MM/yyyy"),
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    12,
    17000000
  ),
  createDonor(
    4,
    "Lê Văn Thiện",
    "thienlv1812",
    "048928349",
    230,
    format(new Date(), "dd/MM/yyyy"),
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    15,
    3000000
  ),
  createDonor(
    5,
    "Lê Văn Thiện",
    "thienlv1812",
    "048928349",
    230,
    format(new Date(), "dd/MM/yyyy"),
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    17,
    13000000
  ),
  createDonor(
    6,
    "Lê Văn Thiện",
    "thienlv1812",
    "048928349",
    230,
    format(new Date(), "dd/MM/yyyy"),
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    7,
    1300000
  ),
  createDonor(
    7,
    "Lê Văn Thiện",
    "thienlv1812",
    "048928349",
    230,
    format(new Date(), "dd/MM/yyyy"),
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    5,
    600000
  ),
  createDonor(
    8,
    "Lê Văn Thiện",
    "thienlv1812",
    "048928349",
    230,
    format(new Date(), "dd/MM/yyyy"),
    "levanthienabc@gmail.com",
    "Dĩ An, Bình Dương",
    7,
    14000000
  ),
  createDonor(
    9,
    "Lê Văn Thiện",
    "thienlv1812",
    "048928349",
    230,
    format(new Date(), "dd/MM/yyyy"),
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
      id: 3,
      name: "Tiền",
      unit: "VNĐ",
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
