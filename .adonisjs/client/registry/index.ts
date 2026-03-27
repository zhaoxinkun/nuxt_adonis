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
  'auth.login': {
    methods: ["POST"],
    pattern: '/auth/login',
    tokens: [{"old":"/auth/login","type":0,"val":"auth","end":""},{"old":"/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'auth.register': {
    methods: ["POST"],
    pattern: '/auth/register',
    tokens: [{"old":"/auth/register","type":0,"val":"auth","end":""},{"old":"/auth/register","type":0,"val":"register","end":""}],
    types: placeholder as Registry['auth.register']['types'],
  },
  'article.index': {
    methods: ["GET","HEAD"],
    pattern: '/article',
    tokens: [{"old":"/article","type":0,"val":"article","end":""}],
    types: placeholder as Registry['article.index']['types'],
  },
  'article.store': {
    methods: ["POST"],
    pattern: '/article',
    tokens: [{"old":"/article","type":0,"val":"article","end":""}],
    types: placeholder as Registry['article.store']['types'],
  },
  'article.show': {
    methods: ["GET","HEAD"],
    pattern: '/article/:id',
    tokens: [{"old":"/article/:id","type":0,"val":"article","end":""},{"old":"/article/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['article.show']['types'],
  },
  'article.update': {
    methods: ["PUT","PATCH"],
    pattern: '/article/:id',
    tokens: [{"old":"/article/:id","type":0,"val":"article","end":""},{"old":"/article/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['article.update']['types'],
  },
  'article.destroy': {
    methods: ["DELETE"],
    pattern: '/article/:id',
    tokens: [{"old":"/article/:id","type":0,"val":"article","end":""},{"old":"/article/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['article.destroy']['types'],
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
