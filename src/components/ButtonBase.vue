<template>
  <button class="btn" :class="[variant, { full }]" @click="onClick">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  onClick: {
    type: Function,
    default: () => {},
  },
  full: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.btn {
  padding: 1.2rem 2.5rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: 600;
  font-size: 0.93rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
}

.primary {
  background-color: var(--primary);
  color: var(--secondary, #ffffff);
}

.secondary {
  background-color: var(--light-gray, #f7f7f7);
  color: var(--primary, #000000);
}

.full {
  width: 100%;
  display: block;
}

.disabled {
  background-color: red;
}
</style>
