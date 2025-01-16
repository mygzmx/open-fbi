import React from 'react';
import { SVGComponent } from "@/components/svg/index.interfaces";

export default function HomeMoreSvg({ ...props }: SVGComponent) {
  return (
    <svg { ...props } viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <rect id="home_more_path-1" x="0" y="0" width="16" height="16"/>
        <rect id="home_more_path-3" x="0" y="0" width="16" height="13.3333333"/>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-1664, -627)">
          <g transform="translate(1626, 624)">
            <g transform="translate(46, 11) rotate(-90) translate(-46, -11)translate(38, 3)">
              <mask id="home_more_mask-2" fill="white">
                <use xlinkHref="#home_more_path-1"/>
              </mask>
              <g />
              <g mask="url(#home_more_mask-2)">
                <g transform="translate(0, 2.2222)">
                  <mask id="home_more_mask-4" fill="white">
                    <use xlinkHref="#home_more_path-3"/>
                  </mask>
                  <g stroke="none" fill="none"/>
                  <path d="M11.7105996,1.00105538 C12.1242407,0.979284797 12.4772115,1.29695858 12.4989821,1.71059963 L12.9434266,10.1550441 C12.9668343,10.5997909 12.5997909,10.9668343 12.1550441,10.9434266 L3.71059963,10.4989821 C3.29695858,10.4772115 2.9792848,10.1242407 3.00105538,9.71059963 C3.02282596,9.29695858 3.37579683,8.9792848 3.78943788,9.00105538 L11.4010188,9.40101875 L11.0010554,1.78943788 C10.981099,1.41026691 11.2463702,1.08207576 11.6093296,1.01324147 L11.7105996,1.00105538 Z" stroke="none" fill="#FF375F" fillRule="nonzero" mask="url(#home_more_mask-4)" transform="translate(7.9722, 5.9722) rotate(45) translate(-7.9722, -5.9722)"/>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
