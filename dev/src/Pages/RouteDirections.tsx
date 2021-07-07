/**=========================================================================================== 
* Tela de Direção do usuário, exibe cada rota individualmente
==============================================================================================
*/
import styles from '../Styles/Directions.module.css';
import back from '../Assets/back_arrow.svg';
import map from '../Assets/map.png';
import track from '../Assets/target.svg';
import position_icon from '../Assets/position-icon.svg';
import walkTo_icon from '../Assets/walkTo_icon.svg';
import onBoard_icon from '../Assets/onBoard_icon.svg';
import offBoard_icon from '../Assets/offBoard_icon.svg';

import { Route } from '../Components/Route';
import { RouteStage } from '../Components/RouteStage';
import { StageDescription} from '../Components/StageDescription';
import { AllRoutesDisplay } from './AllRoutesDisplay ';
import buspath from '../Assets/data.json';
import { numericToOrdinal } from '../Utils/numericToOrdinal';
import { useHistory } from 'react-router-dom';



export function RouteDirections(){
    
    //A partir de um vetor será montado a descrição do trajeto 
    //const busRoute = JSON.parse(buspath);

     //stage index = numero do estagio
    //busList lista de onibus
    /** 
    function builder(item: object, index: number) {
                            
        return <Stage stage={index} busList={item} />
       
    }
    */

    const history = useHistory();

    function handleClickToRoutes() {
        history.push("/routesDisplay")
    }



    return (

        <div className={styles.directionsContainer}>
            <header>
                {topBar(handleClickToRoutes)}
                {mapsDisplay()}
                {/**Componte menu da barra lateral */}
                {footer()}
                
                
            </header>
            <main>
                <ol>
                    {buildStages(buspath.routeStages)}
                </ol>
            </main>

        </div>
    );
}

function buildStages(stages:any) {

    const stagesList = stages.map((stage:any,index:any)=>{
       return <RouteStage stage={index} busList={stage} /> 
    })

    return stagesList
    
}

function topBar(backDestiny:any) {
    

    return(
        <div className={styles.topBar}>  

            <button className={styles.iconButton} onClick={backDestiny} > <img src={back} /> </button>
            <p className={styles.titleDirections}>
                Direções
            </p>
        </div>
    )
}

function mapsDisplay() {
    return(   
        <div className={styles.mapsContainer}>
            <img src={map} className={styles.maps} />
        </div>
        )
}

function footer() {
    return(
    <div className={styles.directionsBottomHeader}>
        <p> {numericToOrdinal({number: (buspath.routeNumber + 1), isFemale: true})} rota disponível</p> <span> {buspath.routeTime} min</span>
    </div>
    )
}

function sideBarMenu() {
    
}