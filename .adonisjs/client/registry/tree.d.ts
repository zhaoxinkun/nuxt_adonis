/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  category: {
    index: typeof routes['category.index']
    store: typeof routes['category.store']
    show: typeof routes['category.show']
    update: typeof routes['category.update']
    destroy: typeof routes['category.destroy']
  }
  auth: {
    login: typeof routes['auth.login']
    register: typeof routes['auth.register']
  }
}
