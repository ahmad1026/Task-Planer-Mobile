import React from 'react'

export default function TaskNavbar() {

  return (
    <div className='mt-8 pb-3'>
        <div className='w-11/12 mx-auto border border-[#E4EDFF] bg-white rounded-2xl p-2'>
            <div className='flex gap-1'>
                <div className='w-1/3 bg-primary text-white font-bold text-center py-2 rounded-lg'>Todo</div>
                <div className='w-1/3 text-center text-primaryText font-medium py-2 rounded-lg'>In Progress</div>
                <div className='w-1/3 text-center text-primaryText font-medium py-2 rounded-lg'>Completed</div>
            </div>
        </div>
    </div>
  )
}
