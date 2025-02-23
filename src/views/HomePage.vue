<template>
  <ion-page id="main-content" sc>
    <ion-content :fullscreen="true" class="ion-padding">
      
     <ion-header>
       <ion-toolbar>
         <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
         </ion-buttons>
          <ion-title>Home</ion-title>
       </ion-toolbar>
     </ion-header>

    <ion-searchbar></ion-searchbar>
   <ion-text>
    <h1>Special Offers</h1>
   </ion-text> 
  <swiper-container slidesPerView="1"  :autoplay="true" :pagination="true" expand="block" >
    <swiper-slide v-for="image in images" :key="image.id">
      <img :src="image.imageUrl" >
    </swiper-slide>  
  </swiper-container>

  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card href="/item">
          <ion-card-header>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-title>Item Name</ion-card-title>
                <ion-card-subtitle>$999</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <ion-card-header>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-title>Item Name</ion-card-title>
                <ion-card-subtitle>$999</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <ion-card-header>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-title>Item Name</ion-card-title>
                <ion-card-subtitle>$999</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <ion-card-header>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-title>Item Name</ion-card-title>
                <ion-card-subtitle>$999</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
  
    </ion-content>
     <ion-button size="default" href="/Productsp">Order Now!</ion-button>
  </ion-page>
</template>

<script>
  import { IonButton, IonImg, IonSearchbar, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon} from '@ionic/vue';
  import { defineComponent,reactive } from 'vue';
  import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/autoplay';
  import '@ionic/vue/css/ionic-swiper.css';

  import image1 from "@/assets/ducati.jpg";
  import image2 from "@/assets/honda.jpg";
  import image3 from "@/assets/kawa.jpg";
  
  import { register } from 'swiper/element/bundle';
  register();
  export default defineComponent({
    components: {
      IonImg,
      IonSearchbar,
      IonButtons,
      IonContent,
      IonHeader,
      IonMenu,
      IonMenuButton,
      IonPage,
      IonTitle,
      IonToolbar,
      IonIcon,
      Swiper,
      SwiperSlide,
    },
    setup() {
      const items = reactive([]);
    },
   data() {
      return {
        parallaxSwiperWidth: 0,
        images: [{
          id: 1,
          imageUrl: image1
        },
        {
          id: 2,
          imageUrl: image2
        },
        {
          id: 3,
          imageUrl: image3
        }]
      }
    }    
  });
</script>
