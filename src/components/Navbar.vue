<script>
  import Button from './Button.vue';

  export default {
    name: 'Navbar',
    components: {
      Button
    },
    methods: {
      handleClick() {
        // handle click event
      }
    }
  }
</script>

<template>
  <nav class="navbar">
    <img src="../assets/logo-dark.svg" alt="logo" />
    <Button color="primary" text="Get Started" variant="contained" />
  </nav>
</template>

<style>
  .navbar {
    @apply flex items-center justify-between mt-4 md:mt-6 mb-8;
  }
</style>