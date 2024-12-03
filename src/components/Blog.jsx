/* eslint-disable react/prop-types */
export default function Blog({ blog, index }) {
  console.log("🚀 ~ Blog ~ index:", index);

  return (
    <div className="card" style={{ display: "flex", justifyContent: "center" }}>
      <img
        style={{ width: 605, height: 250, flexShrink: 0 }}
        src={blog.img}
        alt
      />
      <div className="title, relative" style={{ width: "50%" }}>
        <p
          style={{
            paddingTop: 75,
            paddingLeft: 55,
            color: "#000000",
            fontSize: 24,
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "120%",
          }}
        >
          {blog.title}
        </p>
        <p style={{ marginTop: 11, marginLeft: 55, fontSize: 14 }}>
          {blog.des}
        </p>
        <p
          style={{
            position: "absolute",
            fontWeight: 600,
            top: "70%",
            right: "11%",
          }}
          className="hover:text-green-500 duration-200"
        >
          {index == 0 ? "" : "ABOUT"}
        </p>

        <svg
          style={{ marginLeft: "90%", marginTop: "10%" }}
          className="h-6 w-6 text-gray-900 hover:text-green-500 duration-200"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1={5} y1={12} x2={19} y2={12} />
          <line x1={13} y1={18} x2={19} y2={12} />
          <line x1={13} y1={6} x2={19} y2={12} />
        </svg>
        <hr
          style={{ width: "86%", height: 1, marginTop: 18 }}
          className="mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700"
        />
      </div>
    </div>
  );
}
