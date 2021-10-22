<template>
  <section class="spinner">
    <div class="spin"></div>
  </section>
</template>

<style scoped>
.spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
  .spin {
    width: 50px;
    height: 50px;
    margin: 25px;
    border: 1px solid transparent;
    border-radius: 50%;
    border-top-color: #000;
    border-bottom-color: #000;
    animation: spin 1s ease infinite;
  }

@keyframes spin {
  100% { transform: rotateZ(360deg); }
}
</style>