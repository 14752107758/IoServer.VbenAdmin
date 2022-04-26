<template>
  <div class="content">
    <BasicTable @register="registerTable">
      <template #toolbar>
        <a-button type="primary" @click="handleAddNew">添加</a-button>
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: '编辑',
              icon: 'ant-design:edit-outlined',
              onClick: handleEdit.bind(null, record),
            },
            {
              label: '删除',
              color: 'error',
              icon: 'ant-design:delete-outlined',
              onClick: handleDelete.bind(null, record),
            },
          ]"
        />
      </template>
    </BasicTable>
    <DriverFormModel @register="registerModal" @success="reloadTable" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, TableAction } from '/@/components/Table';
  import { useDriverTable } from '../hooks/useDriverTable';
  import DriverFormModel from './DriverFormModel.vue';
  import { useModal } from '/@/components/Modal';

  export default defineComponent({
    components: {
      BasicTable,
      TableAction,
      DriverFormModel,
    },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const { registerTable, reloadTable, handleDelete } = useDriverTable();
      return {
        registerTable,
        reloadTable,
        handleDelete,
        registerModal,
        openModal,
      };
    },
    methods: {
      handleAddNew() {
        this.openModal(true, {}, true);
      },
      handleEdit(record) {
        this.openModal(true, record, true);
      },
    },
  });
</script>
