import {useEffect} from "react";
import "./location.scss";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

import {MapContainer} from 'react-leaflet/MapContainer'
import {TileLayer} from 'react-leaflet/TileLayer'
import {useMap} from 'react-leaflet/hooks'
import {Marker, Popup} from "react-leaflet";

// import L from "leaflet";

const Location = () => {
    const {t} = useTranslation();
    const transition = {type: "spring", duration: 2};

    useEffect(() => {
        // const myMap = L.map("mapid").setView([50.7940939, 41.1352718], 3);
        //
        // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        //     attribution:
        //         'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        //     maxZoom: 18,
        // }).addTo(myMap);

        // L.marker([41.3240686, 69.2532404])
        //     .addTo(myMap)
        //     .bindPopup("Tashkent")
        //     .on("click", (e) => {
        //         e.target.openPopup();
        //         myMap.flyTo(e.target.getLatLng(), 18, {duration: 1});
        //         myMap.on("popupopen", () => {
        //         });
        //     });
        //
        // L.marker([59.9668311, 30.3128765])
        //     .addTo(myMap)
        //     .bindPopup('Школа сомелье "WineJet"')
        //     .on("click", (e) => {
        //         // e.target.openPopup();
        //         myMap.flyTo(e.target.getLatLng(), 18, {duration: 1});
        //         // myMap.on("popupopen", () => {
        //
        //         // });
        //     });
    }, [])

    return (
        <div className="map">
            <div className="container" data-aos="zoom-in-up" data-aos-duration="1500">
                <h1 data-aos="fade-up" data-aos-delay="300">
                    <p>Карта</p>
                    <motion.span
                        initial={{width: "100px", left: "8rem"}}
                        whileInView={{width: "100px", left: "-0.3rem"}}
                        transition={{transition, duration: 1}}
                    ></motion.span>
                </h1>
                {/*<iframe*/}
                {/*	src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.2092005609525!2d69.2704868180565!3d41.29892324595613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e3!4m0!4m0!5e0!3m2!1sru!2s!4v1679145475185!5m2!1sru!2s"*/}
                {/*	width="100%"*/}
                {/*	style={{ border: "0" }}*/}
                {/*	allowfullscreen=""*/}
                {/*	loading="lazy"*/}
                {/*></iframe>*/}

                <div style={{position: 'relative', overflow: 'hidden'}}>
                    <a href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                       style={{color: '#eee', fontSize: '12px', position: 'absolute', top: 0}}>Toshkent</a>
                    <a href="https://yandex.uz/maps/10335/tashkent/house/YkAYdABlQEcPQFprfX9zdHxmYQ==/?ll=69.276332%2C41.325071&utm_medium=mapframe&utm_source=maps&z=19"
                       style={{color: '#eee', fontSize: '12px', position: 'absolute', top: 14}}>Qiyot dahasi, 78
                        Toshkentning xaritasida, eng yaqin metro Abdulla Qodiriy — Yandex&nbsp;Xaritalar</a>
                    <iframe
                        src="https://yandex.uz/map-widget/v1/?ll=69.276332%2C41.325071&mode=whatshere&whatshere%5Bpoint%5D=69.275928%2C41.325055&whatshere%5Bzoom%5D=17&z=19"
                        width="100%" height="100%" frameBorder="1" allowFullScreen
                        style={{position: 'relative'}}></iframe>
                </div>
            </div>
        </div>
    );
};

export default Location;
