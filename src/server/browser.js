import { setupWorker } from 'msw/browser'
import { handlers } from './index'  // Note: we'll create this file next

export const worker = setupWorker(...handlers) 