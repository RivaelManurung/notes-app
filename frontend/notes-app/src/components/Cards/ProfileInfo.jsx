import React from 'react'
import { getInitials } from '../../utils/helper'

const ProfileInfo = ({onLogout}) => {
  return (
    <div className="flex items-center gap-3" >
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-medium text-slate-950">
            {getInitials("Jasaon Michael")}
        </div>
      <div>
        <p className="text-sm font-medium">Wiliam</p>
        <button className="text-slate-700 text-sm  underline" onClick={onLogout}>Logout</button>
      </div>
    </div>
  )
}

export default ProfileInfo
