import styles from '../../../pages/BookFlow/BookFlow.module.css'
import profilepic1 from "../../../assets/images/SalonDetail/profilepic1.png"
import ellipse from "../../../assets/images/SalonDetail/Ellipse.svg"
import RadioInput from '../../Input/RadioInput/RadioInput'
import SalonStar from '../../SalonDetail/SalonStar/SalonStar'

export default function WorkerComponent() {

    return (
        <div className={styles.worker_compA}>
            <div className={styles.worker_compAA}>
                <img src={profilepic1} alt="" />
                <div className={styles.worker_compAC}>
                    <div className={styles.worker_compACBA}>
                        <div className={styles.worker_compACA}>Nayanika</div>
                        <div className={styles.worker_prevBooked}>Previously booked</div>
                    </div>
                    <div className={styles.worker_compACB}>
                        <div className={styles.worker_compStar}>
                            <div>4.8</div>
                            <SalonStar fill="#6D747A" />
                            <div>(61)</div>
                        </div>
                        <img src={ellipse} alt="" />
                        <div>Hair Styling Specialist</div>
                        <img src={ellipse} alt="" />
                        <div>251 bookings</div>
                    </div>
                </div>
            </div>
            <div className={styles.worker_compAB}>
                <RadioInput Type={'radio'} NAME={'preference'} />
            </div>
        </div>
    )
}