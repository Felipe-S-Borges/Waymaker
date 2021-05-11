/**=========================================================================================== 
* Componente <li> para a lista ordenada que exibe os etapas do trajeto
==============================================================================================
*/
import styles from '../Styles/Stage.module.css';
import onBoard_icon from '../Assets/onBoard_icon.svg';
import offBoard_icon from '../Assets/offBoard_icon.svg';
import walkTo_icon from '../Assets/walkTo_icon.svg';

import React from 'react';
import { StageDescription } from './StageDescription';

interface stageProps{

    stage:any;
    busList:any;
}

interface BusContentProps {
    number:string;
    name:string;
    plataform:string;
    flagColor:string;
    prevTime:string;
    isSingle: null;
    resorces: ResorcesProps;

}

interface ResorcesProps{
    wifi: boolean;
    arCond: boolean;
    acess: boolean;
    stand: boolean;
    sit: string; 
}

export function RouteStage(props: stageProps){
    console.log(Array.isArray(props.busList) )
    const isList = Array.isArray(props.busList)
    return(
        isList?(
            <div className={styles.stageContainer}>
                {inBound(props)}
                {/**Aqui entra um loop */}
                {listDisplay(props.busList)}
                
                
                
               
                
                {props.busList.length > 3?(

                    <><hr /><div className={styles.moreOptions} >Mais opções</div></>

                ):(
                    <></>
                )}
                
                {outBound(props.busList)}
                
                

            </div> 

        ):(
            showInstructions(props.busList,isList)
        )
        

    );
}

function showInstructions(instructions:any, isList:boolean) {
    return (
        <div className={styles.stageContainer}>
            <li>Passo</li>
            <StageDescription icon={walkTo_icon} direction={isList} content={instructions} />                                       
        </div>
    )
}

function inBound(content:any) {
    return(
        <>
        <li>Passo</li>
            <StageDescription icon={onBoard_icon} direction={'1'} content={content} />
        </>
    )
}

function outBound(content:any) {
    return (
        <StageDescription icon={offBoard_icon} direction={'0'} content={content} />
    )
}

function listDisplay(list:any) {
    console.log("---------------------------")
    console.log(list)
    console.log(list[0])
    
const busList = list.map((bus:any,index:any) =>{
        <StageDescription key={index} icon={bus.plataform} direction={'1'} content={bus} />
    })
    console.log(busList)
    return (
        <>
        {busList}
        </>
        )
  
}