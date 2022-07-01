import * as React from "react";

function CurvedLine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="514"
      height="455"
      viewBox="0 0 514 455"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 1C50.2027 56.6635 181.632 153.66 313.729 96.3365C478.85 24.6823 572.418 284.58 470.844 326.48C369.269 368.379 126.592 212.926 79.5575 326.48C41.9299 417.323 81.5589 449.344 106.077 454"
        stroke="#5585DA"
        strokeDasharray="8 8"
      />
    </svg>
  );
}

export default CurvedLine;
