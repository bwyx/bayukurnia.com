const avatar = {
  blurDataURL:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVQImQE0AMv/AAUEDwEACSsrM7W1xACSk6L/+/neyshtbnwASUpW9uXmrpuYFxgfAEE/QjAqMQEAByMjKRJ7Evg6EQWIAAAAAElFTkSuQmCC',
  src: '/images/bayukurnia.png',
  type: 'png',
  alt: "Bayu Kurnia's Avatar"
}

const chat = {
  host: process.env.NEXT_PUBLIC_CHAT_HOST as string,
  port: Number(process.env.NEXT_PUBLIC_CHAT_PORT),
  path: process.env.NEXT_PUBLIC_CHAT_PATH as string,
  username: process.env.NEXT_PUBLIC_CHAT_USERNAME as string,
  password: process.env.NEXT_PUBLIC_CHAT_PASSWORD as string
}

const config = { chat, avatar }
export default config
