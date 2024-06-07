import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'


export function Comment(){
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false}  src="https://github.com/igorcariello.png" alt="" />
      
      <div className={styles.commentBox}> 
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Igor Cariello</strong>
              <time title="06 de Junho de 2024 às 22:07h " dateTime="2022-06-05 22:07:30">Cerca de 1h atrás</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
         
          <p>Muito bom Devon, parabéns!! 👋👋</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}