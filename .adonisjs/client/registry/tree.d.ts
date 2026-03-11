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
    newAccount: {
      store: typeof routes['auth.new_account.store']
    }
    accessToken: {
      store: typeof routes['auth.access_token.store']
      destroy: typeof routes['auth.access_token.destroy']
    }
  }
  profile: {
    profile: {
      show: typeof routes['profile.profile.show']
    }
  }
}
