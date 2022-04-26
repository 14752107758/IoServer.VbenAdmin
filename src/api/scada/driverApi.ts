import { DriverModel } from './model/driverModel';
import { defHttp } from '/@/utils/http/axios';
import { RequestOptions } from '/#/axios';
import {
  ListResultDto,
  PagedAndSortedResultRequestDto,
  PagedResultDto,
} from '/@/utils/models/dtos';

export class IScadaDriverService {
  ApiName: 'AbpScada';

  GetDriverList = (input: PagedAndSortedResultRequestDto, options?: RequestOptions) =>
    defHttp.request<PagedResultDto<DriverModel>>(
      {
        method: 'GET',
        url: '/api/app/driver',
        params: {
          skipCount: input.skipCount,
          sorting: input.sorting,
          maxResultCount: input.maxResultCount,
        },
      },
      options,
    );

  deleteById = (id: string, options?: RequestOptions) =>
    defHttp.request<void>(
      {
        method: 'DELETE',
        url: `/api/app/driver/${id}`,
      },
      options,
    );
  update = (id: string, input: DriverModel, options?: RequestOptions) =>
    defHttp.request<DriverModel>(
      {
        method: 'PUT',
        url: `/api/app/driver/${id}`,
        data: input,
      },
      options,
    );

  create = (input: DriverModel, options?: RequestOptions) =>
    defHttp.request<DriverModel>(
      {
        method: 'POST',
        url: '/api/app/driver',
        data: input,
      },
      options,
    );
  get = (id: string, options?: RequestOptions) =>
    defHttp.request<ListResultDto<DriverModel>>(
      {
        method: 'GET',
        url: `/api/app/driver/${id}`,
      },
      options,
    );
}
