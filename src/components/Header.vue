<template>
  <header class="app-header">
    <h1 class="title">
      <a href="/">{{ appTitle }}</a>
    </h1>
    <ul class="flex">
      <li class="menu-item" v-for="(item, index) in menu">
        <a
          :key="`menu-header-item-${index}`"
          class="menu-item-link"
          :href="item.link"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
  </header>
</template>

<script setup lang="ts">
interface MenuItemI {
  title: string;
  link: string;
  icon?: string;
}

const menu: MenuItemI[] = [
  { title: 'About app', link: '/about' },
  { title: 'Github', link: 'https://github.com/Trajanesco/abireader' }
];

const appTitle: string = 'ABIreader';
</script>

<style scoped>
.title {
  font-size: 2rem;
  font-weight: 300;
}
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-item {
  margin-left: var(--base-space);
  margin-right: var(--base-space);
}
.menu-item-link {
  padding: var(--base-space);
}
</style>
