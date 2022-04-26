import { ExtensibleFullAuditedEntityDto, ExtensibleObject } from '/@/utils/models/dtos';

export interface DriverParams {
  SkipCount?: Int32Array;
  MaxResultCount?: Int32Array;
  Sorting?: string;
}

export interface DriverModel extends ExtensibleFullAuditedEntityDto<string> {
  driverAssembly?: string;
  driverInstance?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  creatorId?: string;
}

export interface IdriverUpdateOrCreaetBase extends ExtensibleObject {
  driverAssembly?: string;
  driverInstance?: string;
  lastModificationTime?: Date;
  lastModifierId?: string;
  creatorId?: string;
}
