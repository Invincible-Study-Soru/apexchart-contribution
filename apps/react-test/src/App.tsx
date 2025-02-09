import "./App.css";
import { ReactNode, useState } from "react";
import Chart1 from "./chart/chart1";

function App() {
  const [demo, setDemo] = useState<string | undefined>(undefined);
  const demoList: { [key: string]: ReactNode } = {
    "#1": <Chart1 />,
  };

  return (
    <div className="page">
      <div className="buttonGroup">
        {Object.keys(demoList).map((issueNum) => (
          <button
            key={issueNum}
            onClick={() => setDemo(issueNum)}
            className={`button ${demo === issueNum ? "active" : ""}`}
          >
            Issue {issueNum}
          </button>
        ))}
      </div>
      {demo ? (
        <div className="chartWrapper">{demoList[demo]}</div>
      ) : (
        "이슈 번호를 선택해주세요"
      )}
    </div>
  );
}

export default App;
