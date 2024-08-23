import styles from "./todoitem.module.css";
export default function TodoItems({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handlename(name){
    console.log('item cliked',name)
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span onClick={()=>handlename(item.name)}>{item.name}</span>
        
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
