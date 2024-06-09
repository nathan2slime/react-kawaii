import { FunctionComponent } from 'react';
import { DEFAULT_PROPS } from '../constants';
import { KawaiiProps } from '../types';
import { getFaceScale } from '../utils/getFaceScale';
import { Face } from './common/face';

export const Cyborg: FunctionComponent<KawaiiProps> = ({
  size = 240,
  mood = 'blissful',
  color = '#A6E191',
  ...props
} = DEFAULT_PROPS) => {
  const figmaFaceScale = getFaceScale(50.24);
  const figmaFaceXYPosition = '94.66 77.2';

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 240 240" fill="none" {...props}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M27.303 156.086c-.672-.244-1.567-.57-2.157-1.038l-1.619 10.018c-.344 1.643.898 3.105 2.322 3.371 1.648.347 3.112-.888 3.15-2.389l1.518-9.044c-.895-.326-2.095-.511-3.214-.918ZM8.272 166.585l.448.163c1.343.489 2.787.005 3.498-1.252 2.762-4.803 6.786-8.895 11.97-11.301-1.546-1.321-2.402-3.148-2.73-5.035-5.876 2.913-10.977 7.875-14.369 13.712-.63 1.033-.221 2.697 1.183 3.713ZM51.44 123.2l22.783-21.508 5.131 5.403-19.857 19.038-8.058-2.933Z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="m30.139 142.723 6.311 6.338c3.746 3.636 9.706 3.28 12.977-.833l10.606-13.818c2.5-3.384 2.251-8.273-.762-11.137l-2.79-2.783c-2.931-3.088-7.895-3.379-11.127-.767l-13.986 10.568c-4.513 2.65-4.975 8.796-1.23 12.432Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="m30.139 142.723 6.311 6.338c3.746 3.636 9.706 3.28 12.977-.833l10.606-13.818c2.5-3.384 2.251-8.273-.762-11.137l-2.79-2.783c-2.931-3.088-7.895-3.379-11.127-.767l-13.986 10.568c-4.513 2.65-4.975 8.796-1.23 12.432Z"
        clipRule="evenodd"
        opacity={0.2}
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M27.303 156.086c4.697 1.71 9.886-.698 11.59-5.378 1.703-4.681-.724-9.861-5.422-11.57-4.697-1.71-9.886.698-11.59 5.378-1.703 4.68.724 9.86 5.422 11.57Zm184.545 0c.672-.244 1.567-.57 2.158-1.038l1.618 10.018c.344 1.643-.898 3.105-2.322 3.371-1.648.347-3.111-.888-3.151-2.389l-1.517-9.044c.895-.326 2.095-.511 3.214-.918Zm19.031 10.499-.448.163c-1.343.489-2.787.005-3.497-1.252-2.763-4.803-6.787-8.895-11.972-11.301 1.548-1.321 2.404-3.148 2.731-5.035 5.876 2.913 10.977 7.875 14.369 13.712.63 1.033.221 2.697-1.183 3.713ZM187.712 123.2l-22.784-21.508-5.131 5.403 19.857 19.038 8.058-2.933Z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="m209.013 142.723-6.312 6.338c-3.746 3.636-9.706 3.28-12.977-.833l-10.606-13.818c-2.499-3.384-2.251-8.273.762-11.137l2.79-2.783c2.932-3.088 7.895-3.379 11.127-.767l13.986 10.568c4.513 2.65 4.976 8.796 1.23 12.432Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="m209.013 142.723-6.312 6.338c-3.746 3.636-9.706 3.28-12.977-.833l-10.606-13.818c-2.499-3.384-2.251-8.273.762-11.137l2.79-2.783c2.932-3.088 7.895-3.379 11.127-.767l13.986 10.568c4.513 2.65 4.976 8.796 1.23 12.432Z"
        clipRule="evenodd"
        opacity={0.2}
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M211.848 156.086c-4.697 1.71-9.886-.698-11.589-5.378-1.704-4.681.723-9.861 5.421-11.57 4.697-1.71 9.886.698 11.59 5.378 1.703 4.68-.724 9.86-5.422 11.57Z"
        clipRule="evenodd"
      />
      <path fill={color} d="M138.495 166.555h8.317v20.1h-8.317z" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M158.318 200.933c-.832-13.03-7.486-23.288-15.803-23.288s-15.248 10.258-15.803 23.288h31.606Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M158.318 200.933c-.832-13.03-7.486-23.288-15.803-23.288s-15.248 10.258-15.803 23.288h31.606Z"
        clipRule="evenodd"
        opacity={0.2}
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M157.763 200.517H126.99c-2.495 0-4.436 1.941-4.436 4.436s1.941 4.436 4.436 4.436h30.773c2.495 0 4.436-1.941 4.436-4.436-.277-2.495-2.218-4.436-4.436-4.436Z"
        clipRule="evenodd"
      />
      <path fill={color} d="M92.751 166.555h8.317v20.1h-8.317z" />
      <path
        fill={color}
        fillRule="evenodd"
        d="M112.573 200.933c-.831-13.03-7.485-23.288-15.802-23.288s-15.249 10.258-15.803 23.288h31.605Z"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M112.573 200.933c-.831-13.03-7.485-23.288-15.802-23.288s-15.249 10.258-15.803 23.288h31.605Z"
        clipRule="evenodd"
        opacity={0.2}
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M112.019 200.517H81.245c-2.495 0-4.436 1.941-4.436 4.436s1.941 4.436 4.436 4.436h30.774c2.495 0 4.436-1.941 4.436-4.436s-1.941-4.436-4.436-4.436Zm-46.498-93.193c-1.085 24.411 1.464 64.531 54.26 64.531 52.779 0 55.344-39.602 54.262-64.212.428-7.837-.045-15.237-.415-21.022-.19-2.967-.353-5.509-.353-7.467 0-30.158-23.95-49.154-53.494-49.154-29.543 0-53.493 18.996-53.493 49.154 0 1.848-.159 4.284-.346 7.152-.371 5.706-.854 13.122-.42 21.018Z"
        clipRule="evenodd"
      />
      <path
        fill="#121212"
        fillRule="evenodd"
        d="M115.021 171.741c48.146-2.34 50.521-40.255 49.473-64.098.428-7.837-.046-15.237-.416-21.022-.189-2.967-.352-5.509-.352-7.467 0-28.515-21.412-47.052-48.719-48.986a67.574 67.574 0 0 1 4.774-.168c29.544 0 53.494 18.996 53.494 49.154 0 1.958.163 4.5.353 7.466.37 5.786.843 13.186.415 21.023 1.082 24.61-1.483 64.212-54.262 64.212-1.634 0-3.22-.039-4.76-.114Z"
        clipRule="evenodd"
        opacity={0.1}
      />
      <path
        fill="#ECDBCA"
        fillRule="evenodd"
        d="M119.4 113.457c40.959 0 40.959-8.499 40.959-28.418 0-19.92-8.614-26.793-40.959-26.793-32.344 0-40.959 6.873-40.959 26.793 0 19.919 0 28.418 40.959 28.418Z"
        clipRule="evenodd"
      />
      <mask
        id="Cyborg_svg__a"
        width={23}
        height={14}
        x={108}
        y={89}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'luminance'
        }}
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M109.247 96.172c-.556-1.22-.884-2.535-.885-3.888 0-.62.264-1.227.723-1.666a2.55 2.55 0 0 1 1.747-.69h17.287c.651 0 1.286.251 1.746.69.461.439.724 1.046.724 1.666-.006 2.03-.728 3.97-1.891 5.643a11.853 11.853 0 0 1-4.803 4 10.732 10.732 0 0 1-4.419.962c-2.384 0-4.557-.811-6.295-2.031-1.743-1.226-3.095-2.858-3.934-4.686Z"
          clipRule="evenodd"
        />
      </mask>

      <Face mood={mood} transform={`translate(${figmaFaceXYPosition}) scale(${figmaFaceScale})`} />
    </svg>
  );
};
