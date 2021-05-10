// Componente que apresenta cada rota individualmente
import styles from '../Styles/Route.module.css';
import changeBus from '../Assets/bus_Change.svg';
import { BusNumberDisplay } from './BusNumberDisplay';

export function Route(){

    return (

        <div className={styles.routeContainer} >
            <div>1º Rota disponível <span>23 min</span></div>
            <div className={styles.busSequence} >

                <BusNumberDisplay flagColor='red' number='519 / 1023 / 542 ...' isSingle={false} />
                
                <span> <img src={changeBus} /></span>
                <BusNumberDisplay flagColor='green' number='519 / 501 / 253 ...' isSingle={false}/>
               
                <span> <img src={changeBus} /></span>
                <BusNumberDisplay flagColor='purple' number='516' isSingle={false}/>
                
            
            </div>
        </div>
    );
}