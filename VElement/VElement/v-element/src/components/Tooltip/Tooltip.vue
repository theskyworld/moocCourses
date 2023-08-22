<script setup lang='ts'>
import { createPopper, Instance } from '@popperjs/core';
import { reactive, ref, watch } from 'vue';
import { TooltipEmits, TooltipProps } from './types';
import useOnClickOutside from './useOnClickOutside';

/*  */




/*********************************导包分界线***************************************/
/* props */

defineOptions({
    name: "VTooltip",
})

const props = withDefaults(defineProps<TooltipProps>(), {
    placement: 'bottom',
    trigger: "click",
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

const events: Record<string, any> = ref({});
const outerEvents: Record<string, any> = ref({});


// 点击容器元素外部时能自动关闭popper
const tooltipWrapperElem = ref();
useOnClickOutside(tooltipWrapperElem, () => {
    if (props.trigger === "click" && isOpen.value) {
        onClose();
    }
})
/* computed */






/* methods */
// 侦听click事件，控制浮层显隐
function onTogglePopper() {
    isOpen.value = !isOpen.value;
    emits('visible-change', isOpen.value);
}

function onOpen() {
    isOpen.value = true;
    emits("visible-change", true);
}

function onClose() {
    isOpen.value = false;
    emits("visible-change", false);
}

// 动态绑定不同触发事件下的事件回调
function attachEvents() {
    // hover事件触发
    if (props.trigger === "hover") {
        events.value["mouseenter"] = onOpen;
        // 离开事件的回调绑定外外部元素上
        outerEvents.value["mouseleave"] = onClose;
        // click事件触发
    } else if (props.trigger === "click") {
        events.value["click"] = onTogglePopper;
    }
}
attachEvents();


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
}, { flush: "post" });

// 监听trigger的变化，在触发方式发生改变时相应地改变其绑定的事件回调
watch(() => props.trigger, (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
        // 清空旧的events和outerEvents
        events.value = {};
        outerEvents.value = {};
        attachEvents();
    }
})

/* hooks */

/* useComposition */

</script>
<template>
    <!-- 将离开的事件回调绑定在外部元素上，避免鼠标一离开触发元素就隐藏popper（即使鼠标在popper上时） -->
    <div v-on="outerEvents" class="v-tooltip" ref="tooltipWrapperElem">
        <!-- 用于触发的区域 -->
        <!-- 固定的通过click的方式来触发 -->
        <!-- <div @click="onTogglePopper" ref="triggerNodeElem" class="v-tooltip__trigger"> -->
        <!-- 动态绑定触发事件 -->
        <div v-on="events" ref="triggerNodeElem" class="v-tooltip__trigger">
            <slot />
        </div>
        <!-- 用于展示的区域 -->
        <div v-show="isOpen" ref="popperNodeElem" class="v-tooltip__popper">
            {{ content }}
        </div>
    </div>
</template>
<style scoped></style>