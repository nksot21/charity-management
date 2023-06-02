
import React, { useState } from 'react'
import SidebarMenu from './SidebarMenu'
import './Sidebar.css'
import InventoryIcon from './SidebarIcon/InventoryIcon.jsx'
import ChartPieIcon from './SidebarIcon/ChartPieIcon.jsx'
import DonationIcon from './SidebarIcon/Donation.jsx'
import CharityManagementIcon from './SidebarIcon/CharityManagementIcon'
import StudentIcon from './SidebarIcon/Donor.jsx'
import ActivityIcon from './SidebarIcon/ActivityIcon.jsx'
import ReceiverIcon from './SidebarIcon/ReceiverIcon'
import TaskManagementIcon from './SidebarIcon/TaskManagementIcon'
import PostIcon from './SidebarIcon/PostIcon'
import { Link } from 'react-router-dom'

export default function Sidebar() {

    
    const [dashboardColor, setDashboardColor] = useState("black");
    const [donorColor, setDonorColor] = useState("black");
    const [donationColor, setDonationColor] = useState("black");
    const [activityColor, setActivityColor] = useState("black");
    const [inventoryColor, setInventoryColor] = useState("black");
    const [charityColor, setCharityColor] = useState("black");
    const [receiverColor, setReceiverColor] = useState("black");
    const [taskColor, setTaskColor] = useState("black");
    const [postColor, setPostColor] = useState("black");    
    return <div className='d-flex flex-column justify-content-between sidebar-disable-copy ' 
        style={{  height: '100%',
            width: "calc(100% / 6 + 10px   )",
            position: "fixed",
            zIndex: "1",
            top: "70px",
            left: "0px",
            borderRight: "1px solid #E5E7EB"}}>
        
        <div>
        {
            SidebarMenu.subMenuL1.map((item, index) => {
                // let icon = iconList.find((iconItem) => {
                //     if(iconItem.name === item.icon){
                //         return iconItem
                //     }
                    
                // })
                // let iconComp = icon.comp
                return (
                    <div className=''>
                        
                        <div className='row sitebar-menu-item' style={{margin: '7px 0 0 0'}}
                            key={index}
                            onMouseEnter={ () => {
                                if(item.title === "Dashboard"){
                                    setDashboardColor("#1C64F2")
                                }else if(item.title=== "Donor"){
                                    setDonorColor("#1C64F2")
                                }else if(item.title=== "Donation"){
                                    setDonationColor("#1C64F2")
                                }else if(item.title=== "Activity"){
                                    setActivityColor("#1C64F2")
                                }else if(item.title=== "Inventory"){    
                                    setInventoryColor("#1C64F2")
                                }else if(item.title==="CharityManagement"){
                                    setCharityColor("#1C64F2")
                                }else if(item.title==="ReceiverManagement"){
                                    setReceiverColor("#1C64F2")
                                }else if(item.title==="TaskManagement"){
                                    setTaskColor("#1C64F2")
                                }else if(item.title==="PostManagement"){
                                    setPostColor("#1C64F2")
                                }
                                


                             } }
                            onMouseLeave={ () => {
                                if(item.title === "Dashboard"){
                                    setDashboardColor("#000000")
                                }else if(item.title=== "Donor"){
                                    setDonorColor("#000000")
                                }else if(item.title=== "Donation"){
                                    setDonationColor("#000000")
                                }else if(item.title=== "Activity"){
                                    setActivityColor("#000000")
                                }else if(item.title=== "Inventory"){    
                                    setInventoryColor("#000000")
                                }else if(item.title==="CharityManagement"){
                                    setCharityColor("#000000")
                                }else if(item.title==="ReceiverManagement"){
                                    setReceiverColor("#000000")
                                }else if(item.title==="TaskManagement"){
                                    setTaskColor("#000000")
                                }else if(item.title==="PostManagement"){
                                    setPostColor("#000000")
                                }
                            } }
                        >
                            <Link to={`${item.route}`} >
                                <div className='col-3'
                                    style={{
                                        height: "55px",
                                        position: "relative",
                                        padding: "0px",
                                        lineHeight: "55px",
                                        paddingLeft: "25px",
                                    }}                            
                                >   
                                    {<div>
                                        {item.title === "Dashboard" && <ChartPieIcon id="Dashboard" className="menu-icon" color={dashboardColor}/>}
                                        {item.title === "Donor" && <StudentIcon id="Donor" className="menu-icon" color={donorColor} />}
                                        {item.title === "Donation" && <DonationIcon id="Donation" className="menu-icon" color={donationColor} />}
                                        {item.title === "Activity" && <ActivityIcon id="Activity" className="menu-icon" color={activityColor} />}
                                        {item.title === "Inventory" && <InventoryIcon id="Inventory" className="menu-icon" color={inventoryColor} />}
                                        {item.title === "CharityManagement" && <CharityManagementIcon id="CharityManagement" className="menu-icon" color={charityColor} />}
                                        {item.title === "ReceiverManagement" && <ReceiverIcon id="Receiver" className="menu-icon" color={receiverColor} />}
                                        {item.title === "TaskManagement" && <TaskManagementIcon id="task" className="menu-icon" color={taskColor} />}
                                        {item.title === "PostManagement" && <PostIcon id="post" className="menu-icon" color={postColor} />}
                                    </div>}
                                    {/* <CertificateIcon color={"blue"}/>  */}
                                </div>
                                <div className='hi col-9 '
                                    style={{
                                        height: "55px",
                                        paddingLeft: "20px",
                                        lineHeight: "55px",
                                        // color: "#000000",
                                        fontWeight: "500",
                                        fontSize: "15px",
                                        // fontFamily: ""
                                        marginBottom: "0"
                                    }}
                                >
                                    <p > {item.name} </p>
                                </div>
                                </Link>
        
                                {item.isEnd && item.isEnd === true && <hr style={{marginTop: "10px"}}></hr>}
                            </div>
                        
                    </div>
                )
            })
        }
        </div>
        <p style={{marginBottom: '70px', marginLeft: '20px', fontWeight: "500", fontSize: "15px",}}> aSheep Charity Management</p>
    </div>
}
