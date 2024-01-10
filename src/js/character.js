export default class Character {
    constructor(name, type, health, level, attack, defence) {
      if ((name.length < 2) || (name.length > 10)) {
        throw new Error('Имя должно содержать от 2 до 10 символов');
      }
      const arr = ['Bowman', 'Swordsman', 'Magician', 'Demon', 'Undead', 'Zombie'];
      if (!arr.includes(type)) {
        throw new Error('Недопустимый тип персонажа');
      }
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = attack;
      this.defence = defence;
    }
  }