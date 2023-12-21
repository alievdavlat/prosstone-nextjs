import React from 'react'

type Props = {
  setShowTelPopUp:(showTelPopUp:boolean) => void;
}

const TelBtn:React.FC<Props> = ({setShowTelPopUp}) => {
  return (
   <div className="tel-btn" onClick={() => setShowTelPopUp(true)}>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="30" fill="#FFC700" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M23.1795 27.6363C23.1795 27.6363 28.0743 28.6842 26.5125 24.5784C24.9516 20.4723 24.3984 15.876 19.9083 19.0539C11.1627 25.2438 34.7856 48.8076 40.9518 40.0968C44.1294 35.6073 39.5331 35.0538 35.427 33.4926C31.3212 31.9314 32.3691 36.8262 32.3691 36.8262L23.1795 27.6363Z"
          fill="black" />
      </svg>
    </div>
  )
}

export default TelBtn