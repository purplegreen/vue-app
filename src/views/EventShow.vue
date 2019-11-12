<template>
  <div>
    <h1>{{ walkpath.title }}</h1>
    <span class="eyebrow">{{ walkpath.duration }} | {{ walkpath.flow }}</span>
    <span
      class="badge -fill-gradient"
    >This Walkpath is composed by {{ walkpath.slots ? walkpath.slots.length : 0 }} Slots</span>
  </div>
</template>

<script>
import WalkPathService from "@/services/WalkPathService.js";
export default {
  props: ["id"],
  data() {
    return {
      walkpath: {}
    };
  },
  created() {
    WalkPathService.getWalkpath(this.id)
      .then(response => {
        this.walkpath = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>

<style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
