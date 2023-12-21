//@ts-nocheck
import React from "react";
import logo from '../../assets/img/logo.svg'
import { navbarItems } from "@/constants";
import axios from "axios";
import Link from "next/link";
  

type Props = {
  setshowFeedback:(showFeedback:boolean) => void;
}

const Header:React.FC<Props> = ({setshowFeedback}) => {

  const [hoveSocial , setHoverSocial] = React.useState<any>(false)
  const [socialsData, setSocialsData] = React.useState([])
  React.useEffect(() => {
    const getSocials = async () => {
      const socials = await axios.get(`http://localhost:1337/api/socials?populate=*`)
      setSocialsData(socials.data.data)
    }

    getSocials()
  } , [])

  
  return (
    <header className="header">
      <div className="container">
        <nav className="header_nav">
            <div className="header_nav-logo">
              <Link href={'/'}>
                <img src={logo.src} alt="ProStone" />
              </Link>
            </div>

          <ul className="header_nav-menu">
          {
            navbarItems?.map(item => (
            <li key={item?.id}>
            <a href={`#${item?.path}`}> {item?.title} </a>
          </li>
            ))
          }

            <li className="header_nav-menu_call" onClick={() => setshowFeedback(true)}>
              <a href='#'className="feedback-open"> Заказать звонок </a>
            </li>
          </ul>

          <ul className="header_nav-social">
          {
            socialsData.map((item) => (
          <li key={item?.id} onMouseOver={() => setHoverSocial(true)} onMouseLeave={() => setHoverSocial(false)}>
            <a href="#" target="_blank">
                 {/* <img  src={`http://localhost:1337${item?.attributes?.white_icon?.data?.attributes?.url}`}  alt="social" /> */}
                 <img  src={`http://localhost:1337${item?.attributes?.icon?.data?.attributes?.url}`}  alt="social" />
            </a>
          </li>
            ))
          }

            <li className="header-mobile">
              <a href="#" target="_blank" className="feedback-open">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.3749 9.62764C6.3749 9.62764 10.1043 10.426 8.91432 7.29781C7.72507 4.16935 7.30358 0.667408 3.88255 3.08867C-2.78076 7.80478 15.2176 25.7581 19.9157 19.1213C22.3367 15.7008 18.8348 15.2791 15.7063 14.0896C12.5781 12.9001 13.3765 16.6295 13.3765 16.6295L6.3749 9.62764Z"
                    fill="black" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


/* 
<header className="header">
    <div className="container">
      <nav className="header_nav">
        <div className="header_nav-logo">
          <a href="/">
            <img src={logo.src} alt="ProStone" />
          </a>
        </div>

        <ul className="header_nav-menu">
          {
            navbarItems?.map(item => (
            <li key={item?.id}>
            <a href={`#${item?.path}`}> {item?.title} </a>
          </li>
            ))
          }
          <li class="header-menu__call" onClick={() => setshowFeedback(true)}>
					<a href="#" class="feedback-open" >
						Заказать звонок
					</a>
				</li>
        </ul>

        <ul className="header_nav-social">
          {
            socialsData.map((item) => (
          <li key={item?.id}>
            <a href="#" target="_blank">
              <img  src={`http://localhost:1337${item?.attributes?.icon?.data?.attributes?.url}`} fil alt="" />
            </a>
          </li>
            ))
          }

          <li className="header-mobile" onClick={() => setshowFeedback(true)}>
            <a href="tel:+" target="_blank" className="feedback-open">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.3749 9.62764C6.3749 9.62764 10.1043 10.426 8.91432 7.29781C7.72507 4.16935 7.30358 0.667408 3.88255 3.08867C-2.78076 7.80478 15.2176 25.7581 19.9157 19.1213C22.3367 15.7008 18.8348 15.2791 15.7063 14.0896C12.5781 12.9001 13.3765 16.6295 13.3765 16.6295L6.3749 9.62764Z"
                  fill="black" />
              </svg>
            </a>
          </li>
        </ul>

        
      </nav>
    </div>
  </header>
*/