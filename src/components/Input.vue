<template>
  <div class="input-wrapper">
    <label v-if="label" class="input-label">
      {{ label }}
      <span v-if="isRequired" class="required">*</span>
    </label>

    <component
      :is="type === 'select' ? 'select' : 'input'"
      class="input"
      :value="modelValue"
      @input="updateValue"
      @change="updateValue"
      :placeholder="placeholder"
      v-bind="$attrs"
    >
      <template v-if="type === 'select'">
        <option disabled value="">{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </template>
    </component>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "text",
  },
  modelValue: String,
  placeholder: {
    type: String,
    default: "",
  },
  label: String,
  options: {
    type: Array,
    default: () => [],
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

function updateValue(event) {
  emit("update:modelValue", event.target.value);
}
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
}

.input-label {
  font-weight: 600;
  font-size: 1rem;
  color: var(--primary, #000000);
}

.input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--gray, #797979);
  border-radius: 0.5rem;
  font-size: 1rem;
  font-family: inherit;
  color: var(--primary, #000000);
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.input:focus {
  outline: none;
  border-color: var(--gray, #797979);
}

select.input {
  appearance: none;
  background-image: url("../assets/arrow-down.svg");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
  background-color: var(--secondary, #ffffff);
}

.required {
  color: var(--required, #ce0000);
  margin-left: 0.25rem;
  font-weight: 600;
}

@media (max-width: 600px) {
  .input {
    padding: 0.75rem;
    font-size: 0.95rem;
  }

  select.input {
    background-position: right 0.8rem center;
    background-size: 0.85rem;
  }
}
</style>
