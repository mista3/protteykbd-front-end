# ProtteyKBD front-end

**ProtteyKBD** - интернет магазин кастомных клавиатур

## Технологии

- React
- TypeScript
- Redux
- Axios
- MaterialUI
- Git
- Yarn
- Prettier
- Vite

## Описание проекта

- components - чистые компоненты без привязке к бизнес логики
- domain
  - entities - сущности и dto
  - adapters - функции конвертирования dto в сущность и наоборот
- globals - глобальные типы и константы
- icons - svg иконки
- modules - комплексные компоненты с привязкой к бизнес логике, зачастую состоящие из простых чистых компонентов
- services - сервисы

## Патерны

## Правила работы с проектом

### Нейминг

Все файлы должны быть названы следующим образом - <Имя файла>.<Тип файла>.ts(tsx), например, Search.module.tsx . Все экспортируемые переменные должны быть названы полность, например, SearchModuleProps. Это все необходимо для упрощения поиска по проекту, т.е. если я хочу найти пропсы модуля поиска, я ищу SearchModuleProps, или если я хочу найти файл с константами модуля поиска, я ищу Search.consts.ts

TODO:

- [ ] eslint
- [x] autoimport svg as react component
- [ ] breadcrumbs
- [ ] product preview
- [ ] steam card effect
- [ ] agents and axios instance
- [ ] themes
