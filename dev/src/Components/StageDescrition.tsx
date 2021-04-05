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
import React from 'react';
import { BusNumberDisplay } from './BusNumberDisplay';

interface DirectionsProps{
    icon:string;
    direction:any;
    content:any;
}

export const numericToOrdinal = function(number: number, gender:number) {

    switch(number){

        case 0: return 'erro';
        case null: return 'erro';
        case undefined: return 'erro';
        case 1: return gender == 1?'Primeiro':'Primeira';
        case 2: return gender == 1?'Segundo':'Segunda';
        case 3: return gender == 1?'Terceiro':'Terceira';
        case 4: return gender == 1?'Quarto':'Quarta';
        case 5: return gender == 1?'Quinto':'Quinta';
        case 6: return gender == 1?'Sexto':'Sexta';
        default: return `${number}º`
           
    }

}

export function StageDescrition(props: DirectionsProps){
    

    return(

        <div className={styles.descritionContainer}>
                    <div>
                        <div className={styles.icon}>
                            {props.icon.length > 4?(
                                <img src={props.icon} className={styles.iconImgPrimary}/>
                                
                            ):(
                                <div className={styles.plataform} > {props.icon}</div>
                            )}
                            
                            
                        </div>
                    </div>
                    
                    {props.icon.length > 4?(

                        //Tru => onBoard   False => offBoard
                        props.direction?(
                            <div className={styles.directions}>
                             {props.direction === "1" ?(
                                 <>
                                 {console.log('stageeee')}
                                 {console.log(props.content.stage)}
                                 <p> {numericToOrdinal(props.content.stage,1)} embarque</p> 
                                 {props.content.stage == 1? (

                                    <p> Aguarde por algumas dessas opções</p>

                                 ):(

                                     <p> Aguarde por algumas dessas opções na plataforma (P) indicada</p> 
                                 )}
                                 
                                 </>
                             ):(
                                <>
                                <p>Desembarque</p>
                                {console.log('props f')}
                                {console.log(props.content[props.content.length -1])}
                                
                                {props.content[props.content.length -1].destiny?(
                                    
                                    <div>
                                    <strong> {props.content[props.content.length -1].destiny} </strong>
                                    </div>
                                ):(
                                    <>
                                    <strong> Desembarque no ponto {props.content[props.content.length -1].identification} </strong> 
                                    <p>{props.content[props.content.length -1].localization}</p>
                                    </>
                                )}
                                
                                </>
                             )}   
                             
                           </div>
                        ):(

                            <div className={styles.directions}>

                            <p> Caminhe até o ponto <span> {props.content.identification} </span></p> 
                            <p>{props.content.localization}</p>     
                             
                              
                           </div>
                        )
                        

                    ):(
                        <div className={styles.busIcons}>
                            {console.log('mm------')}
                            {console.log(props.content.resorces.wifi)}
                           
                        <BusNumberDisplay flag={`var(--flag-${props.content.flag})`} number={props.content.number} isFirst={true} />
                        <div className={styles.busTitle}> {props.content.name} </div>
                        {/**<div>agora</div>*/}
                        <div className={styles.incosContainer}>
                                {props.content.resorces.arCond?(

                                    <div><img src={arCond} className={styles.iconImgSecondary} /></div>
                                ):(
                                    <></>
                                )}

                                {props.content.resorces.wifi?(

                                    <div><img src={wifi} className={styles.iconImgSecondary} /></div>
                                ):(
                                    <></>
                                )}


                                {props.content.resorces.acess?(

                                    <div><img src={acess} className={styles.iconImgSecondary} /></div>
                                ):(
                                    <></>
                                )}

                                {props.content.resorces.stand?(

                                    <div className={styles.popped}><img src={stand} className={`${styles.iconImgSecondary}`} />{`${props.content.resorces.stand}%`}</div>
                                ):(
                                    <></>
                                )}

                                {props.content.resorces.sit?(

                                    <div className={styles.popped}><img src={sit} className={`${styles.iconImgSecondary}`} />{`${props.content.resorces.sit}%`}</div>
                                ):(
                                    <></>
                                )}
                                </div>

                                                    
                                
                            
                        </div>

                    )}


                    
            
        </div>
    );
}