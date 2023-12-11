<script setup lang="ts">
import { onMounted, ref } from 'vue';

onMounted(() => {
 displayDate();
});

const mm = ref('');
const dd = ref('');

function getOrdinalSuffix(date) {
 const day = date.getDate();
 if (day >= 11 && day <= 13) {
   return 'th';
 }
 switch (day % 10) {
   case 1: return 'st';
   case 2: return 'nd';
   case 3: return 'rd';
   default: return 'th';
 }
}

const displayDate = () => {
 const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
 const date = new Date();
 mm.value = `${monthNames[date.getMonth()]} `;
 dd.value = `${date.getDate()}${getOrdinalSuffix(date)} `;
};
</script>

<template>
  <p class="text-[12vh] leading-none font-bold text-foreground dark:text-darkforeground text-center">{{ dd }} {{ mm }}</p>
</template>
