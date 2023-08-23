<script setup lang='ts'>
import { computed, watch } from 'vue';
import { onMounted, ref } from 'vue';
import RenderVNode from '../DropDown/RenderVNode';
import { MessageProps } from './types';
import Icon from '../Icon/Icon.vue';
import { getLastBottomOffset, getLastInstance } from './methods';
import { nextTick } from 'vue';




/*********************************导包分界线***************************************/
/* macros */



/* props */
const props = withDefaults(defineProps<MessageProps>(), {
    type: 'info',
    duration: 3000,
    offset: 20,
})
/* emits */


/* datas */
// 控制message的展示或隐藏
const isVisible = ref(false)
// console.log("prevMessageInstance :", getLastInstance());

const messageElem = ref<HTMLDivElement | null>();
const height = ref(0);


/* computed */
const lastOffset = computed(() => getLastBottomOffset(props.id ));
const topOffset = computed(() => props.offset + lastOffset.value);
const bottomOffset = computed(() => height.value + topOffset.value);
const cssStyle = computed(() => ({
    position: "absolute",
    left : "50%",
    top: topOffset.value + 'px',
    zIndex: props.zIndex,
}))

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
onMounted(async () => {
    isVisible.value = true;
    startTimer();
    await nextTick();
    height.value = messageElem.value!.getBoundingClientRect().height;

})
/* useComposition */


/* macros */
defineExpose({
    bottomOffset,
    isVisible,
})
</script>
<template>
    <div :style="cssStyle" ref="messageElem" class="v-message"
        :class="{ [`v-message--${type}`]: type, 'is-close': isShowClose }" role="alert" v-show="isVisible">
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
    width: calc(max-content + 10px);
    height: 30px;
    border-radius: 3px;
    line-height: 30px;
    padding: 0 10px;

}
</style>