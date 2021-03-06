// Exibe os dados de uma sugestão de localização
import styles from '../Styles/LocationSugestion.module.css';
import icon from '../Assets/pin_icon.svg';

export function LocationSugestion(){

    return(

        <div className={styles.locationSugestionContainer}>
            <div className={styles.distanceDisplay}> 
                <div> <img src={icon} /> </div> 
                <div>55.7 Km</div>
            </div>
            <div className={styles.descritionDisplay}> 
            <strong>Título do lugar</strong>
            <p>descrição com o endereço do lugar para melhor confirmação</p>
            
             </div >
            {/** esse é um botão que aceita a sugestão de localização e passa o texto para cixa de pesquisa*/}
            <div className={styles.locatioAceptIcon} >
             Acitar
            </div>
        </div>

    );
}