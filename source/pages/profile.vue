<template>
  <section>
    <Header title="Profile" />
    <MenuGroup />

    <div class="columns profile-main-content-userinfo">
        <div class="column is-one-fifth sub-title">DisplayName : </div>
        <div class="column">
            <b-field>
                <b-input placeholder="DisplayName"></b-input>
            </b-field>
        </div>
        <div class="column"><b-button type="is-primary">Save</b-button></div>
    </div>

    <div class="columns profile-main-content-userinfo">
        <div class="column is-one-fifth">Internal UID : </div>
        <div class="column">{{userID}}</div>
    </div>

     <div class="columns profile-main-content-userinfo">
        <div class="column is-one-fifth">Editor UID : </div>
        <div class="column">Internal UID</div>
    </div>

     <div class="columns profile-main-content-userinfo">
        <div class="column is-one-fifth">Linked Project: </div>
        <div class="column">Internal UID</div>
    </div>
    <Footer />
  </section>
</template>

<style lang="scss" scoped>
.profile-main-content-userinfo {
    margin: 0 auto;
    width: 60rem;
    padding-left: 10rem;
}
</style>
<script>
    import Header from '~/components/Header';
    import Footer from '~/components/Footer';
    import MenuGroup from '~/components/MenuGroup';
    export default {
        data() {
            return {
                userID : ""
            }
        },
        mounted() {
            this.userID = localStorage.getItem('userID')
        }
    }
</script>