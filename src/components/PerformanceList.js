import React from "react"

const PerformanceList = (props) => {
  

  return(
    <ul>
      <li>
        { props.performances[0] }
      </li>
      <li>
        { props.performances[1] }
      </li>
      <li>
        { props.performances[2] }
      </li>
    </ul>
  )
}

export default PerformanceList

