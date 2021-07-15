<template>
    <section class="section">
        <client-only>
        <h1>GrapesJS</h1>
        {{msg}}
        </client-only>​​
    </section>
</template>

<script>
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';


    export default {
        data() {
            return {
                msg: "This is my grapesjs page"
            }
        },
        mounted () {
            
        }
    }
</script>

<style>

</style>