<template>
  <Header
    :toggleButton="toggleCreateUser"
    :btnLabel="buttonLabel"
    :btnVariant="buttonVariant"
  />

  <EditUser
    v-if="isCreating"
    :user="selectedUser"
    @updated="handleUserUpdated"
    @create="handleUserCreated"
  />

  <div v-if="!isLoading" class="user-list-wrapper">
    <UserListItem
      v-for="user in users"
      :key="user.id"
      :id="user.id"
      :name="`${user.first_name} ${user.last_name}`"
      :email="user.email"
      :avatar="user.avatar"
      :onEdit="() => handleEditUser(user)"
      :onDelete="() => handleDeleteUser(user.id)"
    />
  </div>

  <LoadingSpinner v-else class="center-item" />

  <Pagination
    :currentPage="currentPage"
    :totalPages="totalPages"
    @page-change="fetchUsers"
  />
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

import EditUser from "@/components/EditUser.vue";
import Header from "@/components/Header.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import Pagination from "@/components/Pagination.vue";
import UserListItem from "@/components/UserListItem.vue";

const apiUrl = import.meta.env.VITE_API_URL;
const fakeImageURL = "https://i.pravatar.cc";

const isCreating = ref(false);
const users = ref([]);
const selectedUser = ref(null);
const currentPage = ref(1);
const totalPages = ref(1);
const isLoading = ref(false);

const buttonLabel = computed(() =>
  isCreating.value ? "Cancelar" : "Novo usuário"
);

const buttonVariant = computed(() =>
  isCreating.value ? "secondary" : "primary"
);

onMounted(() => {
  fetchUsers();
});

function toggleCreateUser() {
  isCreating.value = !isCreating.value;
}

function handleEditUser(user) {
  selectedUser.value = user;
  isCreating.value = true;
}

function handleUserUpdated(updatedUser) {
  const index = users.value.findIndex((u) => u.id === updatedUser.id);
  if (index !== -1) users.value[index] = updatedUser;

  resetForm();
}

function resetForm() {
  isCreating.value = false;
  selectedUser.value = null;
}

async function handleUserCreated(newUser) {
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    await res.json();

    const fakeId = Date.now();
    users.value.push({
      id: fakeId,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: `${newUser.first_name.toLowerCase()}.${newUser.last_name.toLowerCase()}@reqres.in`,
      avatar: `${fakeImageURL}/150?u=${fakeId}`,
    });

    resetForm();
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
  }
}

async function handleDeleteUser(id) {
  try {
    const res = await fetch(`${apiUrl}/${id}`, {
      method: "DELETE",
    });

    if (res.status === 204) {
      users.value = users.value.filter((user) => user.id !== id);
    } else {
      console.error("Erro ao deletar o usuário");
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
}

async function fetchUsers(page = 1) {
  try {
    isLoading.value = true;
    const response = await fetch(`${apiUrl}?page=${page}`);
    const data = await response.json();

    users.value = data.data;
    currentPage.value = data.page;
    totalPages.value = data.total_pages;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
  } finally {
    isLoading.value = false;
  }
}
</script>

<style>
.user-list-wrapper > .user-card {
  margin-bottom: 0.94rem;
}

.user-list-wrapper > .user-card:last-child {
  margin-bottom: 0;
}

.center-item {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
</style>
