import { daily } from "@/data";
import { PageTitle } from "../components/pageTitle/pageTitle";

export default function Home() {
  // const dailyMap =
  return (
    <div style={{ fontSize: "48px" }}>
      <div>
        {daily.map((data, i) => (
          <div key={i}>
            <PageTitle
              params={{
                content: data.index,
                size: "",
                isUnderline: false,
              }}
            />
            <PageTitle
              params={{
                content: data.date,
                size: "",
                isUnderline: false,
              }}
            />
            {/* <div>{data.index}</div> */}
            {/* <div>{data.date}</div> */}
          </div>
        ))}
      </div>
      <div>沖縄、はいたい。</div>
    </div>
  );
}
