//Componente <li> para a lista ordenada
import styles from '../Styles/Stage.module.css';
import onBoard_icon from '../Assets/onBoard_icon.svg';
import offBoard_icon from '../Assets/offBoard_icon.svg';
import walkingTo_icon from '../Assets/walkTo_icon.svg';
import { Display } from './Display';

interface stageProps{

    stage:number;
}

export function Stage(props: stageProps){
    return(
       
        <div className={styles.stageContainer}>
            <li>Passo</li>

            {props.stage == 0?(

                <Display icon={walkingTo_icon}/>


            ):(
                <>
                <div className={styles.stageDescription}>
                    <div> bbb</div>
                    <div>
                        <strong> Primeiro embarque </strong> 
                        <p>Aguarde por algumas dessas opições</p>
                         <div>
                              Lista de onibus
                        </div>
                        

                    </div>
                   
                </div>

                 <div className={styles.stageDescription}>
                    <div> bbb</div>
                    <div>
                        
                        <p>Desembarque</p>
                        <strong> Terminal de laranjeiras </strong> 
                         

                    </div>
                   
                </div>
                </>





                
            )}

                            
        </div>

    );
}