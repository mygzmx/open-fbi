import React from 'react';
import { SVGComponent } from "@/components/svg/index.interfaces";

export default function FacebookSvg({ ...props }: SVGComponent) {
  return (
    <svg { ...props } viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>Facebook logo</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-86, -1102)" fill="#FFFFFF">
          <g transform="translate(50, 1074)">
            <g transform="translate(36, 28)">
              <path d="M15.0836629,39 L22.668103,39 L22.668103,21.8626536 L28.4833835,21.8626536 L30,14.9082134 L22.668103,14.9082134 L22.668103,9.98315198 C22.668103,8.24520885 24.1025751,6.83604774 25.8717347,6.83604774 L30,6.83604774 L30,1 L22.4420362,1 C18.3782644,1 15.0836629,4.23580204 15.0836629,8.22786943 L15.0836629,14.9082134 L10,14.9082134 L10,21.8626536 L15.0836629,21.8626536 L15.0836629,39 Z"/>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
