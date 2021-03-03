import image from '../Assets/smile_face.svg';
import styles from '../Styles/Messager.module.css';

export function Messager(){

    return (

        <div className={styles.messagerContainer}>

            <img src={image} />
            <strong> Adicione novas rotas</strong>
            <p>Vamos adicionar aqui as principais rotas do seu dia dia</p>

        </div>

    );
}