// WA Motorcycle Knowledge Test — question data (bilingual EN/RU)
// Generated from the official WA Motorcycle Operator Manual question bank.
// answer = 0-based index; en/ru opts are index-aligned so the toggle can never desync.

const QUESTIONS = [
  {
    "id": 1,
    "page": "1-1",
    "answer": 1,
    "q": {
      "en": "1. What must you have on your driver license to legally operate a motorcycle on Washington State roadways?",
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
      "en": "2. To lawfully operate a two-wheeled motorcycle in Washington, what must you have?",
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
      "en": "3. What can happen if a motorcycle is operated on public roadways without the required permit or endorsement?",
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
      "en": "4. What must you pass to get a 2W permit?",
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
      "en": "5. What must you pass to get a 2W endorsement?",
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
  "progress_counter": {
    "en": "{N} / {TOTAL}",
    "ru": "{N} / {TOTAL}"
  },
  "progress_spoken": {
    "en": "Question {N} of {TOTAL}",
    "ru": "Вопрос {N} из {TOTAL}"
  },
  "tally": {
    "en": "{N} correct",
    "ru": "{N} верно"
  },
  "next_button": {
    "en": "Next",
    "ru": "Далее"
  },
  "done_button": {
    "en": "Done",
    "ru": "Готово"
  },
  "end_headline": {
    "en": "You got {SCORE} / {TOTAL}",
    "ru": "Вы ответили {SCORE} / {TOTAL}"
  },
  "end_oneliner": {
    "en": "Solid run — keep going.",
    "ru": "Хороший результат — продолжай."
  },
  "review_missed": {
    "en": "Review missed",
    "ru": "Просмотреть ошибки"
  },
  "start_over": {
    "en": "Start over",
    "ru": "Начать заново"
  },
  "lang_toggle_en": {
    "en": "EN",
    "ru": "EN"
  },
  "lang_toggle_ru": {
    "en": "РУ",
    "ru": "РУ"
  },
  "lang_aria_label": {
    "en": "Language",
    "ru": "Язык"
  },
  "lang_switch_announce": {
    "en": "Language: English",
    "ru": "Язык: Русский"
  }
};
