<template>
    <section v-if="data.length > 0" v-for="item in data" class="chat-contact">
        <div class="chat-contact__info">
            <img :src="item.avatar" alt="">
            <div class="chat-contact__info-title">
                <h3>{{ item.name }}</h3>
                <span>{{ item.info }} • {{ item.time }}</span>
            </div>
        </div>
        
        <img class="chat-contact__status" :src="item.icon" alt="">
    </section>
    <section v-else>
        <p>У вас нет активных чатов</p>
    </section>
</template>

<script>
export default {
    name: 'ChatContact',
    props: { data: Array },
    data: () => ({
    }),
}
</script>

<style lang="scss">
    .chat-contact {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        padding: 8px 0;

        &__info {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            img {
                margin-right: 12px;
            }
        }

        &__info-title{
            color: #000000;

            h3 {
                font-size: 17px;
                font-style: normal;
                font-weight: 500;
                line-height: 22px;
            }

            span {
                color: rgba(0, 0, 0, 0.50);
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 20px;
            }
        }

        &__status {
            margin-left: 20px;
        }
    }
</style>