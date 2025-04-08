<template>
  <div class="user-card">
    <span class="left-black-bar"></span>

    <div class="user-data">
      <img :src="avatar" alt="Foto do usuário" class="avatar" />

      <div class="info">
        <span class="id">#{{ id }}</span>
        <h2 class="name">{{ name }}</h2>
        <p class="email">{{ email }}</p>
      </div>
    </div>

    <div class="actions">
      <button @click="onEdit" title="Editar">
        <img :src="edit" alt="Ícone de lápis para edição" />
      </button>

      <button @click="onDelete" title="Excluir">
        <img :src="trash" alt="Ícone de lixeira para excluir" />
      </button>

      <button @click="handleView" title="Visualizar">
        <img :src="eye" alt="Ícone de olho para visualizar" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import edit from "../assets/edit.svg";
import eye from "../assets/eye.svg";
import trash from "../assets/trash.svg";

const router = useRouter();

const props = defineProps({
  id: Number,
  name: String,
  email: String,
  avatar: String,
  onEdit: Function,
  onDelete: Function,
  onView: Function,
});

const handleView = () => {
  if (props.onView) {
    props.onView(props.id);
  } else {
    router.push(`/user/${props.id}`);
  }
};
</script>

<style scoped>
.user-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--light-gray, #f7f7f7);
  padding: 1.25rem 1.88rem;
  border-radius: 0.5rem;
  gap: 1rem;
  flex-wrap: wrap;
}

.left-black-bar {
  position: absolute;
  left: -4px;
  top: 20px;
  background-color: var(--primary, #000000);
  width: 4px;
  height: 20px;
}

.user-data {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 250px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 1.5rem;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > h2 {
    margin-bottom: 0.5rem;
  }
}

.id {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--gray, #797979);
  font-weight: 400;
}

.name {
  margin: 0;
  font-size: 1.12rem;
  font-weight: 600;
  color: var(--primary, #000000);
}

.email {
  font-size: 0.875rem;
  color: var(--gray, #797979);
  margin: 0;
}

.actions {
  display: flex;
  gap: 0.5rem;
  margin-left: 4.75rem;
}

.actions button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  transition: transform 0.2s ease;
}

.actions button:hover {
  transform: scale(1.1);
}

@media (max-width: 600px) {
  .user-card {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  .user-data {
    flex-direction: row;
    width: 100%;
    align-items: center;
  }

  .avatar {
    width: 60px;
    height: 60px;
    margin-right: 1rem;
  }

  .name {
    font-size: 1rem;
  }

  .email {
    font-size: 0.8rem;
  }

  .actions {
    justify-content: left;
    width: 100%;
  }

  .left-black-bar {
    top: 15px;
  }
}
</style>
