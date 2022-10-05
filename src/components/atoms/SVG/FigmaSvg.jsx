import * as React from "react";

const FigmaSvg = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={50} height={50}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
    <path stroke="currentColor" d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" />
    <path stroke="currentColor" d="M12 2h3.5a3.5 3.5 0 110 7H12V2z" />
    <path stroke="currentColor" d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0z" />
    <path stroke="currentColor" d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0z" />
    <path stroke="currentColor" d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" />
    </svg>
  );
}

export default FigmaSvg;
