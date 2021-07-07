// Tela de confirmação e edição de trajeto
import styles from '../Styles/DesinyConfirm.module.css';
import back from '../Assets/back_arrow.svg';
import switchArrow from '../Assets/switch.svg';
import track from '../Assets/target.svg';
import position_icon from '../Assets/position-icon.svg';
import { useHistory } from 'react-router-dom';

export function DesinyConfirm(){

    const history = useHistory();

    function handleClickConfirmed() {
        history.push("/routesDisplay")
    }

    return (

        <div className={styles.DesinyConfirmContainer}>
            <header>
                <div>  
                   <button className={styles.iconButton} > <img src={back} /> </button>
                   <button className={styles.imputButton} >
                       <img src={track} />
                       Sua localização atual
                    </button>                   
                </div>
                <div>  
                    <button className={styles.iconButton} > <img src={switchArrow} /> </button>
                    <button className={styles.imputButton} >
                        <img src={position_icon} />
                        Shopping das gardenias...
                    </button>
                </div>
                <div>   
                    <button className={styles.filtersButton} >Escolher filtros de busca</button>
                </div>
                <div>   
                    <button className={styles.createRouteButton} onClick={handleClickConfirmed} >Encontrar rotas disponíveis</button>
                </div>
            </header>
            {/**Mapa */}
            <main>

            </main>


        </div>
    );
}