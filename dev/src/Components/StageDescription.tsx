/**=========================================================================================== 
* Componente que exibe cada linha dentro do componete stage alternando entre icones e textos
==============================================================================================
*/
import styles from '../Styles/Descritions.module.css';
import arCond from '../Assets/ar_icon.svg';
import wifi from '../Assets/wifi_icon.svg';
import acess from '../Assets/acess_icon.svg';
import stand from '../Assets/stand_icon.svg';
import sit from '../Assets/sit_icon.svg';
import { BusNumberDisplay } from './BusNumberDisplay';
import { numericToOrdinal } from '../Utils/numericToOrdinal';
import { off } from 'node:process';

interface DirectionsProps{
    icon:string;
    direction:any;
    content:any;
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



export function StageDescription(props: DirectionsProps){
    
    return(

        <div className={styles.descritionContainer}>
            <div>                        
                {textOrImage(props.icon)}
            </div>
            {descriptions(props)}        
        </div>
    );
}



function textOrImage(url:string) {
    
    return (
        <div className={styles.icon}>
            {url.length > 4?(
                <img src={url} className={styles.iconImgPrimary}/>           
            ):(
                <div className={styles.plataform} >{url}</div>
            )}                       
        </div>
    )
}

function descriptions(description:DirectionsProps) {

    return(
        description.icon.length > 4?(
            walkOrBoard(description)
        ):(
            busDescription(description.content)
        ) 
    )
}

function walkOrBoard(description:DirectionsProps) {
    return(
        description.direction?(
            <div className={styles.directions}>
                {onBoardOroffBoard(description)}   
            </div>
        ):(
            walkToBusStop(description.content)
        )
    )
}

function onBoardOroffBoard(descrition:DirectionsProps) {
    
    return(
        descrition.direction === "1" ?(
            <>
            <p>{numericToOrdinal({ number: descrition.content.stage, isFemale: false})} embarque</p> 
            {onBoardDescription(descrition.content.stage)}
            </>
        ):(
           <>
           <p>Desembarque</p>                               
           {offBoard(descrition.content)}
           </>
        )
    )
}

function onBoardDescription(currentStage:number) {
    
    return (
        currentStage == 1? (
            <p> Aguarde por algumas dessas opções</p>
         ):(
            <p> Aguarde por algumas dessas opções na plataforma (P) indicada</p> 
         )
    )

}


function offBoard(content:any) {

    return (
        content[content.length -1].destiny?(
                                    
            <div>
                <strong> {content[content.length -1].destiny} </strong>
            </div>
        ):(
            <>
                <strong> Desembarque no ponto {content[content.length -1].identification} </strong> 
                <p>{content[content.length -1].localization}</p>
            </>
        )
    )
    
}

function walkToBusStop(content:any) {

    return (
        <div className={styles.directions}>

            <p> Caminhe até o ponto <span> {content.identification} </span></p> 
            <p>{content.localization}</p>     
                             
                              
        </div>
    )
    
}


function busDescription(descriptions:BusContentProps) {
    return(
        <div className={styles.busIcons}>
            <BusNumberDisplay flagColor={`var(--flag-${descriptions.flagColor})`} number={descriptions.number} isSingle={true} />
            <div className={styles.busTitle}> {descriptions.name} </div>
            {/**<div>agora</div>*/}
            {resorces(descriptions.resorces)}         
        </div>
    )
}

function resorces(itens:ResorcesProps) {
    return(
        <div className={styles.incosContainer}>
            {itens.arCond?(

                <div><img src={arCond} className={styles.iconImgSecondary} /></div>
            ):(
                <></>
            )}

            {itens.wifi?(

                <div><img src={wifi} className={styles.iconImgSecondary} /></div>
            ):(
                <></>
            )}


            {itens.acess?(

                <div><img src={acess} className={styles.iconImgSecondary} /></div>
            ):(
                <></>
            )}

            {itens.stand?(

                <div className={styles.popped}><img src={stand} className={`${styles.iconImgSecondary}`} />{`${itens.stand}%`}</div>
            ):(
                <></>
            )}

            {itens.sit?(

                <div className={styles.popped}><img src={sit} className={`${styles.iconImgSecondary}`} />{`${itens.sit}%`}</div>
            ):(
                <></>
            )}
        </div>

    )
}