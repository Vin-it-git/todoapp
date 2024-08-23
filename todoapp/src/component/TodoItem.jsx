import styles from "./todoitem.module.css"
export default function TodoItems({item}){
    return(
        <div className={styles.item}>
            <div className={styles.itemname}>{item}
            <span>
                <button className={styles.deleteButton}>X</button>
            </span>
            </div>
            
            <hr className={styles.line}/>
        </div>
    )
}