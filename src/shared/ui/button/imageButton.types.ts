import { IMAGES } from "../images";

export enum ImageType {
  Logo = 'Logo',
  Plus = 'Plus',
  Settings = 'Settings',
  Exit = 'Exit',
}

export const EnumMap = {
  [ImageType.Logo]: IMAGES.LogoImage,
  [ImageType.Plus]: IMAGES.PlusImage,
  [ImageType.Settings]: IMAGES.SettingsImage,
  [ImageType.Exit]: IMAGES.ExitImage,
}