<template>
  <Header
    v-if="!isLoading && user"
    :title="`#${user.id}`"
    btnLabel="Voltar"
    btnVariant="secondary"
    :goBack="goBack"
  />

  <UserDatails
    v-if="!isLoading && user && support"
    :user="user"
    :support="support"
  />

  <LoadingSpinner v-if="isLoading" />
</template>

<script setup>
import Header from "@/components/Header.vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";
import UserDatails from "@/components/UserDatails.vue";

import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const apiUrl = import.meta.env.VITE_API_URL;

const router = useRouter();
const route = useRoute();

const user = ref(null);
const support = ref(null);
const isLoading = ref(true);

const goBack = () => router.back();

const fetchUserData = async () => {
  try {
    const res = await fetch(`${apiUrl}/${route.params.id}`);
    const data = await res.json();

    user.value = data.data;
    support.value = data.support;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchUserData);
</script>
