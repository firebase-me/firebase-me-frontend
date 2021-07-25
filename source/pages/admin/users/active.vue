<template>
    <section>
        <Header title="Admin Panel" />
        <AdminMenuGroup />
        <AdminUsersGroup />
        
        <h1>Active</h1>
        <Footer />
    </section>
</template>

<style lang="scss" scoped>
.tabs-width {
    width: 80%;
    margin: 0 auto;
}
.setting-image {
    max-width: 1.5rem;
    cursor: pointer;
    padding-top: 0.1rem;
}
.user-content-layout {
    width: 50%;
    text-align: center;
    margin: 0 auto;
}
</style>

<script>
    import AdminMenuGroup from '~/components/AdminMenuGroup';
    import AdminUsersGroup from '~/components/AdminUsersGroup';

    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>