import memories from "../data/memories";
import YearSection from "./YearSection";
import { useState } from "react";

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(null);

  if (!selectedYear) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md text-center space-y-6">
          <h2>click on a year to relive our memories:</h2>
          <div className="max-w-5x1 mx-auto py-12 px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {memories.map((year, index) => (
              <div
                key={year.year}
                className="cursor-pointer p-4 text-center"
                onClick={() => setSelectedYear(year.year)}
              >
                <h2 className="text-xl font-bold">year {index}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const yearData = memories.find((y) => y.year === selectedYear);
  const { year, entries } = yearData;

  return (
    <YearSection
      year={year}
      entries={entries}
      index={memories.findIndex((y) => y.year === selectedYear)}
      onBack={() => setSelectedYear(null)}
    />
  )
}

export default Timeline