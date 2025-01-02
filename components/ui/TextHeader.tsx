import React from "react";

const TextHeader = ({ first, full }: { first: string; full: string }) => {
  return (
    <div className="relative flex items-center space-x-2">
      {/* <span className="absolute -left-0 top-0.5 w-1 h-6 bg-orange-900  opacity-50"></span> */}

      <h2 className="relative text-2xl font-bold">
        <span className="text-primary">{first}</span>{""}
        {full}
      </h2>
    </div>
  );
};

export default TextHeader;
