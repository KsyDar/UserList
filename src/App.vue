<template>
  <router-view></router-view>
</template>

<script>
import UserList from "./views/UserList.vue";
export default {
  components: { UserList },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
