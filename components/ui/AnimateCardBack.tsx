"use client";
import { cn } from "@/utils/cn";
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";

export function CardDemoBack() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle>Back-end</CardTitle>
      <CardDescription>
        Conjunto de Linguagens para Análise de Dados, Automações de Tarefas e
        Teste de API junto com Armazenamento de Dados
      </CardDescription>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <NodeIcon className="h-4 w-4 " />
        </Container>
        <Container className="h-12 w-12 circle-2">
          <ClaudeLogo className="h-6 w-6 dark:text-white" />
        </Container>
        <Container className="circle-3">
          <OpenAILogo className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <MetaIconOutline className="h-6 w-6 " />
        </Container>
        <Container className="h-8 w-8 circle-5">
          <GeminiLogo className="h-12 w-13 " />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] group",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 50%, rgba(93,108,111,1) 100%)",
      }}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 50%, rgba(93,108,111,1) 100%)",
      }}
    >
      {children}
    </div>
  );
};

export const NodeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="256px"
      height="292px"
      viewBox="0 0 256 292"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>Node.js</title>
      <defs>
        <linearGradient
          x1="68.1884411%"
          y1="17.4868311%"
          x2="27.8226935%"
          y2="89.7551419%"
          id="linearGradient-1"
        >
          <stop stop-color="#41873F" offset="0%"></stop>
          <stop stop-color="#418B3D" offset="32.88%"></stop>
          <stop stop-color="#419637" offset="63.52%"></stop>
          <stop stop-color="#3FA92D" offset="93.19%"></stop>
          <stop stop-color="#3FAE2A" offset="100%"></stop>
        </linearGradient>
        <path
          d="M134.922587,1.83244962 C130.579003,-0.610816541 125.420997,-0.610816541 121.077412,1.83244962 L6.78685046,67.8006362 C2.44326617,70.2439024 0,74.8589606 0,79.745493 L0,211.95334 C0,216.839873 2.71474019,221.454931 6.78685046,223.898197 L121.077412,289.866385 C125.420997,292.309649 130.579003,292.309649 134.922587,289.866385 L249.213148,223.898197 C253.556733,221.454931 256,216.839873 256,211.95334 L256,79.745493 C256,74.8589606 253.28526,70.2439024 249.213148,67.8006362 L134.922587,1.83244962 L134.922587,1.83244962 Z"
          id="path-2"
        ></path>
        <linearGradient
          x1="43.2765472%"
          y1="55.168777%"
          x2="159.245277%"
          y2="-18.3061379%"
          id="linearGradient-4"
        >
          <stop stop-color="#41873F" offset="13.76%"></stop>
          <stop stop-color="#54A044" offset="40.32%"></stop>
          <stop stop-color="#66B848" offset="71.36%"></stop>
          <stop stop-color="#6CC04A" offset="90.81%"></stop>
        </linearGradient>
        <path
          d="M134.922587,1.83244962 C130.579003,-0.610816541 125.420997,-0.610816541 121.077412,1.83244962 L6.78685046,67.8006362 C2.44326617,70.2439024 0,74.8589606 0,79.745493 L0,211.95334 C0,216.839873 2.71474019,221.454931 6.78685046,223.898197 L121.077412,289.866385 C125.420997,292.309649 130.579003,292.309649 134.922587,289.866385 L249.213148,223.898197 C253.556733,221.454931 256,216.839873 256,211.95334 L256,79.745493 C256,74.8589606 253.28526,70.2439024 249.213148,67.8006362 L134.922587,1.83244962 L134.922587,1.83244962 Z"
          id="path-5"
        ></path>
        <linearGradient
          x1="-4.38880435%"
          y1="49.9972065%"
          x2="101.499239%"
          y2="49.9972065%"
          id="linearGradient-7"
        >
          <stop stop-color="#6CC04A" offset="9.191646%"></stop>
          <stop stop-color="#66B848" offset="28.64%"></stop>
          <stop stop-color="#54A044" offset="59.68%"></stop>
          <stop stop-color="#41873F" offset="86.24%"></stop>
        </linearGradient>
      </defs>
      <g>
        <path
          d="M134.922587,1.83244962 C130.579003,-0.610816541 125.420997,-0.610816541 121.077412,1.83244962 L6.78685046,67.8006362 C2.44326617,70.2439024 1.66898426e-14,74.8589606 1.66898426e-14,79.745493 L1.66898426e-14,211.95334 C1.66898426e-14,216.839873 2.71474019,221.454931 6.78685046,223.898197 L121.077412,289.866385 C125.420997,292.309649 130.579003,292.309649 134.922587,289.866385 L249.213148,223.898197 C253.556733,221.454931 256,216.839873 256,211.95334 L256,79.745493 C256,74.8589606 253.28526,70.2439024 249.213148,67.8006362 L134.922587,1.83244962 L134.922587,1.83244962 Z"
          fill="url(#linearGradient-1)"
        ></path>
        <g>
          <mask id="mask-3" fill="white"></mask>
          <g></g>
          <path
            d="M249.484623,67.8006362 L134.651113,1.83244962 C133.565217,1.28950159 132.207847,0.746553555 131.121951,0.475079538 L2.44326617,220.911983 C3.52916224,222.269353 4.88653235,223.355249 6.24390243,224.169671 L121.077412,290.137857 C124.335101,292.038177 128.135737,292.581124 131.664899,291.495227 L252.470838,70.5153764 C251.656416,69.4294803 250.570518,68.6150581 249.484623,67.8006362 L249.484623,67.8006362 Z"
            fill="url(#linearGradient-4)"
            mask="url(#mask-3)"
          ></path>
        </g>
        <g>
          <mask id="mask-6" fill="white"></mask>
          <g></g>
          <path
            d="M249.756098,223.898195 C253.013785,221.997878 255.457053,218.740191 256.542947,215.211029 L130.579003,0.203604793 C127.321315,-0.339343381 123.792153,-0.0678694115 120.805938,1.83244885 L6.78685046,67.5291613 L129.764581,291.766702 C131.393425,291.495227 133.293743,290.952279 134.922587,290.137857 L249.756098,223.898195 L249.756098,223.898195 Z"
            fill="url(#linearGradient-7)"
            mask="url(#mask-6)"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export const ClaudeLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      width="45"
      height="36"
      viewBox="0 0 45 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M44.268 14.7909C43.1645 14.0381 40.2658 13.7166 38.1586 14.2924C38.0455 12.1648 36.9622 10.3716 34.9822 8.80687L34.2495 8.30837L33.761 9.05646C32.8008 10.5337 32.3959 12.5026 32.5391 14.2924C32.6522 15.3952 33.0303 16.6344 33.761 17.5337C31.0182 19.1465 28.4894 18.7803 17.2919 18.7803H0.00382783C-0.0463583 21.3433 0.359814 26.2728 3.45262 30.2859C3.79455 30.7294 4.1686 31.1581 4.57545 31.5711C7.0901 34.1233 10.8895 35.9952 16.5706 36C25.2381 36.0081 32.6636 31.2591 37.181 19.778C38.6672 19.8024 42.5911 20.0479 44.5115 16.2871C44.5584 16.224 45 15.2901 45 15.2901L44.268 14.7916V14.7909ZM11.2863 12.4476H6.42497V17.375H11.2863V12.4476ZM17.5663 12.4476H12.7049V17.375H17.5663V12.4476ZM23.8469 12.4476H18.9855V17.375H23.8469V12.4476ZM30.1275 12.4476H25.2662V17.375H30.1275V12.4476ZM5.00571 12.4476H0.144349V17.375H5.00571V12.4476ZM11.2863 6.22415H6.42497V11.1515H11.2863V6.22415ZM17.5663 6.22415H12.7049V11.1515H17.5663V6.22415ZM23.8469 6.22415H18.9855V11.1515H23.8469V6.22415ZM23.8469 0H18.9855V4.92737H23.8469V0Z"
        fill="#1D63ED"
      />
    </svg>
  );
};

