export class ConfigService {
  constructor() {
    this.settings = {};
  }
  getSetting(key) {
    return this.settings[key];
  }
  addSetting(key, setting) {
    if (key.indexOf('[') === -1)
      key = `[${key}]`;
    this.settings[key] = setting;
  }
}
