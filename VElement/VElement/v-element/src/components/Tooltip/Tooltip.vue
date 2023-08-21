<script setup lang='ts'>
import { createPopper, Instance } from '@popperjs/core';
import { ref, watch } from 'vue';
import { TooltipEmits, TooltipProps } from './types';

/*  */




/*********************************导包分界线***************************************/
/* props */

defineOptions({
    name : "VTooltip",
})

const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'bottom',
    trigger: 'click'
})

/* emits */
const emits = defineEmits<TooltipEmits>();



/* datas */
// 控制浮层的显式或隐藏
const isOpen = ref(false);

// 用于触发和展示浮层的容器元素
const triggerNodeElem = ref<HTMLElement>();
const popperNodeElem = ref<HTMLElement>();

// popper实例
let popperInstance: Instance | null = null;


/* computed */


/* watch */
// 监听isOpen的变化，进行popper实例的创建或销毁
watch(isOpen, (newValue) => {
    // isOpen的值发生变化时
    if (newValue) {
        if (triggerNodeElem.value && popperNodeElem.value) {
            // 创建popper实例，用于展示popper
            popperInstance = createPopper(triggerNodeElem.value, popperNodeElem.value, {
                placement: props.placement
            })
        } else {
            // 销毁popper实例，隐藏popper
            popperInstance?.destroy()
        }
    }
}, {flush : "post"})



/* methods */
// 侦听click事件，控制浮层显隐
function onTogglePopper() {
    isOpen.value = !isOpen.value;
    emits('visible-change', isOpen.value);
}



/* hooks */

/* useComposition */

</script>
<template>
    <div class="v-tooltip">
        <!-- 用于触发的区域 -->
        <div @click="onTogglePopper" ref="triggerNodeElem" class="v-tooltip__trigger">
            <slot />
        </div>
        <!-- 用于展示的区域 -->
        <div v-show="isOpen" ref="popperNodeElem" class="v-tooltip__popper">
            {{ content }}
        </div>
    </div>
</template>
<style scoped></style>