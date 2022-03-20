<template>
  <div class="home-page">
    <ChatList class="home-page__chat-list" />
    <ChatWindow class="home-page__chat-window" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ChatList from '@/components/ChatList.vue';
import ChatWindow from '@/components/ChatWindow.vue';

@Options({
  components: {
    ChatList,
    ChatWindow,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  width: 100%;
  height: 100vh;

  &__chat-list {
    width: 30%;
  }

  &__chat-window {
    width: 70%;
  }
}
</style>
