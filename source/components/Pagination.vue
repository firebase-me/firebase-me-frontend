<template>
    <section>
        <div class="pagination-div">
            <b-pagination
                :total="total"
                v-model="current"
                :range-before="rangeBefore"
                :range-after="rangeAfter"
                :order="order"
                :size="size"
                :simple="isSimple"
                :rounded="isRounded"
                :per-page="perPage"
                :icon-prev="prevIcon"
                :icon-next="nextIcon"
                aria-next-label="Next page"
                aria-previous-label="Previous page"
                aria-page-label="Page"
                aria-current-label="Current page">
            </b-pagination>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                total: 200,
                current: 10,
                perPage: 10,
                rangeBefore: 3,
                rangeAfter: 1,
                order: 'is-centered',
                size: 'default',
                isSimple: false,
                isRounded: false,
                prevIcon: 'chevron-left',
                nextIcon: 'chevron-right'
            }
        }
    }
</script>

<style lang="scss">
.pagination-div {
    padding-left: 13rem;
    padding-right: 13rem;
}
</style>