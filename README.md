# Проектная работа: "Mesto". 


## Описание: 

"Mesto" - это интерактивная страница, в работе применены расширенные возможности HTML и CSS, JavaScript 

### Внешние компоненты
Для работы с проектом вам понадобятся git, NodeJS
* [Как установить git.](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Как установить NodeJS.](https://nodejs.org/en/download/package-manager/)
* Как установить Webpack: инструкция ниже

### Локальная установка:
В командной строке перейдите в папку, где будет развернут проект. После чего скопируйте его с GitHub:
`$ git clone https://github.com/VMikhailW/mesto.git`

Далее переходим в папку с проектом и устанавливаем компоненты:
`$ npm install`

После этого нужно собрать проект:
`$ npm run build`

Далее можно запускать проект на локальном сервере:
`$ npm run dev`

### В конфигурационном файле package.json настроены три варианта запуска сборки проекта:
`$ npm run build` - для компиляции. Проект собирается локально, продукты сборки сохряняются в указанной директории.

`$ npm run dev` - для отладки. Помимо сборки, запускает на локальном сервере с автоматической <<горячей>> перезагрузкой при детектировании изменений в исходных кодах.


### Установка сборщика (Webpack)

`npm init` - *добаляет дефолтный конфигурационный файл package.json*

`npm i webpack --save-dev` - *устанавливает  пакет webpack в проект, записывает его в зависимости для разработки*

`npm i webpack-cli --save-dev` - *устанавливает пакет интерфейса командной строки для webpack'а*

`npm i webpack-dev-server --save-dev` - *устанавливает пакет локального сервера*

### Установка транспилятора (Babel)

`npm i babel-loader --save-dev` - *устанавливает пакет транспилятора*

Дополнительные пакеты для работы с транспилятором:

`npm i @babel/cli --save-dev`

`npm i @babel/core --save-dev`

`npm i @babel/preset-env --save-dev`

`npm i core-js@3.4.1 --save`

`npm install --save babel-polyfill` - *устанавливает полифилы для транспилятора*

### Установка минификатора

`npm i mini-css-extract-plugin --save-dev` - *устанавливает пакет минификатора*

`npm i css-loader --save-dev` - *устанавливает пакет CSS-загрузчика*

### Установка обработчика CSS-загрузчика

`npm i postcss-loader --save-dev` - *устанавливает пакет подключения плагина PostCSS к Webpack'у*

`npm i autoprefixer --save-dev` - *установщик вендорных префиксов*

`npm i cssnano --save-dev` - *минификатор CSS*

### Деплой

`npm install html-webpack-plugin --save-dev` - *"учит" вебпак работать с HTML*


### Оптимизация изображений

`npm install file-loader --save-dev` - *плагин, позволяющий webpack'у работать с различными файлами*

`npm install image-webpack-loader --save-dev` - *загрузчик изображений*

## Функционал: 

* "Лайк" для фотографии 
* Редактирование профиля пользователя 
* Figma
* Картинки

* [Ссылка на макет в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)

## Технологии: 

* Flexbox
* Grid Layout
* Positioning Elements
* Animation and Transform using CSS
* BEM Methodology
* File Structure and File Paths (Nested BEM)
* Git
* JavaScript
* Валидация форм
* ООП javaScript
* Webpack 
