<template>
    <ion-page id="main-content" sc>
        <ion-content :fullscreen="true" class="ion-padding">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                    <ion-menu-button></ion-menu-button>
                    </ion-buttons>
                    <ion-title>Item Description</ion-title>
                </ion-toolbar>
            </ion-header>
     
            <ion-card>
                <ion-card-header>
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                        <ion-card-title>Item Name</ion-card-title>
                        <ion-card-subtitle>Item information</ion-card-subtitle>

                        <ion-grid>
                            <ion-row>  
                                <ion-col>
                                    <ion-button>-</ion-button>
                                </ion-col>
                                <ion-col>
                                    <ion-item>999</ion-item>
                                </ion-col>
                                <ion-col>
                                    <ion-button>+</ion-button>
                                </ion-col>
                            </ion-row> 
                        </ion-grid>

                </ion-card-header>
            </ion-card>
            <ion-list>
                <ion-item>
                    <ion-checkbox label-placement="start">Option 1</ion-checkbox>
                </ion-item>
                <ion-item>
                    <ion-checkbox label-placement="start">Option 2</ion-checkbox>
                </ion-item>
                <ion-item>
                    <ion-checkbox label-placement="start">Option 3</ion-checkbox>
                </ion-item>
            </ion-list>       
        </ion-content>
        
        <ion-button size="default">Checkout</ion-button>
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
     