<template>
  <div class="container"  >
    <h1 class="text-center mb-5">Services</h1>
    <div class="row">
      <div v-for="(service, index) in services" :key="index" class="col-3 service">
        <img class="service-icon mb-4" :src="service.icon" :alt="service.name" />
        <h5>{{service.name}}</h5>
      </div>
      <serviceContainer :service="service" />
    </div>
  </div>
</template>
<script>

export default {
    name: "ServicesContainer",
    data() {
        return {
            services: [
                {
                    name: "Randonnée",
                    icon: "assets/camping.png"
                },
                {
                    name: "Camping",
                    icon: "assets/hiking.png"
                },
                {
                    name: "Ski",
                    icon: "assets/skiing.png"
                },
                {
                    name: "Baignade",
                    icon: "assets/beach.png"
                }
            ]
        };
    },

}
</script>
<style>
.service:hover {
  transform: scale(1.2);
  transition: ease-in-out 500ms;
}

.service-icon {
  width: 6rem;
  height: 6rem;
}
</style>