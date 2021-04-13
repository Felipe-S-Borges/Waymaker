/**=========================================================================================== 
* Componente que exibe o numero do ônibus, ícone e a bandeira de trajeto
==============================================================================================
*/
import React from 'react';
import styles from '../Styles/BusNumberDisplay.module.css';
import bus_icon from '../Assets/bus_icon.svg';

interface BusProps{

    flag:string;
    number:string;
    isSingle:boolean;

} 
export function BusNumberDisplay(props: BusProps){

    const flag = {
        
        borderBottomColor: props.flag
    }
    return(
        <div className={styles.busDisplayConatiner}  style={flag}>
            {props.isSingle == true?(
                <div><img src={bus_icon} className={styles.busIcon} /></div>
            ):(<div> </div>)}
            
            <div><strong>{props.number}</strong></div>
        </div>
    );
} 
