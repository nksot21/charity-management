import React from 'react'; 
import DonorIcon from './SidebarIcon/Donor.jsx'
import ChartPieIcon from './SidebarIcon/ChartPieIcon.jsx'
import DonationIcon from './SidebarIcon/Donation.jsx'
import ActivityIcon from './SidebarIcon/ActivityIcon'
import InventoryIcon from './SidebarIcon/InventoryIcon'
import CharityManagementIcon from './SidebarIcon/CharityManagementIcon.jsx';
import ReceiverManagementIcon from './SidebarIcon/ReceiverIcon'
import TaskManagementIcon from './SidebarIcon/TaskManagementIcon.jsx';

const SidebarMenu = 
    {
        "id": 1,
        "title": "Teller Operation",
        "subMenuL1": [
            {
                "id": 1,
                "title": "Dashboard",
                "name": "Trang chủ",
                "icon": ChartPieIcon,
                "route": "/"
            },
            {
                "id": 2,
                "title": "Donor",
                "name": "Nhà hảo tâm",
                "icon": DonorIcon,
                "route": "/donors"
            },
            {
                "id": 3,
                "title": "Donation",
                "name": "Quyên góp",
                "icon": DonationIcon,
                "route": "/donations"
            },
            {
                "id": 3,
                "title": "Activity",
                "name": "Sự kiện từ thiện",
                "icon": ActivityIcon,
                "route": "/events",
                "isEnd": true,
            },
            {
                "id": 4,
                "title": "Inventory",
                "name": "Quản lý kho",
                "icon": InventoryIcon,
                "route": "#"
            },
            {
                "id": 5,
                "title": "CharityManagement",
                "name": "Quản lý tài trợ",
                "icon": CharityManagementIcon,
                "route": "#"
            },
            {
                "id": 6,
                "title": "ReceiverManagement",
                "name": "Quản lý người nhận",
                "icon": ReceiverManagementIcon,
                "route": "/nguoi-nhan"
            },
            {
                "id": 6,
                "title": "TaskManagement",
                "name": "Quản lý hoạt động",
                "icon": TaskManagementIcon,
                "route": "#"
            },
            {
                "id": 6,
                "title": "PostManagement",
                "name": "Kêu gọi",
                "route": "#"
            },
        ]
    }


export default SidebarMenu