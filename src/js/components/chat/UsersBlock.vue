<template>
    <section class="users">

        <div class="users__header">
            <!-- Left side -->
            <div class="header__left-side">
                <img class="left-side__avatar" :src="avatar" alt="">
                <h2 class="left-side__title">{{ name }}</h2>
            </div>

            <!-- right side -->
            <div class="header__right-side">
                <img class="right-side__take-photo" :src="icons.takePhoto" alt="">
                <img class="right-side__new-message" :src="icons.newMwssage" alt="">
            </div>
        </div>

        <!-- Search -->
        <form class="search-block" action="">
            <img class="search__icon" src="/src/img/chat/icons/search-small.png" alt="">
            <input class="search__field" type="text" placeholder="Поиск">
        </form>

        <!-- ChatContact -->
        <section class="chats-block">
            <ChatContact :data="chats"></ChatContact>
        </section>

    </section>
</template>

<script>
import ChatContact from './ChatContact.vue';
import axios from 'axios';
export default {
    name: 'UsersBlock',
    components: {
        ChatContact,
    },
    data: () => ({
        name: 'Alexey',
        avatar: '/src/img/chat/users/Oval-small-1.png',
        icons: {
            takePhoto: '/src/img/chat/icons/take-photo.png',
            newMwssage: '/src/img/chat/icons/new-message.png'
        },

        chats: [],
    }),
    methods: {
        getData() {
            axios.get('/src/data/chats.json')
                .then(res => {
                    if(res.data.length > 0) {
                        this.chats = res.data
                    }
                })
                .catch(er => {
                    console.log(er)
                })
                
        }
    },

    mounted() {
        this.getData();
    },
}
</script>

<style lang="scss">
    .users {
        display: flex;
        flex-direction: column;
        width: 400px;
        height: auto;
        background-color: #fff;
        padding: 16px;
        border-right: 2px solid #0084FE;
    }

    // header
    .users__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .header__left-side,
    .header__right-side {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .left-side__avatar {
            margin-right: 12px;
    }

    .left-side__title {
        margin-right: 20px;
        font-weight: bold;
        font-size: 30px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .right-side__new-message {
        margin-left: 12px;
    }

    // search
    .search-block {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 4px 0 8px;
        padding: 8px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.05);

        .search__icon {
            margin-right: 6px;
        }
        .search__field {
            background: none;
            width: 100%;
            &:focus {
                outline: none;
            }
        }
    }

    // chats-line
    .chats-block {
        display: flex;
        flex-direction: column;
        width: 100;
    }
</style>