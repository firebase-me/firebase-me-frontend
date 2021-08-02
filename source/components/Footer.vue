<template>
  <div class="footer">
        <p>
            Firebase.me is not liable for any misuseor damages.
        </p>

        <p>
            User discretion is advised.
        </p>
        <div class="columns is-desktop bottom-menu">
            <div class="column"><a href="/">Privacy Policy</a></div>
            <div class="column"><a href="https://twitter.com/FirebaseMe">Twitter</a></div>
            <div class="column"><a href="https://discord.firebase.me/">Discord</a></div>
            <div class="column"><a href="/">Contact Us</a></div>
        </div>
  </div>
</template>

<style lang="scss">
.footer{
    height: 8rem;
    width: 100vw;
    background-color: #212121;
    bottom: 0;
    left: 0;
    position: absolute;
    padding-top: 1rem;
    margin-left: -12rem;

    p {
        color: white;
        text-align: center;

    }
    .bottom-menu{
        color: white;
        padding-left: 15rem;
        padding-right: 15rem;
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