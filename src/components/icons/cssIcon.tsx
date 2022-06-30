import * as React from "react";

function CssIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="98"
      height="93"
      viewBox="0 0 98 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="53.5"
        cy="48.5"
        r="42.5"
        fill="#5259F2"
        stroke="black"
        strokeWidth="4"
      />
      <path
        d="M89 44.5C89 67.9304 69.5665 87 45.5 87C21.4335 87 2 67.9304 2 44.5C2 21.0696 21.4335 2 45.5 2C69.5665 2 89 21.0696 89 44.5Z"
        fill="#5259F2"
        stroke="black"
        strokeWidth="4"
      />
      <g clipPath="url(#clip0_173_89)">
        <path
          d="M35.5674 18H41.2605V20.3806H37.948V22.7612H41.2605V25.1417H35.5674V18ZM42.3978 18H48.0931V20.0714H44.7805V20.4844H48.0931V25.2455H42.3978V23.0725H45.7103V22.6574H42.3978V18ZM49.2325 18H54.9234V20.0714H51.6109V20.4844H54.9234V25.2455H49.2325V23.0725H52.5451V22.6574H49.2325V18Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.4801 71L30.1455 66.7423L25.625 28.4167H65.375L60.8567 66.7379L45.4801 71ZM34.5621 45.7654L34.9839 50.4647H51.2748L50.7293 56.5597L45.4868 57.9775H45.4823L40.2486 56.5641L39.9129 52.8166H35.1937L35.8518 60.1968L45.4801 62.8689L55.1239 60.1968L56.2987 47.0263L56.4136 45.7654L57.2616 36.2497H33.7163L34.1447 40.9512H52.1118L51.6833 45.7654H34.5621V45.7654Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_173_89">
          <rect
            width="53"
            height="53"
            fill="white"
            transform="translate(19 18)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CssIcon;
