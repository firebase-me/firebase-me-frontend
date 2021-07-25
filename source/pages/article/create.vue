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

    <div v-if="deniedState">
        <p class="denied-title">Status : <span class="fc-red">Denied</span></p>
        <div class="notice notification">
            <p><b>Reason</b>&nbsp;&nbsp;:&nbsp;&nbsp;{{denied}}</p>
        </div>
    </div>
    
    <div class="article-content">
        <b-field>
            <b-input v-model="topic" placeholder="Article Topic"></b-input>
        </b-field>
        
        <b-field>
            <b-input v-model="content" maxlength="1000" type="textarea"  placeholder="Synopsis"></b-input>
        </b-field>
    </div>
    
    <div class="status-submit-content">
        <div class="columns no-margin">
            <div class="column is-half px-0 pt-4">Status : <span class="status-span">{{status}}</span></div>
            <div class="column is-half px-0 float-right"><b-button v-on:click="create(topic, content)" type="is-primary">Submit</b-button></div>
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
    import firebase from '~/plugins/firebase.js'

    export default {
        data() {
            return {
                name: '',
                topic : null,
                content : null,
                idEditor : null,
                denied : null,
                deniedState: null,
                status: "None"
            }
        },
        mounted() {
            const userID = localStorage.getItem('userID')
            
            new this.$firebase.firestore()
            .collection("users")
            .doc(userID)
            .get()
            .then((docRef) => { 
                this.idEditor = docRef.data().isEditor,
                this.denied = docRef.data().denied
                console.log("idEditor=>", this.idEditor)

                switch(this.idEditor) {
                    case "true":
                        // code block
                        this.status = "Live"
                        this.deniedState = false
                        break;
                    case "false":
                        // code block
                        this.status = "Denied"
                        this.deniedState = true
                        break;
                    default:
                        // code block
                        this.status = "Pending"
                        this.deniedState = false
                }
            })
        },
        methods: {
            create(t, c) {
                if(!t || !c) {
                    this.$buefy.toast.open({
                        message: 'Input the values correctly',
                        type: 'is-success'
                    })
                } else {
                    const date = new Date;
                    const yy = date.getFullYear()
                    const mm = date.getMonth()+1
                    const dd = date.getDate()
                    const sentAt = yy+'.'+mm+'.'+dd
                    const owner = localStorage.getItem("username")

                    const document = {
                        topic : t,
                        synopsis : c,
                        sentAt,
                        status : "pending",
                        reason : ""
                    }
                    const userID = localStorage.getItem('userID')
                    new this.$firebase.firestore()
                    .collection("applications")
                    .doc(userID)
                    .set(document)
                   
                    this.topic = ""
                    this.content = ""

                    this.status = "pending"
                }
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
.denied-title {
    width: 45rem;
    margin: 0 auto;
    margin-bottom: 1rem;
}
.fc-red {
    color: red;
    font-weight: bold;
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
.article-page-create {
    padding-bottom: 1rem;
    width: 45rem;
    margin: 0 auto;
    .columns {
        .column {
            div {
                width: 100%;
                div {
                    width: 100%;
                    button {
                        width: 100%;
                    }
                }
            }
            button {
                width: 100%;
            }
        }
    }
}
.padding-left0 {
    padding-left: 0;
}
.padding-right0 {
    padding-right: 0;
}
</style>