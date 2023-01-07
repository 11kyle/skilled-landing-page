<script>
  import Button from './Button.vue';

  export default {
    name: 'Footer',
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
    <div class="footer">
      <div class="place-self-center flex items-center justify-between w-full max-w-6xl">
        <img src="../assets/logo-light.svg" alt="logo" />
        <Button color="success" text="Get Started" variant="contained" />
      </div>
    </div>
</template>

<style>
  .footer {
    @apply grid bg-[#13183F] w-full h-32 px-4;
  }
</style>