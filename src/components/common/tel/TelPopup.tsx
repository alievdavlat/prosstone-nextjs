import React from 'react'
import closeIcon from '../../../assets/img/close.svg'

type Props = {
  setShowTelPopUp:(showTelPopUp:boolean) => void;
	setshowFeedback:(showFeedback:boolean) => void;
	showTelPopUp:boolean;

}



const TelPopup:React.FC<Props> = ({setShowTelPopUp, setshowFeedback, showTelPopUp}) => {

	const handleClick = (e:any) => {
		if (e.target.id === 'buttons') {
			setShowTelPopUp(false)
		}
	}

  return (
<div id='buttons' className={`buttons ${showTelPopUp ? 'fadeIn' :'fadeOut'}`} onClick={handleClick}>
		<div className="buttons-content">
			<a href="#" className="blue" target="_blank">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M22.4394 4.62225L19.2706 19.566C19.0314 20.6205 18.4081 20.883 17.5224 20.3865L12.6939 16.8285L10.3644 19.0695C10.1064 19.3275 9.89114 19.5428 9.39389 19.5428L9.74114 14.6258L18.6894 6.54C19.0786 6.1935 18.6046 6.00075 18.0849 6.348L7.02239 13.314L2.25989 11.823C1.22414 11.4998 1.20539 10.7873 2.47589 10.29L21.1036 3.11325C21.9661 2.79 22.7206 3.30525 22.4394 4.623V4.62225Z" fill="white"/>
				</svg>
				<span>Написать через Телеграм</span>
			</a>
			<a href="#" className="green feedback-open" onClick={() => setshowFeedback(true)}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 2C6.486 2 2 6.486 2 12V16.143C2 17.167 2.897 18 4 18H5C5.26522 18 5.51957 17.8946 5.70711 17.7071C5.89464 17.5196 6 17.2652 6 17V11.857C6 11.5918 5.89464 11.3374 5.70711 11.1499C5.51957 10.9624 5.26522 10.857 5 10.857H4.092C4.648 6.987 7.978 4 12 4C16.022 4 19.352 6.987 19.908 10.857H19C18.7348 10.857 18.4804 10.9624 18.2929 11.1499C18.1054 11.3374 18 11.5918 18 11.857V18C18 19.103 17.103 20 16 20H14V19H10V22H16C18.206 22 20 20.206 20 18C21.103 18 22 17.167 22 16.143V12C22 6.486 17.514 2 12 2Z" fill="white"/>
				</svg>					
				<span>Бесплатная консультация</span>
			</a>
			<a href="#" className="purple feedback-open" onClick={() => setshowFeedback(true)}>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M19.23 15.2601L16.69 14.9701C16.3914 14.935 16.0886 14.968 15.8046 15.0668C15.5206 15.1655 15.2626 15.3273 15.05 15.5401L13.21 17.3801C10.3712 15.9363 8.06382 13.6289 6.62004 10.7901L8.47004 8.94006C8.90004 8.51006 9.11004 7.91006 9.04004 7.30006L8.75004 4.78006C8.69335 4.29223 8.45923 3.84229 8.09228 3.5159C7.72532 3.18952 7.25115 3.00947 6.76004 3.01006H5.03004C3.90004 3.01006 2.96004 3.95006 3.03004 5.08006C3.56004 13.6201 10.39 20.4401 18.92 20.9701C20.05 21.0401 20.99 20.1001 20.99 18.9701V17.2401C21 16.2301 20.24 15.3801 19.23 15.2601ZM13 11.0001H17C17.55 11.0001 18 10.5501 18 10.0001C18 9.45006 17.55 9.00006 17 9.00006H15.41L19.72 4.69006C19.8126 4.59748 19.8861 4.48757 19.9362 4.3666C19.9863 4.24564 20.0121 4.11599 20.0121 3.98506C20.0121 3.85413 19.9863 3.72448 19.9362 3.60351C19.8861 3.48255 19.8126 3.37264 19.72 3.28006C19.6275 3.18748 19.5175 3.11404 19.3966 3.06393C19.2756 3.01383 19.146 2.98804 19.015 2.98804C18.8841 2.98804 18.7545 3.01383 18.6335 3.06393C18.5125 3.11404 18.4026 3.18748 18.31 3.28006L14 7.59006V6.00006C14 5.45006 13.55 5.00006 13 5.00006C12.45 5.00006 12 5.45006 12 6.00006V10.0001C12 10.5501 12.45 11.0001 13 11.0001Z" fill="white"/>
				</svg>					
				<span>Заказать звонок</span>
			</a>
			<a href="tel:+998903470100" className="orange">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M6.54358 10.109C6.54358 10.109 10.4594 10.9473 9.20998 7.66265C7.96126 4.37777 7.5187 0.70073 3.92662 3.24305C-3.06985 8.19497 15.8285 27.046 20.7614 20.0774C23.3035 16.4858 19.6265 16.043 16.3416 14.794C13.0569 13.545 13.8953 17.4609 13.8953 17.4609L6.54358 10.109Z" fill="white"/>
				</svg>					
				<span>+998 (90) 347-01-00</span>
			</a>
			<div className="buttons-close" onClick={() => setShowTelPopUp(false)}>
				<img src={closeIcon.src} alt="ico" />
			</div>
		</div>
	</div>  )
}

export default TelPopup