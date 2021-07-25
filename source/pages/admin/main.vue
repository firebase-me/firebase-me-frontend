<template>
  <section>
    <Header title="Admin Panel" />
    <AdminMenuGroup />
    <Footer />
  </section>
</template>

<script>
    import Header from '~/components/Header';
    import Footer from '~/components/Footer';
    import AdminMenuGroup from '~/components/AdminMenuGroup';

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