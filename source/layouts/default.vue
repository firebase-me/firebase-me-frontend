<template>
    <div class="sidebar-page">
        <section class="sidebar-layout">
             <b-sidebar
                v-if="$nuxt.$route.path != '/articles/editor'"
                position="static"
                :mobile="mobile"
                :expand-on-hover="expandOnHover"
                :reduce="reduce"
                :delay="expandWithDelay ? 500 : null"
                type="is-light"
                open
            >
                <div class="p-1">
                    <div class="block columns">
                        <div class="column is-3 title-logo">
                          <NuxtLink to="/">
                          <img
                              class="firebase-image"
                              src="~assets/firebase.png"
                              alt="firebase-image"
                              height="5"
                          >
                          </NuxtLink>
                        </div>
                        <div class="column title">
                          <span>Firebase.me</span>
                        </div>
                    </div>
                    <div class="mobile-logo">
                      <img
                          class="firebase-image"
                          src="~assets/firebase.png"
                          alt="firebase-image"
                          height="5"
                      >
                    </div>
                    <div v-if="!username" class="container mb-1rem signin">
                      <b-button @click="signInPopup" type="is-primary">Sign In</b-button>
                    </div>
                    <div v-if="username" class="block columns signout">
                        <div class="column is-3 user-logo">
                          <img
                            src="~assets/user.png"
                            alt="userimage"
                            height="28"
                          >
                        </div>
                        <div class="column user-title">
                          <h4><NuxtLink to="/profile">{{ username }}</NuxtLink></h4>
                          <h5><a @click="signout">Sign out</a></h5>
                        </div>
                    </div>
                    <div class="mobile-user">
                      <img
                        src="~assets/user.png"
                        alt="userimage-mobile"
                        height="18"
                      >
                    </div>
                    <b-menu class="is-custom-mobile">
                        <b-menu-list label="">
                            <b-menu-item icon="bookmark" label="FAQ" @click="handleClick('/faq')">
                                <b-menu-item icon="check" label="What is Firebase"></b-menu-item>
                                <b-menu-item icon="check" label="Find the right Database"></b-menu-item>
                                <b-menu-item icon="check" label="Hidden Billing Coats"></b-menu-item>
                            </b-menu-item>
                            <b-menu-item icon="book" label="Documentation" @click="handleClick('/articles/editor')">
                                <b-menu-item icon="check" label="Rest API"></b-menu-item>
                                <b-menu-item icon="check" label="Realtime Transactions"></b-menu-item>
                            </b-menu-item>
                            <b-menu-item icon="book-open" label="Guides">
                                <b-menu-item icon="check" label="Optimising database reads"></b-menu-item>
                                <b-menu-item icon="check" label="Manage custom claims"></b-menu-item>
                                <b-menu-item icon="check" label="Send custom e-mails"></b-menu-item>
                            </b-menu-item>
                            <b-menu-item icon="tools" label="Tools">
                                <b-menu-item icon="check" label="Rules Sandbox"></b-menu-item>
                                <b-menu-item icon="check" label="Custom Schedules"></b-menu-item>
                                <b-menu-item icon="check" label="Firestore Import/Expert"></b-menu-item>
                            </b-menu-item>
                        </b-menu-list>
                        <b-switch class="switch-channel" v-model="reduce" />
                    </b-menu>
                </div>
            </b-sidebar>

            <div v-if="$nuxt.$route.path != '/articles/editor'" class="container column is-10 w-full">
              <Nuxt />
            </div>

            <div v-if="$nuxt.$route.path === '/articles/editor'" class="container column is-12 w-full">
              <Nuxt />
            </div>
        </section>
    </div>
</template>

<script>

