import React from 'react'

const YearSection = ({ year, entries, index }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-4xl font-bold">year {index}!</h2>

      <div className="space-y-4">
        {entries.map((entry, index) => (
          
        ))}
      </div>
    </section>
  )
}

export default YearSection