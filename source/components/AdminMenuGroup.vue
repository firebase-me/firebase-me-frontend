<template>
    <div class="columns is-desktop buttons profile-main-content-layout mt-50">
        <div class="column" v-for="(groupbutton, index) in groupbuttons" :key="index">
            <b-button 
                type="is-primary"
                @click="handleMenu(groupbutton.to, index)" 
                :outlined="pos !== index"
            >
                {{groupbutton.title}}
            </b-button>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import firebase from '~/plugins/firebase.js'

    export default {
        data() {
            return {
                groupbuttons : [
                    {
                        title : "Overview",
                        to : "overview"
                    },
                    {
                        title : "Articles",
                        to : "articles"
                    },
                    {
                        title : "Users",
                        to : "users"
                    },
                    {
                        title : "Globals",
                        to : "globals"
                    },
                ]
            }
        },
        computed: {
            pos () {
                return this.$store.state.groupButtons.adminGroupButtonPos
            }
        },
        methods: {
            handleMenu(to, pos) {
                console.log("to", to)
                this.$router.push({path: to})
                this.$store.commit('groupButtons/setAdminGroupButtonPos', pos)
            }
        }
    }
</script>

<style lang="scss">
.profile-main-content-layout {
    margin: 0 auto;
    width: 60rem;
    text-align: center;
}

.mt-50 {
   margin-top: 2rem; 
}
</style>