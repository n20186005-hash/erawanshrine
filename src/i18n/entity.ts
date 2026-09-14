import { siteConfig } from '../config';

/**
 * 单景点 SEO 实体绑定变量表
 * 与需求中的 {{VAR}} 占位符一一对应，所有页面文案统一由此处取值，
 * 换景点时只需修改 src/config.ts 的 entity 字段。
 */
export const entity = siteConfig.entity;

export const entityVars: Record<string, string> = {
  DOMAIN_NAME: entity.domainName,
  ATTRACTION_FULL_NAME: entity.fullName,
  ATTRACTION_SHORT_NAME: entity.shortName,
  ATTRACTION_LOCAL_NAME: entity.localName,
  CITY_NAME: entity.city,
  STATE_PROVINCE: entity.province,
  COUNTRY_NAME: entity.country,
  COUNTRY_CODE_2LETTER: entity.countryCode,
  POSTAL_CODE: entity.postalCode,
  LATITUDE: String(entity.latitude),
  LONGITUDE: String(entity.longitude),
  MAPS_SHARE_URL: entity.mapsShareUrl,
  MAPS_EMBED_SRC: siteConfig.googleMapsEmbed,
  NEARBY_LANDMARK_1: entity.nearbyLandmarks[0],
  NEARBY_LANDMARK_2: entity.nearbyLandmarks[1],
  GOVT_TOURISM_URL: entity.govtTourismUrl,
};

/** 城市 / 省 / 国家 去重后的地区串，例如「Bangkok, Thailand」 */
export const locationLine = [entity.city, entity.province, entity.country]
  .filter((v, i, arr) => Boolean(v) && arr.indexOf(v) === i)
  .join(', ');

/** 小写别名，供 i18n 文案里的 {fullName} 这类占位符使用 */
const aliasVars: Record<string, string> = {
  location: locationLine,
  domainName: entityVars.DOMAIN_NAME,
  fullName: entityVars.ATTRACTION_FULL_NAME,
  shortName: entityVars.ATTRACTION_SHORT_NAME,
  localName: entityVars.ATTRACTION_LOCAL_NAME,
  city: entityVars.CITY_NAME,
  province: entityVars.STATE_PROVINCE,
  country: entityVars.COUNTRY_NAME,
  countryCode: entityVars.COUNTRY_CODE_2LETTER,
  postalCode: entityVars.POSTAL_CODE,
  latitude: entityVars.LATITUDE,
  longitude: entityVars.LONGITUDE,
  mapsShareUrl: entityVars.MAPS_SHARE_URL,
  landmark1: entityVars.NEARBY_LANDMARK_1,
  landmark2: entityVars.NEARBY_LANDMARK_2,
  govtTourismUrl: entityVars.GOVT_TOURISM_URL,
};

const allVars: Record<string, string> = { ...entityVars, ...aliasVars };

/**
 * 将文案中的 {var} / {{VAR}} 占位符替换为实体数据。
 */
export const fill = (text: string): string =>
  text.replace(/\{\{?(\w+)\}\}?/g, (match, key: string) => (key in allVars ? allVars[key] : match));

/** 地理面包屑（去重后的归属层级链） */
export const breadcrumbTrail = [
  entity.fullName,
  ...[entity.city, entity.province, entity.country].filter((v, i, arr) => Boolean(v) && arr.indexOf(v) === i),
];
