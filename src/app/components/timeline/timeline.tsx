import { timeline } from "../../data/data";
import TimelineItem from "../timelineItem/timelineItem";
import Title from "../title/title";

const Timeline = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center min-h-screen md:pt-20"
      id="timeline"
    >
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline.reverse().map((item, index) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            key={"tl-" + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
