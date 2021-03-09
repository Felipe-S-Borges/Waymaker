// Esse compponente controla o que será exibido dentro do stage
import styles from '../Styles/Display.module.css'; 
interface displayProps{
    icon: any;
    

}
export function Display(props:displayProps){

    return(

        <div className={styles.stageDescription}>
                    <div> 
                        { props.icon.length > 4? (

                            <img src={props.icon} />  

                        ):(

                            <p>{props.icon}</p>
                        )}
                        
                    </div>
                    
                    <div>
                        
                         { props.icon.length > 4? (
                             <>
                            <strong> Caminhe até o ponto 1520 </strong> 
                            <p>Av. Luciano Satler Gurgel</p>  
                             </>

                        ):(

                            <p>lista</p>
                        )}



                    </div>
        </div>
    );
}