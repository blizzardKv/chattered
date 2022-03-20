<template>
  <div class="user-card">
    <div class="user-card__name">
      {{ userInfo.title }}
    </div>
    <div class="user-card__message">
      {{ userInfo.description }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserCard',
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.user-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
  padding: 8px;

  &__name,
  &__message {
    text-align: left;
  }
}
</style>
