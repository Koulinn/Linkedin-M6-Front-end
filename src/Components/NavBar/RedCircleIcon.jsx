import React from "react"

function RedCircleIcon(props) {
  return (
    <div className="red-circle-icon-OuterWrapper">
      <div className="red-circle-Icon d-flex justify-content-center align-items-center">
        {props.text ? (
          <span>{props.text}</span>
        ) : (
          <div className="inner-white-circle d-flex justify-content-center align-items-center"></div>
        )}
        {/* <span>{props.text}</span> */}
        {/* <div className="inner-white-circle d-flex justify-content-center align-items-center"></div> */}
      </div>
    </div>
  )
}

export default RedCircleIcon
