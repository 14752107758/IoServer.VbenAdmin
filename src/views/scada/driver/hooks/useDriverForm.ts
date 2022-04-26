import { computed } from 'vue';
import { getModalFormSchemas } from '../datas/ModelData';
import { IScadaDriverService } from '/@/api/scada/driverApi';

export function useDriverForm() {
  const formSchemas = computed(() => {
    return [...getModalFormSchemas()];
  });
  function handleSubmit(input) {
    const { update, create } = new IScadaDriverService();
    return input.id ? update(input.id, input) : create(input);
  }
  return {
    formSchemas,
    handleSubmit,
  };
}
