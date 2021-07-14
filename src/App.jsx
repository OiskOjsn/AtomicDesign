import { RecoilRoot } from "recoil";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}
