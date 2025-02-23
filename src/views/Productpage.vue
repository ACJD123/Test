<template>
 <ion-page id="main-content" sc>
    <ion-content :fullscreen="true" class="ion-padding">
     <ion-header>
       <ion-toolbar>
         <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
         </ion-buttons>
          <ion-title>Products</ion-title>
       </ion-toolbar>
     </ion-header>

    <ion-searchbar></ion-searchbar>

  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card href='/item'>
          <ion-card-header>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <ion-card-header>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card href='/item'>
          <ion-card-header>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <ion-card-header>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card href='/item'>
          <ion-card-header>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <ion-card-header>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card href='/item'>
          <ion-card-header>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <ion-card-header>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-title>Card Title</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
  
    </ion-content>
    </ion-page>
  </template>
  
  <script>
    import { IonButton, IonImg, IonSearchbar, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar, IonIcon} from '@ionic/vue';
    import { defineComponent } from 'vue';
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
      },   
    });
  </script>
  <style scoped>
  
  </style>
  