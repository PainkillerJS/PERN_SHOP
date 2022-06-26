import BasketDevice from "./BasketDevice";
import User from "./User";
import Basket from "./Basket";
import Device from "./Device";
import Type from "./Type";
import TypeBrand from "./TypeBrand";
import Brand from "./Brand";
import DeviceInfo from "./DeviceInfo";
import Rating from "./Rating";

Basket.hasMany(BasketDevice);
Basket.belongsTo(User);

BasketDevice.belongsTo(Basket);
BasketDevice.belongsTo(Device);

Brand.hasMany(Device);
Brand.belongsToMany(Type, { through: TypeBrand });

Device.hasMany(DeviceInfo);
Device.hasMany(Rating);
Device.hasMany(BasketDevice);
Device.belongsTo(Type);
Device.belongsTo(Brand);

DeviceInfo.belongsTo(Device);

Rating.belongsTo(User);
Rating.belongsTo(Device);

Type.hasMany(Device);
Type.belongsToMany(Brand, { through: TypeBrand });

User.hasOne(Basket);
User.hasMany(Rating);
