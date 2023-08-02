<script setup lang="ts">
import {
  computed,
  reactive,
  watch,
  ref,
  PropType,
  ToRefs,
  Ref,
  inject,
} from "vue";
import uesMousePosition from "../hooks/uesMousePosition";
import useURLLoader, { URLLoaderData } from "../hooks/useURLLoader";
import { langKey, userKey } from "../keys";
interface User {
  name: string;
  age: number;
}
// const user = reactive({
//   age: 7,
// });

// inject
// langKey为注入的依赖的键
const lang = inject(langKey);
console.log("🚀 ~ file: HelloWorld.vue:26 ~ lang:", lang?.value); // "chinese"
const iuser = inject(userKey);
console.log(iuser?.id); // 1

// 组合式函数
// 官方组合式函数库:https://vueuse.org/
interface DogResult {
  message: string;
  status: boolean;
}
const { x, y } = uesMousePosition();
// const data: ToRefs<URLLoaderData<DogResult>> = useURLLoader<DogResult>(
//   "https://dog.ceo/api/breeds/image/random"
// );
const { result, loading } = useURLLoader<DogResult>(
  "https://dog.ceo/api/breeds/image/random"
); // api网址 : https://dog.ceo/dog-api/

// props
// const props = defineProps({
//   user: {
//     type: Object as PropType<User>,
//   },
// });
// 或者
// const props = defineProps<{ user?: User }>();
// 添加默认值
const props = withDefaults(defineProps<{ user?: User }>(), {
  user: () => ({
    name: "Alice",
    age: 10,
  }),
});
const doubleAge = computed(() => props.user.age * 2);
const user = props.user;

// emits
type ChangeIsHiddenAgeEmit = (
  eventName: "changeIsHiddenAge",
  isHiddenAge: Ref<boolean>
) => void;
const isHiddenAge = ref(false);
const isHiddenText = computed(() => (isHiddenAge.value ? "显示" : "隐藏"));
// const emit = defineEmits(["changeIsHiddenAge"]);
// 或者
const emit = defineEmits<ChangeIsHiddenAgeEmit>();
function toggleIsHiddenAge() {
  isHiddenAge.value = !isHiddenAge.value;
  emit("changeIsHiddenAge", isHiddenAge);
}

// computed
const count = ref(0);
const buttonStatus = computed(() => ({
  text: user.age < 10 ? "不可以参加" : "可以参加",
  disabled: user.age < 10 ? true : false,
}));

const increaseAge = () => user.age++;
const showLoggedIn = () => alert("参加成功！");

// watch
// 监听原始值
// watch(count, (newCount, oldCount) => {
//   if (newCount >= 10) {
//     alert("都点击这么多次了,累了！！！");
//   }
// });

// // 监听对象
// // 监听整个对象
// watch(user, (newUser, oldUser) => {
//   if (newUser.age === 10) {
//     alert("十岁生日快乐！！！");
//   }
// });
// // 监听对象上某个属性
// watch(
//   () => user.age,
//   (newAge, oldAge) => {
//     if (newAge === 10) {
//       alert("十岁生日快乐！！！");
//     }
//   }
// );

// 监听多个值
// watch([count, user], (newWatcheds, oldWatcheds) => {
//   console.log(
//     "🚀 ~ file: HelloWorld.vue:44 ~ watch ~ newWatcheds:",
//     newWatcheds
//   );
//   if (newWatcheds[0] >= 10) {
//     alert("都点击这么多次了,累了！！！");
//   }

//   if (newWatcheds[1].age === 10) {
//     alert("十岁生日快乐！！！");
//   }
// });
</script>

<template>
  <div>
    <p>鼠标坐标 {{ x }} - {{ y }}</p>
    <p v-if="!isHiddenAge">age: {{ user.age }}</p>
    <p v-if="!isHiddenAge">doubelAge : {{ doubleAge }}</p>
    <p>count : {{ count }}</p>
    <button @click="increaseAge">increaseAge</button>
    <button @click="count++">increaseCount</button>
    <button @click="toggleIsHiddenAge">{{ isHiddenText }}</button>
    <button :disabled="buttonStatus.disabled" @click="showLoggedIn">
      {{ buttonStatus.text }}
    </button>
    <div class="showDogPic">
      <p v-if="loading">loading...</p>
      <img v-if="!loading && result" :src="result.message" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
