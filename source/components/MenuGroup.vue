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
                articleUrl : "/article/create",
                groupbuttons : [
                    {
                        title : "Profile",
                        to : "/profile"
                    },
                    {
                        title : "Messages",
                        to : "/messages"
                    },
                    {
                        title : "Projects",
                        to : "/projects"
                    },
                    {
                        title : "My Article",
                        to : this.articleUrl
                    },
                ]
            }
        },
        computed: {
            pos () {
                return this.$store.state.groupButtons.groupButtonPos
            }
        },
        mounted() {
            const userID = localStorage.getItem('userID')
            
            new this.$firebase.firestore()
            .collection("users")
            .doc(userID)
            .get()
            .then((docRef) => { 
                this.idEditor = docRef.data().isEditor,
                this.denied = docRef.data().denied

                if(this.idEditor === "true") 
                    this.articleUrl = "/article/editor"
            })
        },
        methods: {
            handleMenu(to, pos) {
                console.log(to)
                if(pos === 3) this.$router.push({path: this.articleUrl})
                else this.$router.push({path: to})
                this.$store.commit('groupButtons/setGroupButtonPos', pos)
            }
        }
    }
</script>

<style lang="scss">
.profile-main-content-layout {
    margin: 0 auto;
    width: 60rem;
    div {
        button {
            span {
                a:hover {
                    color: white;
                }
            }
        }
    }
}

.sub-title {
    padding-top: 1.1rem;
}
.mt-50 {
   margin-top: 2rem; 
}
</style>