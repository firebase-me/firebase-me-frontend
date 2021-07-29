<template>
    <section>
        <ApplicationCard v-for="application in applications" :key="application.id"
            :id="application.id" 
            :status="application.status" 
            :sentAt="application.sentAt"
            :synopsis="application.synopsis"
            :topic="application.topic"
            :reason="application.reason"
        />
    </section>
</template>

<script>
    import ApplicationCard from '~/components/ApplicationCard';

    export default {
        data() {
            return {
                email: '',
                applications: []
            }
        },
        mounted() {
            new this.$firebase.firestore().collection("applications").onSnapshot(snapshot => {
                this.applications = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }))
            })
            console.log('applications', this.applications)
        }
    }
</script>