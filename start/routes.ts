/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
// import { controllers } from '#generated/controllers'

// 按需加载
const CategoriesController = () => import('#controllers/categories_controller')
const AuthController = () => import('#controllers/auth_controller')
const ArticlesController = () => import('#controllers/articles_controller')

router.get('/', () => {
  return { hello: 'world' }
})

// 1. 单独配置路由
// router.get('/category', () => {
//   return {
//     hello: "category",
//   }
// })

// 2. 直接把控制器配过来,使用控制器路由
router
  .resource('category', CategoriesController)
  .apiOnly()
  .use(['store', 'destroy', 'update'], [middleware.auth(), middleware.admin()]) //使用中间件验证是否登陆

// 3. 配置auth路由组
router
  .group(() => {
    router.post('login', [AuthController, 'login'])
    router.post('register', [AuthController, 'register'])
  })
  .prefix('/auth')

router
  .resource('article', ArticlesController)
  .apiOnly()
  .use(['store', 'destroy', 'update'], [middleware.auth(), middleware.admin()])
// router
//   .group(() => {
//     router
//       .group(() => {
//         router.post('signup', [controllers.NewAccount, 'store'])
//         router.post('login', [controllers.AccessToken, 'store'])
//         router.post('logout', [controllers.AccessToken, 'destroy']).use(middleware.auth())
//       })
//       .prefix('auth')
//       .as('auth')
//
//     router
//       .group(() => {
//         router.get('/profile', [controllers.Profile, 'show'])
//       })
//       .prefix('account')
//       .as('profile')
//       .use(middleware.auth())
//   })
//   .prefix('/api/v1')
