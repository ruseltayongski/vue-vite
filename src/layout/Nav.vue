<script setup lang="ts">
    import { useRouter } from "vue-router";
    const path = useRouter().currentRoute._value.path
    console.log(path)
</script>
<template>
    <nav id="navbar" class="navbar">
        <ul>
            <li><router-link to="/" :class="{ 'active': path === '/' }">Home</router-link></li>
            <li><router-link to="/about" :class="{ 'active': path === '/about' }">About</router-link></li>
            <li><router-link to="/services" :class="{ 'active': path === '/services' }">Services</router-link></li>
            <li><router-link to="/portfolio" :class="{ 'active': path === '/portfolio' }">Portfolio</router-link></li>
            <li><router-link to="/team" :class="{ 'active': path === '/team' }">Team</router-link></li>
            <li><router-link to="/blog" :class="{ 'active': path === '/blog' }">Blog</router-link></li>
            <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                <li><a href="#">Dropdown 1</a></li>
                <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                    </ul>
                </li>
                <li><a href="#">Dropdown 2</a></li>
                <li><a href="#">Dropdown 3</a></li>
                <li><a href="#">Dropdown 4</a></li>
                </ul>
            </li>
            <li><router-link to="/contact" :class="{ 'active': path === '/contact' }">Contact</router-link></li>
        </ul>
    </nav><!-- .navbar -->
</template>