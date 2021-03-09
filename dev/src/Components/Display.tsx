// Esse compponente controla o que será exibido dentro do stage
import styles from '../Styles/Display.module.css'; 
import { BusListItem } from './BusListItem';
import walkingTo_icon from '../Assets/walkTo_icon.svg';

export function Display(){

    return(

        <div className={styles.stageDescription}>
                    
                    
                    <div>
                        
                           { /** 
                             <>
                            <strong> Caminhe até o ponto 1520 </strong> 
                            <p>Av. Luciano Satler Gurgel</p>  
                             </>
                            */}
                       
                            <>
                            <BusListItem icon={"P32"} />
                            {/**<BusListItem icon={"P32"}/> */}
                            
                            </>
                        



                    </div>
        </div>
    );
}