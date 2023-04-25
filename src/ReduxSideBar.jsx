import styles from "./ReduxSideBar.module.css";

export function ReduxSideBar({arr}) {
    return (
        <div className={styles.container}>
            <ul>
            {arr.map((el,index)=>(<li key={index} className={styles.element}><span>Vite + React</span></li>))}
            </ul>
        </div>
    )
}