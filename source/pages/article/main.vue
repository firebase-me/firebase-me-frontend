<template>
  <section>
    <Header title="Articles" />
    <MenuGroup />
    
    <div class="columns is-desktop buttons profile-main-content-layout mt-50">
        <div class="column">
            <b-field>
                <b-input placeholder="Article Name"
                    type="search"
                    icon="magnify"
                    icon-clickable
                    @icon-click="searchIconClick">
                </b-input>
            </b-field>
        </div>
        <div class="column button-white">
            <b-button type="is-primary">
                <NuxtLink to="/article/create">Create</NuxtLink>
            </b-button>
        </div>
    </div>

    <ArticleCard v-for="article in articles" :key="article.id"
        :id="article.id" 
        :articleName="article.content" 
        :createdAt="article.createdAt"
        :topicName="article.topic"
        status="Public"
    />

    <Pagination />
    <!-- <Footer /> -->
  </section>
</template>

<script>
    import Header from '~/components/Header';
    import Footer from '~/components/Footer';
    import MenuGroup from '~/components/MenuGroup';
    import Pagination from '~/components/Pagination';
    import ArticleCard from '~/components/ArticleCard';

    export default {
        data() {
            return {
                email: '',
                articles: []
            }
        },
        methods: {
            searchIconClick() {
                // `this` will refer to the component instance
                console.log('searchIconClick')
            }
        },
        mounted() {
            console.log('Main Vue mounted')
            new this.$firebase.firestore().collection("articles").onSnapshot(snapshot => {
                this.articles = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            })
        }
    }
</script>

<style lang="scss">
.profile-main-content-layout {
    padding-left: 10rem;
    padding-right: 10rem;
    .column {
        .field {
            float: right;
        }
    }
}
.sub-title {
    padding-top: 1.1rem;
}
.mt-50 {
   margin-top: 2rem; 
}
.button-white {
    button {
        span {
            a {
                color: white;
            }
        }
    }
}
</style>