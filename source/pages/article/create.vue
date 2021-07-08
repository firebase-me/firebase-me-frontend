<template>
  <section>
    <Header title="Articles" />
    <MenuGroup />
    <div class="notice notification">
        <p>To apply to be an editor and submit your own articles,</p>
        <p>you must  do the  following:</p>
        <p class="px-1">1. Submit the content and rough outline of your article idea</p>
        <p class="px-1">2. Have at least one firebase project linked and active</p>
    </div>
    
    <div class="article-content">
        <b-field>
            <b-input v-model="name" placeholder="Article Topic"></b-input>
        </b-field> 

        <b-field>
            <b-input maxlength="1000" type="textarea"  placeholder="Synopsis"></b-input>
        </b-field>
    </div>
    
    <div class="status-submit-content">
        <div class="columns no-margin">
            <div class="column is-half px-0 pt-4">Status : <span class="status-span">None</span></div>
            <div class="column is-half px-0 float-right"><b-button type="is-primary">Submit</b-button></div>
        </div>
        
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
                name: '',
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
    width: 45rem;
    height: auto;
    margin: 0 auto;
    margin-bottom: 2rem;
}
.article-content {
    text-align: center;
    .field {
        .control {
            margin: 0 auto;
        }
        div {
            width: 45rem;
        }
    }
}
.status-submit-content {
    width: 45rem;
    margin: 0 auto;
}
.px-0 {
    padding-left: 0;
    padding-right: 0;
}
.py-0 {
    padding-top: 0;
    padding-bottom: 0;
}
.float-right {
    text-align: right;
}
.no-margin {
    margin: 0;
}
.status-span {
    font-weight: bold;
}
</style>