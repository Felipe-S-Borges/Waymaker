// Componente que apresenta cada rota individualmente
import styles from '../Styles/Route.module.css';
import changeBus from '../Assets/bus_Change.svg';
import { BusDisplay } from './BusDisplay';

export function Route(){

    return (

        <div className={styles.routeContainer} >
            <div>1º Rota disponível <span>23 min</span></div>
            <div className={styles.busSequence} >

                <BusDisplay flag='red' number='519 / 1023 / 542 ...' isFirst={false} />
                
                <span> <img src={changeBus} /></span>
                <BusDisplay flag='green' number='519 / 501 / 253 ...' isFirst={false}/>
               
                <span> <img src={changeBus} /></span>
                <BusDisplay flag='purple' number='516' isFirst={false}/>
                
            
            </div>
        </div>
    );
}