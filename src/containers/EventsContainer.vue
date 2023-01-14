<template>
  <div class="container events">
    <h1 class="text-center mb-5">Events</h1>
    <div class="row">
      <div class="col-4 mb-4" v-for="(event, index) in events" :key="index">
        <EventCardComponent :event="event" />
      </div>
    </div>
  </div>
</template>
<script>
import EventCardComponent from '@/components/EventCardComponent.vue';
// import axios from "axios"

export default {
  name: "EventsContainer",
  components: { EventCardComponent },
  // mounted() {
  //   axios.get("url")
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  data() {
    return {
      events: [
        {
          id: "123",
          name: "Randonnée à Zriba El Olia et Takrouna",
          description: "L’ancien village, Zriba Olia (Zriba la haute), d’origine berbère, est situé à environ trois kilomètres au sud de Hammam Zriba. Construit entre deux pics rocheux, le village désormais en ruines offre une vue sur le Djebel Zaghouan, le quatrième plus haut sommet de Tunisie après le Djebel Chambi.",
          image: "https://voyage-tunisie.info/wp-content/uploads/2018/01/takrouna5-960x500.jpg",
          program: "aaaaaaaa"
        },
        {
          id: "456",
          name: "Camping Barrage El Masri",
          description: "Barrage Elmasri, un endroit de nature merveilleuse qui nous rappelle la beauté des forêts du nord ouest comme Elfeija et Aïn Drahem. Le barrage El Masri est un barrage tunisien inauguré en 1968, sur l'oued Masri, à dix kilomètres au sud de Grombalia",
          image: "https://www.hoteltunisie.tn/uploads/posts/2019-10/1572295619_3ece4784-e619-48e8-8da2-f7f0666b1a1b.jpeg",
          program: "dddddddd"
        },
        {
          id: "789",
          name: "Randonnée à Ain Drahem",
          description: "Randonner a Ain Drahem Zone très convoitée pour sa forêt qui s’étend à perte de vue, Aîn Draham est un endroit assez singulier pour les randonneurs, mais aussi pour les amateurs de nature, il n’y a qu’à voir le nombre de circuit à faire et à découvrir, et les chasseurs, pour qui la saison de chasse à Aîn Draham n’est que pur bonheur.",
          image: "https://voyage-tunisie.info/wp-content/uploads/2018/02/Beni-Mtir-300x200.jpg",
          program: "rrrrrrrrrr"
        },
        {
          id: "000",
          name: "Ski à Suisse",
          description: "Le coup d’envoi du prestigieux Tour de Ski de la saison 2022/23 sera donné dans le Val Müstair.",
          image: "https://static.actu.fr/uploads/2020/12/ski-suisse-960x640.jpg",
          program: "ggggggggg"
        },
        {
          id : "001" , 
          name : "rondonnée à lac Ichkeul" ,
          description : "le lac abrite de nombreux oiseaux migrateurs et des oiseaux rares voire éndemiques" ,
          image :"https://www.tresorsdumonde.fr/post-img.php?url=/wp-content/uploads/2016/10/Lac-Ichkeul3.jpg&autor=aloulou007" ,
          program: "fffffffff"
        },
        {
          id : "002",
          name :"djebel boukornine" ,
          description : "pour ceux qui recherchent un peux de frissons , c'est le parcours ideal" ,
          image :"https://th.bing.com/th/id/R.b8d60f8d57c83ee54a7e647c4ccd2299?rik=J6tWCBOAX2GYUg&riu=http%3a%2f%2fzaherkammoun.com%2fwp-content%2fuploads%2f2019%2f01%2fDjebel-Boukornine-2.jpg&ehk=cQyUklqQWxfFnSE7tBSCD43KG7AMkdSeqe19vqC4iZ0%3d&risl=&pid=ImgRaw&r=0",
          programe:"gggggggg"
        }
      ]
    }
  }
}
</script>
<style>

</style>