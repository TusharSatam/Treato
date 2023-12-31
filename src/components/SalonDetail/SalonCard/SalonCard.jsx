import styles from './SalonCard.module.css'
import star from '../../../assets/images/SalonDetail/star_line.svg'
import ellipse from "../../../assets/images/SalonDetail/Ellipse.svg"
import discount from "../../../assets/images/SalonDetail/discountIco.svg"
import clock from "../../../assets/images/SalonDetail/clock.svg"
import SalonMap from '../SalonMap/SalonMap'
import BookNow from '../BookNow/BookNow'

export default function SalonCard() {

    return (
        <div className={styles.salon_card}>
            <div className={styles.salon_cardA}>
                She Hair & Beauty
            </div>
            <div className={styles.salon_cardB}>
                <div>4.8</div>
                <img src={star} alt="" />
                <div>(based on 1,361 ratings)</div>
                <img src={ellipse} alt="" />
                <div>See reviews</div>
            </div>
            <div className={styles.salon_cardC}>
                <BookNow/>
            </div>
            <div className={styles.salon_cardD}>
                <img src={discount} alt="" />
                <div>
                    Use code <span>BEAUTY100</span> during checkout and get 15% off up to ₹99. <span>T&C apply</span>
                </div>
            </div>
            <div className={styles.salon_cardD}>
                <img src={clock} alt="" />
                <div>
                    <div className={styles.salon_cardDA}>
                        <div>Closed</div>
                        <img src={ellipse} alt="" />
                        <div>Opens 9:00 AM Monday</div>
                    </div>
                    <div className={styles.salon_cardDB}>
                        See timings
                    </div>
                </div>
            </div>
            <SalonMap/>
        </div>
    )
}