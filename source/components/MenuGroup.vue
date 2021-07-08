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
    padding-left: 10rem;
    padding-right: 10rem;
    text-align: center;
    
}

.sub-title {
    padding-top: 1.1rem;
}
.mt-50 {
   margin-top: 2rem; 
}
</style>