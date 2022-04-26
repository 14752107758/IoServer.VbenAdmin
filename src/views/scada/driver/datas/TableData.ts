import { BasicColumn } from '/@/components/Table/src/types/table';

export function getDataColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
    },
    {
      title: '驱动名称',
      dataIndex: 'driverName',
    },
    {
      title: 'driverAssembly',
      dataIndex: 'driverAssembly',
    },
    {
      title: 'driverInstance',
      dataIndex: 'driverInstance',
    },
    {
      title: '创建时间',
      dataIndex: 'creationTime',
      sorter: true,
      width: 200,
    },
  ];
}
