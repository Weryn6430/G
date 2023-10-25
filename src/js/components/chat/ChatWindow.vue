<template>
    <section class="main-window">
        <UsersBlock></UsersBlock>
        <MessageBlock></MessageBlock>
    </section>
</template>

<script>
import UsersBlock from './UsersBlock.vue';
import MessageBlock from './MessageBlock.vue'

export default {
    name: 'ChatWindow',
    components: {
        UsersBlock, MessageBlock,
    },
    data: () => ({
    }),
}
</script>