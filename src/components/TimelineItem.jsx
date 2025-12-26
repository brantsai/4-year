import React from 'react'

const TimelineItem = ({ title, date, description, image }) => {
  return (
    <div className="flex gap-6 items-center rounded-x1 bg-white border border-neutral-800 p-5 space-y-2">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-neutral-500">{date}</p>
        <p className="pt-3">{description}</p>
      </div>

      <div className="w-60 shrink-0">
        <img
          src={image}
          className="rounded-lg object-cover w-full"
        />
      </div>
    </div>
  )
}

export default TimelineItem