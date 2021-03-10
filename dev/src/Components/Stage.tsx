//Componente <li> para a lista ordenada que exibe os etapas do trajeto
import styles from '../Styles/Stage.module.css';
import onBoard_icon from '../Assets/onBoard_icon.svg';
import offBoard_icon from '../Assets/offBoard_icon.svg';
import walkTo_icon from '../Assets/walkTo_icon.svg';

import React from 'react';
import { Descritions } from './Descritions';

interface stageProps{

    stage:string;
}

export function Stage(props: stageProps){
    return(
       
        props.stage?(
            <div className={styles.stageContainer}>
                <li>Passo</li>
                <Descritions icon={onBoard_icon} direction={'1'} />
                <Descritions icon={"P32"} direction={'1'}/>
                <Descritions icon={"P23"} direction={'1'}/>
                <hr /><div className={styles.moreOptions} >Mais opções</div>
                <Descritions icon={offBoard_icon} direction={''} />
                

            </div> 

        ):(
            
            <div className={styles.stageContainer}>
                <li>Passo</li>
                <Descritions icon={walkTo_icon} direction={'0'} />
                                                                 
            </div>
            
        )
        

    );
}