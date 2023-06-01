import {
  faBullhorn,
  faCircleDollarToSlot,
  faHandHoldingDollar,
  faHandsHoldingCircle,
  faHouse,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

export const sidebarMenu = [
  {
    id: 1,
    title: "Dashboard",
    name: "Trang chủ",
    icon: faHouse,
    route: "/",
  },
  {
    id: 2,
    title: "Donor",
    name: "Nhà hảo tâm",
    icon: faHandHoldingDollar,
    route: "/donors",
  },
  {
    id: 3,
    title: "Donation",
    name: "Quyên góp",
    icon: faCircleDollarToSlot,
    route: "/donations",
  },
  {
    id: 3,
    title: "Activity",
    name: "Sự kiện từ thiện",
    icon: faBullhorn,
    route: "/events",
    isEnd: true,
  },
  {
    id: 4,
    title: "Inventory",
    name: "Quản lý kho",
    icon: faWarehouse,
    route: "/quan-ly/kho",
  },
  {
    id: 5,
    title: "CharityManagement",
    name: "Quản lý nhà hảo tâm",
    icon: faHandHoldingDollar,
    route: "/admin/manage/donors",
  },
  {
    id: 6,
    title: "CharityManagement",
    name: "Quản lý sự kiện",
    icon: faBullhorn,
    route: "/admin/manage/events",
  },
  {
    id: 7,
    title: "CharityManagement",
    name: "Quản lý tài trợ",
    icon: faHouse,
    route: "/quan-ly/tai-tro",
  },
  {
    id: 8,
    title: "ReceiverManagement",
    name: "Quản lý người nhận",
    icon: faHandsHoldingCircle,
    route: "/nguoi-nhan",
  },
  {
    id: 9,
    title: "TaskManagement",
    name: "Quản lý hoạt động",
    icon: faCircleDollarToSlot,
    route: "/quan-ly/hoat-dong",
  },
  {
    id: 10,
    title: "PostManagement",
    name: "Kêu gọi",
    icon: faHouse,
    route: "/keu-goi",
  },
];
