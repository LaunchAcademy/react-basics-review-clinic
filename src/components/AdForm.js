import React from "react"

const AdForm = (props) => {
  return(
    <form>
      <input type="text" id="email" placeholder={props.placeholderInfo} />
      <input type="submit" id="submit-email" value="CLAIM YOUR PRIZE" />
    </form>
  )
}

export default AdForm 