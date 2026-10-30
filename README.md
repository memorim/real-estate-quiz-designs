# Недвижимость - лендинги и квиз

Концепции лендингов с компьютерными и мобильными экранами, вопросами квиза, контактной формой и завершением заявки.

[Открыть проект](https://memorim.github.io/real-estate-quiz-designs/)

[Лендинг Анны Ермаковой с квизом Marquiz](https://memorim.github.io/real-estate-quiz-designs/anna-ermakova/) - отдельная рабочая страница на основе выбранной концепции. [Подключение и проверка](anna-ermakova/README.md).

![Компьютерная версия](assets/01-01_city_desktop.png)

<img src="assets/01-01_city_mobile.png" width="320" alt="Мобильная версия">

## Устройство проекта

HTML/CSS-галерея, растровые превью и редактируемые SVG-макеты. Сайт можно обслуживать статическим HTTP-сервером. Сборка приложения и настройка секретов не требуются.

## Локальный запуск и проверки

Python 3.12.14, как в CI.

```bash
python tests/check_assets.py
python .github/scripts/check_docs.py
python -m http.server 8080 --bind 127.0.0.1
```

Откройте `http://localhost:8080`. CI проверяет ссылки на файлы, наличие изображений и документацию. Макеты внутри PNG/SVG не становятся интерактивными от запуска галереи.


[Вопросы квиза](QUIZ.md) · [Детальный сценарий](QUIZ_DETAILED.md)

[Технические сведения](docs/TECHNICAL.md) · [Выполненные проверки](docs/VERIFICATION.md) · [История изменений](CHANGELOG.md)
