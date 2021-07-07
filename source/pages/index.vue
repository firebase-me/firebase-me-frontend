<template>
    <section>
        <b-field>
            <b-input placeholder="Search..."
                type="search"
                icon="magnify"
                icon-clickable
                @icon-click="searchIconClick">
            </b-input>
        </b-field>

        <div class="dashboard">
          <img
                src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png"
                alt="Lightweight UI components for Vue.js based on Bulma"
                class="dashboard-logo"
            />
          <h1 class="firebase-title">Firebase.me</h1>
          <p class="mt-50">
            An online resource for Google Firebase, with community written<br> Guides and Documentation enhancements.
          </p>
          <p class="mt-50">
            Firebase.me also supports dedicated tools to assist with your<br> firebase projects, including managing custom claims and more.
          </p>
          <p>
            Subscribe for $5 a month, stop any time.
          </p>
          
        </div>

        <Footer />
    </section>
</template>

<script>
    import Footer from '~/components/Footer';

    export default {
        data() {
            return {
                email: '',
            }
        },
        methods: {
            searchIconClick() {
                alert('You wanna make a search?')
            },
            clearIconClick() {
                this.email = '';
                alert('Email cleared!')
            }
        }
    }
</script>

<style lang="scss">
.field {
  div {
    input {
      width : 20rem;
    }
  }
}
.dashboard{
  text-align: center;
}
.dashboard-logo{
  height: 10rem;
}
.mt-50{
  margin-top: 3rem;
}
.firebase-title{
  font-size: 2rem;
  font-weight: 500;
}
</style>