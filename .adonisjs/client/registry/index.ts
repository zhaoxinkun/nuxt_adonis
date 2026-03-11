/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'category.index': {
    methods: ["GET","HEAD"],
    pattern: '/category',
    tokens: [{"old":"/category","type":0,"val":"category","end":""}],
    types: placeholder as Registry['category.index']['types'],
  },
  'category.store': {
    methods: ["POST"],
    pattern: '/category',
    tokens: [{"old":"/category","type":0,"val":"category","end":""}],
    types: placeholder as Registry['category.store']['types'],
  },
  'category.show': {
    methods: ["GET","HEAD"],
    pattern: '/category/:id',
    tokens: [{"old":"/category/:id","type":0,"val":"category","end":""},{"old":"/category/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['category.show']['types'],
  },
  'category.update': {
    methods: ["PUT","PATCH"],
    pattern: '/category/:id',
    tokens: [{"old":"/category/:id","type":0,"val":"category","end":""},{"old":"/category/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['category.update']['types'],
  },
  'category.destroy': {
    methods: ["DELETE"],
    pattern: '/category/:id',
    tokens: [{"old":"/category/:id","type":0,"val":"category","end":""},{"old":"/category/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['category.destroy']['types'],
  },
  'auth.new_account.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/signup',
    tokens: [{"old":"/api/v1/auth/signup","type":0,"val":"api","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['auth.new_account.store']['types'],
  },
  'auth.access_token.store': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.access_token.store']['types'],
  },
  'auth.access_token.destroy': {
    methods: ["POST"],
    pattern: '/api/v1/auth/logout',
    tokens: [{"old":"/api/v1/auth/logout","type":0,"val":"api","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.access_token.destroy']['types'],
  },
  'profile.profile.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/account/profile',
    tokens: [{"old":"/api/v1/account/profile","type":0,"val":"api","end":""},{"old":"/api/v1/account/profile","type":0,"val":"v1","end":""},{"old":"/api/v1/account/profile","type":0,"val":"account","end":""},{"old":"/api/v1/account/profile","type":0,"val":"profile","end":""}],
    types: placeholder as Registry['profile.profile.show']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
