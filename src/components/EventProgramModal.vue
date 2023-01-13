<template>
  <dialog :id="`modal-${event.id}`">
    <h2>{{ event.name }}</h2>
    <p>{{ event.description }}</p>
    <button class="btn btn-secondary" @click="handleClose">Close</button>
  </dialog>
</template>
<script>
export default {
  name: "EventProgramModal",
  props: {
    event: Object,
    open: Boolean
  },
  methods: {
    handleClose() {
      this.$emit("close-modal", { open: false })
    }
  },
  watch: {
    open(newValue) {
      let modal = document.getElementById(`modal-${this.event.id}`)
      newValue ?
        modal.showModal() :
        modal.close()
    }
  }
}
</script>
<style>

</style>