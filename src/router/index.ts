import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Services from '@/views/Services.vue'
import Portfolio from '@/views/Portfolio.vue'
import Team from '@/views/Team.vue'
import Blog from '@/views/Blog.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/services', name: 'Services', component: Services },
        { path: '/portfolio', name: 'Portfolio', component: Portfolio },
        { path: '/team', name: 'Team', component: Team },
        { path: '/blog', name: 'Blog', component: Blog },
        { path: '/contact', name: 'Contact', component: Contact },
    ]
})

export default router