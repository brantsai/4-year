import TimelineItem from "./TimelineItem";
import { useState } from "react";

const YearSection = ({ year, entries, index }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEntry = entries[activeIndex];

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <section className="space-y-6">
        <h2 className="text-4xl font-bold">year {index}!</h2>

        <div className="space-y-4">
          <TimelineItem key={index} {...activeEntry} />
        </div>
      </section>
    </div>
  )
}

export default YearSection