//exibe e gerencia todas as sugetoes de localização

import { LocationSugestion } from "./LocationSugestion";
import styles from '../Styles/LocationSugestionDisplay.module.css';

export function LocationSugestionDisplay(){

    return(
        <div className={styles.sugestionsContainer}>
            <LocationSugestion />
            <LocationSugestion />
            <LocationSugestion />
        </div>
        
    );
}