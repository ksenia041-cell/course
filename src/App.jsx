import React, { useState } from "react";

const nav = [
  { label: "Проблема", href: "#problem" },
  { label: "Результати", href: "#results" },
  { label: "Формат", href: "#format" },
  { label: "Пакети", href: "#packages" },
  { label: "Corporate", href: "#corporate" },
  { label: "FAQ", href: "#faq" },
];

const symptoms = [
  "ключові питання знову і знову повертаються до вас",
  "команда чекає вказівок замість самостійного руху",
  "операційка з’їдає стратегію",
  "делегування працює тільки до першої помилки",
];

const chaosCosts = [
  {
    title: "Швидкістю рішень",
    text: "Поки кожне важливе питання проходить через одну людину, команда рухається повільніше, ніж могла б.",
  },
  {
    title: "Якістю команди",
    text: "Коли люди звикають чекати вказівок, ініціатива слабшає, а відповідальність не зростає.",
  },
  {
    title: "Втраченими можливостями",
    text: "Поки керівник гасить операційні пожежі, стратегічні рішення відкладаються, а розвиток сповільнюється.",
  },
  {
    title: "Енергією керівника",
    text: "Неможливо довго бути одночасно стратегом, контролером, мотиватором, пожежником і центром усіх рішень.",
  },
];

const results = [
  {
    title: "Для керівника",
    items: [
      "бачити, де саме управління буксує",
      "приймати складні рішення спокійніше",
      "перейти від контролю задач до бачення системи",
      "сформувати власний план розвитку і 90-денний план змін",
    ],
  },
  {
    title: "Для команди",
    items: [
      "краще розуміти очікування і межі відповідальності",
      "приносити не тільки проблему, а й варіанти рішення",
      "менше залежати від постійного підтвердження керівника",
      "працювати із делегуванням через домовленості, критерії і зворотний зв’язок",
    ],
  },
  {
    title: "Для бізнесу",
    items: [
      "отримати більше керованості",
      "зменшити залежність рішень від однієї людини",
      "перевести стратегію з розмов у регулярні дії",
      "створити сильнішу управлінську систему",
    ],
  },
];

const audiences = [
  {
    title: "Власникам бізнесу",
    text: "Якщо бізнес занадто тримається на вас, а команда не завжди може рухатися без вашого постійного включення.",
  },
  {
    title: "CEO і топменеджерам",
    text: "Якщо потрібно не просто керувати задачами, а будувати управлінську систему зі стратегією, пріоритетами і відповідальністю.",
  },
  {
    title: "Мідл менеджерам",
    text: "Якщо ви сильний фахівець і хочете вирости в зрілого керівника, який будує відповідальність, а не тільки контролює задачі.",
  },
  {
    title: "HR, L&D і внутрішнім тренерам",
    text: "Якщо потрібно розвивати керівників через практичні інструменти, а не чергове навчання для галочки.",
  },
  {
    title: "Компаніям і стартапам",
    text: "Якщо проблема не в одному керівнику, а в розсинхроні управлінської команди, стилів управління і правил взаємодії.",
  },
];

const format = [
  {
    title: "Навчальні вебінари",
    text: "Структура, моделі й інструменти для аналізу управлінських ситуацій, відповідальності, комунікації і рішень.",
  },
  {
    title: "Практичні завдання",
    text: "Після кожного блоку учасник робить конкретний крок у своєму управлінському контексті.",
  },
  {
    title: "Індивідуальні коуч-сесії",
    text: "Розбір власних запитів із акредитованим коучем ICF: рішення, делегування, конфлікти, фокус, команда.",
  },
  {
    title: "Групові практики",
    text: "Обговорення реальних викликів, обмін досвідом і пошук рішень із керівниками, які проходять схожі ситуації.",
  },
  {
    title: "Робота з реальними кейсами",
    text: "У фокусі не приклади з підручника, а те, що вже відбувається у вашій команді.",
  },
  {
    title: "Підтримка спільноти",
    text: "Простір, де можна поставити питання, обговорити складну ситуацію і не залишатися сам на сам із матеріалами.",
  },
];

