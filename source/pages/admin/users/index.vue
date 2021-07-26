<template>
    <section>
        <Header title="Admin Panel" />
        <AdminMenuGroup />
        <b-tabs type="is-toggle" expanded class="tabs-width">
            <b-tab-item label="Active"><AdminUserActive /></b-tab-item>
            <b-tab-item label="Applications"><AdminUserApplications /></b-tab-item>
            <b-tab-item label="Banned"><AdminUserBanned /></b-tab-item>
        </b-tabs>
        <Footer />
    </section>
</template>

<style lang="scss" scoped>
.tabs-width {
    width: 80%;
    margin: 0 auto;
}
</style>

<script>
    import AdminMenuGroup from '~/components/AdminMenuGroup';
    import AdminUserActive from '~/components/AdminUserActive';
    import AdminUserApplications from '~/components/AdminUserApplications';
    import AdminUserBanned from '~/components/AdminUserBanned';

    export default {
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    }
</script>