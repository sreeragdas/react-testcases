import React from "react";
import "./style.css";
import Counter from './component/counter.jsx'
export default function App() {
  return (
    <div>
   
    <Counter props={0} />
    </div>
  );
}
