import { IOrganization, Organization } from '../models/organization.model.ts';

const getOrganizationByName = async (name: string) => {
  const org = await Organization.findOne({
    organizationName: name,
  }).exec();
  return org;
};
const getOrganizationNameById = async (id: string) => {
  const org = await Organization.findOne(
    {
      _id: id,
    },
    ['organizationName'],
  ).exec();
  return org;
};
const getAllOrganizations = async () => {
  const orgList = await Organization.find({}, ['organizationName']).exec();
  return orgList;
};

export { getOrganizationByName, getAllOrganizations, getOrganizationNameById };
