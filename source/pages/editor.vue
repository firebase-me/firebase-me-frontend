<template>
    <div class="article-document">
        <h1 class="article-title">ARTICLE TITLE</h1>
        <p class="article-pages">page1 | page2 | page3</p>
        <h1 class="article-preview">Header Preview</h1>
        <div class="blue-panel"></div>
        <h1 class="small-article-preview">Header Preview</h1>

        <div class="video-div">
        <video
            ref="videoPlayer"
            muted
            controls
            autoplay
            class="article-video"
        >
            <source :src="videoUrl" type="video/mp4" />
        </video>
        </div>
        <div class="status-submit-content">
            <div class="columns">
                <div class="column is-half "><b-button type="is-primary">Previous</b-button></div>
                <div class="column is-half "><b-button type="is-primary">Next</b-button></div>
            </div>
        </div>
    </div>
</template>

<script>
import 'grapesjs/dist/css/grapes.min.css';
// import grapesjs from 'grapesjs';


    export default {
        data() {
            return {
                videoUrl: 'https://dms.licdn.com/playlist/C5605AQHKk53zn6dukw/mp4-720p-30fp-crf28/0/1626332720016?e=1626465600&v=beta&t=zmjjneCUyW3F5cWhzVa0jI1HH6VCrvSE6GpFlYVv4Gw'
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
    margin-top: 4rem;
    height: auto;
}
.text-center {
    text-align: center;
}
.article-title {
    margin-top: 1rem;
    font-size: 2.2rem;
    text-align: center;
    font-weight: 800;
}
.article-pages {
    font-weight: 500;
    text-align: center;
    color: rgb(212, 212, 62);
}
.article-preview {
    margin-top: 2rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 800;
}
.blue-panel {
    height: 0.5rem;
    width: 50%;
    background-color: rgb(30, 30, 148);
    text-align: center;
    margin: 0 auto;
    margin-top: 1rem;
    // margin-right: 15rem;
}
.small-article-preview {
    margin-top: 2rem;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 500;
}
.article-video {
    width: 60%;
    padding-top: 2rem;
    margin: 0 auto;
}
.video-div{ 
    text-align: center;
    margin: 0 auto;
}
.status-submit-content {
    margin-top: 3rem;
    margin-bottom: 2rem;
    .columns {
        .column {
            text-align: center;
        }
    }
}
</style>