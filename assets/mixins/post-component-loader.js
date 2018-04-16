export default {
  data() {
    return {
      postComponents: [],
      postComponentsLoaded: false
    }
  },
  async created() {
    // RelatedPosts.vue
    if (this.posts) {
      for (const post of this.posts) {
        await this.loadPostComponent(post.route)
      }
      if (this.postComponents.length ===
          this.posts.length) {
        this.postComponentsLoaded = true
      }
      // AbstractPage.vue
    } else {
      for (const postRoute of this.$store.state.routes.pages[this.page]) {
        await this.loadPostComponent(postRoute)
        if (this.postComponents.length ===
          this.$store.state.routes.pages[this.page].length) {
          this.postComponentsLoaded = true
        }
      }
    }


  },
  methods: {
    async loadPostComponent(postRoute) {
      const filename = this.routeToComponentFilename(postRoute)
      let esComponent = await import(`@/components/PromoCards/${filename}`)
      const component = {
        route: postRoute,
        component: esComponent.default
      }
      this.postComponents.push(component)
    },
    getPostComponent(postRoute) {
      const postComponent = this.postComponents.find(component => {
        return component.route === postRoute
      })

      if (postComponent) {
        return postComponent.component
      }
    },
    routeToComponentFilename(route) {
      let postFilename = route.split('-')
      postFilename = postFilename.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
      })
      postFilename = postFilename.join('')

      return postFilename
    }
  }
}