const mainContent = document.getElementById("main-content");
// TODO прочитать про делегирование событий в js
const navContainer = document.getElementById('nav-container');

// TODO импортировать из json или fetch если есть сервер 
const sectionsData = [
    {
        id: "about",
        title: "Наша команда",
        content: `
            <p>Мы — группа увлечённых разработчиков, создающих современные и удобные сайты.</p>
            <p>Наша миссия — предоставлять качественные решения для клиентов и обучать новых специалистов в области IT.</p>
            <h3>Наши цели</h3>
            <p>Создание интуитивно понятных интерфейсов.</p>
            <p>Использование современных технологий.</p>
            <p>Поддержка образовательных инициатив.</p>
        `
    },
    {
        id: "projects",
        title: "Наши проекты",
        content: `
            <h3>Проект 1: Сайт школы</h3>
            <p>Разработан удобный портал для школы, включающий разделы с расписанием занятий, новостями и контактами учителей.</p>
            <h3>Проект 2: Интернет-магазин</h3>
            <p>Создан адаптивный интернет-магазин с функцией оплаты онлайн и фильтрацией товаров по категориям.</p>
            <h3>Проект 3: Личный блог</h3>
            <p>Реализован блог с интеграцией социальных сетей и возможностью оставлять комментарии.</p>
        `
    },
    {
        id: "contacts",
        title: "Контакты",
        content: `
            <h3>Свяжитесь с нами</h3>
            <p><strong>Сайт:</strong> school33szr.ru</p>
            <p><strong>Email:</strong> zu_school33_szr@63edu.ru, iliaslekseev@mail.ru</p>
            <p><strong>Телефон:</strong> +7 (8464) 96-05-81</p>
            <p><strong>Адрес:</strong> Самарская область, г. Сызрань, Звездная ул., д.48.</p>
            <h3>Часы работы:</h3>
            <p>Понедельник - Пятница: 8:00 - 18:00<br>Суббота: 8:00 - 18:00<br>Воскресенье: 8:30 - 18:00</p>
        `
    },
    {
        id: "our",
        title: "Наша команда:",
        content: `
            <p><strong>Дизайнер:</strong> Николай Лопатин.</p>
            <p>Занимался визуализацией сайта в программах Figma, Photoshop.
            <p><strong>Разработчик:</strong> Илья Жуков</p>
            <p>Занимался созданием  сайта при помощь JavaScript, HTML.
            <p><strong>Разработчик:</strong> Никита Карсунцев</p>
            <p>Занимался разработкой сайта на CSS</p>
        `
    },
    {
        id: "fan",
        title: "Этот проект не был бы сделан без",
        content: `
            <h3>Дмитрия Игоревича Нефёдова</h3>
            <p>Он является учителем ОБЗР и работником Кванториума.</p>
            <p>На протяжении всего ведения проекта он нам подсказывал и никогда не отказывал в помощи.</p>
            <p>Спасибо, Дмитрий Игоревич!</p>
        `
    }
];

const renderContent = (sectionId) => {
    const section = sectionsData.find((s) => s.id === sectionId);
    if (section) {
        const { title, content } = section;
        mainContent.innerHTML = `<h2>${title}</h2>${content}`;
    }
};

// TODO декомпозиция функций на более мелкие удобнее для чтения и поддеркжи кода
const handleNavClick = (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const sectionId = event.target.getAttribute('href').substring(1);
        renderContent(sectionId);
    }
};

navContainer.addEventListener('click', handleNavClick);

// TODO прочитать про слушатели событий 
const removeNavClickListener = () => navContainer.removeEventListener('click', handleNavClick);
