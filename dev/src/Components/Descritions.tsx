//teste
import styles from '../Styles/Descritions.module.css';
import arCond from '../Assets/ar_icon.svg';
import wifi from '../Assets/wifi_icon.svg';
import acess from '../Assets/acess_icon.svg';
import stand from '../Assets/stand_icon.svg';
import sit from '../Assets/sit_icon.svg';
import React from 'react';
import { BusDisplay } from './BusDisplay';

interface DirectionsProps{
    icon:string;
}
export function Descritions(props: DirectionsProps){

    return(

        <div className={styles.descritionContainer}>
                    <div className={styles.icon}>
                        {props.icon.length > 4?(
                            <img src={props.icon} />
                            
                        ):(
                            <div className={styles.plataform} > {props.icon}</div>
                        )}
                         
                         
                         </div>
                    <BusDisplay flag="green" number="551" isFirst={true} />
                    <div> Terminal de Carapina </div>
                    <div>agora</div>
                    <div><img src={arCond} /></div>
                    <div><img src={wifi}/> </div>
                    <div><img src={acess}/></div>
                    <div><img src={stand}/></div>
                    <div><img src={sit}/></div>
            
        </div>
    );
}