import React from 'react'
import './ChatHeader.css'
import Notifications from '@material-ui/icons/Notifications'
import EditLocationRounded from '@material-ui/icons/EditLocationRounded'
import PeopleAltRounded from '@material-ui/icons/PeopleAltRounded'
import SearchRounded from '@material-ui/icons/SearchRounded'
import SendRounded from '@material-ui/icons/SendRounded'
import HelpRounded from '@material-ui/icons/HelpRounded'

function ChatHeader({ channelName }) {
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeader__right">
        <Notifications />
        <EditLocationRounded />
        <PeopleAltRounded />

        <div className="chatHeader__search">
          <input placeholder="Search" />
          <SearchRounded />
        </div>

        <SendRounded />
        <HelpRounded />
      </div>
    </div>
  )
}

export default ChatHeader
