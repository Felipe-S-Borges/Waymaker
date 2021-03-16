// Tela de confirmação e edição de trajeto
import styles from '../Styles/Directions.module.css';
import back from '../Assets/back_arrow.svg';
import map from '../Assets/map.png';
import track from '../Assets/target.svg';
import position_icon from '../Assets/position-icon.svg';
import walkTo_icon from '../Assets/walkTo_icon.svg';
import onBoard_icon from '../Assets/onBoard_icon.svg';
import offBoard_icon from '../Assets/offBoard_icon.svg';

import { Route } from '../Components/Route';
import { Stage } from '../Components/Stage';
import { Descritions, numericToOrdinal } from '../Components/Descritions';
import { RoutesDisplay } from './RoutesDisplay ';



export function Directions(){

    //A partir de um vetor será montado a descrição do trajeto 
    const busRoute = {
        routeNumber: 0,
        routeTime:"28 min",
        routeStages:[
            {
                //objeto ponto de onibus. Esse é o primeiro ponto encontrado pelo back-end perto do usuário
                //elemento 0
                identification:"1542",
                localization:"Av. Honório Gurgel",
                coordenates:{
                    long:"565296.46584846",
                    lat:"13565462.6654685"
                }

            },
            [// Vetor com a lista de onibus que fazem o primeiro trajeto
                {
                    number:"518",
                    name:"Terminal de Carapina",
                    plataform:"P35",
                    flag:"green",
                    prevTime:"23",//minutos
                    isFirst: null,
                    resorces:{
                        wifi: true,
                        arCond: true,
                        acess: true,
                        stand: "80", //Porcento
                        sit: "100" //Porcento
                    }

                },
                {
                    number:"535",
                    name:"Terminal de Carapina",
                    plataform:"P56",
                    flag:"green",
                    prevTime:"23",//minutos
                    isFirst: null,
                    resorces:{
                        wifi: true,
                        arCond: true,
                        acess: true,
                        stand: "80", //Porcento
                        sit: "100" //Porcento
                    }
                }
                
                

            ],
            [// Vetor com a lista de onibus que fazem o primeiro trajeto
                {
                    number:"548",
                    name:"Terminal de jacaraipe",
                    plataform:"P55",
                    flag:"orange",
                    prevTime:"23",//minutos
                    isFirst: null,
                    resorces:{
                        wifi: true,
                        arCond: true,
                        acess: true,
                        stand: "80", //Porcento
                        sit: "100" //Porcento
                    }
                },
                {   
                    number:"578",
                    name:"Terminal de jacaraipe",
                    plataform:"P55",
                     flag:"orange",
                    prevTime:"23",//minutos
                    isFirst: null,
                    resorces:{
                        wifi: true,
                        arCond: true,
                        acess: true,
                        stand: "80", //Porcento
                        sit: "100" //Porcento
                  }
                
                }
            ],
            {
                //objeto ponto de onibus. Esse é o ponto encontrado pelo back-end perto do destino do usuario
                //ultimo elemento do vetor
                identification:"3442",
                localization:"Av. Laura Mendes",
                coordenates:{
                    long:"65296.46584846",
                    lat:"73565462.6654685"
                }
                
            }
        ]
    }

     //stage index = numero do estagio
    //busList lista de onibus
    /** 
    function builder(item: object, index: number) {
                            
        return <Stage stage={index} busList={item} />
       
    }
    */


    
    return (

        <div className={styles.directionsContainer}>

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

                {/**Header de baixo */}
                <div className={styles.directionsBottomHeader}>

                <p> {numericToOrdinal(busRoute.routeNumber)} rota disponível</p> <span> {busRoute.routeTime}</span>

                </div>
                
               
            </header>

            {/**Rotas */}
            <main>

                <ol>
                  
                    <Stage stage={0} busList={busRoute.routeStages[0]} /> 
                    <Stage stage={1} busList={busRoute.routeStages[1]} /> 
                    <Stage stage={2} busList={busRoute.routeStages[2]} /> 
                    <Stage stage={3} busList={busRoute.routeStages[3]} />
                    {/** 
                    <Stage stage={''}/>
                    <Stage stage={'1'} />
                    <Stage stage={'1'} />
                    <Stage stage={'1'} />
                    <Stage stage={''} />

                    */}
                    {/** 
                    <Descritions icon={walkTo_icon} direction={'0'} />
                    <Descritions icon={onBoard_icon} direction={'1'} />
                    <Descritions icon={"P32"} direction={'1'}/>
                    <Descritions icon={"P345"} direction={'1'}/>
                    <Descritions icon={"P23"} direction={'1'}/>
                    <Descritions icon={offBoard_icon} direction={''} />
                    */}
                    

                </ol>

                

            </main>


        </div>
    );
}