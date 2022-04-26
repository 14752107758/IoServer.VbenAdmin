import { t } from '/@/hooks/web/useI18n';
import { LAYOUT } from '/@/router/constant';
import { AppRouteModule } from '/@/router/types';

const driver: AppRouteModule = {
  path: '/driver',
  name: 'driver',
  component: LAYOUT,
  meta: {
    orderNo: 50,
    icon: 'ion:layers-sharp',
    title: '数据采集',
  },
  children: [
    {
      path: 'driverlist',
      name: 'driverlist',
      component: () => import('/@/views//scada/driver/index.vue'),
      meta: {
        title: '驱动列表',
        ignoreKeepAlive: false,
      },
    },
  ],
};

export default driver;
