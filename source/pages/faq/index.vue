<template>
    <section>
        <div class="article-document">
            <h1 class="article-title">FAQ</h1>
            <div class="small-card">
                <div class="status-submit-content">
                    <div class="columns">
                        <div class="column is-half "><h1>What is Firebase?</h1></div>
                        <div class="column is-half ">
                            <b-image
                                :src="require('../../assets/faq1.png')"
                            ></b-image>
                        </div>
                    </div>
                </div>
            </div>

            <div class="small-card">
                <div class="status-submit-content">
                    <div class="columns">
                        <div class="column is-half "><h1>Find the right Database</h1></div>
                        <div class="column is-half ">
                            <b-image
                                :src="require('../../assets/faq2.png')"
                            ></b-image>
                        </div>
                    </div>
                </div>
            </div>

            <div class="small-card">
                <div class="status-submit-content">
                    <div class="columns">
                        <div class="column is-half "><h1>Hidden Billing Costs</h1></div>
                        <div class="column is-half ">
                            <b-image
                                :src="require('../../assets/faq3.png')"
                            ></b-image>
                        </div>
                    </div>
                </div>
            </div>
            <div class="view-all-button">
                <b-button type="is-primary">View All</b-button>
            </div>
            
        </div>
        <Footer />
    </section>
</template>

<script>
    import Footer from '~/components/Footer';

    export default {
        data() {
            return {
                msg: "This is my grapesjs page",
            }
        },
        mounted () {
            
        }
    }
</script>

<style lang="scss">
.article-document {
    border: 3px solid black;
    margin-left: 4rem;
    margin-right: 4rem;
    margin-top: 2rem;
    height: auto;
    padding-left: 2rem;
    padding-right: 2rem;
}
.view-all-button {
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 5rem;
}
.article-title {
    margin-top: 1rem;
    font-size: 3rem;
    text-align: center;
    font-weight: 800;
    margin-bottom: 4rem;
}
.small-card {
    width: 100%;
    border: 3px solid black;
    padding: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
.status-submit-content {
    .columns {
        .column {
            h1 {
                font-size: 2rem;
            }
        }
    }
}
</style>