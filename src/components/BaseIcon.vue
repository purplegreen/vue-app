 <template>
  <div class="icon-wrapper">
    <svg class="icon" width="width" height="height">
      <use v-bind="{ 'xlink:href': '/logo.svg#' +name }" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 334
    },
    height: {
      type: [Number, String],
      default: 211
    }
  }
};
</script>

<style scoped >
.icon-wrapper {
  display: inline-flex;
  align-items: center;
}
.icon {
  margin: 6px;
}
</style>
