import React from "react"

import AdForm from "./AdForm.js"
import PerformanceList from "./PerformanceList.js"
import performanceData from "./../constants/performanceData.js"

const Popup = () => {
  return(
    <div>
      <h1> You have won tickets to T-Swizzle </h1>
      <h4> Yo, give me your email. Yum yum, I love emails. Tickets after </h4>
      <AdForm placeholderInfo="test@test.com"/>
      <PerformanceList performances={performanceData} />

    </div>
  )
}
// PerformanceList({someData: performanceData})

export default Popup



