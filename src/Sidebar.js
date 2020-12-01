import React from 'react'
import './Sidebar.css'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Add from '@material-ui/icons/Add'
import SignalCellularAlt from '@material-ui/icons/SignalCellularAlt'
import InfoOutlined from '@material-ui/icons/InfoOutlined'
import Call from '@material-ui/icons/Call'
import SidebarChannel from './SidebarChannel'
import { Avatar } from '@material-ui/core'
import Mic from '@material-ui/icons/Mic'
import Headset from '@material-ui/icons/Headset'
import Settings from '@material-ui/icons/Settings'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {
  const user = useSelector(selectUser)

  console.log('user: ', user)

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Clever Programming</h3>
        <ExpandMore />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMore />
            <h4>Text Channels</h4>
          </div>
          <Add className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAlt className="sidebar__voiceIcon" fontSize="large" />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlined />
          <Call />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar src={user.photo} />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar__profileIcons">
          <Mic />
          <Headset />
          <Settings />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