const modules = [
  {
    number: "01",
    title: "Коучингове мислення як інструмент створення ефективної компанії",
    question: "Як перестати бути єдиним центром відповідей і створити простір, у якому команда мислить, пропонує рішення і бере відповідальність?",
    bullets: [
      "як стиль комунікації керівника впливає на самостійність команди",
      "чому команда часто приходить не з рішеннями, а з проблемами",
      "як сильні питання допомагають розвивати мислення людей",
      "як відрізнити контроль від якісного управлінського супроводу",
    ],
    result: "Після модуля ви побачите, де занадто часто забираєте відповідальність на себе, і отримаєте перші інструменти для розвитку самостійності команди.",
  },
  {
    number: "02",
    title: "Бізнес-коучинг для підвищення результативності",
    question: "Де саме буксує ваша управлінська система і що потрібно змінити, щоб команда працювала результативніше?",
    bullets: [
      "як бачити бізнес не як набір задач, а як систему рішень, людей і процесів",
      "як знаходити слабкі місця в управлінні",
      "як відрізняти симптом проблеми від справжньої причини",
      "як пов’язувати стратегічні цілі з регулярними діями команди",
    ],
    result: "Після модуля ви побачите не просто що не працює, а чому саме це не працює, і сформуєте перші кроки для зміни ситуації.",
  },
];

const deliverables = [
  {
    title: "Карта розвитку керівника",
    text: "Щоб бачити свої сильні сторони, зони уваги і управлінські навички, які зараз найбільше впливають на результат команди.",
  },
  {
    title: "План змін на 90 днів",
    text: "Щоб після навчання не залишитися з конспектом, а мати конкретний маршрут дій на найближчі три місяці.",
  },
  {
    title: "Шаблони для аналізу рішень",
    text: "Щоб швидше структурувати складні ситуації: що відбувається, де причина, які є варіанти і ризики.",
  },
  {
    title: "Питання для розвитку відповідальності",
    text: "Щоб не просто давати вказівки, а вчити команду думати ширше, бачити наслідки і пропонувати рішення.",
  },
  {
    title: "Інструменти делегування",
    text: "Щоб домовлятися про результат, критерії якості, межі самостійності, точки контролю і зворотний зв’язок.",
  },
  {
    title: "Інструменти управлінської комунікації",
    text: "Щоб складні розмови не зависали і не перетворювалися на конфлікти, а переходили в рішення.",
  },
];

const packages = [
  {
    name: "Base",
    subtitle: "Системне мислення керівника",
    price: "24 800 грн",
    tag: "Зрозуміти систему і почати",
    intro: "Для тих, хто хоче опанувати базові інструменти системного мислення і отримати точкову індивідуальну підтримку.",
    includes: [
      "навчальні вебінари",
      "доступ до всіх модулів",
      "FAQ-сесія раз на місяць",
      "доступ до закритої спільноти",
      "2 індивідуальні коуч-сесії з акредитованим коучем ICF",
    ],
    bestFor: "Оберіть Base, якщо хочете познайомитися з системним підходом і визначити перші фокуси для розвитку.",
  },
  {
    name: "Pro",
    subtitle: "Системне лідерство в дії",
    price: "54 600 грн",
    tag: "Впровадити з супроводом",
    highlighted: true,
    intro: "Найкращий вибір для керівників, які хочуть не просто отримати знання, а впровадити зміни у своєму управлінні.",
    includes: [
      "навчальні вебінари і групові практики",
      "майстермайнд, мозкові штурми, панель питання-відповідь",
      "груповий коучинг",
      "персональний development-план",
      "практичні шаблони",
      "доступ до записів програми на 6 місяців",
      "5 індивідуальних коуч-сесій ICF",
    ],
    bestFor: "Оберіть Pro, якщо хочете глибше розібрати власний стиль управління і впроваджувати зміни з підтримкою.",
  },
  {
    name: "Corporate",
    subtitle: "Команда як система",
    price: "Індивідуально",
    tag: "Синхронізувати команду",
    intro: "Для компаній і управлінських команд, які хочуть вирівняти управлінське мислення, посилити взаємодію і створити спільний план розвитку.",
    includes: [
      "доступ до навчальних вебінарів для команди",
      "командний коучинг із тренерами програми",
      "робота над реальними задачами компанії",
      "стратегічна сесія для команди",
      "індивідуальні коуч-сесії для учасників",
      "Development Team Plan",
      "опитування і вимірювання динаміки",
      "контрольна зустріч через 3 місяці після програми",
    ],
    bestFor: "Оберіть Corporate, якщо проблема не в одному менеджері, а в розсинхроні управлінської команди.",
  },
];

