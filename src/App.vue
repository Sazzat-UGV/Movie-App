<script setup>

</script>

<template>
  <header>
    <router-link :to="{ name: 'home' }">
      <h1>Movies <span>App</span></h1>
    </router-link>
  </header>
  <main>
    <router-view> </router-view>
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  &::selection {
    background: transparentize($color: #34d399, $amount: 0.5);
  }
}

body {
  background-color: #4b5563;
}
a {
  text-decoration: none;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #1e293b;
  box-shadow: 0px 0px 6px rgba($color: #000000, $alpha: 0.1);
  h1 {
    color: #fff;
    font-size: 26px;
  
    span{
      color: #34d399;
    }
  }
}
</style>
