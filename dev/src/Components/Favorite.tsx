//Caixa de favoritos da página home
import styles from '../Styles/Favorite.module.css';
import pin_icon from '../Assets/pin_icon.svg';
import menu from '../Assets/menu_pontos.svg';
import { BusNumberDisplay } from './BusNumberDisplay';

export function Favorite() {

    return (

        <div className={styles.favoriteContainer} >
            <span>
                <span className={styles.pin_icon}> <img src={pin_icon} ></img> </span>
                <span> 
                    <strong> Casa</strong>
                    <p> 
                        <BusNumberDisplay flag="green" number="518" isSingle={true}/> 
                        voce está perto deste local</p>
                </span>
            </span>
            <span> <img src={menu} ></img> </span>

        </div>
    );
}