const sendSignal = (socket: WebSocket, signal: object) => {
  socket.send(JSON.stringify(signal))
}

export default sendSignal
