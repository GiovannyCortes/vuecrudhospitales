<template>
  <div>
    <h1 class="text-bg-warning py-2">MODIFY {{ this.$route.params.identificador }}</h1>
    <form method="post" v-on:submit.prevent="updateHospital()" class="border rounded mx-auto pt-2 pb-2" style="max-width: 80vw;">
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
      <button class="btn btn-warning mt-2">
          Modify
      </button>
    </form>
  </div>
</template>

<script>
  import HospitalesServices from '../services/HospitalesServices';
  import Swal from 'sweetalert2';
  const service = new HospitalesServices();
  export default {
      name : "ModifyComponent",
      methods : {
        updateHospital() {
          Swal.fire({
            title: '¿Desea modificar el hospital ' + this.hospital.idHospital + '?',
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: 'Modificar',
            denyButtonText: '',
          }).then((result) => {
              if (result.isConfirmed) {
                service.putHospital("/api/hospitales/", this.hospital).then(() => {
                    this.$router.push("/hospitales");
                });
                Swal.fire('Modificado', '', 'success');
              } else if (result.isDismissed) {
                Swal.fire('Operación cancelada', '', 'error');
              }
          });
        }
      },
      data() {
        return {
          hospital : {
            idHospital : this.$route.params.identificador,
            nombre : "",
            direccion : "",
            telefono : "",
            camas : 0
          }
        }
      },
      mounted() {
        service.getHospital("/api/hospitales/", this.$route.params.identificador).then((result) => {
          this.hospital = result;
        });
      }
  }
</script>

<style>

</style>