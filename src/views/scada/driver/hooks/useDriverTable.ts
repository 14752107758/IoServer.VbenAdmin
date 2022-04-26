import { getDataColumns } from '../datas/TableData';
import { IScadaDriverService } from '/@/api/scada/driverApi';
import { useTable } from '/@/components/Table';
import { useI18n } from '/@/hooks/web/useI18n';
import { formatPagedRequest } from '/@/utils/http/abp/helper';
import { Modal } from 'ant-design-vue';

export function useDriverTable() {
  const { t } = useI18n();
  const { GetDriverList, deleteById } = new IScadaDriverService();
  const [registerTable, { reload: reloadTable }] = useTable({
    title: '驱动列表',
    columns: getDataColumns(),
    api: GetDriverList,
    beforeFetch: formatPagedRequest,
    pagination: true,
    striped: false,
    useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    canResize: false,
    immediate: true,
    rowSelection: { type: 'checkbox' },
    //formConfig: getSearchFormSchemas(),
    actionColumn: {
      width: 220,
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
    },
  });

  function handleDelete(record) {
    Modal.warning({
      title: t('AbpUi.AreYouSure'),
      content: '确定要删除名为【' + record.driverName + '】的驱动吗？',
      okCancel: true,
      onOk: () => {
        deleteById(record.id).then(() => {
          reloadTable();
        });
      },
    });
  }
  return {
    registerTable,
    reloadTable,
    handleDelete,
  };
}
