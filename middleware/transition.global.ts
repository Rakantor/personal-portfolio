export default defineNuxtRouteMiddleware((to, from) => {
  if (typeof to.meta.pageTransition === 'object' && typeof from.meta.pageTransition === 'object') {
    if (typeof to.meta.id !== 'number' || typeof from.meta.id !== 'number') return
    
    const transition = to.meta.id > from.meta.id ? 'slide-left' : 'slide-right'
    to.meta.pageTransition.name = from.meta.pageTransition.name = transition
  }
})