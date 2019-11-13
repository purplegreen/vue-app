<template>
  <div>
    <h1>Create Walkpath, {{ user.name }}</h1>
    <p>and again this nice name {{ user.name }}</p>
    <p>{{ getWalkpathById(4) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getWalkpathById"]),
    ...mapState(["user", "categories"])
  }
};
</script>

<style>
</style>