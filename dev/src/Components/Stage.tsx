//Componente <li> para a lista ordenada
import styles from '../Styles/Stage.module.css';
import onBoard_icon from '../Assets/onBoard_icon.svg';
import offBoard_icon from '../Assets/offBoard_icon.svg';
import walkTo_icon from '../Assets/walkTo_icon.svg';

import { Display } from './Display';
import React from 'react';
import { Descritions } from './Descritions';

interface stageProps{

    stage:number;
}

export function Stage(props: stageProps){
    return(
       
        <div className={styles.stageContainer}>
            <li>Passo</li>
            <Descritions icon={walkTo_icon} direction={'0'} />
            <Descritions icon={onBoard_icon} direction={'1'} />
            <Descritions icon={"P32"} direction={'1'}/>
            <Descritions icon={"P345"} direction={'1'}/>
            <Descritions icon={"P23"} direction={'1'}/>
            <Descritions icon={offBoard_icon} direction={''} />
            

                

                                                                 
        </div>

    );
}