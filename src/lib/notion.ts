import { Client } from '@notionhq/client'

export default new Client({ auth: process.env.NOTION_API_KEY })
