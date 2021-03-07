//Quadrado com o numero do ônibus e a bandeira
import React from 'react';
import styles from '../Styles/BusDisplay.module.css';
import bus_icon from '../Assets/bus_icon.svg';

interface BusProps{

    flag:string;
    number:string;
    isFirst:boolean;

} 
export function BusDisplay(props: BusProps){

    const flag = {
        
        borderBottomColor: props.flag
    }
    return(
        <div className={styles.busDisplayConatiner}  style={flag}>
            {props.isFirst == true?(
                <img src={bus_icon} className={styles.busIcon} />
            ):(<div> </div>)}
            
            <strong>{props.number}</strong>
        </div>
    );
} 
