import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'category.index': { paramsTuple?: []; params?: {} }
    'category.store': { paramsTuple?: []; params?: {} }
    'category.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'category.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'category.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.register': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'category.index': { paramsTuple?: []; params?: {} }
    'category.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'category.index': { paramsTuple?: []; params?: {} }
    'category.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'category.store': { paramsTuple?: []; params?: {} }
    'auth.login': { paramsTuple?: []; params?: {} }
    'auth.register': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'category.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'category.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'category.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}