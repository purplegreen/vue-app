<template>
  <div>
    <h1>walkpaths Listing</h1>
    <EventCard
      v-for="walkpath in walkpaths"
      :key="walkpath.id"
      :walkpath="walkpath"
    />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import WalkPathService from "@/services/WalkPathService.js";

export default {
  components: {
    EventCard
  },
  data() {
    return {
      walkpaths: []
    };
  },
  created() {
    WalkPathService.getWalkpaths()
      .then(response => {
        this.walkpaths = response.data;
      })
      .catch(error => {
        console.log("There was an error:", error.response);
      });
  }
};
</script>

<style></style>
