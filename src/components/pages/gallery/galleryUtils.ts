export const CAT_URL= (page:number) => `https://api.thecatapi.com/v1/images/search?page=${page}&limit=5`;
export const DOG_URL = (page: number) => `https://api.thedogapi.com/v1/images/search?page=${page}&limit=5`;

export const ANIMALS = {cat:'CAT',dog:'DOG'}

const apikey =
  'live_mmxZoQra0DQZdQWmECfR3q04RB4CIkbXgZwXe1dnVmGm7bGPhk9jPEDgIYkpSQIV';

export const config = {
  headers: {
    'x-api-key': apikey,
  },
};