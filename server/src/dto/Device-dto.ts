class DeviceDto {
  id: number;
  name: string;
  price: number;
  brandId: number;
  typeId: number;
  infos: {
    title: string;
    description: string;
  }[];
}

export default DeviceDto;
