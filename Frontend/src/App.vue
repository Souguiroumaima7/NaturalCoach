<template>
  <div id="app">
  
    <NavbarComponent />
    <EventsContainer />
    <ServicesContainer />
    <ContactCompoment/>
    <TestimonialsCompoment/>
    <FooterComponent />
    <div class="scroll-to-top">
        <button @click="scrollToTop"> Scroll to top </button>
    </div>
  </div>
</template>

<script>
import ContactCompoment from './components/ContactCompoment.vue';
import FooterComponent from './components/FooterComponent.vue';
import NavbarComponent from './components/NavbarComponent.vue'
import EventsContainer from './containers/EventsContainer.vue';
import ServicesContainer from './containers/ServicesContainer.vue';
import TestimonialsCompoment from './components/TestimonialsCompoment.vue'
export default {
  name: 'App',
  components: {
    NavbarComponent,
    EventsContainer,
    FooterComponent,
    ServicesContainer,
    ContactCompoment,
    TestimonialsCompoment

},

methods: {
      scrollToTop(){
        let currentScroll = document.documentElement.scrollTop,
          int = setInterval(frame, 6)
          
          function frame(){
              if( 0 > currentScroll)
                  clearInterval(int)
                  
              else {
                  currentScroll = currentScroll - 12
                  document.documentElement.scrollTop = currentScroll
              }
          }
      }
    },
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
.button {
  color : "grey"
}
</style>
