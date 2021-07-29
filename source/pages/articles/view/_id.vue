<template>
    <div class="article-document" v-if="article">
        <h1 class="article-title">{{article.title}}</h1>
        <div class="article-content" v-html="article.content.page0.contents"></div>
        <div class="status-submit-content">
            <div class="columns">
                <div class="column is-half "><b-button type="is-primary" disabled>Previous</b-button></div>
                <div class="column is-half "><b-button type="is-primary" disabled>Next</b-button></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                paramID : null,
                article : null
            }
        },
        mounted () {
            this.paramID = $nuxt.$route.params.id

            new this.$firebase.firestore()
            .collection("articles")
            .doc(this.paramID)
            .get()
            .then((docRef) => { 
                this.article = docRef.data()
                console.log("article", this.article.content.page0)
            })
        }
    }
</script>

<style lang="scss">
.article-document {
    border: 3px solid black;
    margin-left: 4rem;
    margin-right: 4rem;
    margin-top: 4rem;
    height: auto;
}
.text-center {
    text-align: center;
}
.article-title {
    margin-top: 1rem;
    font-size: 2.2rem;
    text-align: center;
    font-weight: 800;
}
.article-content {
    padding: 1rem;
}
.article-pages {
    font-weight: 500;
    text-align: center;
    color: rgb(212, 212, 62);
}
.article-preview {
    margin-top: 2rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 800;
}
.small-article-preview {
    margin-top: 2rem;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
}
.status-submit-content {
    margin-top: 3rem;
    margin-bottom: 2rem;
    .columns {
        .column {
            text-align: center;
        }
    }
}
</style>