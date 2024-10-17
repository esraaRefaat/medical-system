import React from 'react'
import Svg, {
  Defs,
  Path,
  G,
  Circle,
  LinearGradient,
  Stop,
  Rect,
  Pattern,
  Use,
  Image,
  ClipPath,
  Mask,
} from 'react-native-svg'
 import { PRIMARY } from '../styles/colors'

export const BACK_Arrow = ({ props }) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    fill="none"
  >
    <Path
      fill="#18181B"
      d="m2.828 7 4.95 4.95-1.414 1.414L0 7 6.364.636 7.778 2.05 2.828 7Z"
    />
  </Svg>
)
export const SMS = props => (
  <Svg
    {...props}
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M22 13.48V16c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5"
      stroke={PRIMARY}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 9.5 13.87 12c-1.03.82-2.72.82-3.75 0L7 9.5"
      stroke={PRIMARY}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export const PASSWORD = props => (
  <Svg
    {...props}
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.5 16.5a2.5 2.5 0 0 0 5 0A2.5 2.5 0 0 0 12 14"
      stroke={PRIMARY}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M22 17.5v-2c0-4-1-5-5-5H7c-4 0-5 1-5 5v2c0 4 1 5 5 5h10c1.76 0 2.94-.19 3.71-.75M6 10.5v-2c0-3.31 1-6 6-6 4.5 0 6 2 6 5"
      stroke={PRIMARY}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export const ShowPass = props => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <G clipPath="url(#a)">
      <Path
        fill="#6C737F"
        d="m9.342 18.782-1.931-.518.787-2.94a10.99 10.99 0 0 1-3.237-1.871l-2.153 2.154-1.415-1.415 2.154-2.153a10.957 10.957 0 0 1-2.371-5.07l1.968-.36C3.903 10.813 7.579 14 12 14c4.42 0 8.097-3.187 8.856-7.39l1.968.359a10.958 10.958 0 0 1-2.37 5.07l2.153 2.154-1.415 1.415-2.153-2.154a10.99 10.99 0 0 1-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.076 11.076 0 0 1-3.74 0l-.788 2.94Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export const DontshowPass = props => (
  <Svg width={20} height={20} viewBox="0 0 24 18" {...props}>
    <Path
      d="M12 0a10.76 10.76 0 015.88 1.79 16.8 16.8 0 012.19 1.75 13 13 0 011.73 1.92c.47.64.87 1.23 1.21 1.75a13.25 13.25 0 01.75 1.29L24 9c0 .08-.09.18-.15.32s-.21.4-.44.81-.48.81-.74 1.21-.61.87-1 1.41a19.63 19.63 0 01-1.33 1.51 16.09 16.09 0 01-1.63 1.41 12.8 12.8 0 01-1.93 1.2 11.13 11.13 0 01-2.22.82A10.23 10.23 0 0112 18a10.35 10.35 0 01-3.18-.49 10.73 10.73 0 01-2.7-1.29 18.59 18.59 0 01-2.19-1.74 13 13 0 01-1.73-1.91 33.9 33.9 0 01-1.21-1.75 11.23 11.23 0 01-.75-1.29L0 9c0-.08.09-.18.15-.32s.21-.4.44-.81.48-.82.74-1.22.61-.87 1-1.41A19.81 19.81 0 013.7 3.76a16.09 16.09 0 011.63-1.41 12.12 12.12 0 011.93-1.21A10.55 10.55 0 019.48.32 10.24 10.24 0 0112 0zm0 2a8.25 8.25 0 00-2.15.29A8.75 8.75 0 008 3a10.6 10.6 0 00-1.66 1.1A13.6 13.6 0 004.9 5.42a17 17 0 00-1.15 1.35c-.37.48-.66.9-.88 1.24s-.42.69-.62 1c.2.34.4.68.62 1s.51.75.88 1.23a16.649 16.649 0 001.15 1.38 13.56 13.56 0 001.39 1.27A11.83 11.83 0 008 15a9.28 9.28 0 001.9.74A8.24 8.24 0 0012 16a7.85 7.85 0 002.15-.29 9.28 9.28 0 001.9-.74 10.6 10.6 0 001.66-1.1 13.56 13.56 0 001.39-1.27 15.22 15.22 0 001.15-1.34c.37-.48.66-.89.88-1.23s.42-.69.62-1c-.2-.34-.4-.68-.62-1s-.51-.76-.88-1.24A16.82 16.82 0 0019.1 5.4a13.56 13.56 0 00-1.39-1.27A11.92 11.92 0 0016.05 3a9.89 9.89 0 00-1.9-.74A8.25 8.25 0 0012 2zm0 3a4 4 0 11-4 4 4 4 0 014-4zm0 2a2 2 0 101.41 3.41A1.93 1.93 0 0014 9a2 2 0 00-2-2z"
      stroke={PRIMARY}
    />
  </Svg>
)
export const User = ({ props }) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <Circle cx={12} cy={6} r={4} stroke="#4640DE" strokeWidth={1.5} />
    <Path
      stroke="#4640DE"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.997 18c.003-.164.003-.331.003-.5 0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437"
    />
  </Svg>
)

