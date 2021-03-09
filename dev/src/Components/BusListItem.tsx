// componete da lista que exibe os dados dos veículos
import styles from '../Styles/BusListItem.module.css';
import arCond from '../Assets/ar_icon.svg';
import wifi from '../Assets/wifi_icon.svg';
import acess from '../Assets/acess_icon.svg';
import stand from '../Assets/stand_icon.svg';
import sit from '../Assets/sit_icon.svg';

import { BusDisplay } from "./BusDisplay";

interface busListItemProps{
    icon: string;

}

export function BusListItem(props: busListItemProps){

    return(
        <div className={styles.busListItemConatiner}>
            <div> 
                { props.icon.length > 4? (

                    <img src={props.icon} />  

                ):(
                    <>
                    <p>{props.icon}</p>
                    </> 
                )}
                            
            </div>

            <div className={styles.busListContainer} >

                { props.icon.length > 4? (

                    <>
                    <strong> Caminhe até o ponto 1520 </strong> 
                    <p>Av. Luciano Satler Gurgel</p> 
                    </>
                ):(
                    <>
                    <BusDisplay flag="green" number="551" isFirst={true} />
                    <div> Terminal de Carapina </div>
                    <div>agora</div>
                    <div><img src={arCond} /></div>
                    <div><img src={wifi}/> </div>
                    <div><img src={acess}/></div>
                    <div><img src={stand}/></div>
                    <div><img src={sit}/></div>
                    </> 
                )}
                    
                
            </div>
        </div>
    );
}