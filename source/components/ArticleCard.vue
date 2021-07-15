<template>
    <section class="article-card">
        <div class="columns">
            <div class="column is-one-fourth">
                <h1 class="article-name">{{props_articleName}}</h1>
                <h1>{{props_createdAt}}</h1>
            </div>
            <div class="column is-half">{{props_topicName}}</div>
            <div class="column">Status:{{props_status}}</div>
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
    props: ['id', 'articleName',  'createdAt', 'topicName', 'status'],
    data() {
        return {
            props_id : this.id,
            props_articleName : this.articleName,
            props_createdAt : this.createdAt,
            props_topicName : this.topicName,
            props_status : this.status,
        }
    },
    methods : {
        deleteItem() {
            console.log(this.id)
            new this.$firebase.firestore().collection("articles")
            .doc(this.id)
            .delete()
        }
    }
}
</script>
<style lang="scss">
.article-card {
    border: 3px black solid;
    background-color: white;
    height: 5rem;
    margin-left: 10rem;
    margin-right: 10rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    text-align: center;
}
.article-name {
    font-weight: bold;
}
.article-delete {
    cursor: pointer;
}
</style>