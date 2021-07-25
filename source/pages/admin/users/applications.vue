<template>
    <section>
        <Header title="Admin Panel" />
        <AdminMenuGroup />
        <AdminUsersGroup />

        <ApplicationCard v-for="application in applications" :key="application.id"
            :id="application.id" 
            :status="application.status" 
            :sentAt="application.sentAt"
            :synopsis="application.synopsis"
            :topic="application.topic"
            :reason="application.reason"
        />

        <Footer />
    </section>
</template>

<style lang="scss" scoped>
.tabs-width {
    width: 80%;
    margin: 0 auto;
}
.setting-image {
    max-width: 1.5rem;
    cursor: pointer;
    padding-top: 0.1rem;
}
.user-content-layout {
    width: 50%;
    text-align: center;
    margin: 0 auto;
}
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

<script>
    import AdminMenuGroup from '~/components/AdminMenuGroup';
    import AdminUsersGroup from '~/components/AdminUsersGroup';
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