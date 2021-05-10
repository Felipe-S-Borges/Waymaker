//Página de carregamento inicial e processamento de rotas.

import logo from '../Assets/logo.svg';

import styles from '../Styles/IsLoading.module.css';

export function OnLoad(){

    return (

        <div className={styles.loadingContainer}  >

            <img src={logo} alt='Carregando' /> 

        </div>
    );

    
}