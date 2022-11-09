<template>
  <div>
    <h1 class="text-bg-dark py-2 font-monospace">Buscar hospital</h1>
    <form class="mx-auto" style="max-width: 75vw;">
        <label class="form-label">Introduzca identificador</label>
        <input type="number" class="form-control w-50 mx-auto" v-model="identificador">
        <router-link to="/hospitales" class="btn btn-primary mt-2">
            Volver
        </router-link> &nbsp;
        <button class="btn btn-outline-success mt-2" @click.prevent="findHospital()">
            Buscar
        </button>
    </form>
    <dl v-if="hospital" class="mt-3">
        <dt>IdHospital:</dt>
        <dd>{{ hospital.idHospital }}</dd>
        <dt>Nombre:</dt>
        <dd>{{ hospital.nombre }}</dd>
        <dt>Dirección:</dt>
        <dd>{{ hospital.direccion }}</dd>
        <dt>Teléfono:</dt>
        <dd>{{ hospital.telefono }}</dd>
        <dt>Camas:</dt>
        <dd>{{ hospital.camas }}</dd>
    </dl>
  </div>
</template>

<script>
    import HospitalServices from '../services/HospitalesServices';
    const service = new HospitalServices();
    export default {
        name : "HospitalComponent",
        methods : {
            findHospital() {
                service.getHospital("/api/hospitales/", this.identificador).then((result) => {
                    this.hospital = result;
                });
            }
        },
        data() {
            return {
                hospital : null,
                identificador : 19
            }
        }
    }
</script>

<style>

</style>