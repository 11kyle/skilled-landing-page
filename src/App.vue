<script setup>
  import Navbar from './components/Navbar.vue'
  import Hero from './components/Hero.vue'
  import Card from './components/Card.vue'
  import Footer from './components/Footer.vue'
</script>

<template>
  <div class="max-w-6xl px-4 mx-auto">
    <Navbar />
    <main>
      <Hero />
      <section class="flex justify-center flex-wrap md:gap-x-3 mb-20">
        <div class="bg-gradient-to-b from-skilled-graident-orange to-skilled-gradient-hot-pink text-skilled-white rounded-[10px] max-w-[350px] sm:w-[350px] px-7 py-7 mt-10 md:mt-14">
          <p class="heading-sm lg:heading-md font-extrabold">Check out our most popular courses!</p>
        </div>
        <Card 
          title="Animation" 
          description="Learn the latest animation techniques to create stunning motion design and captivate your audience." 
          src="/icon-animation.svg"
        />
        <Card 
          title="Design" 
          description="Create beautiful, usable interfaces to help shape the future of how the web looks." 
          src="/icon-design.svg"
        />
        <Card 
          title="Photography" 
          description="Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos." 
          src="/icon-photography.svg"
          />
        <Card 
          title="Crypto" 
          description="All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course." 
          src="/icon-crypto.svg"
          />
        <Card 
          title="Business" 
          description="A step-by-step playbook to help you start, scale, and sustain your business without outside investment." 
          src="/icon-business.svg"
          />
      </section>
    </main>
  </div>
  <Footer />
</template>

<style scoped>

</style>
