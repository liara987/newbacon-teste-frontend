<template>
  <div class="pagination">
    <ButtonBase
      :disabled="isFirstPage"
      :variant="isFirstPage ? 'secondary' : 'primary'"
      @click="goToPreviousPage"
    >
      Anterior
    </ButtonBase>

    <span>Página {{ currentPage }} de {{ totalPages }}</span>

    <ButtonBase
      :disabled="isLastPage"
      :variant="isLastPage ? 'secondary' : 'primary'"
      @click="goToNextPage"
    >
      Próxima
    </ButtonBase>
  </div>
</template>

<script setup>
import ButtonBase from "@/components/ButtonBase.vue";
import { computed } from "vue";

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["page-change"]);

const isFirstPage = computed(() => props.currentPage === 1);
const isLastPage = computed(() => props.currentPage === props.totalPages);

const goToPreviousPage = () => {
  if (!isFirstPage.value) {
    emit("page-change", props.currentPage - 1);
  }
};

const goToNextPage = () => {
  if (!isLastPage.value) {
    emit("page-change", props.currentPage + 1);
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}
</style>
