
export interface Biome {
  id: string;
  name: string;
  russianName: string;
  description: string;
  image: string;
  climate: string;
  dangers: string;
  resources: string[];
}

export const biomes: Biome[] = [
  {
    id: "ilmarin-forests",
    name: "Ilmarin Forests",
    russianName: "Леса Илмарина",
    description: "Древние леса, где тени древних деревьев скрывают тайны и магию. Здесь обитают духи природы и дикие звери.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    climate: "Умеренный, с магическими аномалиями",
    dangers: "Дикие звери, тёмные духи, ядовитые растения",
    resources: ["Древесина духов", "Священные травы", "Кристаллы природы"]
  },
  {
    id: "misty-coast",
    name: "Misty Coast",
    russianName: "Туманное побережье",
    description: "Загадочное побережье, окутанное вечным туманом. В его водах скрываются древние существа и затонувшие сокровища.",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    climate: "Влажный, туманный",
    dangers: "Морские чудовища, предательские течения, призраки кораблей",
    resources: ["Морские кристаллы", "Туманная эссенция", "Древние артефакты"]
  },
  {
    id: "kair-north",
    name: "Kair-North Mountains",
    russianName: "Горы Кайр-Норт",
    description: "Величественные горы, достигающие облаков. Дом древних драконов и хранилище могущественных реликвий.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    climate: "Холодный, ветреный",
    dangers: "Драконы, лавины, горные тролли",
    resources: ["Драконья чешуя", "Горный кристалл", "Вечный лёд"]
  },
  {
    id: "ashen-wastes",
    name: "Ashen Wastes",
    russianName: "Пепельные пустоши",
    description: "Бескрайние пустоши, покрытые вечным пеплом. Земли, опалённые древней магической катастрофой.",
    image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    climate: "Жаркий, сухой",
    dangers: "Пепельные бури, проклятые существа, миражи",
    resources: ["Кристаллы пустоши", "Пепельная сталь", "Осколки проклятий"]
  },
  {
    id: "floating-islands",
    name: "Floating Islands",
    russianName: "Плавающие острова",
    description: "Парящие в небе острова, удерживаемые древней магией. Убежище для самых редких существ и растений.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    climate: "Переменчивый",
    dangers: "Падение, воздушные вихри, небесные хищники",
    resources: ["Парящие кристаллы", "Небесные цветы", "Эфирная пыль"]
  },
  {
    id: "underground-archive",
    name: "Underground Archive",
    russianName: "Подземный Архив",
    description: "Древнее хранилище знаний, спрятанное глубоко под землёй. Лабиринт туннелей и залов с древними секретами.",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    climate: "Прохладный, сухой",
    dangers: "Древние ловушки, тёмные создания, обрушения",
    resources: ["Древние свитки", "Тёмный кварц", "Забытые реликвии"]
  }
];
