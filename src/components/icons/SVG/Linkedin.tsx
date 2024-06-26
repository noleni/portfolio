import React from "react";

const Linkedin = (props : any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        className="feather feather-linkedin"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      />
      <rect x="2" y="9" width="4" height="12" style={{fill: 'none', strokeWidth:"1.4", stroke:"currentcolor"}}></rect>
      <circle cx="4" cy="4" r="2" style={{fill: 'none', strokeWidth:"1.4", stroke:"currentcolor"}} />

    </svg>
  );
};

export default Linkedin;
