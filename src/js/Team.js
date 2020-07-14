import Character from './Character';

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть в команде');
    } else if (!(character instanceof Character)) {
      throw new Error('Неизвестный персонаж');
    } else {
      this.members.add(character);
    }
  }

  addAll(...characters) {
    characters.forEach((char) => {
      if (char instanceof Character) {
        this.members.add(char);
      }
    });
  }

  toArray() {
    return [...this.members];
  }
}
