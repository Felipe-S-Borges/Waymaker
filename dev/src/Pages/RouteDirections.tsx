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


    
    return (

        <div className={styles.directionsContainer}>
        {/**=========================================================================================== 
         *  header 
         *      cabeçalho
         *      Mapa
         *      Menu Lateral
         *      Rodape
         * =========================================================================================== 
        */}
            <header>

                <div className={styles.topBar}>  

                   <button className={styles.iconButton} > <img src={back} /> </button>
                   <p className={styles.titleDirections}>
                        Direções
                    </p>
                </div>

                {/**Mapa com o trajeto marcado */}
                <div className={styles.mapsContainer}>

                   <img src={map} className={styles.maps} />

                </div>

                {/**Componte menu da barra lateral */}

                {/**Rodape */}
                <div className={styles.directionsBottomHeader}>

                <p> {numericToOrdinal({number: (buspath.routeNumber + 1), isFemale: true})} rota disponível</p> <span> {buspath.routeTime} min</span>

                </div>
                
               
            </header>
            {/**=========================================================================================== */}





            {/**===========================================================================================  
             * main 
             *      ol
             *      Stage -- Representa cada estágio do trajeto com numeração
             * =========================================================================================== 
            */}
            <main>

                <ol>
                    {/*console.log(buspath.routeStages)*/}
                    {/**Aqui entra um loop */}
                    <RouteStage stage={0} busList={buspath.routeStages[0]} /> 
                    <RouteStage stage={1} busList={buspath.routeStages[1]} /> 
                    <RouteStage stage={2} busList={buspath.routeStages[2]} /> 
                    
                    {/** 
                    <Stage stage={''}/>
                    <Stage stage={'1'} />
                    <Stage stage={'1'} />
                    <Stage stage={'1'} />
                    <Stage stage={''} />

                    */}
                   

                </ol>

                

            </main>


        </div>
    );
}