<template>
  <div class="profile-wrapper">
    <div class="profile__information">
      <div class="profile__information-changeable">
        <label class="change-profile__label">
          Имя:
          <input type="text" class="change-profile" v-model="user.name" />
        </label>
        <label class="change-profile__label">
          Возраст:
          <input type="text" class="change-profile" v-model="user.age" />
        </label>
        <label class="change-profile__label">
          О себе:
          <textarea
            cols="30"
            rows="10"
            class="change-profile change-profile--description"
            v-model="user.description"
          ></textarea>
        </label>
      </div>
      <ul class="friendlist">
        <b>Друзья ({{ user.friends }}):</b>
        <li class="friendlist__item" v-for="friend of user.friendList" :key="friend.id">
          <router-link class="friendlist__item__link" :to="{ name: 'Profile', params: { id: friend.id } }">{{
            friend.name
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="profile__buttons">
      <router-link :to="{ name: 'UserList' }">
        <button class="userlist__button userlist__button--back">Назад</button>
      </router-link>
      <router-link :to="{ name: 'UserList' }">
        <button
          class="userlist__button userlist__button--change"
          @click="saveChanges(user.value)"
        >
          Сохранить
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import axios from "axios";
export default {
  name: "Profile",
  props: {
    id: String,
  },
  setup(props) {
    const user = ref({});

    const getUser = async () => {
      const res = await axios.get(`http://localhost:3000/users/${props.id}`);
      user.value = res.data;
    };

    watch(() => props.id, getUser, { immediate: true });

    const saveChanges = async () => {
      await axios.put(`http://localhost:3000/users/${props.id}`, user.value);
    };

    return {
      user,
      saveChanges,
    };
  },
};
</script>

<style>
.profile-wrapper {
  display: flex;
  align-items: center;
  color: #0e7bda;
  flex-direction: column;
  background: #fff;
  margin: 1rem;
  width: 35rem;
  border: solid 2px #6aaae2;
  border-radius: 1rem;
}

.profile__information-changeable {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: bold;
}

.change-profile__label {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.change-profile--description {
  resize: none;
  text-align: justify;
}

.change-profile {
  width: 23rem;
  background: #6aaae221;
  border: solid 2px #385d7e;
  border-radius: 5px;
  color: #385d7e;
  font-weight: 600;
}

.change-profile:focus-visible {
  outline: solid 2px #ebcd64;
  border: none;
}

.friendlist {
  padding: 0;
  list-style: none;
}

.friendlist__item {
  color: #385d7e;
  font-weight: 500;
}

.friendlist__item__link:visited {
  color: #385d7e;
}

.profile__buttons {
  margin-bottom: 1rem;
}

.userlist__button--back {
  background: #fff;
  margin-right: 0.5rem;
  color: #385d7e;
  border: solid 1px #385d7e;
}

.userlist__button--back:hover {
  background: #150f253b;
}
</style>