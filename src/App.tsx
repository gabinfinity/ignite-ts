import { Posts } from './components/Posts'
import { Header } from './components/Header'
import styles from './app.module.css'
import './styles.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabinfinity.png',
      name: 'Gabriel Manzoni',
      role: 'Fullstack Developer'
    },
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ],
    publishedAt: new Date('2023-10-31 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/gabinfinity.png',
      name: 'Gabriel Manzoni',
      role: 'Fullstack Developer'
    },
    content: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ],
    publishedAt: new Date('2023-10-31 21:00:00')
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
          {posts.map(post => {
            return (
            <Posts 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
          </main>
        </div>
    </>
  )
}
