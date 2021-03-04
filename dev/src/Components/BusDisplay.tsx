//Quadrado com o numero do ônibus e a bandeira
import styles from '../Styles/BusDisplay.module.css';
import bus_icon from '../Assets/bus_icon.svg';
export function BusDisplay(){

    return(
        <div className={styles.busDisplayConatiner}>
            <img src={bus_icon} className={styles.busIcon} />
            <strong>518</strong>
        </div>
    );
} 