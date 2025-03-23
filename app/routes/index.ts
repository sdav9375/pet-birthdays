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
  const response = await fetch('http://localhost:3000/pets');
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log('json', json)
    return json;
  } catch (error) {
    console.error(error.message);
  }
}
