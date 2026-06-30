// WA Motorcycle Knowledge Test — full question bank (199, bilingual EN/RU)
// answer = 0-based index; en/ru opts index-aligned. page=null -> practice question (not in manual).

const QUESTIONS = [
 {
  "id": 1,
  "page": "1-1",
  "answer": 1,
  "q": {
   "en": "What must you have on your driver license to legally operate a motorcycle on Washington State roadways?",
   "ru": "Что должно быть в ваших водительских правах (driver license), чтобы законно управлять мотоциклом на дорогах штата Вашингтон?"
  },
  "opts": [
   {
    "en": "A standard driver license only",
    "ru": "Только обычные водительские права"
   },
   {
    "en": "A motorcycle permit or endorsement",
    "ru": "Мотоциклетное разрешение (permit) или допуск (endorsement)"
   },
   {
    "en": "A CDL endorsement",
    "ru": "Допуск CDL (endorsement)"
   },
   {
    "en": "A learner permit extension only",
    "ru": "Только продление учебного разрешения (learner permit)"
   }
  ],
  "why": {
   "en": "The manual states that a motorcycle permit or endorsement is required to legally operate a motorcycle on Washington State roadways. Source: Chapter 1, Two- and Three-Wheel Motorcycle Endorsements, p. 1-1 (manual p. 1-1, PDF p. 9).",
   "ru": "В руководстве сказано, что для законного управления мотоциклом на дорогах штата Вашингтон необходимо иметь мотоциклетное разрешение (permit) или допуск (endorsement). Источник: глава 1, «Two- and Three-Wheel Motorcycle Endorsements», p. 1-1 (Manual p. 1-1, PDF p. 9)."
  }
 },
 {
  "id": 2,
  "page": "1-1",
  "answer": 0,
  "q": {
   "en": "To lawfully operate a two-wheeled motorcycle in Washington, what must you have?",
   "ru": "Что необходимо иметь, чтобы законно управлять двухколёсным (2W) мотоциклом в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "A two-wheel permit or endorsement",
    "ru": "Разрешение (permit) или допуск (endorsement) на двухколёсный (2W) мотоцикл"
   },
   {
    "en": "Only a three-wheel endorsement",
    "ru": "Только допуск (endorsement) на трёхколёсный мотоцикл"
   },
   {
    "en": "Only a car license",
    "ru": "Только водительские права на автомобиль"
   },
   {
    "en": "Only insurance",
    "ru": "Только страховку (insurance)"
   }
  ],
  "why": {
   "en": "Washington separates two-wheel and three-wheel permits/endorsements because the handling is different. Source: Chapter 1, Two- and Three-Wheel Motorcycle Endorsements, p. 1-1 (manual p. 1-1, PDF p. 9).",
   "ru": "В штате Вашингтон разрешения и допуски (permit/endorsement) для двухколёсных и трёхколёсных мотоциклов разделены, потому что управляются они по-разному. Источник: глава 1, «Two- and Three-Wheel Motorcycle Endorsements», p. 1-1 (Manual p. 1-1, PDF p. 9)."
  }
 },
 {
  "id": 3,
  "page": "1-1",
  "answer": 1,
  "q": {
   "en": "What can happen if a motorcycle is operated on public roadways without the required permit or endorsement?",
   "ru": "Что может произойти, если управлять мотоциклом на дорогах общего пользования без нужного разрешения (permit) или допуска (endorsement)?"
  },
  "opts": [
   {
    "en": "Nothing if the rider is insured",
    "ru": "Ничего, если у водителя есть страховка"
   },
   {
    "en": "The motorcycle may be impounded",
    "ru": "Мотоцикл могут отправить на штрафстоянку (impound)"
   },
   {
    "en": "Only a warning is issued",
    "ru": "Выдаётся только предупреждение"
   },
   {
    "en": "Only passengers are cited",
    "ru": "Штрафуют только пассажиров"
   }
  ],
  "why": {
   "en": "The manual warns that the motorcycle may be impounded and lists a minimum fine for riding without an endorsement. Source: Chapter 1, Two- and Three-Wheel Motorcycle Endorsements, p. 1-1 (manual p. 1-1, PDF p. 9).",
   "ru": "Руководство предупреждает, что мотоцикл могут отправить на штрафстоянку (impound), и указывает минимальный штраф за езду без допуска (endorsement). Источник: глава 1, «Two- and Three-Wheel Motorcycle Endorsements», p. 1-1 (Manual p. 1-1, PDF p. 9)."
  }
 },
 {
  "id": 4,
  "page": "1-2",
  "answer": 0,
  "q": {
   "en": "What must you pass to get a 2W permit?",
   "ru": "Что нужно сдать, чтобы получить разрешение (permit) на двухколёсный (2W) мотоцикл?"
  },
  "opts": [
   {
    "en": "A basic knowledge test and a basic skills test",
    "ru": "Базовый теоретический тест (knowledge test) и базовый тест по навыкам вождения (skills test)"
   },
   {
    "en": "Only an eye test",
    "ru": "Только проверку зрения"
   },
   {
    "en": "Only a skills test",
    "ru": "Только тест по навыкам вождения (skills test)"
   },
   {
    "en": "Only a written test",
    "ru": "Только письменный тест"
   }
  ],
  "why": {
   "en": "For a 2W permit, the manual requires both a basic knowledge and a basic skills test. Source: Chapter 1, Obtaining Your Permit/Endorsement, p. 1-2 (manual p. 1-2, PDF p. 10).",
   "ru": "Для получения разрешения (permit) на двухколёсный (2W) мотоцикл руководство требует сдать и базовый теоретический тест, и базовый тест по навыкам вождения. Источник: глава 1, «Obtaining Your Permit/Endorsement», p. 1-2 (Manual p. 1-2, PDF p. 10)."
  }
 },
 {
  "id": 5,
  "page": "1-2",
  "answer": 2,
  "q": {
   "en": "What must you pass to get a 2W endorsement?",
   "ru": "Что нужно сдать, чтобы получить допуск (endorsement) на двухколёсный (2W) мотоцикл?"
  },
  "opts": [
   {
    "en": "Only the basic permit test",
    "ru": "Только базовый тест на разрешение (permit)"
   },
   {
    "en": "Only the skills test",
    "ru": "Только тест по навыкам вождения (skills test)"
   },
   {
    "en": "Basic knowledge/skills plus advanced knowledge/skills",
    "ru": "Базовые знания и навыки плюс продвинутые знания и навыки (advanced knowledge/skills)"
   },
   {
    "en": "Only a road sign test",
    "ru": "Только тест на знание дорожных знаков"
   }
  ],
  "why": {
   "en": "The manual states that a 2W endorsement requires all four permit/endorsement tests. Source: Chapter 1, Obtaining Your Permit/Endorsement, p. 1-2 (manual p. 1-2, PDF p. 10).",
   "ru": "В руководстве сказано, что для допуска (endorsement) на двухколёсный (2W) мотоцикл нужно сдать все четыре теста на разрешение и допуск (permit/endorsement). Источник: глава 1, «Obtaining Your Permit/Endorsement», p. 1-2 (Manual p. 1-2, PDF p. 10)."
  }
 },
 {
  "id": 6,
  "page": "1-2",
  "answer": 1,
  "q": {
   "en": "Where must Washington motorcycle permit/endorsement tests be taken?",
   "ru": "Где необходимо сдавать тесты на мотоциклетное разрешение или допуск (permit/endorsement) в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "At any private parking lot",
    "ru": "На любой частной парковке"
   },
   {
    "en": "With one of DOL's partner training schools",
    "ru": "В одной из учебных школ-партнёров DOL (training schools)"
   },
   {
    "en": "Only at a police station",
    "ru": "Только в полицейском участке"
   },
   {
    "en": "Only online",
    "ru": "Только онлайн"
   }
  ],
  "why": {
   "en": "The manual states that all motorcycle tests must be taken with one of the partner training schools. Source: Chapter 1, Obtaining Your Permit/Endorsement, p. 1-2 (manual p. 1-2, PDF p. 10).",
   "ru": "В руководстве сказано, что все мотоциклетные тесты необходимо сдавать в одной из учебных школ-партнёров (training schools). Источник: глава 1, «Obtaining Your Permit/Endorsement», p. 1-2 (Manual p. 1-2, PDF p. 10)."
  }
 },
 {
  "id": 7,
  "page": "1-3",
  "answer": 1,
  "q": {
   "en": "What is the minimum age for a Washington motorcycle instruction permit?",
   "ru": "Каков минимальный возраст для получения мотоциклетного учебного разрешения (instruction permit) в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "15",
    "ru": "15"
   },
   {
    "en": "16",
    "ru": "16"
   },
   {
    "en": "18",
    "ru": "18"
   },
   {
    "en": "21",
    "ru": "21"
   }
  ],
  "why": {
   "en": "Instruction permit riders must be at least 16 years old and have a current Washington driver license. Source: Chapter 1, Instruction Permits, p. 1-3 (manual p. 1-3, PDF p. 11).",
   "ru": "Владельцы учебного разрешения (instruction permit) должны быть не моложе 16 лет и иметь действующие водительские права (driver license) штата Вашингтон. Источник: глава 1, «Instruction Permits», p. 1-3 (Manual p. 1-3, PDF p. 11)."
  }
 },
 {
  "id": 8,
  "page": "1-3",
  "answer": 0,
  "q": {
   "en": "Which restrictions apply to riders with Washington motorcycle instruction permits?",
   "ru": "Какие ограничения действуют для водителей с мотоциклетным учебным разрешением (instruction permit) в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "No passengers and no night riding",
    "ru": "Запрещено возить пассажиров и ездить ночью"
   },
   {
    "en": "No front brake use",
    "ru": "Запрещено пользоваться передним тормозом"
   },
   {
    "en": "No riding above 35 mph",
    "ru": "Запрещено ездить быстрее 35 миль/ч"
   },
   {
    "en": "No highways only",
    "ru": "Запрещены только автомагистрали"
   }
  ],
  "why": {
   "en": "The manual states instruction permit holders are restricted from carrying passengers or riding at night. Source: Chapter 1, Instruction Permits, p. 1-3 (manual p. 1-3, PDF p. 11).",
   "ru": "В руководстве сказано, что владельцам учебного разрешения (instruction permit) запрещено возить пассажиров и ездить в тёмное время суток. Источник: глава 1, «Instruction Permits», p. 1-3 (Manual p. 1-3, PDF p. 11)."
  }
 },
 {
  "id": 9,
  "page": "1-3",
  "answer": 2,
  "q": {
   "en": "How long does a Washington motorcycle permit last before expiring?",
   "ru": "Как долго действует мотоциклетное разрешение (permit) в штате Вашингтон до окончания срока?"
  },
  "opts": [
   {
    "en": "30 days",
    "ru": "30 дней"
   },
   {
    "en": "90 days",
    "ru": "90 дней"
   },
   {
    "en": "180 days",
    "ru": "180 дней"
   },
   {
    "en": "5 years",
    "ru": "5 лет"
   }
  ],
  "why": {
   "en": "The manual says permits expire after 180 days and may be renewed one time before expiration. Source: Chapter 1, Instruction Permits, p. 1-3 (manual p. 1-3, PDF p. 11).",
   "ru": "В руководстве сказано, что срок действия разрешения (permit) истекает через 180 дней и его можно продлить один раз до окончания срока. Источник: глава 1, «Instruction Permits», p. 1-3 (Manual p. 1-3, PDF p. 11)."
  }
 },
 {
  "id": 10,
  "page": "1-3",
  "answer": 1,
  "q": {
   "en": "How many motorcycle permits are allowed within a 5-year period?",
   "ru": "Сколько мотоциклетных разрешений (permit) допускается в течение пятилетнего периода?"
  },
  "opts": [
   {
    "en": "One",
    "ru": "Одно"
   },
   {
    "en": "Two",
    "ru": "Два"
   },
   {
    "en": "Three",
    "ru": "Три"
   },
   {
    "en": "Unlimited",
    "ru": "Без ограничений"
   }
  ],
  "why": {
   "en": "The manual states that only two permits are allowed within a 5-year period. Source: Chapter 1, Instruction Permits, p. 1-3 (manual p. 1-3, PDF p. 11).",
   "ru": "В руководстве сказано, что в течение пятилетнего периода допускается не более двух разрешений (permit). Источник: глава 1, «Instruction Permits», p. 1-3 (Manual p. 1-3, PDF p. 11)."
  }
 },
 {
  "id": 11,
  "page": "1-3",
  "answer": 2,
  "q": {
   "en": "What is the best way to improve riding technique, street strategies, and skill development?",
   "ru": "Что лучше всего помогает улучшить технику вождения, дорожную тактику и развитие навыков?"
  },
  "opts": [
   {
    "en": "Avoid official courses",
    "ru": "Избегать официальных курсов"
   },
   {
    "en": "Only ride long trips",
    "ru": "Совершать только дальние поездки"
   },
   {
    "en": "Take initial and ongoing motorcycle training",
    "ru": "Пройти начальное и непрерывное обучение вождению мотоцикла"
   },
   {
    "en": "Watch other riders only",
    "ru": "Только наблюдать за другими водителями"
   }
  ],
  "why": {
   "en": "The manual strongly encourages initial and ongoing rider training and says riders who skip official courses miss key teachings. Source: Chapter 1, Rider Training and Education, p. 1-3 (manual p. 1-3, PDF p. 11).",
   "ru": "Руководство настоятельно рекомендует начальное и непрерывное обучение водителей и предупреждает, что те, кто пропускает официальные курсы, упускают важные знания. Источник: глава 1, «Rider Training and Education», p. 1-3 (Manual p. 1-3, PDF p. 11)."
  }
 },
 {
  "id": 12,
  "page": "1-3",
  "answer": 0,
  "q": {
   "en": "Can completion of a motorcycle training course qualify a rider for an insurance discount?",
   "ru": "Может ли прохождение курса обучения вождению мотоцикла дать право на скидку на страховку (insurance)?"
  },
  "opts": [
   {
    "en": "Yes",
    "ru": "Да"
   },
   {
    "en": "No",
    "ru": "Нет"
   },
   {
    "en": "Only for riders under 18",
    "ru": "Только для водителей младше 18 лет"
   },
   {
    "en": "Only for three-wheel riders",
    "ru": "Только для водителей трёхколёсных мотоциклов"
   }
  ],
  "why": {
   "en": "The manual states that completing a motorcycle training course may qualify you for a motorcycle insurance discount. Source: Chapter 1, Rider Training and Education, p. 1-3 (manual p. 1-3, PDF p. 11).",
   "ru": "В руководстве сказано, что прохождение курса обучения вождению мотоцикла может дать право на скидку на мотоциклетную страховку (insurance). Источник: глава 1, «Rider Training and Education», p. 1-3 (Manual p. 1-3, PDF p. 11)."
  }
 },
 {
  "id": 13,
  "page": "1-4",
  "answer": 1,
  "q": {
   "en": "What topics may advanced rider courses include?",
   "ru": "Какие темы могут входить в курсы для опытных водителей (advanced rider courses)?"
  },
  "opts": [
   {
    "en": "Only classroom law review",
    "ru": "Только аудиторный разбор законов"
   },
   {
    "en": "Advanced braking, cornering, swerving, and defensive street strategies",
    "ru": "Продвинутое торможение, прохождение поворотов, резкий объезд препятствий и оборонительная дорожная тактика"
   },
   {
    "en": "Only parking practice",
    "ru": "Только отработка парковки"
   },
   {
    "en": "Only registration rules",
    "ru": "Только правила регистрации"
   }
  ],
  "why": {
   "en": "The manual describes advanced rider courses as including advanced braking, cornering, swerving, and defensive street strategies. Source: Chapter 1, Advanced Rider Courses, p. 1-4 (manual p. 1-4, PDF p. 12).",
   "ru": "Руководство описывает курсы для опытных водителей (advanced rider courses) как включающие продвинутое торможение, прохождение поворотов, резкий объезд препятствий и оборонительную дорожную тактику. Источник: глава 1, «Advanced Rider Courses», p. 1-4 (Manual p. 1-4, PDF p. 12)."
  }
 },
 {
  "id": 14,
  "page": "1-5",
  "answer": 1,
  "q": {
   "en": "Do you have to take training in order to take the permit or endorsement tests?",
   "ru": "Обязательно ли проходить обучение, чтобы сдавать тесты на разрешение или допуск (permit/endorsement)?"
  },
  "opts": [
   {
    "en": "Yes, always",
    "ru": "Да, всегда"
   },
   {
    "en": "No",
    "ru": "Нет"
   },
   {
    "en": "Only if over 18",
    "ru": "Только если старше 18 лет"
   },
   {
    "en": "Only for three-wheel motorcycles",
    "ru": "Только для трёхколёсных мотоциклов"
   }
  ],
  "why": {
   "en": "The manual states you do not have to take training to take permit or endorsement tests. Source: Chapter 1, Endorsement Testing, p. 1-5 (manual p. 1-5, PDF p. 13).",
   "ru": "В руководстве сказано, что проходить обучение для сдачи тестов на разрешение или допуск (permit/endorsement) не обязательно. Источник: глава 1, «Endorsement Testing», p. 1-5 (Manual p. 1-5, PDF p. 13)."
  }
 },
 {
  "id": 15,
  "page": "2-1",
  "answer": 0,
  "q": {
   "en": "Compared with driving a car, why does riding a motorcycle involve different and greater risks?",
   "ru": "Почему по сравнению с управлением автомобилем езда на мотоцикле сопряжена с иными и более высокими рисками?"
  },
  "opts": [
   {
    "en": "Less protection, less stability, traction limits, weather exposure, and lower visibility",
    "ru": "Меньше защиты, меньше устойчивости, ограничения сцепления, воздействие погоды и более низкая заметность"
   },
   {
    "en": "Only because motorcycles are louder",
    "ru": "Только потому, что мотоциклы громче"
   },
   {
    "en": "Only because riders are younger",
    "ru": "Только потому, что водители моложе"
   },
   {
    "en": "Only because motorcycles are faster",
    "ru": "Только потому, что мотоциклы быстрее"
   }
  ],
  "why": {
   "en": "The manual lists lack of vehicle protection, stability differences, traction limitations, exposure, and visibility as motorcycle risk factors. Source: Chapter 2, Create Your Own Safety, p. 2-1 (manual p. 2-1, PDF p. 15).",
   "ru": "В руководстве в качестве факторов риска для мотоцикла перечислены отсутствие защиты транспортного средства, различия в устойчивости, ограничения сцепления, незащищённость от внешних условий и заметность. Источник: глава 2, «Create Your Own Safety», p. 2-1 (Manual p. 2-1, PDF p. 15)."
  }
 },
 {
  "id": 16,
  "page": "2-1",
  "answer": 1,
  "q": {
   "en": "What is the rider's greatest risk factor according to the manual?",
   "ru": "Что, согласно руководству, является самым большим фактором риска для водителя?"
  },
  "opts": [
   {
    "en": "Other riders only",
    "ru": "Только другие водители"
   },
   {
    "en": "The rider's own skill and behavior",
    "ru": "Собственные навыки и поведение водителя"
   },
   {
    "en": "Helmet color only",
    "ru": "Только цвет шлема"
   },
   {
    "en": "Engine size only",
    "ru": "Только объём двигателя"
   }
  ],
  "why": {
   "en": "The manual states that your own skill and behavior is the greatest risk to you as a motorcyclist. Source: Chapter 2, Create Your Own Safety, p. 2-1 (manual p. 2-1, PDF p. 15).",
   "ru": "В руководстве сказано, что ваши собственные навыки и поведение — это самый большой риск для вас как мотоциклиста. Источник: глава 2, «Create Your Own Safety», p. 2-1 (Manual p. 2-1, PDF p. 15)."
  }
 },
 {
  "id": 17,
  "page": "2-2",
  "answer": 1,
  "q": {
   "en": "What three functions should protective gear provide?",
   "ru": "Какие три функции должна обеспечивать защитная экипировка?"
  },
  "opts": [
   {
    "en": "Sound, speed, and style",
    "ru": "Звук, скорость и стиль"
   },
   {
    "en": "Protection, comfort, and visibility",
    "ru": "Защиту, комфорт и заметность"
   },
   {
    "en": "Fuel economy, storage, and speed",
    "ru": "Экономию топлива, место для хранения и скорость"
   },
   {
    "en": "Only crash protection",
    "ru": "Только защиту при аварии"
   }
  ],
  "why": {
   "en": "The manual says functional gear helps manage risk by providing protection, comfort, and visibility. Source: Chapter 2, Create Your Own Safety with Functional Gear, p. 2-2 (manual p. 2-2, PDF p. 16).",
   "ru": "В руководстве сказано, что функциональная экипировка помогает управлять рисками, обеспечивая защиту, комфорт и заметность. Источник: глава 2, «Create Your Own Safety with Functional Gear», p. 2-2 (Manual p. 2-2, PDF p. 16)."
  }
 },
 {
  "id": 18,
  "page": "2-2",
  "answer": 1,
  "q": {
   "en": "What is the single most important thing you can do to reduce risk and improve crash survival?",
   "ru": "Что является самым важным действием для снижения риска и повышения шансов выжить в аварии?"
  },
  "opts": [
   {
    "en": "Ride faster through intersections",
    "ru": "Быстрее проезжать перекрёстки"
   },
   {
    "en": "Wear a quality, properly fitted, securely fastened helmet",
    "ru": "Носить качественный, правильно подобранный и надёжно застёгнутый шлем"
   },
   {
    "en": "Use loud pipes",
    "ru": "Использовать громкие выхлопные трубы"
   },
   {
    "en": "Use only rear brake",
    "ru": "Использовать только задний тормоз"
   }
  ],
  "why": {
   "en": "The manual identifies a quality, properly fitted, securely fastened helmet as the single most important thing to reduce risk. Source: Chapter 2, Helmets, p. 2-2 (manual p. 2-2, PDF p. 16).",
   "ru": "В руководстве качественный, правильно подобранный и надёжно застёгнутый шлем назван самым важным средством снижения риска. Источник: глава 2, «Helmets», p. 2-2 (Manual p. 2-2, PDF p. 16)."
  }
 },
 {
  "id": 19,
  "page": "2-2",
  "answer": 2,
  "q": {
   "en": "To legally ride in Washington, what helmet standard is required?",
   "ru": "Какому стандарту должен соответствовать шлем для законной езды в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "OSHA",
    "ru": "OSHA"
   },
   {
    "en": "FDA",
    "ru": "FDA"
   },
   {
    "en": "DOT",
    "ru": "DOT"
   },
   {
    "en": "NFPA",
    "ru": "NFPA"
   }
  ],
  "why": {
   "en": "Washington requires a helmet compliant with Department of Transportation guidelines. Source: Chapter 2, Helmets, p. 2-2 (manual p. 2-2, PDF p. 16).",
   "ru": "В штате Вашингтон требуется шлем, соответствующий требованиям Министерства транспорта (Department of Transportation, DOT). Источник: глава 2, «Helmets», p. 2-2 (Manual p. 2-2, PDF p. 16)."
  }
 },
 {
  "id": 20,
  "page": "2-2",
  "answer": 1,
  "q": {
   "en": "Where is DOT compliance indicated on a motorcycle helmet?",
   "ru": "Где на мотоциклетном шлеме обозначено соответствие стандарту DOT?"
  },
  "opts": [
   {
    "en": "Only on the sales receipt",
    "ru": "Только в чеке о покупке"
   },
   {
    "en": "Rear exterior and interior labels",
    "ru": "На задней наружной и внутренней этикетках"
   },
   {
    "en": "Only inside the manual",
    "ru": "Только в инструкции"
   },
   {
    "en": "No label is required",
    "ru": "Этикетка не требуется"
   }
  ],
  "why": {
   "en": "The manual says DOT compliance is indicated by DOT labels on the rear exterior and interior of the helmet. Source: Chapter 2, Helmets, p. 2-2 (manual p. 2-2, PDF p. 16).",
   "ru": "В руководстве сказано, что соответствие стандарту DOT обозначается этикетками DOT на задней наружной и внутренней частях шлема. Источник: глава 2, «Helmets», p. 2-2 (Manual p. 2-2, PDF p. 16)."
  }
 },
 {
  "id": 21,
  "page": "2-2",
  "answer": 2,
  "q": {
   "en": "Are novelty helmets legal for riding on public roadways in Washington?",
   "ru": "Разрешены ли сувенирные шлемы (novelty helmets) для езды по дорогам общего пользования в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "Yes, if they have a chin strap",
    "ru": "Да, если у них есть ремешок под подбородком"
   },
   {
    "en": "Yes, for adults only",
    "ru": "Да, только для взрослых"
   },
   {
    "en": "No",
    "ru": "Нет"
   },
   {
    "en": "Only during daylight",
    "ru": "Только в светлое время суток"
   }
  ],
  "why": {
   "en": "The manual states novelty helmets are not DOT compliant and may not be worn on public roadways. Source: Chapter 2, Helmets, p. 2-2 (manual p. 2-2, PDF p. 16).",
   "ru": "В руководстве сказано, что сувенирные шлемы (novelty helmets) не соответствуют стандарту DOT и не могут использоваться на дорогах общего пользования. Источник: глава 2, «Helmets», p. 2-2 (Manual p. 2-2, PDF p. 16)."
  }
 },
 {
  "id": 22,
  "page": "2-2",
  "answer": 2,
  "q": {
   "en": "Which helmet style is considered the safest?",
   "ru": "Какой тип шлема считается самым безопасным?"
  },
  "opts": [
   {
    "en": "Half shell",
    "ru": "Открытый шлем (half shell)"
   },
   {
    "en": "Three-quarter shell",
    "ru": "Шлем с тремя четвертями покрытия (three-quarter shell)"
   },
   {
    "en": "Full-face helmet",
    "ru": "Шлем-интеграл с полной защитой лица (full-face helmet)"
   },
   {
    "en": "Novelty helmet",
    "ru": "Сувенирный шлем (novelty helmet)"
   }
  ],
  "why": {
   "en": "The manual states full-face helmets are considered the safest because they provide the best chin and face protection. Source: Chapter 2, Helmet Types and Construction, p. 2-2 (manual p. 2-2, PDF p. 16).",
   "ru": "В руководстве сказано, что шлемы-интегралы с полной защитой лица (full-face) считаются самыми безопасными, так как обеспечивают лучшую защиту подбородка и лица. Источник: глава 2, «Helmet Types and Construction», p. 2-2 (Manual p. 2-2, PDF p. 16)."
  }
 },
 {
  "id": 23,
  "page": "2-2",
  "answer": 0,
  "q": {
   "en": "Which helmet parts are required for a DOT-compliant helmet?",
   "ru": "Какие части обязательны для шлема, соответствующего стандарту DOT?"
  },
  "opts": [
   {
    "en": "Outer shell, inner liner, comfort liner, and retention system",
    "ru": "Внешняя оболочка, внутренний амортизирующий слой, комфортный подклад и система фиксации"
   },
   {
    "en": "Only paint and visor",
    "ru": "Только краска и визор"
   },
   {
    "en": "Only a chin strap",
    "ru": "Только ремешок под подбородком"
   },
   {
    "en": "Only a hard shell",
    "ru": "Только жёсткая оболочка"
   }
  ],
  "why": {
   "en": "The manual lists an impact-resistant outer shell, impact-absorbing liner, comfort liner, and neck/chin retention system. Source: Chapter 2, Helmet Types and Construction, pp. 2-2 to 2-3 (manual p. 2-2, PDF p. 16; manual p. 2-3, PDF p. 17).",
   "ru": "В руководстве перечислены ударопрочная внешняя оболочка, поглощающий удар внутренний слой, комфортный подклад и система фиксации на шее/подбородке. Источник: глава 2, «Helmet Types and Construction», pp. 2-2 — 2-3 (Manual p. 2-2, PDF p. 16; Manual p. 2-3, PDF p. 17)."
  }
 },
 {
  "id": 24,
  "page": "2-3",
  "answer": 1,
  "q": {
   "en": "When should a helmet be replaced?",
   "ru": "Когда следует заменить шлем?"
  },
  "opts": [
   {
    "en": "Only when color fades",
    "ru": "Только когда выцветает цвет"
   },
   {
    "en": "After obvious defects or after being involved in a crash",
    "ru": "При явных дефектах или после попадания в аварию"
   },
   {
    "en": "Never",
    "ru": "Никогда"
   },
   {
    "en": "Only after 20 years",
    "ru": "Только через 20 лет"
   }
  ],
  "why": {
   "en": "The manual says helmets should be replaced if they have defects or after a crash; many manufacturers recommend five-year replacement. Source: Chapter 2, Helmet Types and Construction, p. 2-3 (manual p. 2-3, PDF p. 17).",
   "ru": "В руководстве сказано, что шлем следует заменить при наличии дефектов или после аварии; многие производители рекомендуют замену каждые пять лет. Источник: глава 2, «Helmet Types and Construction», p. 2-3 (Manual p. 2-3, PDF p. 17)."
  }
 },
 {
  "id": 25,
  "page": "2-4",
  "answer": 1,
  "q": {
   "en": "Should a properly fitted DOT helmet block a rider's central or peripheral vision?",
   "ru": "Должен ли правильно подобранный шлем стандарта DOT перекрывать центральное или периферийное зрение водителя?"
  },
  "opts": [
   {
    "en": "Yes",
    "ru": "Да"
   },
   {
    "en": "No",
    "ru": "Нет"
   },
   {
    "en": "Only at high speed",
    "ru": "Только на высокой скорости"
   },
   {
    "en": "Only at night",
    "ru": "Только ночью"
   }
  ],
  "why": {
   "en": "The manual says properly fitted DOT-compliant helmets will not block or obstruct central or peripheral vision. Source: Chapter 2, Helmet Fit, p. 2-4 (manual p. 2-4, PDF p. 18).",
   "ru": "В руководстве сказано, что правильно подобранные шлемы, соответствующие стандарту DOT, не перекрывают и не загораживают центральное или периферийное зрение. Источник: глава 2, «Helmet Fit», p. 2-4 (Manual p. 2-4, PDF p. 18)."
  }
 },
 {
  "id": 26,
  "page": "2-4",
  "answer": 2,
  "q": {
   "en": "When does Washington law require eye protection?",
   "ru": "Когда по закону штата Вашингтон обязательна защита глаз (eye protection)?"
  },
  "opts": [
   {
    "en": "Never",
    "ru": "Никогда"
   },
   {
    "en": "Only at night",
    "ru": "Только ночью"
   },
   {
    "en": "When riding on public roadways unless the motorcycle is equipped with a windshield",
    "ru": "При езде по дорогам общего пользования, если мотоцикл не оборудован ветровым стеклом (windshield)"
   },
   {
    "en": "Only for passengers",
    "ru": "Только для пассажиров"
   }
  ],
  "why": {
   "en": "The manual states Washington law requires eye protection unless the motorcycle is equipped with a windshield. Source: Chapter 2, Eye Protection, p. 2-4 (manual p. 2-4, PDF p. 18).",
   "ru": "В руководстве сказано, что по закону штата Вашингтон защита глаз обязательна, если мотоцикл не оборудован ветровым стеклом (windshield). Источник: глава 2, «Eye Protection», p. 2-4 (manual p. 2-4, PDF p. 18)."
  }
 },
 {
  "id": 27,
  "page": "2-4",
  "answer": 1,
  "q": {
   "en": "What type of eye protection offers the most protection?",
   "ru": "Какой тип защиты глаз (eye protection) защищает лучше всего?"
  },
  "opts": [
   {
    "en": "Ordinary sunglasses",
    "ru": "Обычные солнцезащитные очки"
   },
   {
    "en": "A plastic, shatter-resistant face shield",
    "ru": "Пластиковый ударопрочный лицевой щиток (face shield)"
   },
   {
    "en": "No eye protection",
    "ru": "Отсутствие защиты глаз"
   },
   {
    "en": "A baseball cap",
    "ru": "Бейсболка"
   }
  ],
  "why": {
   "en": "The manual states a shatter-resistant face shield offers the most protection for eyes and can help protect the face. Source: Chapter 2, Eye Protection, p. 2-4 (manual p. 2-4, PDF p. 18).",
   "ru": "В руководстве сказано, что ударопрочный лицевой щиток (face shield) обеспечивает наилучшую защиту глаз и помогает защитить лицо. Источник: глава 2, «Eye Protection», p. 2-4 (manual p. 2-4, PDF p. 18)."
  }
 },
 {
  "id": 28,
  "page": "2-5",
  "answer": 1,
  "q": {
   "en": "Should tinted eye protection be worn in low visibility such as dusk, fog, or rain?",
   "ru": "Следует ли использовать тонированную защиту глаз (tinted eye protection) при плохой видимости — в сумерках, тумане или под дождём?"
  },
  "opts": [
   {
    "en": "Yes",
    "ru": "Да"
   },
   {
    "en": "No",
    "ru": "Нет"
   },
   {
    "en": "Only on highways",
    "ru": "Только на автомагистралях"
   },
   {
    "en": "Only with a full-face helmet",
    "ru": "Только со шлемом с полной защитой лица (full-face helmet)"
   }
  ],
  "why": {
   "en": "The manual states tinted eye protection should not be worn during low visibility or poor weather such as fog or rain. Source: Chapter 2, Eye Protection, p. 2-5 (manual p. 2-5, PDF p. 19).",
   "ru": "В руководстве сказано, что тонированную защиту глаз не следует использовать при плохой видимости или в плохую погоду, например в тумане или под дождём. Источник: глава 2, «Eye Protection», p. 2-5 (manual p. 2-5, PDF p. 19)."
  }
 },
 {
  "id": 29,
  "page": "2-5",
  "answer": 1,
  "q": {
   "en": "What is the minimum protective gear required to ride legally in Washington?",
   "ru": "Какая минимальная защитная экипировка (protective gear) требуется для законной езды в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "Gloves only",
    "ru": "Только перчатки"
   },
   {
    "en": "DOT-approved helmet and eye protection",
    "ru": "Шлем, одобренный DOT (DOT-approved helmet), и защита глаз (eye protection)"
   },
   {
    "en": "Jacket and boots only",
    "ru": "Только куртка и ботинки"
   },
   {
    "en": "Any helmet and sunglasses",
    "ru": "Любой шлем и солнцезащитные очки"
   }
  ],
  "why": {
   "en": "The manual states the minimum legal protective gear in Washington is a DOT-approved helmet and eye protection. Source: Chapter 2, Protective Gear, p. 2-5 (manual p. 2-5, PDF p. 19).",
   "ru": "В руководстве сказано, что минимальная по закону защитная экипировка в штате Вашингтон — это шлем, одобренный DOT (DOT-approved helmet), и защита глаз. Источник: глава 2, «Protective Gear», p. 2-5 (manual p. 2-5, PDF p. 19)."
  }
 },
 {
  "id": 30,
  "page": "2-5",
  "answer": 0,
  "q": {
   "en": "What kind of material offers better abrasion protection than denim?",
   "ru": "Какой материал обеспечивает лучшую защиту от истирания (abrasion), чем джинсовая ткань?"
  },
  "opts": [
   {
    "en": "Leather or sturdy abrasion-resistant material",
    "ru": "Кожа или прочный износостойкий материал"
   },
   {
    "en": "Thin cotton",
    "ru": "Тонкий хлопок"
   },
   {
    "en": "Shorts",
    "ru": "Шорты"
   },
   {
    "en": "Any street clothing",
    "ru": "Любая повседневная одежда"
   }
  ],
  "why": {
   "en": "The manual says leather or sturdy abrasion-resistant material offers the best protection; denim does not provide significant abrasion protection. Source: Chapter 2, Jacket and Pants, p. 2-5 (manual p. 2-5, PDF p. 19).",
   "ru": "В руководстве сказано, что кожа или прочный износостойкий материал обеспечивают наилучшую защиту; джинсовая ткань не даёт значительной защиты от истирания. Источник: глава 2, «Jacket and Pants», p. 2-5 (manual p. 2-5, PDF p. 19)."
  }
 },
 {
  "id": 31,
  "page": "2-5",
  "answer": 2,
  "q": {
   "en": "What is hypothermia?",
   "ru": "Что такое гипотермия (hypothermia)?"
  },
  "opts": [
   {
    "en": "Above-normal body temperature",
    "ru": "Повышенная температура тела"
   },
   {
    "en": "Normal body temperature",
    "ru": "Нормальная температура тела"
   },
   {
    "en": "Body temperature becoming too low",
    "ru": "Чрезмерное понижение температуры тела"
   },
   {
    "en": "Average motorcycle temperature",
    "ru": "Средняя температура мотоцикла"
   }
  ],
  "why": {
   "en": "The manual defines hypothermia as body temperature becoming too low and warns it can cause loss of physical and mental function. Source: Chapter 2, Jacket and Pants, p. 2-5 (manual p. 2-5, PDF p. 19).",
   "ru": "В руководстве гипотермия (hypothermia) определяется как чрезмерное понижение температуры тела; указано, что она может привести к потере физических и умственных функций. Источник: глава 2, «Jacket and Pants», p. 2-5 (manual p. 2-5, PDF p. 19)."
  }
 },
 {
  "id": 32,
  "page": "2-6",
  "answer": 1,
  "q": {
   "en": "What should motorcycle-specific gloves provide?",
   "ru": "Что должны обеспечивать специальные мотоциклетные перчатки (gloves)?"
  },
  "opts": [
   {
    "en": "Only style",
    "ru": "Только стиль"
   },
   {
    "en": "Good grip and control while protecting hands and fingers",
    "ru": "Хороший захват и контроль при защите кистей и пальцев"
   },
   {
    "en": "Only warmth",
    "ru": "Только тепло"
   },
   {
    "en": "Only rain protection",
    "ru": "Только защиту от дождя"
   }
  ],
  "why": {
   "en": "The manual says motorcycle-specific gloves should fit properly for grip/control and provide hand/finger protection. Source: Chapter 2, Gloves, p. 2-6 (manual p. 2-6, PDF p. 20).",
   "ru": "В руководстве сказано, что специальные мотоциклетные перчатки должны хорошо сидеть по руке, обеспечивая захват и контроль, и защищать кисти и пальцы. Источник: глава 2, «Gloves», p. 2-6 (manual p. 2-6, PDF p. 20)."
  }
 },
 {
  "id": 33,
  "page": "2-6",
  "answer": 1,
  "q": {
   "en": "What is the main motorcycle-riding noise risk identified by the manual?",
   "ru": "Какой главный шумовой риск при езде на мотоцикле указан в руководстве?"
  },
  "opts": [
   {
    "en": "Only horn noise",
    "ru": "Только шум звукового сигнала"
   },
   {
    "en": "Wind and road noise around the helmet",
    "ru": "Шум ветра и дороги вокруг шлема"
   },
   {
    "en": "Only passenger noise",
    "ru": "Только шум от пассажира"
   },
   {
    "en": "Only tire noise",
    "ru": "Только шум шин"
   }
  ],
  "why": {
   "en": "The manual says airflow around the helmet and road noise can cause permanent hearing damage. Source: Chapter 2, Hearing Protection, p. 2-6 (manual p. 2-6, PDF p. 20).",
   "ru": "В руководстве сказано, что поток воздуха вокруг шлема и дорожный шум могут привести к необратимому повреждению слуха. Источник: глава 2, «Hearing Protection», p. 2-6 (manual p. 2-6, PDF p. 20)."
  }
 },
 {
  "id": 34,
  "page": "2-6",
  "answer": 0,
  "q": {
   "en": "Are ear plugs legal in Washington?",
   "ru": "Разрешены ли беруши (ear plugs) в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "Yes, in-ear hearing protection is legal",
    "ru": "Да, внутриушная защита слуха разрешена"
   },
   {
    "en": "No",
    "ru": "Нет"
   },
   {
    "en": "Only for passengers",
    "ru": "Только для пассажиров"
   },
   {
    "en": "Only at night",
    "ru": "Только ночью"
   }
  ],
  "why": {
   "en": "The manual notes that in-ear hearing protection is legal in Washington, but in-ear speakers/earbuds are not. Source: Chapter 2, Hearing Protection, p. 2-6 (manual p. 2-6, PDF p. 20).",
   "ru": "В руководстве отмечается, что внутриушная защита слуха разрешена в штате Вашингтон, но внутриушные динамики и наушники (earbuds) — нет. Источник: глава 2, «Hearing Protection», p. 2-6 (manual p. 2-6, PDF p. 20)."
  }
 },
 {
  "id": 35,
  "page": "2-7",
  "answer": 1,
  "q": {
   "en": "What should a rider assume about other drivers seeing the motorcycle?",
   "ru": "Что водитель мотоцикла должен предполагать о том, видят ли его другие водители?"
  },
  "opts": [
   {
    "en": "That all drivers see you",
    "ru": "Что вас видят все водители"
   },
   {
    "en": "That other drivers cannot see you",
    "ru": "Что другие водители вас не видят"
   },
   {
    "en": "That only truck drivers see you",
    "ru": "Что вас видят только водители грузовиков"
   },
   {
    "en": "That color does not matter",
    "ru": "Что цвет не имеет значения"
   }
  ],
  "why": {
   "en": "The manual says assume other drivers cannot see you and use bright/reflective gear to help them. Source: Chapter 2, Visibility, p. 2-7 (manual p. 2-7, PDF p. 21).",
   "ru": "В руководстве сказано: исходите из того, что другие водители вас не видят, и используйте яркую и светоотражающую экипировку, чтобы помочь им вас заметить. Источник: глава 2, «Visibility», p. 2-7 (manual p. 2-7, PDF p. 21)."
  }
 },
 {
  "id": 36,
  "page": "2-7",
  "answer": 1,
  "q": {
   "en": "When do many crashes occur relative to a rider's experience with a motorcycle?",
   "ru": "Когда происходит много аварий в зависимости от опыта водителя на конкретном мотоцикле?"
  },
  "opts": [
   {
    "en": "Only after 10 years",
    "ru": "Только после 10 лет"
   },
   {
    "en": "When the rider has less than six months on the current motorcycle",
    "ru": "Когда у водителя менее шести месяцев опыта на нынешнем мотоцикле"
   },
   {
    "en": "Only on borrowed motorcycles",
    "ru": "Только на одолженных мотоциклах"
   },
   {
    "en": "Only on new motorcycles",
    "ru": "Только на новых мотоциклах"
   }
  ],
  "why": {
   "en": "The manual states many crashes occur when a rider has less than six months of experience on the current motorcycle. Source: Chapter 2, Understanding and Inspecting Your Motorcycle, p. 2-7 (manual p. 2-7, PDF p. 21).",
   "ru": "В руководстве сказано, что много аварий происходит, когда у водителя менее шести месяцев опыта на нынешнем мотоцикле. Источник: глава 2, «Understanding and Inspecting Your Motorcycle», p. 2-7 (manual p. 2-7, PDF p. 21)."
  }
 },
 {
  "id": 37,
  "page": "2-8",
  "answer": 1,
  "q": {
   "en": "What is the primary source for motorcycle specifications, operation, and maintenance?",
   "ru": "Что является основным источником информации о характеристиках, эксплуатации и обслуживании мотоцикла?"
  },
  "opts": [
   {
    "en": "A friend",
    "ru": "Друг"
   },
   {
    "en": "The owner's manual",
    "ru": "Руководство по эксплуатации (owner's manual)"
   },
   {
    "en": "A social media post",
    "ru": "Пост в социальных сетях"
   },
   {
    "en": "The license plate",
    "ru": "Номерной знак"
   }
  ],
  "why": {
   "en": "The manual states the motorcycle owner's manual is the primary source for specifications, operation, and maintenance. Source: Chapter 2, Checking Your Motorcycle, p. 2-8 (manual p. 2-8, PDF p. 22).",
   "ru": "В руководстве сказано, что руководство по эксплуатации мотоцикла (owner's manual) — это основной источник информации о характеристиках, эксплуатации и обслуживании. Источник: глава 2, «Checking Your Motorcycle», p. 2-8 (manual p. 2-8, PDF p. 22)."
  }
 },
 {
  "id": 38,
  "page": "2-9",
  "answer": 0,
  "q": {
   "en": "What does T-CLOCS stand for in the pre-ride inspection checklist?",
   "ru": "Что означает T-CLOCS в контрольном списке предрейсового осмотра (pre-ride inspection)?"
  },
  "opts": [
   {
    "en": "Tires/Wheels, Oil/Fluids, Levers/Controls, Lights, Suspension/Drivetrain, Stands",
    "ru": "Шины и колёса, масло и жидкости, рычаги и органы управления, освещение, подвеска и трансмиссия, подставки"
   },
   {
    "en": "Throttle, Clutch, Lane, Oil, Curves, Speed",
    "ru": "Газ (throttle), сцепление, полоса движения, масло, повороты, скорость"
   },
   {
    "en": "Tires, Clutch, Lights only",
    "ru": "Только шины, сцепление, освещение"
   },
   {
    "en": "Training, Licensing, Controls only",
    "ru": "Только обучение, лицензирование, органы управления"
   }
  ],
  "why": {
   "en": "The manual provides the T-CLOCS checklist for pre-ride inspections. Source: Chapter 2, Checking Your Motorcycle, p. 2-9 (manual p. 2-9, PDF p. 23).",
   "ru": "В руководстве приводится контрольный список T-CLOCS для предрейсового осмотра. Источник: глава 2, «Checking Your Motorcycle», p. 2-9 (manual p. 2-9, PDF p. 23)."
  }
 },
 {
  "id": 39,
  "page": "2-10",
  "answer": 0,
  "q": {
   "en": "How should you ride defensively according to the manual?",
   "ru": "Как, согласно руководству, следует ездить в защитной манере (defensively)?"
  },
  "opts": [
   {
    "en": "As though you are invisible",
    "ru": "Как будто вы невидимы"
   },
   {
    "en": "As though everyone sees you",
    "ru": "Как будто вас все видят"
   },
   {
    "en": "As aggressively as possible",
    "ru": "Как можно агрессивнее"
   },
   {
    "en": "Only in the center lane",
    "ru": "Только в центральной полосе"
   }
  ],
  "why": {
   "en": "The manual says to always ride as though you are invisible and assume other road users cannot see you. Source: Chapter 2, Create Your Own Safety by Taking Responsibility, p. 2-10 (manual p. 2-10, PDF p. 24).",
   "ru": "В руководстве сказано всегда ездить так, как будто вы невидимы, и исходить из того, что другие участники движения вас не видят. Источник: глава 2, «Create Your Own Safety by Taking Responsibility», p. 2-10 (manual p. 2-10, PDF p. 24)."
  }
 },
 {
  "id": 40,
  "page": "3-1",
  "answer": 0,
  "q": {
   "en": "What equipment must a motorcycle have to be legally operated on public roadways in Washington?",
   "ru": "Какое оборудование должно быть на мотоцикле для законной эксплуатации на дорогах общего пользования в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "Mirrors, muffler, horn, license plate, headlight, taillight, and turn signals",
    "ru": "Зеркала, глушитель, звуковой сигнал, номерной знак, фара, задний фонарь и указатели поворота"
   },
   {
    "en": "Only a headlight",
    "ru": "Только фара"
   },
   {
    "en": "Only a horn and mirrors",
    "ru": "Только звуковой сигнал и зеркала"
   },
   {
    "en": "Only turn signals",
    "ru": "Только указатели поворота"
   }
  ],
  "why": {
   "en": "The manual lists required motorcycle equipment for public roadways in Washington. Source: Chapter 3, The Right Bike for You, p. 3-1 (manual p. 3-1, PDF p. 27).",
   "ru": "В руководстве перечислено обязательное оборудование мотоцикла для дорог общего пользования в штате Вашингтон. Источник: глава 3, «The Right Bike for You», p. 3-1 (manual p. 3-1, PDF p. 27)."
  }
 },
 {
  "id": 41,
  "page": "3-1",
  "answer": 1,
  "q": {
   "en": "Where should your head and eyes be while riding?",
   "ru": "Где должны находиться голова и взгляд во время езды?"
  },
  "opts": [
   {
    "en": "Down at the front wheel",
    "ru": "Опущены к переднему колесу"
   },
   {
    "en": "Up, scanning well ahead for hazards",
    "ru": "Подняты, взгляд направлен далеко вперёд в поисках опасностей"
   },
   {
    "en": "On the speedometer",
    "ru": "На спидометре"
   },
   {
    "en": "Only on the rider ahead",
    "ru": "Только на едущем впереди водителе"
   }
  ],
  "why": {
   "en": "The manual says keeping head and eyes up helps with balance, control, and scanning for hazards. Source: Chapter 3, Riding Posture, p. 3-1 (manual p. 3-1, PDF p. 27).",
   "ru": "В руководстве сказано, что поднятые голова и взгляд помогают сохранять равновесие и контроль и осматривать дорогу в поисках опасностей. Источник: глава 3, «Riding Posture», p. 3-1 (manual p. 3-1, PDF p. 27)."
  }
 },
 {
  "id": 42,
  "page": "3-2",
  "answer": 1,
  "q": {
   "en": "What should your arms be able to do while riding?",
   "ru": "Что должны быть в состоянии делать ваши руки во время езды?"
  },
  "opts": [
   {
    "en": "Hold your body up",
    "ru": "Удерживать ваше тело"
   },
   {
    "en": "Steer the motorcycle rather than hold yourself up",
    "ru": "Управлять мотоциклом, а не удерживать вас"
   },
   {
    "en": "Stay locked straight",
    "ru": "Оставаться выпрямленными"
   },
   {
    "en": "Stay off the bars",
    "ru": "Не касаться руля"
   }
  ],
  "why": {
   "en": "The manual says you should be positioned so your arms steer the motorcycle, not hold you up. Source: Chapter 3, Riding Posture, p. 3-2 (manual p. 3-2, PDF p. 28).",
   "ru": "В руководстве сказано, что нужно располагаться так, чтобы руки управляли мотоциклом, а не удерживали вас. Источник: глава 3, «Riding Posture», p. 3-2 (manual p. 3-2, PDF p. 28)."
  }
 },
 {
  "id": 43,
  "page": "3-2",
  "answer": 0,
  "q": {
   "en": "What is the recommended right-hand wrist position?",
   "ru": "Какое положение правого запястья рекомендуется?"
  },
  "opts": [
   {
    "en": "Flat wrist position",
    "ru": "Плоское положение запястья"
   },
   {
    "en": "Wrist very high",
    "ru": "Запястье очень высоко"
   },
   {
    "en": "Wrist sharply down",
    "ru": "Запястье резко опущено вниз"
   },
   {
    "en": "Any position",
    "ru": "Любое положение"
   }
  ],
  "why": {
   "en": "The manual recommends a flat right wrist position to reduce unintended throttle use. Source: Chapter 3, Riding Posture, p. 3-2 (manual p. 3-2, PDF p. 28).",
   "ru": "В руководстве рекомендуется плоское положение правого запястья, чтобы уменьшить непреднамеренное использование газа (throttle). Источник: глава 3, «Riding Posture», p. 3-2 (manual p. 3-2, PDF p. 28)."
  }
 },
 {
  "id": 44,
  "page": "3-2",
  "answer": 1,
  "q": {
   "en": "Where should your feet be while riding?",
   "ru": "Где должны находиться ноги во время езды?"
  },
  "opts": [
   {
    "en": "Dragged on the ground",
    "ru": "Волочиться по земле"
   },
   {
    "en": "Firmly on the footrests and positioned to reach the pedals",
    "ru": "Прочно на подножках (footrests) и так, чтобы доставать до педалей"
   },
   {
    "en": "On passenger pegs",
    "ru": "На пассажирских подножках"
   },
   {
    "en": "Pointed downward",
    "ru": "Направлены вниз"
   }
  ],
  "why": {
   "en": "The manual says to keep feet on footrests for balance/control and warns dragging feet can cause serious injury. Source: Chapter 3, Riding Posture, p. 3-2 (manual p. 3-2, PDF p. 28).",
   "ru": "В руководстве сказано держать ноги на подножках (footrests) для равновесия и контроля; волочение ног может привести к серьёзной травме. Источник: глава 3, «Riding Posture», p. 3-2 (manual p. 3-2, PDF p. 28)."
  }
 },
 {
  "id": 45,
  "page": "3-2",
  "answer": 0,
  "q": {
   "en": "Why should you practice using controls in a safe environment?",
   "ru": "Зачем нужно отрабатывать использование органов управления (controls) в безопасной обстановке?"
  },
  "opts": [
   {
    "en": "To become comfortable and avoid distraction",
    "ru": "Чтобы освоиться и не отвлекаться"
   },
   {
    "en": "To increase tire wear",
    "ru": "Чтобы увеличить износ шин"
   },
   {
    "en": "To avoid using mirrors",
    "ru": "Чтобы не пользоваться зеркалами"
   },
   {
    "en": "To ride without looking ahead",
    "ru": "Чтобы ездить, не глядя вперёд"
   }
  ],
  "why": {
   "en": "The manual says to practice controls in a safe environment and keep head/eyes up to anticipate hazards. Source: Chapter 3, Basic Controls and Operation, p. 3-2 (manual p. 3-2, PDF p. 28).",
   "ru": "В руководстве сказано отрабатывать органы управления в безопасной обстановке и держать голову и взгляд поднятыми, чтобы предвидеть опасности. Источник: глава 3, «Basic Controls and Operation», p. 3-2 (manual p. 3-2, PDF p. 28)."
  }
 },
 {
  "id": 46,
  "page": "3-3",
  "answer": 0,
  "q": {
   "en": "Why should you practice shifting without looking down?",
   "ru": "Почему стоит отрабатывать переключение передач, не глядя вниз?"
  },
  "opts": [
   {
    "en": "To keep eyes focused on the road ahead",
    "ru": "Чтобы взгляд оставался сосредоточенным на дороге впереди"
   },
   {
    "en": "To make the engine louder",
    "ru": "Чтобы двигатель работал громче"
   },
   {
    "en": "To use less fuel",
    "ru": "Чтобы расходовать меньше топлива"
   },
   {
    "en": "To avoid using the clutch",
    "ru": "Чтобы не пользоваться сцеплением (clutch)"
   }
  ],
  "why": {
   "en": "The manual recommends practicing shifting without looking down so your eyes stay focused on the road. Source: Chapter 3, Clutch Control and Shifting Gears, p. 3-3 (manual p. 3-3, PDF p. 29).",
   "ru": "Руководство рекомендует отрабатывать переключение передач, не глядя вниз, чтобы взгляд оставался сосредоточенным на дороге. Источник: глава 3, «Clutch Control and Shifting Gears», p. 3-3 (Manual p. 3-3, PDF p. 29)."
  }
 },
 {
  "id": 47,
  "page": "3-3",
  "answer": 1,
  "q": {
   "en": "What does the wet clutch help control?",
   "ru": "Что «мокрое» сцепление (wet clutch) помогает контролировать?"
  },
  "opts": [
   {
    "en": "Only the headlights",
    "ru": "Только фары"
   },
   {
    "en": "The amount of power given to the rear wheel",
    "ru": "Объём мощности, передаваемой на заднее колесо"
   },
   {
    "en": "Helmet fit",
    "ru": "Посадку шлема"
   },
   {
    "en": "Lane position",
    "ru": "Положение в полосе движения"
   }
  ],
  "why": {
   "en": "The manual says a wet clutch helps control power to the rear wheel, aiding smooth starts and low-speed maneuvering. Source: Chapter 3, Clutch Control and Shifting Gears, p. 3-3 (manual p. 3-3, PDF p. 29).",
   "ru": "В руководстве сказано, что «мокрое» сцепление (wet clutch) помогает контролировать мощность, передаваемую на заднее колесо, что облегчает плавный старт и манёвры на малой скорости. Источник: глава 3, «Clutch Control and Shifting Gears», p. 3-3 (Manual p. 3-3, PDF p. 29)."
  }
 },
 {
  "id": 48,
  "page": "3-3",
  "answer": 0,
  "q": {
   "en": "What should you do when engine braking?",
   "ru": "Что нужно сделать при торможении двигателем (engine braking)?"
  },
  "opts": [
   {
    "en": "Flash your brake light a few times",
    "ru": "Несколько раз мигнуть стоп-сигналом"
   },
   {
    "en": "Never signal",
    "ru": "Никогда не подавать сигналов"
   },
   {
    "en": "Turn off the motorcycle",
    "ru": "Заглушить мотоцикл"
   },
   {
    "en": "Use only high beam",
    "ru": "Использовать только дальний свет"
   }
  ],
  "why": {
   "en": "The manual says engine braking does not activate the brake light, so flash the brake light to show others you are slowing. Source: Chapter 3, Clutch Control and Shifting Gears, p. 3-3 (manual p. 3-3, PDF p. 29).",
   "ru": "В руководстве сказано, что при торможении двигателем (engine braking) стоп-сигнал не загорается, поэтому нужно несколько раз мигнуть стоп-сигналом, чтобы показать другим, что вы замедляетесь. Источник: глава 3, «Clutch Control and Shifting Gears», p. 3-3 (Manual p. 3-3, PDF p. 29)."
  }
 },
 {
  "id": 49,
  "page": "3-3",
  "answer": 0,
  "q": {
   "en": "At approximately what speed do two-wheeled motorcycles steer through countersteering?",
   "ru": "Примерно на какой скорости двухколёсные (2W) мотоциклы поворачивают за счёт контрруления (countersteering)?"
  },
  "opts": [
   {
    "en": "At approximately 12-15 mph",
    "ru": "Примерно на скорости 12–15 миль/ч (mph)"
   },
   {
    "en": "Only above 70 mph",
    "ru": "Только выше 70 миль/ч (mph)"
   },
   {
    "en": "Only below walking pace",
    "ru": "Только ниже скорости пешехода"
   },
   {
    "en": "Only when stopped",
    "ru": "Только при остановке"
   }
  ],
  "why": {
   "en": "The manual states two-wheeled motorcycles use countersteering at approximately 12-15 mph. Source: Chapter 3, Two-Wheel Steering, p. 3-3 (manual p. 3-3, PDF p. 29).",
   "ru": "В руководстве указано, что двухколёсные (2W) мотоциклы используют контрруление (countersteering) примерно на скорости 12–15 миль/ч (mph). Источник: глава 3, «Two-Wheel Steering», p. 3-3 (Manual p. 3-3, PDF p. 29)."
  }
 },
 {
  "id": 50,
  "page": "3-3",
  "answer": 0,
  "q": {
   "en": "How do you countersteer a two-wheeled motorcycle?",
   "ru": "Как выполнять контрруление (countersteering) на двухколёсном (2W) мотоцикле?"
  },
  "opts": [
   {
    "en": "Press on the grip in the direction you want to turn",
    "ru": "Нажать на рукоятку (grip) в ту сторону, куда хотите повернуть"
   },
   {
    "en": "Turn the bars opposite the direction and keep the bike upright",
    "ru": "Повернуть руль в противоположную сторону и держать мотоцикл вертикально"
   },
   {
    "en": "Use only your knees",
    "ru": "Использовать только колени"
   },
   {
    "en": "Use only rear brake",
    "ru": "Использовать только задний тормоз"
   }
  ],
  "why": {
   "en": "The manual says countersteering is pressing on the grip in the direction you want to turn. Source: Chapter 3, Two-Wheel Steering, p. 3-3 (manual p. 3-3, PDF p. 29).",
   "ru": "В руководстве сказано, что контрруление (countersteering) — это нажатие на рукоятку (grip) в ту сторону, куда вы хотите повернуть. Источник: глава 3, «Two-Wheel Steering», p. 3-3 (Manual p. 3-3, PDF p. 29)."
  }
 },
 {
  "id": 51,
  "page": "3-3",
  "answer": 0,
  "q": {
   "en": "What happens when you press on the left handgrip?",
   "ru": "Что происходит, когда вы нажимаете на левую рукоятку руля?"
  },
  "opts": [
   {
    "en": "The bike leans left and turns left",
    "ru": "Мотоцикл наклоняется влево и поворачивает влево"
   },
   {
    "en": "The bike turns right",
    "ru": "Мотоцикл поворачивает вправо"
   },
   {
    "en": "The rear brake applies",
    "ru": "Срабатывает задний тормоз"
   },
   {
    "en": "The engine stops",
    "ru": "Двигатель глохнет"
   }
  ],
  "why": {
   "en": "The manual says pressing the left handgrip causes the bike to lean left and turn left. Source: Chapter 3, Two-Wheel Steering, p. 3-3 (manual p. 3-3, PDF p. 29).",
   "ru": "В руководстве сказано, что нажатие на левую рукоятку руля заставляет мотоцикл наклониться влево и повернуть влево. Источник: глава 3, «Two-Wheel Steering», p. 3-3 (Manual p. 3-3, PDF p. 29)."
  }
 },
 {
  "id": 52,
  "page": "3-3",
  "answer": 1,
  "q": {
   "en": "How do three-wheeled motorcycles steer?",
   "ru": "Как поворачивают трёхколёсные мотоциклы?"
  },
  "opts": [
   {
    "en": "Countersteering",
    "ru": "Контррулением (countersteering)"
   },
   {
    "en": "Direct steering",
    "ru": "Прямым рулением (direct steering)"
   },
   {
    "en": "Only by leaning",
    "ru": "Только за счёт наклона"
   },
   {
    "en": "Only by braking",
    "ru": "Только за счёт торможения"
   }
  ],
  "why": {
   "en": "The manual notes that trikes, sidecars, and reverse-trikes use direct steering: turning the bars in the desired direction. Source: Chapter 3, Two-Wheel Steering note, p. 3-3 (manual p. 3-3, PDF p. 29).",
   "ru": "В руководстве отмечается, что трайки (trikes), мотоциклы с коляской (sidecars) и обратные трайки (reverse-trikes) используют прямое руление (direct steering): руль поворачивается в нужную сторону. Источник: глава 3, примечание к «Two-Wheel Steering», p. 3-3 (Manual p. 3-3, PDF p. 29)."
  }
 },
 {
  "id": 53,
  "page": "3-4",
  "answer": 0,
  "q": {
   "en": "What are the two leading causes of single-vehicle motorcycle crashes in corners in Washington?",
   "ru": "Каковы две основные причины аварий с участием одного мотоцикла на поворотах в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "Excessive speed and improper technique",
    "ru": "Превышение скорости и неправильная техника"
   },
   {
    "en": "Helmet color and fuel type",
    "ru": "Цвет шлема и тип топлива"
   },
   {
    "en": "Nighttime only",
    "ru": "Только ночное время"
   },
   {
    "en": "Passenger age only",
    "ru": "Только возраст пассажира"
   }
  ],
  "why": {
   "en": "The manual states many motorcycle fatalities in corners involve excessive speed and improper technique. Source: Chapter 3, Cornering, p. 3-4 (manual p. 3-4, PDF p. 30).",
   "ru": "В руководстве указано, что многие смертельные аварии с мотоциклами на поворотах связаны с превышением скорости и неправильной техникой. Источник: глава 3, «Cornering», p. 3-4 (Manual p. 3-4, PDF p. 30)."
  }
 },
 {
  "id": 54,
  "page": "3-4",
  "answer": 0,
  "q": {
   "en": "What are the four basic cornering steps?",
   "ru": "Каковы четыре базовых шага прохождения поворота?"
  },
  "opts": [
   {
    "en": "Slow, Look, Press, Roll",
    "ru": "Замедлись, Посмотри, Нажми, Добавь газ (Slow, Look, Press, Roll)"
   },
   {
    "en": "Stop, Look, Wait, Go",
    "ru": "Остановись, Посмотри, Подожди, Поезжай (Stop, Look, Wait, Go)"
   },
   {
    "en": "Brake, Shift, Honk, Lean",
    "ru": "Тормози, Переключи, Сигналь, Наклонись (Brake, Shift, Honk, Lean)"
   },
   {
    "en": "Look, Close, Drift, Stop",
    "ru": "Посмотри, Закрой, Скользи, Остановись (Look, Close, Drift, Stop)"
   }
  ],
  "why": {
   "en": "The manual gives four cornering steps: reduce speed, look through the turn, countersteer/press, and smoothly roll on the throttle. Source: Chapter 3, Cornering Steps, pp. 3-4 to 3-5 (manual p. 3-4, PDF p. 30; manual p. 3-5, PDF p. 31).",
   "ru": "Руководство даёт четыре шага прохождения поворота: снизить скорость, смотреть сквозь поворот, выполнить контрруление/нажатие (countersteer/press) и плавно добавить газ. Источник: глава 3, «Cornering Steps», pp. 3-4 to 3-5 (Manual p. 3-4, PDF p. 30; Manual p. 3-5, PDF p. 31)."
  }
 },
 {
  "id": 55,
  "page": "3-4",
  "answer": 0,
  "q": {
   "en": "When should speed be reduced for a corner?",
   "ru": "Когда следует снижать скорость для поворота?"
  },
  "opts": [
   {
    "en": "Before the corner",
    "ru": "Перед поворотом"
   },
   {
    "en": "Only after the apex",
    "ru": "Только после апекса (apex)"
   },
   {
    "en": "Only at the exit",
    "ru": "Только на выходе из поворота"
   },
   {
    "en": "Never",
    "ru": "Никогда"
   }
  ],
  "why": {
   "en": "The manual says to reduce speed before the corner by rolling off the throttle and carefully applying both brakes if necessary. Source: Chapter 3, Cornering Steps, p. 3-4 (manual p. 3-4, PDF p. 30).",
   "ru": "В руководстве сказано снижать скорость перед поворотом, отпуская газ и при необходимости аккуратно применяя оба тормоза. Источник: глава 3, «Cornering Steps», p. 3-4 (Manual p. 3-4, PDF p. 30)."
  }
 },
 {
  "id": 56,
  "page": "3-4",
  "answer": 1,
  "q": {
   "en": "Where should you look during a corner?",
   "ru": "Куда нужно смотреть в повороте?"
  },
  "opts": [
   {
    "en": "At the front tire",
    "ru": "На переднее колесо"
   },
   {
    "en": "As far through the turn as possible toward the exit",
    "ru": "Как можно дальше сквозь поворот, в сторону выхода из него"
   },
   {
    "en": "At the guardrail",
    "ru": "На отбойник (guardrail)"
   },
   {
    "en": "At the centerline only",
    "ru": "Только на осевую линию"
   }
  ],
  "why": {
   "en": "The manual says to point your head and eyes toward the end/exit of the corner throughout the corner. Source: Chapter 3, Cornering Steps, p. 3-4 (manual p. 3-4, PDF p. 30).",
   "ru": "В руководстве сказано направлять голову и взгляд к концу/выходу из поворота на протяжении всего поворота. Источник: глава 3, «Cornering Steps», p. 3-4 (Manual p. 3-4, PDF p. 30)."
  }
 },
 {
  "id": 57,
  "page": "3-4",
  "answer": 0,
  "q": {
   "en": "If you feel yourself going wide in a corner, what should you do?",
   "ru": "Что делать, если вы чувствуете, что вас выносит наружу в повороте?"
  },
  "opts": [
   {
    "en": "Focus where you want to go, press harder, and lean more",
    "ru": "Сосредоточиться на том, куда хотите ехать, нажать сильнее и наклониться больше"
   },
   {
    "en": "Look at the guardrail",
    "ru": "Смотреть на отбойник (guardrail)"
   },
   {
    "en": "Grab the front brake abruptly",
    "ru": "Резко зажать передний тормоз"
   },
   {
    "en": "Stand up on the pegs immediately",
    "ru": "Немедленно встать на подножки (pegs)"
   }
  ],
  "why": {
   "en": "The manual says if you go wide, focus on where you want to go, press harder, and lean more. Source: Chapter 3, Cornering Steps, pp. 3-4 to 3-5 (manual p. 3-4, PDF p. 30; manual p. 3-5, PDF p. 31).",
   "ru": "В руководстве сказано, что при выносе наружу нужно сосредоточиться на том, куда вы хотите ехать, нажать сильнее и наклониться больше. Источник: глава 3, «Cornering Steps», pp. 3-4 to 3-5 (Manual p. 3-4, PDF p. 30; Manual p. 3-5, PDF p. 31)."
  }
 },
 {
  "id": 58,
  "page": "3-5",
  "answer": 0,
  "q": {
   "en": "After entering a corner, how should you use the throttle?",
   "ru": "Как нужно работать газом после входа в поворот?"
  },
  "opts": [
   {
    "en": "Gently and smoothly roll on throttle to maintain or slightly increase speed",
    "ru": "Мягко и плавно добавлять газ, чтобы сохранить или слегка увеличить скорость"
   },
   {
    "en": "Close it abruptly",
    "ru": "Резко его сбросить"
   },
   {
    "en": "Rev the engine in neutral",
    "ru": "Газовать на нейтрали"
   },
   {
    "en": "Use no throttle",
    "ru": "Совсем не давать газ"
   }
  ],
  "why": {
   "en": "The manual says smooth throttle after entry helps stabilize the motorcycle. Source: Chapter 3, Cornering Steps, p. 3-5 (manual p. 3-5, PDF p. 31).",
   "ru": "В руководстве сказано, что плавная работа газом после входа в поворот помогает стабилизировать мотоцикл. Источник: глава 3, «Cornering Steps», p. 3-5 (Manual p. 3-5, PDF p. 31)."
  }
 },
 {
  "id": 59,
  "page": "3-5",
  "answer": 0,
  "q": {
   "en": "What are the three lane positions in a corner?",
   "ru": "Каковы три положения в полосе движения при прохождении поворота?"
  },
  "opts": [
   {
    "en": "Outside, middle, inside",
    "ru": "Внешнее, среднее, внутреннее"
   },
   {
    "en": "Top, bottom, center",
    "ru": "Верхнее, нижнее, центральное"
   },
   {
    "en": "Fast, slow, stop",
    "ru": "Быстрое, медленное, стоп"
   },
   {
    "en": "Left, right, shoulder only",
    "ru": "Только левое, правое и обочина"
   }
  ],
  "why": {
   "en": "The manual says every lane has outside, middle, and inside positions throughout a corner. Source: Chapter 3, Cornering Lines, p. 3-5 (manual p. 3-5, PDF p. 31).",
   "ru": "В руководстве сказано, что в каждой полосе на протяжении поворота есть внешнее, среднее и внутреннее положения. Источник: глава 3, «Cornering Lines», p. 3-5 (Manual p. 3-5, PDF p. 31)."
  }
 },
 {
  "id": 60,
  "page": "3-6",
  "answer": 0,
  "q": {
   "en": "What cornering line is generally safest for less experienced riders?",
   "ru": "Какая траектория прохождения поворота, как правило, наиболее безопасна для менее опытных райдеров?"
  },
  "opts": [
   {
    "en": "Middle/middle/middle",
    "ru": "Среднее/среднее/среднее"
   },
   {
    "en": "Always inside/inside/inside",
    "ru": "Всегда внутреннее/внутреннее/внутреннее"
   },
   {
    "en": "Shoulder only",
    "ru": "Только обочина"
   },
   {
    "en": "Centerline only",
    "ru": "Только осевая линия"
   }
  ],
  "why": {
   "en": "The manual says the middle path is generally the safest for less experienced riders. Source: Chapter 3, Cornering Lines, p. 3-6 (manual p. 3-6, PDF p. 32).",
   "ru": "В руководстве сказано, что средняя траектория, как правило, наиболее безопасна для менее опытных райдеров. Источник: глава 3, «Cornering Lines», p. 3-6 (Manual p. 3-6, PDF p. 32)."
  }
 },
 {
  "id": 61,
  "page": "3-6",
  "answer": 0,
  "q": {
   "en": "What does an outside/inside/outside line do?",
   "ru": "Что даёт траектория «внешнее/внутреннее/внешнее»?"
  },
  "opts": [
   {
    "en": "Straightens the corner, reducing lean and increasing available traction",
    "ru": "Спрямляет поворот, уменьшая наклон и увеличивая доступное сцепление с дорогой"
   },
   {
    "en": "Makes the turn tighter",
    "ru": "Делает поворот более крутым"
   },
   {
    "en": "Always forces you off the road",
    "ru": "Всегда выносит вас с дороги"
   },
   {
    "en": "Eliminates the need to look ahead",
    "ru": "Избавляет от необходимости смотреть вперёд"
   }
  ],
  "why": {
   "en": "The manual says outside/inside/outside can straighten the corner, requiring less lean and giving more traction. Source: Chapter 3, Cornering Lines, p. 3-6 (manual p. 3-6, PDF p. 32).",
   "ru": "В руководстве сказано, что траектория «внешнее/внутреннее/внешнее» может спрямить поворот, требуя меньшего наклона и давая больше сцепления с дорогой. Источник: глава 3, «Cornering Lines», p. 3-6 (Manual p. 3-6, PDF p. 32)."
  }
 },
 {
  "id": 62,
  "page": "3-6",
  "answer": 0,
  "q": {
   "en": "Why can starting from the outside lane position be useful?",
   "ru": "Почему может быть полезно начинать поворот из внешнего положения в полосе?"
  },
  "opts": [
   {
    "en": "It gives a good view through the corner",
    "ru": "Это даёт хороший обзор сквозь поворот"
   },
   {
    "en": "It makes braking unnecessary",
    "ru": "Это делает торможение ненужным"
   },
   {
    "en": "It forces cars to move over",
    "ru": "Это вынуждает машины подвинуться"
   },
   {
    "en": "It cancels target fixation",
    "ru": "Это устраняет залипание взгляда на цели (target fixation)"
   }
  ],
  "why": {
   "en": "The manual says starting from the outside lane position gives a good view through the corner. Source: Chapter 3, Cornering Lines, p. 3-6 (manual p. 3-6, PDF p. 32).",
   "ru": "В руководстве сказано, что начало поворота из внешнего положения в полосе даёт хороший обзор сквозь поворот. Источник: глава 3, «Cornering Lines», p. 3-6 (Manual p. 3-6, PDF p. 32)."
  }
 },
 {
  "id": 63,
  "page": "3-7",
  "answer": 0,
  "q": {
   "en": "What should you gather information about while looking through a corner?",
   "ru": "Какую информацию нужно собирать, глядя сквозь поворот?"
  },
  "opts": [
   {
    "en": "Line of sight, corner radius, surface condition, and slope",
    "ru": "Линию видимости, радиус поворота, состояние покрытия и уклон"
   },
   {
    "en": "Only speedometer reading",
    "ru": "Только показания спидометра"
   },
   {
    "en": "Only engine RPM",
    "ru": "Только обороты двигателя (RPM)"
   },
   {
    "en": "Only the rider behind you",
    "ru": "Только райдера позади вас"
   }
  ],
  "why": {
   "en": "The manual tells riders to evaluate line of sight, radius, surface condition, and slope. Source: Chapter 3, Look, Anticipate, Choose, p. 3-7 (manual p. 3-7, PDF p. 33).",
   "ru": "Руководство советует райдерам оценивать линию видимости, радиус, состояние покрытия и уклон. Источник: глава 3, «Look, Anticipate, Choose», p. 3-7 (Manual p. 3-7, PDF p. 33)."
  }
 },
 {
  "id": 64,
  "page": "3-7",
  "answer": 0,
  "q": {
   "en": "What hazards should you anticipate in corners?",
   "ru": "Какие опасности следует предвидеть на поворотах?"
  },
  "opts": [
   {
    "en": "Cars crossing the centerline, wildlife, ice, or gravel",
    "ru": "Машины, пересекающие осевую линию, диких животных, лёд или гравий"
   },
   {
    "en": "Only fuel level",
    "ru": "Только уровень топлива"
   },
   {
    "en": "Only windshield glare",
    "ru": "Только блики на ветровом стекле"
   },
   {
    "en": "Only engine heat",
    "ru": "Только нагрев двигателя"
   }
  ],
  "why": {
   "en": "The manual lists cars crossing the centerline, wildlife, ice, and gravel as potential corner hazards. Source: Chapter 3, Look, Anticipate, Choose, p. 3-7 (manual p. 3-7, PDF p. 33).",
   "ru": "В руководстве среди возможных опасностей на поворотах перечислены машины, пересекающие осевую линию, дикие животные, лёд и гравий. Источник: глава 3, «Look, Anticipate, Choose», p. 3-7 (Manual p. 3-7, PDF p. 33)."
  }
 },
 {
  "id": 65,
  "page": "3-8",
  "answer": 0,
  "q": {
   "en": "No matter which cornering path you choose, where should your head and chin point?",
   "ru": "Независимо от выбранной траектории поворота, куда должны быть направлены ваша голова и подбородок?"
  },
  "opts": [
   {
    "en": "Toward the corner exit",
    "ru": "В сторону выхода из поворота"
   },
   {
    "en": "Toward the shoulder",
    "ru": "В сторону обочины"
   },
   {
    "en": "Toward the dashboard",
    "ru": "В сторону приборной панели"
   },
   {
    "en": "Toward the rider behind",
    "ru": "В сторону райдера позади вас"
   }
  ],
  "why": {
   "en": "The manual says to keep head and chin pointed toward the corner exit and focus where you want to go. Source: Chapter 3, Look, Anticipate, Choose, p. 3-8 (manual p. 3-8, PDF p. 34).",
   "ru": "В руководстве сказано держать голову и подбородок направленными в сторону выхода из поворота и сосредотачиваться на том, куда вы хотите ехать. Источник: глава 3, «Look, Anticipate, Choose», p. 3-8 (Manual p. 3-8, PDF p. 34)."
  }
 },
 {
  "id": 66,
  "page": "3-8",
  "answer": 0,
  "q": {
   "en": "Which brake has more braking power on a motorcycle?",
   "ru": "Какой тормоз обладает большей тормозной силой на мотоцикле?"
  },
  "opts": [
   {
    "en": "Front brake",
    "ru": "Передний тормоз"
   },
   {
    "en": "Rear brake",
    "ru": "Задний тормоз"
   },
   {
    "en": "Both are always equal",
    "ru": "Оба всегда одинаковы"
   },
   {
    "en": "Engine cut-off switch",
    "ru": "Выключатель двигателя (engine cut-off switch)"
   }
  ],
  "why": {
   "en": "The manual says the front brake has more braking power because weight transfers forward when slowing/stopping. Source: Chapter 3, Braking in a Straight Line, p. 3-8 (manual p. 3-8, PDF p. 34).",
   "ru": "В руководстве сказано, что передний тормоз обладает большей тормозной силой, потому что при замедлении/остановке вес переносится вперёд. Источник: глава 3, «Braking in a Straight Line», p. 3-8 (Manual p. 3-8, PDF p. 34)."
  }
 },
 {
  "id": 67,
  "page": "3-8",
  "answer": 1,
  "q": {
   "en": "How are the shortest and safest stops obtained?",
   "ru": "Как достигается самая короткая и безопасная остановка?"
  },
  "opts": [
   {
    "en": "Rear brake only",
    "ru": "Только задним тормозом"
   },
   {
    "en": "Front and rear brakes smoothly and progressively, without skidding either tire",
    "ru": "Передним и задним тормозом плавно и постепенно, без проскальзывания (skidding) ни одного из колёс"
   },
   {
    "en": "Engine braking only",
    "ru": "Только торможением двигателем"
   },
   {
    "en": "Grabbing the front brake",
    "ru": "Резким зажатием переднего тормоза"
   }
  ],
  "why": {
   "en": "The manual states the shortest and safest stops use both front and rear brakes smoothly and progressively without skidding. Source: Chapter 3, Braking in a Straight Line, p. 3-8 (manual p. 3-8, PDF p. 34).",
   "ru": "В руководстве сказано, что самая короткая и безопасная остановка достигается одновременным использованием переднего и заднего тормоза — плавно и постепенно, без проскальзывания колёс. Источник: глава 3, «Braking in a Straight Line», p. 3-8 (Manual p. 3-8, PDF p. 34)."
  }
 },
 {
  "id": 68,
  "page": "3-8",
  "answer": 1,
  "q": {
   "en": "What should you avoid when using the front brake?",
   "ru": "Чего следует избегать при использовании переднего тормоза?"
  },
  "opts": [
   {
    "en": "Smooth squeeze",
    "ru": "Плавного нажатия"
   },
   {
    "en": "Grabbing the lever abruptly",
    "ru": "Резкого зажатия рычага"
   },
   {
    "en": "Using both brakes",
    "ru": "Использования обоих тормозов"
   },
   {
    "en": "Practicing in a safe area",
    "ru": "Тренировки в безопасном месте"
   }
  ],
  "why": {
   "en": "The manual warns riders not to grab the front brake lever. Source: Chapter 3, Braking in a Straight Line, p. 3-8 (manual p. 3-8, PDF p. 34).",
   "ru": "Руководство предупреждает водителей не зажимать резко рычаг переднего тормоза. Источник: глава 3, «Braking in a Straight Line», p. 3-8 (Manual p. 3-8, PDF p. 34)."
  }
 },
 {
  "id": 69,
  "page": "3-8",
  "answer": 1,
  "q": {
   "en": "After coming to a stop, what gear should you remain in?",
   "ru": "На какой передаче следует оставаться после полной остановки?"
  },
  "opts": [
   {
    "en": "Neutral",
    "ru": "Нейтральная (neutral)"
   },
   {
    "en": "First gear",
    "ru": "Первая передача"
   },
   {
    "en": "Second gear",
    "ru": "Вторая передача"
   },
   {
    "en": "Any gear",
    "ru": "Любая передача"
   }
  ],
  "why": {
   "en": "The manual says to remain in first gear and check mirrors in case you need to avoid a rear-end collision. Source: Chapter 3, Braking in a Straight Line, p. 3-8 (manual p. 3-8, PDF p. 34).",
   "ru": "В руководстве сказано оставаться на первой передаче и следить за зеркалами на случай, если потребуется уйти от удара сзади (rear-end collision). Источник: глава 3, «Braking in a Straight Line», p. 3-8 (Manual p. 3-8, PDF p. 34)."
  }
 },
 {
  "id": 70,
  "page": "3-8",
  "answer": 0,
  "q": {
   "en": "Why is braking in a turn more risky on a two-wheeled motorcycle?",
   "ru": "Почему торможение в повороте более рискованно на двухколёсном (2W) мотоцикле?"
  },
  "opts": [
   {
    "en": "Lean angle reduces traction available for braking",
    "ru": "Угол наклона уменьшает сцепление (traction), доступное для торможения"
   },
   {
    "en": "The horn stops working",
    "ru": "Перестаёт работать звуковой сигнал"
   },
   {
    "en": "The helmet blocks hearing",
    "ru": "Шлем мешает слышать"
   },
   {
    "en": "The headlight gets smaller",
    "ru": "Фара становится меньше"
   }
  ],
  "why": {
   "en": "The manual states that the greater the lean angle, the less traction is available for braking. Source: Chapter 3, Braking in a Corner, p. 3-8 (manual p. 3-8, PDF p. 34).",
   "ru": "В руководстве сказано, что чем больше угол наклона, тем меньше сцепления (traction) остаётся для торможения. Источник: глава 3, «Braking in a Corner», p. 3-8 (Manual p. 3-8, PDF p. 34)."
  }
 },
 {
  "id": 71,
  "page": "3-8",
  "answer": 0,
  "q": {
   "en": "To stop quickly and safely in a curve, what should you try to do first?",
   "ru": "Чтобы быстро и безопасно остановиться в повороте, что нужно попытаться сделать в первую очередь?"
  },
  "opts": [
   {
    "en": "Reduce lean angle, then brake",
    "ru": "Уменьшить угол наклона, затем тормозить"
   },
   {
    "en": "Brake hard while fully leaned",
    "ru": "Сильно тормозить при полном наклоне"
   },
   {
    "en": "Only use rear brake",
    "ru": "Использовать только задний тормоз"
   },
   {
    "en": "Close your eyes and hold the line",
    "ru": "Закрыть глаза и держать траекторию"
   }
  ],
  "why": {
   "en": "The manual says to reduce lean angle, then brake, if road and traffic conditions allow it. Source: Chapter 3, Braking in a Corner, p. 3-8 (manual p. 3-8, PDF p. 34).",
   "ru": "В руководстве сказано сначала уменьшить угол наклона, а затем тормозить, если позволяют дорожные условия и обстановка. Источник: глава 3, «Braking in a Corner», p. 3-8 (Manual p. 3-8, PDF p. 34)."
  }
 },
 {
  "id": 72,
  "page": "3-8",
  "answer": 0,
  "q": {
   "en": "If you cannot safely straighten before braking in a curve, what should you do?",
   "ru": "Что делать, если в повороте не получается безопасно выпрямить мотоцикл перед торможением?"
  },
  "opts": [
   {
    "en": "Smoothly apply brakes while gradually straightening",
    "ru": "Плавно применять тормоза, постепенно выпрямляя мотоцикл"
   },
   {
    "en": "Use abrupt pressure on both brakes",
    "ru": "Резко нажать на оба тормоза"
   },
   {
    "en": "Use only throttle",
    "ru": "Использовать только газ (throttle)"
   },
   {
    "en": "Jump off the bike",
    "ru": "Спрыгнуть с мотоцикла"
   }
  ],
  "why": {
   "en": "The manual says if straightening first is not possible, smoothly apply brakes as you gradually straighten. Source: Chapter 3, Braking in a Corner, pp. 3-8 to 3-9 (manual p. 3-8, PDF p. 34; manual p. 3-9, PDF p. 35).",
   "ru": "В руководстве сказано: если выпрямиться заранее невозможно, плавно применяйте тормоза по мере того, как постепенно выпрямляете мотоцикл. Источник: глава 3, «Braking in a Corner», pp. 3-8 to 3-9 (Manual p. 3-8, PDF p. 34; Manual p. 3-9, PDF p. 35)."
  }
 },
 {
  "id": 73,
  "page": "3-9",
  "answer": 0,
  "q": {
   "en": "Before coming to a complete stop in a corner, what should be squared for stability and control?",
   "ru": "Что нужно выровнять (square) для устойчивости и контроля перед полной остановкой в повороте?"
  },
  "opts": [
   {
    "en": "Handlebars",
    "ru": "Руль (handlebars)"
   },
   {
    "en": "Mirrors",
    "ru": "Зеркала"
   },
   {
    "en": "License plate",
    "ru": "Номерной знак"
   },
   {
    "en": "Helmet visor",
    "ru": "Визор шлема"
   }
  ],
  "why": {
   "en": "The manual says to square the handlebars before a complete stop for stability and control. Source: Chapter 3, Braking in a Corner, p. 3-9 (manual p. 3-9, PDF p. 35).",
   "ru": "В руководстве сказано выровнять руль (handlebars) перед полной остановкой — для устойчивости и контроля. Источник: глава 3, «Braking in a Corner», p. 3-9 (Manual p. 3-9, PDF p. 35)."
  }
 },
 {
  "id": 74,
  "page": "3-9",
  "answer": 0,
  "q": {
   "en": "What are the two basic types of evasive maneuvers?",
   "ru": "Какие два основных типа манёвров уклонения (evasive maneuvers) существуют?"
  },
  "opts": [
   {
    "en": "Change speed or change position",
    "ru": "Изменить скорость или изменить положение"
   },
   {
    "en": "Change helmet or boots",
    "ru": "Сменить шлем или ботинки"
   },
   {
    "en": "Change insurance or registration",
    "ru": "Сменить страховку или регистрацию"
   },
   {
    "en": "Change passenger or cargo",
    "ru": "Сменить пассажира или груз"
   }
  ],
  "why": {
   "en": "The manual identifies evasive maneuvers as changing speed or changing position. Source: Chapter 3, Evasive Maneuvers, p. 3-9 (manual p. 3-9, PDF p. 35).",
   "ru": "В руководстве манёвры уклонения (evasive maneuvers) определяются как изменение скорости или изменение положения. Источник: глава 3, «Evasive Maneuvers», p. 3-9 (Manual p. 3-9, PDF p. 35)."
  }
 },
 {
  "id": 75,
  "page": "3-9",
  "answer": 0,
  "q": {
   "en": "How should you perform a quick stop?",
   "ru": "Как следует выполнять быструю остановку (quick stop)?"
  },
  "opts": [
   {
    "en": "Apply both brakes fully without locking either wheel",
    "ru": "Применить оба тормоза в полную силу, не блокируя ни одно из колёс"
   },
   {
    "en": "Rear brake only",
    "ru": "Только задним тормозом"
   },
   {
    "en": "Front brake abruptly",
    "ru": "Резко передним тормозом"
   },
   {
    "en": "Shut off engine only",
    "ru": "Только заглушить двигатель"
   }
  ],
  "why": {
   "en": "The manual says quick stops require applying both brakes fully without locking either wheel. Source: Chapter 3, Quick Stops, p. 3-9 (manual p. 3-9, PDF p. 35).",
   "ru": "В руководстве сказано, что для быстрой остановки (quick stop) нужно применить оба тормоза в полную силу, не блокируя ни одно из колёс. Источник: глава 3, «Quick Stops», p. 3-9 (Manual p. 3-9, PDF p. 35)."
  }
 },
 {
  "id": 76,
  "page": "3-9",
  "answer": 0,
  "q": {
   "en": "How should the front brake be applied in a quick stop?",
   "ru": "Как следует применять передний тормоз при быстрой остановке (quick stop)?"
  },
  "opts": [
   {
    "en": "Smoothly, firmly, and progressively",
    "ru": "Плавно, твёрдо и постепенно"
   },
   {
    "en": "Abruptly",
    "ru": "Резко"
   },
   {
    "en": "Not at all",
    "ru": "Совсем не применять"
   },
   {
    "en": "Only after stopping",
    "ru": "Только после остановки"
   }
  ],
  "why": {
   "en": "The manual says to smoothly squeeze the front brake firmly and progressively, without grabbing. Source: Chapter 3, Quick Stops, p. 3-9 (manual p. 3-9, PDF p. 35).",
   "ru": "В руководстве сказано плавно зажимать передний тормоз — твёрдо и постепенно, без резкого хватания. Источник: глава 3, «Quick Stops», p. 3-9 (Manual p. 3-9, PDF p. 35)."
  }
 },
 {
  "id": 77,
  "page": "3-9",
  "answer": 0,
  "q": {
   "en": "How should rear brake pressure change during a hard stop?",
   "ru": "Как должно меняться давление на задний тормоз при экстренном торможении?"
  },
  "opts": [
   {
    "en": "Light at first, then progressively release pressure as weight transfers forward",
    "ru": "Сначала слабое, затем постепенно ослаблять давление по мере переноса веса вперёд"
   },
   {
    "en": "Always increase to maximum",
    "ru": "Всегда увеличивать до максимума"
   },
   {
    "en": "Never use the rear brake",
    "ru": "Никогда не использовать задний тормоз"
   },
   {
    "en": "Pump it only",
    "ru": "Только прерывисто нажимать (pump)"
   }
  ],
  "why": {
   "en": "The manual says less rear traction is available as weight transfers forward, so rear pressure should be light at first and progressively released. Source: Chapter 3, Quick Stops, p. 3-9 (manual p. 3-9, PDF p. 35).",
   "ru": "В руководстве сказано, что по мере переноса веса вперёд сцепление (traction) заднего колеса уменьшается, поэтому давление на задний тормоз должно быть слабым в начале и постепенно ослабляться. Источник: глава 3, «Quick Stops», p. 3-9 (Manual p. 3-9, PDF p. 35)."
  }
 },
 {
  "id": 78,
  "page": "3-9",
  "answer": 0,
  "q": {
   "en": "Where should your knees and eyes be during a quick stop?",
   "ru": "Где должны находиться колени и взгляд при быстрой остановке (quick stop)?"
  },
  "opts": [
   {
    "en": "Knees against the tank and eyes up",
    "ru": "Колени прижаты к баку, взгляд поднят и направлен вперёд"
   },
   {
    "en": "Feet down and eyes down",
    "ru": "Ноги опущены, взгляд вниз"
   },
   {
    "en": "Knees out and eyes at the tire",
    "ru": "Колени разведены в стороны, взгляд на колесо"
   },
   {
    "en": "Eyes closed",
    "ru": "Глаза закрыты"
   }
  ],
  "why": {
   "en": "The manual says to keep knees against the tank and eyes up, looking well ahead. Source: Chapter 3, Quick Stops, p. 3-9 (manual p. 3-9, PDF p. 35).",
   "ru": "В руководстве сказано держать колени прижатыми к баку, а взгляд — поднятым и направленным далеко вперёд. Источник: глава 3, «Quick Stops», p. 3-9 (Manual p. 3-9, PDF p. 35)."
  }
 },
 {
  "id": 79,
  "page": "3-10",
  "answer": 0,
  "q": {
   "en": "When might a swerve be safer than a quick stop?",
   "ru": "Когда объездной манёвр (swerve) может быть безопаснее быстрой остановки (quick stop)?"
  },
  "opts": [
   {
    "en": "When space is limited or vehicles behind may not stop",
    "ru": "Когда пространство ограничено или машины сзади могут не успеть остановиться"
   },
   {
    "en": "Only at walking speed",
    "ru": "Только на скорости пешехода"
   },
   {
    "en": "Only when riding without a helmet",
    "ru": "Только при езде без шлема"
   },
   {
    "en": "Never",
    "ru": "Никогда"
   }
  ],
  "why": {
   "en": "The manual says a quick stop is not always safe if space is limited or following vehicles cannot stop. Source: Chapter 3, Swerves, p. 3-10 (manual p. 3-10, PDF p. 36).",
   "ru": "В руководстве сказано, что быстрая остановка (quick stop) не всегда безопасна, если пространство ограничено или едущие сзади машины не могут остановиться. Источник: глава 3, «Swerves», p. 3-10 (Manual p. 3-10, PDF p. 36)."
  }
 },
 {
  "id": 80,
  "page": "3-10",
  "answer": 0,
  "q": {
   "en": "What is a swerve made of on a two-wheeled motorcycle?",
   "ru": "Из чего состоит объездной манёвр (swerve) на двухколёсном (2W) мотоцикле?"
  },
  "opts": [
   {
    "en": "Two consecutive countersteers",
    "ru": "Из двух последовательных контррулений (countersteer)"
   },
   {
    "en": "One rear-brake skid",
    "ru": "Из одного заноса на заднем тормозе"
   },
   {
    "en": "A direct-steer turn only",
    "ru": "Только из прямого поворота руля (direct-steer)"
   },
   {
    "en": "A throttle roll-on only",
    "ru": "Только из добавления газа (throttle roll-on)"
   }
  ],
  "why": {
   "en": "The manual describes a swerve as two consecutive countersteers. Source: Chapter 3, Swerves, p. 3-10 (manual p. 3-10, PDF p. 36).",
   "ru": "В руководстве объездной манёвр (swerve) описывается как два последовательных контрруления (countersteer). Источник: глава 3, «Swerves», p. 3-10 (Manual p. 3-10, PDF p. 36)."
  }
 },
 {
  "id": 81,
  "page": "3-10",
  "answer": 1,
  "q": {
   "en": "Should you brake while swerving?",
   "ru": "Следует ли тормозить во время объездного манёвра (swerve)?"
  },
  "opts": [
   {
    "en": "Yes",
    "ru": "Да"
   },
   {
    "en": "No, brake before or after but never while swerving",
    "ru": "Нет, тормозить нужно до или после, но никогда во время манёвра"
   },
   {
    "en": "Only with rear brake",
    "ru": "Только задним тормозом"
   },
   {
    "en": "Only with front brake",
    "ru": "Только передним тормозом"
   }
  ],
  "why": {
   "en": "The manual states to brake before or after a swerve, but never while swerving. Source: Chapter 3, Swerves, p. 3-10 (manual p. 3-10, PDF p. 36).",
   "ru": "В руководстве сказано тормозить до или после объездного манёвра (swerve), но никогда во время него. Источник: глава 3, «Swerves», p. 3-10 (Manual p. 3-10, PDF p. 36)."
  }
 },
 {
  "id": 82,
  "page": "3-10",
  "answer": 0,
  "q": {
   "en": "What should happen to your body during a swerve?",
   "ru": "Что должно происходить с вашим телом во время объездного манёвра (swerve)?"
  },
  "opts": [
   {
    "en": "Motorcycle moves independently under the rider while the upper body remains upright",
    "ru": "Мотоцикл движется отдельно под водителем, а верхняя часть тела остаётся вертикальной"
   },
   {
    "en": "Lean your whole body aggressively",
    "ru": "Резко наклонить всё тело"
   },
   {
    "en": "Stand on the seat",
    "ru": "Встать на сиденье"
   },
   {
    "en": "Put feet down",
    "ru": "Опустить ноги"
   }
  ],
  "why": {
   "en": "The manual says the motorcycle should move independently underneath the rider while the upper body remains upright. Source: Chapter 3, Swerves, p. 3-10 (manual p. 3-10, PDF p. 36).",
   "ru": "В руководстве сказано, что мотоцикл должен двигаться отдельно под водителем, тогда как верхняя часть тела остаётся вертикальной. Источник: глава 3, «Swerves», p. 3-10 (Manual p. 3-10, PDF p. 36)."
  }
 },
 {
  "id": 83,
  "page": "3-10",
  "answer": 0,
  "q": {
   "en": "Where should you look during a swerve?",
   "ru": "Куда нужно смотреть во время объездного манёвра (swerve)?"
  },
  "opts": [
   {
    "en": "At your escape route",
    "ru": "На путь объезда (escape route)"
   },
   {
    "en": "At the obstacle",
    "ru": "На препятствие"
   },
   {
    "en": "At the front wheel",
    "ru": "На переднее колесо"
   },
   {
    "en": "At the rider behind",
    "ru": "На едущего сзади"
   }
  ],
  "why": {
   "en": "The manual says to search for the escape route and keep eyes and head up during swerving. Source: Chapter 3, Swerves, p. 3-10 (manual p. 3-10, PDF p. 36).",
   "ru": "В руководстве сказано искать путь объезда (escape route) и держать взгляд и голову поднятыми во время манёвра. Источник: глава 3, «Swerves», p. 3-10 (Manual p. 3-10, PDF p. 36)."
  }
 },
 {
  "id": 84,
  "page": "3-10",
  "answer": 0,
  "q": {
   "en": "How does carrying a passenger or cargo affect motorcycle performance?",
   "ru": "Как перевозка пассажира или груза влияет на поведение мотоцикла?"
  },
  "opts": [
   {
    "en": "It can increase stopping distance and affect handling",
    "ru": "Это может увеличить тормозной путь и повлиять на управляемость (handling)"
   },
   {
    "en": "It always improves braking",
    "ru": "Это всегда улучшает торможение"
   },
   {
    "en": "It has no effect",
    "ru": "Это не оказывает никакого влияния"
   },
   {
    "en": "It makes cornering easier",
    "ru": "Это облегчает прохождение поворотов"
   }
  ],
  "why": {
   "en": "The manual states passengers and cargo change how the motorcycle handles and can require adjustments. Source: Chapter 3, Carrying Passengers and Cargo, p. 3-10 (manual p. 3-10, PDF p. 36).",
   "ru": "В руководстве сказано, что пассажир и груз меняют управляемость (handling) мотоцикла и могут потребовать корректировок. Источник: глава 3, «Carrying Passengers and Cargo», p. 3-10 (Manual p. 3-10, PDF p. 36)."
  }
 },
 {
  "id": 85,
  "page": "3-10",
  "answer": 0,
  "q": {
   "en": "Where should heavier cargo be placed?",
   "ru": "Где следует размещать более тяжёлый груз?"
  },
  "opts": [
   {
    "en": "Low and centered",
    "ru": "Низко и по центру"
   },
   {
    "en": "High and far back",
    "ru": "Высоко и далеко сзади"
   },
   {
    "en": "On the handlebars",
    "ru": "На руле (handlebars)"
   },
   {
    "en": "Loose on the passenger seat",
    "ru": "Незакреплённым на пассажирском сиденье"
   }
  ],
  "why": {
   "en": "The manual instructs keeping cargo low and centered to avoid raising the center of gravity and affecting handling. Source: Chapter 3, Carrying Passengers and Cargo, p. 3-10 (manual p. 3-10, PDF p. 36).",
   "ru": "В руководстве предписано держать груз низко и по центру, чтобы не поднимать центр тяжести и не ухудшать управляемость (handling). Источник: глава 3, «Carrying Passengers and Cargo», p. 3-10 (Manual p. 3-10, PDF p. 36)."
  }
 },
 {
  "id": 86,
  "page": "3-10",
  "answer": 0,
  "q": {
   "en": "How should cargo be secured?",
   "ru": "Как нужно закреплять груз?"
  },
  "opts": [
   {
    "en": "Firmly secured",
    "ru": "Надёжно закрепить"
   },
   {
    "en": "Left loose for quick access",
    "ru": "Оставить незакреплённым для быстрого доступа"
   },
   {
    "en": "Hung from the handlebars",
    "ru": "Подвесить на руль"
   },
   {
    "en": "Only on one side",
    "ru": "Только с одной стороны"
   }
  ],
  "why": {
   "en": "The manual warns cargo must be secured to avoid shifting and affecting control. Source: Chapter 3, Carrying Passengers and Cargo, p. 3-10 (manual p. 3-10, PDF p. 36).",
   "ru": "В руководстве предупреждается, что груз должен быть надёжно закреплён, чтобы он не смещался и не влиял на управление мотоциклом. Источник: глава 3, «Carrying Passengers and Cargo», p. 3-10 (Manual p. 3-10, PDF p. 36)."
  }
 },
 {
  "id": 87,
  "page": "3-10",
  "answer": 0,
  "q": {
   "en": "What should a passenger do in turns?",
   "ru": "Что должен делать пассажир в поворотах?"
  },
  "opts": [
   {
    "en": "Lean with the rider/motorcycle",
    "ru": "Наклоняться вместе с водителем/мотоциклом"
   },
   {
    "en": "Lean opposite the rider",
    "ru": "Наклоняться в сторону, противоположную водителю"
   },
   {
    "en": "Put feet down",
    "ru": "Опускать ноги на землю"
   },
   {
    "en": "Stand up",
    "ru": "Вставать"
   }
  ],
  "why": {
   "en": "The manual directs passengers to ride with the rider and avoid making unexpected movements. Source: Chapter 3, Carrying Passengers and Cargo, p. 3-10 (manual p. 3-10, PDF p. 36).",
   "ru": "Руководство указывает, что пассажир должен двигаться вместе с водителем и избегать неожиданных движений. Источник: глава 3, «Carrying Passengers and Cargo», p. 3-10 (Manual p. 3-10, PDF p. 36)."
  }
 },
 {
  "id": 88,
  "page": "3-10",
  "answer": 0,
  "q": {
   "en": "What should a passenger do with their feet?",
   "ru": "Что пассажир должен делать с ногами?"
  },
  "opts": [
   {
    "en": "Keep feet on the footrests",
    "ru": "Держать ноги на подножках"
   },
   {
    "en": "Put feet down at every stop",
    "ru": "Опускать ноги на каждой остановке"
   },
   {
    "en": "Drag feet for balance",
    "ru": "Волочить ноги по земле для равновесия"
   },
   {
    "en": "Use the exhaust pipe as a footrest",
    "ru": "Использовать выхлопную трубу как подножку"
   }
  ],
  "why": {
   "en": "The manual instructs passengers to keep feet on footrests and hold on properly. Source: Chapter 3, Carrying Passengers and Cargo, p. 3-10 (manual p. 3-10, PDF p. 36).",
   "ru": "Руководство предписывает пассажиру держать ноги на подножках и крепко держаться. Источник: глава 3, «Carrying Passengers and Cargo», p. 3-10 (Manual p. 3-10, PDF p. 36)."
  }
 },
 {
  "id": 89,
  "page": "5-5",
  "answer": 0,
  "q": {
   "en": "What is the purpose of creating time and space around you?",
   "ru": "Зачем нужно создавать вокруг себя запас времени и пространства?"
  },
  "opts": [
   {
    "en": "Time lets you identify hazards and plan; space gives room to execute",
    "ru": "Время позволяет распознать опасность и спланировать действия, а пространство даёт место для манёвра"
   },
   {
    "en": "Only to ride faster",
    "ru": "Только чтобы ехать быстрее"
   },
   {
    "en": "Only to pass cars",
    "ru": "Только чтобы обгонять автомобили"
   },
   {
    "en": "Only to avoid using mirrors",
    "ru": "Только чтобы не пользоваться зеркалами"
   }
  ],
  "why": {
   "en": "The manual says time allows you to see a hazard and plan a response, while space gives room to execute. Source: Chapter 5, Creating Time and Space, p. 5-5 (manual p. 5-5, PDF p. 55).",
   "ru": "В руководстве сказано, что время позволяет заметить опасность и спланировать ответные действия, а пространство даёт место для их выполнения. Источник: глава 5, «Creating Time and Space», p. 5-5 (Manual p. 5-5, PDF p. 55)."
  }
 },
 {
  "id": 90,
  "page": "5-5",
  "answer": 0,
  "q": {
   "en": "Should escape paths be part of your time and space choice?",
   "ru": "Должен ли запасной путь для манёвра (escape path) входить в ваш расчёт времени и пространства?"
  },
  "opts": [
   {
    "en": "Yes, always evaluate an escape path",
    "ru": "Да, всегда оценивайте запасной путь для манёвра (escape path)"
   },
   {
    "en": "No",
    "ru": "Нет"
   },
   {
    "en": "Only at night",
    "ru": "Только ночью"
   },
   {
    "en": "Only in groups",
    "ru": "Только при движении в группе"
   }
  ],
  "why": {
   "en": "The manual states to always evaluate an escape path as part of your time and space choice. Source: Chapter 5, Creating Time and Space, p. 5-5 (manual p. 5-5, PDF p. 55).",
   "ru": "В руководстве сказано всегда оценивать запасной путь для манёвра (escape path) как часть расчёта времени и пространства. Источник: глава 5, «Creating Time and Space», p. 5-5 (Manual p. 5-5, PDF p. 55)."
  }
 },
 {
  "id": 91,
  "page": "5-5",
  "answer": 0,
  "q": {
   "en": "What are the three factors that make up total stopping distance?",
   "ru": "Какие три составляющие образуют полный тормозной путь (total stopping distance)?"
  },
  "opts": [
   {
    "en": "Perception, reaction, and execution",
    "ru": "Восприятие, реакция и выполнение действия"
   },
   {
    "en": "Speed, fuel, and tires",
    "ru": "Скорость, топливо и шины"
   },
   {
    "en": "Vision, oil, and mirrors",
    "ru": "Зрение, масло и зеркала"
   },
   {
    "en": "Braking, honking, and swerving",
    "ru": "Торможение, сигнал и резкий объезд"
   }
  ],
  "why": {
   "en": "The manual identifies perception, reaction, and execution as the three factors in total stopping distance. Source: Chapter 5, Total Stopping Distance, p. 5-5 (manual p. 5-5, PDF p. 55).",
   "ru": "В руководстве названы три составляющие полного тормозного пути (total stopping distance): восприятие, реакция и выполнение действия. Источник: глава 5, «Total Stopping Distance», p. 5-5 (Manual p. 5-5, PDF p. 55)."
  }
 },
 {
  "id": 92,
  "page": "5-6",
  "answer": 0,
  "q": {
   "en": "How far down the road should riders strive to see?",
   "ru": "Как далеко вперёд по дороге должен стараться видеть водитель?"
  },
  "opts": [
   {
    "en": "At least 12 seconds ahead",
    "ru": "Не менее чем на 12 секунд вперёд"
   },
   {
    "en": "Only 2 seconds ahead",
    "ru": "Только на 2 секунды вперёд"
   },
   {
    "en": "Only to the next car bumper",
    "ru": "Только до бампера ближайшего автомобиля"
   },
   {
    "en": "Only 1 second ahead",
    "ru": "Только на 1 секунду вперёд"
   }
  ],
  "why": {
   "en": "The manual tells riders to strive to see at least 12 seconds down the road ahead. Source: Chapter 5, Look Farther Down the Road, p. 5-6 (manual p. 5-6, PDF p. 56).",
   "ru": "Руководство советует стараться видеть дорогу как минимум на 12 секунд вперёд. Источник: глава 5, «Look Farther Down the Road», p. 5-6 (Manual p. 5-6, PDF p. 56)."
  }
 },
 {
  "id": 93,
  "page": "5-6",
  "answer": 2,
  "q": {
   "en": "What minimum following distance does the manual recommend?",
   "ru": "Какую минимальную дистанцию следования (following distance) рекомендует руководство?"
  },
  "opts": [
   {
    "en": "One second",
    "ru": "Одна секунда"
   },
   {
    "en": "Two seconds",
    "ru": "Две секунды"
   },
   {
    "en": "Three seconds",
    "ru": "Три секунды"
   },
   {
    "en": "Ten seconds always",
    "ru": "Всегда десять секунд"
   }
  ],
  "why": {
   "en": "The manual recommends a minimum following distance of three seconds for both two- and three-wheeled motorcycles. Source: Chapter 5, Following Distance, p. 5-6 (manual p. 5-6, PDF p. 56).",
   "ru": "Руководство рекомендует минимальную дистанцию следования (following distance) в три секунды как для двухколёсных, так и для трёхколёсных мотоциклов. Источник: глава 5, «Following Distance», p. 5-6 (Manual p. 5-6, PDF p. 56)."
  }
 },
 {
  "id": 94,
  "page": "5-6",
  "answer": 0,
  "q": {
   "en": "Is the three-second following distance always enough?",
   "ru": "Всегда ли достаточно трёхсекундной дистанции следования (following distance)?"
  },
  "opts": [
   {
    "en": "No, it is the absolute minimum for ideal conditions",
    "ru": "Нет, это абсолютный минимум для идеальных условий"
   },
   {
    "en": "Yes, always",
    "ru": "Да, всегда"
   },
   {
    "en": "Only for cars",
    "ru": "Только для автомобилей"
   },
   {
    "en": "Only for night riding",
    "ru": "Только при езде ночью"
   }
  ],
  "why": {
   "en": "The manual says three seconds is the absolute minimum and should be adjusted for weather, fatigue, poor surfaces, and traffic. Source: Chapter 5, Following Distance, p. 5-6 (manual p. 5-6, PDF p. 56).",
   "ru": "В руководстве сказано, что три секунды — это абсолютный минимум, и дистанцию нужно увеличивать с учётом погоды, усталости, плохого покрытия и плотности движения. Источник: глава 5, «Following Distance», p. 5-6 (Manual p. 5-6, PDF p. 56)."
  }
 },
 {
  "id": 95,
  "page": "5-6",
  "answer": 0,
  "q": {
   "en": "What should you avoid doing when someone is tailgating you?",
   "ru": "Чего не следует делать, если кто-то едет слишком близко за вами (tailgating)?"
  },
  "opts": [
   {
    "en": "Speeding up",
    "ru": "Ускоряться"
   },
   {
    "en": "Increasing space ahead",
    "ru": "Увеличивать пространство впереди"
   },
   {
    "en": "Creating an escape path",
    "ru": "Создавать запасной путь для манёвра (escape path)"
   },
   {
    "en": "Managing space",
    "ru": "Управлять дистанцией вокруг себя"
   }
  ],
  "why": {
   "en": "The manual says speeding up often encourages the tailgater to speed up and can trap you between vehicles. Source: Chapter 5, Being Followed, p. 5-6 (manual p. 5-6, PDF p. 56).",
   "ru": "В руководстве сказано, что ускорение часто заставляет едущего сзади тоже ускоряться и может зажать вас между автомобилями. Источник: глава 5, «Being Followed», p. 5-6 (Manual p. 5-6, PDF p. 56)."
  }
 },
 {
  "id": 96,
  "page": "5-6",
  "answer": 0,
  "q": {
   "en": "What should you do if you are being followed too closely?",
   "ru": "Что делать, если за вами едут слишком близко?"
  },
  "opts": [
   {
    "en": "Gradually slow down to create more space ahead",
    "ru": "Плавно снизить скорость, чтобы увеличить пространство впереди"
   },
   {
    "en": "Brake-check the driver",
    "ru": "Резко притормозить, чтобы проучить водителя"
   },
   {
    "en": "Throw objects",
    "ru": "Бросать предметы"
   },
   {
    "en": "Ignore all mirrors",
    "ru": "Не смотреть в зеркала"
   }
  ],
  "why": {
   "en": "The manual recommends gradually slowing to create more space between you and vehicles in front. Source: Chapter 5, Being Followed, p. 5-6 (manual p. 5-6, PDF p. 56).",
   "ru": "Руководство рекомендует плавно снижать скорость, чтобы увеличить расстояние между вами и автомобилями впереди. Источник: глава 5, «Being Followed», p. 5-6 (Manual p. 5-6, PDF p. 56)."
  }
 },
 {
  "id": 97,
  "page": "5-2",
  "answer": 0,
  "q": {
   "en": "How should you choose a lane?",
   "ru": "Как следует выбирать полосу движения?"
  },
  "opts": [
   {
    "en": "Choose the lane that serves you best at the moment",
    "ru": "Выбирать полосу, которая лучше всего подходит в данный момент"
   },
   {
    "en": "Always ride in the left lane",
    "ru": "Всегда ехать по левой полосе"
   },
   {
    "en": "Always ride in the right lane",
    "ru": "Всегда ехать по правой полосе"
   },
   {
    "en": "Never change lanes",
    "ru": "Никогда не перестраиваться"
   }
  ],
  "why": {
   "en": "The manual says traffic and surface conditions change, so choose the lane that gives you adequate safety margin. Source: Chapter 5, Lane Choice, p. 5-2 (manual p. 5-2, PDF p. 52).",
   "ru": "В руководстве сказано, что условия движения и состояние покрытия меняются, поэтому выбирайте ту полосу, которая обеспечивает достаточный запас безопасности. Источник: глава 5, «Lane Choice», p. 5-2 (Manual p. 5-2, PDF p. 52)."
  }
 },
 {
  "id": 98,
  "page": "5-2",
  "answer": 0,
  "q": {
   "en": "Are motorcycles allowed to use HOV lanes in Washington?",
   "ru": "Разрешено ли мотоциклам пользоваться полосами для машин с пассажирами (HOV lanes) в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "Yes, at any time",
    "ru": "Да, в любое время"
   },
   {
    "en": "No",
    "ru": "Нет"
   },
   {
    "en": "Only with two passengers",
    "ru": "Только с двумя пассажирами"
   },
   {
    "en": "Only at night",
    "ru": "Только ночью"
   }
  ],
  "why": {
   "en": "The manual notes that motorcycles are allowed to use HOV lanes at any time in Washington. Source: Chapter 5, Lane Choice note, p. 5-2 (manual p. 5-2, PDF p. 52).",
   "ru": "В руководстве отмечается, что в штате Вашингтон мотоциклам в любое время разрешено пользоваться полосами для машин с пассажирами (HOV lanes). Источник: глава 5, «Lane Choice note», p. 5-2 (Manual p. 5-2, PDF p. 52)."
  }
 },
 {
  "id": 99,
  "page": "5-3",
  "answer": 0,
  "q": {
   "en": "Is there one lane position that is best in every situation?",
   "ru": "Существует ли одно положение в полосе (lane position), которое лучше всего подходит в любой ситуации?"
  },
  "opts": [
   {
    "en": "No",
    "ru": "Нет"
   },
   {
    "en": "Yes, always the center",
    "ru": "Да, всегда по центру"
   },
   {
    "en": "Yes, always left",
    "ru": "Да, всегда слева"
   },
   {
    "en": "Yes, always right",
    "ru": "Да, всегда справа"
   }
  ],
  "why": {
   "en": "The manual emphasizes choosing the lane position that best supports seeing, being seen, avoiding hazards, and maintaining space. Source: Chapter 5, Lane Position, p. 5-3 (manual p. 5-3, PDF p. 53).",
   "ru": "Руководство подчёркивает, что нужно выбирать такое положение в полосе (lane position), которое лучше всего помогает видеть, быть видимым, избегать опасностей и сохранять дистанцию. Источник: глава 5, «Lane Position», p. 5-3 (Manual p. 5-3, PDF p. 53)."
  }
 },
 {
  "id": 100,
  "page": "5-7",
  "answer": 0,
  "q": {
   "en": "Where do most motorcycle-versus-vehicle collisions occur?",
   "ru": "Где происходит большинство столкновений мотоциклов с автомобилями?"
  },
  "opts": [
   {
    "en": "Intersections",
    "ru": "На перекрёстках"
   },
   {
    "en": "Steep hills",
    "ru": "На крутых склонах"
   },
   {
    "en": "Gas stations",
    "ru": "На заправках"
   },
   {
    "en": "Parking spaces",
    "ru": "На парковочных местах"
   }
  ],
  "why": {
   "en": "The manual states the majority of motorcycle vs. vehicle collisions occur at intersections. Source: Chapter 5, Intersections, p. 5-7 (manual p. 5-7, PDF p. 57).",
   "ru": "В руководстве сказано, что большинство столкновений мотоциклов с автомобилями происходит на перекрёстках. Источник: глава 5, «Intersections», p. 5-7 (Manual p. 5-7, PDF p. 57)."
  }
 },
 {
  "id": 101,
  "page": "5-7",
  "answer": 0,
  "q": {
   "en": "What is the most common motorcycle-versus-vehicle collision at intersections?",
   "ru": "Какой тип столкновения мотоцикла с автомобилем на перекрёстках встречается чаще всего?"
  },
  "opts": [
   {
    "en": "A car turns left across the path of the motorcycle",
    "ru": "Автомобиль поворачивает налево, пересекая траекторию мотоцикла"
   },
   {
    "en": "A motorcycle runs out of fuel",
    "ru": "У мотоцикла заканчивается топливо"
   },
   {
    "en": "A rider parks incorrectly",
    "ru": "Водитель неправильно паркуется"
   },
   {
    "en": "A rear tire goes flat",
    "ru": "Спускает заднее колесо"
   }
  ],
  "why": {
   "en": "The manual identifies left-turning cars crossing the motorcycle's path as the most common type. Source: Chapter 5, Intersections, p. 5-7 (manual p. 5-7, PDF p. 57).",
   "ru": "В руководстве указано, что чаще всего происходит столкновение, когда поворачивающий налево автомобиль пересекает траекторию мотоцикла. Источник: глава 5, «Intersections», p. 5-7 (Manual p. 5-7, PDF p. 57)."
  }
 },
 {
  "id": 102,
  "page": "5-7",
  "answer": 0,
  "q": {
   "en": "What should riders always look for at intersections?",
   "ru": "Что водитель всегда должен высматривать на перекрёстках?"
  },
  "opts": [
   {
    "en": "Escape routes, roadway hazards, and traffic conditions",
    "ru": "Запасные пути для манёвра (escape routes), опасности на дороге и условия движения"
   },
   {
    "en": "Only the green light",
    "ru": "Только зелёный сигнал светофора"
   },
   {
    "en": "Only the vehicle behind",
    "ru": "Только автомобиль сзади"
   },
   {
    "en": "Only pedestrians on sidewalks",
    "ru": "Только пешеходов на тротуарах"
   }
  ],
  "why": {
   "en": "The manual says riders should look for escape routes, roadway hazards, and monitor traffic at intersections. Source: Chapter 5, Intersections, p. 5-7 (manual p. 5-7, PDF p. 57).",
   "ru": "В руководстве сказано, что на перекрёстках водитель должен высматривать запасные пути для манёвра (escape routes), опасности на дороге и следить за движением. Источник: глава 5, «Intersections», p. 5-7 (Manual p. 5-7, PDF p. 57)."
  }
 },
 {
  "id": 103,
  "page": "5-7",
  "answer": 0,
  "q": {
   "en": "What gear should you remain in at intersections?",
   "ru": "На какой передаче нужно оставаться на перекрёстках?"
  },
  "opts": [
   {
    "en": "First gear",
    "ru": "На первой передаче"
   },
   {
    "en": "Neutral",
    "ru": "На нейтральной передаче"
   },
   {
    "en": "Top gear",
    "ru": "На высшей передаче"
   },
   {
    "en": "Any gear",
    "ru": "На любой передаче"
   }
  ],
  "why": {
   "en": "The manual says to remain in first gear at intersections and check mirrors often to avoid rear-end collisions. Source: Chapter 5, Intersections, p. 5-7 (manual p. 5-7, PDF p. 57).",
   "ru": "В руководстве сказано на перекрёстках оставаться на первой передаче и часто смотреть в зеркала, чтобы избежать наезда сзади. Источник: глава 5, «Intersections», p. 5-7 (Manual p. 5-7, PDF p. 57)."
  }
 },
 {
  "id": 104,
  "page": "5-7",
  "answer": 0,
  "q": {
   "en": "What should you do before proceeding through an intersection?",
   "ru": "Что нужно сделать перед тем, как проехать перекрёсток?"
  },
  "opts": [
   {
    "en": "Make sure other road users have stopped",
    "ru": "Убедиться, что другие участники движения остановились"
   },
   {
    "en": "Assume everyone stopped",
    "ru": "Считать, что все остановились"
   },
   {
    "en": "Accelerate without checking",
    "ru": "Ускоряться, не проверяя обстановку"
   },
   {
    "en": "Look only at the light",
    "ru": "Смотреть только на светофор"
   }
  ],
  "why": {
   "en": "The manual says to make sure other road users have stopped before proceeding. Source: Chapter 5, Intersections, p. 5-7 (manual p. 5-7, PDF p. 57).",
   "ru": "В руководстве сказано перед началом движения убедиться, что другие участники движения остановились. Источник: глава 5, «Intersections», p. 5-7 (Manual p. 5-7, PDF p. 57)."
  }
 },
 {
  "id": 105,
  "page": "5-7",
  "answer": 0,
  "q": {
   "en": "If you notice a car waiting at a green light, what should you predict?",
   "ru": "Если вы заметили автомобиль, стоящий на зелёный сигнал, что следует предположить?"
  },
  "opts": [
   {
    "en": "It may be waiting to turn",
    "ru": "Возможно, он ждёт, чтобы повернуть"
   },
   {
    "en": "It will never move",
    "ru": "Он никогда не тронется с места"
   },
   {
    "en": "It has no driver",
    "ru": "В нём нет водителя"
   },
   {
    "en": "It sees you for sure",
    "ru": "Он точно вас видит"
   }
  ],
  "why": {
   "en": "The manual says to predict that a car waiting at a green light may be waiting to turn and respond accordingly. Source: Chapter 5, Intersections, p. 5-7 (manual p. 5-7, PDF p. 57).",
   "ru": "В руководстве сказано предполагать, что автомобиль, стоящий на зелёный сигнал, возможно, ждёт, чтобы повернуть, и реагировать соответственно. Источник: глава 5, «Intersections», p. 5-7 (Manual p. 5-7, PDF p. 57)."
  }
 },
 {
  "id": 106,
  "page": "5-7",
  "answer": 0,
  "q": {
   "en": "What does covering your controls at intersections prepare you to do?",
   "ru": "Для чего нужно держать органы управления наготове (covering controls) на перекрёстках?"
  },
  "opts": [
   {
    "en": "Use clutch/brakes quickly if needed",
    "ru": "Чтобы при необходимости быстро воспользоваться сцеплением (clutch) и тормозами (brakes)"
   },
   {
    "en": "Stop using mirrors",
    "ru": "Чтобы перестать пользоваться зеркалами"
   },
   {
    "en": "Turn off the engine",
    "ru": "Чтобы заглушить двигатель"
   },
   {
    "en": "Ride without scanning",
    "ru": "Чтобы ехать, не осматривая обстановку"
   }
  ],
  "why": {
   "en": "The manual says to cover controls so you can operate clutch, brakes, etc. quickly if necessary. Source: Chapter 5, Intersections, p. 5-7 (manual p. 5-7, PDF p. 57).",
   "ru": "В руководстве сказано держать органы управления наготове, чтобы при необходимости быстро воспользоваться сцеплением (clutch), тормозами (brakes) и т. д. Источник: глава 5, «Intersections», p. 5-7 (manual p. 5-7, PDF p. 57)."
  }
 },
 {
  "id": 107,
  "page": "5-8",
  "answer": 0,
  "q": {
   "en": "Which surfaces are listed as slippery hazards?",
   "ru": "Какие поверхности перечислены как скользкие и опасные?"
  },
  "opts": [
   {
    "en": "Painted lines, leaves, oil spots, steel plates, drainage grates",
    "ru": "Дорожная разметка, листья, масляные пятна, стальные плиты, дренажные решётки"
   },
   {
    "en": "Only dry concrete",
    "ru": "Только сухой бетон"
   },
   {
    "en": "Only clean asphalt",
    "ru": "Только чистый асфальт"
   },
   {
    "en": "Only bridges",
    "ru": "Только мосты"
   }
  ],
  "why": {
   "en": "The manual lists painted markings, leaves, oil, steel plates, drainage grates, and similar surfaces as slippery hazards. Source: Chapter 5, Surface Hazards, p. 5-8 (manual p. 5-8, PDF p. 59).",
   "ru": "В руководстве к скользким опасным поверхностям отнесены дорожная разметка, листья, масло, стальные плиты, дренажные решётки и подобные участки. Источник: глава 5, «Surface Hazards», p. 5-8 (manual p. 5-8, PDF p. 59)."
  }
 },
 {
  "id": 108,
  "page": "5-8",
  "answer": 0,
  "q": {
   "en": "What should you do before reaching a slippery surface?",
   "ru": "Что нужно сделать до того, как вы доедете до скользкого участка?"
  },
  "opts": [
   {
    "en": "Adjust speed and lane position before the hazard",
    "ru": "Заранее, до опасного участка, скорректировать скорость и положение в полосе"
   },
   {
    "en": "Accelerate suddenly on it",
    "ru": "Резко ускориться на нём"
   },
   {
    "en": "Brake hard on it",
    "ru": "Резко затормозить на нём"
   },
   {
    "en": "Close your eyes",
    "ru": "Закрыть глаза"
   }
  ],
  "why": {
   "en": "The manual recommends reducing speed and making changes before reaching slippery surfaces. Source: Chapter 5, Surface Hazards, p. 5-8 (manual p. 5-8, PDF p. 59).",
   "ru": "Руководство рекомендует снизить скорость и внести изменения заранее, до того как вы доедете до скользкого участка. Источник: глава 5, «Surface Hazards», p. 5-8 (manual p. 5-8, PDF p. 59)."
  }
 },
 {
  "id": 109,
  "page": "5-8",
  "answer": 0,
  "q": {
   "en": "How should you use motorcycle controls on a slippery surface?",
   "ru": "Как нужно работать органами управления мотоцикла на скользкой поверхности?"
  },
  "opts": [
   {
    "en": "Smoothly and gently",
    "ru": "Плавно и мягко"
   },
   {
    "en": "Abruptly",
    "ru": "Резко"
   },
   {
    "en": "With maximum throttle",
    "ru": "На полном газе (throttle)"
   },
   {
    "en": "With maximum braking",
    "ru": "С максимальным торможением"
   }
  ],
  "why": {
   "en": "The manual emphasizes smooth, gentle control use on slippery surfaces. Source: Chapter 5, Surface Hazards, p. 5-8 (manual p. 5-8, PDF p. 59).",
   "ru": "Руководство подчёркивает, что на скользкой поверхности органами управления нужно работать плавно и мягко. Источник: глава 5, «Surface Hazards», p. 5-8 (manual p. 5-8, PDF p. 59)."
  }
 },
 {
  "id": 110,
  "page": "5-8",
  "answer": 0,
  "q": {
   "en": "Why are painted lines, steel plates, and grates dangerous when wet?",
   "ru": "Почему дорожная разметка, стальные плиты и решётки опасны во влажном состоянии?"
  },
  "opts": [
   {
    "en": "They can be especially slippery",
    "ru": "Они могут быть особенно скользкими"
   },
   {
    "en": "They improve traction",
    "ru": "Они улучшают сцепление с дорогой"
   },
   {
    "en": "They make the engine stall",
    "ru": "Из-за них глохнет двигатель"
   },
   {
    "en": "They remove the need to brake",
    "ru": "Они избавляют от необходимости тормозить"
   }
  ],
  "why": {
   "en": "The manual identifies these surfaces as hazards because they reduce traction, especially when wet. Source: Chapter 5, Surface Hazards, p. 5-8 (manual p. 5-8, PDF p. 59).",
   "ru": "Руководство относит эти поверхности к опасным, потому что они снижают сцепление с дорогой, особенно во влажном состоянии. Источник: глава 5, «Surface Hazards», p. 5-8 (manual p. 5-8, PDF p. 59)."
  }
 },
 {
  "id": 111,
  "page": "5-10",
  "answer": 0,
  "q": {
   "en": "At what angle should you cross an obstacle when possible?",
   "ru": "Под каким углом по возможности следует пересекать препятствие?"
  },
  "opts": [
   {
    "en": "As close to 90 degrees as possible",
    "ru": "Как можно ближе к 90 градусам"
   },
   {
    "en": "5 degrees",
    "ru": "5 градусов"
   },
   {
    "en": "Parallel to it",
    "ru": "Параллельно ему"
   },
   {
    "en": "Any angle",
    "ru": "Под любым углом"
   }
  ],
  "why": {
   "en": "The manual recommends crossing obstacles as close to a 90-degree angle as possible. Source: Chapter 5, Crossing an Obstacle, p. 5-10 (manual p. 5-10, PDF p. 60).",
   "ru": "Руководство рекомендует пересекать препятствия под углом как можно ближе к 90 градусам. Источник: глава 5, «Crossing an Obstacle», p. 5-10 (manual p. 5-10, PDF p. 60)."
  }
 },
 {
  "id": 112,
  "page": "5-10",
  "answer": 0,
  "q": {
   "en": "What should you do with your body when crossing an obstacle?",
   "ru": "Как нужно держать тело при пересечении препятствия?"
  },
  "opts": [
   {
    "en": "Rise slightly off the seat and use your legs as shock absorbers",
    "ru": "Слегка приподняться над сиденьем и использовать ноги как амортизаторы"
   },
   {
    "en": "Put your feet down",
    "ru": "Опустить ноги на землю"
   },
   {
    "en": "Lean back and close your eyes",
    "ru": "Откинуться назад и закрыть глаза"
   },
   {
    "en": "Sit rigidly",
    "ru": "Сидеть неподвижно и напряжённо"
   }
  ],
  "why": {
   "en": "The manual recommends rising slightly so your legs can absorb the impact. Source: Chapter 5, Crossing an Obstacle, p. 5-10 (manual p. 5-10, PDF p. 60).",
   "ru": "Руководство рекомендует слегка приподняться, чтобы ноги могли смягчить удар. Источник: глава 5, «Crossing an Obstacle», p. 5-10 (manual p. 5-10, PDF p. 60)."
  }
 },
 {
  "id": 113,
  "page": "5-10",
  "answer": 0,
  "q": {
   "en": "Where should you look while crossing an obstacle?",
   "ru": "Куда нужно смотреть при пересечении препятствия?"
  },
  "opts": [
   {
    "en": "Ahead, not down at the obstacle",
    "ru": "Вперёд, а не вниз на препятствие"
   },
   {
    "en": "At the front tire",
    "ru": "На переднее колесо"
   },
   {
    "en": "Behind you",
    "ru": "Назад"
   },
   {
    "en": "At the speedometer",
    "ru": "На спидометр"
   }
  ],
  "why": {
   "en": "The manual instructs riders to keep eyes up and look ahead when crossing obstacles. Source: Chapter 5, Crossing an Obstacle, p. 5-10 (manual p. 5-10, PDF p. 60).",
   "ru": "Руководство предписывает держать взгляд поднятым и смотреть вперёд при пересечении препятствий. Источник: глава 5, «Crossing an Obstacle», p. 5-10 (manual p. 5-10, PDF p. 60)."
  }
 },
 {
  "id": 114,
  "page": "5-10",
  "answer": 0,
  "q": {
   "en": "What should you do before changing lanes?",
   "ru": "Что нужно сделать перед сменой полосы?"
  },
  "opts": [
   {
    "en": "Signal and check your blind spot",
    "ru": "Включить сигнал поворота и проверить слепую зону (blind spot)"
   },
   {
    "en": "Only honk",
    "ru": "Только посигналить клаксоном"
   },
   {
    "en": "Only accelerate",
    "ru": "Только ускориться"
   },
   {
    "en": "Close your visor",
    "ru": "Опустить визор шлема"
   }
  ],
  "why": {
   "en": "The manual's lane-change/passing guidance includes signaling and checking your blind spot before moving. Source: Chapter 5, Changing Lanes / Passing, p. 5-10 (manual p. 5-10, PDF p. 60).",
   "ru": "Указания руководства по смене полосы и обгону включают подачу сигнала поворота и проверку слепой зоны (blind spot) перед манёвром. Источник: глава 5, «Changing Lanes / Passing», p. 5-10 (manual p. 5-10, PDF p. 60)."
  }
 },
 {
  "id": 115,
  "page": "5-10",
  "answer": 0,
  "q": {
   "en": "Before passing another vehicle, what should you make sure of?",
   "ru": "В чём нужно убедиться перед обгоном другого транспортного средства?"
  },
  "opts": [
   {
    "en": "The vehicle is not about to turn and you are in a passing zone",
    "ru": "Что это транспортное средство не собирается поворачивать и что вы находитесь в зоне, где обгон разрешён"
   },
   {
    "en": "Your high beam is off",
    "ru": "Что выключен дальний свет"
   },
   {
    "en": "The road is wet",
    "ru": "Что дорога мокрая"
   },
   {
    "en": "Your passenger is standing",
    "ru": "Что ваш пассажир стоит"
   }
  ],
  "why": {
   "en": "The manual says to make sure the vehicle is not about to turn and that you are in a passing zone before passing. Source: Chapter 5, Passing, p. 5-10 (manual p. 5-10, PDF p. 60).",
   "ru": "Руководство предписывает перед обгоном убедиться, что транспортное средство не собирается поворачивать и что вы находитесь в зоне, где обгон разрешён. Источник: глава 5, «Passing», p. 5-10 (manual p. 5-10, PDF p. 60)."
  }
 },
 {
  "id": 116,
  "page": "5-10",
  "answer": 0,
  "q": {
   "en": "After completing a passing or lane-change maneuver, what should you do?",
   "ru": "Что нужно сделать после завершения обгона или смены полосы?"
  },
  "opts": [
   {
    "en": "Cancel your signal",
    "ru": "Выключить сигнал поворота"
   },
   {
    "en": "Leave the signal on",
    "ru": "Оставить сигнал поворота включённым"
   },
   {
    "en": "Turn off the headlight",
    "ru": "Выключить фару"
   },
   {
    "en": "Stop immediately",
    "ru": "Немедленно остановиться"
   }
  ],
  "why": {
   "en": "The manual says to cancel the signal after completing the maneuver. Source: Chapter 5, Passing, p. 5-10 (manual p. 5-10, PDF p. 60).",
   "ru": "Руководство предписывает выключить сигнал поворота после завершения манёвра. Источник: глава 5, «Passing», p. 5-10 (manual p. 5-10, PDF p. 60)."
  }
 },
 {
  "id": 117,
  "page": "5-11",
  "answer": 0,
  "q": {
   "en": "What is a major risk of riding at night?",
   "ru": "Что является основным риском при езде ночью?"
  },
  "opts": [
   {
    "en": "Motorcycle headlights are smaller and less powerful than car headlights",
    "ru": "Фары мотоцикла меньше и слабее, чем фары автомобиля"
   },
   {
    "en": "Night makes motorcycles wider",
    "ru": "Ночью мотоцикл становится шире"
   },
   {
    "en": "Brakes stop working",
    "ru": "Тормоза перестают работать"
   },
   {
    "en": "Helmets become illegal",
    "ru": "Шлемы становятся незаконными"
   }
  ],
  "why": {
   "en": "The manual says motorcycle headlights are generally smaller and less powerful, making seeing and being seen harder at night. Source: Chapter 5, Riding at Night, p. 5-11 (manual p. 5-11, PDF p. 61).",
   "ru": "В руководстве сказано, что фары мотоцикла, как правило, меньше и слабее, из-за чего ночью труднее видеть и быть замеченным. Источник: глава 5, «Riding at Night», p. 5-11 (manual p. 5-11, PDF p. 61)."
  }
 },
 {
  "id": 118,
  "page": "5-11",
  "answer": 0,
  "q": {
   "en": "What should you do to compensate for night-riding risk?",
   "ru": "Что нужно делать, чтобы компенсировать риск езды ночью?"
  },
  "opts": [
   {
    "en": "Reduce speed, increase distance, and use all light sources",
    "ru": "Снизить скорость, увеличить дистанцию и использовать все источники света"
   },
   {
    "en": "Ride faster",
    "ru": "Ехать быстрее"
   },
   {
    "en": "Turn off lights",
    "ru": "Выключить свет"
   },
   {
    "en": "Follow very closely",
    "ru": "Держаться вплотную к впереди идущему транспорту"
   }
  ],
  "why": {
   "en": "The manual lists reducing speed, increasing distance, and using all light sources as night-riding strategies. Source: Chapter 5, Riding at Night, p. 5-11 (manual p. 5-11, PDF p. 61).",
   "ru": "Среди приёмов для езды ночью руководство называет снижение скорости, увеличение дистанции и использование всех источников света. Источник: глава 5, «Riding at Night», p. 5-11 (manual p. 5-11, PDF p. 61)."
  }
 },
 {
  "id": 119,
  "page": "5-11",
  "answer": 0,
  "q": {
   "en": "What does it mean to override your headlights?",
   "ru": "Что значит «обгонять свет своих фар» (override your headlights)?"
  },
  "opts": [
   {
    "en": "Ride faster than you can stop within the distance you can see",
    "ru": "Ехать быстрее, чем вы успеете остановиться в пределах видимого расстояния"
   },
   {
    "en": "Use high beam in daylight",
    "ru": "Включать дальний свет днём"
   },
   {
    "en": "Follow a car's lights",
    "ru": "Следовать за фарами впереди идущего автомобиля"
   },
   {
    "en": "Cancel your turn signal",
    "ru": "Выключать сигнал поворота"
   }
  ],
  "why": {
   "en": "The manual warns not to ride so fast at night that you cannot stop quickly enough when a hazard appears in your headlight. Source: Chapter 5, Riding at Night, p. 5-11 (manual p. 5-11, PDF p. 61).",
   "ru": "Руководство предупреждает: ночью нельзя ехать настолько быстро, чтобы не успеть вовремя остановиться, когда в свете фар появляется опасность. Источник: глава 5, «Riding at Night», p. 5-11 (manual p. 5-11, PDF p. 61)."
  }
 },
 {
  "id": 120,
  "page": "5-11",
  "answer": 0,
  "q": {
   "en": "When is wildlife more active according to the manual?",
   "ru": "Когда, согласно руководству, дикие животные более активны?"
  },
  "opts": [
   {
    "en": "Between dusk and dawn",
    "ru": "В период между сумерками и рассветом"
   },
   {
    "en": "Only at noon",
    "ru": "Только в полдень"
   },
   {
    "en": "Only in heavy traffic",
    "ru": "Только в плотном потоке"
   },
   {
    "en": "Only in parking lots",
    "ru": "Только на парковках"
   }
  ],
  "why": {
   "en": "The manual notes that wildlife is more active between dusk and dawn. Source: Chapter 5, Riding at Night note, p. 5-11 (manual p. 5-11, PDF p. 61).",
   "ru": "Руководство отмечает, что дикие животные более активны в период между сумерками и рассветом. Источник: глава 5, примечание «Riding at Night», p. 5-11 (manual p. 5-11, PDF p. 61)."
  }
 },
 {
  "id": 121,
  "page": "5-12",
  "answer": 0,
  "q": {
   "en": "Where should you look when avoiding a hazard?",
   "ru": "Куда нужно смотреть, объезжая опасность?"
  },
  "opts": [
   {
    "en": "Where you want to go, not at the hazard",
    "ru": "Туда, куда вы хотите ехать, а не на саму опасность"
   },
   {
    "en": "At the hazard",
    "ru": "На опасность"
   },
   {
    "en": "At the ground",
    "ru": "На землю"
   },
   {
    "en": "At the mirrors only",
    "ru": "Только в зеркала"
   }
  ],
  "why": {
   "en": "The manual says to look where you want to go, not at the hazard. Source: Chapter 5, Target Fixation, p. 5-12 (manual p. 5-12, PDF p. 62).",
   "ru": "Руководство предписывает смотреть туда, куда вы хотите ехать, а не на саму опасность. Источник: глава 5, «Target Fixation», p. 5-12 (manual p. 5-12, PDF p. 62)."
  }
 },
 {
  "id": 122,
  "page": "5-12",
  "answer": 0,
  "q": {
   "en": "Should newer riders immediately ride in groups?",
   "ru": "Стоит ли начинающим мотоциклистам сразу ездить в группе?"
  },
  "opts": [
   {
    "en": "No, newer riders should wait and gain experience",
    "ru": "Нет, начинающим стоит подождать и набраться опыта"
   },
   {
    "en": "Yes, always",
    "ru": "Да, всегда"
   },
   {
    "en": "Only at night",
    "ru": "Только ночью"
   },
   {
    "en": "Only in rain",
    "ru": "Только в дождь"
   }
  ],
  "why": {
   "en": "The manual says group riding can be distracting/stressful and newer riders should gain experience first. Source: Chapter 5, Group Riding, p. 5-12 (manual p. 5-12, PDF p. 62).",
   "ru": "В руководстве сказано, что езда в группе может отвлекать и создавать стресс, поэтому начинающим мотоциклистам стоит сначала набраться опыта. Источник: глава 5, «Group Riding», p. 5-12 (manual p. 5-12, PDF p. 62)."
  }
 },
 {
  "id": 123,
  "page": "5-13",
  "answer": 0,
  "q": {
   "en": "Is side-by-side riding by two motorcycles in the same lane legal in Washington?",
   "ru": "Разрешена ли в штате Вашингтон езда двух мотоциклов бок о бок в одной полосе?"
  },
  "opts": [
   {
    "en": "Yes, but it severely reduces time/space cushion",
    "ru": "Да, но это сильно сокращает запас времени и пространства (time/space cushion)"
   },
   {
    "en": "No, never",
    "ru": "Нет, никогда"
   },
   {
    "en": "Only on freeways",
    "ru": "Только на автомагистралях (freeways)"
   },
   {
    "en": "Only with police escort",
    "ru": "Только в сопровождении полиции"
   }
  ],
  "why": {
   "en": "The manual says side-by-side riding is legal in Washington but leaves no place to go and severely impacts the time/space cushion. Source: Chapter 5, Give Each Other Space, p. 5-13 (manual p. 5-13, PDF p. 63).",
   "ru": "В руководстве сказано, что езда бок о бок в штате Вашингтон разрешена, но не оставляет места для манёвра и сильно сокращает запас времени и пространства (time/space cushion). Источник: глава 5, «Give Each Other Space», p. 5-13 (manual p. 5-13, PDF p. 63)."
  }
 },
 {
  "id": 124,
  "page": "5-13",
  "answer": 0,
  "q": {
   "en": "What formation do most two-wheel groups choose to stay close while keeping space?",
   "ru": "Какое построение выбирает большинство групп двухколёсных (2W) мотоциклов, чтобы держаться рядом и при этом сохранять дистанцию?"
  },
  "opts": [
   {
    "en": "Staggered formation",
    "ru": "Шахматное построение (staggered formation)"
   },
   {
    "en": "Side-by-side formation",
    "ru": "Построение бок о бок"
   },
   {
    "en": "Single file at all times",
    "ru": "Постоянное движение в одну колонну"
   },
   {
    "en": "Random formation",
    "ru": "Произвольное построение"
   }
  ],
  "why": {
   "en": "The manual says most groups choose staggered formation to remain close while maintaining adequate space. Source: Chapter 5, Staggered Formation, p. 5-13 (manual p. 5-13, PDF p. 63).",
   "ru": "В руководстве сказано, что большинство групп выбирают шахматное построение (staggered formation), чтобы держаться рядом и при этом сохранять достаточную дистанцию. Источник: глава 5, «Staggered Formation», p. 5-13 (manual p. 5-13, PDF p. 63)."
  }
 },
 {
  "id": 125,
  "page": "5-13",
  "answer": 0,
  "q": {
   "en": "When should a group move to single-file formation?",
   "ru": "Когда группе следует перестроиться в одну колонну (single file)?"
  },
  "opts": [
   {
    "en": "In curves, limited visibility, or where more time/space is needed",
    "ru": "На поворотах, при ограниченной видимости или там, где нужно больше времени и пространства"
   },
   {
    "en": "Only when stopped",
    "ru": "Только на остановке"
   },
   {
    "en": "Never",
    "ru": "Никогда"
   },
   {
    "en": "Only above 80 mph",
    "ru": "Только на скорости выше 80 миль/ч"
   }
  ],
  "why": {
   "en": "The manual says bikes should move to single file in curves, limited visibility, or areas requiring more time and space. Source: Chapter 5, Staggered Formation, p. 5-13 (manual p. 5-13, PDF p. 63).",
   "ru": "В руководстве сказано, что мотоциклам следует перестраиваться в одну колонну на поворотах, при ограниченной видимости или на участках, где требуется больше времени и пространства. Источник: глава 5, «Staggered Formation», p. 5-13 (manual p. 5-13, PDF p. 63)."
  }
 },
 {
  "id": 126,
  "page": "5-13",
  "answer": 0,
  "q": {
   "en": "What minimum following distance should you keep behind the rider in front?",
   "ru": "Какую минимальную дистанцию следования нужно держать за мотоциклистом, едущим впереди?"
  },
  "opts": [
   {
    "en": "Three seconds",
    "ru": "Три секунды"
   },
   {
    "en": "One second",
    "ru": "Одна секунда"
   },
   {
    "en": "Half a second",
    "ru": "Полсекунды"
   },
   {
    "en": "No gap",
    "ru": "Без дистанции"
   }
  ],
  "why": {
   "en": "The manual says to ensure a minimum three-second following distance behind the rider in front. Source: Chapter 5, Staggered Formation, p. 5-13 (manual p. 5-13, PDF p. 63).",
   "ru": "В руководстве сказано держать минимальную дистанцию следования в три секунды за едущим впереди мотоциклистом. Источник: глава 5, «Staggered Formation», p. 5-13 (manual p. 5-13, PDF p. 63)."
  }
 },
 {
  "id": 127,
  "page": "5-13",
  "answer": 0,
  "q": {
   "en": "What should you do if group members ride too fast or dangerously?",
   "ru": "Что делать, если участники группы едут слишком быстро или опасно?"
  },
  "opts": [
   {
    "en": "Do not compromise your safety trying to keep up",
    "ru": "Не жертвовать своей безопасностью, пытаясь не отставать"
   },
   {
    "en": "Always keep up",
    "ru": "Всегда держаться наравне со всеми"
   },
   {
    "en": "Pass everyone",
    "ru": "Обгонять всех"
   },
   {
    "en": "Ride side-by-side",
    "ru": "Ехать бок о бок"
   }
  ],
  "why": {
   "en": "The manual says even in a group, you are responsible for your own safety and should not compromise it to keep up. Source: Chapter 5, Ride Your Own Ride, p. 5-13 (manual p. 5-13, PDF p. 63).",
   "ru": "В руководстве сказано, что даже в группе вы отвечаете за собственную безопасность и не должны жертвовать ею, чтобы не отставать. Источник: глава 5, «Ride Your Own Ride», p. 5-13 (manual p. 5-13, PDF p. 63)."
  }
 },
 {
  "id": 128,
  "page": "6-1",
  "answer": 0,
  "q": {
   "en": "Which substances or conditions can impair riding ability?",
   "ru": "Какие вещества или состояния могут ухудшить способность управлять мотоциклом?"
  },
  "opts": [
   {
    "en": "Alcohol, drugs, medications, devices, fatigue, anger, illness, stress, fear, and group pressure",
    "ru": "Алкоголь, наркотики, лекарства, электронные устройства, усталость, гнев, болезнь, стресс, страх и давление группы"
   },
   {
    "en": "Only illegal drugs",
    "ru": "Только запрещённые наркотики"
   },
   {
    "en": "Only alcohol",
    "ru": "Только алкоголь"
   },
   {
    "en": "Only rain",
    "ru": "Только дождь"
   }
  ],
  "why": {
   "en": "The manual lists chemical, technological, emotional, physical, and group-riding impairments. Source: Chapter 6, Types of Impairments, p. 6-1 (manual p. 6-1, PDF p. 65).",
   "ru": "В руководстве перечислены химические, технологические, эмоциональные, физические факторы и влияние группы при езде. Источник: глава 6, «Types of Impairments», p. 6-1 (manual p. 6-1, PDF p. 65)."
  }
 },
 {
  "id": 129,
  "page": "6-2",
  "answer": 0,
  "q": {
   "en": "When does alcohol impairment begin?",
   "ru": "Когда начинается воздействие алкоголя?"
  },
  "opts": [
   {
    "en": "At the first drink",
    "ru": "С первой порции спиртного"
   },
   {
    "en": "Only at 0.08 BAC",
    "ru": "Только при BAC 0,08"
   },
   {
    "en": "Only after two drinks",
    "ru": "Только после двух порций"
   },
   {
    "en": "Only after a crash",
    "ru": "Только после аварии"
   }
  ],
  "why": {
   "en": "The manual says alcohol quickly affects judgment, vision, attention, and fine-motor skills, and impairment begins at the first drink. Source: Chapter 6, Alcohol and Drugs, p. 6-2 (manual p. 6-2, PDF p. 66).",
   "ru": "В руководстве сказано, что алкоголь быстро влияет на рассудительность, зрение, внимание и мелкую моторику, и его воздействие начинается с первой порции спиртного. Источник: глава 6, «Alcohol and Drugs», p. 6-2 (manual p. 6-2, PDF p. 66)."
  }
 },
 {
  "id": 130,
  "page": "6-2",
  "answer": 0,
  "q": {
   "en": "Is it legal to ride under the influence of alcohol or drugs in Washington?",
   "ru": "Законно ли управлять мотоциклом в состоянии алкогольного или наркотического опьянения в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "No",
    "ru": "Нет"
   },
   {
    "en": "Yes, if under the speed limit",
    "ru": "Да, если не превышать скорость"
   },
   {
    "en": "Yes, with a permit",
    "ru": "Да, при наличии разрешения (permit)"
   },
   {
    "en": "Only on private motorcycles",
    "ru": "Только на частных мотоциклах"
   }
  ],
  "why": {
   "en": "The manual states riding under the influence of alcohol or drugs is illegal in Washington. Source: Chapter 6, Alcohol and Drugs, p. 6-2 (manual p. 6-2, PDF p. 66).",
   "ru": "В руководстве указано, что управление в состоянии алкогольного или наркотического опьянения в штате Вашингтон незаконно. Источник: глава 6, «Alcohol and Drugs», p. 6-2 (manual p. 6-2, PDF p. 66)."
  }
 },
 {
  "id": 131,
  "page": "6-2",
  "answer": 0,
  "q": {
   "en": "How long does alcohol take on average to leave your system per drink?",
   "ru": "Сколько времени в среднем нужно, чтобы алкоголь вывелся из организма, из расчёта на одну порцию спиртного?"
  },
  "opts": [
   {
    "en": "About one hour per drink",
    "ru": "Около одного часа на порцию"
   },
   {
    "en": "10 minutes",
    "ru": "10 минут"
   },
   {
    "en": "Four hours for every drink exactly",
    "ru": "Ровно четыре часа на каждую порцию"
   },
   {
    "en": "Coffee removes it instantly",
    "ru": "Кофе выводит его мгновенно"
   }
  ],
  "why": {
   "en": "The manual states alcohol takes an average of one hour per drink to leave your system. Source: Chapter 6, Alcohol and Drugs, p. 6-2 (manual p. 6-2, PDF p. 66).",
   "ru": "В руководстве указано, что в среднем для вывода алкоголя из организма требуется один час на каждую порцию спиртного. Источник: глава 6, «Alcohol and Drugs», p. 6-2 (manual p. 6-2, PDF p. 66)."
  }
 },
 {
  "id": 132,
  "page": "6-2",
  "answer": 0,
  "q": {
   "en": "What is the only thing that can remove alcohol or its effects from your body?",
   "ru": "Что единственное способно вывести алкоголь или его воздействие из организма?"
  },
  "opts": [
   {
    "en": "Time",
    "ru": "Время"
   },
   {
    "en": "Coffee",
    "ru": "Кофе"
   },
   {
    "en": "Cold shower",
    "ru": "Холодный душ"
   },
   {
    "en": "Food",
    "ru": "Еда"
   }
  ],
  "why": {
   "en": "The manual says only time removes alcohol or its effects; food, coffee, and cold showers do not. Source: Chapter 6, Alcohol and Drugs, p. 6-2 (manual p. 6-2, PDF p. 66).",
   "ru": "В руководстве сказано, что только время выводит алкоголь и его воздействие; еда, кофе и холодный душ не помогают. Источник: глава 6, «Alcohol and Drugs», p. 6-2 (manual p. 6-2, PDF p. 66)."
  }
 },
 {
  "id": 133,
  "page": "6-2",
  "answer": 0,
  "q": {
   "en": "What is considered one drink in the manual?",
   "ru": "Что в руководстве считается одной порцией спиртного?"
  },
  "opts": [
   {
    "en": "12 oz beer, 5 oz wine, or 1.5 oz hard alcohol",
    "ru": "12 унций пива, 5 унций вина или 1,5 унции крепкого алкоголя"
   },
   {
    "en": "Any amount of alcohol",
    "ru": "Любое количество алкоголя"
   },
   {
    "en": "Only one cocktail",
    "ru": "Только один коктейль"
   },
   {
    "en": "Two beers",
    "ru": "Два пива"
   }
  ],
  "why": {
   "en": "The manual defines one drink as a 12 oz beer, 5 oz wine, or 1.5 oz hard alcohol. Source: Chapter 6, Alcohol and Drugs, p. 6-2 (manual p. 6-2, PDF p. 66).",
   "ru": "В руководстве одна порция спиртного определяется как 12 унций пива, 5 унций вина или 1,5 унции крепкого алкоголя. Источник: глава 6, «Alcohol and Drugs», p. 6-2 (manual p. 6-2, PDF p. 66)."
  }
 },
 {
  "id": 134,
  "page": "6-3",
  "answer": 0,
  "q": {
   "en": "What BAC is considered intoxicated for an adult in Washington?",
   "ru": "При каком уровне BAC взрослый считается в состоянии опьянения в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "0.08% or above",
    "ru": "0,08 % или выше"
   },
   {
    "en": "0.10% only",
    "ru": "Только 0,10 %"
   },
   {
    "en": "0.02% for adults",
    "ru": "0,02 % для взрослых"
   },
   {
    "en": "0.00% legally intoxicated",
    "ru": "Опьянение по закону при 0,00 %"
   }
  ],
  "why": {
   "en": "The manual says an adult with BAC of 0.08% or above is considered intoxicated in Washington. Source: Chapter 6, Alcohol and the Law, p. 6-3 (manual p. 6-3, PDF p. 67).",
   "ru": "В руководстве сказано, что взрослый с уровнем BAC 0,08 % или выше считается в состоянии опьянения в штате Вашингтон. Источник: глава 6, «Alcohol and the Law», p. 6-3 (manual p. 6-3, PDF p. 67)."
  }
 },
 {
  "id": 135,
  "page": "6-3",
  "answer": 0,
  "q": {
   "en": "What BAC limit applies to riders under 21 in Washington?",
   "ru": "Какой предел BAC действует для водителей младше 21 года в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "0.02%",
    "ru": "0,02 %"
   },
   {
    "en": "0.08%",
    "ru": "0,08 %"
   },
   {
    "en": "0.10%",
    "ru": "0,10 %"
   },
   {
    "en": "0.15%",
    "ru": "0,15 %"
   }
  ],
  "why": {
   "en": "The manual states lower BAC limits of 0.02% apply for riders under 21. Source: Chapter 6, Alcohol and the Law, p. 6-3 (manual p. 6-3, PDF p. 67).",
   "ru": "В руководстве указано, что для водителей младше 21 года действует пониженный предел BAC — 0,02 %. Источник: глава 6, «Alcohol and the Law», p. 6-3 (manual p. 6-3, PDF p. 67)."
  }
 },
 {
  "id": 136,
  "page": "6-3",
  "answer": 0,
  "q": {
   "en": "How can marijuana affect riding?",
   "ru": "Как марихуана может влиять на управление мотоциклом?"
  },
  "opts": [
   {
    "en": "It slows reactions, inhibits concentration, and distorts time/distance perception",
    "ru": "Замедляет реакцию, ухудшает концентрацию и искажает восприятие времени и расстояния"
   },
   {
    "en": "It improves braking",
    "ru": "Улучшает торможение"
   },
   {
    "en": "It removes fatigue",
    "ru": "Снимает усталость"
   },
   {
    "en": "It makes riders more visible",
    "ru": "Делает мотоциклиста заметнее"
   }
  ],
  "why": {
   "en": "The manual states marijuana slows reactions, inhibits concentration, and distorts perception of time and distance. Source: Chapter 6, Marijuana, p. 6-3 (manual p. 6-3, PDF p. 67).",
   "ru": "В руководстве сказано, что марихуана замедляет реакцию, ухудшает концентрацию и искажает восприятие времени и расстояния. Источник: глава 6, «Marijuana», p. 6-3 (manual p. 6-3, PDF p. 67)."
  }
 },
 {
  "id": 137,
  "page": "6-3",
  "answer": 0,
  "q": {
   "en": "What THC blood concentration is considered impaired in Washington for a person over 21?",
   "ru": "Какая концентрация THC в крови считается состоянием опьянения в штате Вашингтон для лица старше 21 года?"
  },
  "opts": [
   {
    "en": "5 nanograms",
    "ru": "5 нанограммов"
   },
   {
    "en": "0.08%",
    "ru": "0,08 %"
   },
   {
    "en": "12 ounces",
    "ru": "12 унций"
   },
   {
    "en": "One drink",
    "ru": "Одна порция спиртного"
   }
  ],
  "why": {
   "en": "The manual states that impairment for a person over 21 is 5 nanograms of THC blood concentration. Source: Chapter 6, Marijuana, p. 6-3 (manual p. 6-3, PDF p. 67).",
   "ru": "В руководстве указано, что для лица старше 21 года опьянением считается концентрация THC в крови 5 нанограммов. Источник: глава 6, «Marijuana», p. 6-3 (manual p. 6-3, PDF p. 67)."
  }
 },
 {
  "id": 138,
  "page": "6-1",
  "answer": 0,
  "q": {
   "en": "Can music, cell phones, GPS, intercoms, and electronic controls impair riding?",
   "ru": "Могут ли музыка, мобильные телефоны, GPS, переговорные устройства и электронные органы управления ухудшить управление мотоциклом?"
  },
  "opts": [
   {
    "en": "Yes, they can distract and reduce scanning/reaction ability",
    "ru": "Да, они могут отвлекать и снижать способность сканировать обстановку и реагировать"
   },
   {
    "en": "No",
    "ru": "Нет"
   },
   {
    "en": "Only for passengers",
    "ru": "Только для пассажиров"
   },
   {
    "en": "Only below 12 mph",
    "ru": "Только на скорости ниже 12 миль/ч"
   }
  ],
  "why": {
   "en": "The manual lists devices and electronic controls as distractions that can degrade hazard scanning and reaction. Source: Chapter 6, Types of Impairments / Technology, pp. 6-1 and 6-4 (manual p. 6-1, PDF p. 65; manual p. 6-4, PDF p. 68).",
   "ru": "В руководстве устройства и электронные органы управления отнесены к отвлекающим факторам, которые могут ухудшить сканирование опасностей и реакцию. Источник: глава 6, «Types of Impairments / Technology», pp. 6-1 and 6-4 (manual p. 6-1, PDF p. 65; manual p. 6-4, PDF p. 68)."
  }
 },
 {
  "id": 139,
  "page": "2-10",
  "answer": 0,
  "q": {
   "en": "When should you recognize that it may be better not to ride?",
   "ru": "Когда следует признать, что лучше не садиться за руль мотоцикла?"
  },
  "opts": [
   {
    "en": "When angry, ill, tired, emotionally distressed, or distracted",
    "ru": "Когда вы раздражены, больны, устали, эмоционально подавлены или отвлечены"
   },
   {
    "en": "Only when raining",
    "ru": "Только когда идёт дождь"
   },
   {
    "en": "Only when the motorcycle is new",
    "ru": "Только когда мотоцикл новый"
   },
   {
    "en": "Never",
    "ru": "Никогда"
   }
  ],
  "why": {
   "en": "The manual says being a good rider can mean recognizing when not to ride, including when angry, ill, or tired. Source: Chapter 2, Taking Responsibility, p. 2-10; Chapter 6, Body and Emotions, p. 6-4 (manual p. 2-10, PDF p. 24; manual p. 6-4, PDF p. 68).",
   "ru": "В руководстве сказано, что хороший мотоциклист умеет распознать, когда ехать не стоит — в том числе когда он раздражён, болен или устал. Источник: глава 2, «Taking Responsibility», p. 2-10; глава 6, «Body and Emotions», p. 6-4 (manual p. 2-10, PDF p. 24; manual p. 6-4, PDF p. 68)."
  }
 },
 {
  "id": 140,
  "page": "6-5",
  "answer": 0,
  "q": {
   "en": "What should you do when group pressure pushes you beyond your limits?",
   "ru": "Что делать, когда давление группы заставляет вас выходить за пределы своих возможностей?"
  },
  "opts": [
   {
    "en": "Challenge peer pressure and ride within your skill level",
    "ru": "Противостоять давлению окружающих и ехать в пределах своего уровня мастерства"
   },
   {
    "en": "Prove yourself",
    "ru": "Доказывать, на что вы способны"
   },
   {
    "en": "Ride faster",
    "ru": "Ехать быстрее"
   },
   {
    "en": "Ignore your own limits",
    "ru": "Игнорировать собственные пределы"
   }
  ],
  "why": {
   "en": "The manual emphasizes resisting peer pressure and always riding within your skill level. Source: Chapter 6, Peer Pressure / Always Ride Within Your Skill Level, pp. 6-5 to 6-8 (manual p. 6-5, PDF p. 69; manual p. 6-8, PDF p. 72).",
   "ru": "В руководстве подчёркивается необходимость противостоять давлению окружающих и всегда ехать в пределах своего уровня мастерства. Источник: глава 6, «Peer Pressure / Always Ride Within Your Skill Level», pp. 6-5 to 6-8 (manual p. 6-5, PDF p. 69; manual p. 6-8, PDF p. 72)."
  }
 },
 {
  "id": 141,
  "page": "6-7",
  "answer": 0,
  "q": {
   "en": "Who is responsible for keeping you safe when riding?",
   "ru": "Кто отвечает за вашу безопасность во время езды?"
  },
  "opts": [
   {
    "en": "You",
    "ru": "Вы сами"
   },
   {
    "en": "Only other drivers",
    "ru": "Только другие водители"
   },
   {
    "en": "Only the police",
    "ru": "Только полиция"
   },
   {
    "en": "Only the motorcycle manufacturer",
    "ru": "Только производитель мотоцикла"
   }
  ],
  "why": {
   "en": "The manual states there is only one person who can keep you safe when riding: you. Source: Chapter 6, Create Your Own Safety, p. 6-7 (manual p. 6-7, PDF p. 71).",
   "ru": "В руководстве сказано, что есть только один человек, способный обеспечить вашу безопасность во время езды, — это вы сами. Источник: глава 6, «Create Your Own Safety», p. 6-7 (manual p. 6-7, PDF p. 71)."
  }
 },
 {
  "id": 142,
  "page": null,
  "answer": 1,
  "q": {
   "en": "Is lane splitting or lane filtering legal in Washington?",
   "ru": "Законны ли в штате Вашингтон проезд между рядами (lane splitting) и просачивание между рядами (lane filtering)?"
  },
  "opts": [
   {
    "en": "Yes, like California",
    "ru": "Да, как в Калифорнии"
   },
   {
    "en": "No, lane splitting/filtering is not permitted",
    "ru": "Нет, проезд и просачивание между рядами (lane splitting/filtering) запрещены"
   },
   {
    "en": "Only below 35 mph",
    "ru": "Только на скорости ниже 35 миль/ч"
   },
   {
    "en": "Only at red lights",
    "ru": "Только на красный свет"
   }
  ],
  "why": {
   "en": "This answer appears in the uploaded practice subtitles, but I did not find a direct statement in the uploaded Motorcycle Operator Manual. Verify in Title 46 RCW / current WA DOL law before relying on it as legal text. Source: practice subtitle files; not directly located in the uploaded Washington Motorcycle Operator Manual.",
   "ru": "Этот ответ встречается в загруженных учебных субтитрах, но прямого утверждения в загруженном Motorcycle Operator Manual я не нашёл. Перед использованием как юридического текста проверьте Title 46 RCW / действующее законодательство WA DOL. Источник: файлы учебных субтитров; прямо в загруженном Washington Motorcycle Operator Manual не найдено."
  }
 },
 {
  "id": 143,
  "page": null,
  "answer": 1,
  "q": {
   "en": "What should a motorcycle rider do at a yellow light?",
   "ru": "Что должен делать мотоциклист на жёлтый сигнал светофора?"
  },
  "opts": [
   {
    "en": "Always accelerate",
    "ru": "Всегда ускоряться"
   },
   {
    "en": "Stop if it can be done safely before the stop line",
    "ru": "Остановиться, если это можно сделать безопасно перед стоп-линией"
   },
   {
    "en": "Always stop immediately regardless of distance",
    "ru": "Всегда немедленно останавливаться независимо от расстояния"
   },
   {
    "en": "Flash high beam",
    "ru": "Моргнуть дальним светом"
   }
  ],
  "why": {
   "en": "This is a general traffic-signal rule from the practice subtitles. It is not specifically grounded in the uploaded Motorcycle Operator Manual. Source: practice subtitle files; not directly located in the uploaded Washington Motorcycle Operator Manual.",
   "ru": "Это общее правило проезда на сигналы светофора из учебных субтитров. Оно не имеет прямого подтверждения в загруженном Motorcycle Operator Manual. Источник: файлы учебных субтитров; прямо в загруженном Washington Motorcycle Operator Manual не найдено."
  }
 },
 {
  "id": 144,
  "page": null,
  "answer": 2,
  "q": {
   "en": "When encountering a threatening dog, what should you do?",
   "ru": "Что делать при встрече с агрессивной собакой?"
  },
  "opts": [
   {
    "en": "Kick at it",
    "ru": "Пнуть её"
   },
   {
    "en": "Swerve around it immediately",
    "ru": "Немедленно резко объехать её"
   },
   {
    "en": "Slow when approaching, then speed up",
    "ru": "Сбросить скорость при приближении, затем ускориться"
   },
   {
    "en": "Run over it",
    "ru": "Переехать её"
   }
  ],
  "why": {
   "en": "This appears in practice subtitles. I did not find a direct dog-specific instruction in the uploaded Motorcycle Operator Manual. Source: practice subtitle files; not directly located in the uploaded Washington Motorcycle Operator Manual.",
   "ru": "Это встречается в учебных субтитрах. Прямого указания именно про собак в загруженном Motorcycle Operator Manual я не нашёл. Источник: файлы учебных субтитров; прямо в загруженном Washington Motorcycle Operator Manual не найдено."
  }
 },
 {
  "id": 145,
  "page": null,
  "answer": 0,
  "q": {
   "en": "Why should you park your motorcycle in first gear?",
   "ru": "Почему мотоцикл следует парковать на первой передаче?"
  },
  "opts": [
   {
    "en": "To keep it from rolling",
    "ru": "Чтобы он не скатился"
   },
   {
    "en": "To make it louder",
    "ru": "Чтобы он был громче"
   },
   {
    "en": "To drain the oil",
    "ru": "Чтобы слить масло"
   },
   {
    "en": "To improve the headlight",
    "ru": "Чтобы улучшить работу фары"
   }
  ],
  "why": {
   "en": "This is a practical riding/parking item from practice subtitles. I did not find a direct parking-in-first-gear instruction in the uploaded manual. Source: practice subtitle files; not directly located in the uploaded Washington Motorcycle Operator Manual.",
   "ru": "Это практический совет по езде и парковке из учебных субтитров. Прямого указания парковать на первой передаче в загруженном руководстве я не нашёл. Источник: файлы учебных субтитров; прямо в загруженном Washington Motorcycle Operator Manual не найдено."
  }
 },
 {
  "id": 146,
  "page": "2-8",
  "answer": 0,
  "q": {
   "en": "What is the best place to find the correct tire pressure for your tires?",
   "ru": "Где лучше всего найти правильное давление в шинах (tire pressure)?"
  },
  "opts": [
   {
    "en": "Motorcycle owner's manual",
    "ru": "Руководство по эксплуатации мотоцикла (owner's manual)"
   },
   {
    "en": "Tire sidewall maximum only",
    "ru": "Только максимум, указанный на боковине шины"
   },
   {
    "en": "A friend",
    "ru": "У знакомого"
   },
   {
    "en": "The license plate",
    "ru": "На номерном знаке"
   }
  ],
  "why": {
   "en": "The Motorcycle Operator Manual says the owner's manual is the primary source for specifications and maintenance, but this exact tire-pressure question comes from practice subtitles. Source: manual p. 2-8, PDF p. 22; practice subtitle files.",
   "ru": "В руководстве сказано, что именно руководство по эксплуатации (owner's manual) — основной источник характеристик и сведений по обслуживанию, но конкретно этот вопрос о давлении в шинах взят из учебных субтитров. Источник: manual p. 2-8, PDF p. 22; practice subtitle files."
  }
 },
 {
  "id": 147,
  "page": "5-8",
  "answer": 0,
  "q": {
   "en": "What is hydroplaning?",
   "ru": "Что такое аквапланирование (hydroplaning)?"
  },
  "opts": [
   {
    "en": "Water building under the tread and causing loss of traction",
    "ru": "Вода скапливается под протектором и вызывает потерю сцепления"
   },
   {
    "en": "Too much oil in the engine",
    "ru": "Слишком много масла в двигателе"
   },
   {
    "en": "Cold hands while riding",
    "ru": "Замёрзшие руки во время езды"
   },
   {
    "en": "Riding in a group",
    "ru": "Езда в группе"
   }
  ],
  "why": {
   "en": "This is general wet-road terminology from practice subtitles. The uploaded manual discusses slippery/wet surfaces but does not directly define hydroplaning in the available text. Source: manual p. 5-8, PDF p. 59; practice subtitle files.",
   "ru": "Это общий термин для мокрой дороги из учебных субтитров. В загруженном руководстве обсуждаются скользкие и мокрые поверхности, но прямого определения аквапланирования (hydroplaning) в доступном тексте нет. Источник: manual p. 5-8, PDF p. 59; practice subtitle files."
  }
 },
 {
  "id": 148,
  "page": "6-2",
  "answer": 0,
  "q": {
   "en": "What is the safest blood alcohol level for motorcycle operation?",
   "ru": "Какой уровень алкоголя в крови безопаснее всего для управления мотоциклом?"
  },
  "opts": [
   {
    "en": "0.00%",
    "ru": "0,00%"
   },
   {
    "en": "0.02%",
    "ru": "0,02%"
   },
   {
    "en": "0.04%",
    "ru": "0,04%"
   },
   {
    "en": "0.08%",
    "ru": "0,08%"
   }
  ],
  "why": {
   "en": "The manual says alcohol impairment begins at the first drink and advises never to ride impaired; the exact 0.00% wording is from the practice subtitles. Source: manual p. 6-2, PDF p. 66; practice subtitle files.",
   "ru": "В руководстве сказано, что ухудшение состояния от алкоголя начинается с первой порции, и настоятельно рекомендуется никогда не садиться за руль в нетрезвом виде; точная формулировка 0,00% взята из учебных субтитров. Источник: manual p. 6-2, PDF p. 66; practice subtitle files."
  }
 },
 {
  "id": 149,
  "page": "3-11",
  "answer": 0,
  "q": {
   "en": "What is the minimum age for a motorcycle passenger in Washington State?",
   "ru": "Каков минимальный возраст пассажира мотоцикла в штате Вашингтон?"
  },
  "opts": [
   {
    "en": "At least 5 years old",
    "ru": "Не младше 5 лет"
   },
   {
    "en": "At least 8 years old",
    "ru": "Не младше 8 лет"
   },
   {
    "en": "At least 12 years old",
    "ru": "Не младше 12 лет"
   },
   {
    "en": "Any age with parental consent",
    "ru": "Любой возраст с согласия родителей"
   }
  ],
  "why": {
   "en": "The manual states that any passenger carried on a two- or three-wheeled motorcycle in Washington State must be at least five years old. Source: Washington Motorcycle Operator Manual, Carrying Passengers and Cargo, manual p. 3-11, PDF p. 37.",
   "ru": "В руководстве сказано, что любой пассажир двух- или трёхколёсного мотоцикла в штате Вашингтон должен быть не младше пяти лет. Источник: Washington Motorcycle Operator Manual, «Carrying Passengers and Cargo», manual p. 3-11, PDF p. 37."
  }
 },
 {
  "id": 150,
  "page": "3-11",
  "answer": 0,
  "q": {
   "en": "What equipment must a motorcycle passenger have in Washington?",
   "ru": "Какое снаряжение должно быть у пассажира мотоцикла в Вашингтоне?"
  },
  "opts": [
   {
    "en": "Passenger seat, footboards or pegs, and a DOT-compliant helmet",
    "ru": "Пассажирское сиденье, подножки или упоры для ног и шлем, соответствующий стандарту DOT"
   },
   {
    "en": "Only a helmet",
    "ru": "Только шлем"
   },
   {
    "en": "Only handholds",
    "ru": "Только поручни"
   },
   {
    "en": "Only a passenger seat",
    "ru": "Только пассажирское сиденье"
   }
  ],
  "why": {
   "en": "The manual states that passengers must have a passenger seat, footboards or pegs, and must wear a DOT-compliant helmet. Source: Washington Motorcycle Operator Manual, Carrying Passengers and Cargo, manual p. 3-11, PDF p. 37.",
   "ru": "В руководстве сказано, что у пассажира должны быть пассажирское сиденье, подножки или упоры для ног, а также шлем, соответствующий стандарту DOT. Источник: Washington Motorcycle Operator Manual, «Carrying Passengers and Cargo», manual p. 3-11, PDF p. 37."
  }
 },
 {
  "id": 151,
  "page": "3-11",
  "answer": 0,
  "q": {
   "en": "When should a passenger mount the motorcycle?",
   "ru": "Когда пассажир должен садиться на мотоцикл?"
  },
  "opts": [
   {
    "en": "After the rider",
    "ru": "После водителя"
   },
   {
    "en": "Before the rider",
    "ru": "Перед водителем"
   },
   {
    "en": "Only after the engine is off",
    "ru": "Только после выключения двигателя"
   },
   {
    "en": "At the same time as the rider",
    "ru": "Одновременно с водителем"
   }
  ],
  "why": {
   "en": "The manual states that a passenger should always mount after the rider to help keep the motorcycle stabilized. Source: Washington Motorcycle Operator Manual, Carrying Passengers and Cargo, manual p. 3-11, PDF p. 37.",
   "ru": "В руководстве сказано, что пассажир всегда должен садиться после водителя, чтобы помочь удерживать мотоцикл в устойчивом положении. Источник: Washington Motorcycle Operator Manual, «Carrying Passengers and Cargo», manual p. 3-11, PDF p. 37."
  }
 },
 {
  "id": 152,
  "page": "3-11",
  "answer": 0,
  "q": {
   "en": "When should a passenger dismount the motorcycle?",
   "ru": "Когда пассажир должен сходить с мотоцикла?"
  },
  "opts": [
   {
    "en": "Before the rider",
    "ru": "Перед водителем"
   },
   {
    "en": "After the rider",
    "ru": "После водителя"
   },
   {
    "en": "Only after removing the helmet",
    "ru": "Только после того, как снимет шлем"
   },
   {
    "en": "At the same time as the rider",
    "ru": "Одновременно с водителем"
   }
  ],
  "why": {
   "en": "The manual states that a passenger should dismount before the rider to help keep the bike stabilized. Source: Washington Motorcycle Operator Manual, Carrying Passengers and Cargo, manual p. 3-11, PDF p. 37.",
   "ru": "В руководстве сказано, что пассажир должен сходить с мотоцикла перед водителем, чтобы помочь удерживать мотоцикл в устойчивом положении. Источник: Washington Motorcycle Operator Manual, «Carrying Passengers and Cargo», manual p. 3-11, PDF p. 37."
  }
 },
 {
  "id": 153,
  "page": "3-11",
  "answer": 0,
  "q": {
   "en": "After a passenger is seated, what should the rider adjust?",
   "ru": "Что водитель должен отрегулировать после того, как пассажир сядет?"
  },
  "opts": [
   {
    "en": "Mirrors",
    "ru": "Зеркала"
   },
   {
    "en": "License plate",
    "ru": "Номерной знак"
   },
   {
    "en": "Helmet sticker",
    "ru": "Наклейку на шлеме"
   },
   {
    "en": "Fuel cap",
    "ru": "Крышку бензобака"
   }
  ],
  "why": {
   "en": "The manual instructs riders to adjust mirrors after passengers are seated. Source: Washington Motorcycle Operator Manual, Carrying Passengers and Cargo, manual p. 3-11, PDF p. 37.",
   "ru": "Руководство предписывает водителю отрегулировать зеркала после того, как пассажир сядет. Источник: Washington Motorcycle Operator Manual, «Carrying Passengers and Cargo», manual p. 3-11, PDF p. 37."
  }
 },
 {
  "id": 154,
  "page": "3-11",
  "answer": 0,
  "q": {
   "en": "Where should the rider check maximum safe load and possible tire-pressure or suspension adjustments?",
   "ru": "Где водителю следует проверить максимально допустимую нагрузку и возможные настройки давления в шинах или подвески?"
  },
  "opts": [
   {
    "en": "The motorcycle owner's manual",
    "ru": "В руководстве по эксплуатации мотоцикла (owner's manual)"
   },
   {
    "en": "The license plate only",
    "ru": "Только на номерном знаке"
   },
   {
    "en": "The passenger's helmet label",
    "ru": "На бирке шлема пассажира"
   },
   {
    "en": "The gas cap",
    "ru": "На крышке бензобака"
   }
  ],
  "why": {
   "en": "The manual states that the owner's manual tells how much weight can be safely carried and may suggest tire pressure or suspension adjustments for passengers or cargo. Source: Washington Motorcycle Operator Manual, Carrying Passengers and Cargo, manual p. 3-11, PDF p. 37.",
   "ru": "В руководстве сказано, что руководство по эксплуатации (owner's manual) указывает, какой вес можно безопасно перевозить, и может рекомендовать настройки давления в шинах или подвески при перевозке пассажира или груза. Источник: Washington Motorcycle Operator Manual, «Carrying Passengers and Cargo», manual p. 3-11, PDF p. 37."
  }
 },
 {
  "id": 155,
  "page": "1-6",
  "answer": 0,
  "q": {
   "en": "When transferring an out-of-state driver license to Washington, what must you tell DOL staff if you also want the motorcycle endorsement transferred?",
   "ru": "При переоформлении водительских прав (driver license) другого штата в Вашингтоне — что нужно сообщить сотрудникам DOL, если вы хотите перенести и мотоциклетный допуск (endorsement)?"
  },
  "opts": [
   {
    "en": "That you want to transfer the motorcycle endorsement",
    "ru": "Что вы хотите перенести мотоциклетный допуск (endorsement)"
   },
   {
    "en": "That you want only a car license",
    "ru": "Что вам нужны только автомобильные права"
   },
   {
    "en": "That you want a CDL",
    "ru": "Что вам нужен CDL"
   },
   {
    "en": "That you want a temporary waiver",
    "ru": "Что вам нужно временное освобождение (waiver)"
   }
  ],
  "why": {
   "en": "The manual states that when transferring an out-of-state driver license with a valid motorcycle endorsement to Washington, you must tell DOL staff that you also want to transfer the endorsement. Source: Washington Motorcycle Operator Manual, Transferring from Out-of-State, manual p. 1-6, PDF p. 14.",
   "ru": "В руководстве сказано, что при переоформлении водительских прав другого штата с действующим мотоциклетным допуском (endorsement) в Вашингтоне нужно сообщить сотрудникам DOL, что вы хотите перенести и допуск (endorsement). Источник: Washington Motorcycle Operator Manual, «Transferring from Out-of-State», manual p. 1-6, PDF p. 14."
  }
 },
 {
  "id": 156,
  "page": "1-6",
  "answer": 0,
  "q": {
   "en": "What must you present to transfer a two-wheel motorcycle endorsement from out of state?",
   "ru": "Что нужно предъявить, чтобы перенести допуск (endorsement) на двухколёсный (2W) мотоцикл из другого штата?"
  },
  "opts": [
   {
    "en": "A current and valid two-wheel motorcycle endorsement",
    "ru": "Действующий и актуальный допуск (endorsement) на двухколёсный (2W) мотоцикл"
   },
   {
    "en": "Only proof of insurance",
    "ru": "Только подтверждение страховки (insurance)"
   },
   {
    "en": "Only a motorcycle bill of sale",
    "ru": "Только договор купли-продажи мотоцикла"
   },
   {
    "en": "Only a helmet",
    "ru": "Только шлем"
   }
  ],
  "why": {
   "en": "The manual states that to get a two-wheel endorsement when transferring from out of state, you must present a current and valid two-wheel motorcycle endorsement. Source: Washington Motorcycle Operator Manual, Transferring from Out-of-State, manual p. 1-6, PDF p. 14.",
   "ru": "В руководстве сказано, что для получения допуска (endorsement) на двухколёсный мотоцикл при переоформлении из другого штата нужно предъявить действующий и актуальный допуск (endorsement) на двухколёсный (2W) мотоцикл. Источник: Washington Motorcycle Operator Manual, «Transferring from Out-of-State», manual p. 1-6, PDF p. 14."
  }
 },
 {
  "id": 157,
  "page": "1-6",
  "answer": 0,
  "q": {
   "en": "What documentation issue can prevent a three-wheel endorsement from transferring as three-wheel only?",
   "ru": "Какая проблема с документами может помешать перенести допуск (endorsement) на трёхколёсный мотоцикл именно как трёхколёсный?"
  },
  "opts": [
   {
    "en": "No proof of a separate and distinct three-wheel test",
    "ru": "Отсутствие подтверждения отдельного и самостоятельного теста на трёхколёсный мотоцикл"
   },
   {
    "en": "No proof of helmet color",
    "ru": "Отсутствие подтверждения цвета шлема"
   },
   {
    "en": "No proof of daytime riding",
    "ru": "Отсутствие подтверждения езды в дневное время"
   },
   {
    "en": "No proof of motorcycle brand",
    "ru": "Отсутствие подтверждения марки мотоцикла"
   }
  ],
  "why": {
   "en": "The manual states that if documentation does not show a separate and distinct three-wheel test, only a two-wheel endorsement will be offered. Source: Washington Motorcycle Operator Manual, Transferring from Out-of-State, manual p. 1-6, PDF p. 14.",
   "ru": "В руководстве сказано, что если в документах не указан отдельный и самостоятельный тест на трёхколёсный мотоцикл, будет предложен только допуск (endorsement) на двухколёсный мотоцикл. Источник: Washington Motorcycle Operator Manual, «Transferring from Out-of-State», manual p. 1-6, PDF p. 14."
  }
 },
 {
  "id": 158,
  "page": "3-3",
  "answer": 0,
  "q": {
   "en": "What does the clutch lever do?",
   "ru": "Что делает рычаг сцепления (clutch lever)?"
  },
  "opts": [
   {
    "en": "Removes or controls engine power to the rear wheel",
    "ru": "Отключает или регулирует подачу мощности двигателя на заднее колесо"
   },
   {
    "en": "Turns on the headlight",
    "ru": "Включает фару"
   },
   {
    "en": "Applies only the rear brake",
    "ru": "Задействует только задний тормоз"
   },
   {
    "en": "Changes tire pressure",
    "ru": "Меняет давление в шинах"
   }
  ],
  "why": {
   "en": "The manual explains that the clutch helps control the amount of power given to the rear wheel. Source: Washington Motorcycle Operator Manual, Clutch Control and Shifting Gears, manual p. 3-3, PDF p. 29.",
   "ru": "В руководстве объясняется, что сцепление помогает регулировать количество мощности, подаваемой на заднее колесо. Источник: Washington Motorcycle Operator Manual, «Clutch Control and Shifting Gears», manual p. 3-3, PDF p. 29."
  }
 },
 {
  "id": 159,
  "page": "3-3",
  "answer": 0,
  "q": {
   "en": "What is the friction zone?",
   "ru": "Что такое зона пробуксовки сцепления (friction zone)?"
  },
  "opts": [
   {
    "en": "The point where clutch release begins transferring power to the rear wheel",
    "ru": "Момент, когда отпускание сцепления начинает передавать мощность на заднее колесо"
   },
   {
    "en": "The area where tires slide on gravel",
    "ru": "Участок, где шины скользят по гравию"
   },
   {
    "en": "The area of a helmet that absorbs impact",
    "ru": "Часть шлема, поглощающая удар"
   },
   {
    "en": "The part of a road with lane markings",
    "ru": "Участок дороги с разметкой полос"
   }
  ],
  "why": {
   "en": "The manual discusses clutch control and how the clutch controls power to the rear wheel; the exact term 'friction zone' comes from the practice subtitles. Source: Washington Motorcycle Operator Manual, Clutch Control and Shifting Gears, manual p. 3-3, PDF p. 29; practice subtitle files.",
   "ru": "В руководстве обсуждается управление сцеплением и то, как сцепление регулирует подачу мощности на заднее колесо; точный термин «friction zone» взят из учебных субтитров. Источник: Washington Motorcycle Operator Manual, «Clutch Control and Shifting Gears», manual p. 3-3, PDF p. 29; practice subtitle files."
  }
 },
 {
  "id": 160,
  "page": "3-9",
  "answer": 0,
  "q": {
   "en": "What is threshold braking?",
   "ru": "Что такое торможение на грани блокировки (threshold braking)?"
  },
  "opts": [
   {
    "en": "Using both brakes progressively just before wheel lock",
    "ru": "Постепенное использование обоих тормозов прямо перед блокировкой колеса"
   },
   {
    "en": "Using only the rear brake",
    "ru": "Использование только заднего тормоза"
   },
   {
    "en": "Barely touching the brakes",
    "ru": "Едва заметное касание тормозов"
   },
   {
    "en": "Using the engine cut-off switch to stop",
    "ru": "Использование аварийного выключателя двигателя для остановки"
   }
  ],
  "why": {
   "en": "The manual supports the concept by saying to apply both brakes fully without locking either wheel; the exact term 'threshold braking' comes from practice subtitles. Source: Washington Motorcycle Operator Manual, Quick Stops, manual p. 3-9, PDF p. 35; practice subtitle files.",
   "ru": "Руководство подтверждает эту идею, рекомендуя задействовать оба тормоза полностью, не блокируя ни одно колесо; точный термин «threshold braking» взят из учебных субтитров. Источник: Washington Motorcycle Operator Manual, «Quick Stops», manual p. 3-9, PDF p. 35; practice subtitle files."
  }
 },
 {
  "id": 161,
  "page": "3-8",
  "answer": 0,
  "q": {
   "en": "About how much stopping power does the front brake provide on a cruiser-type motorcycle according to the practice subtitles?",
   "ru": "Какую примерно долю тормозной силы обеспечивает передний тормоз на мотоцикле типа cruiser согласно учебным субтитрам?"
  },
  "opts": [
   {
    "en": "About 70 percent",
    "ru": "Около 70 процентов"
   },
   {
    "en": "About 10 percent",
    "ru": "Около 10 процентов"
   },
   {
    "en": "About 30 percent",
    "ru": "Около 30 процентов"
   },
   {
    "en": "100 percent",
    "ru": "100 процентов"
   }
  ],
  "why": {
   "en": "The manual states that the front brake has more braking power because weight transfers forward; the exact 70 percent cruiser figure comes from the practice subtitles. Source: Washington Motorcycle Operator Manual, Braking in a Straight Line, manual p. 3-8, PDF p. 34; practice subtitle files.",
   "ru": "В руководстве сказано, что передний тормоз обладает большей тормозной силой, потому что вес переносится вперёд; точная цифра в 70 процентов для cruiser взята из учебных субтитров. Источник: Washington Motorcycle Operator Manual, «Braking in a Straight Line», manual p. 3-8, PDF p. 34; practice subtitle files."
  }
 },
 {
  "id": 162,
  "page": "3-8",
  "answer": 0,
  "q": {
   "en": "About how much stopping power does the rear brake provide on a sport bike according to the practice subtitles?",
   "ru": "Какую примерно долю тормозной силы обеспечивает задний тормоз на спортивном мотоцикле (sport bike) согласно учебным субтитрам?"
  },
  "opts": [
   {
    "en": "About 10 percent",
    "ru": "Около 10 процентов"
   },
   {
    "en": "About 30 percent",
    "ru": "Около 30 процентов"
   },
   {
    "en": "About 50 percent",
    "ru": "Около 50 процентов"
   },
   {
    "en": "About 80 percent",
    "ru": "Около 80 процентов"
   }
  ],
  "why": {
   "en": "The manual explains that more braking power is in the front brake; the exact 10 percent sport-bike rear-brake figure comes from the practice subtitles. Source: Washington Motorcycle Operator Manual, Braking in a Straight Line, manual p. 3-8, PDF p. 34; practice subtitle files.",
   "ru": "В руководстве объясняется, что большая часть тормозной силы приходится на передний тормоз; точная цифра в 10 процентов для заднего тормоза спортивного мотоцикла взята из учебных субтитров. Источник: Washington Motorcycle Operator Manual, «Braking in a Straight Line», manual p. 3-8, PDF p. 34; practice subtitle files."
  }
 },
 {
  "id": 163,
  "page": "3-10",
  "answer": 0,
  "q": {
   "en": "Swerving around an obstacle generally occurs at speeds above what speed according to the practice subtitles?",
   "ru": "На скорости выше какого значения, как правило, выполняется объезд препятствия (swerve) согласно учебным субтитрам?"
  },
  "opts": [
   {
    "en": "20 mph",
    "ru": "20 миль/ч"
   },
   {
    "en": "10 mph",
    "ru": "10 миль/ч"
   },
   {
    "en": "30 mph",
    "ru": "30 миль/ч"
   },
   {
    "en": "45 mph",
    "ru": "45 миль/ч"
   }
  ],
  "why": {
   "en": "The manual explains how swerves work and when a swerve may be safer than a quick stop, but the exact 20 mph threshold comes from the practice subtitles. Source: Washington Motorcycle Operator Manual, Swerves, manual p. 3-10, PDF p. 36; practice subtitle files.",
   "ru": "В руководстве объясняется, как выполняется объезд (swerve) и когда он может быть безопаснее быстрой остановки, но точный порог в 20 миль/ч взят из учебных субтитров. Источник: Washington Motorcycle Operator Manual, «Swerves», manual p. 3-10, PDF p. 36; practice subtitle files."
  }
 },
 {
  "id": 164,
  "page": "3-10",
  "answer": 0,
  "q": {
   "en": "Which actions should be avoided while swerving?",
   "ru": "Что нельзя делать во время объезда (swerve)?"
  },
  "opts": [
   {
    "en": "Braking, accelerating, and excessive body lean",
    "ru": "Тормозить, ускоряться и чрезмерно наклонять корпус"
   },
   {
    "en": "Only looking where you want to go",
    "ru": "Только смотреть туда, куда хотите ехать"
   },
   {
    "en": "Keeping the body upright",
    "ru": "Держать корпус вертикально"
   },
   {
    "en": "Countersteering twice",
    "ru": "Дважды выполнять контрруление (countersteering)"
   }
  ],
  "why": {
   "en": "The manual states to never swerve and brake at the same time and to keep the body upright and centered; the full combined answer including acceleration comes from the practice subtitles. Source: Washington Motorcycle Operator Manual, Swerves, manual p. 3-10, PDF p. 36; practice subtitle files.",
   "ru": "В руководстве сказано никогда не выполнять объезд (swerve) и торможение одновременно и держать корпус вертикально и по центру; полный объединённый ответ, включая ускорение, взят из учебных субтитров. Источник: Washington Motorcycle Operator Manual, «Swerves», manual p. 3-10, PDF p. 36; practice subtitle files."
  }
 },
 {
  "id": 165,
  "page": "3-1",
  "answer": 0,
  "q": {
   "en": "What is the best way for a beginner to improve stability when starting from a stop?",
   "ru": "Как новичку лучше всего повысить устойчивость при трогании с места?"
  },
  "opts": [
   {
    "en": "Power-walk if needed, keep eyes up, and ease out the clutch smoothly",
    "ru": "При необходимости помочь себе ногами, держать взгляд поднятым и плавно отпускать сцепление"
   },
   {
    "en": "Look down at the front wheel",
    "ru": "Смотреть вниз на переднее колесо"
   },
   {
    "en": "Pop the clutch quickly",
    "ru": "Резко бросить сцепление"
   },
   {
    "en": "Drag both feet at speed",
    "ru": "Волочить обе ноги на скорости"
   }
  ],
  "why": {
   "en": "The manual supports keeping head and eyes up and practicing clutch control; the exact beginner-starting checklist comes from the practice subtitles. Source: Washington Motorcycle Operator Manual, Riding Posture, manual p. 3-1, PDF p. 27; Clutch Control, manual p. 3-3, PDF p. 29; practice subtitle files.",
   "ru": "Руководство поддерживает рекомендацию держать голову и взгляд поднятыми и отрабатывать управление сцеплением; точный список действий для новичка при трогании взят из учебных субтитров. Источник: Washington Motorcycle Operator Manual, «Riding Posture», manual p. 3-1, PDF p. 27; «Clutch Control», manual p. 3-3, PDF p. 29; practice subtitle files."
  }
 },
 {
  "id": 166,
  "page": null,
  "answer": 0,
  "q": {
   "en": "What is hazardous about starting off uphill?",
   "ru": "Чем опасно трогание с места на подъёме?"
  },
  "opts": [
   {
    "en": "Rolling backward",
    "ru": "Скатывание назад"
   },
   {
    "en": "The headlight becoming too bright",
    "ru": "Слишком яркий свет фары"
   },
   {
    "en": "The helmet visor fogging instantly",
    "ru": "Мгновенное запотевание визора шлема"
   },
   {
    "en": "The horn not working",
    "ru": "Неработающий клаксон"
   }
  ],
  "why": {
   "en": "This hill-start hazard appears in the practice subtitles; I did not locate this exact two-wheel hill-start item in the uploaded Washington manual. Source: Practice subtitle files; not directly located in the uploaded Washington Motorcycle Operator Manual.",
   "ru": "Эта опасность трогания с места на подъёме встречается в субтитрах практических материалов; точного пункта про трогание двухколёсного (2W) мотоцикла на подъёме в загруженном руководстве штата Вашингтон я не нашёл. Источник: субтитры практических материалов (Practice subtitle files); прямо в загруженном Washington Motorcycle Operator Manual не обнаружено."
  }
 },
 {
  "id": 167,
  "page": "3-3",
  "answer": 0,
  "q": {
   "en": "What is the most effective way to maintain balance at very slow speeds according to the practice subtitles?",
   "ru": "Как наиболее эффективно удерживать равновесие на очень малой скорости согласно субтитрам практических материалов?"
  },
  "opts": [
   {
    "en": "Use controlled momentum with throttle, friction zone, and rear brake",
    "ru": "Использовать контролируемую тягу: газ (throttle), зону пробуксовки сцепления (friction zone) и задний тормоз"
   },
   {
    "en": "Keep the throttle closed and coast",
    "ru": "Полностью закрыть газ и катиться накатом"
   },
   {
    "en": "Drag both feet as the main control",
    "ru": "Волочить обе ноги, используя их как основной способ управления"
   },
   {
    "en": "Turn the handlebars hard and stop",
    "ru": "Резко вывернуть руль и остановиться"
   }
  ],
  "why": {
   "en": "The manual supports clutch control and low-speed practice, but this exact slow-speed balance formula comes from the practice subtitles. Source: Washington Motorcycle Operator Manual, Clutch Control and Shifting Gears, manual p. 3-3, PDF p. 29; practice subtitle files.",
   "ru": "Руководство поддерживает работу со сцеплением и тренировку на малой скорости, но именно этот приём удержания равновесия взят из субтитров практических материалов. Источник: Washington Motorcycle Operator Manual, «Clutch Control and Shifting Gears», manual p. 3-3, PDF p. 29; субтитры практических материалов (Practice subtitle files)."
  }
 },
 {
  "id": 168,
  "page": "3-4",
  "answer": 0,
  "q": {
   "en": "When is counterweighting used according to the practice subtitles?",
   "ru": "Когда применяется контрбаланс (counterweighting) согласно субтитрам практических материалов?"
  },
  "opts": [
   {
    "en": "In low-speed tight turns",
    "ru": "В крутых поворотах на малой скорости"
   },
   {
    "en": "In every high-speed curve",
    "ru": "В каждом повороте на высокой скорости"
   },
   {
    "en": "Only during emergency braking",
    "ru": "Только при экстренном торможении"
   },
   {
    "en": "Only while changing lanes",
    "ru": "Только при смене полосы"
   }
  ],
  "why": {
   "en": "This exact two-wheel counterweighting question comes from the practice subtitles. The uploaded manual emphasizes leaning with the motorcycle for normal two-wheel cornering and does not present this exact counterweighting item in the two-wheel section. Source: Practice subtitle files; compare Washington Motorcycle Operator Manual, Cornering, manual p. 3-4, PDF p. 30.",
   "ru": "Именно этот вопрос про контрбаланс (counterweighting) на двухколёсном (2W) мотоцикле взят из субтитров практических материалов. Загруженное руководство для обычного прохождения поворотов на двух колёсах рекомендует наклоняться вместе с мотоциклом и не содержит именно этого пункта про контрбаланс в разделе про двухколёсный транспорт. Источник: субтитры практических материалов (Practice subtitle files); сравните Washington Motorcycle Operator Manual, «Cornering», manual p. 3-4, PDF p. 30."
  }
 },
 {
  "id": 169,
  "page": "3-11",
  "answer": 0,
  "q": {
   "en": "How should a passenger sit on the motorcycle according to the practice subtitles?",
   "ru": "Как пассажир должен сидеть на мотоцикле согласно субтитрам практических материалов?"
  },
  "opts": [
   {
    "en": "Close to the rider and holding on without restricting the rider",
    "ru": "Близко к водителю и держась, но не сковывая его движений"
   },
   {
    "en": "On the tank",
    "ru": "На бензобаке"
   },
   {
    "en": "On the fender",
    "ru": "На заднем крыле"
   },
   {
    "en": "Far back and leaning away",
    "ru": "Далеко сзади, отклоняясь в сторону"
   }
  ],
  "why": {
   "en": "The manual says passengers should lean with the rider, keep movements to a minimum, and use the required passenger equipment; the exact sitting/holding wording comes from practice subtitles. Source: Washington Motorcycle Operator Manual, Carrying Passengers and Cargo, manual p. 3-11, PDF p. 37; practice subtitle files.",
   "ru": "Руководство указывает, что пассажир должен наклоняться вместе с водителем, сводить движения к минимуму и использовать необходимое для пассажира снаряжение; точная формулировка про посадку и удержание взята из субтитров практических материалов. Источник: Washington Motorcycle Operator Manual, «Carrying Passengers and Cargo», manual p. 3-11, PDF p. 37; субтитры практических материалов (Practice subtitle files)."
  }
 },
 {
  "id": 170,
  "page": "3-10",
  "answer": 0,
  "q": {
   "en": "How does carrying a passenger affect starting, stopping, and passing?",
   "ru": "Как перевозка пассажира влияет на старт, остановку и обгон?"
  },
  "opts": [
   {
    "en": "Slower takeoffs, longer stops, and more time needed for passing",
    "ru": "Более медленный разгон, более длинный тормозной путь и больше времени на обгон"
   },
   {
    "en": "Faster takeoffs and shorter stops",
    "ru": "Более быстрый разгон и более короткий тормозной путь"
   },
   {
    "en": "No handling effect",
    "ru": "Никак не влияет на управляемость"
   },
   {
    "en": "Only the horn changes",
    "ru": "Меняется только звук клаксона"
   }
  ],
  "why": {
   "en": "The manual states that additional passenger/cargo weight may make acceleration and stopping take longer; the passing part comes from the practice subtitles. Source: Washington Motorcycle Operator Manual, Swerves / Carrying Passengers and Cargo, manual p. 3-10, PDF p. 36; practice subtitle files.",
   "ru": "Руководство указывает, что дополнительный вес пассажира или груза может увеличивать время разгона и остановки; часть про обгон взята из субтитров практических материалов. Источник: Washington Motorcycle Operator Manual, «Swerves / Carrying Passengers and Cargo», manual p. 3-10, PDF p. 36; субтитры практических материалов (Practice subtitle files)."
  }
 },
 {
  "id": 171,
  "page": "3-8",
  "answer": 0,
  "q": {
   "en": "What is the most effective way to stop quickly in a straight line?",
   "ru": "Как наиболее эффективно быстро остановиться, двигаясь по прямой?"
  },
  "opts": [
   {
    "en": "Use both brakes progressively without skidding",
    "ru": "Плавно и с нарастающим усилием задействовать оба тормоза, не допуская заноса"
   },
   {
    "en": "Use only the rear brake",
    "ru": "Использовать только задний тормоз"
   },
   {
    "en": "Use only the front brake abruptly",
    "ru": "Резко нажать только на передний тормоз"
   },
   {
    "en": "Use only engine braking",
    "ru": "Использовать только торможение двигателем"
   }
  ],
  "why": {
   "en": "The manual states that the shortest and safest stops are obtained by using both front and rear brakes smoothly and progressively without skidding either tire. Source: Washington Motorcycle Operator Manual, Braking in a Straight Line, manual p. 3-8, PDF p. 34.",
   "ru": "Руководство указывает, что самая короткая и безопасная остановка достигается плавным и постепенно нарастающим нажатием на передний и задний тормоза, без срыва колёс в занос. Источник: Washington Motorcycle Operator Manual, «Braking in a Straight Line», manual p. 3-8, PDF p. 34."
  }
 },
 {
  "id": 172,
  "page": "2-1",
  "answer": 0,
  "q": {
   "en": "What is the main cause pattern of motorcycle crashes according to the manual's risk discussion?",
   "ru": "Какова основная схема причин мотоциклетных аварий согласно разделу руководства о рисках?"
  },
  "opts": [
   {
    "en": "Several risk factors stacking up at one time",
    "ru": "Несколько факторов риска, наложившихся одновременно"
   },
   {
    "en": "Only other drivers",
    "ru": "Только другие водители"
   },
   {
    "en": "Only bad tires",
    "ru": "Только плохие шины"
   },
   {
    "en": "Only riding at night",
    "ru": "Только езда ночью"
   }
  ],
  "why": {
   "en": "The manual states that the majority of motorcycle crashes involve several risk factors stacking up at one time. Source: Washington Motorcycle Operator Manual, Create Your Own Safety, manual p. 2-1, PDF p. 15.",
   "ru": "Руководство указывает, что большинство мотоциклетных аварий связано с одновременным наложением нескольких факторов риска. Источник: Washington Motorcycle Operator Manual, «Create Your Own Safety», manual p. 2-1, PDF p. 15."
  }
 },
 {
  "id": 173,
  "page": "2-1",
  "answer": 0,
  "q": {
   "en": "Why does riding a motorcycle create different risks than driving a car?",
   "ru": "Почему езда на мотоцикле создаёт иные риски, чем управление автомобилем?"
  },
  "opts": [
   {
    "en": "Less protection, different stability, less traction reserve, more weather exposure, and lower visibility",
    "ru": "Меньше защиты, иная устойчивость, меньший запас сцепления (traction), сильнее воздействие погоды и хуже заметность"
   },
   {
    "en": "Because motorcycles always have more airbags",
    "ru": "Потому что у мотоциклов всегда больше подушек безопасности"
   },
   {
    "en": "Because motorcycles cannot use roads",
    "ru": "Потому что мотоциклам нельзя выезжать на дороги"
   },
   {
    "en": "Because cars cannot turn",
    "ru": "Потому что автомобили не могут поворачивать"
   }
  ],
  "why": {
   "en": "The manual lists protection, stability, traction, comfort, and visibility as risk factors that make riding different from driving. Source: Washington Motorcycle Operator Manual, Create Your Own Safety, manual p. 2-1, PDF p. 15.",
   "ru": "Руководство перечисляет защиту, устойчивость, сцепление (traction), комфорт и заметность как факторы риска, которые отличают езду на мотоцикле от вождения автомобиля. Источник: Washington Motorcycle Operator Manual, «Create Your Own Safety», manual p. 2-1, PDF p. 15."
  }
 },
 {
  "id": 174,
  "page": "2-5",
  "answer": 0,
  "q": {
   "en": "How can riding gear make the rider more comfortable?",
   "ru": "Как экипировка (riding gear) помогает водителю чувствовать себя комфортнее?"
  },
  "opts": [
   {
    "en": "By helping manage airflow, cold, rain, heat, and distraction",
    "ru": "Помогая справляться с потоком воздуха, холодом, дождём, жарой и отвлекающими факторами"
   },
   {
    "en": "By replacing the need to scan traffic",
    "ru": "Избавляя от необходимости следить за движением"
   },
   {
    "en": "By allowing higher speed in curves",
    "ru": "Позволяя ехать быстрее в поворотах"
   },
   {
    "en": "By making braking unnecessary",
    "ru": "Делая торможение ненужным"
   }
  ],
  "why": {
   "en": "The manual explains that jacket, pants, and weather gear can reduce cold, heat, dehydration, fatigue, and distraction so the rider can focus on riding safely. Source: Washington Motorcycle Operator Manual, Jacket and Pants / Comfort and Weather Protection, manual pp. 2-5 to 2-6, PDF pp. 19-20.",
   "ru": "Руководство объясняет, что куртка, штаны и погодная экипировка снижают холод, жару, обезвоживание, усталость и отвлекающие факторы, чтобы водитель мог сосредоточиться на безопасной езде. Источник: Washington Motorcycle Operator Manual, «Jacket and Pants / Comfort and Weather Protection», manual pp. 2-5 to 2-6, PDF pp. 19-20."
  }
 },
 {
  "id": 175,
  "page": "2-6",
  "answer": 0,
  "q": {
   "en": "Is in-ear hearing protection legal in Washington?",
   "ru": "Разрешена ли в штате Вашингтон внутриушная защита слуха?"
  },
  "opts": [
   {
    "en": "Yes, ear plugs are legal, but in-ear speakers are not",
    "ru": "Да, беруши (ear plugs) разрешены, а внутриушные динамики (in-ear speakers) — нет"
   },
   {
    "en": "No, all ear protection is illegal",
    "ru": "Нет, любая защита слуха запрещена"
   },
   {
    "en": "Only speakers are legal",
    "ru": "Разрешены только динамики"
   },
   {
    "en": "Only cotton is legal",
    "ru": "Разрешена только вата"
   }
  ],
  "why": {
   "en": "The manual notes that in-ear hearing protection is legal in Washington, but in-ear speakers are not. Source: Washington Motorcycle Operator Manual, Hearing Protection, manual p. 2-6, PDF p. 20.",
   "ru": "Руководство отмечает, что внутриушная защита слуха в штате Вашингтон разрешена, а внутриушные динамики (in-ear speakers) — нет. Источник: Washington Motorcycle Operator Manual, «Hearing Protection», manual p. 2-6, PDF p. 20."
  }
 },
 {
  "id": 176,
  "page": "6-1",
  "answer": 0,
  "q": {
   "en": "If a rider takes medication that causes dizziness, what should the rider do?",
   "ru": "Что следует сделать водителю, если он принимает лекарство, вызывающее головокружение?"
  },
  "opts": [
   {
    "en": "Not ride until they know it will not impair them",
    "ru": "Не садиться за руль, пока не убедится, что лекарство не ухудшит способность управлять"
   },
   {
    "en": "Ride only slowly",
    "ru": "Ехать только медленно"
   },
   {
    "en": "Ride only at night",
    "ru": "Ехать только ночью"
   },
   {
    "en": "Use the horn continuously",
    "ru": "Постоянно сигналить клаксоном"
   }
  ],
  "why": {
   "en": "The manual states that medications can degrade riding abilities and that some medications can affect riding ability as much as alcohol and illegal drugs. Source: Washington Motorcycle Operator Manual, Types of Impairments / Alcohol and Drugs, manual pp. 6-1 to 6-2, PDF pp. 65-66.",
   "ru": "Руководство указывает, что лекарства могут ухудшать способность управлять мотоциклом и что некоторые из них влияют на неё так же сильно, как алкоголь и запрещённые наркотики. Источник: Washington Motorcycle Operator Manual, «Types of Impairments / Alcohol and Drugs», manual pp. 6-1 to 6-2, PDF pp. 65-66."
  }
 },
 {
  "id": 177,
  "page": "6-4",
  "answer": 0,
  "q": {
   "en": "What should a rider do if electronics, GPS, music, or intercom distract them?",
   "ru": "Что следует делать водителю, если его отвлекает электроника, GPS, музыка или интерком (intercom)?"
  },
  "opts": [
   {
    "en": "Reduce or avoid the distraction so focus stays on traffic and hazards",
    "ru": "Уменьшить или устранить отвлекающий фактор, чтобы внимание оставалось на дороге и опасностях"
   },
   {
    "en": "Turn up the volume",
    "ru": "Сделать звук громче"
   },
   {
    "en": "Look at the screen longer",
    "ru": "Дольше смотреть на экран"
   },
   {
    "en": "Ignore traffic until the device is adjusted",
    "ru": "Не следить за движением, пока не настроит устройство"
   }
  ],
  "why": {
   "en": "The manual states that GPS, cell phones, headsets, music, intercoms, and electronic controls can distract riders and degrade hazard identification. Source: Washington Motorcycle Operator Manual, Technology, manual p. 6-4, PDF p. 68.",
   "ru": "Руководство указывает, что GPS, сотовые телефоны, гарнитуры, музыка, интеркомы (intercoms) и электронные органы управления могут отвлекать водителя и ухудшать распознавание опасностей. Источник: Washington Motorcycle Operator Manual, «Technology», manual p. 6-4, PDF p. 68."
  }
 },
 {
  "id": 178,
  "page": "6-1",
  "answer": 0,
  "q": {
   "en": "What should a rider do when negative emotions, fatigue, illness, stress, or fear affect riding?",
   "ru": "Что следует делать водителю, когда на езду влияют негативные эмоции, усталость, болезнь, стресс или страх?"
  },
  "opts": [
   {
    "en": "Recognize the impairment and consider not riding",
    "ru": "Признать ухудшение состояния и подумать о том, чтобы не ехать"
   },
   {
    "en": "Ride faster to get home",
    "ru": "Ехать быстрее, чтобы скорее добраться домой"
   },
   {
    "en": "Ignore the feeling",
    "ru": "Игнорировать это ощущение"
   },
   {
    "en": "Join a faster group",
    "ru": "Присоединиться к более быстрой группе"
   }
  ],
  "why": {
   "en": "The manual states that emotional and physical states such as fatigue, anger, illness, stress, and fear can impair riding skills. Source: Washington Motorcycle Operator Manual, Types of Impairments / Body and Emotions, manual pp. 6-1 and 6-4, PDF pp. 65 and 68.",
   "ru": "Руководство указывает, что эмоциональные и физические состояния — усталость, гнев, болезнь, стресс и страх — могут ухудшать навыки управления мотоциклом. Источник: Washington Motorcycle Operator Manual, «Types of Impairments / Body and Emotions», manual pp. 6-1 and 6-4, PDF pp. 65 and 68."
  }
 },
 {
  "id": 179,
  "page": "6-5",
  "answer": 0,
  "q": {
   "en": "What is the safest response to peer pressure to prove yourself on a motorcycle?",
   "ru": "Как безопаснее всего реагировать на давление окружающих (peer pressure), подталкивающее что-то доказывать на мотоцикле?"
  },
  "opts": [
   {
    "en": "Resist it and ride within your own limits",
    "ru": "Противостоять ему и ехать в пределах собственных возможностей"
   },
   {
    "en": "Speed up to keep the group happy",
    "ru": "Прибавить скорость, чтобы угодить группе"
   },
   {
    "en": "Hold your formation at all costs",
    "ru": "Любой ценой держать строй"
   },
   {
    "en": "Buy a bigger motorcycle immediately",
    "ru": "Немедленно купить мотоцикл побольше"
   }
  ],
  "why": {
   "en": "The manual tells riders to identify peer pressure, resist the impulse to react to it, and not succumb to pressure to prove themselves. Source: Washington Motorcycle Operator Manual, Peer Pressure / Challenge Peer Pressure, manual pp. 6-5 to 6-7, PDF pp. 69-71.",
   "ru": "Руководство советует распознавать давление окружающих (peer pressure), сдерживать порыв поддаться ему и не уступать стремлению что-то доказывать. Источник: Washington Motorcycle Operator Manual, «Peer Pressure / Challenge Peer Pressure», manual pp. 6-5 to 6-7, PDF pp. 69-71."
  }
 },
 {
  "id": 180,
  "page": "6-5",
  "answer": 0,
  "q": {
   "en": "What should be discussed before a group ride?",
   "ru": "Что нужно обсудить перед групповой поездкой?"
  },
  "opts": [
   {
    "en": "Riders' experience, comfort level, skill level, and riding experience",
    "ru": "Опыт участников, уровень комфорта, уровень навыков и стаж езды"
   },
   {
    "en": "Only the restaurant destination",
    "ru": "Только ресторан, куда едут"
   },
   {
    "en": "Only motorcycle colors",
    "ru": "Только цвет мотоциклов"
   },
   {
    "en": "Only gas prices",
    "ru": "Только цены на бензин"
   }
  ],
  "why": {
   "en": "The manual lists pre-ride discussion topics for group rides, including how long each person has been riding, comfort level, skill level, and riding experience. Source: Washington Motorcycle Operator Manual, Peer Pressure, manual p. 6-5, PDF p. 69.",
   "ru": "Руководство перечисляет темы для обсуждения перед групповой поездкой, включая то, как давно каждый ездит, уровень комфорта, уровень навыков и стаж езды. Источник: Washington Motorcycle Operator Manual, «Peer Pressure», manual p. 6-5, PDF p. 69."
  }
 },
 {
  "id": 181,
  "page": null,
  "answer": 0,
  "q": {
   "en": "What should a rider do if an oncoming driver does not dim their high beams?",
   "ru": "Что следует сделать водителю, если встречный водитель не переключает дальний свет на ближний?"
  },
  "opts": [
   {
    "en": "Still dim your own lights; do not create two blinded drivers",
    "ru": "Всё равно переключить свой свет на ближний; не создавать двух ослеплённых водителей"
   },
   {
    "en": "Keep high beam on to punish them",
    "ru": "Оставить дальний свет, чтобы проучить его"
   },
   {
    "en": "Aim at the driver",
    "ru": "Направить свет прямо на встречного водителя"
   },
   {
    "en": "Close your eyes briefly",
    "ru": "Ненадолго закрыть глаза"
   }
  ],
  "why": {
   "en": "This exact high-beam courtesy question comes from the practice subtitles; I did not locate this exact statement in the uploaded Washington manual. Source: Practice subtitle files; not directly located in the uploaded Washington Motorcycle Operator Manual.",
   "ru": "Именно этот вопрос про вежливость с дальним светом взят из субтитров практических материалов; точной такой формулировки в загруженном руководстве штата Вашингтон я не нашёл. Источник: субтитры практических материалов (Practice subtitle files); прямо в загруженном Washington Motorcycle Operator Manual не обнаружено."
  }
 },
 {
  "id": 182,
  "page": "2-10",
  "answer": 0,
  "q": {
   "en": "During daytime, what headlight setting do some practice tests recommend for visibility if it does not interfere with other drivers?",
   "ru": "Какой режим фары некоторые практические тесты рекомендуют днём для заметности, если это не мешает другим водителям?"
  },
  "opts": [
   {
    "en": "High beam",
    "ru": "Дальний свет"
   },
   {
    "en": "Off",
    "ru": "Выключенная фара"
   },
   {
    "en": "Parking light only",
    "ru": "Только габаритный огонь"
   },
   {
    "en": "Flashing continuously",
    "ru": "Постоянное мигание"
   }
  ],
  "why": {
   "en": "The manual tells riders to use the headlight and choose visible lane positions, but the exact daytime-high-beam answer comes from practice subtitles. Source: Washington Motorcycle Operator Manual, Taking Responsibility, manual p. 2-10, PDF p. 24; practice subtitle files.",
   "ru": "Руководство советует использовать фару и выбирать заметное положение в полосе, но именно ответ про дневной дальний свет взят из субтитров практических материалов. Источник: Washington Motorcycle Operator Manual, «Taking Responsibility», manual p. 2-10, PDF p. 24; субтитры практических материалов (Practice subtitle files)."
  }
 },
 {
  "id": 183,
  "page": null,
  "answer": 0,
  "q": {
   "en": "What should a rider do in a crosswind according to the practice subtitles?",
   "ru": "Что следует делать водителю при боковом ветре (crosswind) согласно субтитрам практических материалов?"
  },
  "opts": [
   {
    "en": "Use steering pressure into the wind",
    "ru": "Давить на руль в сторону ветра"
   },
   {
    "en": "Use only the rear brake",
    "ru": "Использовать только задний тормоз"
   },
   {
    "en": "Ride with feet down",
    "ru": "Ехать с опущенными ногами"
   },
   {
    "en": "Close the throttle and stop immediately",
    "ru": "Закрыть газ и немедленно остановиться"
   }
  ],
  "why": {
   "en": "This exact crosswind-control item comes from the practice subtitles; I did not locate this exact statement in the uploaded Washington manual. Source: Practice subtitle files; not directly located in the uploaded Washington Motorcycle Operator Manual.",
   "ru": "Именно этот пункт про управление при боковом ветре (crosswind) взят из субтитров практических материалов; точной такой формулировки в загруженном руководстве штата Вашингтон я не нашёл. Источник: субтитры практических материалов (Practice subtitle files); прямо в загруженном Washington Motorcycle Operator Manual не обнаружено."
  }
 },
 {
  "id": 184,
  "page": null,
  "answer": 0,
  "q": {
   "en": "What should a rider do when a large truck's wind blast pushes or pulls the motorcycle?",
   "ru": "Что следует делать водителю, когда воздушный поток от большого грузовика толкает или тянет мотоцикл?"
  },
  "opts": [
   {
    "en": "Grip the handlebars firmly and be prepared for turbulence",
    "ru": "Крепко держать руль и быть готовым к турбулентности"
   },
   {
    "en": "Brake hard immediately",
    "ru": "Немедленно резко затормозить"
   },
   {
    "en": "Move to the shoulder",
    "ru": "Съехать на обочину"
   },
   {
    "en": "Close eyes until it passes",
    "ru": "Закрыть глаза, пока это не пройдёт"
   }
  ],
  "why": {
   "en": "This truck-wind-blast item comes from the practice subtitles; I did not locate this exact statement in the uploaded Washington manual. Source: Practice subtitle files; not directly located in the uploaded Washington Motorcycle Operator Manual.",
   "ru": "Этот пункт про воздушный поток от грузовика взят из субтитров практических материалов; точной такой формулировки в загруженном руководстве штата Вашингтон я не нашёл. Источник: субтитры практических материалов (Practice subtitle files); прямо в загруженном Washington Motorcycle Operator Manual не обнаружено."
  }
 },
 {
  "id": 185,
  "page": "3-1",
  "answer": 0,
  "q": {
   "en": "If a motorcycle has a serious safety-equipment defect, what should the rider do?",
   "ru": "Что следует сделать водителю, если у мотоцикла серьёзная неисправность оборудования безопасности?"
  },
  "opts": [
   {
    "en": "Not operate it on public roads until corrected",
    "ru": "Не выезжать на нём на дороги общего пользования, пока неисправность не устранена"
   },
   {
    "en": "Ride only below 35 mph",
    "ru": "Ехать только медленнее 35 миль/ч (mph)"
   },
   {
    "en": "Ignore it if the engine starts",
    "ru": "Игнорировать её, если двигатель заводится"
   },
   {
    "en": "Ride only at night",
    "ru": "Ехать только ночью"
   }
  ],
  "why": {
   "en": "This practice question is consistent with the manual's required equipment and pre-ride inspection sections, but the exact 'do not operate until corrected' wording comes from practice subtitles. Source: Washington Motorcycle Operator Manual, Required Equipment, manual p. 3-1, PDF p. 27; Checking Your Motorcycle, manual p. 2-9, PDF p. 23; practice subtitle files.",
   "ru": "Этот практический вопрос согласуется с разделами руководства об обязательном оборудовании и предрейсовом осмотре, но точная формулировка «не эксплуатировать, пока не устранено» взята из субтитров практических материалов. Источник: Washington Motorcycle Operator Manual, «Required Equipment», manual p. 3-1, PDF p. 27; «Checking Your Motorcycle», manual p. 2-9, PDF p. 23; субтитры практических материалов (Practice subtitle files)."
  }
 },
 {
  "id": 186,
  "page": "6-3",
  "answer": 0,
  "q": {
   "en": "If a motorcycle endorsement is suspended, what must the rider do?",
   "ru": "Что должен сделать мотоциклист, если мотоциклетный допуск (endorsement) приостановлен (suspended)?"
  },
  "opts": [
   {
    "en": "Stop riding on public roads until the suspension is resolved",
    "ru": "Прекратить езду по дорогам общего пользования, пока приостановка не будет снята"
   },
   {
    "en": "Ride only in daylight",
    "ru": "Ездить только в светлое время суток"
   },
   {
    "en": "Ride only below 35 mph",
    "ru": "Ездить только со скоростью ниже 35 миль/ч"
   },
   {
    "en": "Continue riding because suspension affects only cars",
    "ru": "Продолжать ездить, так как приостановка касается только автомобилей"
   }
  ],
  "why": {
   "en": "This license-suspension practice question is not directly located in the uploaded manual; the manual only lists license suspension as a DUI-conviction consequence. Source: Washington Motorcycle Operator Manual, Consequences of Conviction, manual p. 6-3, PDF p. 67; practice subtitle files.",
   "ru": "Этот вопрос о приостановке прав напрямую в загруженном руководстве не приводится; руководство упоминает приостановку прав лишь как одно из последствий осуждения за вождение в нетрезвом виде (DUI). Источник: Washington Motorcycle Operator Manual, «Consequences of Conviction», manual p. 6-3, PDF p. 67; practice subtitle files."
  }
 },
 {
  "id": 187,
  "page": null,
  "answer": 0,
  "q": {
   "en": "When entering Washington from another state, which traffic laws must a motorcycle rider follow?",
   "ru": "Какие правила дорожного движения должен соблюдать мотоциклист, въезжая в штат Вашингтон из другого штата?"
  },
  "opts": [
   {
    "en": "Washington traffic laws immediately",
    "ru": "Правила дорожного движения штата Вашингтон — сразу же"
   },
   {
    "en": "Only the laws from the rider's home state",
    "ru": "Только правила своего родного штата"
   },
   {
    "en": "Only federal speed limits",
    "ru": "Только федеральные ограничения скорости"
   },
   {
    "en": "No helmet law until stopping",
    "ru": "Закон о шлеме не действует до остановки"
   }
  ],
  "why": {
   "en": "This general legal principle comes from practice subtitles; the uploaded manual is Washington-specific but does not state this exact crossing-state-line rule. Source: Practice subtitle files; not directly located in the uploaded Washington Motorcycle Operator Manual.",
   "ru": "Этот общий правовой принцип взят из practice subtitles; загруженное руководство относится именно к штату Вашингтон и не содержит этого конкретного правила о пересечении границы штата. Источник: Practice subtitle files; напрямую в загруженном Washington Motorcycle Operator Manual не найдено."
  }
 },
 {
  "id": 188,
  "page": "2-10",
  "answer": 0,
  "q": {
   "en": "What best describes responsible riders according to MSF-style practice material?",
   "ru": "Что лучше всего описывает ответственных мотоциклистов согласно учебному материалу в стиле MSF?"
  },
  "opts": [
   {
    "en": "They ride aware, make critical decisions, and carry them out",
    "ru": "Они едут осознанно, принимают важные решения и выполняют их"
   },
   {
    "en": "They always ride the fastest",
    "ru": "Они всегда едут быстрее всех"
   },
   {
    "en": "They depend only on ABS",
    "ru": "Они полагаются только на ABS"
   },
   {
    "en": "They never take training",
    "ru": "Они никогда не проходят обучение"
   }
  ],
  "why": {
   "en": "This exact phrase comes from practice subtitles; the uploaded manual supports the same concept by emphasizing awareness, identifying hazards, evaluating 'what if,' and being prepared. Source: Washington Motorcycle Operator Manual, Taking Responsibility, manual pp. 2-10 to 2-11, PDF pp. 24-25; practice subtitle files.",
   "ru": "Эта формулировка взята дословно из practice subtitles; загруженное руководство подтверждает ту же мысль, подчёркивая осознанность, выявление опасностей, оценку «что если» (what if) и готовность к действию. Источник: Washington Motorcycle Operator Manual, «Taking Responsibility», manual pp. 2-10 to 2-11, PDF pp. 24-25; practice subtitle files."
  }
 },
 {
  "id": 189,
  "page": "2-2",
  "answer": 0,
  "q": {
   "en": "Which agency sets the minimum federal safety standards for motorcycle helmets sold in the United States?",
   "ru": "Какое ведомство устанавливает минимальные федеральные стандарты безопасности для мотоциклетных шлемов, продаваемых в США?"
  },
  "opts": [
   {
    "en": "Department of Transportation",
    "ru": "Министерство транспорта (Department of Transportation)"
   },
   {
    "en": "National Safety Council",
    "ru": "Национальный совет безопасности (National Safety Council)"
   },
   {
    "en": "Consumer Product Safety Commission",
    "ru": "Комиссия по безопасности потребительских товаров (Consumer Product Safety Commission)"
   },
   {
    "en": "Federal Motor Carrier Safety Administration",
    "ru": "Федеральное управление безопасности грузоперевозок (Federal Motor Carrier Safety Administration)"
   }
  ],
  "why": {
   "en": "The manual requires DOT-compliant helmets but does not frame this as an agency-definition question; the agency wording comes from practice subtitles. Source: Washington Motorcycle Operator Manual, Helmets, manual p. 2-2, PDF p. 16; practice subtitle files.",
   "ru": "Руководство требует шлемы, соответствующие стандарту DOT, но не подаёт это как вопрос об определении ведомства; формулировка про ведомство взята из practice subtitles. Источник: Washington Motorcycle Operator Manual, «Helmets», manual p. 2-2, PDF p. 16; practice subtitle files."
  }
 },
 {
  "id": 190,
  "page": "5-12",
  "answer": 0,
  "q": {
   "en": "What is target fixation?",
   "ru": "Что такое фиксация взгляда на цели (target fixation)?"
  },
  "opts": [
   {
    "en": "Staring at an object or area so intently that you end up moving toward it",
    "ru": "Когда вы смотрите на объект или участок настолько пристально, что в итоге начинаете двигаться к нему"
   },
   {
    "en": "Looking 12 seconds ahead",
    "ru": "Взгляд на 12 секунд вперёд"
   },
   {
    "en": "Checking mirrors",
    "ru": "Проверка зеркал"
   },
   {
    "en": "Scanning intersections",
    "ru": "Осмотр перекрёстков"
   }
  ],
  "why": {
   "en": "The manual defines target fixation as staring at an object or area so intently that you end up moving toward it. Source: Washington Motorcycle Operator Manual, Target Fixation, manual p. 5-12, PDF p. 62.",
   "ru": "Руководство определяет target fixation как состояние, когда вы смотрите на объект или участок настолько пристально, что в итоге начинаете двигаться к нему. Источник: Washington Motorcycle Operator Manual, «Target Fixation», manual p. 5-12, PDF p. 62."
  }
 },
 {
  "id": 191,
  "page": null,
  "answer": 0,
  "q": {
   "en": "At a four-way stop, if two vehicles arrive at the same time and the motorcycle is on the left, who goes first?",
   "ru": "На перекрёстке со знаками STOP по всем направлениям (four-way stop), если два транспортных средства подъезжают одновременно и мотоцикл находится слева, кто проезжает первым?"
  },
  "opts": [
   {
    "en": "The vehicle on the right",
    "ru": "Транспортное средство справа"
   },
   {
    "en": "The motorcycle because it is smaller",
    "ru": "Мотоцикл, потому что он меньше"
   },
   {
    "en": "The larger vehicle",
    "ru": "Более крупное транспортное средство"
   },
   {
    "en": "Both go together",
    "ru": "Оба едут одновременно"
   }
  ],
  "why": {
   "en": "This general traffic-law question comes from practice subtitles; it is not directly located in the uploaded Washington Motorcycle Operator Manual. Source: Practice subtitle files; not directly located in the uploaded Washington Motorcycle Operator Manual.",
   "ru": "Этот общий вопрос по правилам дорожного движения взят из practice subtitles; напрямую в загруженном Washington Motorcycle Operator Manual он не найден. Источник: Practice subtitle files; напрямую в загруженном Washington Motorcycle Operator Manual не найдено."
  }
 },
 {
  "id": 192,
  "page": null,
  "answer": 0,
  "q": {
   "en": "What does ABS stand for?",
   "ru": "Как расшифровывается ABS?"
  },
  "opts": [
   {
    "en": "Anti-lock Braking System",
    "ru": "Антиблокировочная тормозная система (Anti-lock Braking System)"
   },
   {
    "en": "Automatic Balance System",
    "ru": "Автоматическая система баланса (Automatic Balance System)"
   },
   {
    "en": "Advanced Battery Switch",
    "ru": "Усовершенствованный переключатель аккумулятора (Advanced Battery Switch)"
   },
   {
    "en": "Air Brake Sensor",
    "ru": "Датчик пневматического тормоза (Air Brake Sensor)"
   }
  ],
  "why": {
   "en": "This definition appears in the practice subtitles; the uploaded manual discusses braking technique but does not provide this exact ABS definition. Source: Practice subtitle files; not directly located in the uploaded Washington Motorcycle Operator Manual.",
   "ru": "Это определение приведено в practice subtitles; загруженное руководство рассматривает технику торможения, но не даёт именно этого определения ABS. Источник: Practice subtitle files; напрямую в загруженном Washington Motorcycle Operator Manual не найдено."
  }
 },
 {
  "id": 193,
  "page": null,
  "answer": 0,
  "q": {
   "en": "Where is neutral on most motorcycles?",
   "ru": "Где находится нейтральная передача (neutral) на большинстве мотоциклов?"
  },
  "opts": [
   {
    "en": "Between first and second gear",
    "ru": "Между первой и второй передачей"
   },
   {
    "en": "Below first gear",
    "ru": "Ниже первой передачи"
   },
   {
    "en": "Above top gear",
    "ru": "Выше высшей передачи"
   },
   {
    "en": "Between second and third gear",
    "ru": "Между второй и третьей передачей"
   }
  ],
  "why": {
   "en": "This is general motorcycle-control knowledge from the practice subtitles; I did not locate this exact neutral-position statement in the uploaded Washington manual. Source: Practice subtitle files; not directly located in the uploaded Washington Motorcycle Operator Manual.",
   "ru": "Это общие сведения об управлении мотоциклом из practice subtitles; именно этого утверждения о положении нейтральной передачи в загруженном руководстве штата Вашингтон я не нашёл. Источник: Practice subtitle files; напрямую в загруженном Washington Motorcycle Operator Manual не найдено."
  }
 },
 {
  "id": 194,
  "page": null,
  "answer": 0,
  "q": {
   "en": "What does the tachometer show?",
   "ru": "Что показывает тахометр?"
  },
  "opts": [
   {
    "en": "Engine speed in RPM",
    "ru": "Частоту вращения двигателя в оборотах в минуту (RPM)"
   },
   {
    "en": "Road speed in MPH",
    "ru": "Скорость движения в милях в час (MPH)"
   },
   {
    "en": "Fuel level",
    "ru": "Уровень топлива"
   },
   {
    "en": "Tire pressure",
    "ru": "Давление в шинах"
   }
  ],
  "why": {
   "en": "This is general motorcycle-control knowledge from the practice subtitles; I did not locate this exact tachometer definition in the uploaded Washington manual. Source: Practice subtitle files; not directly located in the uploaded Washington Motorcycle Operator Manual.",
   "ru": "Это общие сведения об управлении мотоциклом из practice subtitles; именно этого определения тахометра в загруженном руководстве штата Вашингтон я не нашёл. Источник: Practice subtitle files; напрямую в загруженном Washington Motorcycle Operator Manual не найдено."
  }
 },
 {
  "id": 195,
  "page": "2-4",
  "answer": 0,
  "q": {
   "en": "What qualities must effective eye or face shield protection have?",
   "ru": "Какими качествами должна обладать эффективная защита глаз или лицевой щиток (face shield)?"
  },
  "opts": [
   {
    "en": "Clear view, penetration resistance, secure fastening, scratch-free surface, airflow, and room for glasses if needed",
    "ru": "Чёткий обзор, стойкость к пробиванию, надёжное крепление, поверхность без царапин, приток воздуха и место для очков при необходимости"
   },
   {
    "en": "Only dark tint",
    "ru": "Только тёмная тонировка"
   },
   {
    "en": "Only a plastic color",
    "ru": "Только цвет пластика"
   },
   {
    "en": "Only DOT letters",
    "ru": "Только буквы DOT"
   }
  ],
  "why": {
   "en": "The manual lists effective eye/face shield requirements: free of scratches, resistant to penetration, clear view to front and sides, secure fastening, airflow to reduce fogging, and room for eyeglasses or sunglasses if needed. Source: Washington Motorcycle Operator Manual, Eye Protection, manual pp. 2-4 to 2-5, PDF pp. 18-19.",
   "ru": "Руководство перечисляет требования к эффективной защите глаз/лицевому щитку: отсутствие царапин, стойкость к пробиванию, чёткий обзор вперёд и в стороны, надёжное крепление, приток воздуха для уменьшения запотевания и место для очков или солнцезащитных очков при необходимости. Источник: Washington Motorcycle Operator Manual, «Eye Protection», manual pp. 2-4 to 2-5, PDF pp. 18-19."
  }
 },
 {
  "id": 196,
  "page": "2-8",
  "answer": 0,
  "q": {
   "en": "Why should new riders start on motorcycles that are smaller and lighter?",
   "ru": "Почему начинающим мотоциклистам стоит начинать с мотоциклов поменьше и полегче?"
  },
  "opts": [
   {
    "en": "They can be easier to control, less intimidating, and easier to maneuver",
    "ru": "Ими легче управлять, они меньше пугают и проще в маневрировании"
   },
   {
    "en": "They are always faster",
    "ru": "Они всегда быстрее"
   },
   {
    "en": "They do not need inspection",
    "ru": "Они не требуют техосмотра"
   },
   {
    "en": "They do not need insurance",
    "ru": "Они не требуют страховки (insurance)"
   }
  ],
  "why": {
   "en": "The manual recommends that new riders start on motorcycles that are smaller and lighter because they can be easier to control, less intimidating, and easier to maneuver. Source: Washington Motorcycle Operator Manual, Choosing the Right Motorcycle, manual p. 2-8, PDF p. 22.",
   "ru": "Руководство рекомендует начинающим мотоциклистам начинать с мотоциклов поменьше и полегче, потому что ими легче управлять, они меньше пугают и проще в маневрировании. Источник: Washington Motorcycle Operator Manual, «Choosing the Right Motorcycle», manual p. 2-8, PDF p. 22."
  }
 },
 {
  "id": 197,
  "page": "2-8",
  "answer": 0,
  "q": {
   "en": "Why should you practice controls on an unfamiliar motorcycle in a safe area?",
   "ru": "Почему органы управления незнакомого мотоцикла стоит осваивать в безопасном месте?"
  },
  "opts": [
   {
    "en": "Unfamiliar controls can distract you and distracted riding can lead to a crash",
    "ru": "Незнакомые органы управления могут отвлекать, а езда с отвлечённым вниманием может привести к аварии"
   },
   {
    "en": "It makes the motorcycle louder",
    "ru": "Это делает мотоцикл громче"
   },
   {
    "en": "It replaces the need for a helmet",
    "ru": "Это заменяет необходимость в шлеме"
   },
   {
    "en": "It changes the license plate",
    "ru": "Это меняет номерной знак"
   }
  ],
  "why": {
   "en": "The manual states that unfamiliar controls can be a big distraction and distracted riding can lead to a crash, so riders should practice in an empty, safe area. Source: Washington Motorcycle Operator Manual, Getting to Know Your Motorcycle, manual p. 2-8, PDF p. 22.",
   "ru": "Руководство указывает, что незнакомые органы управления могут сильно отвлекать, а езда с отвлечённым вниманием может привести к аварии, поэтому осваивать их следует на пустой, безопасной площадке. Источник: Washington Motorcycle Operator Manual, «Getting to Know Your Motorcycle», manual p. 2-8, PDF p. 22."
  }
 },
 {
  "id": 198,
  "page": "2-6",
  "answer": 0,
  "q": {
   "en": "What should riders do with boot or shoe laces?",
   "ru": "Что мотоциклисту следует делать со шнурками ботинок или обуви?"
  },
  "opts": [
   {
    "en": "Tuck them in so they do not catch on parts of the bike",
    "ru": "Заправлять их, чтобы они не цеплялись за части мотоцикла"
   },
   {
    "en": "Leave them loose for airflow",
    "ru": "Оставлять их свободными для притока воздуха"
   },
   {
    "en": "Tie them to the shifter",
    "ru": "Привязывать их к рычагу переключения передач"
   },
   {
    "en": "Remove all footwear",
    "ru": "Снимать всю обувь"
   }
  ],
  "why": {
   "en": "The manual states that laces should be tucked in to prevent them from catching on parts of the bike. Source: Washington Motorcycle Operator Manual, Boots and Shoes, manual p. 2-6, PDF p. 20.",
   "ru": "Руководство указывает, что шнурки нужно заправлять, чтобы они не цеплялись за части мотоцикла. Источник: Washington Motorcycle Operator Manual, «Boots and Shoes», manual p. 2-6, PDF p. 20."
  }
 },
 {
  "id": 199,
  "page": "5-11",
  "answer": 0,
  "q": {
   "en": "If you cannot see well while riding at night, what should you do?",
   "ru": "Что делать, если во время езды ночью вы плохо видите?"
  },
  "opts": [
   {
    "en": "Slow down and use available visual guides such as the fog line or white shoulder line if needed",
    "ru": "Снизить скорость и при необходимости использовать доступные визуальные ориентиры, например линию обочины (fog line) или белую линию на обочине"
   },
   {
    "en": "Speed up to leave the dark area",
    "ru": "Ускориться, чтобы покинуть тёмный участок"
   },
   {
    "en": "Turn off the headlight",
    "ru": "Выключить фару"
   },
   {
    "en": "Close one eye",
    "ru": "Закрыть один глаз"
   }
  ],
  "why": {
   "en": "The manual states that if you cannot see well at night, slow down; if you cannot see, look to the fog line or white line on the shoulder and use it to guide you. Source: Washington Motorcycle Operator Manual, Riding at Night, manual pp. 5-11 to 5-12, PDF pp. 61-62.",
   "ru": "Руководство указывает, что если ночью вы плохо видите — снизьте скорость; если видите совсем плохо, ориентируйтесь на линию обочины (fog line) или белую линию на обочине и используйте её как ориентир. Источник: Washington Motorcycle Operator Manual, «Riding at Night», manual pp. 5-11 to 5-12, PDF pp. 61-62."
  }
 }
];