export const OpenAILogo = ({ className }: { className?: string }) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454c.771 0 1.395.624 1.395 1.395s-.624 1.395-1.395 1.395a1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
        fill="url(#a)"
      />
      <path
        d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395c0-.77.624-1.394 1.395-1.394s1.395.623 1.395 1.394c0 .772-.624 1.395-1.395 1.395z"
        fill="url(#b)"
      />
      <defs>
        <linearGradient
          id="a"
          x1="19.075"
          y1="18.782"
          x2="34.898"
          y2="34.658"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#387EB8" />
          <stop offset="1" stop-color="#366994" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="28.809"
          y1="28.882"
          x2="45.803"
          y2="45.163"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFE052" />
          <stop offset="1" stop-color="#FFC331" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const GeminiLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2500"
      height="2500"
      viewBox="-0.716259478639536 -11.240984926608125 7.74238908096865 26.657682895244093"
      preserveAspectRatio="xMidYMid"
      className={className}
    >
      <defs>
        <linearGradient
          x1="2.983"
          y1=".53"
          x2="2.983"
          y2="4.744"
          id="a"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#97d9f6" offset="0%" />
          <stop stop-color="#0f80cc" offset="92.024%" />
          <stop stop-color="#0f80cc" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M4.96.29H.847c-.276 0-.5.226-.5.5v4.536c0 .276.226.5.5.5h2.71c-.03-1.348.43-3.964 1.404-5.54z"
        fill="#0f80cc"
      />
      <path
        d="M4.81.437H.847a.356.356 0 0 0-.355.355v4.205c.898-.345 2.245-.642 3.177-.628A28.93 28.93 0 0 1 4.811.437z"
        fill="url(#a)"
      />
      <path
        d="M5.92.142c-.282-.25-.623-.15-.96.148l-.15.146c-.576.61-1.1 1.742-1.276 2.607a2.38 2.38 0 0 1 .148.426l.022.1.022.102s-.005-.02-.026-.08l-.014-.04a.461.461 0 0 0-.009-.022 4.717 4.717 0 0 0-.187-.352 8.789 8.789 0 0 0-.103.321c.132.242.212.656.212.656s-.007-.027-.04-.12c-.03-.083-.176-.34-.21-.4-.06.22-.083.368-.062.404.04.07.08.2.115.324a7.52 7.52 0 0 1 .132.666l.005.062a6.11 6.11 0 0 0 .015.75c.026.313.075.582.137.726l.042-.023c-.09-.284-.128-.655-.112-1.084.025-.655.175-1.445.454-2.268C4.548 1.938 5.2.94 5.798.464c-.545.492-1.282 2.084-1.502 2.673-.247.66-.422 1.28-.528 1.873.182-.556.77-.796.77-.796s.29-.356.626-.865l-.645.172-.208.092s.53-.323.987-.47c.627-.987 1.31-2.39.622-3.002"
        fill="#003b57"
      />
    </svg>
  );
};

