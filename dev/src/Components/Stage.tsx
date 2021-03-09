//Componente <li> para a lista ordenada
import styles from '../Styles/Stage.module.css';
import onBoard_icon from '../Assets/onBoard_icon.svg';
import offBoard_icon from '../Assets/offBoard_icon.svg';

import { Display } from './Display';

interface stageProps{

    stage:number;
}

export function Stage(props: stageProps){
    return(
       
        <div className={styles.stageContainer}>
            <li>Passo</li>

            

                <Display/>

                                                                 
        </div>

    );
}