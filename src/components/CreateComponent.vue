<template>
  <div>
    <h1 class="text-bg-dark py-2 font-monospace">Crear hospital</h1>
    <form method="post" v-on:submit.prevent="createHospital()" class="border rounded mx-auto pt-2 pb-2" style="max-width: 80vw;">
        <label class="form-label mt-2">Identificador</label>
        <input class="form-control w-75 mx-auto" type="number" v-model="hospital.idHospital">
        <label class="form-label mt-2">Nombre</label>
        <input class="form-control w-75 mx-auto" type="text" v-model="hospital.nombre">
        <label class="form-label mt-2">Dirección</label>
        <input class="form-control w-75 mx-auto" type="text" v-model="hospital.direccion">
        <label class="form-label mt-2">Teléfono</label>
        <input class="form-control w-75 mx-auto" type="text" v-model="hospital.telefono">
        <label class="form-label mt-2">Camas</label>
        <input class="form-control w-75 mx-auto" type="number" v-model="hospital.camas">
        <router-link to="/hospitales" class="btn btn-primary mt-2">
            Volver
        </router-link> &nbsp;
        <button class="btn btn-success mt-2">
            Create
        </button>
    </form>
  </div>
</template>

<script>
    import HospitalesServices from '../services/HospitalesServices';
    const service = new HospitalesServices();
    export default {
        name : "CreateComponent",
        methods : {
            createHospital() {
                service.postHospital("/api/hospitales/", this.hospital).then(() => {
                    this.$router.push("/hospitales");
                });
            }
        },
        data() {
            return {
                hospital : {
                    idHospital : 31,
                    nombre : "H.G. Villalba",
                    direccion : "Collado Villalba",
                    telefono : "000-555-999",
                    camas : 3100,
                }
            }
        }
    }
</script>

<style>

</style>