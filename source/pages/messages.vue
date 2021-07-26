<template>
    <section>
        <Header title="Profile" />
        <MenuGroup />
        <h1>Messages</h1>

        <Footer />
    </section>
</template>

<script>
    import Header from '~/components/Header';
    import Footer from '~/components/Footer';
    import MenuGroup from '~/components/MenuGroup';

    export default {
        data() {
            return {
                userID : ""
            }
        }
    }
</script>

