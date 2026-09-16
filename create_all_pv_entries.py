# -*- coding: utf-8 -*-
import json

# Group 1: A1 Daily Basic Verbs (Adding to pv_a1)
# Currently pv_a1 has 5 verbs. Adding 5 verbs makes it 10 verbs.
a1_additions = [
    {
        "id": "sit_down",
        "word": "sit down",
        "level": "A1",
        "theme": "افعال پایه روزمره",
        "meaning": "نشستن، قرار گرفتن در حالت نشسته",
        "en": "Please sit down and make yourself comfortable.",
        "fa": "لطفاً بنشینید و راحت باشید.",
        "icon": "🪑",
        "examples": [
            {"en": "Please sit down and make yourself comfortable.", "fa": "لطفاً بنشینید و راحت باشید."},
            {"en": "We sat down on the bench to watch the sunset.", "fa": "روی نیمکت نشستیم تا غروب خورشید را تماشا کنیم."},
            {"en": "The teacher told all the students to sit down.", "fa": "معلم به همه دانش‌آموزان گفت که بنشینند."}
        ]
    },
    {
        "id": "stand_up",
        "word": "stand up",
        "level": "A1",
        "theme": "افعال پایه روزمره",
        "meaning": "بلند شدن، روی پای خود ایستادن",
        "en": "Stand up when the judge enters the courtroom.",
        "fa": "هنگامی که قاضی وارد دادگاه می‌شود، بایستید.",
        "icon": "🧍",
        "examples": [
            {"en": "Stand up when the judge enters the courtroom.", "fa": "هنگامی که قاضی وارد دادگاه می‌شود، بایستید."},
            {"en": "He stood up to shake hands with his new neighbor.", "fa": "او بلند شد تا با همسایه جدیدش دست بدهد."},
            {"en": "I need to stand up and stretch my legs after hours of study.", "fa": "بعد از ساعت‌ها مطالعه باید بایستم و پاهایم را بکشم."}
        ]
    },
    {
        "id": "get_up",
        "word": "get up",
        "level": "A1",
        "theme": "افعال پایه روزمره",
        "meaning": "برخاستن، از تخت یا صندلی بلند شدن",
        "en": "I usually get up at six every morning.",
        "fa": "من معمولاً هر روز صبح ساعت شش بیدار می‌شوم و از تخت بلند می‌شوم.",
        "icon": "⏰",
        "examples": [
            {"en": "I usually get up at six every morning.", "fa": "من معمولاً هر روز صبح ساعت شش بیدار می‌شوم و از تخت بلند می‌شوم."},
            {"en": "It was difficult to get up on a rainy winter morning.", "fa": "بلند شدن از رختخواب در یک صبح بارانی زمستانی دشوار بود."},
            {"en": "Get up from the sofa and let's go for a walk.", "fa": "از روی مبل بلند شو و بیا کمی قدم بزنیم."}
        ]
    },
    {
        "id": "fall_asleep",
        "word": "fall asleep",
        "level": "A1",
        "theme": "افعال پایه روزمره",
        "meaning": "به خواب رفتن، خوابیدن",
        "en": "The baby fell asleep after drinking warm milk.",
        "fa": "کودک بعد از نوشیدن شیر گرم به خواب رفت.",
        "icon": "😴",
        "examples": [
            {"en": "The baby fell asleep after drinking warm milk.", "fa": "کودک بعد از نوشیدن شیر گرم به خواب رفت."},
            {"en": "I was so tired that I fell asleep on the bus.", "fa": "آن‌قدر خسته بودم که در اتوبوس خوابم برد."},
            {"en": "He usually falls asleep while reading a book in bed.", "fa": "او معمولاً حین کتاب خواندن در رختخواب به خواب می‌رود."}
        ]
    },
    {
        "id": "get_started",
        "word": "get started",
        "level": "A1",
        "theme": "افعال پایه روزمره",
        "meaning": "شروع کردن، دست به کار شدن",
        "en": "Let us get started on the project right away.",
        "fa": "بیایید فوراً کار روی این پروژه را شروع کنیم.",
        "icon": "🚀",
        "examples": [
            {"en": "Let us get started on the project right away.", "fa": "بیایید فوراً کار روی این پروژه را شروع کنیم."},
            {"en": "Once everyone arrives, we can get started with the lesson.", "fa": "به محض اینکه همه برسند، می‌توانیم درس را شروع کنیم."},
            {"en": "It takes time to get started, but consistency is key.", "fa": "دست به کار شدن زمان می‌برد، اما استمرار کلید موفقیت است."}
        ]
    }
]

print(f"A1 additions ready: {len(a1_additions)}")
