<template>
  <section>
    <Header title="Admin Panel" />
    <AdminMenuGroup />
    <p>Overview</p>
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
</style>