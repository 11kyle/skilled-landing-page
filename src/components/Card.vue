<script>
  import Button from './Button.vue';
  export default {
    name: 'Card',
    props: {
      title: {
        type: String,
      },
      description: {
        type: String
      },
      src: {
        type: String
      }
    },
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
  <div class="card">
    <img class="absolute top-0 -translate-y-1/2" :src="src" alt="business icon" />
    <h1 class="text-skilled-dark-blue font-extrabold heading-sm mb-4">{{ title }}</h1>
    <p class="text-[#83869A] font-medium body-sm mb-6">{{ description }}</p>
    <Button 
      variant="text" 
      color="info" 
      text="Get Started" 
      @click="handleClick" 
    />
  </div>
</template>

<style>
  .card {
    @apply relative bg-skilled-white rounded-[10px] max-w-[350px] px-7 pt-14 pb-8 mt-10 md:mt-14;
  }
</style>