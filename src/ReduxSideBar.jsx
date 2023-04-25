import styles from "./ReduxSideBar.module.css";
import { useSelector } from 'react-redux';


export function ReduxSideBar() {

    const addRedux = useSelector((state)=>state.add.value);


    return (
        <div className={styles.container}>
            <ul>
            {addRedux.map((el,index)=>(<li key={index} className={styles.element}><span>Redux</span></li>))}
            </ul>
        </div>
    )
}