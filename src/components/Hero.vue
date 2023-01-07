<script>
  import Button from './Button.vue';

  export default {
    name: 'Hero',
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
  <section class="relative overflow-x-hidden">
    <div class="md:max-w-[446px] lg:max-w-[457px] mb-16 md:my-36 lg:my-56 mx-auto md:mx-0">
      <h1 class="heading-lg text-skilled-dark-blue lg:heading-xl font-extrabold">Maximize skill, minimize budget</h1>
      <p class="text-skilled-gray font-medium body-sm md:body-md mt-6 lg:mt-7 mb-6 lg:mb-10">Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
      <Button text="Get Started" variant="contained" color="secondary" />
    </div>
    <div class="md:absolute md:top-1/3 md:-translate-y-1/2 md:right-0 md:translate-x-[45%] lg:translate-x-[40%] lg:-translate-y-[45%]">
      <picture>
        <source media="(min-width: 1024px)" srcset="../assets/image-hero-desktop.webp" />
        <source media="(min-width: 768px)" srcset="../assets/image-hero-tablet.webp" />
        <img class="mx-auto" src="../assets/image-hero-mobile.webp" alt="woman drinking coffee" />
      </picture>
    </div>
  </section>
</template>

<style>

</style>