<template>
  <div
    :class="[
      'glass-morphism transition-all duration-300',
      hoverable && 'hover:transform hover:-translate-y-2 hover:shadow-glass-hover',
      colored && 'glass-green',
      className
    ]"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  hoverable?: boolean
  colored?: boolean
  className?: string
}

withDefaults(defineProps<Props>(), {
  hoverable: false,
  colored: false,
  className: ''
})
</script>

<style scoped>
.glass-morphism {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.glass-green {
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid rgba(0, 255, 136, 0.2);
}

.glass-morphism:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(0, 255, 136, 0.3);
  box-shadow: 0 25px 50px rgba(0, 255, 136, 0.2);
}

.glass-green:hover {
  background: rgba(0, 255, 136, 0.2);
  border-color: rgba(0, 255, 136, 0.4);
  box-shadow: 0 25px 50px rgba(0, 255, 136, 0.3);
}
</style>