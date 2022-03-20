<template>
  <div class="chat-list">
    <UserCard
      class="chat-list__item"
      :class="{ 'chat-list__item_active': key === activeChatKey }"
      v-for="(userInfo, key) in chatData"
      :key="key"
      :userInfo="userInfo"
      @click="openChat(key)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserCard from './UserCard.vue';

export default defineComponent({
  name: 'ChatList',
  components: {
    UserCard,
  },
  data() {
    return {
      chatData: [{
        title: 'Ivan Fedorov',
        description: 'Hi there! How are you?',
      }, {
        title: 'Petr Ivanov',
        description: 'Where is my money?',
      }],
      activeChatKey: 0,
    };
  },
  methods: {
    openChat(key) {
      this.activeChatKey = key;
    },
  },
});

</script>

<style lang="scss" scoped>
.chat-list {
  &__item {
    &_active {
      background-color: blue;
      color: #fff;
    }
  }
}
</style>
