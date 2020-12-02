import React, { useState, useEffect } from 'react'
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
import db, { auth } from './firebase'

function Sidebar() {
  const user = useSelector(selectUser)
  const [channels, setChannels] = useState([])

  const handleAddChannel = () => {
    const channelName = prompt('Hi')

    if (channelName) {
      db.collection('channels').add({
        channelName: channelName,
      })
    }
  }

  useEffect(() => {
    db.collection('channels').onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    })
  }, [])

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
          <Add onClick={handleAddChannel} className="sidebar__addChannel" />
        </div>
        <div className="sidebar__channelsList">
          {channels.map(({ id, channel }) => (
            <SidebarChannel key={id} id={id} channelName={channel.channelName} />
          ))}
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
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
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
