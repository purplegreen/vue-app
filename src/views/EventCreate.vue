<template>
  <div>
    <h1>Create Walkpath</h1>

    <form @submit.prevent="createWalkpath">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>

      <h3>Name & describe your walkpath</h3>
      <p class="field">
        <label>Title</label>
        <input
          v-model="event.title"
          type="text"
          placeholder="Add an event title"
        />
      </p>
      <p class="field">
        <label>Description</label>
        <input
          v-model="event.description"
          type="text"
          placeholder="Add a description"
        />
      </p>

      <h3>how is your walkpath?</h3>
      <p class="field">
        <label>Flow</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </p>
      <p class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </p>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    Datepicker
  },
  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(i + ":00");
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshWalkpathObject()
    };
  },
  methods: {
    createWalkpath() {
      this.$store
        .dispatch("createWalkpath", this.walkpath)
        .then(() => {
          this.$router.push({
            name: "event-show",
            params: { id: this.walkpath.id }
          });
          this.walkpath = this.createFreshEventObject();
        })
        .catch(() => {
          console.log("There was a problem creating your event");
        });
    },
    createFreshWalkpathObject() {
      const user = this.$store.state.user;
      const id = Math.floor(Math.random() * 10000000);

      return {
        id: id,
        user: user,
        title: " ",
        tipology: " ",
        category: " ",
        flow: " ",
        duration: " ",
        slots: []
      };
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
