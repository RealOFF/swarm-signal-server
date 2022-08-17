import { WebSocketServer } from 'ws'
import 'dotenv/config'

import { UWebSocket } from './handleSignal'
import handleSignal from './handleSignal'
import validateInit from './validateInit'

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000

const wss: any = new WebSocketServer({ port: PORT })

wss.on('connection', (connection: any) => {
  connection.on('message', (message: any) => {
    const parsedMessage = JSON.parse(message)
    if (validateInit(connection as UWebSocket, parsedMessage)) {
      handleSignal(connection as UWebSocket, parsedMessage)
    }
  })
})

wss.on('listening', () => {
  console.log("Server started...")
})
