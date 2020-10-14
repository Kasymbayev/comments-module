<template>
    <div class="comment-item">
        <div class="item d-flex align-items-center">
                <div class="item__avatar">
                    <div :style="{backgroundColor: randomColor(comment.id + 15)}" class="item__avatar-photo d-flex justify-content-center align-items-center">
                        <span>{{comment.reductionname}}</span>
                    </div>
                </div>
                <div class="item__content">
                    <div class="item__content-name d-flex justify-content-between align-items-center">
                        <div class="title">
                            <h3>{{comment.fullname}}</h3>
                            <span @click="answered(comment)">ответить</span>
                        </div>
                        <div class="time d-flex align-items-center">
                            <img src="../assets/images/icons/time.svg" alt="">
                            <span>{{comment.sendtime | moment('HH:mm')}}</span>
                        </div>
                    </div>
                    <div class="item__content-text">
                        <p>{{comment.comment}}</p>
                    </div>
                </div>
            </div>
        <div class="answered d-flex" v-if="comment.answered.length" v-for="(item, index) in comment.answered" :key="item.id + index">
            <div class="answered__avatar">
                <div class="item__avatar-photo d-flex justify-content-center align-items-center">
                    <span>{{item.reductionname}}</span>
                </div>
            </div>
            <div class="answered__content">
                <div class="answered__content-name d-flex justify-content-between align-items-center">
                    <div class="title">
                        <h3>{{item.fullname}}</h3>
                    </div>
                    <div class="time d-flex align-items-center">
                        <img src="../assets/images/icons/time.svg" alt="">
                        <span>{{comment.sendtime | moment('HH:mm')}}</span>
                    </div>
                </div>
                <div class="answered__content-text">
                    <p>{{item.comment}}</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "comment-item-component",
        props: ['comment'],
        data() {
            return {
                colorCache: {}
            }
        },
        methods: {
            randomColor(id) {
                const r = () => Math.floor(256 * Math.random());
                return this.colorCache[id] || (this.colorCache[id] = `rgb(${r()}, ${r()}, ${r()})`);
            },
            answered(comment) {
                console.log()
                this.$emit('author', comment)
            }
        },
    }
</script>

<style lang="scss" scoped>

    .item, .answered {
        padding: 25px;
        &__avatar {
            &-photo {
                width: 75px;
                height: 75px;
                border-radius: 100px;
                background: #755EDD;
                span {
                    color: #fff;
                    font-size: 24px;
                }
            }
        }
        &__content {
            width: 100%;
            padding: 0 25px;

            &-name {
                padding-bottom: 5px;
                .title {
                    display: flex;
                    span {
                        cursor: pointer;
                        font-size: 16px;
                        padding: 0 15px;
                        color: #8d8d8d;
                        &:hover {
                            color: #755EDD;
                        }
                    }
                }
                h3 {
                    font-weight: 500;
                    font-size: 18px;
                    color: #984edd;
                }
                .time {
                    img {
                        max-width: 15px;
                        fill: #9D3EF2;
                        margin-right: 8px;
                    }
                    span {
                        font-weight: 600;
                        color: #8d8d8d;
                        font-size: 14px;
                    }
                }
            }
            &-text {
                p {
                    font-size: 16px;
                }
            }
        }
    }

    .answered {
        padding-top: 0;
        padding-left: 125px;
    }

</style>