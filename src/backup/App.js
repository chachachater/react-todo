import logo from "./logo.svg";
import "./App.css";

function Title({ className, title, size }) {
  if (size === "XL") {
    return <h1 className={className}>{title}</h1>;
  }
  return <h2 className={className}>{title}</h2>;
}

function Description({ className, children }) {
  return <div className={className}>{children}</div>;
}

function App() {
  return (
    <div>
      <Title className="title block" title="music start" size="XL" /> // 不用用{" "}
      {} 刮起來
      <Description>hello 你好嗎 衷心感謝</Description>
    </div>
  );
}

export default App;
