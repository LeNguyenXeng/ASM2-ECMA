/* eslint-disable react/prop-types */
import banner from "../assets/rectangle_1.png";

export default function Banner({ title, currentPage = "" }) {
  return (
    <div className="banner relative">
      <img
        src={banner}
        alt
        style={{ width: "100%", filter: "blur(3px)", height: 316 }}
      />
      <div
        className="text absolute"
        style={{
          margin: 0,
          top: "50%",
          left: " 50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <p className="text-4xl font-semibold text-gray-900 dark:text-white text-center">
          {title}
        </p>
        <div className="down flex justify-center" style={{ marginTop: "10px" }}>
          <p className="text-2l font-semibold text-gray-900 dark:text-white">
            Home
          </p>
          {currentPage && (
            <svg
              style={{ marginTop: 3 }}
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" />
            </svg>
          )}
          <p className="text-2l text-gray-900 dark:text-white">{currentPage}</p>
        </div>
      </div>
    </div>
  );
}
