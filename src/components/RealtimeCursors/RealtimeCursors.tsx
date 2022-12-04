import React, {
  ChangeEvent,
  CSSProperties,
  useEffect,
  useRef,
  useState
} from 'react'
import { io, Socket } from 'socket.io-client'
import throttle from 'lodash.throttle'

import config from '~/config'

import styles from './RealtimeCursors.css'

type Color =
  | 'brown'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'gray'
interface Position {
  x: number
  y: number
}

interface User {
  id: string
  color: Color
  message: string
  pos: Position
}

interface ServerToClientEvents {
  'user:new': (pos: Omit<User, 'message'>) => void
  'user:color': (user: Pick<User, 'id' | 'color'>) => void
  'user:move': (user: Pick<User, 'id' | 'pos'>) => void
  'user:leave': (user: Pick<User, 'id'>) => void
  'user:message': (user: Pick<User, 'id' | 'message'>) => void
}

interface ClientToServerEvents {
  'user:join': (user: Pick<User, 'pos'>) => void
  'user:color': (user: Partial<Pick<User, 'id' | 'color'>>) => void
  'user:move': (pos: Position) => void
  'user:message': (text: User['message']) => void
}

const colors = [
  'brown',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'gray'
]

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  config.realtime.url,
  { path: '/' }
)

const RealtimeCursors = () => {
  const messageTimeout = useRef(0)
  const messageArea = useRef<HTMLTextAreaElement>(null)
  const [users, setUsers] = useState<User[]>([])
  const [currentUser, setCurrentUser] = useState<User>({
    id: '',
    color: 'gray',
    message: '',
    pos: {
      x: 0,
      y: 0
    }
  })

  const handleColorChange = (ev: ChangeEvent<HTMLSelectElement>) => {
    const color = ev.target.value as Color

    socket.emit('user:color', { color })
  }

  const handleMessageChange = (ev: ChangeEvent<HTMLSpanElement>) => {
    window.clearTimeout(messageTimeout.current)

    const message = ev.target.textContent || ''
    setCurrentUser({ ...currentUser, message })
    socket.emit('user:message', message)

    messageTimeout.current = window.setTimeout(() => {
      setCurrentUser((currentUser) => ({ ...currentUser, message: '' }))
      socket.emit('user:message', '')
      ev.target.textContent = ''
    }, 5000)
  }

  const handleKeyUp = (ev: KeyboardEvent) => {
    switch (ev.key) {
      case '/':
        messageArea.current?.focus()
        break
    }
  }

  useEffect(() => {
    const handleSocketConnect = () => {
      setCurrentUser({ ...currentUser, id: socket.id })

      socket.emit('user:join', {
        pos: currentUser.pos
      })
    }

    const handleUserNew = (newUser: Omit<User, 'message'>) => {
      if (newUser.id === socket.id) {
        setCurrentUser({ ...currentUser, ...newUser })
      } else {
        const userIndex = users.findIndex((u) => u.id === newUser.id)
        if (userIndex === -1) {
          setUsers(
            [...users, { ...newUser, message: '' }].filter((u) => !!u.id)
          )
        }
      }
    }

    const handleUserMove = (movingUser: Pick<User, 'id' | 'pos'>) => {
      const userIndex = users.findIndex((u) => u.id === movingUser.id)

      if (userIndex === -1) {
        const newUser = {
          ...movingUser,
          message: '',
          color: 'gray' as User['color']
        }
        setUsers([...users, newUser].filter((u) => !!u.id))

        socket.emit('user:color', { id: movingUser.id })
      } else {
        const usersPositionUpdated = users
          .map((user) => {
            if (user.id === movingUser.id) {
              return { ...user, pos: movingUser.pos }
            }

            return user
          })
          .filter((u) => !!u.id)

        setUsers(usersPositionUpdated)
      }
    }

    const handleUserColor = (userColor: {
      id: string
      color: User['color']
    }) => {
      const color = userColor.color

      if (userColor.id === socket.id) {
        setCurrentUser((user) => ({ ...user, color }))
      } else {
        const updatedUserColor = users
          .map((user) => {
            if (user.id === userColor.id) return { ...user, color }

            return user
          })
          .filter((u) => !!u.id)

        setUsers(updatedUserColor)
      }
    }

    const handleUserMessage = (userMessage: Pick<User, 'id' | 'message'>) => {
      const usersWithMessage = users.map((user) => {
        if (user.id === userMessage.id) {
          return { ...user, message: userMessage.message }
        }

        return user
      })

      setUsers(usersWithMessage)
    }

    const handleUserLeave = (user: Pick<User, 'id'>) => {
      const userIndex = users.findIndex((u) => u.id === user.id)

      if (userIndex !== -1) {
        const usersLeaveRemoved = users
          .slice(0, userIndex)
          .concat(users.slice(userIndex + 1))
          .filter((u) => !!u.id)

        setUsers(usersLeaveRemoved)
      }
    }

    socket.on('connect', handleSocketConnect)
    socket.on('user:new', handleUserNew)
    socket.on('user:move', handleUserMove)
    socket.on('user:color', handleUserColor)
    socket.on('user:message', handleUserMessage)
    socket.on('user:leave', handleUserLeave)

    return () => {
      socket.off('connect', handleSocketConnect)
      socket.off('user:new', handleUserNew)
      socket.off('user:move', handleUserMove)
      socket.off('user:color', handleUserColor)
      socket.off('user:message', handleUserMessage)
      socket.off('user:leave', handleUserLeave)
    }
  }, [currentUser, users])

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      const { scrollY, innerWidth } = window
      const centerX = Math.floor(innerWidth / 2)

      setCurrentUser((user) => ({
        ...user,
        pos: {
          x: ev.clientX - centerX,
          y: scrollY + ev.clientY
        }
      }))
    }

    const emitUserMove = throttle((ev: MouseEvent) => {
      const { scrollY, innerWidth } = window
      const centerX = Math.floor(innerWidth / 2)

      socket.emit('user:move', {
        x: ev.clientX - centerX,
        y: scrollY + ev.clientY
      })
    }, 50)

    window.addEventListener('mousemove', emitUserMove)
    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('mousemove', emitUserMove)
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return (
    <div className="RealtimeCursors">
      <h1>PRESS / TO CHAT</h1>
      <button onClick={() => setUsers([])}>Clear User</button>
      <select onChange={handleColorChange} defaultValue={currentUser.color}>
        {colors.map((color) => {
          return (
            <option key={color} value={color}>
              {color}
            </option>
          )
        })}
      </select>
      <pre style={{ fontSize: 'smaller' }}>
        {JSON.stringify({ currentUser, users }, null, 2)}
      </pre>
      {users.map((user) => {
        return (
          <div
            key={`${user.color}-${user.id}`}
            className={styles.cursor({
              color: user.color,
              smooth: true,
              typing: !!user.message
            })}
            style={
              {
                '--x': `${user.pos.x}px`,
                '--y': `${user.pos.y}px`
              } as CSSProperties
            }
          >
            <span className={styles.message}>{user.message}</span>
          </div>
        )
      })}
      <div
        className={styles.cursor({
          color: currentUser.color,
          typing: !!currentUser.message
        })}
        style={
          {
            '--x': `${currentUser.pos.x}px`,
            '--y': `${currentUser.pos.y}px`
          } as CSSProperties
        }
      >
        <span
          contentEditable
          role="textbox"
          spellCheck={false}
          ref={messageArea}
          className={styles.message}
          onInput={handleMessageChange}
        />
      </div>
    </div>
  )
}

export default RealtimeCursors
