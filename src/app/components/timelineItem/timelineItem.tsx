import { timelineProps } from "../../interfaces/interfaces";

const TimelineItem = ({ year, title, duration, details }: timelineProps) => {
  return (
    <ul className="flex flex-col md:flex-row relative border-l border-stone-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3  rounded-full mt-1.5 -left-1.5 border-3 border-violet-500 bg-custom-dark dark:bg-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold border-3 border-solid border-violet-400 text-white dark:text-black bg-custom-dark dark:bg-white rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-custom-dark textdark:text-white">
            {title}
          </span>
          <span className="my-1 text-sm font-normal leading-none text-stone-500">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-custom-dark dark:text-custom-main">
          {details}
        </p>
      </li>
    </ul>
  );
};

export default TimelineItem;
