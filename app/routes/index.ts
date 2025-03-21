import Route from '@ember/routing/route';

interface Pet {
  name: string;
  dob: Date;
  ageYrs: number;
  ageMos: number;
  ageHuman: number;
  species: string;
}

export default class IndexRoute extends Route {
  async model(): Promise<{ pets: Pet[] }> {
    const data = {
      pets: [
        {
          name: 'Sammy',
          dob: new Date(2024, 2, 7),
          ageYrs: 0,
          ageMos: 11,
          ageHuman: 0,
          species: 'cat',
        },
      ],
    };

    return data;
  }
}
