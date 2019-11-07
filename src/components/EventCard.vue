<template>
  <router-link class="event-link" :to="{ name: 'event-show', params: { id: walkpath.id } }">
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ walkpath.duration }} on {{ walkpath.flow }}</span>
      <h4 class="title">{{ walkpath.title }}</h4>
      <BaseIcon name="walkicon">{{ walkpath.slots.lenght }} Walk Slots</BaseIcon>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    walkpath: Object
  }
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>