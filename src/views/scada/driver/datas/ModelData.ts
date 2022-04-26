import { FormSchema } from '/@/components/Form';

export function getModalFormSchemas(): FormSchema[] {
  return [
    {
      field: 'id',
      component: 'Input',
      label: 'id',
      colProps: {
        span: 24,
      },
      show: false,
    },
    {
      field: 'driverName',
      component: 'Input',
      label: '驱动名称',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'driverAssembly',
      component: 'Input',
      label: 'driverAssembly',
      colProps: {
        span: 24,
      },
    },
    {
      field: 'driverInstance',
      component: 'Input',
      label: 'driverInstance',
      colProps: {
        span: 24,
      },
    },
  ];
}
