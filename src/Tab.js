import React, { useState } from 'react'
import FirstTab from './FirstTab'
import SecondTab from './SecondTab'

function Tab() {
    const [activeTab, setActiveTab]=useState("Table")
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("Table");
      };
      const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("LineChart");
      };
  return (
    <div className="Tabs">
    <ul className="nav">
      <li
        className={activeTab === "Table" ? "active" : ""}
        onClick={handleTab1}
      >
        Table
      </li>
      <li
        className={activeTab === "LineChart" ? "active" : ""}
        onClick={handleTab2}
      >
        LineChart
      </li>
    </ul>

    <div className="outlet">
      {activeTab === "Table" ? <FirstTab /> : <SecondTab />}
    </div>
  </div>
  )
}

export default Tab