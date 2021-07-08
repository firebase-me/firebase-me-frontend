<template>
  <section>
    <Header title="Articles" />
    <MenuGroup />
    <div class="notice">
        <p>To apply to be an editor and submit your own articles,</p>
        <p>you must  do the  following:</p>
        <p class="px-1">1. Submit the content and rough outline of your article idea</p>
        <p class="px-1">2. Have at least one firebase project linked and active</p>
    </div>
    
    <div class="article-content">
        <b-field label="Article Topic">
            <b-input v-model="name"></b-input>
        </b-field> 

        <b-field label="Synopsis">
            <b-input maxlength="1000" type="textarea"></b-input>
        </b-field>
    </div>
    
    
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
            }
        },
        methods: {
            searchIconClick() {
                // `this` will refer to the component instance
                console.log('searchIconClick')
            }
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
.notice {
    padding: 0.5rem;
    border: 2px solid black;
    margin-left: 15rem;
    margin-right: 15rem;
    height: auto;
    margin-bottom: 2rem;
}
.px-1 {
    padding-left: 1rem;
    padding-right: 1rem;
}
.article-content {
    text-align: center;
    .field {
        .control {
            margin: 0 auto;
        }
    }
}
</style>