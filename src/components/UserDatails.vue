<template>
  <div class="user-details">
    <div class="row">
      <img
        :src="user.avatar"
        :alt="`Avatar de ${user.first_name || 'usuário'}`"
        class="avatar"
      />

      <div class="column">
        <label>Primeiro nome</label>
        <p>{{ user.first_name }}</p>
      </div>

      <div class="column">
        <label>Último nome</label>
        <p>{{ user.last_name }}</p>
      </div>
    </div>

    <div class="info">
      <label>Endereço de e-mail</label>
      <p class="value">{{ user.email }}</p>

      <label>Link do avatar</label>
      <p class="value">{{ user.avatar }}</p>

      <label>Link de suporte</label>
      <p class="value">{{ support.url }}</p>

      <label>Descrição do usuário</label>
      <p class="value">{{ support.text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: Object,
    required: true,
  },
  support: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.user-details {
  display: flex;
  flex-direction: column;
}

.avatar {
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 5px;
  margin-right: 2.1rem;
}

.row {
  display: flex;
  align-items: center;
  margin-bottom: 1.9rem;
}

.column {
  justify-content: start;

  &:first-of-type {
    margin-right: 2.1rem;
  }
}

label {
  font-weight: 400;
  color: var(--gray, #797979);
  font-size: 14px;
}

.info > p {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.value,
p {
  margin-top: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  word-break: break-word;
}
</style>
