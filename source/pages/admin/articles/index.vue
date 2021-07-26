<template>
    <section>
        <Header title="Admin Panel" />
        <AdminMenuGroup />
        <b-tabs type="is-toggle" expanded class="tabs-width">
            <b-tab-item label="Live">
                <b-table :data="dataLive">
                    <b-table-column field="no" label="No" centered v-slot="props">
                        {{ props.row.no }}
                    </b-table-column>
                    <b-table-column field="by" label="By" centered v-slot="props">
                        {{ props.row.by }}
                    </b-table-column>
                    <b-table-column field="name" label="Name" centered v-slot="props">
                        {{ props.row.name }}
                    </b-table-column>
                    <b-table-column field="status" label="Status" centered v-slot="props">
                        <span class="tag is-success">
                            {{ props.row.status }}
                        </span>
                    </b-table-column>
                    <b-table-column field="setting" label="Setting" centered>
                        <img
                            class="setting-image"
                            src="~assets/black-setting.png"
                            alt="setting-image"
                            height="5"
                        >
                    </b-table-column>
                </b-table>
            </b-tab-item>
            <b-tab-item label="Pending">
                <b-table :data="dataPending">
                    <b-table-column field="no" label="No" centered v-slot="props">
                        {{ props.row.no }}
                    </b-table-column>
                    <b-table-column field="by" label="By" centered v-slot="props">
                        {{ props.row.by }}
                    </b-table-column>
                    <b-table-column field="name" label="Name" centered v-slot="props">
                        {{ props.row.name }}
                    </b-table-column>
                    <b-table-column field="status" label="Status" centered v-slot="props">
                        <span class="tag is-success">
                            {{ props.row.status }}
                        </span>
                    </b-table-column>
                    <b-table-column field="setting" label="Setting" centered>
                        <NuxtLink to="articles/asdfsadf">
                        <img
                            class="setting-image"
                            src="~assets/black-setting.png"
                            alt="setting-image"
                            height="5"
                        >
                        </NuxtLink>
                    </b-table-column>
                </b-table>
            </b-tab-item>
            <b-tab-item label="Denied">Denied</b-tab-item>
            <b-tab-item label="Admin">Admin</b-tab-item>
        </b-tabs>
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
</style>

<script>
    import AdminMenuGroup from '~/components/AdminMenuGroup';

    export default {
        data() {
            return {
                dataLive: [
                    { 'no': 1, 'name': 'Test1', 'by': 'Simmons', 'status': 'pending', 'setting': 'Male' }
                ],
                dataPending: [
                    { 'no': 1, 'name': 'Test1', 'by': 'Simmons', 'status': 'pending', 'setting': 'Male' }
                ],
                dataDenied: [
                    { 'no': 1, 'name': 'Test1', 'by': 'Simmons', 'status': 'pending', 'setting': 'Male' }
                ],
                dataAdmin: [
                    { 'no': 1, 'name': 'Test1', 'by': 'Simmons', 'status': 'pending', 'setting': 'Male' }
                ]
            }
        },
        methods: {
            
        }
    }
</script>