const faqs = [
  {
    q: "Чи потрібно мати досвід у коучингу?",
    a: "Ні. Програма створена для керівників, власників бізнесу, HR і менеджерів, яким потрібні практичні управлінські інструменти. Коучинговий підхід пояснюється через бізнес-логіку: рішення, відповідальність, делегування і комунікацію.",
  },
  {
    q: "Чим ця програма відрізняється від класичного курсу з менеджменту?",
    a: "Класичний курс часто дає моделі й теорію. Тут фокус на роботі з реальними управлінськими ситуаціями учасника: делегування, відповідальність, комунікація, рішення, стратегія, команда.",
  },
  {
    q: "Чи буде практика?",
    a: "Так. Програма побудована навколо практичних завдань, розбору реальних ситуацій, індивідуальних коуч-сесій, групових практик і формування плану змін.",
  },
  {
    q: "Чи підійде програма власнику малого бізнесу?",
    a: "Так, якщо бізнес уже має команду або управлінські задачі, які занадто сильно тримаються на власнику. Програма допоможе побачити слабкі місця системи і поступово зменшувати залежність бізнесу від однієї людини.",
  },
  {
    q: "Чим відрізняються Base, Pro і Corporate?",
    a: "Base – для знайомства з системним підходом і точкової підтримки. Pro – для глибшої індивідуальної роботи, практики і впровадження змін. Corporate – для компаній, де потрібно розвивати управлінську команду як систему.",
  },
  {
    q: "Чи можна купити програму для команди?",
    a: "Так. Для цього передбачений Corporate формат: командний коучинг, стратегічна сесія, індивідуальні сесії, робота з HR або власником, Development Team Plan і контрольна зустріч через 3 місяці.",
  },
  {
    q: "Чи це не занадто про коучинг?",
    a: "Ні. У цій програмі коучинг подається як практичний інструмент управління: для кращих рішень, відповідальності, делегування, ясної комунікації і розвитку команди.",
  },
];

function Button({ children, href = "#packages", variant = "primary" }) {
  const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";
  const styles = variant === "primary"
    ? "bg-slate-950 text-white shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 hover:bg-slate-800"
    : "border border-slate-300 bg-white/70 text-slate-900 hover:-translate-y-0.5 hover:border-slate-950";

  return <a className={`${base} ${styles}`} href={href}>{children}</a>;
}

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
      {children}
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex gap-3 text-sm leading-6 text-slate-700">
      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-950" />
      <span>{children}</span>
    </li>
  );
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="font-semibold text-slate-950">{item.q}</span>
        <span className="text-2xl leading-none text-slate-400">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="px-5 pb-5 text-sm leading-7 text-slate-700">{item.a}</p>}
    </div>
  );
}

