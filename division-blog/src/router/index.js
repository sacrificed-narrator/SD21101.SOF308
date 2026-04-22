import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../store'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/post/:id', name: 'postDetail', component: () => import('../views/PostDetailView.vue') },
    { path: '/login', name: 'login', component: () => import('../views/LoginView.vue') },
    { path: '/register', name: 'register', component: () => import('../views/RegisterView.vue') },
    { 
      path: '/create-post', 
      name: 'createPost', 
      component: () => import('../views/CreatePostView.vue'),
      meta: { requiresAuth: true }
    },
    { 
      path: '/profile', 
      name: 'profile', 
      component: () => import('../views/ProfileView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

// Route Guard (Bảo vệ các route cần đăng nhập)
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.user) {
    next('/login')
  } else {
    next()
  }
})

export default router
