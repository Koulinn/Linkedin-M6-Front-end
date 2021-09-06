const Likes = () => {
  return (
    <div className="like-section py-2">
      <span>
        <svg
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          id="like-consumption-small"
          data-supported-dps="16x16"
        >
          <g fill="none" fillRule="evenodd">
            <rect width="16" height="16" rx="8" />
            <circle fill="#1485BD" cx="8" cy="8" r="7" />
            <path
              d="M11.93 7.25h-.55c-.05 0-.15-.19-.4-.46-.37-.4-.78-.91-1.07-1.19a7.18 7.18 0 01-1.73-2.24c-.24-.51-.26-.74-.75-.74a.77.77 0 00-.67.81c0 .14.07.63.1.8a7.62 7.62 0 001 2.2h.54-4.28a.87.87 0 00-.88.94.91.91 0 00.93.85h.16a.78.78 0 00-.76.8.81.81 0 00.74.8.8.8 0 00.33 1.42.79.79 0 00-.09.55.86.86 0 00.85.63h2.29c.3 0 .599-.038.89-.11l1.42-.42h1.9c1.02-.04 1.29-4.64.03-4.64z"
              fill="#E6F7FF"
            />
            <path
              d="M7.43 6.43H4.11a.88.88 0 00-.88 1 .91.91 0 00.93.84h.16a.78.78 0 00-.76.8.83.83 0 00.74.81.81.81 0 00-.31.63.82.82 0 00.65.8.81.81 0 00-.09.56.86.86 0 00.85.62h2.29c.3 0 .599-.038.89-.11l1.42-.47h1.9c1 0 1.27-4.64 0-4.64a5 5 0 01-.55 0c-.05 0-.15-.19-.4-.46h0c-.37-.4-.78-.91-1.07-1.19a7.18 7.18 0 01-1.7-2.25 2 2 0 00-.32-.52.83.83 0 00-1.16.09 1.39 1.39 0 00-.25.38 1.49 1.49 0 00-.09.3 2.38 2.38 0 00.07.84c.064.288.155.569.27.84.188.353.41.688.66 1a.18.18 0 01.07.08"
              stroke="#004B7C"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </span>
      <span>
        <svg
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          id="empathy-consumption-small"
          data-supported-dps="16x16"
          className="ml-1"
        >
          <g fill="none" fillRule="evenodd">
            <rect width="16" height="16" rx="8" />
            <circle fill="#DF704D" cx="8" cy="8" r="7" />
            <path
              d="M7.71 5A2.62 2.62 0 004 5a2.65 2.65 0 000 3.75l4 4 4-4A2.65 2.65 0 0012 5a2.59 2.59 0 00-1.85-.77h0A2.57 2.57 0 008.3 5l-.3.3-.29-.3z"
              stroke="#77280C"
              fill="#FFF3F0"
            />
            <path
              d="M11.43 5.18a2 2 0 01.53.63c.9 1.67-.6 2.72-1.54 3.67-.6.61-1.22 1.22-1.85 1.8"
              opacity=".6"
            />
            <path
              d="M5.79 4.81a2.16 2.16 0 00-.79.11 1.77 1.77 0 00-1 .82A2.54 2.54 0 003.77 7a.28.28 0 000 .09"
              opacity=".4"
            />
            <path
              d="M7.71 5A2.6 2.6 0 004 5a2.65 2.65 0 000 3.7l4 4 4-4A2.65 2.65 0 0012 5a2.6 2.6 0 00-1.85-.78h0A2.58 2.58 0 008.3 5l-.3.25L7.71 5z"
              stroke="#77280C"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </span>
      <span className="ml-2 about-feed links-feed">
        358 •
      </span>
      <span className="about-feed links-feed"> 24 comments</span>
    </div>
  )
}

export default Likes