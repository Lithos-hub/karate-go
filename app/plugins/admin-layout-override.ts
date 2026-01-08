export default defineNuxtPlugin({
  name: 'site-layout-override',
  setup() {
    const router = useRouter()

    router.beforeEach((to) => {
      if (to.path.startsWith('/site')) {
        to.meta.layout = 'site'
      }
    })
  }
})
