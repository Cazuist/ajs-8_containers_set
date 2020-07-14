import Team from '../Team';
import Character from '../Character';

describe('Начинаем тестирование класса Team', () => {
  describe('Тестируем наследование:', () => {
    test('Экземпляр наследуется от класса Team', () => {
      const team = new Team();
      expect(team).toBeInstanceOf(Team);
    });
  });

  describe('Тестируем метод add:', () => {
    test('Должен выбросить исключение на несоответствие обекта классу Character', () => {
      const team = new Team();

      expect(() => team.add(1)).toThrow('Неизвестный персонаж');
    });

    test('Должен добавить персонаж в команду', () => {
      const char = new Character('11', 'Daemon');
      const team = new Team();

      team.add(char);

      expect(team.members).toEqual(new Set([char]));
    });

    test('Должен выбросить исключение при попытке добавить существующий персонаж', () => {
      const char1 = new Character('11', 'Daemon');
      const char2 = char1;
      const team = new Team();
      team.add(char1);

      expect(() => team.add(char2)).toThrow('Такой персонаж уже есть в команде');
    });
  });

  describe('Тестируем метод addAll:', () => {
    test('Метод должен добавить 2х персонажей, если они являются экземплярами класса Character', () => {
      const char1 = new Character('11', 'Daemon');
      const char2 = new Character('22', 'Undead');
      const team = new Team();
      team.addAll(char1, char2);

      expect(team.members).toEqual(new Set([char1, char2]));
    });

    test('Не должен добавлять другие типы', () => {
      const char1 = new Character('11', 'Daemon');

      const team = new Team();
      team.addAll(char1, 'test');

      expect(team.members).toEqual(new Set([char1]));
    });
  });

  describe('Тестируем метод toArray:', () => {
    test('Должны получить массив c персонажами', () => {
      const team = new Team();
      team.members.add('Лучник');
      team.members.add('Мечник');
      team.members.add('Демон');

      expect(team.toArray()).toEqual(['Лучник', 'Мечник', 'Демон']);
    });
  });
});
