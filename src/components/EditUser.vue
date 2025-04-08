<template>
  <div class="edit-user-wrapper">
    <Input
      label="Nome do usuário"
      type="text"
      placeholder="Digite o nome completo do usuário"
      v-model="name"
      :isRequired="true"
    />

    <Input
      label="Função do usuário"
      type="select"
      :options="roles"
      placeholder="Selecione a função"
      v-model="role"
    />

    <ButtonBase :full="true" @click="saveUser"
      >Salvar dados do usuário</ButtonBase
    >
  </div>
</template>

<script setup>
import { defineEmits, ref, watch } from "vue";

import ButtonBase from "@/components/ButtonBase.vue";
import Input from "@/components/Input.vue";

const apiUrl = import.meta.env.VITE_API_URL;

const roles = [
  { label: "Desenvolvedor", value: "desenvolvedor" },
  { label: "Gerente de Projetos", value: "gerente-de-projetos" },
  { label: "Tech Lead", value: "tech-lead" },
  { label: "UI/UX Designer", value: "ui-ux-designer" },
];

const emit = defineEmits(["updated", "create"]);

const props = defineProps({
  user: Object,
});

const name = ref("");
const role = ref("");

watch(
  () => props.user,
  (newUser) => {
    if (newUser) {
      name.value = newUser.first_name + " " + newUser.last_name;
      role.value = newUser.job || "";
    } else {
      name.value = "";
      role.value = "";
    }
  },
  { immediate: true }
);

async function saveUser() {
  try {
    const [first_name, ...lastParts] = name.value.split(" ");
    const last_name = lastParts.join(" ");

    if (!first_name) {
      alert("Não tem como salvar Usuário sem nome");
      return;
    }

    const userPayload = {
      first_name,
      last_name,
      job: role.value,
    };

    if (props.user) {
      const res = await fetch(`${apiUrl}/${props.user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userPayload),
      });

      const updated = await res.json();

      emit("updated", {
        id: props.user.id,
        first_name,
        last_name,
        email: props.user.email,
        avatar: props.user.avatar,
        job: role.value,
      });
    } else {
      emit("create", userPayload);
    }
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
  }
}
</script>

<style scoped>
.edit-user-wrapper > .input-wrapper {
  margin-bottom: 1.5rem;
}

.btn {
  margin-bottom: 2.5rem;
}
</style>
