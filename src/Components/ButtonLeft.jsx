const ButtonLeft = (props) => {
  return (

    <div className='feature-icon' onClick={() => props.previous()}>
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
        <path d="M17 2L9.5 12 17 22h-2.5L7 12l7.5-10z"></path>
      </svg>
    </div>
  )
}
export default ButtonLeft