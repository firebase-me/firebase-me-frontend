<template>
  <section>
    <Header title="Admin Panel" />
    <div class="columns is-desktop buttons profile-main-content-layout mt-50">
        <div class="column"><b-button type="is-primary" outlined>Overview</b-button></div>
        <div class="column"><b-button type="is-primary" outlined>Articles</b-button></div>
        <div class="column"><b-button type="is-primary" outlined>Editors</b-button></div>
        <div class="column"><b-button type="is-primary" outlined>Users</b-button></div>
    </div>
    <Footer />
  </section>
</template>

<script>
    import Header from '~/components/Header';
    import Footer from '~/components/Footer';
    export default {
        data() {
            return {
                email: '',
            }
        }
    }
</script>

<style>
.profile-main-content-layout {
    padding-left: 10rem;
    padding-right: 10rem;
}
.sub-title {
    padding-top: 1.1rem;
}
.mt-50 {
   margin-top: 2rem; 
}
</style>