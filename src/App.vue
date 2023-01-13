<template>
  <div id="app">
    <NavbarComponent />
    <EventsContainer />
    <ServicesContainer />
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue'
import EventsContainer from './containers/EventsContainer.vue';
import ServicesContainer from './containers/ServicesContainer.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    EventsContainer,
    FooterComponent,
    ServicesContainer
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
