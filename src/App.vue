<style>
@import "./styles/variables.css";

.wrapper {
  width: 100%;
  max-width: 600px;
  margin: 6rem auto 1rem auto;
  padding: 0 1rem;

  @media (max-width: 600px) {
    & {
      max-width: 100%;
    }
  }
}
</style>

<template>
  <div class="wrapper">
    <router-view />
  </div>
</template>