export const MetaIconOutline = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 2500.1 2500"
      xmlns="http://www.w3.org/2000/svg"
      width="2500"
      height="2500"
      className={className}
    >
      <path
        d="M2215.6 2500H284.4C127.3 2500 0 2372.7 0 2215.6V284.4C0 127.3 127.3 0 284.4 0h1931.3c157 0 284.4 127.3 284.4 284.4v1931.3c-.1 157-127.4 284.3-284.5 284.3z"
        fill="#fff"
      />
      <path
        d="M1259.6 190.4l47.6 89.4c10.7 16.5 22.3 31.1 35.9 44.7 40 39.5 77.3 81.7 111.6 126.3 80.6 105.8 135 223.4 173.8 350.6 23.3 77.6 35.9 157.4 36.9 237.9 3.9 240.9-78.7 447.7-245.1 619.6-27 27.2-56.3 52.3-87.5 74.7-16.5 0-24.3-12.6-31.1-24.3-12.4-21.6-20.6-45.3-24.3-69.9-5.9-29.2-9.7-58.3-7.8-88.3v-13.6c-1.3-3.1-15.8-1340.2-10-1347.1z"
        fill="#599636"
      />
      <path
        d="M1259.6 187.5c-1.9-3.9-3.9-1-5.9 1 1 19.5-5.9 36.9-16.5 53.5-11.7 16.5-27.2 29.2-42.8 42.8-86.3 74.7-154.3 165.1-208.7 266.1C913.2 686.8 875.9 832.5 865.4 986c-4.8 55.3 17.5 250.5 35 306.8 47.6 149.6 133 274.9 243.8 383.6 27.2 26.2 56.3 50.5 86.3 73.9 8.8 0 9.7-7.8 11.7-13.6 3.9-12.4 6.8-25 8.8-37.8l19.5-145.6z"
        fill="#6cac48"
      />
      <path
        d="M1307.2 1792.6c1.9-22.3 12.6-40.7 24.3-59.2-11.7-4.8-20.4-14.5-27.2-25.2-5.9-10.2-10.7-20.9-14.5-32.1-13.6-40.7-16.5-83.6-20.4-125.2v-25.2c-4.8 3.9-5.9 36.9-5.9 41.8-2.8 44.1-8.7 87.8-17.5 131.1-2.9 17.5-4.8 35-15.6 50.5 0 1.9 0 3.9 1 6.8 17.5 51.5 22.3 103.9 25.2 157.4v19.5c0 23.3-1 18.4 18.4 26.2 7.8 2.9 16.5 3.9 24.3 9.7 5.9 0 6.8-4.8 6.8-8.8l-2.9-32.1v-89.4c-.9-15.6 2-31.1 4-45.8z"
        fill="#c2bfbf"
      />
      <path
        d="M479.33 2226.45v43.194c0 1.736 0 3.472.307 5.106.51 5.106 3.676 8.271 8.27 9.7 4.29 1.124 8.68 1.94 13.071 2.553 2.553.307 3.37 1.43 3.676 4.187.306 9.7-.51 10.824-9.905 10.211-21.852-1.123-43.806-1.43-65.658 0h-2.042c-6.842.307-7.352-.306-7.352-7.148 0-1.123.306-2.552.306-3.676 0-2.042 1.43-3.165 3.37-3.165 4.595-.51 8.781-1.736 13.07-2.553 5.922-1.43 9.394-5.105 9.905-11.13.817-6.535.817-13.377.817-19.912l.306-76.176c.204-4.493-2.246-8.68-6.229-10.824-5.105-2.859-10.62-5.105-16.236-6.841-1.736-.51-3.37-.817-4.799-1.736-4.187-2.042-4.289-5.719-.306-7.965 1.43-.817 3.165-1.43 4.799-1.736a260.072 260.072 0 0 0 50.546-12.764c3.37-1.123 4.288-.817 4.595 2.553.306 2.042 0 4.595-.307 6.535-.51 3.676-.51 7.352-.51 10.824 0 1.43.306 2.86 1.736 3.676s2.859 0 4.186-.817c5.923-4.595 11.948-8.782 18.483-12.458 9.394-5.105 19.299-9.7 30.123-11.13 13.07-1.736 24.405 1.736 34.412 10.211 4.084 3.676 7.76 7.863 10.824 12.458 2.859 4.187 3.165 4.289 6.841 1.43 10.824-7.965 22.159-15.01 34.412-20.219 12.764-5.412 25.834-6.228 38.905-1.736 13.377 4.8 22.465 14.194 27.877 26.958 4.595 10.211 6.535 20.831 6.535 31.86v76.175c0 5.106 2.042 8.271 7.148 10.824 5.412 2.042 11.334 3.165 17.052 4.289 3.676.817 3.676.817 3.676 4.595-.51 9.394-1.43 9.905-10.517 9.394a588.168 588.168 0 0 0-68.415 0c-4.595.306-4.595.306-4.8-4.289v-1.43c-.306-7.658-.306-7.658 7.148-9.394l7.352-2.042c5.106-1.225 8.782-5.82 8.782-11.13l.817-21.342-.51-55.65c-.205-5.004-1.226-9.906-3.166-14.5-7.148-17.36-22.771-23.589-37.782-21.853-11.334 1.123-21.341 5.719-30.736 12.254-2.042 1.43-3.37 3.165-3.165 5.922 2.553 18.176.817 36.352 1.123 54.528v39.518c0 7.148 2.86 10.517 9.7 12.253l13.071 2.86c2.042.306 3.166 1.123 3.166 3.37v2.041c-.307 7.965-.817 8.271-8.782 8.271-22.771-1.123-45.44-.816-67.905 0-7.658.307-8.27-.51-7.965-8.27.307-4.596.817-4.8 5.106-5.719l9.394-1.736c8.272-1.736 11.335-4.8 11.948-13.683l.816-19.095-.51-57.08c-.51-7.149-2.042-13.888-5.923-20.423-5.718-10.518-14.602-15.93-26.753-16.44-12.254-.817-22.975 3.676-33.289 9.394-7.148 4.187-10.21 9.088-9.7 17.36v41.457zm535.375 1.737v40.028c0 2.859.205 5.718.511 8.475.204 3.88 3.063 7.148 6.842 7.965 4.901 1.43 9.904 2.246 15.01 2.553 2.86.306 3.37 1.43 3.676 3.676v2.042c-.306 9.905-1.43 11.13-11.13 10.518-21.648-1.43-43.194-1.124-64.74 0l-8.27.306c-1.736 0-2.043-.817-2.553-2.042a29.428 29.428 0 0 1 0-11.947c.306-1.736 1.43-2.043 3.165-2.553 4.187-.51 7.659-1.43 11.641-2.043 7.148-1.735 9.7-4.595 9.905-11.947l.817-23.894v-69.947c0-5.106-2.042-8.271-6.535-10.518-5.106-2.859-10.518-4.799-16.236-6.841-1.736-.51-3.37-1.123-4.8-2.042-3.676-2.553-4.186-6.23-.51-9.088 1.634-1.328 3.574-2.145 5.718-2.247 18.176-2.859 35.842-6.841 52.894-13.683 2.043-.817 2.86-.306 3.676 1.43s1.124 3.676.817 5.718l-.817 13.377c0 1.736-.816 4.186.511 4.799 1.736 1.123 2.86-1.43 4.289-2.042a123.8 123.8 0 0 1 27.57-17.564c8.782-4.186 17.87-6.841 28.081-6.228 19.095 1.123 32.676 10.823 41.458 27.57 4.595 8.782 6.535 18.482 7.352 28.387l.817 20.831.306 62.8c.306 4.799 2.042 7.964 6.842 9.7a98.384 98.384 0 0 0 15.316 3.676c4.595.51 4.8 1.43 5.106 5.718v1.43c-.51 9.7-1.123 9.905-10.824 9.394a600.917 600.917 0 0 0-63.616 0c-2.86.306-5.718 0-8.271.306-1.736 0-2.86-.306-3.166-2.042-.51-3.676-1.123-7.352-.306-11.334.306-1.736 1.123-2.553 3.166-2.86l13.07-2.042c4.595-1.123 7.148-4.186 7.658-8.27l.511-7.965-.306-59.43c0-6.841-.307-13.683-1.736-20.422-3.37-14.602-14.5-24.916-29.51-26.448-13.071-1.43-24.916 2.043-35.842 9.088-5.412 3.37-7.659 8.272-7.659 14.194v42.887c0-.817 0-.817.307-.817z"
        fill="#47474a"
      />
      <path
        d="M1846.82 2147.824c-3.166-20.729-10.824-39.21-24.201-55.447-11.641-14.295-26.652-25.426-43.806-32.37-17.87-7.351-36.965-9.7-56.264-10.21-7.965-.307-116.51 1.429-124.475 0-2.043-.307-3.37.306-4.595 2.042-1.43 2.042-2.86 4.288-3.676 6.535-3.37 7.658-3.37 7.148 4.799 8.27 6.841 1.124 13.377 1.737 19.912 3.677 5.922 2.042 10.211 5.412 11.64 11.947.511 3.166 1.124 103.134 1.124 149.697l-1.123 33.289c-.307 2.552-.511 5.105-1.43 7.352-1.123 3.37-3.166 6.229-6.535 7.658-3.778 1.736-7.76 2.86-11.947 3.166-7.659.816-8.782 1.123-11.335 9.7l-.817 3.166c-.51 3.676-.306 4.288 3.37 4.288l84.957.817 33.29-.51 22.974-2.86c26.141-4.799 49.423-15.623 69.335-32.982 11.334-10.007 20.626-22.158 27.264-35.841 7.964-15.93 11.334-33.289 12.253-50.852 1.532-10.11 1.021-20.32-.715-30.532zm-41.152 40.335c-1.123 18.176-4.8 35.841-14.193 51.669-11.948 20.728-29 35.228-52.588 40.334-10.212 2.042-20.423 3.165-31.145 1.736-7.658-.817-15.01-1.736-22.158-4.289-12.764-4.595-17.36-12.458-17.563-24.915l-.307-171.345c0-10.211 4.595-12.458 11.947-12.764 11.13-.817 22.465-.51 33.493.51 11.845 1.124 23.384 3.983 34.412 8.272 8.17 3.37 15.725 8.067 22.465 13.887 15.317 13.07 25.528 29.51 31.144 48.81 4.595 15.623 5.412 31.552 4.595 47.482zm277.337 27.876c0-1.736 0-3.165-.306-4.799-2.553-15.623-10.824-27.57-23.588-36.658-8.271-5.923-17.563-9.905-27.264-12.764-1.736-.51-3.165-1.124-4.8-1.43.307-1.43 1.124-1.736 2.043-2.042 5.718-2.86 11.13-5.923 15.93-10.211 8.781-7.352 14.602-16.44 17.563-27.57 1.736-5.923 1.736-11.948 1.123-18.177-.919-14.806-8.577-28.387-20.729-36.964-13.07-9.701-28.387-13.683-44.316-13.888-30.736-.51-61.676 0-92.31 0-8.782 0-17.563.51-26.753-.817-1.736-.306-4.187-.816-5.412 1.124-2.043 3.676-4.596 7.352-5.412 11.64-.307 2.043.306 3.166 2.552 3.37l19.606 2.86c7.658 1.123 13.07 5.411 13.683 12.253.51 4.697.817 9.496.817 14.193l-.51 53.099-.307 105.074c0 6.228-.817 12.253-2.042 18.482-.613 4.084-3.472 7.352-7.352 8.475-5.719 1.736-11.13 3.37-17.053 3.37-3.268-.306-6.331 1.736-7.352 4.8-1.123 2.552-2.042 5.411-2.553 7.964-.51 3.37.306 4.595 3.676 4.187 2.553-.307 96.292 2.042 113.958.306 10.517-1.123 20.83-2.553 31.246-5.718 17.87-5.719 34.412-13.888 47.482-27.877 10.824-11.335 17.053-25.018 17.564-40.947.816-3.676.816-7.352.816-11.335zm-137.851-116.51l.817-22.77c0-4.29 1.735-6.23 5.922-7.149 6.842-1.43 13.683-.817 20.423-.51 6.841.51 13.376 1.43 20.218 3.37 12.458 3.675 22.158 10.823 27.877 22.77 2.552 5.412 3.982 11.335 3.982 17.36.306 7.964-.306 15.623-3.37 23.281-4.8 10.518-12.458 17.36-23.588 19.3-11.13 2.042-42.58 1.123-47.482 1.123-4.289 0-4.595-.51-4.595-4.8v-26.753c-.715-8.271-.715-16.644-.306-25.018zm92.31 152.862c-4.8 12.764-13.684 21.648-26.141 26.448-6.842 2.552-13.684 4.186-20.831 3.676-8.782-.307-17.564 0-26.448-1.736-11.947-2.553-17.359-13.888-18.176-22.159-1.43-14.5-.51-29.306-.816-40.028v-37.475c0-4.595.51-5.923 5.412-5.923l26.753.307 18.176 2.042c12.764 2.86 24.405 7.658 33.493 17.563 7.352 7.965 11.334 17.564 12.253 28.081.817 9.905.307 19.606-3.37 29z"
        fill="#c2bfbf"
      />
      <path
        d="M1315.529 2166.817l7.352 1.123c7.964.307 17.359-2.552 20.218-13.683a29.258 29.258 0 0 0 0-16.235c-1.736 0-2.553 1.43-3.37 2.042-4.288 3.37-9.088 5.412-14.193 5.922-10.212 1.124-20.423.51-30.43-3.165l-13.887-4.8c-9.7-3.165-19.912-4.492-30.123-3.982-14.5 1.123-28.081 5.923-40.947 12.764-13.683 7.352-23.282 18.483-27.877 33.493-2.553 8.782-2.86 17.87-1.736 26.958 2.86 20.729 13.683 35.228 32.982 42.887 1.124.306 2.043.817 3.166 1.123 2.553 1.43 2.859 2.86.51 4.8l-7.147 4.799-17.053 10.517c-4.289 2.553-4.8 4.595-3.37 9.088 1.736 5.31 4.8 10.007 9.088 13.683 3.88 3.37 8.271 6.025 13.07 7.965 3.166 1.43 3.166 2.042.307 4.595l-16.236 11.641c-5.412 4.187-10.824 8.271-15.317 13.683a27.922 27.922 0 0 0-6.842 25.528c2.145 9.905 7.25 18.789 14.807 25.528a59.6 59.6 0 0 0 26.14 14.194c15.93 4.595 32.37 4.8 48.606 1.736 23.282-4.289 43.704-14.602 59.634-32.063 11.13-11.641 17.563-25.324 18.176-41.56 1.327-19.504-11.743-36.965-30.736-41.458l-15.317-2.859-46.87-4.187c-5.105-.306-10.21-1.123-14.5-3.676-5.411-3.37-6.841-9.905-3.37-14.193 2.554-3.166 5.72-5.106 9.701-5.412l9.088-.817a82.347 82.347 0 0 0 47.993-21.852 50.514 50.514 0 0 0 14.5-24.2c3.37-12.254 3.37-24.916.51-37.374-.816-3.165-.51-3.37 3.37-2.86zm-69.641 141.528c1.736.306 3.37 0 5.106 0 11.947.51 24.2 1.43 35.841 4.595 3.778 1.123 7.556 2.553 11.13 4.289 11.335 6.229 15.623 17.053 14.194 28.693-1.736 12.764-8.782 21.852-19.912 27.877-7.352 4.187-15.623 5.923-24.2 6.842-3.166.306-5.923 0-9.089 0-9.905.306-19.605-.817-29-4.8-6.535-2.553-11.947-6.229-16.746-11.334-9.905-9.905-14.602-28.081.306-42.887 9.088-8.476 19.3-14.398 32.37-13.275zm32.472-88.634c-5.923 15.011-19.095 19.606-32.064 17.564-11.947-1.736-20.728-8.271-26.447-19.095-7.352-14.5-9.394-29.51-5.105-45.134 3.165-11.64 10.21-20.422 22.77-22.465 15.93-2.859 31.145 2.86 39.212 18.789 4.187 7.658 5.922 17.053 5.922 30.43-.306 5.411-1.43 12.764-4.288 19.911zm-358.006-19.4c-2.553-15.318-8.271-29.307-18.79-40.948-15.622-17.36-35.534-24.915-57.999-25.018-19.605-.306-38.088 5.412-54.528 15.624-16.236 9.7-28.08 25.221-33.289 43.5-4.799 16.44-4.595 33.288-.816 50.035 9.904 44.93 44.623 64.228 86.08 61.37 12.254-.818 23.895-4.8 34.923-10.212 16.44-7.658 28.387-19.912 36.658-36.046 6.535-13.376 9.394-27.57 9.088-43.806zm-40.335 63.105c-4.186 13.07-15.623 22.464-29.306 23.894-12.458 1.736-24.2-1.43-34.616-8.782-7.556-5.616-13.683-12.866-17.87-21.341-11.64-23.895-13.683-48.81-7.658-74.44 1.94-7.965 6.024-15.113 11.947-20.73 10.517-9.7 22.771-11.946 36.352-9.087 13.07 2.86 22.975 9.905 31.144 20.729s11.947 23.281 14.194 36.352c1.123 6.535 1.123 13.376 1.43 17.563 0 13.683-1.124 24.916-5.413 35.842zm661.178-60.757c-2.042-16.44-8.271-31.553-19.912-44.01-15.317-16.747-35.229-23.895-57.387-24.201-19.095-.307-36.658 5.105-52.894 14.5-18.176 10.823-30.736 26.14-35.535 46.87-5.719 22.668-3.37 46.562 6.841 67.598 9.394 19.911 25.324 32.676 46.36 38.394 23.28 6.229 45.44 3.37 67.087-7.148 18.789-9.088 32.063-23.282 39.824-42.58 4.595-11.335 6.229-23.589 6.535-37.783.204-2.552-.408-7.147-.919-11.64zm-39.211 57.08c-4.595 15.317-14.194 25.324-30.43 27.57-11.947 1.737-23.281-1.122-33.493-7.964-8.781-5.922-15.01-13.887-19.605-23.282-5.106-9.904-7.965-20.422-9.088-31.246-1.736-13.377-1.736-26.447 1.43-39.824.612-2.655 1.43-5.208 2.552-7.658 7.965-19.912 25.528-29 46.36-24.405 13.887 3.165 24.404 10.824 32.369 22.465 7.658 11.334 11.334 23.894 13.07 37.373.817 5.412 1.124 11.13.817 15.93 0 11.13-.817 21.34-4.186 31.246z"
        fill="#47474a"
      />
    </svg>
  );
};
