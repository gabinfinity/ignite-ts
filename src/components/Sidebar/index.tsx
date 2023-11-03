import React from 'react'
import { PencilLine } from '@phosphor-icons/react'

import styles from './styles.module.css'
import { Avatar } from '../Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
        <img className={styles.cover}
        src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Foto de capa do usuário"></img>
        
        <div className={styles.profile}>
            <Avatar hasBorder={true} 
            src='https://github.com/gabinfinity.png' 
            alt='Foto do usuário' />
            <strong>Jonh Doe</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href='#'>
              <PencilLine size={20}/>
              Editar seu perfil
            </a>
        </footer>
    </aside>
  )
}
