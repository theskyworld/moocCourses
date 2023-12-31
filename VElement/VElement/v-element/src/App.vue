<script setup lang="ts">
import { h, onMounted, ref, nextTick } from "vue";
import VButton from "./components/Button//Button.vue";
import { buttonProps, VButtonInstance } from "./components//Button/types";
import VCollapse from "./components/Collapse/Collapse.vue";
import VCollapseItem from "./components/Collapse/CollapseItem.vue";
import VIcon from "./components/Icon/Icon.vue";
import VTooltip from "./components/Tooltip/Tooltip.vue";
import { TooltipInstance, Trigger } from "./components/Tooltip/types";
import { MenuOption } from "./components/DropDown/types";
import VDropdown from "./components/DropDown/DropDown.vue";
import { getLastInstance, mountMessage } from "./components/Message/methods";

let instance;
let addMessage = async () => {
  await nextTick();
  mountMessage({ message: "hello", duration: 0 });
};

// 在组件外部对Button组件对应的button元素进行获取
const vbuttonInstance = ref<VButtonInstance>();
onMounted(() => {

  // Message
  instance = mountMessage({ message: "hello", duration: 3000 });
  // //挂载多个Message
  mountMessage({ message: "hello again", duration: 3000 });
  mountMessage({ message: "too many hellos", duration: 3000 });


  if (vbuttonInstance.value) {
    const vbuttonElem = vbuttonInstance.value.ref;
    // console.log(vbuttonElem); // button  会自动解包，不需要.value
  }
});

const activeItemsNames = ref([]);

// 测试filteredProps的响应式
let size = ref<any>("1x");
setTimeout(() => {
  size.value = "3x";
  instance.destory();

}, 2000);


const triggerEvent = ref<Trigger>("hover");
// 2s后更新popper的触发方式
// setTimeout(() => {
//   triggerEvent.value = "click";
// }, 2000)

const tooltipElem = ref<TooltipInstance | null>();


const menuOptions: MenuOption[] = [
  {
    key: "1",
    label: "item1",
  },
  {
    key: "2",
    // 值为一个虚拟节点
    label: h("b", "this should be bold"),
    disabled: true
  },
  {
    key: "3",
    label: "item3",
    divided: true,
  },
  {
    key: "4",
    label: "item4",
  }
];

// Message

</script>

<template>
  <div class="wrapper">
    <div>
      <!-- Button -->
      <button @click="addMessage">add</button>
      <v-button ref="vbuttonInstance">default</v-button>
      <v-button plain>plain button</v-button>
      <v-button round>round button</v-button>
      <v-button circle>circle button</v-button>
      <v-button disabled>disabled button</v-button><br /><br />
      <v-button type="primary">Primary</v-button>
      <v-button type="success">Success</v-button>
      <v-button type="info">Info</v-button>
      <v-button type="warning">Warning</v-button>
      <v-button type="danger">Danger</v-button><br /><br />
      <v-button type="primary" plain>Primary</v-button>
      <v-button type="success" plain>Success</v-button>
      <v-button type="info" plain>Info</v-button>
      <v-button type="warning" plain>Warning</v-button>
      <v-button type="danger" plain>Danger</v-button><br /><br />
      <v-button size="large">Large</v-button>
      <v-button size="small">Small</v-button><br /><br />
      <v-button size="large" loading>loading</v-button>
      <v-button size="small" icon="arrow-up">arrowUp</v-button><br /><br />
    </div>

    <div>
      <!-- Collapse -->
      <!-- 手风琴模式 -->
      <v-collapse v-model="activeItemsNames" accordion>
        <v-collapse-item name="item1">
          <template #title>
            <h1>title1</h1>
          </template>
          <h2>content1 title</h2>
          <div>content1</div>
        </v-collapse-item>
        <v-collapse-item name="item2" title="Consistency">
          <div>
            Consistent with real life: in line with the process and logic of real
            life, and comply with languages and habits that the users are used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such
            as: design style, icons and texts, position of elements, etc.
          </div>
        </v-collapse-item>
        <v-collapse-item name="item3" title="Feedback">
          <div>
            Operation feedback: enable the users to clearly perceive their
            operations by style updates and interactive effects;
          </div>
          <div>
            Visual feedback: reflect current state by updating or rearranging
            elements of the page.
          </div>
        </v-collapse-item>
        <v-collapse-item name="item4" title="Efficiency">
          <div>
            Simplify the process: keep operating process simple and intuitive;
          </div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the
            users can quickly understand and make decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which helps
            the users to identify and frees them from memorizing and recalling.
          </div>
        </v-collapse-item>
        <v-collapse-item name="item5" title="Controllability">
          <div>
            Decision making: giving advices about operations is acceptable, but do
            not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to
            operate, including canceling, aborting or terminating current
            operation.
          </div>
        </v-collapse-item>
        <v-collapse-item name="item6" title="disabled" disabled>
        </v-collapse-item>
      </v-collapse>
    </div>

    <div>
      <!-- Icon -->
      <v-icon icon="fa-solid fa-user-secret" size="2xl"></v-icon>
      <v-icon icon="arrow-up" size="2xl" spin></v-icon>
      <v-icon icon="arrow-up" :size="size" type="primary"></v-icon>
      <v-icon icon="arrow-up" size="2xl" type="danger"></v-icon>
      <v-icon icon="arrow-up" size="2xl" color="#ebeef5"></v-icon>
    </div>



    <!-- Tooltip -->
    <div>
      <div>
        <v-tooltip style="width: 50px; height: 50px" content="hello tooltip" :trigger="triggerEvent"
          :popperOptions="{ placement: 'top', strategy: 'fixed' }" :openDelay="1000" :closeDelay="1000">
          <v-button type="primary">hello</v-button>
        </v-tooltip>
      </div>
      <div>
        <!-- 手动展示/隐藏模式 -->
        <v-button type="primary" @click="tooltipElem?.show">open</v-button>
        <v-button type="danger" @click="tooltipElem?.hide">close</v-button>
        <v-tooltip style="width: 200px; height: 50px" content="hello tooltip" manual ref="tooltipElem" placement="top">
          show popper here :
        </v-tooltip>
      </div>
    </div>

    <!-- Dropdown -->
    <div>
      <v-dropdown placement="top" :trigger="triggerEvent" :menuOptions="menuOptions" :hide-after-click="true">
        <v-button type="primary">dropdown</v-button>
      </v-dropdown>
    </div>

    <!-- Message -->

  </div>
</template>

<style scoped>
.wrapper div {
  margin: 30px 10px;
}
</style>
