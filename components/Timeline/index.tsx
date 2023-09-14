import { useState } from "react";
import { ChildrenStringProps } from "lib/types";
import { COLOR_SPOTIFY_GREEN } from "lib/colorPalette";

import { DividerBorder, StepLi, MoreButton } from "components/Timeline/styles";

const Divider = () => <DividerBorder />;

const Year = ({ children }: ChildrenStringProps) => <h4>{children}</h4>;

export const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  const Step = ({ title, children }: ChildrenStringProps) => (
    <StepLi>
      <div>
        <svg viewBox="0 0 24 24">
          <g
            fill="none"
            stroke={COLOR_SPOTIFY_GREEN}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <h5>{title}</h5>
      </div>
      <p>{children}</p>
    </StepLi>
  );

  const FullTimeline = () => (
    <>
    <Divider />
      <Year>February, 2017 - April, 2017</Year>
      <ul>
        <Step title="Research Fello @BSMRAU">
          <li>• Developed an Android application to educate farmers about crop-related diseases, aiding agricultural advancement.</li>
          <li>•	Conducted surveys and analyzed user data to measure the effectiveness and impact of the educational application.</li>
          <li>•	Engineered the deployment of the E-Village data center, enhancing data management and accessibility for the university.</li>
          <li>•	<strong> Tech Stack:</strong> Ionic framework, Cordova, WordPress</li>
        </Step>
      </ul>

      <Divider />
      <Year>January, 2014 - July, 2016</Year>
      <ul>
        <Step title="Front-end Developer @Kodeeo">
          <li>•	Development of Pixel Perfect Web User Interface with HTML, CSS and JavaScript.</li>
          <li>•	Web performance analysis with Chrome DevTools and NodeJS.</li>
          <li>•	WordPress theme development, management, and customization.</li>
          <li>•	<strong>Tech Stack:</strong> Android Application Development with Angular 1.3, Ionic Framework and Cordova.</li>
        </Step>
      </ul>
      <Divider />
    </>
  );

  return (
    <>
      <h3>Work Experience</h3>
      <Year>January, 2022 - Current</Year>
      <ul>
        <Step title="Senior UI Engineer @ Dorik Inc.">
          <li>• Demonstrated effective team leadership at DORIK, fostering a collaborative environment that drove improvements in platform development and developer experience.</li>
          <li>• Managed intricate data structures, improving platform performance and enabling seamless data manipulation for an enhanced user experience.</li>
          <li>• Implemented user-centric design principles, ensuring an intuitive and visually appealing platform, placing a strong emphasis on user experience.</li>
          <li>• Worked to improve the developer experience within the team, contributing to a more efficient and collaborative environment.</li>
          {/* <li>• <strong>Tech Stack:</strong> ReactJS, Redux, React-Query, ViteJS, TurboRepo, Zustand</li> */}
        </Step>
      </ul>
      <Divider />
      <Year>January, 2020 - December, 2021</Year>
      <ul>
        <Step title="Senior Front-end Developer @Makdos Bilisim">
         <li>• Led omni-channel customer service app development, streamlining interactions for a seamless user experience.</li>
         <li>•  Collaborated on client projects, focusing on web performance, enhancing quality, speed, and user satisfaction.</li>
         <li>•	Acted as a mentor for junior developers, guiding them to excel in their roles and contributing to increased productivity. Facilitated the implementation of cutting-edge solutions for intricate challenges.</li>
         <li>•	<strong>Tech Stack:</strong> Typescript, ReactJS, Gatsby, NextJS, WebSocket, PWA, Redux, Zustand</li>
        </Step>
      </ul>
      <Divider />
      <Year>October, 2018 - December, 2019</Year>
      <ul>
        <Step title="Front-end Engineer @Kodeeo">
          <li>•	I was leading their Front-end team to develop a rich multi-vendor and multi-auth Single-page Point of Sale system with Vue.JS.</li>
          <li>•	Worked with several client projects to improve their Web performance and Lighthouse score.</li>
          <li>•	<strong>Technology:</strong> VueJS, VueX, PWA, React, NextJS</li>
        </Step>
      </ul>



      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <MoreButton type="button" onClick={() => showFullTimeline(true)}>
          See More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </MoreButton>
      )}
    </>
  );
};
