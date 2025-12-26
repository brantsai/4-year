import memories from "../data/memories";
import YearSection from "./YearSection";

const Timeline = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 space-y-16">
      {memories.map((year, index) => (
        <YearSection key={year.year} index={index} {...year}/>
      ))}
    </div>
  )
}

export default Timeline