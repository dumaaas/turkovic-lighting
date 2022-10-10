import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({
      behavior: 'smooth'
    });
  },
  routes: [{
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'TURKOVIC LIGHTING',
        metaTags: [{
            name: 'description',
            content: 'TURKOVIC LIGHTING - Home page.'
          },
          {
            property: 'og:description',
            content: 'TURKOVIC LIGHTING - Home page.'
          },
          {
            property: 'keywords',
            content: 'website, turkovic-lighting, home, page, led, lights, neon'
          },
          {
            name: "robots",
            content: "index, follow"
          }
        ]
      }
    },
    {
      path: '/configurator',
      name: 'configurator',
      component: () => import('../views/ConfiguratorView.vue'),
      meta: {
        transition: 'slide-left',
        title: 'TURKOVIC LIGHTING | CONFIGURATOR',
        metaTags: [{
            name: 'description',
            content: 'TURKOVIC LIGHTING - Configurator page.'
          },
          {
            property: 'og:description',
            content: 'TURKOVIC LIGHTING - Configurator page.'
          },
          {
            property: 'keywords',
            content: 'website, turkovic-lighting, configurator, page, led, lights, neon'
          },
          {
            name: "robots",
            content: "index, follow"
          }
        ]
      },

    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        transition: 'slide-left',
        title: 'TURKOVIC LIGHTING | CONTACT',
        metaTags: [{
            name: 'description',
            content: 'TURKOVIC LIGHTING - Contact page.'
          },
          {
            property: 'og:description',
            content: 'TURKOVIC LIGHTING - Contact page.'
          },
          {
            property: 'keywords',
            content: 'website, turkovic-lighting, contact, page, led, lights, neon'
          },
          {
            name: "robots",
            content: "index, follow"
          }
        ]
      }
    },
    {
      path: '/products/:name',
      name: 'products',
      component: () => import('../views/ProductView.vue'),
      meta: {
        transition: 'slide-left',
        title: 'TURKOVIC LIGHTING | PRODUCTS',
        metaTags: [{
            name: 'description',
            content: 'TURKOVIC LIGHTING - Prodcuts page.'
          },
          {
            property: 'og:description',
            content: 'TURKOVIC LIGHTING - Prodcuts page.'
          },
          {
            property: 'keywords',
            content: 'website, turkovic-lighting, products, page, led, lights, neon'
          },
          {
            name: "robots",
            content: "index, follow"
          }
        ]
      },
    },
    {
      path: '/decors',
      name: 'decors',
      component: () => import('../views/DecorsView.vue'),
      meta: {
        transition: 'slide-left',
        title: 'TURKOVIC LIGHTING | DECORS',
        metaTags: [{
            name: 'description',
            content: 'TURKOVIC LIGHTING - Decors page.'
          },
          {
            property: 'og:description',
            content: 'TURKOVIC LIGHTING - Decors page.'
          },
          {
            property: 'keywords',
            content: 'website, turkovic-lighting, decors, page, led, lights, neon'
          },
          {
            name: "robots",
            content: "index, follow"
          }
        ]
      },
    },
    {
      path: '/applications',
      name: 'applications',
      component: () => import('../views/ApplicationsView.vue'),
      meta: {
        transition: 'slide-left',
        title: 'TURKOVIC LIGHTING | APPLICATIONS',
        metaTags: [{
            name: 'description',
            content: 'TURKOVIC LIGHTING - Applications page.'
          },
          {
            property: 'og:description',
            content: 'TURKOVIC LIGHTING - Applications page.'
          },
          {
            property: 'keywords',
            content: 'website, turkovic-lighting, applications, page, led, lights, neon'
          },
          {
            name: "robots",
            content: "index, follow"
          }
        ]
      },
    }
  ]
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router