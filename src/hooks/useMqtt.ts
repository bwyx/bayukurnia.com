import { useState, useEffect, useCallback } from 'react'

import type { MqttClient } from 'mqtt'

const useMqtt = (host: string, mqttOption: MqttClient['options']) => {
  const [client, setClient] = useState<MqttClient>()
  const [status, setStatus] = useState<
    | 'Connecting'
    | 'Reconnecting'
    | 'Connected'
    | 'Disconnecting'
    | 'Disconnected'
  >('Connecting')

  const connect = useCallback(() => {
    ;(async () => {
      const mqtt = (await import('mqtt')).default

      setStatus('Connecting')
      setClient(mqtt.connect(host, mqttOption))
    })()
  }, [host, mqttOption])

  const disconnect = useCallback(() => {
    if (client) {
      setStatus('Disconnecting')
      client.end()
      setStatus('Disconnected')
      console.log(`Disconnected from ${host}`)
    }
  }, [client, host])

  useEffect(() => {
    if (!client) return

    client.on('connect', () => {
      setStatus('Connected')
      console.log(`Connected to ${host}`)
    })
    client.on('error', (err) => {
      console.error('Connection error: ', err)
      client.end()
    })
    client.on('reconnect', () => {
      setStatus('Reconnecting')
    })
  }, [client, host])

  useEffect(() => {
    if (!client) return connect()

    return () => disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client])

  return { client, status }
}

export default useMqtt
