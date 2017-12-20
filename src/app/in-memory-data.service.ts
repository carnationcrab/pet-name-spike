import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const dogs = [
      { id: 11, name: 'Savvy' },
      { id: 12, name: 'Minnie' },
      { id: 13, name: 'Rook' },
      { id: 14, name: 'Pacino' },
      { id: 15, name: 'Daisy' },
      { id: 16, name: 'Rockstar' },
      { id: 17, name: 'Charlie' },
      { id: 18, name: 'Bacon' },
      { id: 19, name: 'Pupper' },
      { id: 20, name: 'Woofer' }
    ];
    return {dogs};
  }
}