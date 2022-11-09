<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">CRUD</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/hospitales">Hospitales</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Acciones
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/hospital/">Buscar</router-link></li>
                            <li><router-link class="dropdown-item" to="/create/">Crear</router-link></li>
                        </ul>
                        <!-- <ul class="dropdown-menu">
                            <li class="nav-item" v-for="cosa of cosas" :key="cosa">
                                <router-link :to="'/rutacosa/' + cosa" class="dropdown-item nav-link mx-1">{{cosa}}</router-link>
                            </li>
                        </ul> -->
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name : "MenuComponent"
    }
</script>

<style>

</style>