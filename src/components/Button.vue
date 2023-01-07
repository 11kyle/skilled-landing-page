<script>
  export default {
    name: "Button",
    props: {
      text: {
        type: String,
        required: true
      },
      variant: {
        type: String,
        default: 'text',
        validator: (value) => ['text', 'contained', 'outlined'].includes(value)
      },
      color: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'success', 'warning', 'error', 'info'].includes(value)
      }
    },
    computed: {
      buttonClasses() {
        return {
          'button-text': this.variant === 'text',
          'button-contained': this.variant === 'contained',
          'button-outlined': this.variant === 'outlined',
          [`btn-${this.color}`]: true,
          // 'btn-primary': this.color === 'primary',
          // 'btn-secondary': this.color === 'secondary',
          // 'btn-info': this.color === 'success'
          // 'btn-primary': this.color === 'warning',
          // 'btn-secondary': this.color === 'error',
          // 'btn-info': this.color === 'info'
        }
      }
    },
    methods: {
      handleClick() {
        this.$emit('click')
      }
    }
  }
</script>

<template>
  <button class="button" :class="buttonClasses" @click="handleClick">
    {{ text }}
  </button>
</template>

<style>
  .button {
    /* button styles */
    @apply hover:opacity-50;
  }
  .button-text {
    @apply font-bold text-[18px] leading-[28px] p-0;
  }
  .button-contained {
    @apply font-bold text-[16px] leading-[28px] rounded-[28px] px-6 py-2;
  }
  .button-outlined {
    /* styles for outlined buttons */
  }
  .btn-primary {
    @apply bg-skilled-dark-blue text-skilled-white;
  }
  .btn-secondary {
    @apply bg-gradient-to-b from-skilled-graident-orange to-skilled-gradient-hot-pink text-skilled-white;
  }
  .btn-success {
    @apply bg-gradient-to-b from-skilled-gradient-purple to-skilled-gradient-pink text-skilled-white;
  }
  .btn-warning {
    /* styles for warning buttons */
  }
  .btn-error {
    /* styles for error buttons */
  }
  .btn-info {
    @apply text-[#F74780];
  }
</style>