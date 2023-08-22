<script setup lang='ts'>
import { DropdownEmits, DropdownInstance, DropdownProps, MenuOption } from './types';
import VTooltip from '../Tooltip/Tooltip.vue';
import { TooltipInstance } from '../Tooltip/types';
import { ref } from 'vue';




/*********************************导包分界线***************************************/
/* props */
const props = defineProps<DropdownProps>();
/* emits */
const emits = defineEmits<DropdownEmits>();

/* datas */
const tooltipInstance = ref<TooltipInstance | null>(null);




/* macros */

defineOptions({
    name: "VDropdown",
})

defineExpose<DropdownInstance>({
    show: () => tooltipInstance?.value.show,
    hide: () => tooltipInstance?.value.hide,
})


/* computed */



/* methods */
function visibleChange(e: boolean) {
    emits('visible-change', e);
}

function onItemClick(e: MenuOption) {
    if (e.disabled) {
        return;
    }

    emits("select", e)
}

/* watch */


/* hooks */

/* useComposition */

</script>
<template>
    <div class="v-dropdown">
        <v-tooltip ref="tooltipInstance" :trigger="trigger" :placement="placement" :popper-options="popperOptions"
            :open-delay="openDelay" :close-delay="closeDelay" @visible-change="visibleChange" :manual="manual">
            <slot></slot>
            <template #content>
                <ul class="v-dropdown__menu">
                    <template v-for="item in menuOptions" :key="item.key">
                        <!-- 用于当divided的值为true时，两个菜单选项之间的分割线 -->
                        <li v-if="item.divided" role="separator" class="divided-placeholder"></li>
                        <li @click="onItemClick(item)" :id="`dropdown-item-${item.key}`" class="v-dropdown__item"
                            :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }">
                            {{ item.label }}</li>
                    </template>
                </ul>
            </template>
        </v-tooltip>
    </div>
</template>
<style scoped></style>