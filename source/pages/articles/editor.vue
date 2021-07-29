<template>
    <section class="article-editor">
        <p class="article-title">Guide Editor</p>
        <div class="columns">
            <div class="column is-5">
                <b-field>
                    <p class="control">
                        <b-button label="Title" type="is-success" />
                    </p>
                    <b-input v-model="title"></b-input>
                </b-field>
            </div>
            <div class="column is-5">
                <b-field>
                    <p class="control">
                        <b-button label="Category" type="is-success" />
                    </p>
                    <b-dropdown
                        :scrollable="isScrollable"
                        :max-height="maxHeight"
                        v-model="currentMenu"
                        aria-role="list"
                    >
                        <template #trigger>
                            <b-button
                                :label="currentMenu.text"
                                type="is-primary"
                                :icon-left="currentMenu.icon"
                                class="w-full"
                                icon-right="menu-down" />
                        </template>


                        <b-dropdown-item
                            v-for="(menu, index) in menus"
                            :key="index"
                            :value="menu" aria-role="listitem">
                            <div class="media">
                                <b-icon class="media-left" :icon="menu.icon"></b-icon>
                                <div class="media-content">
                                    <h3>{{menu.text}}</h3>
                                </div>
                            </div>
                        </b-dropdown-item>
                    </b-dropdown>
                </b-field>
            </div>
            <div class="column is-2">
                <b-field>
                    <p class="control">
                        <b-button label="Publish" @click="getContent"  type="is-info" />
                    </p>
                </b-field>
            </div>
        </div>


        <div class="buttons pages-button">
            <b-button type="is-primary">Page 1</b-button>
            <b-button type="is-primary">Page 2</b-button>
            <b-button type="is-primary">Page 3</b-button>
        </div>

        <div id='paragraph'>
            <div class="columns">
                <div class="column is-2">
                    <div id="blocks"></div>
                </div>
                <div class="column is-10">
                    <div id="gjs"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import grapesjs from 'grapesjs'
import 'grapesjs-plugin-ckeditor'
// grapesjs-plugin-ckeditor
    export default {
        data() {
            return {
                header: "",
                subheader: "",
                codeblock: "",
                isScrollable: false,
                maxHeight: 200,
                currentMenu: { icon: 'account-group', text: 'FAQ' },
                menus: [
                    { icon: 'account-group', text: 'People' },
                    { icon: 'shopping-search', text: 'Orders' },
                    { icon: 'credit-card-multiple', text: 'Payments' },
                    { icon: 'dolly', text: 'Logistics' },
                    { icon: 'clock-check', text: 'Jobs' },
                    { icon: 'cart-arrow-right', text: 'Cart' },
                ],
                editor: null,
                title: null
            }
        },
        methods: {
            getContent() {
                if(!this.title) {
                    this.$buefy.toast.open({
                        message: 'Input the title correctly',
                        type: 'is-success'
                    })
                } else {
                    const DB = new this.$firebase.firestore()
                    const html = this.editor.getHtml()

                    const d = new Date;
                    const yy = d.getFullYear()
                    const mm = d.getMonth()+1
                    const dd = d.getDate()

                    const hh = d.getHours()
                    const min = d.getMinutes()
                    const ss = d.getSeconds()
                    const sentAt = yy+'-'+mm+'-'+dd+' '+hh+':'+min+':'+ss

                    const document = {
                        title: this.title,
                        topic: "faq",
                        owner: localStorage.getItem('username'),
                        status: 'public',
                        createdAt: sentAt,
                        lastUpdate: sentAt,
                        lastPublished: sentAt,
                        content : {
                            page0 : {
                                name: "first page",
                                contents : html
                            }
                        }
                    }
                    DB.collection("articles")
                    .add(document)
                    .then(ref => {
                        console.log("Added document with ID: ", ref)
                    })

                    this.$buefy.toast.open({
                        message: 'Published successfully',
                        type: 'is-success'
                    })

                    const path = "/articles/dashboard"
                    this.$router.push({path: path})
                }
            }
        },
        mounted() {
            this.editor = grapesjs.init({
                container: "#gjs",
                fromElement: 1,
                height: "60vh",
                width: "100%",
                storageManager: false,
                panels: { defaults: [] },
                blockManager: {
                    appendTo: '#blocks',
                    blocks: [
                        {
                            id: 'section', // id is mandatory
                            label: '<b>Section</b>', // You can use HTML/SVG inside labels
                            attributes: { class:'gjs-block-section' },
                            content: `<section>
                            <h1>This is a simple title</h1>
                            <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                            </section>`,
                        }, {
                            id: 'text',
                            label: 'Text',
                            attributes: { class:'gjs-block-section' },
                            content: '<div data-gjs-type="text">Insert your text here</div>',
                        }, {
                            id: 'image',
                            label: 'Image',
                            attributes: { class:'gjs-block-section' },
                            // Select the component once it's dropped
                            select: true,
                            // You can pass components as a JSON instead of a simple HTML string,
                            // in this case we also use a defined component type `image`
                            content: { type: 'image' },
                            // This triggers `active` event on dropped components and the `image`
                            // reacts by opening the AssetManager
                            activate: true,
                        }, {
                            id: 'Video',
                            label: 'Video',
                            attributes: { class:'fa fa-video gjs-block-section'},
                            // Select the component once it's dropped
                            select: true,
                            autoplay: true,
                            // You can pass components as a JSON instead of a simple HTML string,
                            // in this case we also use a defined component type `image`
                            content: { type: 'video' },
                            // This triggers `active` event on dropped components and the `image`
                            // reacts by opening the AssetManager
                            activate: true,
                        },
                    ]
                },
            });
        }
    }
</script>

<style lang="scss" scoped>
#blocks {
    height: 60vh;
    background-color: #444444;
}
.w-full {
    width: 100%;
}
.pages-button {
    justify-content: center;
}
.article-container {
    width: 100%;
    margin: 0 auto;
}
.article-title {
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}
</style>