const UI = {
  "app_title": {
    "en": "WA Motorcycle Knowledge Test",
    "ru": "Экзамен на мотоцикл — штат Вашингтон"
  },
  "wordmark_short": {
    "en": "WA Moto Test",
    "ru": "WA Мото Тест"
  },
  "trust_strip": {
    "en": "Practice questions based on the official Washington Motorcycle Operator Manual.",
    "ru": "Вопросы по официальному руководству для мотоциклистов штата Вашингтон."
  },
  "choose_prompt": {
    "en": "Choose an answer",
    "ru": "Выберите ответ"
  },
  "correct_label": {
    "en": "Correct",
    "ru": "Верно"
  },
  "incorrect_label": {
    "en": "Not quite",
    "ru": "Неверно"
  },
  "status_correct_full": {
    "en": "Correct. The answer is {LETTER}.",
    "ru": "Верно. Правильный ответ — {LETTER}."
  },
  "status_incorrect_full": {
    "en": "Not quite. The answer is {LETTER}.",
    "ru": "Неверно. Правильный ответ — {LETTER}."
  },
  "citation_chip": {
    "en": "Manual p. {PAGE}",
    "ru": "Руководство, стр. {PAGE}"
  },
  "citation_practice": {
    "en": "Practice question",
    "ru": "Учебный вопрос"
  },
  "progress_counter": {
    "en": "{N} / {TOTAL}",
    "ru": "{N} / {TOTAL}"
  },
  "progress_spoken": {
    "en": "Question {N} of {TOTAL}",
    "ru": "Вопрос {N} из {TOTAL}"
  },
  "score_chip_warmup": {
    "en": "{N} correct",
    "ru": "{N} верно"
  },
  "score_chip_full": {
    "en": "{PCT}% · {N} correct",
    "ru": "{PCT}% · {N} верно"
  },
  "score_chip_pct": {
    "en": "{PCT}%",
    "ru": "{PCT}%"
  },
  "next_button": {
    "en": "Next →",
    "ru": "Далее →"
  },
  "done_button": {
    "en": "See results →",
    "ru": "Показать результат →"
  },
  "start_over": {
    "en": "Start over",
    "ru": "Начать заново"
  },
  "start_over_confirm": {
    "en": "Start over?",
    "ru": "Точно?"
  },
  "new_test": {
    "en": "New test",
    "ru": "Новый тест"
  },
  "review_missed": {
    "en": "Review missed ({N})",
    "ru": "Разобрать ошибки ({N})"
  },
  "end_headline": {
    "en": "You got {SCORE} / {TOTAL} ({PCT}%)",
    "ru": "Вы ответили {SCORE} / {TOTAL} ({PCT}%)"
  },
  "end_verdict_pass": {
    "en": "That's a passing score — 80% to pass.",
    "ru": "Это проходной балл — для сдачи нужно 80%."
  },
  "end_verdict_fail": {
    "en": "Almost — 80% to pass. Run it again.",
    "ru": "Почти — для сдачи нужно 80%. Попробуй ещё раз."
  },
  "end_perfect": {
    "en": "Perfect — {N} of {N}.",
    "ru": "Отлично — {N} из {N}."
  },
  "lang_aria_label": {
    "en": "Language",
    "ru": "Язык"
  },
  "theme_to_dark": {
    "en": "Switch to dark theme",
    "ru": "Тёмная тема"
  },
  "theme_to_light": {
    "en": "Switch to light theme",
    "ru": "Светлая тема"
  }
};
