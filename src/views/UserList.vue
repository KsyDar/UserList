<template>
  <div class="title-wrapper">
    <h1 class="title">Список пользователей</h1>
  </div>
  <div class="userlist-wrapper">
    <ul class="userlist">
      <li class="userlist__item-wrapper " v-for="user of users" :key="user.id">
        <UserListItem :user="user" />
        <router-link :to="{ name: 'Profile', params: { id: user.id } }">
          <button class="userlist__button">Просмотр</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onBeforeMount, onUpdated } from "vue";
import axios from "axios";
import UserListItem from "../components/UserListItem.vue";
export default {
  name: "UserList",
  components: ["UserListItem"],
  setup() {
    const users = ref([]);
    const getUsers = async () => {
      const res = await axios.get("http://localhost:3000/users");
      users.value = res.data;
    };

    onBeforeMount(getUsers);
    onUpdated(getUsers);

    return {
      users,
      getUsers
    };
  },
  components: { UserListItem },
};
</script>

<style>
.title-wrapper {
  width: 100%;
  background: #6aaae2;
  margin: 0;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  color: #fff;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
}

.userlist-wrapper {
  background: #fff;
  min-height: calc(100vh - 3.5rem);
}

.userlist {
  padding: 0;
  margin: 1rem 2rem;
  width: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #385d7e;
  font-weight: 500;
}

.userlist__item-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: solid 1px #6aaae2;
  padding: 0;
}

.userlist__button {
  background: #6aaae2;
  border: none;
  border-radius: .5rem;
  width: 6rem;
  height: 2rem;
  color: #fff;
  font-weight: 600;
  padding: 0 1rem;
}

.userlist__button:hover {
  cursor: pointer;
  background: #0e7bda;
}
</style>