<template>
    <div class="columns is-desktop buttons profile-main-content-layout mt-50">
        <div class="column"><b-button type="is-primary" outlined>Overview</b-button></div>
        <div class="column"><b-button type="is-primary" outlined>Messages</b-button></div>
        <div class="column"><b-button type="is-primary" outlined>Projects</b-button></div>
        <div class="column"><b-button type="is-primary" outlined><NuxtLink to="/article/main">My Articles</NuxtLink></b-button></div>
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

.sub-title {
    padding-top: 1.1rem;
}
.mt-50 {
   margin-top: 2rem; 
}
</style>