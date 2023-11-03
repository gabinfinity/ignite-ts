import React, { FormEvent, ChangeEvent, useState, InvalidEvent } from 'react'
import styles from './styles.module.css'
import { Comment } from '../Comments'
import { Avatar } from '../Avatar'

interface AuthorPostType {
  name: string;
  role: string;
  avatarUrl: string;
}

interface PropsPostType {
  author: AuthorPostType;
  publishedAt: Date;
  content: string[];
}

export function Posts(props: PropsPostType) {

  const [comments, setComments] = useState<string[]>([])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormat = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(props.publishedAt)

  const publishedDateFormatDetails = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute:'numeric',
  }).format(props.publishedAt)

  function createNewcomment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')

  }

  function newCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteCommentPost(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment != commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }

  function newCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Preencha este campo com seu comentário.')
  }

  const isNewCommentEmpty = newCommentText.length == 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={props.author.avatarUrl} alt='Foto de perfil do usuário'/>
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatDetails} dateTime={props.publishedAt.toISOString()}>{publishedDateFormat}</time>

      </header>

      <div className={styles.content}>
        <p>{props.content}</p>
      </div>

    <form onSubmit={createNewcomment} className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea 
      name="comment"
      placeholder='Deixe um comentário'
      value={newCommentText}
      onChange={newCommentChange}
      onInvalid={newCommentInvalid}
      required />
      <footer>
        <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
      </footer>
    </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
          <Comment content={comment} 
          deleteCommentPost={deleteCommentPost}
          key={comment}
          />
          )
        })}
      </div>
    </article>
  )
}
