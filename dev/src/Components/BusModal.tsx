import styles from '../Styles/BusModal.module.css';


export function BusModal() {
    
    return (

        <div className={styles.modalContainer}>

            
                <div className={styles.modalBorders} >
                <table>
                    <tr >
                        <th>Ponto <strong>20352</strong></th>
                        <th><button className={styles.closeButton}> x </button></th>
                    </tr>
                    <tr className={styles.rowFirst} style={{backgroundColor:'orange'}} >
                        <td className={styles.first}>Onibus</td>
                        <td className={styles.first}>Previsão</td>
                    </tr>
                    <tr>
                        <td>5264822</td>
                        <td>5 min</td>
                    </tr>
                    <tr>
                        <td>5264822</td>
                        <td>15 min</td>
                    </tr>
                    <tr>
                        <td>5264822</td>
                        <td>25 min</td>
                    </tr>
                    <tr>
                        <td>5264822</td>
                        <td>1 h</td>
                    </tr>
                </table>
                </div>
            </div>

        
    );
}