import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (id) => {
  const siteId = typeof id != "number" ? parseInt(id) : id;

  return CAMPSITES.find((campsite) => campsite.id === siteId);
};

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
};
