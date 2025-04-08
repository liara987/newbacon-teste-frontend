<template>
  <header class="header">
    <h1 class="title">{{ title }}</h1>
    <ButtonBase
      @click="
        toggleButton?.();
        goBack?.();
      "
      :variant="btnVariant"
    >
      {{ btnLabel }}
    </ButtonBase>
  </header>
</template>

<script setup>
import ButtonBase from "@/components/ButtonBase.vue";

defineProps({
  title: {
    type: String,
    default: "Usuários",
  },
  btnLabel: {
    type: String,
    default: "Novo usuário",
  },
  btnVariant: {
    type: String,
    default: "primary",
  },
  toggleButton: Function,
  goBack: Function,
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
}

.title {
  font-size: 3.13rem;
  font-weight: 700;
  margin: 0;
  flex: 1;
}

@media (max-width: 600px) {
  .header {
    place-content: center;
  }

  .title {
    font-size: 2rem;
    text-align: center;
  }
}
</style>
