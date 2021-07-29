<template>
    <section class="article-card" @click="view">
        <div class="columns">
            <div class="column is-one-fourth">
                <h1 class="article-name">{{props_article.title}}</h1>
                <h1>{{props_article.createdAt}}</h1>
            </div>
            <div class="column is-half">{{props_article.topic}}</div>
            <div class="column">Status:{{props_article.status}}</div>
            <div class="column">
                <div class="block article-delete" v-on:click="deleteItem">
                    <b-icon
                        icon="delete"
                        size="is-large">
                    </b-icon>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : "ArticleCardComponent",
    props: ['article'],
    data() {
        return {
            props_article : this.article
        }
    },
    methods : {
        deleteItem() {
            console.log(this.article.id)
            new this.$firebase.firestore().collection("articles")
            .doc(this.article.id)
            .delete()
        },
        view() {
            const path = "view/"+this.article.id
            console.log('view', path)
            this.$router.push({path: path})
        }
    }
}
</script>
<style lang="scss">
.article-card {
    border: 3px black solid;
    background-color: white;
    height: auto;
    margin-left: 10rem;
    margin-right: 10rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    text-align: center;
    cursor: pointer;
}
.article-name {
    font-weight: bold;
}
.article-delete {
    cursor: pointer;
}
</style>