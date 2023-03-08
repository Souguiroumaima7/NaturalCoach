<template>
  <div class="card">
    <img :src="event.image" class="card-img-top" :alt="`${event.name} image`">
    <div class="card-body">
      <h5 class="card-title">{{ event.name }}</h5>
      <p class="card-text">{{ event.description }}</p>
      <a @click="handleClick" class="btn btn-primary">Voir le programme</a>
    </div>
    <EventProgramModal @close-modal="closeModal" :event="event" :open="open" />
  </div>
</template>
<script>
import EventProgramModal from './EventProgramModal.vue';

export default {
  name: "EventCardComponent",
  props: {
    event: Object
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    handleClick() {
      this.open = true
    },
    closeModal(payload) {
      this.open = payload.open
    }
  },
  components: { EventProgramModal }
}
</script>
<style>
.card-img-top {
  height: 300px;
  background-size: cover;
}
</style>