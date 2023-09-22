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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Dietitian'],
  tenantName: 'Business',
  applicationName: 'KetoDietApp',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View menu',
    'Create, Edit and Cancel subscription',
    'View dietitian details',
    'Edit personal information',
  ],
  ownerAbilities: [
    'Manage business information',
    'Manage dietitian details',
    'Create and manage menus',
    'Manage user subscriptions and schedules',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/493268c1-ae37-4c5d-b7de-292c2a814039',
};
