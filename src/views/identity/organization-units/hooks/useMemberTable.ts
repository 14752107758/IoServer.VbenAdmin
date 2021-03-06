import { ComputedRef } from 'vue';
import { Modal } from 'ant-design-vue';
import { watch, ref, unref } from 'vue';
import { useI18n } from '/@/hooks/web/useI18n';
import { BasicColumn, useTable } from '/@/components/Table';
import { OrganizationUnitService, IdentityUserDto } from '/@/api/proxy/identity';
import { MemberProps } from '../types/props';

const { removeUsers, getUsers } = new OrganizationUnitService();
interface UseMemberTable {
  getProps: ComputedRef<MemberProps>;
}

export function useMemberTable({ getProps }: UseMemberTable) {
  const { t } = useI18n();
  const dataSource = ref([] as IdentityUserDto[]);
  const dataColumns: BasicColumn[] = [
    {
      title: 'id',
      dataIndex: 'id',
      width: 1,
      ifShow: false,
    },
    {
      title: t('AbpIdentity.DisplayName:UserName'),
      dataIndex: 'userName',
      align: 'left',
      width: 280,
      sorter: true,
    },
    {
      title: t('AbpIdentity.EmailAddress'),
      dataIndex: 'email',
      align: 'left',
      width: 'auto',
      sorter: true,
    },
  ];

  const [registerTable] = useTable({
    rowKey: 'id',
    columns: dataColumns,
    dataSource: dataSource,
    pagination: false,
    striped: false,
    useSearchForm: false,
    showTableSetting: true,
    tableSetting: {
      redo: false,
    },
    bordered: true,
    showIndexColumn: false,
    canResize: false,
    immediate: false,
    actionColumn: {
      width: 170,
      title: t('table.action'),
      dataIndex: 'action',
      slots: { customRender: 'action' },
    },
  });

  function handleDelete(user) {
    Modal.warning({
      title: t('AbpIdentity.AreYouSure'),
      content: t('AbpIdentity.OrganizationUnit:AreYouSureRemoveUser', [
        user.userName,
      ] as Recordable),
      okCancel: true,
      onOk: () => {
        removeUsers(user.id, unref(getProps).ouId).then(() => reloadMembers());
      },
    });
  }

  function reloadMembers() {
    getUsers(unref(getProps).ouId, {
      filter: '',
      skipCount: 0,
      sorting: '',
      maxResultCount: 1000,
    }).then((res) => {
      dataSource.value = res.items || [];
    });
  }

  watch(
    () => unref(getProps).ouId,
    (id) => {
      if (id) {
        reloadMembers();
      }
    },
  );

  return {
    registerTable,
    handleDelete,
    reloadMembers,
  };
}
