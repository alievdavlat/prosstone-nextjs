//@ts-nocheck
import React from 'react'
import {
  YMaps,
  Map,
  Placemark,
  SearchControl,
  TypeSelector,
  Panorama
} from "@pbe/react-yandex-maps";
import logo from '../../assets/img/logo.svg'
import phoneBrown from '../../assets/img/call.svg'
import mastercard from '../../assets/img/mastercard.png'
import visa from '../../assets/img/visa.png'
import uzcard from '../../assets/img/uzcard.png'
import { arrowTop } from '@/assets';
import location from '../../assets/img/marker.svg'
import mail  from '../../assets/img/mail.svg'
import loctionIcon from '../../assets/img/location.svg'
const API_KEY = "";

const center = [47.2313, 39.7233];


const images = [...Array(5)].map((n, i) => {
  const letter = String.fromCharCode(i + 97);
  return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
});





const Footer = () => {

  const ref = React.useRef();
  const ref2 = React.useRef();
  const ymaps = React.useRef(null);

  const [newCoords, setNewCoords] = React.useState([
    47.06587193746529,
    39.435380396518724
  ]);

  const [address, setAddress] = React.useState("");
  const [value, setValue] = React.useState("");
  const [options, setOptions] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      try {
        if (value && ymaps.current) {
          const res = await fetch(
            `https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${value}`
          );
          const data = await res.json();
          const collection = data.response.GeoObjectCollection.featureMember.map(
            (item) => item.GeoObject
          );
          setOptions(() => collection);

          ymaps.current.geocode(value).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            const newAddress = [
              firstGeoObject.getLocalities().length
                ? firstGeoObject.getLocalities()
                : firstGeoObject.getAdministrativeAreas(),
              firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
              firstGeoObject.getPremiseNumber()
            ]
              .filter(Boolean)
              .join(", ");

            console.log("Количество объектов", res.geoObjects.getLength());
            console.log("Первый объект", newAddress);
          });
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [value]);

  const scrollTop = () => {
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }

  return (
    <footer
    className="footer" id="footer">
      <div className="footer-map">
        <div id="map">
           <YMaps
            query={{
              load: "package.full",
              apikey: API_KEY
            }}
          >
      
      <Map
        instanceRef={ref2}
        state={{
          center: [41.315618, 69.260684],
          zoom:11,
          controls: ["zoomControl"]
        }}
        onLoad={(e) => {
          ymaps.current = e;
          const points = [
            [48.024402067130715, 39.85466330972504],
            [46.780699672601415, 39.807971415195674]
          ];
          const bounds = e.util.bounds.fromPoints(points);
          const pos = e.util.bounds.getCenterAndZoom(bounds, [700, 700]);
          ref2.current.setZoom(pos.zoom);
          //ref2.current.setCenter(pos.center);
          ref2.current.setBounds(bounds, { checkZoomRange: true });

          e.geocode(newCoords).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            const newAddress = [
              firstGeoObject.getLocalities().length
                ? firstGeoObject.getLocalities()
                : firstGeoObject.getAdministrativeAreas(),
              firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
              firstGeoObject.getPremiseNumber()
            ]
              .filter(Boolean)
              .join(", ");

            setAddress(() => newAddress);
            setValue(() => newAddress);
          });
        }}
        width="100%"
        height="100%"
        modules={["control.ZoomControl"]}
        onClick={(event) => {
          const coords = event.get("coords");
          setNewCoords(() => coords);

          ymaps.current.geocode(coords).then((res) => {
            const firstGeoObject = res.geoObjects.get(0);
            const newAddress = [
              firstGeoObject.getLocalities().length
                ? firstGeoObject.getLocalities()
                : firstGeoObject.getAdministrativeAreas(),
              firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
              firstGeoObject.getPremiseNumber()
            ]
              .filter(Boolean)
              .join(", ");
            ref.current.getMap().hint.open(coords, newAddress);
            setAddress(() => newAddress);
            setValue(() => newAddress);
          });
        }}
      >
        {/* <ZoomControl options={{ float: "right" }} /> */}
        <SearchControl options={{ float: "left" }} />
        <TypeSelector options={{ float: "left" }} />
        <Placemark
          instanceRef={ref}
          onDragEnd={(event) => {
            const coords = ref.current.geometry._coordinates;
            setNewCoords(() => coords);
            ymaps.current.geocode(coords).then((res) => {
              const firstGeoObject = res.geoObjects.get(0);
              const newAddress = [
                firstGeoObject.getLocalities().length
                  ? firstGeoObject.getLocalities()
                  : firstGeoObject.getAdministrativeAreas(),
                firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
                firstGeoObject.getPremiseNumber()
              ]
                .filter(Boolean)
                .join(", ");
              ref.current.getMap().hint.open(coords, newAddress);
              setAddress(() => newAddress);
              setValue(() => newAddress);
            });
          }}
          geometry={newCoords}
          options={{
            iconImageSize: [30, 30],
            draggable: true,
            preset: "islands#greenIcon",
            hideIconOnBalloonOpen: false,
            openEmptyHint: true
          }}
          properties={{
            iconContent: "",
            hintContent: address
          }}
        />
        {images.map((n, i) => {
          return (
            <Placemark
              onClick={() => {
                alert("Вы нажали метку " + (i + 1));
              }}
              key={n}
              defaultGeometry={center.map((c) => c + (Math.random() - 0.5))}
              options={{
                iconLayout:'default#image',
                iconImageSize: [60, 60],
                iconImageHref:loctionIcon,
              }}
            />
          );
        })}
      </Map>
          </YMaps>
        </div>
        <div className="footer-contact">
          <div className="footer-contact__title">
            НАШИ КОНТАКТЫ
          </div>
          <ul className="footer-contact__list">
            <li>
              <a href="tel:+998903470100">
                <img src={phoneBrown.src} alt="ico"/>
                <span>+998 (90) 347 01 00</span>
              </a>
            </li>
            <li>
              <a href="tel:+998908061310">
                <img src={phoneBrown.src} alt="ico"/>
                <span>+998 (90) 806 13 10</span>
              </a>
            </li>
            <li>
              <div>
                <img src={location.src} alt="ico"/>
                <span>Адрес: Бизнес-центр "Авалон", 1-этаж, ул. Ойбека 38а, г.Ташкент</span>
              </div>
            </li>
            <li>
              <a href="mailto:prostones.uz@gmail.com">
                <img src={mail.src} alt="ico"/>
                <span>prostones.uz@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bot">
        <div className="container">
          <div className="footer__logo">
          <a href="/">
            <img src={logo.src} alt="ProStone" />
          </a>

          </div>
          <div className="footer-copy">
            Copyright 2022 Все права защищены
          </div>
          <ul className="footer-icons">
            <li>
              <img src={uzcard.src} alt="ico"/>
            </li>
            <li>
              <img src={visa.src} alt="ico"/>
            </li>
            <li>
              <img src={mastercard.src} alt="ico"/>
            </li>
            <li className="footer-top" onClick={scrollTop}>
              <img src={arrowTop.src} alt="ico"/>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer