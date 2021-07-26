<template>
    <div class="header">
        <span class="header-title">{{pagename}}</span>
        <span class="header-setting">
            <NuxtLink to="/admin/overview">
            <img
                class="setting-image"
                src="~assets/setting.png"
                alt="setting-image"
                height="5"
            >
            </NuxtLink>
        </span>
    </div>
</template>

<script>

export default {
    name : "HeaderComponent",
    props: ['title'],
    data() {
        return {
            pagename : this.title
        }
    }
};
</script>

<style>
.header{
    height: 5rem;
    width: 100%;
    background-color: #303030;
    top: 0;
    position: relative;
    padding-top: 1rem;
    margin-left: -0.75rem;
    margin-top: -0.75rem;
}
.header-title {
    color: white;
    padding-left: 10rem;
    font-size: 1.5rem;
    font-weight: 500;
}
.header-setting {
    position: absolute;
    right: 5rem;
    color: white;
}
.setting-image {
    max-width: 2rem;
    cursor: pointer;
}
</style>