<template>
  <div class="footer">
        <p>
            Firebase.me is not liable for any misuseor damages.
        </p>

        <p>
            User discretion is advised.
        </p>
        <div class="columns is-desktop bottom-menu">
            <div class="column"><a href="/policy">Privacy Policy</a></div>
            <div class="column"><a href="/twitter">Twitter</a></div>
            <div class="column"><a href="/discord">Discord</a></div>
            <div class="column"><a href="/contact">Contact Us</a></div>
        </div>
  </div>
</template>

<style lang="scss">
.footer{
    height: 8rem;
    width: 100%;
    background-color: #303030;
    bottom: 0;
    // left: 0;
    position: absolute;
    padding-top: 1rem;

    p {
        color: white;
        text-align: center;

    }
    .bottom-menu{
        color: white;
        padding-left: 15rem;
        padding-right: 15rem;
        padding-top : 1rem;
    }
    a{
        cursor: pointer;
        color: white;
    }
    a:hover{
        color:red;
    }
}
</style>