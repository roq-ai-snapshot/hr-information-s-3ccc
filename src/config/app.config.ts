interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Admin', 'Employee', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Interact with the company through the system.'],
  ownerAbilities: [
    'Manage company registration',
    'Invite Admin, HR Manager and Employee to the system',
    'View and update personal data',
    'Apply for and view approval status of vacation',
    'View payroll details',
    'Interact with the company through the system',
  ],
};
