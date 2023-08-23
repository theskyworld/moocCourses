<script setup lang='ts'>
import { watch } from 'vue';
import { onMounted, ref } from 'vue';
import RenderVNode from '../DropDown/RenderVNode';
import { MessageProps } from './types';





/*********************************导包分界线***************************************/
/* macros */



/* props */
const props = withDefaults(defineProps<MessageProps>(), {
    type: 'info',
    duration: 3000
})
/* emits */


/* datas */
// 控制message的展示或隐藏
const isVisible = ref(false)


/* computed */



/* methods */
function startTimer() {
    if (props.duration === 0) return;

    if (isVisible.value) {
        setTimeout(() => {
            isVisible.value = false;
        }, props.duration)
    }
}


/* watch */
// Message隐藏时卸载Message组件
// 其DOM结构在真实DOM结构中也被移除
watch(isVisible, (newValue) => {
    if (!newValue) {
        props.destory();
    }
})

/* hooks */
onMounted(() => {
    isVisible.value = true;
    startTimer();
})
/* useComposition */

</script>
<template>
    <div class="v-message" :class="{ [`v-message--${type}`]: type, 'is-close': isShowClose }" role="alert" v-if="isVisible">
        <!-- message -->
        <div class="v-message__content">
            <slot>
                <RenderVNode :vNode="message" v-if="message"></RenderVNode>
            </slot>
        </div>
        <!-- 关闭按钮 -->
        <div class="v-message__close" v-if="isShowClose">
            <Icon icon="xmark"></Icon>
        </div>
    </div>
</template>
<style scoped>
.v-message {
    background-color: green;
    color: black;
}
</style>