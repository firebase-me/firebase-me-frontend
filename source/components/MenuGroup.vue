<template>
    <div class="columns is-desktop buttons profile-main-content-layout mt-50">
        <div class="column"><b-button type="is-primary" outlined>Overview</b-button></div>
        <div class="column"><b-button type="is-primary" outlined>Messages</b-button></div>
        <div class="column"><b-button type="is-primary" outlined>Projects</b-button></div>
        <div class="column"><b-button type="is-primary" outlined><NuxtLink :to="articleUrl">My Articles</NuxtLink></b-button></div>
    </div>
</template>

<script>
    import Header from '~/components/Header';
    import Footer from '~/components/Footer';
    import MenuGroup from '~/components/MenuGroup';
    import Pagination from '~/components/Pagination';
    import ArticleCard from '~/components/ArticleCard';
    import firebase from '~/plugins/firebase.js'

    export default {
        data() {
            return {
                articleUrl : "/article/create"
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
                console.log("idEditor=>", this.idEditor)

                if(this.idEditor === "true") 
                    this.articleUrl = "/article/editor"

                console.log("this.articleUrl", this.articleUrl)
            })
        },
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