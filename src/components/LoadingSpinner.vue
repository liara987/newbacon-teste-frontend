<template>
  <div class="spinner-wrapper">
    <svg viewBox="0 0 100 100" class="circle-text">
      <path
        id="circlePath"
        d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
        fill="none"
      />
      <text dy="5">
        <textPath href="#circlePath" startOffset="0%">
          {{ repeatedText }}
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script setup>
const baseText = "Carregando • ";
const repeatedText = baseText.repeat(5);
</script>

<style scoped>
.spinner-wrapper {
  width: 100px;
  height: 100px;
  display: inline-block;
  position: relative;
}

.circle-text {
  animation: rotate 4s linear infinite;
  width: 100px;
  height: 100px;
}

text {
  font-size: 0.3rem;
  letter-spacing: 0.01rem;
  text-transform: uppercase;
  fill: var(--primary, #000);
}

@keyframes rotate {
  0% {
    transform: rotate(0turn);
  }
  100% {
    transform: rotate(1turn);
  }
}
</style>
