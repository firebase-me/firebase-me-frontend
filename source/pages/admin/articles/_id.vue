<template>
    <section class="main-section">
        <h1 class="py-5 article-title">Test1</h1>
        <b-tabs v-model="activeTab">
            <b-tab-item label="Page1">
                <h1 class="subpage">page1</h1>
                by : <b>nikolay</b>
            </b-tab-item>

            <b-tab-item label="Page2">
                <h1 class="subpage">page2</h1>
                by : <b>alexey</b>
            </b-tab-item>

            <b-tab-item label="Page3">
               <h1 class="subpage">page3</h1>
                by : <b>igor</b>
            </b-tab-item>
        </b-tabs>
        <h1><b>Set as</b></h1>
        <b-dropdown
            :scrollable="isScrollable"
            :max-height="maxHeight"
            v-model="currentMenu"
            aria-role="list"
        >
            <template #trigger>
                <b-button
                    :label="currentMenu.text"
                    type="is-primary"
                    :icon-left="currentMenu.icon"
                    icon-right="menu-down" />
            </template>
            <b-dropdown-item
                v-for="(menu, index) in menus"
                @click="checkDenied"
                :key="index"
                :value="menu" aria-role="listitem">
                <div class="media">
                    <b-icon class="media-left" :icon="menu.icon"></b-icon>
                    <div class="media-content">
                        <h3>{{menu.text}}</h3>
                    </div>
                </div>
            </b-dropdown-item>
        </b-dropdown>

        <div v-if="deniedFlag" class="py-1 denied-div">
            <b-field label="Reason">
                <b-input maxlength="200" type="textarea"></b-input>
            </b-field>
        </div>

        <div class="buttons py-1">
            <b-button type="is-warning" @click="submit">Submit</b-button>
        </div>
    </section>
</template>

<style lang="scss">
.main-section {
    width: 60%;
    margin: 0 auto;
}
.py-1 {
    margin-top: 1rem;
}
.py-5 {
    margin-top: 5rem;
}
.article-title {
    font-size: 2rem;
    font-weight: 600;
}
.subpage {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid gray;
    margin-bottom: 0.5rem;
}
.denied-div {
    .field {
        .control {
            width: 100%;
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            activeTab: 0,
            isScrollable: false,
            maxHeight: 200,
            currentMenu: { icon: 'account-group', text: 'People' },
            menus: [
                { icon: 'account-group', text: 'Live' },
                { icon: 'shopping-search', text: 'Pending' },
                { icon: 'credit-card-multiple', text: 'Denied' },
                { icon: 'dolly', text: 'Admin' }
            ],
            deniedFlag : false
        }
    },
    methods : {
        submit() {
            console.log("submit", this.currentMenu.text)
        },
        checkDenied () {
            console.log("checkDenied", this.currentMenu.text)
            // this.currentMenu.text === 'denied' ? this.deniedFlag = true : null
            this.deniedFlag = this.currentMenu.text === 'Denied'
        }
    },
    mounted() {
        console.log(this.$route.params.id);
    }
};
</script>