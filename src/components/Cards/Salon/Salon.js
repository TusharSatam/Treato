import React, {useState, useEffect } from "react";
import styles from "./Salon.module.css";
import {
  chevronright,
  ellipse,
  mapPin,
  star_line,
} from "../../../assets/images/icons";
import { starBlack } from "../../../assets/images/SalonsPageImages";
import { displayDistance } from "../../../utils/utils";

const Salon = ({ salonData, place }) => {

  return (
    <div
      className={`${styles.card} ${
        place === "homePage" ? styles.card_Home : ""
      }`}
    >
      <img
        src={salonData.salon_image ? salonData.salon_image.public_url : ""}
        alt="cardImage"
        className={`${styles.cardImage} ${
          place === "homePage" ? styles.cardImage_Home : ""
        }`}
      />
      <div
        className={`${styles.salonDetails} ${
          place === "homePage" ? styles.salonDetails_Home : ""
        }`}
      >
        <a
          href="/salons"
          className={`${styles.Name} ${
            place === "homePage" ? styles.Name_Home : ""
          }`}
        >
          {salonData.salon_name ? salonData.salon_name : "Salon Name"}
        </a>
        <h4 className={styles.ratings}>
          {salonData.rating} <img src={starBlack} alt="star" /> (
          {salonData.total_rating} ratings)
        </h4>
        <h4 className={styles.location}>
          {salonData?.locationText} <img src={ellipse} />{" "}
          {displayDistance(salonData?.distances)}
        </h4>
      </div>
      {place != "homePage" ? (
        <>
          <div className={styles.servicesWrapper}>
            {salonData?.services?.map((service, index) => (
              <div className={styles.service} key={index}>
                <div className={styles.details}>
                  <h4 className={styles.serviceName}>{service.service_name?service.service_name:"Service Name(N/A)"}</h4>
                  <small className={styles.timing}>
                    {service?.service_timing ? service?.service_timing : "45 mins"}
                  </small>
                </div>
                <div className={styles.pricing}>
                  ₹{service?.price ? service.price : 400}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.buttons}>
            <button className={styles.viewDetails}>
              View details
              <img src={chevronright} alt="chevronRight" />
            </button>
            <button className={styles.viewMap}>
              View on map
              <img src={mapPin} alt="mapPin" />
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Salon;
