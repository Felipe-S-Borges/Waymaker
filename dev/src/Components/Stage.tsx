//Componente <li> para a lista ordenada
import styles from '../Styles/Stage.module.css';

export function Stage(){
    return(

        <div className={styles.stageContainer}>
            <li>Passo</li>
            <div className={styles.stageDescription}>
                <div> aaa</div>
                <div>
                    <strong> Caminhe até o ponto 1520 </strong> 
                    <p>Av. Luciano Satler Gurgel</p>
                </div>
            </div>
        </div>

    );
}