export default {
  data() {
      return {
        expandOnHover: false,
        expandWithDelay: false,
        mobile: "reduce",
        reduce: false,
        username : ""
      }
  },
  methods: {
    signInPopup: async function() { 
      var provider = new this.$firebase.auth.GoogleAuthProvider()
      const result = await this.$firebase.auth().signInWithPopup(provider)
      var user = result.user
      this.username = user.displayName
      this.userID = user.uid
      localStorage.setItem("username", user.displayName)
      localStorage.setItem("userID", user.uid)
      console.log("users:", this.userID)

      new this.$firebase.firestore()
      .collection("users")
      .doc(this.userID)
      .get()
      .then((docRef) => { 
          if(!docRef.data()) {
            const document = {
              idEditor : null,
              credit : 0,
              liked: null,
              projects: [],
              denied : null,
              articles: null
            }

            new this.$firebase.firestore()
            .collection("users")
            .doc(this.userID)
            .set(document)
          }
      })
    },
    signout : function() {
      localStorage.removeItem("username")
      localStorage.removeItem("userID")
      this.username = ""
    },
    handleClick(to) {
      this.$router.push({path: to})
    }
  },
  mounted: function() {
    this.username = localStorage.getItem('username')
    console.log('path:', $nuxt.$route.path === "/articles/editor")
  }
};
</script>

<style lang="scss">
html, body
{
    height: 100%;
}
@media screen and (min-width: 1216px){
  .container:not(.is-max-desktop) {
      max-width: 100%;
  }
}
.gjs-cv-canvas {
    width: 100% !important;
}
.gjs-block-section {
    width: 100% !important;
    min-height: 2rem !important;
}
.switch-channel {
  bottom: 1rem;
  position: fixed;
  left: 1rem;
}
.p-1 {
  padding: 1em;
  background-color: #666666;
  border: 2px solid black;
  height: 200vh;
  .user-logo{
    margin-left: 1rem;
  }
  .mobile-logo, .mobile-user{
    display: none;
    text-align: center;
  }
  .block {
    .title{
      font-size: 1.7rem;
      font-weight: 500;
      padding-top: 2rem;
      color: white;
    }
    .title-logo{
      padding-top: 1.5rem;
    }
    .user-title{
      font-size: 1rem;
      font-weight: 500;
      color: white;
      h4 {
        a {
          color: white;
        }
        a:hover {
          color: red;
        }
      }
      h5 {
        a {
          color: white;
        }
      }
    }
  }
  .menu-list {
      li {
          a {
              color: white;
              font-size: 12px;
          }
          a:hover {
              background-color: rgb(211, 68, 68);
          }
      }
  }
  .switch-channel{
    margin-top: 1rem;
  }
}
.sidebar-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    .sidebar-layout {
        display: flex;
        flex-direction: row;
        min-height: 100%;
    }
}

.icon {
  i {
    font-size: 1rem;
  }
}

@media screen and (max-width: 768px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini-mobile {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
                    .icon {
                      i {
                        font-size: 1.7rem;
                      }
                    }
                    .signin {
                      display: none;
                    }
                    .block {
                      display: none;
                    }
                    .mobile-logo{
                      display: block;
                      text-align: center;
                      img {
                        width: 4rem;
                        height: 3rem;
                      }
                    }
                    .mobile-user{
                      display: block;
                      img{
                        height: 3rem;
                      }
                    }
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                    .is-custom-mobile{
                      text-align: center;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 769px) {
    .b-sidebar {
        .sidebar-content {
            &.is-mini {
                &:not(.is-mini-expand),
                &.is-mini-expand:not(:hover):not(.is-mini-delayed) {
                    .icon {
                      i {
                        font-size: 1.7rem;
                      }
                    }
                    .signin {
                      display: none;
                    }
                    .block {
                      display: none;
                    }
                    .mobile-user{
                      display: block;
                      text-align: center;
                      img{
                        height: 3rem;
                      }
                    }
                    .mobile-logo{
                      display: block;
                      img {
                        width: 4rem;
                        height: 3rem;
                      }
                    }
                    .menu-list {
                        li {
                            a {
                                span:nth-child(2) {
                                    display: none;
                                }
                            }
                        }
                    }
                    .menu-label:not(:last-child) {
                        margin-bottom: 0;
                    }
                    .is-custom-mobile{
                      text-align: center;
                    }
                }
            }
        }
    }
}
.is-mini-expand {
    .menu-list a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}

.mb-1rem {
  margin-bottom: 1rem;
}
.signin {
  text-align: right;
}
.signout {
  text-align: left;
  background-color: #a3a3a3;
  width: 106%;
}
</style>