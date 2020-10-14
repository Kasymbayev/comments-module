<template>
    <div class="comment_wrapper">
        <div class="container d-flex justify-content-center">
            <div class="comment col-xl-6 col-lg-7 col-sm-12 col-12" v-click-outside="outside">
                <div class="comment__header d-flex align-items-center justify-content-between">
                    <h3>Коментарии ({{comments.length}})</h3>
                    <transition name="fade">
                        <span v-if="commentItems.id">Вы отвечаете {{this.commentItems.fullname}}</span>
                    </transition>
                </div>
                <div class="comment__body">
                    <transition-group name="fade">
                        <comment-item v-for="(comment, index) in comments"
                                      :comment="comment"
                                      :key="comment.id + index"
                                      v-if="comments.length"
                                      @author="authorData"/>
                        <div class="no-item" v-else>Стена на данный момент пустая</div>
                    </transition-group>
                </div>
                <div class="comment__footer">
                    <div class="comment__footer_form">
                        <input class="name-input" type="text" placeholder="Введите имя" v-model="name" autofocus>
                        <input class="comment-input" type="text" placeholder="Коментарии" v-model="comment" v-on:keyup.enter="sendComment()">
                        <button class="comment-button" @click="sendComment()">
                            <img src="../assets/images/icons/send.svg">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import commentItem from './comment-item-component'
import clickOutside from '../helper/v-outside'
import moment from 'moment'
export default {
    name: "comment-component",
    components: {
        commentItem
    },
    data() {
        return {
            name: '',
            comment: '',
            comments: [],
            commentItems: []
        }
    },
    directives: {
        'click-outside': clickOutside
    },
    methods: {
        outside () {
            this.comment = '';
            this.commentItems = [];
        },
        recordData() {
            const Object = {};
            Object.id = Math.round(1 - 0.5 + Math.random() * (1000 - 1 + 1));
            Object.fullname = this.name;
            Object.comment = this.comment;
            Object.answered = [];
            Object.sendtime = moment();
            Object.reductionname = this.reductionName;
            if (this.commentItems.length < 1) {
                this.comments.push(Object);
            } else {
                this.commentItems.answered.push(Object);
            }
        },

        authorData (e) {
            this.commentItems = e;
            this.comment = this.commentItems.fullname + ',  ';
        },

        sendComment() {
            if (this.name && this.comment) {
                this.recordData();
                this.commentItems = [];
                this.comment = '';
                this.name = '';
            }
        }
    },
    computed: {
        reductionName() {
            let splitName = this.name.split(' ');
            let reductionName = '';
            if (splitName.length > 1) {
                reductionName = splitName[0].slice(0,1) + splitName[1].slice(0,1);
            } else {
                reductionName = this.name.slice(0,1)
            }
            return reductionName;
        }
    },
    mounted() {
        console.log(this.comments)
    }
}
</script>

<style lang="scss" scoped>

    .comment {
        padding: 25px 0;
        &__header {
            width: 100%;
            height: 75px;
            padding: 0 25px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background: linear-gradient(270deg, #9D3EF2 51.56%, #755EDD 100%);

            h3 {
                font-weight: normal;
                color: #fff;
                font-size: 18px;
                margin: 0;
            }

            span {

                color: #fff;
            }
        }

        &__body {
            width: 100%;
            max-height: 350px;
            overflow-y: auto;
            transition: all 0.3s ease-in-out;
            background: #fff;
        }

        .comment__footer {
            width: 100%;
            height: auto;
            background: #F1F1F1;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;

            &_form {
                width: 100%;
                padding: 25px;
                input {
                    width: 100%;
                    height: 50px;
                    border-radius: 10px;
                    border: none;
                    padding-left: 25px;
                    outline: none;
                }

                input.comment-input {
                    width: 85%;
                    height: 50px;
                    border-radius: 10px 0 0 10px;
                    border: none;
                    padding: 0 25px;
                    outline: none;
                    margin: 15px 0;
                }

                button.comment-button {
                    width: 14%;
                    height: 50px;
                    margin-top: 15px;
                    border: none;
                    background: #755EDD;
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                    outline: none;
                    position: absolute;
                    &:hover {
                        background: #876eff;
                    }
                    img {
                        max-width: 20px;
                    }
                }
            }
        }
    }


    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
        transition: opacity 0.2s;
    }
</style>