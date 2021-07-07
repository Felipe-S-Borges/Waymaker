// tela para definição de localização
import { useHistory } from 'react-router-dom';
import back from '../Assets/back_arrow.svg'
import { LocationSugestionDisplay } from '../Components/LocationSugestionDisplay';

import styles from '../Styles/DestinySearch.module.css';

export function DestinySearch(){
    const history = useHistory();

    function handleClickToHome() {
        history.push("/")
    }

    return (

        <div className={styles.DestinySearchContainer} >
            
            <div className={styles.searchImput}> 
                <button onClick={handleClickToHome} ><img src={back} width='24'/> </button>
                <input type="text" placeholder="Digite a Localização"/>
            </div>
            <div  className={styles.searchButton}>
                <button  > Escolha no mapa </button>
                
            </div>
            <div> 
                    {/** componente de retorno com sugestão de localizações */}
                    <LocationSugestionDisplay />
                </div>

        </div>

    );
}