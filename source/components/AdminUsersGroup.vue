<template>
    <div class="columns is-desktop buttons user-content-layout mt-50">
        <div class="column"><b-button type="is-primary" outlined><NuxtLink to="active">Active</NuxtLink></b-button></div>
        <div class="column"><b-button type="is-primary" outlined><NuxtLink to="applications">Applications</NuxtLink></b-button></div>
        <div class="column"><b-button type="is-primary" outlined><NuxtLink to="banned">Banned</NuxtLink></b-button></div>
    </div>
</template>

<style lang="scss">
.mt-50 {
   margin-top: 2rem; 
}
</style>