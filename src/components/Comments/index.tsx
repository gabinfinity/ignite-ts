import React, { useState } from 'react'
import styles from './styles.module.css'
import { ThumbsUp, Trash } from '@phosphor-icons/react'
import { Avatar } from '../Avatar'

interface CommentsPropsType {
    content: string;
    deleteCommentPost: (comment: string) => void;
}

export function Comment(props: CommentsPropsType) {

    const [likeCount, setLikeCount] = useState(0);

    function likeComment() {
        setLikeCount((numberOfLikes) => {
            return numberOfLikes + 1
        })
    }

    function deleteComment() {
        props.deleteCommentPost(props.content)
    }

  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/rocketseat.png" alt='Foto de perfil do usuário' />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Lenon Doe</strong>
                        <time title={'31 de outubro de 2023 ás 20:00'} dateTime='2023-10-31 20:00'>Publicado há 1h</time>
                    </div>
                    <button onClick={deleteComment} title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>
                <p>{props.content}</p>
            </div>

            <footer>
                <button onClick={likeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
  )
}
