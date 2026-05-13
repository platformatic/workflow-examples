import { createGateway } from '@ai-sdk/gateway'

const gateway = createGateway({
  apiKey: process.env.AI_GATEWAY_API_KEY,
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
globalThis.AI_SDK_DEFAULT_PROVIDER = gateway as any
