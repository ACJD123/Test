<template>
  <ion-app>
    <ion-menu content-id="main-content" class="persistent-menu">
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu Content</ion-title>
        </ion-toolbar>
      </ion-header>
    <ion-content class="ion-padding">
      
        <ion-card>
          <ion-card-header>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-title>USERNAME</ion-card-title>
                <ion-card-subtitle>+63 999 999 9999</ion-card-subtitle>
            </ion-card-header>
        </ion-card>
        
    <ion-list>
      <ion-item href="">
        <ion-label>Home</ion-label>
      </ion-item>
      <ion-item href="/Productsp">
        <ion-label>Products</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Coupons</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>History</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  
    </ion-content>
      <ion-button>Logout</ion-button>
    </ion-menu>
    
    <ion-router-outlet />

    
  </ion-app>
</template>

<script setup >
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
