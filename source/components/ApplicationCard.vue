<template>
    <section class="article-card">
        <div class="columns">
            <div class="column is-half">
                <h1 class="article-name">{{props_topic}}</h1>
            </div>
            <div class="column">{{props_sentdAt}}</div>
            <div class="column">{{props_status}}</div>
            <div class="column">
                <div class="block article-delete" @click="showItem" >
                    <b-icon
                        icon="eye"
                        size="is-normal">
                    </b-icon>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import firebase from '~/plugins/firebase.js'

export default {
    name : "ArticleCardComponent",
    props: ['id',  'sentAt', 'topic', 'synopsis', 'status', 'reason'],
    data() {
        return {
            props_id : this.id,
            props_sentdAt : this.sentAt,
            props_topic : this.topic,
            props_synopsis : this.synopsis,
            props_status : this.status,
            props_reason : this.reason
        }
    },
    mounted() {
        
    },
    methods: {
        showItem() {
            this.$buefy.dialog.prompt({
                title: this.topic,
                message: "<p>SendAt : "+this.sentAt+
                    "</p><p>Status : "+this.status+"</p><p>Synopsis</p><p>"+this.synopsis+"</p>"+
                    "</p>",
                textareaAttrs: {
                    placeholder: 'Deny',
                    maxlength: 100,
                    value: this.props_reason
                },
                cancelText: 'Approve',
                confirmText: 'Deny',
                type: 'is-info',
                onConfirm: (value) => this.denyFunc(value),
                onCancel: () => this.approve()
            })
        },
        approve() {
            // admin - application - approve
            new this.$firebase.firestore()
            .collection("applications")
            .doc(this.id)
            .update({
                status : "live",
                reason : ""
            })

            new this.$firebase.firestore()
            .collection("applications")
            .doc(this.id)
            .get()
            .then((docRef) => { 
                this.props_status = docRef.data() .status,
                this.props_reason = docRef.data().reason
            })

            // client - users - approve
            const userID = localStorage.getItem('userID')
            new this.$firebase.firestore()
            .collection("users")
            .doc(userID)
            .update({
                denied : "",
                isEditor : "true"
            })

            this.$buefy.toast.open({
                message: 'Status is approved successfully!',
                type: 'is-success'
            })
        },
        denyFunc(val) {
            const userID = localStorage.getItem('userID')
            // admin - application
            new this.$firebase.firestore()
            .collection("applications")
            .doc(userID)
            .update({
                status : "deny",
                reason : val
            })

            new this.$firebase.firestore()
            .collection("applications")
            .doc(userID)
            .get()
            .then((docRef) => { 
                this.props_status = docRef.data().status,
                this.props_reason = docRef.data().reason
            })

            // client - users
            
            new this.$firebase.firestore()
            .collection("users")
            .doc(userID)
            .update({
                denied : val,
                isEditor : "false"
            })
            
            this.$buefy.toast.open({
                message: 'Status is denied successfully!',
                type: 'is-success'
            })
        }
    }
}
</script>
<style lang="scss">
.tab-content {
    padding: 0 !important;
    padding-top: 2rem !important;
}
.article-card {
    border: 3px black solid;
    background-color: white;
    height: auto;
    padding: 0.5rem;
    margin-bottom: 1rem;
    text-align: center;
}
.article-name {
    font-weight: bold;
    text-align: left;
}
.modalTextarea {
    width: 100%;
    padding: 3px;
    margin-top: 5px;
}
</style>