export const OTP = ({ props }) => (
  <Svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
  >
    <Path
      fill={PRIMARY}
      d="M458.474 112H265V62.41A31.381 31.381 0 0 0 233.588 31H62.408A31.38 31.38 0 0 0 31 62.41v387.18A31.438 31.438 0 0 0 62.408 481h171.18A31.439 31.439 0 0 0 265 449.59V292h193.477A22.523 22.523 0 0 0 481 269.477V134.526A22.526 22.526 0 0 0 458.474 112ZM125.5 50.08h45a11.25 11.25 0 0 1 0 22.5h-45a11.25 11.25 0 0 1 0-22.5Zm44.996 411.765h-45a11.25 11.25 0 1 1 0-22.5h45a11.25 11.25 0 0 1 0 22.5Zm74.702-41.595h-194.4V91.75h194.4V112H125.315A22.315 22.315 0 0 0 103 134.315v135.35A22.336 22.336 0 0 0 125.336 292H166v36.149a11.122 11.122 0 0 0 18.987 7.864L229 292h16.198Zm-24.39-210.06a11.309 11.309 0 0 1 4.14 15.39 11.198 11.198 0 0 1-15.39 4.14l-14.308-8.28V238a11.25 11.25 0 0 1-22.5 0v-16.56l-14.313 8.28a11.198 11.198 0 0 1-15.39-4.14 11.316 11.316 0 0 1 4.14-15.39L161.5 202l-14.313-8.28a11.269 11.269 0 0 1 11.25-19.53l14.313 8.28V166a11.25 11.25 0 0 1 22.5 0v16.47l14.309-8.28a11.269 11.269 0 0 1 11.25 19.53L206.5 202Zm108 0a11.309 11.309 0 0 1 4.14 15.39 11.198 11.198 0 0 1-15.39 4.14l-14.308-8.28V238a11.25 11.25 0 0 1-22.5 0v-16.56l-14.313 8.28a11.198 11.198 0 0 1-15.39-4.14 11.316 11.316 0 0 1 4.14-15.39L269.5 202l-14.313-8.28a11.269 11.269 0 0 1 11.25-19.53l14.313 8.28V166a11.25 11.25 0 0 1 22.5 0v16.47l14.309-8.28a11.269 11.269 0 0 1 11.25 19.53L314.5 202Zm108 0a11.309 11.309 0 0 1 4.14 15.39 11.198 11.198 0 0 1-15.39 4.14l-14.308-8.28V238a11.25 11.25 0 0 1-22.5 0v-16.56l-14.313 8.28a11.198 11.198 0 0 1-15.39-4.14 11.316 11.316 0 0 1 4.14-15.39L377.5 202l-14.313-8.28a11.269 11.269 0 0 1 11.25-19.53l14.313 8.28V166a11.25 11.25 0 0 1 22.5 0v16.47l14.309-8.28a11.269 11.269 0 0 1 11.25 19.53L422.5 202Z"
    />
  </Svg>
)
export const ALERT_MSG = ({ props, color }) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 6.666v4.167M3.334 5a8.336 8.336 0 006.667 13.333c4.6 0 8.333-3.734 8.333-8.334s-3.733-8.333-8.333-8.333c-1.192 0-2.334.25-3.359.708"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.995 13.334h.008"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
export const Calendar = ({ props, color }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 50 50"
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path d="M0 0H50V50H0z" />
      </ClipPath>
    </Defs>
    <G data-name="calendar (2)" clipPath="url(#a)">
      <G data-name="Group 126">
        <G data-name="Group 125">
          <Circle
            data-name="Ellipse 29"
            cx={1.953}
            cy={1.953}
            r={1.953}
            transform="translate(35.742 18.555)"
            fill={color}
          />
          <Path
            data-name="Path 1166"
            d="M42.188 3.906h-2.54V1.953a1.953 1.953 0 00-3.906 0v1.953h-8.887V1.953a1.953 1.953 0 00-3.906 0v1.953H14.16V1.953a1.953 1.953 0 00-3.906 0v1.953H7.813A7.821 7.821 0 000 11.719v30.469A7.821 7.821 0 007.813 50h14.941a1.953 1.953 0 000-3.906H7.813a3.911 3.911 0 01-3.906-3.906V11.719a3.911 3.911 0 013.906-3.906h2.441v1.953a1.953 1.953 0 003.906 0V7.813h8.789v1.953a1.953 1.953 0 003.906 0V7.813h8.887v1.953a1.953 1.953 0 003.906 0V7.813h2.539a3.911 3.911 0 013.906 3.906v11.133a1.953 1.953 0 003.906 0V11.719a7.821 7.821 0 00-7.811-7.813z"
            fill={color}
          />
          <Path
            data-name="Path 1167"
            d="M281.816 270a11.816 11.816 0 1011.816 11.816A11.83 11.83 0 00281.816 270zm0 19.727a7.91 7.91 0 117.91-7.91 7.919 7.919 0 01-7.91 7.91z"
            transform="translate(-243.633 -243.633)"
            fill={color}
          />
          <Path
            data-name="Path 1168"
            d="M375.785 334h-.879v-2.051a1.953 1.953 0 00-3.906 0v4a1.953 1.953 0 001.953 1.953h2.832a1.953 1.953 0 000-3.906z"
            transform="translate(-334.77 -297.773)"
            fill={color}
          />
          <Circle
            data-name="Ellipse 30"
            cx={1.953}
            cy={1.953}
            r={1.953}
            transform="translate(27.246 18.555)"
            fill={color}
          />
          <Circle
            data-name="Ellipse 31"
            cx={1.953}
            cy={1.953}
            r={1.953}
            transform="translate(18.75 27.051)"
            fill={color}
          />
          <Circle
            data-name="Ellipse 32"
            cx={1.953}
            cy={1.953}
            r={1.953}
            transform="translate(10.254 18.555)"
            fill={color}
          />
          <Circle
            data-name="Ellipse 33"
            cx={1.953}
            cy={1.953}
            r={1.953}
            transform="translate(10.254 27.051)"
            fill={color}
          />
          <Circle
            data-name="Ellipse 34"
            cx={1.953}
            cy={1.953}
            r={1.953}
            transform="translate(10.254 35.547)"
            fill={color}
          />
          <Circle
            data-name="Ellipse 35"
            cx={1.953}
            cy={1.953}
            r={1.953}
            transform="translate(18.75 35.547)"
            fill={color}
          />
          <Circle
            data-name="Ellipse 36"
            cx={1.953}
            cy={1.953}
            r={1.953}
            transform="translate(18.75 18.555)"
            fill={color}
          />
        </G>
      </G>
    </G>
  </Svg>
)