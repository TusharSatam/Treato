import styles from '../SalonMain/SalonMain.module.css'
import map from "../../../assets/images/SalonDetail/map.svg"
import gmap from "../../../assets/images/SalonDetail/gmap.png"
import mapBlue from "../../../assets/images/SalonDetail/mapBlue.svg"

export default function SalonMap() {

    return (
        <>
            <div className={styles.salon_MapA}>
                <img src={map} alt="" />
                <div>
                    3rd Main Road, Ejipura, Bengaluru - 110058
                </div>
            </div>
            <div className={styles.salon_MapB}>
                <img src={gmap} alt="" />
                <button className={styles.salon_MapBA}>
                    View on map
                    <img src={mapBlue} alt="" />
                </button>
            </div>
        </>
    )
}