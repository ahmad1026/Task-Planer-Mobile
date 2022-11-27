import React from 'react'
import HeaderCom from '../../components/header/HeaderCom'
import TaskNavbar from '../../components/tasks/navbar'

export default function index() {
  return (
    <div className="bg-[#e0f1fc] border-b border-[#E4EDFF]  pt-4">
        <HeaderCom/>
        <TaskNavbar/>
    </div>

  )
}
