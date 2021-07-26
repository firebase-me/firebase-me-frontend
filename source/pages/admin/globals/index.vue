<template>
    <section>
        <Header title="Profile" />
        <AdminMenuGroup />
        <h1>Globals</h1>

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
                userID : ""
            }
        }
    }
</script>

