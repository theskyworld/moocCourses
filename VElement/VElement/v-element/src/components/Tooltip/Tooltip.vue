<script setup lang='ts'>
import { createPopper, Instance } from '@popperjs/core';
import { debounce } from 'lodash-es';
import { computed, onMounted, onUnmounted, ref, toRef, watch } from 'vue';
import { TooltipEmits, TooltipProps, TooltipInstance } from './types';
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
    transition: "fade",
    // 展示和隐藏延迟默认值0
    openDelay: 0,
    closeDelay: 0,
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


const popperOptions = computed(() => ({
    placement: props.placement,
    ...props.popperOptions,
}))

// 点击容器元素外部时能自动关闭popper
const tooltipWrapperElem = ref<HTMLElement>();
useOnClickOutside(tooltipWrapperElem, () => {
    if (props.trigger === "click" && isOpen.value && !props.manual) {
        closePopper();
    }
})

// 添加展示和隐藏的延迟，并添加debounce效果
// eslint-disable-next-line vue/no-setup-props-destructure
const { openDelay, closeDelay } = props;
const openDebounce = debounce(onOpen, toRef(openDelay).value);
const closeDebounce = debounce(onClose, toRef(closeDelay).value);

let openTimes = 0;
let closeTimes = 0;
/* computed */






/* methods */
// 侦听click事件，控制浮层显隐
function onTogglePopper() {
    // isOpen.value = !isOpen.value;
    if (isOpen.value) {
        closePopper();
    } else {
        openPopper()
    }
    // emits('visible-change', isOpen.value);
}




function onOpen() {
    openTimes++;
    console.log("🚀 ~ file: Tooltip.vue:94 ~ onOpen ~ openTimes:", openTimes)
    
    isOpen.value = true;
    emits("visible-change", true);


}

function onClose() {
    closeTimes++;
    console.log("🚀 ~ file: Tooltip.vue:94 ~ onOpen ~ closeTimes:", closeTimes)
    isOpen.value = false;
    emits("visible-change", false);
}

function openPopper() {
    closeDebounce.cancel();
    openDebounce();

}
function closePopper() {
    openDebounce.cancel();
    closeDebounce();
}


// 动态绑定不同触发事件下的事件回调
function attachEvents() {
    // hover事件触发
    if (props.trigger === "hover") {
        events.value["mouseenter"] = openPopper;
        // 离开事件的回调绑定外外部元素上
        outerEvents.value["mouseleave"] = closePopper;
        // click事件触发
    } else if (props.trigger === "click") {
        events.value["click"] = onTogglePopper;
    }
}
if (!props.manual) {
    attachEvents();
}

/* watch */
// 监听isOpen的变化，进行popper实例的创建或销毁
watch(isOpen, (newValue) => {
    // isOpen的值发生变化时
    if (newValue) {
        if (triggerNodeElem.value && popperNodeElem.value) {
            // 创建popper实例，用于展示popper
            popperInstance = createPopper(triggerNodeElem.value, popperNodeElem.value, popperOptions.value)
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
});

// 监听manual的变化，实现寿手动和非手动展示/隐藏popper的切换
watch(() => props.manual, (isManual) => {
    // 手动模式
    if (isManual) {
        events.value = {};
        outerEvents.value = {};
        // 非手动模式
    } else {
        attachEvents();
    }
})


defineExpose<TooltipInstance>({
    show: openPopper,
    hide: closePopper,
})
/* hooks */
onUnmounted(() => {
    popperInstance?.destroy()

})
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
        <Transition :name="transition">
            <div v-show="isOpen" ref="popperNodeElem" class="v-tooltip__popper">
                <!-- {{ content }}用于接收普通文本字符串内容 -->
                <!-- slot用于接收DOM元素、组件等内容 -->
                <slot name="content">
                    {{ content }}
                </slot>
            </div>
        </Transition>
    </div>
</template>
<style scoped>
.v-tooltip {

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity var(--v-transition-duration);
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
}
</style>