<template>
    <div class="columns is-desktop buttons profile-main-content-layout mt-50">
        <div class="column"><b-button type="is-primary" outlined><NuxtLink to="articles">Overview</NuxtLink></b-button></div>
        <div class="column"><b-button type="is-primary" outlined><NuxtLink to="articles">Articles</NuxtLink></b-button></div>
        <div class="column"><b-button type="is-primary" outlined><NuxtLink to="users/active">Users</NuxtLink></b-button></div>
        <div class="column"><b-button type="is-primary" outlined><NuxtLink to="articles">Globals</NuxtLink></b-button></div>
    </div>
</template>

<style lang="scss">
.profile-main-content-layout {
    margin: 0 auto;
    width: 60rem;
    div {
        button {
            span {
                a:hover {
                    color: white;
                }
            }
        }
    }
}

.mt-50 {
   margin-top: 2rem; 
}
</style>