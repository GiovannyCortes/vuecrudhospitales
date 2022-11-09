<template>
  <div>
    <h1 class="text-bg-primary py-2 font-monospace">Hospitales</h1>
    <div v-if="statusHospitales">
        <table class="table table-dark border-info mx-auto align-middle" style="max-width: 80vw;">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Dirección</th>
                    <th>Teléfono</th>
                    <th>Camas</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="hospital of hospitales" :key="hospital" :class="{select : hospital.idHospital === this.currentIdentificador}">
                    <td v-on:click="selectIdentificador(hospital.idHospital)" class="pointer">
                        {{ hospital.idHospital }}
                    </td>
                    <td>{{ hospital.nombre }}</td>
                    <td>{{ hospital.direccion }}</td>
                    <td>{{ hospital.telefono }}</td>
                    <td>{{ hospital.camas }}</td>
                </tr>
            </tbody>
        </table>
        <div v-if="currentIdentificador != 0">
            <router-link :to="'/modify/' + currentIdentificador" class="btn btn-warning">
                Modificar
            </router-link> &nbsp;
            <button @click="deleteHospital()" class="btn btn-danger">
                Eliminar
            </button>
        </div>
    </div>
    <img v-else src="../assets/cargando.gif">
  </div>
</template>

<script>
    import Swal from 'sweetalert2';
    import HospitalesServices from '../services/HospitalesServices';
    const service = new HospitalesServices();
    export default {
        name : "HospitalesComponent",
        methods : {
            loadHospitales() {
                service.getHospitales("/api/hospitales/").then(result => {
                    this.hospitales = result;
                    this.statusHospitales = true;
                });
            },
            selectIdentificador(id) {
                this.currentIdentificador = id;
            },
            deleteHospital() {
                Swal.fire({
                    title: '¿Quieres eliminar el hospital ' + this.currentIdentificador + '?',
                    showDenyButton: false,
                    showCancelButton: true,
                    confirmButtonText: 'Eliminar',
                    denyButtonText: '',
                }).then((result) => {
                    if (result.isConfirmed) {
                        service.deleteHospital("/api/hospitales/", this.currentIdentificador).then(() => {
                            this.loadHospitales();
                        });
                        Swal.fire('Eliminado', '', 'success');
                    } else if (result.isDismissed) {
                        Swal.fire('Operación cancelada', '', 'error');
                    }
                });
            }
        },
        data() {
            return {
                statusHospitales : false,
                currentIdentificador : 0,
                hospitales : []
            }
        },
        mounted() {
            this.loadHospitales();
        }
    }
</script>

<style>
    .select{
        color: red;
    }
    .pointer:hover{
        cursor: pointer;
        color: yellow;
    }
</style>