import { RedisPubSub } from 'graphql-redis-subscriptions'
import Redis from 'ioredis'

const HOST = process.env.REDIS_HOST || '127.0.0.1'
const PORT = parseInt(process.env.REDIS_PORT ? process.env.REDIS_PORT : '6379')
const options = {
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD
}

let pubsub: RedisPubSub | undefined
const getPubSub = () => {
  if (!pubsub) {
    pubsub = new RedisPubSub({
      publisher: new Redis(PORT, HOST, options),
      subscriber: new Redis(PORT, HOST, options)
    })
  }
  return pubsub
}
export default getPubSub
