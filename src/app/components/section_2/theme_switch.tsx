import React from "react";

interface ThemeSwitchProps {
  setIsDarkMode: (value: boolean | ((prevState: boolean) => boolean)) => void;
  isDarkMode: boolean;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  setIsDarkMode,
  isDarkMode,
}) => {
  //
  //
  const toggleTheme = () => {
    console.log("print togglinhg");
    setIsDarkMode((prev: boolean) => !prev);
  };
  //
  return (
    <>
      <button
        onClick={toggleTheme}
        type="button"
        className="cursor-pointer"
        title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        <div
          className={`flex absolute top-0 right-0 m-4 items-center h-[25px] w-[50px] shadow-sm hover:scale-105 transition cursor-pointer shadow-gray-700 dark:shadow-white rounded-3xl bg-gradient-to-r dark:from-red-500 from-blue-800
        dark:to-orange-500 to-indigo-900`}
        >
          <div
            className={`flex ml-1 mr-1 rounded-4xl bg-transparent  align-middle justify-center items-center h-[20px] w-[20px] transform transition-all duration-1000 [cubic-bezier(0.68,-0.6,0.32,1.6)]
            ${
              isDarkMode
                ? "translate-x-6 rotate-180 ease-in"
                : "translate-x-0 rotate-0 ease-in-out"
            } `}
          >
            {/**SUN */}
            {isDarkMode ? (
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                className="m-0.5"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 1V4.88889M18.5 32.1189V36.0078M4.88889 18.5H1M36 18.5H32.1111M32.1111 4.88889L28.2222 8.77778M4.88889 4.88889L8.77778 8.77778M8.77778 28.2222L4.88889 32.1111M32.1111 32.1111L28.2222 28.2222M26.2778 18.5C26.2778 20.5628 25.4583 22.5411 23.9997 23.9997C22.5411 25.4583 20.5628 26.2778 18.5 26.2778C16.4372 26.2778 14.4589 25.4583 13.0003 23.9997C11.5417 22.5411 10.7222 20.5628 10.7222 18.5C10.7222 16.4372 11.5417 14.4589 13.0003 13.0003C14.4589 11.5417 16.4372 10.7222 18.5 10.7222C20.5628 10.7222 22.5411 11.5417 23.9997 13.0003C25.4583 14.4589 26.2778 16.4372 26.2778 18.5Z"
                  stroke="#ffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                className="m-0.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.767 1.552C8.03125 1.73759 6.38344 2.41056 5.01402 3.49312C3.64459 4.57569 2.60945 6.02366 2.02822 7.6697C1.44699 9.31574 1.3434 11.0927 1.72943 12.7951C2.11545 14.4975 2.97533 16.056 4.20969 17.2903C5.44405 18.5247 7.00249 19.3845 8.70492 19.7706C10.4073 20.1566 12.1843 20.053 13.8303 19.4718C15.4763 18.8906 16.9243 17.8554 18.0069 16.486C19.0894 15.1166 19.7624 13.4688 19.948 11.733C19.3144 12.5381 18.5173 13.1997 17.6094 13.6743C16.7015 14.1489 15.7033 14.4257 14.6806 14.4864C13.6579 14.5472 12.6339 14.3904 11.6762 14.0266C10.7185 13.6628 9.84873 13.1001 9.1243 12.3757C8.39987 11.6513 7.8372 10.7815 7.47338 9.82381C7.10955 8.86609 6.95284 7.84213 7.01357 6.81944C7.0743 5.79674 7.35108 4.79852 7.82569 3.89059C8.30029 2.98265 8.96193 2.18561 9.767 1.552ZM0 10.75C0 4.813 4.813 0 10.75 0C11.467 0 11.825 0.571 11.887 1.026C11.946 1.464 11.784 2.021 11.281 2.325C10.5339 2.77586 9.8993 3.39082 9.42514 4.12331C8.95098 4.85579 8.64974 5.68658 8.54425 6.55274C8.43875 7.4189 8.53177 8.29771 8.81625 9.1226C9.10073 9.94748 9.56921 10.6968 10.1862 11.3138C10.8032 11.9308 11.5525 12.3993 12.3774 12.6838C13.2023 12.9682 14.0811 13.0612 14.9473 12.9558C15.8134 12.8503 16.6442 12.549 17.3767 12.0749C18.1092 11.6007 18.7241 10.9661 19.175 10.219C19.479 9.716 20.036 9.554 20.474 9.613C20.929 9.675 21.5 10.033 21.5 10.75C21.5 16.687 16.687 21.5 10.75 21.5C4.813 21.5 0 16.687 0 10.75Z"
                  fill="#ffff"
                />
              </svg>
            )}
          </div>
        </div>
      </button>
    </>
  );
};

export default ThemeSwitch;
