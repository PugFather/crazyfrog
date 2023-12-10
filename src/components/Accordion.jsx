import { useState } from "react";

const minusIcon = "-";
const plusIcon = "+";

function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div
      className="list__block cursor-pointer rounded-3xl border-4 border-[#f8f6ff]"
      onClick={toggleExpanded}
    >
      <div className="flex w-full items-center justify-between p-8 text-4xl font-bold">
        <h5 className="flex-1">{title}</h5>
        <div className="flex-none">{expanded ? minusIcon : plusIcon}</div>
      </div>
      <div
        className={`overflow-hidden px-8 pt-0 transition-[max-height] duration-300 ease-in ${
          expanded ? "max-h-40" : "max-h-0"
        }`}
      >
        <p className="pb-8 text-xl">{content}</p>
      </div>
    </div>
  );
}

export default Accordion;
