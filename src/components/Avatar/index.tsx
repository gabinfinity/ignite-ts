import React from 'react'
import {ImgHTMLAttributes} from 'react'
import styles from './styles.module.css'

interface AvatarPropsType extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar(props: AvatarPropsType) {
  return (
    <img className={props.hasBorder ? styles.userPhotoWithBorder : styles.userPhoto} 
    src={props.src} 
    alt='Foto de perfil do usuário'></img>
  )
}