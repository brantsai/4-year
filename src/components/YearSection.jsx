import TimelineItem from "./TimelineItem";
import { useState } from "react";

const YearSection = ({ year, entries, index, onBack }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEntry = entries[activeIndex];

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-2xl text-center space-y-6">
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">year {index}!</h2>

          <div className="space-y-4">
            <TimelineItem key={index} {...activeEntry} />
          </div>

          <div className="flex gap-4 mt-6 overflow-x-scroll whitespace-nowrap pb-4">
            {entries.map((entry, index) => (
              <div
                key={index}
                className={`cursor-pointer border rounded shrink-0 ${index === activeIndex ? "border-black" : "border-gray-300"}`}
                onClick={() => setActiveIndex(index)}
              >
                {entry.image ? (
                  <img
                    src={entry.image}
                    className="w-24 h-24 object-cover"
                  />
                ) : (
                  <div>
                    {entry.title}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={onBack}
            className="mb-6 px-4 py-2"
          >
            {"<- back to year selection"}
          </button>
        </section>
      </div>
    </div>
  )
}

export default YearSection