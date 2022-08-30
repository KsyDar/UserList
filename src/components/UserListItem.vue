<template>
  <div>
    <p class="list-item__name">{{user.id}}. {{ user.name }}</p>
  </div>
</template>

<script>
export default {
  name: "UserListItem",
  props: {
    user: Object,
  },
};
</script>

<style>
</style>