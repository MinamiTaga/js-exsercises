import { Warrior, MagicWarrior, WarriorClass, MagicWarriorClass } from "./index";


test("Warrior", () => {
  const warrior = new Warrior(50);
  expect(warrior.attack()).toBe(100);
});

test("MagicWarrior", () => {
  const magicWarrior = new MagicWarrior(50, 700);
  expect(magicWarrior.attack()).toBe(800);
});

test("WarriorClass", () => {
  const warriorClass = new WarriorClass(50);
  expect(warriorClass.attack()).toBe(100);
});

test("MagicWarriorClass", () => {
  const magicWarriorClass = new MagicWarriorClass(50, 700);
  expect(magicWarriorClass.attack()).toBe(800);
});
