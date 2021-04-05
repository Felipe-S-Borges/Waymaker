/**=========================================================================================== 
* Componente <li> para a lista ordenada que exibe os etapas do trajeto
==============================================================================================
*/
import styles from '../Styles/Stage.module.css';
import onBoard_icon from '../Assets/onBoard_icon.svg';
import offBoard_icon from '../Assets/offBoard_icon.svg';
import walkTo_icon from '../Assets/walkTo_icon.svg';

import React from 'react';
import { StageDescrition } from './StageDescrition';

interface stageProps{

    stage:any;
    busList:any;
}

export function Stage(props: stageProps){
    console.log(Array.isArray(props.busList) )
    const isList = Array.isArray(props.busList)
    return(
       

        isList?(
            <div className={styles.stageContainer}>
                <li>Passo</li>
                {console.log('stage' + props.stage)}
                {console.log(props)}
                <StageDescrition icon={onBoard_icon} direction={'1'} content={props} />

                {/**Aqui entra um loop */}
                <StageDescrition icon={props.busList[0].plataform} direction={'1'} content={props.busList[0]} />
                <StageDescrition icon={props.busList[1].plataform} direction={'1'} content={props.busList[1]} />
                {console.log(props.busList)}
                {props.busList.length > 3?(

                    <><hr /><div className={styles.moreOptions} >Mais opções</div></>

                ):(
                    <></>
                )}
                
                <StageDescrition icon={offBoard_icon} direction={'0'} content={props.busList} />
                

            </div> 

        ):(
            
            <div className={styles.stageContainer}>
                <li>Passo</li>
                {console.log('stage' + props.stage)}
                {console.log(props)}
                <StageDescrition icon={walkTo_icon} direction={isList} content={props.busList} />
                                                                 
            </div>
            
        )
        

    );
}