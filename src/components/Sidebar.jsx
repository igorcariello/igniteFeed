import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img 
        src="https://img.freepik.com/fotos-premium/software-para-armazenar-organizar-rastrear-e-gerenciar-documentos-digitais-um-repositorio-centralizado-permite-a-criacao-armazenamento-recuperacao-e-distribuicao-eficientes-de-documentos_76964-129648.jpg?w=900"
        className={styles.cover}
      />
    
      <div className={styles.profile}>
        < Avatar src="https://github.com/maykbrito.png"/>
        
        <strong>Igor Cariello</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    
    </aside>
  )
}