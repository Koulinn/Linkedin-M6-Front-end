const ButtonRight = (props) => {
  return (

    <div className="feature-icon" onClick={() => props.next()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="mercado-match"
        data-supported-dps="24x24"
        fill="currentColor"
        width="24"
        height="24"
        focusable="false"
      >
        <path d="M9.5 2L17 12 9.5 22H7l7.5-10L7 2z"></path>
      </svg>
    </div>
  )
}
export default ButtonRight