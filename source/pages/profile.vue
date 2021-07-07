<template>
  <section>
    <Header title="Profile" />
    <div class="columns is-desktop buttons profile-main-content-layout mt-50">
        <div class="column"><b-button type="is-primary" outlined>Overview</b-button></div>
        <div class="column"><b-button type="is-primary" outlined>Messages</b-button></div>
        <div class="column"><b-button type="is-primary" outlined>Projects</b-button></div>
        <div class="column"><b-button type="is-primary" outlined>My Articles</b-button></div>
    </div>

    <div class="columns profile-main-content-layout">
        <div class="column is-one-fifth sub-title">DisplayName : </div>
        <div class="column">
            <b-field>
                <b-input placeholder="DisplayName"></b-input>
            </b-field>
        </div>
        <div class="column"><b-button type="is-primary">Save</b-button></div>
    </div>

    <div class="columns profile-main-content-layout">
        <div class="column is-one-fifth">Internal UID : </div>
        <div class="column">Internal UID : </div>
    </div>

     <div class="columns profile-main-content-layout">
        <div class="column is-one-fifth">Editor UID : </div>
        <div class="column">Internal UID : </div>
    </div>

     <div class="columns profile-main-content-layout">
        <div class="column is-one-fifth">Linked Project : </div>
        <div class="column">Internal UID : </div>
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