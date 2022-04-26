<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :title="formTitle"
    @ok="handleSaveChanges"
    :width="500"
    :min-height="400"
    :loading="submiting"
  >
    <BasicForm
      ref="formElRef"
      :colon="true"
      :schemas="formSchemas"
      :label-width="180"
      :show-action-button-group="false"
      :action-col-options="{
        span: 24,
      }"
    />
  </BasicModal>
</template>

<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { useDriverForm } from '../hooks/useDriverForm';
  import { FormActionType, BasicForm } from '/@/components/Form';
  import { BasicModal, useModalInner } from '/@/components/Modal';

  export default defineComponent({
    name: 'DriverFromModel',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_props, { emit }) {
      const submiting = ref(false);
      const formTitle = ref('');
      const formElRef = ref<Nullable<FormActionType>>(null);
      const { formSchemas, handleSubmit } = useDriverForm();
      const [registerModal, { closeModal }] = useModalInner(async (val) => {
        formTitle.value = val?.id ? '编辑' : '添加';
        const formEl = unref(formElRef);
        formEl?.resetFields();
        formEl?.setFieldsValue(val);
      });
      function handleSaveChanges() {
        const formEl = unref(formElRef);
        formEl?.validate().then(() => {
          submiting.value = true;
          handleSubmit(formEl.getFieldsValue())
            .then(() => {
              emit('success');
              closeModal();
            })
            .finally(() => {
              submiting.value = false;
            });
        });
      }
      return {
        formElRef,
        formTitle,
        submiting,
        formSchemas,
        handleSubmit,
        registerModal,
        closeModal,
        handleSaveChanges,
      };
    },
  });
</script>
