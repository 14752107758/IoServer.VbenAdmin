<template>
  <DriverTable />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import DriverTable from './components/DriverTable.vue';
  export default defineComponent({
    name: 'Drivers',
    components: {
      DriverTable,
    },
    setup() {},
  });
</script>
