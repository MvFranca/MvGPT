// icon:robot | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconRobot(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      color="#fff"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M7 7h10a2 2 0 012 2v1l1 1v3l-1 1v3a2 2 0 01-2 2H7a2 2 0 01-2-2v-3l-1-1v-3l1-1V9a2 2 0 012-2zM10 16h4" />
      <path
        fill="currentColor"
        d="M9 11.5 A0.5 0.5 0 0 1 8.5 12 A0.5 0.5 0 0 1 8 11.5 A0.5 0.5 0 0 1 9 11.5 z"
      />
      <path
        fill="currentColor"
        d="M16 11.5 A0.5 0.5 0 0 1 15.5 12 A0.5 0.5 0 0 1 15 11.5 A0.5 0.5 0 0 1 16 11.5 z"
      />
      <path d="M9 7L8 3M15 7l1-4" />
    </svg>
  );
}

export default IconRobot;
