// Componente que apresenta cada rota individualmente
import styles from '../Styles/Route.module.css';
import changeBus from '../Assets/bus_Change.svg';
import { BusNumberDisplay } from './BusNumberDisplay';

export function Route(){

    return (

        <div className={styles.routeContainer} >
            <div>1º Rota disponível <span>23 min</span></div>
            <div className={styles.busSequence} >

                <BusNumberDisplay flag='red' number='519 / 1023 / 542 ...' isFirst={false} />
                
                <span> <img src={changeBus} /></span>
                <BusNumberDisplay flag='green' number='519 / 501 / 253 ...' isFirst={false}/>
               
                <span> <img src={changeBus} /></span>
                <BusNumberDisplay flag='purple' number='516' isFirst={false}/>
                
            
            </div>
        </div>
    );
}