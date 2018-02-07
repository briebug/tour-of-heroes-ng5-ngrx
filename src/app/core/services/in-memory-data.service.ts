export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const sidekicks = [
      { id: 1, heroId: 11, name: 'Adequate Man' },
      { id: 2, heroId: 12, name: 'Ocran' },
      { id: 3, heroId: 13, name: 'Mombasta' },
      { id: 4, heroId: 14, name: 'Abbrevio' },
      { id: 5, heroId: 15, name: 'Ferrous Man' },
      { id: 6, heroId: 16, name: 'Bouncy Boy' },
      { id: 7, heroId: 17, name: 'Statica' },
      { id: 8, heroId: 18, name: 'Mensa Man' },
      { id: 9, heroId: 19, name: 'Lavastorm' },
      { id: 10, heroId: 20, name: 'Dust Devil' },
      { id: 11, heroId: 20, name: 'F5' },
      { id: 12, heroId: 19, name: 'Lady Igneous' },
      { id: 13, heroId: 16, name: 'Flubber' },
      { id: 14, heroId: 14, name: 'Accerso' },
    ];
    return { heroes, sidekicks };
  }
}
