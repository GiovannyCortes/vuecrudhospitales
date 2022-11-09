import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import HospitalesComponent from './components/HospitalesComponent.vue';
import HospitalComponent from './components/HospitalComponent.vue';
import ModifyComponent from './components/ModifyComponent.vue';
import CreateComponent from './components/CreateComponent.vue';

const routes = [
    {
        path : "/",
        component : HomeComponent
    },
    {
        path : "/hospitales",
        component : HospitalesComponent
    },
    {
        path : "/hospital",
        component : HospitalComponent
    },
    {
        path : "/modify/:identificador",
        component : ModifyComponent
    },
    {
        path : "/create",
        component : CreateComponent
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes : routes
});

export default router;