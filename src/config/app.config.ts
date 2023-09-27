interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Pharmacist'],
  customerRoles: ['Customer'],
  tenantRoles: ['Pharmacy Manager', 'Pharmacist'],
  tenantName: 'Pharmacy',
  applicationName: 'Online Pharmacy App',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read user information', 'Read pharmacy information'],
  ownerAbilities: ['Manage user information', 'Manage pharmacy information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/96ba40d1-b803-4808-ba4e-5cd045f73f71',
};