export default function SystemLeadershipLanding() {
  return (
    <main className="min-h-screen bg-[#f7f4ee] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f7f4ee]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">IAPC</div>
            <div>
              <div className="text-sm font-bold">Міжнародна Академія</div>
              <div className="text-xs text-slate-500">Професійного Коучингу</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            {nav.map((item) => (
              <a key={item.href} className="hover:text-slate-950" href={item.href}>{item.label}</a>
            ))}
          </nav>
          <Button href="#contact">Залишити заявку</Button>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute right-0 top-32 h-[360px] w-[360px] rounded-full bg-slate-300/30 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <SectionLabel>Практична програма для керівників</SectionLabel>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Як вийти з ручного управління і побудувати команду, яка бере відповідальність
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Для власників бізнесу, CEO, топменеджерів, мідл менеджерів і HR, які бачать: команда росте, задач стає більше, але занадто багато рішень досі тримається на одній людині.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {symptoms.map((item) => (
                <div key={item} className="rounded-2xl border border-white bg-white/70 p-4 text-sm leading-6 text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700">
              Це не просто завантаженість. Це сигнал, що управління ще не стало системою.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#packages">Обрати формат участі</Button>
              <Button href="#contact" variant="secondary">Отримати консультацію</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
              <span className="rounded-full bg-white/80 px-4 py-2">навчання</span>
              <span className="rounded-full bg-white/80 px-4 py-2">практика</span>
              <span className="rounded-full bg-white/80 px-4 py-2">коучинговий супровід</span>
              <span className="rounded-full bg-white/80 px-4 py-2">реальні управлінські ситуації</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/25">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <div className="text-sm text-slate-400">Фокус програми</div>
                  <div className="text-xl font-semibold">від ручного контролю до системи</div>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm">16.06.2026</div>
              </div>
              <div className="space-y-5">
                <div className="rounded-3xl bg-white/10 p-5">
                  <div className="text-sm text-slate-300">Стан зараз</div>
                  <p className="mt-2 text-2xl font-semibold">усе важливе проходить через керівника</p>
                </div>
                <div className="flex justify-center text-3xl text-slate-500">↓</div>
                <div className="rounded-3xl bg-white p-5 text-slate-950">
                  <div className="text-sm text-slate-500">Після програми</div>
                  <p className="mt-2 text-2xl font-semibold">є ясність, правила, відповідальність і 90-денний план змін</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-2xl font-bold">8+</div>
                  <div className="text-xs text-slate-400">років роботи</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-2xl font-bold">4000+</div>
                  <div className="text-xs text-slate-400">учасників</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <div className="text-2xl font-bold">5500+</div>
                  <div className="text-xs text-slate-400">коуч-сесій</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Проблема</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Коли все тримається на керівнику, бізнес не росте в повну силу</h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Зовні може здаватися, що все працює: команда зайнята, задачі рухаються, зустрічі проходять, рішення приймаються. Але якщо без вашого включення процеси починають буксувати, проблема не тільки в кількості задач.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Проблема в тому, що управління ще не стало системою.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "ви постійно на зв’язку",
              "ключові рішення проходять через вас",
              "відповідальність часто повертається назад",
              "команда чекає підтвердження",
              "стратегія існує в нотатках, а не в регулярних діях",
              "ви все частіше гасите пожежі замість будувати майбутнє",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-base font-medium leading-7">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionLabel>Ціна хаосу</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ціна хаосу вища, ніж здається</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Коли управління тримається на особистому контролі керівника, компанія платить не лише його втомою.
              </p>
              <p className="mt-5 rounded-3xl bg-[#f7f4ee] p-6 text-base leading-7 text-slate-800">
                Системне лідерство потрібне не тоді, коли все вже погано. Воно потрібне в той момент, коли ви бачите: далі на ручному управлінні бізнес не вивезе.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {chaosCosts.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-[#f7f4ee] p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white lg:p-12">
          <div className="max-w-3xl">
            <SectionLabel>Не просто делегуй</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Чому не працює порада “просто делегуй”</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Більшість керівників і так розуміють, що потрібно делегувати більше. Проблема не в тому, що вони цього не знають. Проблема в тому, що делегування без системи часто створює ще більше хаосу.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              "задачу передали, але результат не той",
              "відповідальність ніби делегували, але рішення повернулося до керівника",
              "люди бояться помилитися і знову питають дозволу",
              "керівник думає: швидше зроблю сам",
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-white/10 p-5 text-sm leading-7 text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-4xl text-lg leading-8 text-slate-200">
            Системне лідерство починається там, де є зрозуміла управлінська система: як ставити задачі, домовлятися про результат, передавати відповідальність, вести складні розмови і приймати рішення без постійного повернення до однієї людини.
          </p>
        </div>
      </section>

      <section className="bg-[#efe9df] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel>Велика ідея</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Системне лідерство – це не про те, щоб контролювати більше</h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Це про те, щоб керувати так, щоб не все трималося на вас. Сильний керівник створює систему, у якій людям зрозуміло, що важливо, за що вони відповідають, у яких межах можуть приймати рішення і як діяти в складних ситуаціях.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Не більше контролю", "а більше системи"],
              ["Не більше операційного включення", "а більше ясності"],
              ["Не “зроблю сам”", "а створю умови, у яких команда бере відповідальність"],
            ].map(([a, b]) => (
              <div key={a} className="rounded-[2rem] bg-white p-8 text-center shadow-sm">
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">{a}</div>
                <div className="mt-4 text-2xl font-semibold">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Результати</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Що зміниться після програми</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Головний результат – більш ясна система управління: як ви приймаєте рішення, передаєте відповідальність, комунікуєте з командою і рухаєте стратегічні задачі.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {results.map((group) => (
            <div key={group.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionLabel>Для кого</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Для керівників і команд, які бачать: старий спосіб управління більше не дає потрібного результату</h2>
              <div className="mt-8 rounded-3xl bg-slate-950 p-6 text-white">
                <h3 className="text-xl font-semibold">Кому може не підійти</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                  <li>тим, хто шукає мотиваційний курс без практики;</li>
                  <li>тим, хто хоче чарівну таблетку без зміни поведінки;</li>
                  <li>тим, хто хоче просто подивитися записи й нічого не впроваджувати.</li>
                </ul>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {audiences.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-[#f7f4ee] p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="format" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Формат</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Це не набір лекцій, які ви дивитеся “коли буде час”</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Задача програми – не просто дати нові знання про лідерство, а допомогти застосувати їх у реальній управлінській ситуації.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {format.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Програма навчання</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Кожен модуль побудований навколо практичного управлінського питання</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Учасник працює не з абстрактним ідеальним лідерством, а зі своїми реальними ситуаціями: делегуванням, відповідальністю, комунікацією, рішеннями, стратегією і змінами.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {modules.map((module) => (
              <div key={module.number} className="rounded-[2rem] bg-white p-8 text-slate-950">
                <div className="mb-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">Модуль {module.number}</div>
                <h3 className="text-2xl font-semibold">{module.title}</h3>
                <p className="mt-4 rounded-2xl bg-[#f7f4ee] p-5 text-sm leading-7 text-slate-700">{module.question}</p>
                <ul className="mt-5 space-y-3">
                  {module.bullets.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
                </ul>
                <p className="mt-6 border-t border-slate-200 pt-5 text-sm leading-7 text-slate-700"><strong>Результат:</strong> {module.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Що на виході</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Не просто доступ до матеріалів, а практичні інструменти для роботи з командою</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionLabel>Довіра</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Чому саме Міжнародна Академія Професійного Коучингу</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Системне лідерство неможливо розвинути тільки через теорію. Тут важливо працювати з мисленням керівника, якістю рішень, відповідальністю, комунікацією, командною динамікою і реальними ситуаціями.
              </p>
              <p className="mt-5 text-base leading-7 text-slate-700">
                Програму ведуть співзасновниці Академії: Ірма Стецько – перший MCC ICF в Україні, професійний ментор, супервізор, бізнес-тренер, NLP-тренер; Наталія Кушнаренко – MCC ICF, професійний ментор, супервізор, бізнес-тренер, NLP Master, ігропрактик.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["2018", "працюємо з 2018 року"],
                ["4000+", "людей пройшли навчання в Академії"],
                ["5500+", "людей отримали коуч-сесії в межах проєктів підтримки"],
                ["MCC ICF", "рівень експертизи авторів програми"],
              ].map(([num, label]) => (
                <div key={num} className="rounded-[2rem] bg-[#f7f4ee] p-8">
                  <div className="text-4xl font-semibold">{num}</div>
                  <div className="mt-3 text-sm leading-6 text-slate-700">{label}</div>
                </div>
              ))}
              <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-8 sm:col-span-2">
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Додати на сайт</div>
                <p className="mt-3 text-sm leading-7 text-slate-700">2–3 короткі відгуки, приклади типових запитів керівників, міні-кейс “запит – що змінилось”, логотипи партнерів за наявності дозволу.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Пакети участі</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Оберіть формат участі</h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Формати відрізняються не лише кількістю сесій або матеріалів, а глибиною впровадження.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pack) => (
            <div key={pack.name} className={`relative rounded-[2rem] p-7 shadow-sm ${pack.highlighted ? "bg-slate-950 text-white" : "border border-slate-200 bg-white text-slate-950"}`}>
              {pack.highlighted && <div className="absolute -top-4 left-7 rounded-full bg-amber-300 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-950">Лідер вибору</div>}
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">{pack.tag}</div>
              <h3 className="mt-4 text-3xl font-semibold">{pack.name}</h3>
              <p className={`mt-1 text-lg ${pack.highlighted ? "text-slate-300" : "text-slate-600"}`}>{pack.subtitle}</p>
              <div className="mt-6 text-3xl font-bold">{pack.price}</div>
              <p className={`mt-4 text-sm leading-7 ${pack.highlighted ? "text-slate-300" : "text-slate-700"}`}>{pack.intro}</p>
              <ul className="mt-6 space-y-3">
                {pack.includes.map((item) => (
                  <li key={item} className={`flex gap-3 text-sm leading-6 ${pack.highlighted ? "text-slate-200" : "text-slate-700"}`}>
                    <span className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${pack.highlighted ? "bg-white" : "bg-slate-950"}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className={`mt-6 rounded-2xl p-4 text-sm leading-7 ${pack.highlighted ? "bg-white/10 text-slate-200" : "bg-[#f7f4ee] text-slate-700"}`}>{pack.bestFor}</p>
              <div className="mt-6">
                <Button href="#contact" variant={pack.highlighted ? "secondary" : "primary"}>{pack.name === "Corporate" ? "Обговорити формат" : `Обрати ${pack.name}`}</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="corporate" className="bg-[#efe9df] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>Corporate</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Corporate – це не групова покупка курсу</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Це формат роботи з управлінською командою як системою. Якщо в компанії проблема не в одному керівнику, а в тому, як працює вся управлінська система, індивідуального навчання може бути недостатньо.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#contact">Обговорити формат для компанії</Button>
                <Button href="#packages" variant="secondary">Порівняти пакети</Button>
              </div>
            </div>
            <div className="space-y-5">
              <div className="rounded-[2rem] bg-white p-7 shadow-sm">
                <h3 className="text-2xl font-semibold">Коли компанії варто розглянути Corporate</h3>
                <ul className="mt-5 space-y-3">
                  {[
                    "компанія швидко росте, а управлінська система не встигає",
                    "рішення занадто часто зав’язані на власнику або CEO",
                    "мідл менеджери сильні як фахівці, але ще не достатньо сильні як керівники",
                    "між командами або департаментами є розриви в комунікації",
                    "HR не хоче чергового курсу без впровадження",
                  ].map((item) => <CheckItem key={item}>{item}</CheckItem>)}
                </ul>
              </div>
              <div className="rounded-[2rem] bg-slate-950 p-7 text-white">
                <h3 className="text-2xl font-semibold">Чим Corporate відрізняється від Pro</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Pro – це глибокий індивідуальний розвиток керівника. Corporate – це робота з управлінською командою як системою: реальними бізнес-задачами, командною взаємодією, управлінськими розривами, комунікацією між підрозділами і спільними правилами прийняття рішень.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Часті питання</h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => <FAQItem key={item.q} item={item} index={index} />)}
        </div>
      </section>

      <section id="contact" className="px-5 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionLabel>Наступний крок</SectionLabel>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Ваш стиль управління сьогодні створює майбутнє команди завтра</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Керівник не має бути вузьким місцем розвитку бізнесу. Він може стати архітектором системи, у якій є ясність, відповідальність, сильніші рішення і команда, яка поступово бере більше самостійності.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Програма допоможе перейти від ручного управління до більш зрілої системи лідерства – через навчання, практику, коучинговий супровід і роботу з вашим реальним управлінським контекстом.
              </p>
            </div>
            <div className="rounded-[2rem] bg-white p-7 text-slate-950">
              <h3 className="text-2xl font-semibold">Залиште заявку</h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                Команда Академії допоможе зрозуміти, який формат буде доречнішим: Base, Pro або Corporate.
              </p>
              <form className="mt-6 space-y-4">
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-950" placeholder="Ваше ім’я" />
                <input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-950" placeholder="Телефон або email" />
                <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-950">
                  <option>Я хочу обрати пакет участі</option>
                  <option>Хочу консультацію щодо формату</option>
                  <option>Хочу обговорити Corporate для команди</option>
                </select>
                <textarea className="min-h-[120px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-950" placeholder="Коротко опишіть ваш запит" />
                <button type="button" className="w-full rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white hover:bg-slate-800">Відправити заявку</button>
              </form>
              <div className="mt-6 rounded-2xl bg-[#f7f4ee] p-4 text-sm leading-6 text-slate-700">
                Для реального сайту цю форму потрібно підключити до CRM, email або наявної форми заявки Академії.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div>Міжнародна Академія Професійного Коучингу © 2018</div>
          <div className="flex flex-wrap gap-4">
            <a href="#top" className="hover:text-slate-950">До початку</a>
            <a href="#packages" className="hover:text-slate-950">Пакети</a>
            <a href="#contact" className="hover:text-slate-950">Заявка</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
