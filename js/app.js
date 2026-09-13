var APP_VERSION = "v2.20.1";
var LEVEL = "A1";

var CATEGORIES = {
  everyday: {
    name: "روزمره",
    words: [
      { word: "water", meaning: "آب", en: "I drink water every morning.", fa: "من هر روز صبح آب می‌نوشم.", icon: "💧", examples: [{ en: "I drink water every morning.", fa: "من هر روز صبح آب می‌نوشم." }, { en: "Can I have a glass of water, please?", fa: "می‌شه لطفاً یک لیوان آب به من بدید؟" }, { en: "The water in this lake is very clean.", fa: "آب این دریاچه خیلی تمیز است." }] },
      { word: "house", meaning: "خانه", en: "This is my house.", fa: "این خانه‌ی من است.", icon: "🏠", examples: [{ en: "This is my house.", fa: "این خانه‌ی من است." }, { en: "Their house is near the park.", fa: "خانه‌ی آن‌ها نزدیک پارک است." }, { en: "We are painting our house this weekend.", fa: "ما این آخر هفته داریم خانه‌مان را رنگ می‌زنیم." }] },
      { word: "book", meaning: "کتاب", en: "She reads a book every night.", fa: "او هر شب یک کتاب می‌خواند.", icon: "📖", examples: [{ en: "She reads a book every night.", fa: "او هر شب یک کتاب می‌خواند." }, { en: "This book is very interesting.", fa: "این کتاب خیلی جذاب است." }, { en: "I bought a new book yesterday.", fa: "من دیروز یک کتاب جدید خریدم." }] },
      { word: "food", meaning: "غذا", en: "We eat food together.", fa: "ما با هم غذا می‌خوریم.", icon: "🍽️", examples: [{ en: "We eat food together.", fa: "ما با هم غذا می‌خوریم." }, { en: "The food smells good.", fa: "غذا بوی خوبی می‌دهد." }, { en: "I like homemade food.", fa: "من غذای خانگی دوست دارم." }] },
      { word: "friend", meaning: "دوست", en: "He is my best friend.", fa: "او بهترین دوست من است.", icon: "🧑‍🤝‍🧑", examples: [{ en: "He is my best friend.", fa: "او بهترین دوست من است." }, { en: "I called my friend yesterday.", fa: "دیروز به دوستم زنگ زدم." }, { en: "We play soccer with friends.", fa: "ما با دوستان فوتبال بازی می‌کنیم." }] },
      { word: "school", meaning: "مدرسه", en: "I go to school by bus.", fa: "من با اتوبوس به مدرسه می‌روم.", icon: "🏫", examples: [{ en: "I go to school by bus.", fa: "من با اتوبوس به مدرسه می‌روم." }, { en: "The school starts at eight.", fa: "مدرسه ساعت هشت شروع می‌شود." }, { en: "Her daughter loves school.", fa: "دخترش عاشق مدرسه است." }] },
      { word: "family", meaning: "خانواده", en: "My family is big.", fa: "خانواده‌ی من بزرگ است.", icon: "👨‍👩‍👧‍👦", examples: [{ en: "My family is big.", fa: "خانواده‌ی من بزرگ است." }, { en: "We have dinner with the family.", fa: "ما با خانواده شام می‌خوریم." }, { en: "His family lives in Shiraz.", fa: "خانواده‌اش در شیراز زندگی می‌کنند." }] },
      { word: "car", meaning: "ماشین", en: "They have a new car.", fa: "آن‌ها یک ماشین جدید دارند.", icon: "🚗", examples: [{ en: "They have a new car.", fa: "آن‌ها یک ماشین جدید دارند." }, { en: "My car is parked outside.", fa: "ماشینم بیرون پارک شده است." }, { en: "She drives her car to work.", fa: "او با ماشینش به سر کار می‌رود." }] },
      { word: "phone", meaning: "تلفن", en: "Can I use your phone?", fa: "می‌توانم از تلفن شما استفاده کنم؟", icon: "📱", examples: [{ en: "Can I use your phone?", fa: "می‌توانم از تلفن شما استفاده کنم؟" }, { en: "My phone is on the table.", fa: "تلفنم روی میز است." }, { en: "He bought a new phone.", fa: "او یک تلفن جدید خرید." }] },
      { word: "money", meaning: "پول", en: "I need more money.", fa: "من به پول بیشتری نیاز دارم.", icon: "💰", examples: [{ en: "I need more money.", fa: "من به پول بیشتری نیاز دارم." }, { en: "She saves money every month.", fa: "او هر ماه پول پس‌انداز می‌کند." }, { en: "Do not forget your money.", fa: "پولت را فراموش نکن." }] },
      { word: "time", meaning: "زمان", en: "What time is it?", fa: "ساعت چند است؟", icon: "⏰", examples: [{ en: "What time is it?", fa: "ساعت چند است؟" }, { en: "See you next time.", fa: "دفعه بعد می‌بینمت." }, { en: "It is time for lunch.", fa: "وقت ناهار است." }] },
      { word: "day", meaning: "روز", en: "Today is a good day.", fa: "امروز روز خوبی است.", icon: "☀️", examples: [{ en: "Today is a good day.", fa: "امروز روز خوبی است." }, { en: "Have a nice day!", fa: "روز خوبی داشته باشی!" }, { en: "We work eight hours a day.", fa: "ما روزانه هشت ساعت کار می‌کنیم." }] },
      { word: "night", meaning: "شب", en: "I sleep at night.", fa: "من شب‌ها می‌خوابم.", icon: "🌙", examples: [{ en: "I sleep at night.", fa: "من شب‌ها می‌خوابم." }, { en: "The city is quiet at night.", fa: "شهر شب‌ها ساکت است." }, { en: "Good night, see you tomorrow.", fa: "شب بخیر، فردا می‌بینمت." }] },
      { word: "work", meaning: "کار", en: "I go to work at 8 AM.", fa: "من ساعت ۸ صبح سر کار می‌روم.", icon: "💼", examples: [{ en: "I go to work at 8 AM.", fa: "من ساعت ۸ صبح سر کار می‌روم." }, { en: "I like my work.", fa: "کارم را دوست دارم." }, { en: "She finishes work at five.", fa: "او ساعت پنج کارش تمام می‌شود." }] },
      { word: "city", meaning: "شهر", en: "This city is very big.", fa: "این شهر خیلی بزرگ است.", icon: "🏙️", examples: [{ en: "This city is very big.", fa: "این شهر خیلی بزرگ است." }, { en: "The city has many parks.", fa: "این شهر پارک‌های زیادی دارد." }, { en: "We walked around the city.", fa: "دور شهر قدم زدیم." }] },
      { word: "street", meaning: "خیابان", en: "The shop is on this street.", fa: "مغازه در این خیابان است.", icon: "🛣️", examples: [{ en: "The shop is on this street.", fa: "مغازه در این خیابان است." }, { en: "Our street is very quiet.", fa: "خیابان ما خیلی ساکت است." }, { en: "She lives on this street.", fa: "او در این خیابان زندگی می‌کند." }] },
      { word: "weather", meaning: "هوا", en: "The weather is nice today.", fa: "امروز هوا خوب است.", icon: "⛅", examples: [{ en: "The weather is nice today.", fa: "امروز هوا خوب است." }, { en: "The weather gets cold at night.", fa: "هوا شب‌ها سرد می‌شود." }, { en: "How is the weather there?", fa: "آنجا هوا چطور است؟" }] },
      { word: "computer", meaning: "کامپیوتر", en: "I use my computer every day.", fa: "من هر روز از کامپیوترم استفاده می‌کنم.", icon: "💻", examples: [{ en: "I use my computer every day.", fa: "من هر روز از کامپیوترم استفاده می‌کنم." }, { en: "Her computer is very fast.", fa: "کامپیوترش خیلی سریع است." }, { en: "Turn off the computer, please.", fa: "لطفاً کامپیوتر را خاموش کن." }] },
      { word: "teacher", meaning: "معلم", en: "Our teacher is very kind.", fa: "معلم ما خیلی مهربان است.", icon: "👩‍🏫", examples: [{ en: "Our teacher is very kind.", fa: "معلم ما خیلی مهربان است." }, { en: "The teacher writes on the board.", fa: "معلم روی تخته می‌نویسد." }, { en: "Ask your teacher for help.", fa: "از معلمت کمک بخواه." }] },
      { word: "door", meaning: "در", en: "Please close the door.", fa: "لطفاً در را ببند.", icon: "🚪", examples: [{ en: "Please close the door.", fa: "لطفاً در را ببند." }, { en: "Someone is at the door.", fa: "یک نفر پشت در است." }, { en: "The door is open.", fa: "در باز است." }] },
      { word: "doorbell", meaning: "زنگ در", en: "Someone is ringing the doorbell.", fa: "یک نفر دارد زنگ در را می‌زند.", icon: "🔔", examples: [{ en: "Someone is ringing the doorbell.", fa: "یک نفر دارد زنگ در را می‌زند." }, { en: "I heard the doorbell this morning.", fa: "امروز صبح صدای زنگ در را شنیدم." }, { en: "Please answer the doorbell.", fa: "لطفاً در را باز کن." }] },
      { word: "window", meaning: "پنجره", en: "The window is open.", fa: "پنجره باز است.", icon: "🪟", examples: [{ en: "The window is open.", fa: "پنجره باز است." }, { en: "I looked out the window.", fa: "از پنجره بیرون را نگاه کردم." }, { en: "Please close the window.", fa: "لطفاً پنجره را ببند." }] },
      { word: "chair", meaning: "صندلی", en: "This chair is very comfortable.", fa: "این صندلی خیلی راحت است.", icon: "🪑", examples: [{ en: "This chair is very comfortable.", fa: "این صندلی خیلی راحت است." }, { en: "Sit on the chair, please.", fa: "لطفاً روی صندلی بنشین." }, { en: "The chair is next to the table.", fa: "صندلی کنار میز است." }] },
      { word: "table", meaning: "میز", en: "The keys are on the table.", fa: "کلیدها روی میز هستند.", icon: "🪵", examples: [{ en: "The keys are on the table.", fa: "کلیدها روی میز هستند." }, { en: "We eat dinner at the table.", fa: "ما سر میز شام می‌خوریم." }, { en: "The table is very clean.", fa: "میز خیلی تمیز است." }] },
      { word: "bed", meaning: "تخت", en: "I go to bed at ten.", fa: "من ساعت ده به رختخواب می‌روم.", icon: "🛏️", examples: [{ en: "I go to bed at ten.", fa: "من ساعت ده به رختخواب می‌روم." }, { en: "My bed is very comfortable.", fa: "تخت من خیلی راحت است." }, { en: "The cat is sleeping on the bed.", fa: "گربه روی تخت خوابیده است." }] },
      { word: "kitchen", meaning: "آشپزخانه", en: "My mother is in the kitchen.", fa: "مادرم در آشپزخانه است.", icon: "🍳", examples: [{ en: "My mother is in the kitchen.", fa: "مادرم در آشپزخانه است." }, { en: "The kitchen is clean.", fa: "آشپزخانه تمیز است." }, { en: "We cook dinner in the kitchen.", fa: "ما شام را در آشپزخانه درست می‌کنیم." }] },
      { word: "bathroom", meaning: "حمام، دستشویی", en: "The bathroom is upstairs.", fa: "حمام طبقه بالاست.", icon: "🚿", examples: [{ en: "The bathroom is upstairs.", fa: "حمام طبقه بالاست." }, { en: "I need to go to the bathroom.", fa: "باید به دستشویی بروم." }, { en: "The bathroom door is closed.", fa: "در حمام بسته است." }] },
      { word: "mirror", meaning: "آینه", en: "I looked in the mirror.", fa: "در آینه نگاه کردم.", icon: "🪞", examples: [{ en: "I looked in the mirror.", fa: "در آینه نگاه کردم." }, { en: "The mirror is on the wall.", fa: "آینه روی دیوار است." }, { en: "She checked her hair in the mirror.", fa: "او موهایش را در آینه نگاه کرد." }] },
      { word: "towel", meaning: "حوله", en: "I need a clean towel.", fa: "به یک حوله تمیز نیاز دارم.", icon: "🧴", examples: [{ en: "I need a clean towel.", fa: "به یک حوله تمیز نیاز دارم." }, { en: "The towel is in the bathroom.", fa: "حوله در حمام است." }, { en: "He dried his hands with a towel.", fa: "او دست‌هایش را با حوله خشک کرد." }] },
      { word: "soap", meaning: "صابون", en: "Wash your hands with soap.", fa: "دست‌هایت را با صابون بشوی.", icon: "🧼", examples: [{ en: "Wash your hands with soap.", fa: "دست‌هایت را با صابون بشوی." }, { en: "The soap smells good.", fa: "صابون بوی خوبی دارد." }, { en: "We need more soap.", fa: "ما صابون بیشتری نیاز داریم." }] },
      { word: "brush", meaning: "برس، مسواک", en: "I brush my teeth every morning.", fa: "من هر روز صبح دندان‌هایم را مسواک می‌زنم.", icon: "🪥", examples: [{ en: "I brush my teeth every morning.", fa: "من هر روز صبح دندان‌هایم را مسواک می‌زنم." }, { en: "My hair brush is on the table.", fa: "برس موی من روی میز است." }, { en: "Do not forget your toothbrush.", fa: "مسواکت را فراموش نکن." }] },
      { word: "clothes", meaning: "لباس‌ها", en: "My clothes are clean.", fa: "لباس‌هایم تمیز هستند.", icon: "👕", examples: [{ en: "My clothes are clean.", fa: "لباس‌هایم تمیز هستند." }, { en: "I need new clothes.", fa: "به لباس‌های جدید نیاز دارم." }, { en: "She puts her clothes in the closet.", fa: "او لباس‌هایش را در کمد می‌گذارد." }] },
      { word: "shirt", meaning: "پیراهن", en: "I like your shirt.", fa: "پیراهنت را دوست دارم.", icon: "👔", examples: [{ en: "I like your shirt.", fa: "پیراهنت را دوست دارم." }, { en: "He is wearing a blue shirt.", fa: "او یک پیراهن آبی پوشیده است." }, { en: "This shirt is too big for me.", fa: "این پیراهن برای من خیلی بزرگ است." }] },
      { word: "shoe", meaning: "کفش", en: "My shoes are new.", fa: "کفش‌های من جدید هستند.", icon: "👟", examples: [{ en: "My shoes are new.", fa: "کفش‌های من جدید هستند." }, { en: "I need comfortable shoes.", fa: "به کفش‌های راحت نیاز دارم." }, { en: "His shoes are under the bed.", fa: "کفش‌هایش زیر تخت هستند." }] },
      { word: "bag", meaning: "کیف", en: "My bag is heavy.", fa: "کیف من سنگین است.", icon: "🎒", examples: [{ en: "My bag is heavy.", fa: "کیف من سنگین است." }, { en: "I put my phone in my bag.", fa: "گوشی‌ام را داخل کیفم گذاشتم." }, { en: "She has a new school bag.", fa: "او یک کیف مدرسه جدید دارد." }] },
      { word: "key", meaning: "کلید", en: "I cannot find my keys.", fa: "نمی‌توانم کلیدهایم را پیدا کنم.", icon: "🔑", examples: [{ en: "I cannot find my keys.", fa: "نمی‌توانم کلیدهایم را پیدا کنم." }, { en: "The key is on the table.", fa: "کلید روی میز است." }, { en: "She opened the door with a key.", fa: "او با یک کلید در را باز کرد." }] },
      { word: "clock", meaning: "ساعت", en: "The clock is on the wall.", fa: "ساعت روی دیوار است.", icon: "⏰", examples: [{ en: "The clock is on the wall.", fa: "ساعت روی دیوار است." }, { en: "I looked at the clock.", fa: "به ساعت نگاه کردم." }, { en: "The clock says eight o'clock.", fa: "ساعت هشت را نشان می‌دهد." }] },
      { word: "morning", meaning: "صبح", en: "I wake up early in the morning.", fa: "من صبح زود بیدار می‌شوم.", icon: "🌅", examples: [{ en: "I wake up early in the morning.", fa: "من صبح زود بیدار می‌شوم." }, { en: "Good morning!", fa: "صبح بخیر!" }, { en: "I drink coffee every morning.", fa: "من هر صبح قهوه می‌نوشم." }] },
      { word: "afternoon", meaning: "بعدازظهر", en: "I study in the afternoon.", fa: "من بعدازظهر درس می‌خوانم.", icon: "☀️", examples: [{ en: "I study in the afternoon.", fa: "من بعدازظهر درس می‌خوانم." }, { en: "Good afternoon!", fa: "بعدازظهر بخیر!" }, { en: "We have lunch in the afternoon.", fa: "ما بعدازظهر ناهار می‌خوریم." }] },
      { word: "evening", meaning: "عصر، شب", en: "I walk in the evening.", fa: "من عصرها پیاده‌روی می‌کنم.", icon: "🌆", examples: [{ en: "I walk in the evening.", fa: "من عصرها پیاده‌روی می‌کنم." }, { en: "We watch TV in the evening.", fa: "ما عصرها تلویزیون نگاه می‌کنیم." }, { en: "Have a nice evening.", fa: "عصر خوبی داشته باشی." }] },
      { word: "week", meaning: "هفته", en: "I work five days a week.", fa: "من پنج روز در هفته کار می‌کنم.", icon: "📅", examples: [{ en: "I work five days a week.", fa: "من پنج روز در هفته کار می‌کنم." }, { en: "This week is busy.", fa: "این هفته شلوغ است." }, { en: "See you next week.", fa: "هفته بعد می‌بینمت." }] },
      { word: "month", meaning: "ماه", en: "My birthday is next month.", fa: "تولدم ماه بعد است.", icon: "🗓️", examples: [{ en: "My birthday is next month.", fa: "تولدم ماه بعد است." }, { en: "I save money every month.", fa: "من هر ماه پول پس‌انداز می‌کنم." }, { en: "This month is very busy.", fa: "این ماه خیلی شلوغ است." }] },
      { word: "year", meaning: "سال", en: "I started school last year.", fa: "من سال گذشته مدرسه را شروع کردم.", icon: "🎆", examples: [{ en: "I started school last year.", fa: "من سال گذشته مدرسه را شروع کردم." }, { en: "This year is special.", fa: "امسال خاص است." }, { en: "We travel every year.", fa: "ما هر سال سفر می‌کنیم." }] },
      { word: "clean", meaning: "تمیز", en: "My room is clean.", fa: "اتاق من تمیز است.", icon: "✨", examples: [{ en: "My room is clean.", fa: "اتاق من تمیز است." }, { en: "Please keep your hands clean.", fa: "لطفاً دست‌هایت را تمیز نگه دار." }, { en: "The kitchen is clean today.", fa: "آشپزخانه امروز تمیز است." }] },
      { word: "dirty", meaning: "کثیف", en: "My shoes are dirty.", fa: "کفش‌هایم کثیف هستند.", icon: "🧽", examples: [{ en: "My shoes are dirty.", fa: "کفش‌هایم کثیف هستند." }, { en: "The floor is dirty.", fa: "زمین کثیف است." }, { en: "Do not touch the dirty water.", fa: "به آب کثیف دست نزن." }] },
      { word: "open", meaning: "باز", en: "The door is open.", fa: "در باز است.", icon: "🚪", examples: [{ en: "The door is open.", fa: "در باز است." }, { en: "Please open the window.", fa: "لطفاً پنجره را باز کن." }, { en: "The store is open today.", fa: "فروشگاه امروز باز است." }] },
      { word: "close", meaning: "بستن", en: "Please close the door.", fa: "لطفاً در را ببند.", icon: "🔒", examples: [{ en: "Please close the door.", fa: "لطفاً در را ببند." }, { en: "I close the window at night.", fa: "من شب‌ها پنجره را می‌بندم." }, { en: "Close your book, please.", fa: "لطفاً کتابت را ببند." }] },
      { word: "turn on", meaning: "روشن کردن", en: "Turn on the lights, please.", fa: "لطفاً چراغ‌ها را روشن کن.", icon: "💡", examples: [{ en: "Turn on the lights, please.", fa: "لطفاً چراغ‌ها را روشن کن." }, { en: "I turn on my computer every morning.", fa: "من هر صبح کامپیوترم را روشن می‌کنم." }, { en: "She turned on the TV.", fa: "او تلویزیون را روشن کرد." }] },
      { word: "turn off", meaning: "خاموش کردن", en: "Please turn off the lights.", fa: "لطفاً چراغ‌ها را خاموش کن.", icon: "🔌", examples: [{ en: "Please turn off the lights.", fa: "لطفاً چراغ‌ها را خاموش کن." }, { en: "I turn off my phone before sleep.", fa: "من قبل از خواب گوشی‌ام را خاموش می‌کنم." }, { en: "He turned off the TV.", fa: "او تلویزیون را خاموش کرد." }] },
      { word: "sit", meaning: "نشستن", en: "Please sit here.", fa: "لطفاً اینجا بنشین.", icon: "🪑", examples: [{ en: "Please sit here.", fa: "لطفاً اینجا بنشین." }, { en: "I sit at my desk every day.", fa: "من هر روز پشت میزم می‌نشینم." }, { en: "They sit together at lunch.", fa: "آن‌ها هنگام ناهار کنار هم می‌نشینند." }] },
      { word: "stand", meaning: "ایستادن", en: "Please stand up.", fa: "لطفاً بلند شو.", icon: "🧍", examples: [{ en: "Please stand up.", fa: "لطفاً بلند شو." }, { en: "He is standing near the door.", fa: "او نزدیک در ایستاده است." }, { en: "I stand in line at the store.", fa: "من در فروشگاه در صف می‌ایستم." }] },
      { word: "walk", meaning: "راه رفتن", en: "I walk to school every day.", fa: "من هر روز پیاده به مدرسه می‌روم.", icon: "🚶", examples: [{ en: "I walk to school every day.", fa: "من هر روز پیاده به مدرسه می‌روم." }, { en: "We walk in the park.", fa: "ما در پارک قدم می‌زنیم." }, { en: "She walks home after work.", fa: "او بعد از کار پیاده به خانه می‌رود." }] },
      { word: "run", meaning: "دویدن", en: "I run in the morning.", fa: "من صبح‌ها می‌دوم.", icon: "🏃", examples: [{ en: "I run in the morning.", fa: "من صبح‌ها می‌دوم." }, { en: "The boy is running outside.", fa: "پسر بیرون دارد می‌دود." }, { en: "She runs every weekend.", fa: "او هر آخر هفته می‌دود." }] },
      { word: "wait", meaning: "منتظر ماندن", en: "Please wait here.", fa: "لطفاً اینجا منتظر بمان.", icon: "⏳", examples: [{ en: "Please wait here.", fa: "لطفاً اینجا منتظر بمان." }, { en: "I am waiting for my friend.", fa: "من منتظر دوستم هستم." }, { en: "We wait for the bus every morning.", fa: "ما هر صبح منتظر اتوبوس می‌مانیم." }] },
      { word: "help", meaning: "کمک کردن", en: "Can you help me?", fa: "می‌توانی به من کمک کنی؟", icon: "🤝", examples: [{ en: "Can you help me?", fa: "می‌توانی به من کمک کنی؟" }, { en: "I help my family at home.", fa: "من در خانه به خانواده‌ام کمک می‌کنم." }, { en: "She helped her friend.", fa: "او به دوستش کمک کرد." }] },
      { word: "need", meaning: "نیاز داشتن", en: "I need some water.", fa: "من کمی آب نیاز دارم.", icon: "🤲", examples: [{ en: "I need some water.", fa: "من کمی آب نیاز دارم." }, { en: "We need more time.", fa: "ما زمان بیشتری نیاز داریم." }, { en: "She needs a new phone.", fa: "او به یک گوشی جدید نیاز دارد." }] },
      { word: "want", meaning: "خواستن", en: "I want a cup of coffee.", fa: "من یک فنجان قهوه می‌خواهم.", icon: "💭", examples: [{ en: "I want a cup of coffee.", fa: "من یک فنجان قهوه می‌خواهم." }, { en: "They want to go home.", fa: "آن‌ها می‌خواهند به خانه بروند." }, { en: "She wants a new bag.", fa: "او یک کیف جدید می‌خواهد." }] },
      { word: "like", meaning: "دوست داشتن", en: "I like this song.", fa: "من این آهنگ را دوست دارم.", icon: "👍", examples: [{ en: "I like this song.", fa: "من این آهنگ را دوست دارم." }, { en: "He likes coffee.", fa: "او قهوه دوست دارد." }, { en: "We like our new home.", fa: "ما خانه جدیدمان را دوست داریم." }] },
      { word: "love", meaning: "دوست داشتن زیاد، عاشق بودن", en: "I love my family.", fa: "من خانواده‌ام را خیلی دوست دارم.", icon: "❤️", examples: [{ en: "I love my family.", fa: "من خانواده‌ام را خیلی دوست دارم." }, { en: "She loves music.", fa: "او موسیقی را خیلی دوست دارد." }, { en: "They love this place.", fa: "آن‌ها این مکان را خیلی دوست دارند." }] },
      { word: "live", meaning: "زندگی کردن", en: "I live in Canada.", fa: "من در کانادا زندگی می‌کنم.", icon: "🏡", examples: [{ en: "I live in Canada.", fa: "من در کانادا زندگی می‌کنم." }, { en: "They live near the school.", fa: "آن‌ها نزدیک مدرسه زندگی می‌کنند." }, { en: "She lives with her family.", fa: "او با خانواده‌اش زندگی می‌کند." }] },
      { word: "work", meaning: "کار کردن", en: "I work in an office.", fa: "من در یک دفتر کار می‌کنم.", icon: "💼", examples: [{ en: "I work in an office.", fa: "من در یک دفتر کار می‌کنم." }, { en: "My father works every day.", fa: "پدرم هر روز کار می‌کند." }, { en: "She works from home.", fa: "او از خانه کار می‌کند." }] },
      { word: "study", meaning: "درس خواندن", en: "I study English every day.", fa: "من هر روز انگلیسی می‌خوانم.", icon: "📚", examples: [{ en: "I study English every day.", fa: "من هر روز انگلیسی می‌خوانم." }, { en: "She studies at night.", fa: "او شب‌ها درس می‌خواند." }, { en: "They study together.", fa: "آن‌ها با هم درس می‌خوانند." }] },
      { word: "learn", meaning: "یاد گرفتن", en: "I want to learn English.", fa: "من می‌خواهم انگلیسی یاد بگیرم.", icon: "🧠", examples: [{ en: "I want to learn English.", fa: "من می‌خواهم انگلیسی یاد بگیرم." }, { en: "Children learn quickly.", fa: "بچه‌ها سریع یاد می‌گیرند." }, { en: "She learns new words every day.", fa: "او هر روز کلمات جدید یاد می‌گیرد." }] },
      { word: "read", meaning: "خواندن", en: "I read a book before bed.", fa: "من قبل از خواب کتاب می‌خوانم.", icon: "📖", examples: [{ en: "I read a book before bed.", fa: "من قبل از خواب کتاب می‌خوانم." }, { en: "She reads the news every morning.", fa: "او هر صبح اخبار می‌خواند." }, { en: "Can you read this message?", fa: "می‌توانی این پیام را بخوانی؟" }] },
      { word: "write", meaning: "نوشتن", en: "I write in my notebook.", fa: "من در دفترم می‌نویسم.", icon: "✍️", examples: [{ en: "I write in my notebook.", fa: "من در دفترم می‌نویسم." }, { en: "Please write your name here.", fa: "لطفاً نامت را اینجا بنویس." }, { en: "She writes emails at work.", fa: "او در محل کار ایمیل می‌نویسد." }] },
      { word: "speak", meaning: "صحبت کردن", en: "I speak English and Persian.", fa: "من انگلیسی و فارسی صحبت می‌کنم.", icon: "🗣️", examples: [{ en: "I speak English and Persian.", fa: "من انگلیسی و فارسی صحبت می‌کنم." }, { en: "She speaks slowly.", fa: "او آهسته صحبت می‌کند." }, { en: "Can I speak with you?", fa: "می‌توانم با تو صحبت کنم؟" }] },
      { word: "listen", meaning: "گوش دادن", en: "I listen to music every day.", fa: "من هر روز به موسیقی گوش می‌دهم.", icon: "🎧", examples: [{ en: "I listen to music every day.", fa: "من هر روز به موسیقی گوش می‌دهم." }, { en: "Please listen carefully.", fa: "لطفاً با دقت گوش کن." }, { en: "She listens to her teacher.", fa: "او به معلمش گوش می‌دهد." }] },
      { word: "watch", meaning: "تماشا کردن", en: "We watch TV after dinner.", fa: "ما بعد از شام تلویزیون تماشا می‌کنیم.", icon: "📺", examples: [{ en: "We watch TV after dinner.", fa: "ما بعد از شام تلویزیون تماشا می‌کنیم." }, { en: "I watch movies on weekends.", fa: "من آخر هفته‌ها فیلم تماشا می‌کنم." }, { en: "She watches the game.", fa: "او بازی را تماشا می‌کند." }] },
      { word: "play", meaning: "بازی کردن", en: "Children play outside.", fa: "بچه‌ها بیرون بازی می‌کنند.", icon: "🎮", examples: [{ en: "Children play outside.", fa: "بچه‌ها بیرون بازی می‌کنند." }, { en: "I play soccer with my friends.", fa: "من با دوستانم فوتبال بازی می‌کنم." }, { en: "The dog likes to play.", fa: "سگ دوست دارد بازی کند." }] },
      { word: "call", meaning: "تماس گرفتن", en: "I will call you later.", fa: "بعداً با تو تماس می‌گیرم.", icon: "📞", examples: [{ en: "I will call you later.", fa: "بعداً با تو تماس می‌گیرم." }, { en: "She calls her mother every day.", fa: "او هر روز به مادرش زنگ می‌زند." }, { en: "Please call me tonight.", fa: "لطفاً امشب با من تماس بگیر." }] },
      { word: "wake up", meaning: "بیدار شدن", en: "I wake up at seven every morning.", fa: "من هر روز صبح ساعت هفت بیدار می‌شوم.", icon: "⏰", examples: [{ en: "I wake up at seven every morning.", fa: "من هر روز صبح ساعت هفت بیدار می‌شوم." }, { en: "She wakes up early for work.", fa: "او برای کار زود بیدار می‌شود." }, { en: "I usually wake up before my alarm.", fa: "من معمولاً قبل از زنگ ساعت بیدار می‌شوم." }] },
      { word: "sleep", meaning: "خوابیدن", en: "I sleep eight hours every night.", fa: "من هر شب هشت ساعت می‌خوابم.", icon: "😴", examples: [{ en: "I sleep eight hours every night.", fa: "من هر شب هشت ساعت می‌خوابم." }, { en: "The baby is sleeping now.", fa: "بچه الان خوابیده است." }, { en: "I need to sleep early tonight.", fa: "امشب باید زود بخوابم." }] },
      { word: "eat", meaning: "غذا خوردن", en: "I eat breakfast every morning.", fa: "من هر صبح صبحانه می‌خورم.", icon: "🍽️", examples: [{ en: "I eat breakfast every morning.", fa: "من هر صبح صبحانه می‌خورم." }, { en: "We eat dinner together.", fa: "ما با هم شام می‌خوریم." }, { en: "The children are eating lunch.", fa: "بچه‌ها دارند ناهار می‌خورند." }] },
      { word: "drink", meaning: "نوشیدن", en: "I drink water every day.", fa: "من هر روز آب می‌نوشم.", icon: "🥤", examples: [{ en: "I drink water every day.", fa: "من هر روز آب می‌نوشم." }, { en: "She drinks coffee in the morning.", fa: "او صبح‌ها قهوه می‌نوشد." }, { en: "He is drinking juice.", fa: "او دارد آبمیوه می‌نوشد." }] },
      { word: "cook", meaning: "آشپزی کردن", en: "I cook dinner at home.", fa: "من در خانه شام درست می‌کنم.", icon: "🍳", examples: [{ en: "I cook dinner at home.", fa: "من در خانه شام درست می‌کنم." }, { en: "My father likes to cook.", fa: "پدرم دوست دارد آشپزی کند." }, { en: "She is cooking rice for lunch.", fa: "او برای ناهار برنج درست می‌کند." }] },
      { word: "wash", meaning: "شستن", en: "I wash my hands before eating.", fa: "من قبل از غذا خوردن دست‌هایم را می‌شویم.", icon: "🧼", examples: [{ en: "I wash my hands before eating.", fa: "من قبل از غذا خوردن دست‌هایم را می‌شویم." }, { en: "She washes the dishes after dinner.", fa: "او بعد از شام ظرف‌ها را می‌شوید." }, { en: "Please wash your face.", fa: "لطفاً صورتت را بشوی." }] },
      { word: "wear", meaning: "پوشیدن", en: "I wear a jacket in winter.", fa: "من در زمستان کت می‌پوشم.", icon: "🧥", examples: [{ en: "I wear a jacket in winter.", fa: "من در زمستان کت می‌پوشم." }, { en: "She is wearing a red dress.", fa: "او یک لباس قرمز پوشیده است." }, { en: "He wears glasses every day.", fa: "او هر روز عینک می‌زند." }] },
      { word: "change", meaning: "تغییر دادن، عوض کردن", en: "I need to change my clothes.", fa: "من باید لباس‌هایم را عوض کنم.", icon: "🔄", examples: [{ en: "I need to change my clothes.", fa: "من باید لباس‌هایم را عوض کنم." }, { en: "She changed her phone number.", fa: "او شماره تلفنش را تغییر داد." }, { en: "I change my shoes after work.", fa: "من بعد از کار کفش‌هایم را عوض می‌کنم." }] },
      { word: "move", meaning: "حرکت کردن، جابه‌جا شدن", en: "We move to a new house next month.", fa: "ما ماه آینده به خانه جدیدی نقل مکان می‌کنیم.", icon: "📦", examples: [{ en: "We move to a new house next month.", fa: "ما ماه آینده به خانه جدیدی نقل مکان می‌کنیم." }, { en: "Please move your chair.", fa: "لطفاً صندلی‌ات را جابه‌جا کن." }, { en: "The car is moving slowly.", fa: "ماشین آرام حرکت می‌کند." }] },
      { word: "bring", meaning: "آوردن", en: "Please bring your book tomorrow.", fa: "لطفاً فردا کتابت را بیاور.", icon: "📥", examples: [{ en: "Please bring your book tomorrow.", fa: "لطفاً فردا کتابت را بیاور." }, { en: "I bring lunch from home.", fa: "من ناهار را از خانه می‌آورم." }, { en: "She brings her bag to school.", fa: "او کیفش را به مدرسه می‌آورد." }] },
      { word: "take", meaning: "برداشتن، بردن", en: "Take your keys with you.", fa: "کلیدهایت را با خودت ببر.", icon: "🤲", examples: [{ en: "Take your keys with you.", fa: "کلیدهایت را با خودت ببر." }, { en: "I take the bus every day.", fa: "من هر روز با اتوبوس می‌روم." }, { en: "She takes a picture of her food.", fa: "او از غذایش عکس می‌گیرد." }] },
      { word: "give", meaning: "دادن", en: "Please give me your phone.", fa: "لطفاً گوشی‌ات را به من بده.", icon: "🎁", examples: [{ en: "Please give me your phone.", fa: "لطفاً گوشی‌ات را به من بده." }, { en: "He gives his friend a gift.", fa: "او به دوستش هدیه می‌دهد." }, { en: "I give my cat some food.", fa: "من به گربه‌ام کمی غذا می‌دهم." }] },
      { word: "find", meaning: "پیدا کردن", en: "I cannot find my wallet.", fa: "نمی‌توانم کیف پولم را پیدا کنم.", icon: "🔍", examples: [{ en: "I cannot find my wallet.", fa: "نمی‌توانم کیف پولم را پیدا کنم." }, { en: "She found her keys.", fa: "او کلیدهایش را پیدا کرد." }, { en: "We need to find a place to sit.", fa: "ما باید جایی برای نشستن پیدا کنیم." }] },
      { word: "lose", meaning: "گم کردن", en: "I lost my phone yesterday.", fa: "من دیروز گوشی‌ام را گم کردم.", icon: "❓", examples: [{ en: "I lost my phone yesterday.", fa: "من دیروز گوشی‌ام را گم کردم." }, { en: "She always loses her keys.", fa: "او همیشه کلیدهایش را گم می‌کند." }, { en: "Do not lose your bag.", fa: "کیفت را گم نکن." }] },
      { word: "remember", meaning: "به یاد آوردن، یاد داشتن", en: "I remember your name.", fa: "من اسم تو را به یاد دارم.", icon: "💡", examples: [{ en: "I remember your name.", fa: "من اسم تو را به یاد دارم." }, { en: "Please remember your homework.", fa: "لطفاً تکلیفت را یادت باشد." }, { en: "She remembers her first teacher.", fa: "او اولین معلمش را به یاد دارد." }] },
      { word: "forget", meaning: "فراموش کردن", en: "I forgot my keys at home.", fa: "من کلیدهایم را در خانه جا گذاشتم.", icon: "💭", examples: [{ en: "I forgot my keys at home.", fa: "من کلیدهایم را در خانه جا گذاشتم." }, { en: "Do not forget your homework.", fa: "تکلیفت را فراموش نکن." }, { en: "She forgot his name.", fa: "او اسم او را فراموش کرد." }] },
      { word: "start", meaning: "شروع کردن", en: "I start work at nine.", fa: "من ساعت نه کارم را شروع می‌کنم.", icon: "🚀", examples: [{ en: "I start work at nine.", fa: "من ساعت نه کارم را شروع می‌کنم." }, { en: "The movie starts at eight.", fa: "فیلم ساعت هشت شروع می‌شود." }, { en: "She starts her day with coffee.", fa: "او روزش را با قهوه شروع می‌کند." }] },
      { word: "finish", meaning: "تمام کردن، به پایان رساندن", en: "I finish school at three.", fa: "من ساعت سه مدرسه‌ام تمام می‌شود.", icon: "🏁", examples: [{ en: "I finish school at three.", fa: "من ساعت سه مدرسه‌ام تمام می‌شود." }, { en: "She finished her homework.", fa: "او تکلیفش را تمام کرد." }, { en: "We finish dinner at seven.", fa: "ما شام را ساعت هفت تمام می‌کنیم." }] },
      { word: "use", meaning: "استفاده کردن", en: "I use my phone every day.", fa: "من هر روز از گوشی‌ام استفاده می‌کنم.", icon: "📱", examples: [{ en: "I use my phone every day.", fa: "من هر روز از گوشی‌ام استفاده می‌کنم." }, { en: "She uses a computer at work.", fa: "او در محل کار از کامپیوتر استفاده می‌کند." }, { en: "We use this table for dinner.", fa: "ما از این میز برای شام استفاده می‌کنیم." }] },
      { word: "make", meaning: "درست کردن، ساختن", en: "I make breakfast every morning.", fa: "من هر صبح صبحانه درست می‌کنم.", icon: "🛠️", examples: [{ en: "I make breakfast every morning.", fa: "من هر صبح صبحانه درست می‌کنم." }, { en: "She makes a cake for her family.", fa: "او برای خانواده‌اش کیک درست می‌کند." }, { en: "We make plans for the weekend.", fa: "ما برای آخر هفته برنامه می‌ریزیم." }] },
      { word: "clean up", meaning: "مرتب و تمیز کردن", en: "I clean up my room every week.", fa: "من هر هفته اتاقم را مرتب و تمیز می‌کنم.", icon: "🧹", examples: [{ en: "I clean up my room every week.", fa: "من هر هفته اتاقم را مرتب و تمیز می‌کنم." }, { en: "Please clean up the kitchen.", fa: "لطفاً آشپزخانه را تمیز و مرتب کن." }, { en: "The children clean up their toys.", fa: "بچه‌ها اسباب‌بازی‌هایشان را جمع می‌کنند." }] },
      { word: "pick up", meaning: "برداشتن، جمع کردن", en: "Pick up your clothes from the floor.", fa: "لباس‌هایت را از روی زمین بردار.", icon: "🧺", examples: [{ en: "Pick up your clothes from the floor.", fa: "لباس‌هایت را از روی زمین بردار." }, { en: "I pick up my phone when it rings.", fa: "وقتی گوشی‌ام زنگ می‌خورد آن را برمی‌دارم." }, { en: "She picks up her bag from the chair.", fa: "او کیفش را از روی صندلی برمی‌دارد." }] },
      { word: "put", meaning: "گذاشتن", en: "Put your book on the table.", fa: "کتابت را روی میز بگذار.", icon: "📥", examples: [{ en: "Put your book on the table.", fa: "کتابت را روی میز بگذار." }, { en: "I put my clothes in the closet.", fa: "لباس‌هایم را در کمد می‌گذارم." }, { en: "She puts sugar in her coffee.", fa: "او در قهوه‌اش شکر می‌ریزد." }] },
      { word: "keep", meaning: "نگه داشتن", en: "I keep my keys in my bag.", fa: "من کلیدهایم را در کیفم نگه می‌دارم.", icon: "🔐", examples: [{ en: "I keep my keys in my bag.", fa: "من کلیدهایم را در کیفم نگه می‌دارم." }, { en: "Please keep your room clean.", fa: "لطفاً اتاقت را تمیز نگه دار." }, { en: "She keeps old photos.", fa: "او عکس‌های قدیمی را نگه می‌دارد." }] },
      { word: "meet", meaning: "ملاقات کردن، دیدن", en: "I meet my friends after school.", fa: "من بعد از مدرسه دوستانم را می‌بینم.", icon: "🤝", examples: [{ en: "I meet my friends after school.", fa: "من بعد از مدرسه دوستانم را می‌بینم." }, { en: "Nice to meet you.", fa: "از دیدنت خوشحالم." }, { en: "She meets her family on weekends.", fa: "او آخر هفته‌ها خانواده‌اش را می‌بیند." }] },
      { word: "visit", meaning: "دیدن کردن، ملاقات کردن", en: "I visit my grandparents on Sundays.", fa: "من یکشنبه‌ها به دیدن پدربزرگ و مادربزرگم می‌روم.", icon: "🏡", examples: [{ en: "I visit my grandparents on Sundays.", fa: "من یکشنبه‌ها به دیدن پدربزرگ و مادربزرگم می‌روم." }, { en: "We visit the park in the afternoon.", fa: "ما بعدازظهر به پارک می‌رویم." }, { en: "She visits her friend every week.", fa: "او هر هفته به دیدن دوستش می‌رود." }] },
      { word: "ask", meaning: "پرسیدن", en: "I ask my teacher a question.", fa: "من از معلمم یک سؤال می‌پرسم.", icon: "🙋", examples: [{ en: "I ask my teacher a question.", fa: "من از معلمم یک سؤال می‌پرسم." }, { en: "She asks for help.", fa: "او درخواست کمک می‌کند." }, { en: "Can I ask you something?", fa: "می‌توانم چیزی از تو بپرسم؟" }] },
      { word: "answer", meaning: "جواب دادن", en: "Please answer my question.", fa: "لطفاً به سؤال من جواب بده.", icon: "💬", examples: [{ en: "Please answer my question.", fa: "لطفاً به سؤال من جواب بده." }, { en: "He answers the phone.", fa: "او تلفن را جواب می‌دهد." }, { en: "She knows the answer.", fa: "او جواب را می‌داند." }] },
      { word: "tell", meaning: "گفتن، تعریف کردن", en: "Tell me your name, please.", fa: "لطفاً اسمت را به من بگو.", icon: "🗣️", examples: [{ en: "Tell me your name, please.", fa: "لطفاً اسمت را به من بگو." }, { en: "She tells a story to her children.", fa: "او برای بچه‌هایش یک داستان تعریف می‌کند." }, { en: "I tell my friend the news.", fa: "من خبر را به دوستم می‌گویم." }] },
      { word: "show", meaning: "نشان دادن", en: "Show me your picture.", fa: "عکست را به من نشان بده.", icon: "🖼️", examples: [{ en: "Show me your picture.", fa: "عکست را به من نشان بده." }, { en: "He shows his new phone.", fa: "او گوشی جدیدش را نشان می‌دهد." }, { en: "Can you show me the way?", fa: "می‌توانی راه را به من نشان بدهی؟" }] }
    ]
  },
  travel: {
    name: "سفر",
    words: [
      { word: "airport", meaning: "فرودگاه", en: "The airport is very busy today.", fa: "فرودگاه امروز خیلی شلوغ است.", icon: "🛫", examples: [{ en: "The airport is very busy today.", fa: "فرودگاه امروز خیلی شلوغ است." }, { en: "We arrived at the airport early.", fa: "ما زود به فرودگاه رسیدیم." }, { en: "The airport has many shops.", fa: "فرودگاه مغازه‌های زیادی دارد." }] },
      { word: "ticket", meaning: "بلیط", en: "I bought a ticket for the train.", fa: "من یک بلیط برای قطار خریدم.", icon: "🎫", examples: [{ en: "I bought a ticket for the train.", fa: "من یک بلیط برای قطار خریدم." }, { en: "The ticket is in my bag.", fa: "بلیط در کیفم است." }, { en: "She showed her ticket to the driver.", fa: "او بلیطش را به راننده نشان داد." }] },
      { word: "passport", meaning: "گذرنامه", en: "Don't forget your passport.", fa: "گذرنامه‌ات را فراموش نکن.", icon: "🛂", examples: [{ en: "Don't forget your passport.", fa: "گذرنامه‌ات را فراموش نکن." }, { en: "My passport is new.", fa: "گذرنامه‌ام نو است." }, { en: "Keep your passport safe.", fa: "گذرنامه‌ات را امن نگه دار." }] },
      { word: "suitcase", meaning: "چمدان", en: "My suitcase is very heavy.", fa: "چمدان من خیلی سنگین است.", icon: "🧳", examples: [{ en: "My suitcase is very heavy.", fa: "چمدان من خیلی سنگین است." }, { en: "She opened her suitcase.", fa: "او چمدانش را باز کرد." }, { en: "The suitcase is too small.", fa: "چمدان خیلی کوچک است." }] },
      { word: "hotel", meaning: "هتل", en: "We stayed at a nice hotel.", fa: "ما در یک هتل خوب ماندیم.", icon: "🏨", examples: [{ en: "We stayed at a nice hotel.", fa: "ما در یک هتل خوب ماندیم." }, { en: "The hotel room was clean.", fa: "اتاق هتل تمیز بود." }, { en: "We left the hotel at noon.", fa: "ما ظهر از هتل بیرون رفتیم." }] },
      { word: "map", meaning: "نقشه", en: "Can you show me on the map?", fa: "می‌توانی روی نقشه به من نشان بدهی؟", icon: "🗺️", examples: [{ en: "Can you show me on the map?", fa: "می‌توانی روی نقشه به من نشان بدهی؟" }, { en: "I looked at the map.", fa: "به نقشه نگاه کردم." }, { en: "The map shows the city center.", fa: "نقشه مرکز شهر را نشان می‌دهد." }] },
      { word: "train", meaning: "قطار", en: "The train leaves at nine.", fa: "قطار ساعت نه حرکت می‌کند.", icon: "🚆", examples: [{ en: "The train leaves at nine.", fa: "قطار ساعت نه حرکت می‌کند." }, { en: "The train was full of people.", fa: "قطار پر از آدم بود." }, { en: "I like traveling by train.", fa: "من سفر با قطار را دوست دارم." }] },
      { word: "beach", meaning: "ساحل", en: "We walked on the beach.", fa: "ما در ساحل قدم زدیم.", icon: "🏖️", examples: [{ en: "We walked on the beach.", fa: "ما در ساحل قدم زدیم." }, { en: "The beach is clean and sandy.", fa: "ساحل تمیز و ماسه‌ای است." }, { en: "Children play on the beach.", fa: "بچه‌ها روی ساحل بازی می‌کنند." }] },
      { word: "mountain", meaning: "کوه", en: "They climbed the mountain.", fa: "آنها از کوه بالا رفتند.", icon: "⛰️", examples: [{ en: "They climbed the mountain.", fa: "آنها از کوه بالا رفتند." }, { en: "The mountain is covered with snow.", fa: "کوه با برف پوشیده شده است." }, { en: "We saw a mountain far away.", fa: "از دور یک کوه دیدیم." }] },
      { word: "camera", meaning: "دوربین", en: "I take my camera everywhere.", fa: "من دوربینم را همه‌جا می‌برم.", icon: "📷", examples: [{ en: "I take my camera everywhere.", fa: "من دوربینم را همه‌جا می‌برم." }, { en: "This camera takes great photos.", fa: "این دوربین عکس‌های عالی می‌گیرد." }, { en: "She bought a new camera.", fa: "او یک دوربین جدید خرید." }] },
      { word: "bus", meaning: "اتوبوس", en: "I take the bus to the airport.", fa: "من با اتوبوس به فرودگاه می‌روم.", icon: "🚌", examples: [{ en: "I take the bus to the airport.", fa: "من با اتوبوس به فرودگاه می‌روم." }, { en: "The bus is late today.", fa: "اتوبوس امروز دیر کرده است." }, { en: "We wait for the bus near the hotel.", fa: "ما نزدیک هتل منتظر اتوبوس می‌مانیم." }] },
      { word: "taxi", meaning: "تاکسی", en: "I need a taxi to the hotel.", fa: "من به یک تاکسی برای رفتن به هتل نیاز دارم.", icon: "🚕", examples: [{ en: "I need a taxi to the hotel.", fa: "من به یک تاکسی برای رفتن به هتل نیاز دارم." }, { en: "The taxi driver knows the city.", fa: "راننده تاکسی شهر را می‌شناسد." }, { en: "We take a taxi after the flight.", fa: "ما بعد از پرواز تاکسی می‌گیریم." }] },
      { word: "car", meaning: "ماشین، خودرو", en: "We travel by car.", fa: "ما با ماشین سفر می‌کنیم.", icon: "🚗", examples: [{ en: "We travel by car.", fa: "ما با ماشین سفر می‌کنیم." }, { en: "The car is outside the hotel.", fa: "ماشین بیرون هتل است." }, { en: "I rent a car for my trip.", fa: "من برای سفرم ماشین اجاره می‌کنم." }] },
      { word: "road", meaning: "جاده، راه", en: "This road goes to the city center.", fa: "این جاده به مرکز شهر می‌رود.", icon: "🛣️", examples: [{ en: "This road goes to the city center.", fa: "این جاده به مرکز شهر می‌رود." }, { en: "The road is very busy today.", fa: "این جاده امروز خیلی شلوغ است." }, { en: "We are driving on a long road.", fa: "ما در یک جاده طولانی رانندگی می‌کنیم." }] },
      { word: "street", meaning: "خیابان", en: "The hotel is on this street.", fa: "هتل در این خیابان است.", icon: "🏙️", examples: [{ en: "The hotel is on this street.", fa: "هتل در این خیابان است." }, { en: "This street is easy to find.", fa: "پیدا کردن این خیابان آسان است." }, { en: "We walk down the street.", fa: "ما در خیابان قدم می‌زنیم." }] },
      { word: "city center", meaning: "مرکز شهر", en: "The museum is in the city center.", fa: "موزه در مرکز شهر است.", icon: "🏙️", examples: [{ en: "The museum is in the city center.", fa: "موزه در مرکز شهر است." }, { en: "We go to the city center by bus.", fa: "ما با اتوبوس به مرکز شهر می‌رویم." }, { en: "The city center is very busy.", fa: "مرکز شهر خیلی شلوغ است." }] },
      { word: "station", meaning: "ایستگاه", en: "The train station is nearby.", fa: "ایستگاه قطار نزدیک است.", icon: "🚉", examples: [{ en: "The train station is nearby.", fa: "ایستگاه قطار نزدیک است." }, { en: "We wait at the station.", fa: "ما در ایستگاه منتظر می‌مانیم." }, { en: "I walk to the bus station.", fa: "من پیاده به ایستگاه اتوبوس می‌روم." }] },
      { word: "subway", meaning: "مترو", en: "I take the subway to downtown.", fa: "من با مترو به مرکز شهر می‌روم.", icon: "🚇", examples: [{ en: "I take the subway to downtown.", fa: "من با مترو به مرکز شهر می‌روم." }, { en: "The subway is fast and easy.", fa: "مترو سریع و آسان است." }, { en: "We use the subway every day.", fa: "ما هر روز از مترو استفاده می‌کنیم." }] },
      { word: "bus stop", meaning: "ایستگاه اتوبوس", en: "The bus stop is near my hotel.", fa: "ایستگاه اتوبوس نزدیک هتل من است.", icon: "🚏", examples: [{ en: "The bus stop is near my hotel.", fa: "ایستگاه اتوبوس نزدیک هتل من است." }, { en: "I wait at the bus stop.", fa: "من در ایستگاه اتوبوس منتظر می‌مانم." }, { en: "The bus stop is across the street.", fa: "ایستگاه اتوبوس آن طرف خیابان است." }] },
      { word: "driver", meaning: "راننده", en: "The driver takes us to the hotel.", fa: "راننده ما را به هتل می‌برد.", icon: "🧑‍✈️", examples: [{ en: "The driver takes us to the hotel.", fa: "راننده ما را به هتل می‌برد." }, { en: "The taxi driver is friendly.", fa: "راننده تاکسی خوش‌برخورد است." }, { en: "Ask the driver for help.", fa: "از راننده کمک بخواه." }] },
      { word: "passenger", meaning: "مسافر", en: "The passengers are waiting for the bus.", fa: "مسافران منتظر اتوبوس هستند.", icon: "🧑‍💼", examples: [{ en: "The passengers are waiting for the bus.", fa: "مسافران منتظر اتوبوس هستند." }, { en: "Every passenger needs a ticket.", fa: "هر مسافر به یک بلیت نیاز دارد." }, { en: "The passenger sits near the window.", fa: "مسافر کنار پنجره می‌نشیند." }] },
      { word: "trip", meaning: "سفر", en: "We have a trip next week.", fa: "ما هفته آینده یک سفر داریم.", icon: "🧳", examples: [{ en: "We have a trip next week.", fa: "ما هفته آینده یک سفر داریم." }, { en: "My trip was very fun.", fa: "سفر من خیلی سرگرم‌کننده بود." }, { en: "I take pictures during my trip.", fa: "من در طول سفرم عکس می‌گیرم." }] },
      { word: "journey", meaning: "سفر، مسیر سفر", en: "The journey takes three hours.", fa: "این سفر سه ساعت طول می‌کشد.", icon: "🛣️", examples: [{ en: "The journey takes three hours.", fa: "این سفر سه ساعت طول می‌کشد." }, { en: "We enjoy our journey.", fa: "ما از سفرمان لذت می‌بریم." }, { en: "It is a long journey.", fa: "این یک سفر طولانی است." }] },
      { word: "vacation", meaning: "تعطیلات، سفر تفریحی", en: "We go on vacation in summer.", fa: "ما در تابستان به تعطیلات می‌رویم.", icon: "🏖️", examples: [{ en: "We go on vacation in summer.", fa: "ما در تابستان به تعطیلات می‌رویم." }, { en: "My vacation was great.", fa: "تعطیلات من عالی بود." }, { en: "I take photos during my vacation.", fa: "من در طول تعطیلاتم عکس می‌گیرم." }] },
      { word: "traveler", meaning: "مسافر، سفرکننده", en: "The traveler has a small bag.", fa: "مسافر یک کیف کوچک دارد.", icon: "🧳", examples: [{ en: "The traveler has a small bag.", fa: "مسافر یک کیف کوچک دارد." }, { en: "Many travelers visit this city.", fa: "مسافران زیادی از این شهر دیدن می‌کنند." }, { en: "A traveler needs a good map.", fa: "یک مسافر به یک نقشه خوب نیاز دارد." }] },
      { word: "arrive", meaning: "رسیدن", en: "We arrive at the hotel at night.", fa: "ما شب به هتل می‌رسیم.", icon: "🛬", examples: [{ en: "We arrive at the hotel at night.", fa: "ما شب به هتل می‌رسیم." }, { en: "The train arrives at five.", fa: "قطار ساعت پنج می‌رسد." }, { en: "I arrive early at the airport.", fa: "من زود به فرودگاه می‌رسم." }] },
      { word: "leave", meaning: "ترک کردن، رفتن", en: "We leave the hotel in the morning.", fa: "ما صبح هتل را ترک می‌کنیم.", icon: "🛫", examples: [{ en: "We leave the hotel in the morning.", fa: "ما صبح هتل را ترک می‌کنیم." }, { en: "The bus leaves at eight.", fa: "اتوبوس ساعت هشت حرکت می‌کند." }, { en: "I leave home early for my trip.", fa: "من برای سفرم زود از خانه بیرون می‌روم." }] },
      { word: "drive", meaning: "رانندگی کردن", en: "I drive to the airport.", fa: "من با ماشین به فرودگاه می‌روم.", icon: "🚗", examples: [{ en: "I drive to the airport.", fa: "من با ماشین به فرودگاه می‌روم." }, { en: "She can drive a car.", fa: "او می‌تواند رانندگی کند." }, { en: "We drive through the city.", fa: "ما در شهر رانندگی می‌کنیم." }] },
      { word: "ride", meaning: "سوار شدن، رفت‌وآمد کردن", en: "I ride the bus to school.", fa: "من با اتوبوس به مدرسه می‌روم.", icon: "🚲", examples: [{ en: "I ride the bus to school.", fa: "من با اتوبوس به مدرسه می‌روم." }, { en: "We ride in a taxi.", fa: "ما سوار تاکسی می‌شویم." }, { en: "He rides a bike in the city.", fa: "او در شهر دوچرخه‌سواری می‌کند." }] },
      { word: "stop", meaning: "توقفگاه، ایستگاه", en: "The next stop is downtown.", fa: "ایستگاه بعدی مرکز شهر است.", icon: "🛑", examples: [{ en: "The next stop is downtown.", fa: "ایستگاه بعدی مرکز شهر است." }, { en: "Get off at the next stop.", fa: "در ایستگاه بعدی پیاده شو." }, { en: "The bus makes many stops.", fa: "اتوبوس توقف‌های زیادی دارد." }] },
      { word: "direction", meaning: "جهت، مسیر", en: "Can you give me directions?", fa: "می‌توانی مسیر را به من بگویی؟", icon: "🧭", examples: [{ en: "Can you give me directions?", fa: "می‌توانی مسیر را به من بگویی؟" }, { en: "I need directions to the hotel.", fa: "من مسیر هتل را نیاز دارم." }, { en: "The sign shows the direction.", fa: "تابلو مسیر را نشان می‌دهد." }] },
      { word: "left", meaning: "چپ", en: "Turn left at the corner.", fa: "سر خیابان به چپ بپیچ.", icon: "⬅️", examples: [{ en: "Turn left at the corner.", fa: "سر خیابان به چپ بپیچ." }, { en: "The store is on the left.", fa: "فروشگاه سمت چپ است." }, { en: "My hotel is on the left side.", fa: "هتل من در سمت چپ است." }] },
      { word: "right", meaning: "راست", en: "Turn right after the bank.", fa: "بعد از بانک به راست بپیچ.", icon: "➡️", examples: [{ en: "Turn right after the bank.", fa: "بعد از بانک به راست بپیچ." }, { en: "The restaurant is on the right.", fa: "رستوران سمت راست است." }, { en: "Keep right on this road.", fa: "در این جاده سمت راست بمان." }] },
      { word: "straight", meaning: "مستقیم", en: "Go straight for two blocks.", fa: "دو خیابان مستقیم برو.", icon: "⬆️", examples: [{ en: "Go straight for two blocks.", fa: "دو خیابان مستقیم برو." }, { en: "Walk straight ahead.", fa: "مستقیم جلو برو." }, { en: "The hotel is straight ahead.", fa: "هتل مستقیم جلو است." }] },
      { word: "near", meaning: "نزدیک", en: "The airport is near the city.", fa: "فرودگاه نزدیک شهر است.", icon: "📍", examples: [{ en: "The airport is near the city.", fa: "فرودگاه نزدیک شهر است." }, { en: "Is there a restaurant near here?", fa: "آیا رستورانی نزدیک اینجا هست؟" }, { en: "My hotel is near the station.", fa: "هتل من نزدیک ایستگاه است." }] },
      { word: "far", meaning: "دور", en: "The airport is far from here.", fa: "فرودگاه از اینجا دور است.", icon: "🔭", examples: [{ en: "The airport is far from here.", fa: "فرودگاه از اینجا دور است." }, { en: "The hotel is not far from the station.", fa: "هتل از ایستگاه دور نیست." }, { en: "How far is the city center?", fa: "مرکز شهر چقدر دور است؟" }] },
      { word: "guide", meaning: "راهنما", en: "The guide shows us the city.", fa: "راهنما شهر را به ما نشان می‌دهد.", icon: "🗺️", examples: [{ en: "The guide shows us the city.", fa: "راهنما شهر را به ما نشان می‌دهد." }, { en: "We have a travel guide.", fa: "ما یک راهنمای سفر داریم." }, { en: "The guide tells us about the museum.", fa: "راهنما درباره موزه به ما توضیح می‌دهد." }] },
      { word: "tourist", meaning: "گردشگر", en: "Many tourists visit this city.", fa: "گردشگران زیادی از این شهر دیدن می‌کنند.", icon: "🧳", examples: [{ en: "Many tourists visit this city.", fa: "گردشگران زیادی از این شهر دیدن می‌کنند." }, { en: "The tourist takes pictures.", fa: "گردشگر عکس می‌گیرد." }, { en: "This place is popular with tourists.", fa: "این مکان بین گردشگران محبوب است." }] },
      { word: "city", meaning: "شهر", en: "This city is beautiful.", fa: "این شهر زیباست.", icon: "🌆", examples: [{ en: "This city is beautiful.", fa: "این شهر زیباست." }, { en: "I want to visit this city.", fa: "من می‌خواهم از این شهر دیدن کنم." }, { en: "The city has many restaurants.", fa: "این شهر رستوران‌های زیادی دارد." }] },
      { word: "country", meaning: "کشور", en: "Canada is a beautiful country.", fa: "کانادا کشور زیبایی است.", icon: "🌍", examples: [{ en: "Canada is a beautiful country.", fa: "کانادا کشور زیبایی است." }, { en: "I want to visit another country.", fa: "من می‌خواهم از کشور دیگری دیدن کنم." }, { en: "This country has many interesting places.", fa: "این کشور مکان‌های جالب زیادی دارد." }] },
      { word: "village", meaning: "روستا", en: "My grandparents live in a village.", fa: "پدربزرگ و مادربزرگم در یک روستا زندگی می‌کنند.", icon: "🏡", examples: [{ en: "My grandparents live in a village.", fa: "پدربزرگ و مادربزرگم در یک روستا زندگی می‌کنند." }, { en: "We visit a small village.", fa: "ما از یک روستای کوچک دیدن می‌کنیم." }, { en: "The village is very quiet.", fa: "روستا خیلی آرام است." }] },
      { word: "park", meaning: "پارک", en: "We walk in the park.", fa: "ما در پارک قدم می‌زنیم.", icon: "🌳", examples: [{ en: "We walk in the park.", fa: "ما در پارک قدم می‌زنیم." }, { en: "The park is near the hotel.", fa: "پارک نزدیک هتل است." }, { en: "Many people visit this park.", fa: "افراد زیادی از این پارک دیدن می‌کنند." }] },
      { word: "museum", meaning: "موزه", en: "We visit the museum today.", fa: "ما امروز از موزه دیدن می‌کنیم.", icon: "🏛️", examples: [{ en: "We visit the museum today.", fa: "ما امروز از موزه دیدن می‌کنیم." }, { en: "The museum is in the city center.", fa: "موزه در مرکز شهر است." }, { en: "The museum has many old things.", fa: "موزه چیزهای قدیمی زیادی دارد." }] },
      { word: "restaurant", meaning: "رستوران", en: "We eat at a restaurant tonight.", fa: "ما امشب در یک رستوران غذا می‌خوریم.", icon: "🍽️", examples: [{ en: "We eat at a restaurant tonight.", fa: "ما امشب در یک رستوران غذا می‌خوریم." }, { en: "The restaurant is near the hotel.", fa: "رستوران نزدیک هتل است." }, { en: "This restaurant is very popular.", fa: "این رستوران خیلی محبوب است." }] },
      { word: "entrance", meaning: "ورودی", en: "The entrance is on the left.", fa: "ورودی سمت چپ است.", icon: "🚪", examples: [{ en: "The entrance is on the left.", fa: "ورودی سمت چپ است." }, { en: "We wait near the entrance.", fa: "ما نزدیک ورودی منتظر می‌مانیم." }, { en: "The museum entrance is free.", fa: "ورودی موزه رایگان است." }] },
      { word: "exit", meaning: "خروجی", en: "The exit is near the door.", fa: "خروجی نزدیک در است.", icon: "🚪", examples: [{ en: "The exit is near the door.", fa: "خروجی نزدیک در است." }, { en: "Follow the exit sign.", fa: "تابلو خروجی را دنبال کن." }, { en: "We leave through the exit.", fa: "ما از خروجی بیرون می‌رویم." }] },
      { word: "floor", meaning: "طبقه", en: "My room is on the second floor.", fa: "اتاق من در طبقه دوم است.", icon: "🏢", examples: [{ en: "My room is on the second floor.", fa: "اتاق من در طبقه دوم است." }, { en: "The elevator goes to every floor.", fa: "آسانسور به هر طبقه می‌رود." }, { en: "The hotel has five floors.", fa: "هتل پنج طبقه دارد." }] },
      { word: "room", meaning: "اتاق", en: "My hotel room is clean.", fa: "اتاق هتل من تمیز است.", icon: "🛏️", examples: [{ en: "My hotel room is clean.", fa: "اتاق هتل من تمیز است." }, { en: "I have a room with a window.", fa: "من اتاقی با پنجره دارم." }, { en: "The room is on the third floor.", fa: "اتاق در طبقه سوم است." }] },
      { word: "reservation", meaning: "رزرو", en: "I have a hotel reservation.", fa: "من رزرو هتل دارم.", icon: "📝", examples: [{ en: "I have a hotel reservation.", fa: "من رزرو هتل دارم." }, { en: "We make a reservation online.", fa: "ما آنلاین رزرو انجام می‌دهیم." }, { en: "The restaurant has my reservation.", fa: "رستوران رزرو من را دارد." }] },
      { word: "check in", meaning: "پذیرش شدن، ورود ثبت کردن", en: "We check in at the hotel at three.", fa: "ما ساعت سه در هتل پذیرش می‌شویم.", icon: "🛎️", examples: [{ en: "We check in at the hotel at three.", fa: "ما ساعت سه در هتل پذیرش می‌شویم." }, { en: "I need to check in before my flight.", fa: "من باید قبل از پرواز پذیرش شوم." }, { en: "She checks in at the front desk.", fa: "او در میز پذیرش ثبت ورود می‌کند." }] },
      { word: "check out", meaning: "تسویه و خروج از هتل", en: "We check out in the morning.", fa: "ما صبح از هتل خارج می‌شویم.", icon: "🛎️", examples: [{ en: "We check out in the morning.", fa: "ما صبح از هتل خارج می‌شویم." }, { en: "I need to check out today.", fa: "من باید امروز تسویه کنم." }, { en: "They check out before noon.", fa: "آن‌ها قبل از ظهر از هتل خارج می‌شوند." }] },
      { word: "key card", meaning: "کارت اتاق", en: "My key card does not work.", fa: "کارت اتاق من کار نمی‌کند.", icon: "💳", examples: [{ en: "My key card does not work.", fa: "کارت اتاق من کار نمی‌کند." }, { en: "Keep your key card safe.", fa: "کارت اتاقت را نگه دار." }, { en: "The hotel gives me a key card.", fa: "هتل به من یک کارت اتاق می‌دهد." }] },
      { word: "luggage", meaning: "چمدان و وسایل سفر", en: "My luggage is heavy.", fa: "وسایل سفر من سنگین است.", icon: "🧳", examples: [{ en: "My luggage is heavy.", fa: "وسایل سفر من سنگین است." }, { en: "I carry my luggage to the car.", fa: "من وسایل سفرم را به ماشین می‌برم." }, { en: "The airline lost my luggage.", fa: "شرکت هواپیمایی وسایل سفرم را گم کرد." }] },
      { word: "backpack", meaning: "کوله‌پشتی", en: "My backpack is small and light.", fa: "کوله‌پشتی من کوچک و سبک است.", icon: "🎒", examples: [{ en: "My backpack is small and light.", fa: "کوله‌پشتی من کوچک و سبک است." }, { en: "I put my camera in my backpack.", fa: "دوربینم را داخل کوله‌پشتی می‌گذارم." }, { en: "He carries a backpack while traveling.", fa: "او هنگام سفر یک کوله‌پشتی حمل می‌کند." }] },
      { word: "flight", meaning: "پرواز", en: "My flight is tomorrow morning.", fa: "پرواز من فردا صبح است.", icon: "✈️", examples: [{ en: "My flight is tomorrow morning.", fa: "پرواز من فردا صبح است." }, { en: "The flight is two hours long.", fa: "پرواز دو ساعت طول می‌کشد." }, { en: "I check my flight time.", fa: "من زمان پروازم را بررسی می‌کنم." }] },
      { word: "airplane", meaning: "هواپیما", en: "The airplane is very big.", fa: "هواپیما خیلی بزرگ است.", icon: "✈️", examples: [{ en: "The airplane is very big.", fa: "هواپیما خیلی بزرگ است." }, { en: "We travel by airplane.", fa: "ما با هواپیما سفر می‌کنیم." }, { en: "The airplane arrives on time.", fa: "هواپیما به موقع می‌رسد." }] },
      { word: "gate", meaning: "گیت، دروازه ورود", en: "Our gate is number five.", fa: "گیت ما شماره پنج است.", icon: "🛫", examples: [{ en: "Our gate is number five.", fa: "گیت ما شماره پنج است." }, { en: "Please wait near the gate.", fa: "لطفاً نزدیک گیت منتظر بمان." }, { en: "The gate opens at six.", fa: "گیت ساعت شش باز می‌شود." }] },
      { word: "boarding pass", meaning: "کارت پرواز", en: "I show my boarding pass at the gate.", fa: "من کارت پروازم را در گیت نشان می‌دهم.", icon: "🎫", examples: [{ en: "I show my boarding pass at the gate.", fa: "من کارت پروازم را در گیت نشان می‌دهم." }, { en: "Do not lose your boarding pass.", fa: "کارت پروازت را گم نکن." }, { en: "She has her boarding pass ready.", fa: "او کارت پروازش را آماده دارد." }] },
      { word: "travel", meaning: "سفر کردن", en: "I love to travel.", fa: "من دوست دارم سفر کنم.", icon: "🧳", examples: [{ en: "I love to travel.", fa: "من دوست دارم سفر کنم." }, { en: "We travel every summer.", fa: "ما هر تابستان سفر می‌کنیم." }, { en: "She travels with her family.", fa: "او با خانواده‌اش سفر می‌کند." }] },
      { word: "address", meaning: "آدرس", en: "I wrote the hotel address on my phone.", fa: "من آدرس هتل را در گوشی‌ام نوشتم.", icon: "📍", examples: [{ en: "I wrote the hotel address on my phone.", fa: "من آدرس هتل را در گوشی‌ام نوشتم." }, { en: "Can you tell me your address?", fa: "می‌توانی آدرست را به من بگویی؟" }, { en: "The taxi driver needs the address.", fa: "راننده تاکسی به آدرس نیاز دارد." }] },
      { word: "location", meaning: "موقعیت، مکان", en: "The hotel location is very good.", fa: "موقعیت هتل خیلی خوب است.", icon: "📌", examples: [{ en: "The hotel location is very good.", fa: "موقعیت هتل خیلی خوب است." }, { en: "I check the location on my phone.", fa: "من موقعیت را در گوشی‌ام بررسی می‌کنم." }, { en: "This location is easy to find.", fa: "پیدا کردن این مکان آسان است." }] },
      { word: "downtown", meaning: "مرکز شهر", en: "We go downtown by subway.", fa: "ما با مترو به مرکز شهر می‌رویم.", icon: "🏙️", examples: [{ en: "We go downtown by subway.", fa: "ما با مترو به مرکز شهر می‌رویم." }, { en: "There are many shops downtown.", fa: "فروشگاه‌های زیادی در مرکز شهر هستند." }, { en: "My hotel is close to downtown.", fa: "هتل من نزدیک مرکز شهر است." }] },
      { word: "bridge", meaning: "پل", en: "The bridge is near the city center.", fa: "پل نزدیک مرکز شهر است.", icon: "🌉", examples: [{ en: "The bridge is near the city center.", fa: "پل نزدیک مرکز شهر است." }, { en: "We walk across the bridge.", fa: "ما از روی پل رد می‌شویم." }, { en: "The driver crosses the bridge.", fa: "راننده از پل عبور می‌کند." }] },
      { word: "corner", meaning: "گوشه، تقاطع خیابان", en: "Turn left at the corner.", fa: "سر گوشه به چپ بپیچ.", icon: "📐", examples: [{ en: "Turn left at the corner.", fa: "سر گوشه به چپ بپیچ." }, { en: "The store is on the corner.", fa: "فروشگاه سر خیابان است." }, { en: "I wait for you at the corner.", fa: "من در گوشه خیابان منتظرت می‌مانم." }] },
      { word: "sign", meaning: "تابلو، علامت", en: "Follow the signs to the exit.", fa: "تابلوها را تا خروجی دنبال کن.", icon: "🪧", examples: [{ en: "Follow the signs to the exit.", fa: "تابلوها را تا خروجی دنبال کن." }, { en: "The sign shows the way.", fa: "تابلو مسیر را نشان می‌دهد." }, { en: "I read the street sign.", fa: "من تابلو خیابان را می‌خوانم." }] },
      { word: "cross", meaning: "عبور کردن", en: "Cross the street carefully.", fa: "با دقت از خیابان عبور کن.", icon: "🚶", examples: [{ en: "Cross the street carefully.", fa: "با دقت از خیابان عبور کن." }, { en: "We cross the bridge on foot.", fa: "ما پیاده از پل عبور می‌کنیم." }, { en: "The road is easy to cross.", fa: "عبور از این جاده آسان است." }] },
      { word: "follow", meaning: "دنبال کردن", en: "Follow this road to the hotel.", fa: "این جاده را تا هتل دنبال کن.", icon: "👣", examples: [{ en: "Follow this road to the hotel.", fa: "این جاده را تا هتل دنبال کن." }, { en: "Follow the signs at the airport.", fa: "تابلوها را در فرودگاه دنبال کن." }, { en: "I follow the map.", fa: "من نقشه را دنبال می‌کنم." }] },
      { word: "lost", meaning: "گم‌شده", en: "I am lost. Can you help me?", fa: "من گم شده‌ام. می‌توانی کمکم کنی؟", icon: "❓", examples: [{ en: "I am lost. Can you help me?", fa: "من گم شده‌ام. می‌توانی کمکم کنی؟" }, { en: "The tourist is lost in the city.", fa: "گردشگر در شهر گم شده است." }, { en: "We got lost on the way.", fa: "ما در مسیر گم شدیم." }] },
      { word: "help", meaning: "کمک", en: "Can you help me find this place?", fa: "می‌توانی کمکم کنی این مکان را پیدا کنم؟", icon: "🆘", examples: [{ en: "Can you help me find this place?", fa: "می‌توانی کمکم کنی این مکان را پیدا کنم؟" }, { en: "I need help with my luggage.", fa: "من برای وسایل سفرم کمک نیاز دارم." }, { en: "The hotel staff helps travelers.", fa: "کارکنان هتل به مسافران کمک می‌کنند." }] },
      { word: "information", meaning: "اطلاعات", en: "I need more information about the flight.", fa: "من اطلاعات بیشتری درباره پرواز نیاز دارم.", icon: "ℹ️", examples: [{ en: "I need more information about the flight.", fa: "من اطلاعات بیشتری درباره پرواز نیاز دارم." }, { en: "The desk gives travel information.", fa: "میز اطلاعات، اطلاعات سفر می‌دهد." }, { en: "This sign has useful information.", fa: "این تابلو اطلاعات مفیدی دارد." }] },
      { word: "office", meaning: "دفتر", en: "The information office is near the entrance.", fa: "دفتر اطلاعات نزدیک ورودی است.", icon: "🏢", examples: [{ en: "The information office is near the entrance.", fa: "دفتر اطلاعات نزدیک ورودی است." }, { en: "I ask the office for help.", fa: "من از دفتر کمک می‌خواهم." }, { en: "The travel office opens at nine.", fa: "دفتر سفر ساعت نه باز می‌شود." }] },
      { word: "staff", meaning: "کارکنان", en: "The hotel staff is friendly.", fa: "کارکنان هتل خوش‌برخورد هستند.", icon: "👥", examples: [{ en: "The hotel staff is friendly.", fa: "کارکنان هتل خوش‌برخورد هستند." }, { en: "Ask the staff for help.", fa: "از کارکنان کمک بخواه." }, { en: "The airport staff checks tickets.", fa: "کارکنان فرودگاه بلیت‌ها را بررسی می‌کنند." }] },
      { word: "elevator", meaning: "آسانسور", en: "The elevator is on the left.", fa: "آسانسور سمت چپ است.", icon: "🛗", examples: [{ en: "The elevator is on the left.", fa: "آسانسور سمت چپ است." }, { en: "I take the elevator to my room.", fa: "من با آسانسور به اتاقم می‌روم." }, { en: "The hotel elevator is very fast.", fa: "آسانسور هتل خیلی سریع است." }] },
      { word: "key", meaning: "کلید", en: "I have the hotel room key.", fa: "من کلید اتاق هتل را دارم.", icon: "🔑", examples: [{ en: "I have the hotel room key.", fa: "من کلید اتاق هتل را دارم." }, { en: "Do not lose your key.", fa: "کلیدت را گم نکن." }, { en: "The key is on the desk.", fa: "کلید روی میز است." }] },
      { word: "towel", meaning: "حوله", en: "The hotel gives us clean towels.", fa: "هتل به ما حوله‌های تمیز می‌دهد.", icon: "🧴", examples: [{ en: "The hotel gives us clean towels.", fa: "هتل به ما حوله‌های تمیز می‌دهد." }, { en: "I need a towel after my shower.", fa: "بعد از حمام به حوله نیاز دارم." }, { en: "The towel is in the bathroom.", fa: "حوله در حمام است." }] },
      { word: "shower", meaning: "دوش", en: "My hotel room has a shower.", fa: "اتاق هتل من دوش دارد.", icon: "🚿", examples: [{ en: "My hotel room has a shower.", fa: "اتاق هتل من دوش دارد." }, { en: "I take a shower after traveling.", fa: "من بعد از سفر دوش می‌گیرم." }, { en: "The shower is clean.", fa: "دوش تمیز است." }] },
      { word: "blanket", meaning: "پتو", en: "I need another blanket.", fa: "من یک پتوی دیگر نیاز دارم.", icon: "🛏️", examples: [{ en: "I need another blanket.", fa: "من یک پتوی دیگر نیاز دارم." }, { en: "The hotel room has a warm blanket.", fa: "اتاق هتل یک پتوی گرم دارد." }, { en: "The blanket is on the bed.", fa: "پتو روی تخت است." }] },
      { word: "safe", meaning: "امن", en: "This area is safe at night.", fa: "این منطقه شب‌ها امن است.", icon: "🛡️", examples: [{ en: "This area is safe at night.", fa: "این منطقه شب‌ها امن است." }, { en: "Keep your money safe.", fa: "پولت را امن نگه دار." }, { en: "Have a safe trip.", fa: "سفر امنی داشته باشی." }] },
      { word: "money", meaning: "پول", en: "I need some money for my trip.", fa: "من برای سفرم به مقداری پول نیاز دارم.", icon: "💵", examples: [{ en: "I need some money for my trip.", fa: "من برای سفرم به مقداری پول نیاز دارم." }, { en: "Keep your money in a safe place.", fa: "پولت را در جای امن نگه دار." }, { en: "I change money at the airport.", fa: "من در فرودگاه پول عوض می‌کنم." }] },
      { word: "card", meaning: "کارت", en: "I pay with my card.", fa: "من با کارتم پرداخت می‌کنم.", icon: "💳", examples: [{ en: "I pay with my card.", fa: "من با کارتم پرداخت می‌کنم." }, { en: "Keep your card with you.", fa: "کارتت را همراهت نگه دار." }, { en: "The hotel needs my card information.", fa: "هتل اطلاعات کارت من را نیاز دارد." }] },
      { word: "wallet", meaning: "کیف پول", en: "I keep my money in my wallet.", fa: "من پولم را در کیف پولم نگه می‌دارم.", icon: "👛", examples: [{ en: "I keep my money in my wallet.", fa: "من پولم را در کیف پولم نگه می‌دارم." }, { en: "I lost my wallet during the trip.", fa: "من در طول سفر کیف پولم را گم کردم." }, { en: "My wallet is in my backpack.", fa: "کیف پولم داخل کوله‌پشتی‌ام است." }] },
      { word: "cash", meaning: "پول نقد", en: "I need some cash for the trip.", fa: "من برای سفر به کمی پول نقد نیاز دارم.", icon: "💶", examples: [{ en: "I need some cash for the trip.", fa: "من برای سفر به کمی پول نقد نیاز دارم." }, { en: "Do you have cash with you?", fa: "آیا پول نقد همراهت داری؟" }, { en: "This store only takes cash.", fa: "این فروشگاه فقط پول نقد قبول می‌کند." }] },
      { word: "change", meaning: "باقی پول، پول خرد", en: "Here is your change.", fa: "این هم باقی پول شما.", icon: "🪙", examples: [{ en: "Here is your change.", fa: "این هم باقی پول شما." }, { en: "I need some change for the bus.", fa: "من برای اتوبوس مقداری پول خرد نیاز دارم." }, { en: "The cashier gives me my change.", fa: "صندوق‌دار باقی پولم را به من می‌دهد." }] },
      { word: "price", meaning: "قیمت", en: "What is the price of this ticket?", fa: "قیمت این بلیت چقدر است؟", icon: "🏷️", examples: [{ en: "What is the price of this ticket?", fa: "قیمت این بلیت چقدر است؟" }, { en: "The hotel price is good.", fa: "قیمت هتل خوب است." }, { en: "I ask about the price before buying.", fa: "من قبل از خرید درباره قیمت می‌پرسم." }] },
      { word: "cheap", meaning: "ارزان", en: "This hotel is cheap and clean.", fa: "این هتل ارزان و تمیز است.", icon: "🏷️", examples: [{ en: "This hotel is cheap and clean.", fa: "این هتل ارزان و تمیز است." }, { en: "I found a cheap flight.", fa: "من یک پرواز ارزان پیدا کردم." }, { en: "The ticket is cheap today.", fa: "بلیت امروز ارزان است." }] },
      { word: "expensive", meaning: "گران", en: "This restaurant is expensive.", fa: "این رستوران گران است.", icon: "💎", examples: [{ en: "This restaurant is expensive.", fa: "این رستوران گران است." }, { en: "The hotel is too expensive for me.", fa: "هتل برای من خیلی گران است." }, { en: "Flights are expensive during holidays.", fa: "پروازها در تعطیلات گران هستند." }] },
      { word: "buy", meaning: "خریدن", en: "I buy a ticket online.", fa: "من یک بلیت آنلاین می‌خرم.", icon: "🛍️", examples: [{ en: "I buy a ticket online.", fa: "من یک بلیت آنلاین می‌خرم." }, { en: "She buys a gift during her trip.", fa: "او در طول سفرش یک هدیه می‌خرد." }, { en: "We buy food before the trip.", fa: "ما قبل از سفر غذا می‌خریم." }] },
      { word: "pay", meaning: "پرداخت کردن", en: "I pay for the hotel room.", fa: "من هزینه اتاق هتل را پرداخت می‌کنم.", icon: "💳", examples: [{ en: "I pay for the hotel room.", fa: "من هزینه اتاق هتل را پرداخت می‌کنم." }, { en: "Can I pay by card?", fa: "می‌توانم با کارت پرداخت کنم؟" }, { en: "We pay for our tickets.", fa: "ما هزینه بلیت‌هایمان را پرداخت می‌کنیم." }] },
      { word: "carry", meaning: "حمل کردن، با خود بردن", en: "I carry my backpack at the airport.", fa: "من در فرودگاه کوله‌پشتی‌ام را حمل می‌کنم.", icon: "🎒", examples: [{ en: "I carry my backpack at the airport.", fa: "من در فرودگاه کوله‌پشتی‌ام را حمل می‌کنم." }, { en: "She carries her luggage upstairs.", fa: "او وسایل سفرش را به طبقه بالا می‌برد." }, { en: "Do not carry too many bags.", fa: "کیف‌های زیادی حمل نکن." }] },
      { word: "pack", meaning: "بستن چمدان، جمع کردن وسایل", en: "I pack my bag before traveling.", fa: "من قبل از سفر کیفم را آماده می‌کنم.", icon: "🧳", examples: [{ en: "I pack my bag before traveling.", fa: "من قبل از سفر کیفم را آماده می‌کنم." }, { en: "She packs her clothes tonight.", fa: "او امشب لباس‌هایش را جمع می‌کند." }, { en: "We need to pack early.", fa: "ما باید زود وسایل‌مان را جمع کنیم." }] },
      { word: "unpack", meaning: "باز کردن چمدان، خالی کردن وسایل", en: "I unpack my bag at the hotel.", fa: "من در هتل کیفم را باز می‌کنم.", icon: "📦", examples: [{ en: "I unpack my bag at the hotel.", fa: "من در هتل کیفم را باز می‌کنم." }, { en: "She unpacks her clothes after arriving.", fa: "او بعد از رسیدن لباس‌هایش را از چمدان بیرون می‌آورد." }, { en: "We unpack when we get home.", fa: "ما وقتی به خانه می‌رسیم وسایل‌مان را باز می‌کنیم." }] },
      { word: "plan", meaning: "برنامه‌ریزی کردن", en: "We plan our trip together.", fa: "ما با هم برای سفرمان برنامه‌ریزی می‌کنیم.", icon: "📋", examples: [{ en: "We plan our trip together.", fa: "ما با هم برای سفرمان برنامه‌ریزی می‌کنیم." }, { en: "I plan my vacation early.", fa: "من زود برای تعطیلاتم برنامه‌ریزی می‌کنم." }, { en: "She plans where to go.", fa: "او برنامه‌ریزی می‌کند کجا برود." }] },
      { word: "schedule", meaning: "برنامه زمانی", en: "I check the flight schedule.", fa: "من برنامه زمانی پرواز را بررسی می‌کنم.", icon: "🗓️", examples: [{ en: "I check the flight schedule.", fa: "من برنامه زمانی پرواز را بررسی می‌کنم." }, { en: "The bus schedule is on the wall.", fa: "برنامه زمانی اتوبوس روی دیوار است." }, { en: "Our travel schedule is busy.", fa: "برنامه سفر ما شلوغ است." }] },
      { word: "time", meaning: "زمان، وقت", en: "What time does the flight leave?", fa: "پرواز چه ساعتی حرکت می‌کند؟", icon: "⏰", examples: [{ en: "What time does the flight leave?", fa: "پرواز چه ساعتی حرکت می‌کند؟" }, { en: "I arrive on time.", fa: "من به موقع می‌رسم." }, { en: "We do not have much time.", fa: "ما زمان زیادی نداریم." }] },
      { word: "early", meaning: "زود", en: "I arrive early at the airport.", fa: "من زود به فرودگاه می‌رسم.", icon: "🌅", examples: [{ en: "I arrive early at the airport.", fa: "من زود به فرودگاه می‌رسم." }, { en: "We leave early in the morning.", fa: "ما صبح زود حرکت می‌کنیم." }, { en: "The bus comes early today.", fa: "اتوبوس امروز زود می‌آید." }] },
      { word: "late", meaning: "دیر", en: "The train is late.", fa: "قطار دیر کرده است.", icon: "⏳", examples: [{ en: "The train is late.", fa: "قطار دیر کرده است." }, { en: "I am late for my flight.", fa: "من برای پروازم دیر کرده‌ام." }, { en: "The bus arrived late.", fa: "اتوبوس دیر رسید." }] },
      { word: "cancel", meaning: "لغو کردن", en: "The airline canceled the flight.", fa: "شرکت هواپیمایی پرواز را لغو کرد.", icon: "❌", examples: [{ en: "The airline canceled the flight.", fa: "شرکت هواپیمایی پرواز را لغو کرد." }, { en: "We cancel our hotel reservation.", fa: "ما رزرو هتل‌مان را لغو می‌کنیم." }, { en: "The trip is canceled because of the weather.", fa: "سفر به دلیل آب‌وهوا لغو شده است." }] },
      { word: "delay", meaning: "تأخیر", en: "The flight has a delay.", fa: "پرواز تأخیر دارد.", icon: "⏱️", examples: [{ en: "The flight has a delay.", fa: "پرواز تأخیر دارد." }, { en: "The bus delay is one hour.", fa: "تأخیر اتوبوس یک ساعت است." }, { en: "We wait because of the delay.", fa: "ما به خاطر تأخیر منتظر می‌مانیم." }] },
      { word: "weather", meaning: "آب‌وهوا", en: "The weather is good for traveling.", fa: "آب‌وهوا برای سفر خوب است.", icon: "⛅", examples: [{ en: "The weather is good for traveling.", fa: "آب‌وهوا برای سفر خوب است." }, { en: "I check the weather before my trip.", fa: "من قبل از سفرم آب‌وهوا را بررسی می‌کنم." }, { en: "The weather is cold today.", fa: "هوا امروز سرد است." }] },
      { word: "umbrella", meaning: "چتر", en: "I take an umbrella because it is raining.", fa: "چون باران می‌بارد، چتر برمی‌دارم.", icon: "☂️", examples: [{ en: "I take an umbrella because it is raining.", fa: "چون باران می‌بارد، چتر برمی‌دارم." }, { en: "My umbrella is in my bag.", fa: "چترم داخل کیفم است." }, { en: "Bring an umbrella for the trip.", fa: "برای سفر یک چتر بیاور." }] }
    ]
  },
  food: {
    name: "غذا و رستوران",
    words: [
      { word: "restaurant", meaning: "رستوران", en: "We ate dinner at a restaurant.", fa: "ما شام را در یک رستوران خوردیم.", icon: "🍽️", examples: [{ en: "We ate dinner at a restaurant.", fa: "ما شام را در یک رستوران خوردیم." }, { en: "The restaurant was full last night.", fa: "رستوران دیشب پر بود." }, { en: "We go to that restaurant often.", fa: "ما زیاد به آن رستوران می‌رویم." }] },
      { word: "menu", meaning: "منو", en: "Can I see the menu, please?", fa: "می‌شود منو را ببینم؟", icon: "📋", examples: [{ en: "Can I see the menu, please?", fa: "می‌شود منو را ببینم؟" }, { en: "The menu has many choices.", fa: "منو انتخاب‌های زیادی دارد." }, { en: "She read the menu quickly.", fa: "او منو را سریع خواند." }] },
      { word: "waiter", meaning: "گارسون", en: "The waiter brought our food.", fa: "گارسون غذای ما را آورد.", icon: "🤵", examples: [{ en: "The waiter brought our food.", fa: "گارسون غذای ما را آورد." }, { en: "The waiter is very polite.", fa: "گارسون خیلی مؤدب است." }, { en: "Ask the waiter for water.", fa: "از گارسون آب بخواه." }] },
      { word: "bread", meaning: "نان", en: "I eat bread every morning.", fa: "من هر روز صبح نان می‌خورم.", icon: "🍞", examples: [{ en: "I eat bread every morning.", fa: "من هر روز صبح نان می‌خورم." }, { en: "This bread smells amazing.", fa: "این نان بوی فوق‌العاده‌ای می‌دهد." }, { en: "She sliced the bread.", fa: "او نان را ورقه کرد." }] },
      { word: "rice", meaning: "برنج", en: "We usually cook rice for lunch.", fa: "ما معمولاً برای ناهار برنج می‌پزیم.", icon: "🍚", examples: [{ en: "We usually cook rice for lunch.", fa: "ما معمولاً برای ناهار برنج می‌پزیم." }, { en: "The rice needs more salt.", fa: "برنج نمک بیشتری نیاز دارد." }, { en: "They grow rice in the north.", fa: "آن‌ها در شمال برنج می‌کارند." }] },
      { word: "meat", meaning: "گوشت", en: "She doesn't eat meat.", fa: "او گوشت نمی‌خورد.", icon: "🥩", examples: [{ en: "She doesn't eat meat.", fa: "او گوشت نمی‌خورد." }, { en: "The meat is cooked well.", fa: "گوشت خوب پخته شده است." }, { en: "We bought meat from the butcher.", fa: "ما از قصابی گوشت خریدیم." }] },
      { word: "vegetable", meaning: "سبزیجات", en: "Vegetables are good for your health.", fa: "سبزیجات برای سلامتی خوب هستند.", icon: "🥦", examples: [{ en: "Vegetables are good for your health.", fa: "سبزیجات برای سلامتی خوب هستند." }, { en: "She grows vegetables in her garden.", fa: "او در باغچه‌اش سبزیجات می‌کارد." }, { en: "Eat your vegetables, please.", fa: "لطفاً سبزیجاتت را بخور." }] },
      { word: "fruit", meaning: "میوه", en: "I eat fruit after lunch.", fa: "من بعد از ناهار میوه می‌خورم.", icon: "🍎", examples: [{ en: "I eat fruit after lunch.", fa: "من بعد از ناهار میوه می‌خورم." }, { en: "The fruit is fresh and sweet.", fa: "میوه تازه و شیرین است." }, { en: "We bought fruit at the market.", fa: "ما از بازار میوه خریدیم." }] },
      { word: "juice", meaning: "آب‌میوه", en: "He drinks orange juice every day.", fa: "او هر روز آب‌پرتقال می‌نوشد.", icon: "🧃", examples: [{ en: "He drinks orange juice every day.", fa: "او هر روز آب‌پرتقال می‌نوشد." }, { en: "This juice is freshly squeezed.", fa: "این آب‌میوه تازه گرفته شده است." }, { en: "She made juice for the guests.", fa: "او برای مهمان‌ها آب‌میوه درست کرد." }] },
      { word: "coffee", meaning: "قهوه", en: "I drink coffee in the morning.", fa: "من صبح‌ها قهوه می‌نوشم.", icon: "☕", examples: [{ en: "I drink coffee in the morning.", fa: "من صبح‌ها قهوه می‌نوشم." }, { en: "He never drinks coffee at night.", fa: "او هرگز شب‌ها قهوه نمی‌نوشد." }, { en: "The coffee here is famous.", fa: "قهوه اینجا معروف است." }] },
      { word: "apple", meaning: "سیب", en: "I eat an apple every morning.", fa: "من هر صبح یک سیب می‌خورم.", icon: "🍎", examples: [{ en: "I eat an apple every morning.", fa: "من هر صبح یک سیب می‌خورم." }, { en: "She puts an apple in her bag.", fa: "او یک سیب در کیفش می‌گذارد." }, { en: "This apple is very sweet.", fa: "این سیب خیلی شیرین است." }] },
      { word: "banana", meaning: "موز", en: "I like bananas for breakfast.", fa: "من برای صبحانه موز دوست دارم.", icon: "🍌", examples: [{ en: "I like bananas for breakfast.", fa: "من برای صبحانه موز دوست دارم." }, { en: "He eats a banana after work.", fa: "او بعد از کار یک موز می‌خورد." }, { en: "The banana is ripe and sweet.", fa: "موز رسیده و شیرین است." }] },
      { word: "orange", meaning: "پرتقال", en: "I drink orange juice in the morning.", fa: "من صبح‌ها آب پرتقال می‌نوشم.", icon: "🍊", examples: [{ en: "I drink orange juice in the morning.", fa: "من صبح‌ها آب پرتقال می‌نوشم." }, { en: "She buys some oranges at the store.", fa: "او چند پرتقال از فروشگاه می‌خرد." }, { en: "This orange tastes good.", fa: "این پرتقال خوشمزه است." }] },
      { word: "egg", meaning: "تخم‌مرغ", en: "I eat eggs for breakfast.", fa: "من برای صبحانه تخم‌مرغ می‌خورم.", icon: "🥚", examples: [{ en: "I eat eggs for breakfast.", fa: "من برای صبحانه تخم‌مرغ می‌خورم." }, { en: "She cooks an egg in the kitchen.", fa: "او در آشپزخانه یک تخم‌مرغ درست می‌کند." }, { en: "We need two eggs for this recipe.", fa: "ما برای این دستور غذا به دو تخم‌مرغ نیاز داریم." }] },
      { word: "cheese", meaning: "پنیر", en: "I like cheese on my sandwich.", fa: "من پنیر روی ساندویچم دوست دارم.", icon: "🧀", examples: [{ en: "I like cheese on my sandwich.", fa: "من پنیر روی ساندویچم دوست دارم." }, { en: "She buys cheese from the store.", fa: "او از فروشگاه پنیر می‌خرد." }, { en: "This cheese tastes great.", fa: "این پنیر طعم عالی دارد." }] },
      { word: "milk", meaning: "شیر", en: "I drink milk every morning.", fa: "من هر صبح شیر می‌نوشم.", icon: "🥛", examples: [{ en: "I drink milk every morning.", fa: "من هر صبح شیر می‌نوشم." }, { en: "The child likes cold milk.", fa: "کودک شیر سرد دوست دارد." }, { en: "We need milk for the coffee.", fa: "ما برای قهوه به شیر نیاز داریم." }] },
      { word: "tea", meaning: "چای", en: "My grandmother drinks tea every day.", fa: "مادربزرگم هر روز چای می‌نوشد.", icon: "🫖", examples: [{ en: "My grandmother drinks tea every day.", fa: "مادربزرگم هر روز چای می‌نوشد." }, { en: "I want a cup of tea.", fa: "من یک فنجان چای می‌خواهم." }, { en: "The tea is hot.", fa: "چای داغ است." }] },
      { word: "sandwich", meaning: "ساندویچ", en: "I make a sandwich for lunch.", fa: "من برای ناهار یک ساندویچ درست می‌کنم.", icon: "🥪", examples: [{ en: "I make a sandwich for lunch.", fa: "من برای ناهار یک ساندویچ درست می‌کنم." }, { en: "She buys a sandwich at the restaurant.", fa: "او از رستوران یک ساندویچ می‌خرد." }, { en: "This sandwich is very fresh.", fa: "این ساندویچ خیلی تازه است." }] },
      { word: "chicken", meaning: "مرغ", en: "We eat chicken for dinner.", fa: "ما برای شام مرغ می‌خوریم.", icon: "🍗", examples: [{ en: "We eat chicken for dinner.", fa: "ما برای شام مرغ می‌خوریم." }, { en: "She cooks chicken with vegetables.", fa: "او مرغ را با سبزیجات درست می‌کند." }, { en: "I like grilled chicken.", fa: "من مرغ کبابی دوست دارم." }] },
      { word: "fish", meaning: "ماهی", en: "My family eats fish on Fridays.", fa: "خانواده من جمعه‌ها ماهی می‌خورند.", icon: "🐟", examples: [{ en: "My family eats fish on Fridays.", fa: "خانواده من جمعه‌ها ماهی می‌خورند." }, { en: "She cooks fish for dinner.", fa: "او برای شام ماهی درست می‌کند." }, { en: "This fish is fresh.", fa: "این ماهی تازه است." }] },
      { word: "soup", meaning: "سوپ", en: "I eat soup when I feel sick.", fa: "وقتی حالم خوب نیست سوپ می‌خورم.", icon: "🍲", examples: [{ en: "I eat soup when I feel sick.", fa: "وقتی حالم خوب نیست سوپ می‌خورم." }, { en: "She makes vegetable soup.", fa: "او سوپ سبزیجات درست می‌کند." }, { en: "The soup is very hot.", fa: "سوپ خیلی داغ است." }] },
      { word: "salad", meaning: "سالاد", en: "I have a salad with my lunch.", fa: "من با ناهارم سالاد می‌خورم.", icon: "🥗", examples: [{ en: "I have a salad with my lunch.", fa: "من با ناهارم سالاد می‌خورم." }, { en: "She makes a fresh salad.", fa: "او یک سالاد تازه درست می‌کند." }, { en: "The salad has tomatoes and lettuce.", fa: "سالاد گوجه و کاهو دارد." }] },
      { word: "potato", meaning: "سیب‌زمینی", en: "I like baked potatoes.", fa: "من سیب‌زمینی پخته دوست دارم.", icon: "🥔", examples: [{ en: "I like baked potatoes.", fa: "من سیب‌زمینی پخته دوست دارم." }, { en: "She cooks potatoes for dinner.", fa: "او برای شام سیب‌زمینی درست می‌کند." }, { en: "The potato is very hot.", fa: "سیب‌زمینی خیلی داغ است." }] },
      { word: "tomato", meaning: "گوجه‌فرنگی", en: "I put tomato in my sandwich.", fa: "من در ساندویچم گوجه می‌گذارم.", icon: "🍅", examples: [{ en: "I put tomato in my sandwich.", fa: "من در ساندویچم گوجه می‌گذارم." }, { en: "She cuts tomatoes for the salad.", fa: "او برای سالاد گوجه‌ها را خرد می‌کند." }, { en: "These tomatoes are fresh.", fa: "این گوجه‌ها تازه هستند." }] },
      { word: "onion", meaning: "پیاز", en: "I add onion to the soup.", fa: "من به سوپ پیاز اضافه می‌کنم.", icon: "🧅", examples: [{ en: "I add onion to the soup.", fa: "من به سوپ پیاز اضافه می‌کنم." }, { en: "She cuts an onion for dinner.", fa: "او برای شام یک پیاز خرد می‌کند." }, { en: "The onion smells strong.", fa: "پیاز بوی تندی دارد." }] },
      { word: "carrot", meaning: "هویج", en: "Rabbits like carrots.", fa: "خرگوش‌ها هویج دوست دارند.", icon: "🥕", examples: [{ en: "Rabbits like carrots.", fa: "خرگوش‌ها هویج دوست دارند." }, { en: "I eat carrots in my salad.", fa: "من در سالادم هویج می‌خورم." }, { en: "She cuts carrots for dinner.", fa: "او برای شام هویج خرد می‌کند." }] },
      { word: "sugar", meaning: "شکر", en: "I put sugar in my tea.", fa: "من در چایم شکر می‌ریزم.", icon: "🧂", examples: [{ en: "I put sugar in my tea.", fa: "من در چایم شکر می‌ریزم." }, { en: "This coffee has too much sugar.", fa: "این قهوه شکر زیادی دارد." }, { en: "We need some sugar for the cake.", fa: "ما برای کیک کمی شکر نیاز داریم." }] },
      { word: "salt", meaning: "نمک", en: "Please add some salt to the soup.", fa: "لطفاً کمی نمک به سوپ اضافه کن.", icon: "🧂", examples: [{ en: "Please add some salt to the soup.", fa: "لطفاً کمی نمک به سوپ اضافه کن." }, { en: "The food needs more salt.", fa: "غذا نمک بیشتری نیاز دارد." }, { en: "I do not eat much salt.", fa: "من زیاد نمک نمی‌خورم." }] },
      { word: "butter", meaning: "کره", en: "I put butter on my bread.", fa: "من روی نانم کره می‌مالم.", icon: "🧈", examples: [{ en: "I put butter on my bread.", fa: "من روی نانم کره می‌مالم." }, { en: "She cooks with butter.", fa: "او با کره آشپزی می‌کند." }, { en: "The butter is in the fridge.", fa: "کره در یخچال است." }] },
      { word: "breakfast", meaning: "صبحانه", en: "I eat breakfast at seven.", fa: "من ساعت هفت صبحانه می‌خورم.", icon: "🍳", examples: [{ en: "I eat breakfast at seven.", fa: "من ساعت هفت صبحانه می‌خورم." }, { en: "Breakfast is ready.", fa: "صبحانه آماده است." }, { en: "She makes breakfast for her family.", fa: "او برای خانواده‌اش صبحانه درست می‌کند." }] },
      { word: "lunch", meaning: "ناهار", en: "I eat lunch at work.", fa: "من در محل کار ناهار می‌خورم.", icon: "🍱", examples: [{ en: "I eat lunch at work.", fa: "من در محل کار ناهار می‌خورم." }, { en: "Lunch is ready now.", fa: "ناهار الان آماده است." }, { en: "We have lunch together.", fa: "ما با هم ناهار می‌خوریم." }] },
      { word: "dinner", meaning: "شام", en: "We have dinner at home.", fa: "ما در خانه شام می‌خوریم.", icon: "🍲", examples: [{ en: "We have dinner at home.", fa: "ما در خانه شام می‌خوریم." }, { en: "Dinner is at six tonight.", fa: "شام امشب ساعت شش است." }, { en: "She cooks dinner every day.", fa: "او هر روز شام درست می‌کند." }] },
      { word: "hungry", meaning: "گرسنه", en: "I am hungry after work.", fa: "من بعد از کار گرسنه هستم.", icon: "🤤", examples: [{ en: "I am hungry after work.", fa: "من بعد از کار گرسنه هستم." }, { en: "The children are hungry.", fa: "بچه‌ها گرسنه هستند." }, { en: "Are you hungry now?", fa: "الان گرسنه‌ای؟" }] },
      { word: "thirsty", meaning: "تشنه", en: "I am thirsty after walking.", fa: "من بعد از پیاده‌روی تشنه هستم.", icon: "🥤", examples: [{ en: "I am thirsty after walking.", fa: "من بعد از پیاده‌روی تشنه هستم." }, { en: "She feels thirsty in the summer.", fa: "او در تابستان احساس تشنگی می‌کند." }, { en: "Are you thirsty?", fa: "تشنه‌ای؟" }] },
      { word: "grape", meaning: "انگور", en: "I eat grapes after lunch.", fa: "من بعد از ناهار انگور می‌خورم.", icon: "🍇", examples: [{ en: "I eat grapes after lunch.", fa: "من بعد از ناهار انگور می‌خورم." }, { en: "These grapes are very sweet.", fa: "این انگورها خیلی شیرین هستند." }, { en: "She buys grapes at the market.", fa: "او از بازار انگور می‌خرد." }] },
      { word: "strawberry", meaning: "توت‌فرنگی", en: "I like strawberries in my yogurt.", fa: "من توت‌فرنگی را در ماستم دوست دارم.", icon: "🍓", examples: [{ en: "I like strawberries in my yogurt.", fa: "من توت‌فرنگی را در ماستم دوست دارم." }, { en: "She makes a strawberry dessert.", fa: "او یک دسر توت‌فرنگی درست می‌کند." }, { en: "The strawberries are fresh.", fa: "توت‌فرنگی‌ها تازه هستند." }] },
      { word: "lemon", meaning: "لیمو", en: "I add lemon to my tea.", fa: "من به چایم لیمو اضافه می‌کنم.", icon: "🍋", examples: [{ en: "I add lemon to my tea.", fa: "من به چایم لیمو اضافه می‌کنم." }, { en: "The lemon juice is fresh.", fa: "آب لیمو تازه است." }, { en: "She cuts a lemon for the fish.", fa: "او برای ماهی یک لیمو برش می‌دهد." }] },
      { word: "watermelon", meaning: "هندوانه", en: "We eat watermelon in summer.", fa: "ما در تابستان هندوانه می‌خوریم.", icon: "🍉", examples: [{ en: "We eat watermelon in summer.", fa: "ما در تابستان هندوانه می‌خوریم." }, { en: "This watermelon is very sweet.", fa: "این هندوانه خیلی شیرین است." }, { en: "She cuts the watermelon into pieces.", fa: "او هندوانه را به تکه‌هایی تقسیم می‌کند." }] },
      { word: "pasta", meaning: "پاستا", en: "I like pasta with cheese.", fa: "من پاستا با پنیر دوست دارم.", icon: "🍝", examples: [{ en: "I like pasta with cheese.", fa: "من پاستا با پنیر دوست دارم." }, { en: "She makes pasta for dinner.", fa: "او برای شام پاستا درست می‌کند." }, { en: "The pasta smells good.", fa: "پاستا بوی خوبی دارد." }] },
      { word: "noodle", meaning: "نودل، رشته", en: "I eat noodles for lunch.", fa: "من برای ناهار نودل می‌خورم.", icon: "🍜", examples: [{ en: "I eat noodles for lunch.", fa: "من برای ناهار نودل می‌خورم." }, { en: "She cooks noodles quickly.", fa: "او نودل را سریع درست می‌کند." }, { en: "The noodles are hot.", fa: "نودل‌ها داغ هستند." }] },
      { word: "cookie", meaning: "کلوچه، شیرینی کوچک", en: "I have a cookie with my coffee.", fa: "من با قهوه‌ام یک کلوچه می‌خورم.", icon: "🍪", examples: [{ en: "I have a cookie with my coffee.", fa: "من با قهوه‌ام یک کلوچه می‌خورم." }, { en: "She makes cookies at home.", fa: "او در خانه کلوچه درست می‌کند." }, { en: "These cookies are delicious.", fa: "این کلوچه‌ها خوشمزه هستند." }] },
      { word: "cake", meaning: "کیک", en: "We eat cake on birthdays.", fa: "ما در تولدها کیک می‌خوریم.", icon: "🎂", examples: [{ en: "We eat cake on birthdays.", fa: "ما در تولدها کیک می‌خوریم." }, { en: "She makes a chocolate cake.", fa: "او یک کیک شکلاتی درست می‌کند." }, { en: "The cake looks beautiful.", fa: "کیک زیبا به نظر می‌رسد." }] },
      { word: "chocolate", meaning: "شکلات", en: "I like dark chocolate.", fa: "من شکلات تلخ دوست دارم.", icon: "🍫", examples: [{ en: "I like dark chocolate.", fa: "من شکلات تلخ دوست دارم." }, { en: "She buys chocolate for her friend.", fa: "او برای دوستش شکلات می‌خرد." }, { en: "The chocolate is sweet.", fa: "شکلات شیرین است." }] },
      { word: "ice cream", meaning: "بستنی", en: "We eat ice cream in summer.", fa: "ما در تابستان بستنی می‌خوریم.", icon: "🍨", examples: [{ en: "We eat ice cream in summer.", fa: "ما در تابستان بستنی می‌خوریم." }, { en: "She wants chocolate ice cream.", fa: "او بستنی شکلاتی می‌خواهد." }, { en: "The ice cream is cold.", fa: "بستنی سرد است." }] },
      { word: "yogurt", meaning: "ماست", en: "I eat yogurt for breakfast.", fa: "من برای صبحانه ماست می‌خورم.", icon: "🥛", examples: [{ en: "I eat yogurt for breakfast.", fa: "من برای صبحانه ماست می‌خورم." }, { en: "She adds fruit to her yogurt.", fa: "او به ماستش میوه اضافه می‌کند." }, { en: "The yogurt is in the fridge.", fa: "ماست در یخچال است." }] },
      { word: "bottle", meaning: "بطری", en: "I have a bottle of water.", fa: "من یک بطری آب دارم.", icon: "🍾", examples: [{ en: "I have a bottle of water.", fa: "من یک بطری آب دارم." }, { en: "She puts juice in a bottle.", fa: "او آبمیوه را داخل بطری می‌ریزد." }, { en: "The bottle is on the table.", fa: "بطری روی میز است." }] },
      { word: "cup", meaning: "فنجان، لیوان", en: "I need a cup of tea.", fa: "من یک فنجان چای نیاز دارم.", icon: "☕", examples: [{ en: "I need a cup of tea.", fa: "من یک فنجان چای نیاز دارم." }, { en: "The cup is on the table.", fa: "فنجان روی میز است." }, { en: "She drinks coffee from a cup.", fa: "او قهوه را از یک فنجان می‌نوشد." }] },
      { word: "plate", meaning: "بشقاب", en: "Put the food on the plate.", fa: "غذا را روی بشقاب بگذار.", icon: "🍽️", examples: [{ en: "Put the food on the plate.", fa: "غذا را روی بشقاب بگذار." }, { en: "The plate is clean.", fa: "بشقاب تمیز است." }, { en: "She brings a plate of food.", fa: "او یک بشقاب غذا می‌آورد." }] },
      { word: "bowl", meaning: "کاسه", en: "I eat soup from a bowl.", fa: "من سوپ را از کاسه می‌خورم.", icon: "🥣", examples: [{ en: "I eat soup from a bowl.", fa: "من سوپ را از کاسه می‌خورم." }, { en: "The bowl is full of salad.", fa: "کاسه پر از سالاد است." }, { en: "She puts rice in a bowl.", fa: "او برنج را در یک کاسه می‌ریزد." }] },
      { word: "spoon", meaning: "قاشق", en: "I eat soup with a spoon.", fa: "من سوپ را با قاشق می‌خورم.", icon: "🥄", examples: [{ en: "I eat soup with a spoon.", fa: "من سوپ را با قاشق می‌خورم." }, { en: "The spoon is next to the plate.", fa: "قاشق کنار بشقاب است." }, { en: "She needs a spoon for the yogurt.", fa: "او برای ماست به یک قاشق نیاز دارد." }] },
      { word: "fork", meaning: "چنگال", en: "I eat pasta with a fork.", fa: "من پاستا را با چنگال می‌خورم.", icon: "🍴", examples: [{ en: "I eat pasta with a fork.", fa: "من پاستا را با چنگال می‌خورم." }, { en: "The fork is on the table.", fa: "چنگال روی میز است." }, { en: "She needs a clean fork.", fa: "او به یک چنگال تمیز نیاز دارد." }] },
      { word: "knife", meaning: "چاقو", en: "I use a knife to cut bread.", fa: "من برای بریدن نان از چاقو استفاده می‌کنم.", icon: "🔪", examples: [{ en: "I use a knife to cut bread.", fa: "من برای بریدن نان از چاقو استفاده می‌کنم." }, { en: "The knife is in the kitchen.", fa: "چاقو در آشپزخانه است." }, { en: "Be careful with the knife.", fa: "با چاقو مراقب باش." }] },
      { word: "order", meaning: "سفارش دادن", en: "I want to order a sandwich.", fa: "من می‌خواهم یک ساندویچ سفارش بدهم.", icon: "📝", examples: [{ en: "I want to order a sandwich.", fa: "من می‌خواهم یک ساندویچ سفارش بدهم." }, { en: "She orders coffee at the restaurant.", fa: "او در رستوران قهوه سفارش می‌دهد." }, { en: "We order dinner online.", fa: "ما شام را آنلاین سفارش می‌دهیم." }] },
      { word: "bill", meaning: "صورت‌حساب", en: "Can I have the bill, please?", fa: "لطفاً صورت‌حساب را می‌دهید؟", icon: "🧾", examples: [{ en: "Can I have the bill, please?", fa: "لطفاً صورت‌حساب را می‌دهید؟" }, { en: "The waiter brings the bill.", fa: "پیشخدمت صورت‌حساب را می‌آورد." }, { en: "I pay the bill after dinner.", fa: "من بعد از شام صورت‌حساب را پرداخت می‌کنم." }] },
      { word: "meal", meaning: "وعده غذایی", en: "Breakfast is my favorite meal.", fa: "صبحانه وعده غذایی مورد علاقه من است.", icon: "🍽️", examples: [{ en: "Breakfast is my favorite meal.", fa: "صبحانه وعده غذایی مورد علاقه من است." }, { en: "We have a meal together every evening.", fa: "ما هر عصر با هم یک وعده غذا می‌خوریم." }, { en: "This meal is easy to make.", fa: "درست کردن این وعده غذایی آسان است." }] },
      { word: "customer", meaning: "مشتری", en: "The customer is waiting for food.", fa: "مشتری منتظر غذا است.", icon: "🧑‍💼", examples: [{ en: "The customer is waiting for food.", fa: "مشتری منتظر غذا است." }, { en: "The restaurant has many customers.", fa: "رستوران مشتری‌های زیادی دارد." }, { en: "The customer pays at the end.", fa: "مشتری در پایان پرداخت می‌کند." }] },
      { word: "chef", meaning: "سرآشپز", en: "The chef makes great food.", fa: "سرآشپز غذای عالی درست می‌کند.", icon: "👨‍🍳", examples: [{ en: "The chef makes great food.", fa: "سرآشپز غذای عالی درست می‌کند." }, { en: "The chef is in the kitchen.", fa: "سرآشپز در آشپزخانه است." }, { en: "She wants to be a chef.", fa: "او می‌خواهد سرآشپز شود." }] },
      { word: "cook", meaning: "آشپز", en: "My dad is a good cook.", fa: "پدرم آشپز خوبی است.", icon: "🧑‍🍳", examples: [{ en: "My dad is a good cook.", fa: "پدرم آشپز خوبی است." }, { en: "The cook prepares fresh food.", fa: "آشپز غذای تازه آماده می‌کند." }, { en: "I want to become a better cook.", fa: "من می‌خواهم آشپز بهتری شوم." }] },
      { word: "glass", meaning: "لیوان", en: "I drink water from a glass.", fa: "من آب را از یک لیوان می‌نوشم.", icon: "🥛", examples: [{ en: "I drink water from a glass.", fa: "من آب را از یک لیوان می‌نوشم." }, { en: "The glass is on the table.", fa: "لیوان روی میز است." }, { en: "She fills the glass with juice.", fa: "او لیوان را با آبمیوه پر می‌کند." }] },
      { word: "fridge", meaning: "یخچال", en: "Put the milk in the fridge.", fa: "شیر را داخل یخچال بگذار.", icon: "🧊", examples: [{ en: "Put the milk in the fridge.", fa: "شیر را داخل یخچال بگذار." }, { en: "The fridge is full of food.", fa: "یخچال پر از غذا است." }, { en: "I check the fridge before shopping.", fa: "من قبل از خرید یخچال را بررسی می‌کنم." }] },
      { word: "freezer", meaning: "فریزر", en: "The ice cream is in the freezer.", fa: "بستنی داخل فریزر است.", icon: "❄️", examples: [{ en: "The ice cream is in the freezer.", fa: "بستنی داخل فریزر است." }, { en: "We keep frozen food in the freezer.", fa: "ما غذای یخ‌زده را در فریزر نگه می‌داریم." }, { en: "The freezer is very cold.", fa: "فریزر خیلی سرد است." }] },
      { word: "market", meaning: "بازار", en: "I buy vegetables at the market.", fa: "من سبزیجات را از بازار می‌خرم.", icon: "🏪", examples: [{ en: "I buy vegetables at the market.", fa: "من سبزیجات را از بازار می‌خرم." }, { en: "The market is near my house.", fa: "بازار نزدیک خانه من است." }, { en: "We go to the market every week.", fa: "ما هر هفته به بازار می‌رویم." }] },
      { word: "store", meaning: "فروشگاه", en: "I buy food at the store.", fa: "من از فروشگاه غذا می‌خرم.", icon: "🏬", examples: [{ en: "I buy food at the store.", fa: "من از فروشگاه غذا می‌خرم." }, { en: "The store sells fresh fruit.", fa: "فروشگاه میوه تازه می‌فروشد." }, { en: "The store is open today.", fa: "فروشگاه امروز باز است." }] },
      { word: "healthy", meaning: "سالم", en: "Fruits and vegetables are healthy foods.", fa: "میوه‌ها و سبزیجات غذاهای سالمی هستند.", icon: "🥗", examples: [{ en: "Fruits and vegetables are healthy foods.", fa: "میوه‌ها و سبزیجات غذاهای سالمی هستند." }, { en: "I try to eat healthy food every day.", fa: "من سعی می‌کنم هر روز غذای سالم بخورم." }, { en: "This meal is healthy and delicious.", fa: "این وعده غذایی سالم و خوشمزه است." }] },
      { word: "unhealthy", meaning: "ناسالم", en: "Too much sugar is unhealthy.", fa: "شکر زیاد ناسالم است.", icon: "🍔", examples: [{ en: "Too much sugar is unhealthy.", fa: "شکر زیاد ناسالم است." }, { en: "Fast food can be unhealthy.", fa: "غذای سریع می‌تواند ناسالم باشد." }, { en: "I try not to eat unhealthy food often.", fa: "من سعی می‌کنم زیاد غذای ناسالم نخورم." }] },
      { word: "sandwich shop", meaning: "ساندویچی", en: "There is a sandwich shop near my house.", fa: "نزدیک خانه من یک ساندویچی هست.", icon: "🥪", examples: [{ en: "There is a sandwich shop near my house.", fa: "نزدیک خانه من یک ساندویچی هست." }, { en: "We buy lunch from the sandwich shop.", fa: "ما ناهار را از ساندویچی می‌خریم." }, { en: "The sandwich shop is busy today.", fa: "ساندویچی امروز شلوغ است." }] },
      { word: "cafe", meaning: "کافه", en: "I drink coffee at the cafe.", fa: "من در کافه قهوه می‌نوشم.", icon: "☕", examples: [{ en: "I drink coffee at the cafe.", fa: "من در کافه قهوه می‌نوشم." }, { en: "The cafe is near the park.", fa: "کافه نزدیک پارک است." }, { en: "We meet at a cafe after work.", fa: "ما بعد از کار در یک کافه همدیگر را می‌بینیم." }] },
      { word: "dessert", meaning: "دسر", en: "We have dessert after dinner.", fa: "ما بعد از شام دسر می‌خوریم.", icon: "🍨", examples: [{ en: "We have dessert after dinner.", fa: "ما بعد از شام دسر می‌خوریم." }, { en: "My favorite dessert is ice cream.", fa: "دسر مورد علاقه من بستنی است." }, { en: "She makes a chocolate dessert.", fa: "او یک دسر شکلاتی درست می‌کند." }] },
      { word: "delicious", meaning: "خوشمزه", en: "This pizza is delicious.", fa: "این پیتزا خوشمزه است.", icon: "😋", examples: [{ en: "This pizza is delicious.", fa: "این پیتزا خوشمزه است." }, { en: "She makes delicious food.", fa: "او غذای خوشمزه درست می‌کند." }, { en: "The restaurant has delicious meals.", fa: "این رستوران غذاهای خوشمزه دارد." }] },
      { word: "snack", meaning: "میان‌وعده، خوراکی", en: "I eat a snack after school.", fa: "من بعد از مدرسه یک میان‌وعده می‌خورم.", icon: "🥨", examples: [{ en: "I eat a snack after school.", fa: "من بعد از مدرسه یک میان‌وعده می‌خورم." }, { en: "This snack is easy to carry.", fa: "این خوراکی راحت حمل می‌شود." }, { en: "She wants a healthy snack.", fa: "او یک میان‌وعده سالم می‌خواهد." }] },
      { word: "cut", meaning: "بریدن، خرد کردن", en: "Cut the apple, please.", fa: "لطفاً سیب را ببُر.", icon: "🔪", examples: [{ en: "Cut the apple, please.", fa: "لطفاً سیب را ببُر." }, { en: "She cuts vegetables for soup.", fa: "او سبزیجات را برای سوپ خرد می‌کند." }, { en: "I cut the bread with a knife.", fa: "من نان را با چاقو می‌برم." }] },
      { word: "mix", meaning: "مخلوط کردن", en: "Mix the eggs and milk.", fa: "تخم‌مرغ و شیر را مخلوط کن.", icon: "🥣", examples: [{ en: "Mix the eggs and milk.", fa: "تخم‌مرغ و شیر را مخلوط کن." }, { en: "She mixes the ingredients.", fa: "او مواد اولیه را مخلوط می‌کند." }, { en: "Mix everything in the bowl.", fa: "همه چیز را در کاسه مخلوط کن." }] },
      { word: "apple juice", meaning: "آب سیب", en: "I like apple juice.", fa: "من آب سیب دوست دارم.", icon: "🧃", examples: [{ en: "I like apple juice.", fa: "من آب سیب دوست دارم." }, { en: "She drinks apple juice with breakfast.", fa: "او با صبحانه آب سیب می‌نوشد." }, { en: "The apple juice is cold.", fa: "آب سیب سرد است." }] },
      { word: "pizza", meaning: "پیتزا", en: "We order pizza on Friday nights.", fa: "ما جمعه‌شب‌ها پیتزا سفارش می‌دهیم.", icon: "🍕", examples: [{ en: "We order pizza on Friday nights.", fa: "ما جمعه‌شب‌ها پیتزا سفارش می‌دهیم." }, { en: "This pizza has cheese and mushrooms.", fa: "این پیتزا پنیر و قارچ دارد." }, { en: "I like pizza with extra cheese.", fa: "من پیتزا با پنیر اضافه دوست دارم." }] },
      { word: "burger", meaning: "همبرگر", en: "I eat a burger for lunch.", fa: "من برای ناهار همبرگر می‌خورم.", icon: "🍔", examples: [{ en: "I eat a burger for lunch.", fa: "من برای ناهار همبرگر می‌خورم." }, { en: "The burger comes with fries.", fa: "همبرگر با سیب‌زمینی سرخ‌کرده می‌آید." }, { en: "She orders a cheese burger.", fa: "او یک همبرگر پنیری سفارش می‌دهد." }] },
      { word: "sweet", meaning: "شیرین", en: "This apple is very sweet.", fa: "این سیب خیلی شیرین است.", icon: "🍬", examples: [{ en: "This apple is very sweet.", fa: "این سیب خیلی شیرین است." }, { en: "I like sweet tea.", fa: "من چای شیرین دوست دارم." }, { en: "The cake is too sweet for me.", fa: "کیک برای من خیلی شیرین است." }] },
      { word: "salty", meaning: "شور", en: "The soup is a little salty.", fa: "سوپ کمی شور است.", icon: "🧂", examples: [{ en: "The soup is a little salty.", fa: "سوپ کمی شور است." }, { en: "These fries are very salty.", fa: "این سیب‌زمینی‌های سرخ‌کرده خیلی شور هستند." }, { en: "I don’t like salty food.", fa: "من غذای شور دوست ندارم." }] },
      { word: "spicy", meaning: "تند", en: "This food is too spicy for me.", fa: "این غذا برای من خیلی تند است.", icon: "🌶️", examples: [{ en: "This food is too spicy for me.", fa: "این غذا برای من خیلی تند است." }, { en: "She likes spicy chicken.", fa: "او مرغ تند دوست دارد." }, { en: "Be careful, the sauce is spicy.", fa: "مراقب باش، سس تند است." }] },
      { word: "oven", meaning: "فر", en: "Put the cake in the oven.", fa: "کیک را در فر بگذار.", icon: "⏲️", examples: [{ en: "Put the cake in the oven.", fa: "کیک را در فر بگذار." }, { en: "The oven is very hot.", fa: "فر خیلی داغ است." }, { en: "She bakes bread in the oven.", fa: "او نان را در فر می‌پزد." }] },
      { word: "stove", meaning: "اجاق گاز", en: "Turn on the stove to cook.", fa: "اجاق را روشن کن تا بپزی.", icon: "🍳", examples: [{ en: "Turn on the stove to cook.", fa: "اجاق را روشن کن تا بپزی." }, { en: "The pot is on the stove.", fa: "قابلمه روی اجاق است." }, { en: "Be careful near the hot stove.", fa: "نزدیک اجاق داغ مراقب باش." }] },
      { word: "boil", meaning: "جوشاندن", en: "Boil the water for tea.", fa: "آب را برای چای بجوشان.", icon: "🫖", examples: [{ en: "Boil the water for tea.", fa: "آب را برای چای بجوشان." }, { en: "I boil eggs for breakfast.", fa: "من برای صبحانه تخم‌مرغ می‌جوشانم." }, { en: "The soup needs to boil for ten minutes.", fa: "سوپ باید ده دقیقه بجوشد." }] },
      { word: "fry", meaning: "سرخ کردن", en: "She fries the potatoes.", fa: "او سیب‌زمینی‌ها را سرخ می‌کند.", icon: "🍳", examples: [{ en: "She fries the potatoes.", fa: "او سیب‌زمینی‌ها را سرخ می‌کند." }, { en: "I fry eggs in a pan.", fa: "من تخم‌مرغ را در تابه سرخ می‌کنم." }, { en: "Do not fry the food too long.", fa: "غذا را زیاد سرخ نکن." }] },
      { word: "bake", meaning: "پختن در فر", en: "I bake a cake every weekend.", fa: "من هر آخر هفته کیک می‌پزم.", icon: "🍞", examples: [{ en: "I bake a cake every weekend.", fa: "من هر آخر هفته کیک می‌پزم." }, { en: "She bakes bread at home.", fa: "او در خانه نان می‌پزد." }, { en: "Bake the cookies for fifteen minutes.", fa: "کوکی‌ها را پانزده دقیقه در فر بپز." }] },
      { word: "taste", meaning: "چشیدن", en: "Taste the soup. Is it good?", fa: "سوپ را بچش. خوب است؟", icon: "👅", examples: [{ en: "Taste the soup. Is it good?", fa: "سوپ را بچش. خوب است؟" }, { en: "I taste the cake before serving.", fa: "قبل از سرو کیک را می‌چشم." }, { en: "Does it taste sweet?", fa: "طعمش شیرین است؟" }] },
      { word: "oil", meaning: "روغن", en: "Put some oil in the pan.", fa: "کمی روغن در تابه بریز.", icon: "🫒", examples: [{ en: "Put some oil in the pan.", fa: "کمی روغن در تابه بریز." }, { en: "She fries the food in oil.", fa: "او غذا را در روغن سرخ می‌کند." }, { en: "This oil is good for cooking.", fa: "این روغن برای پختن خوب است." }] },
      { word: "honey", meaning: "عسل", en: "I put honey in my tea.", fa: "من عسل در چایم می‌ریزم.", icon: "🍯", examples: [{ en: "I put honey in my tea.", fa: "من عسل در چایم می‌ریزم." }, { en: "Honey is natural and sweet.", fa: "عسل طبیعی و شیرین است." }, { en: "She likes bread with honey.", fa: "او نان با عسل دوست دارد." }] },
      { word: "cucumber", meaning: "خیار", en: "I put cucumber in my salad.", fa: "من خیار در سالادم می‌گذارم.", icon: "🥒", examples: [{ en: "I put cucumber in my salad.", fa: "من خیار در سالادم می‌گذارم." }, { en: "This cucumber is fresh and cool.", fa: "این خیار تازه و خنک است." }, { en: "She cuts the cucumber for lunch.", fa: "او خیار را برای ناهار خرد می‌کند." }] },
      { word: "lettuce", meaning: "کاهو", en: "The salad has a lot of lettuce.", fa: "سالاد کاهوی زیادی دارد.", icon: "🥬", examples: [{ en: "The salad has a lot of lettuce.", fa: "سالاد کاهوی زیادی دارد." }, { en: "Wash the lettuce before eating.", fa: "قبل از خوردن کاهو را بشوی." }, { en: "I buy fresh lettuce every week.", fa: "من هر هفته کاهوی تازه می‌خرم." }] },
      { word: "mushroom", meaning: "قارچ", en: "I put mushrooms on my pizza.", fa: "من قارچ روی پیتزایم می‌گذارم.", icon: "🍄", examples: [{ en: "I put mushrooms on my pizza.", fa: "من قارچ روی پیتزایم می‌گذارم." }, { en: "She cooks mushrooms with eggs.", fa: "او قارچ را با تخم‌مرغ درست می‌کند." }, { en: "These mushrooms taste good.", fa: "این قارچ‌ها طعم خوبی دارند." }] },
      { word: "fries", meaning: "سیب‌زمینی سرخ‌کرده", en: "I order fries with my burger.", fa: "من با همبرگرم سیب‌زمینی سرخ‌کرده سفارش می‌دهم.", icon: "🍟", examples: [{ en: "I order fries with my burger.", fa: "من با همبرگرم سیب‌زمینی سرخ‌کرده سفارش می‌دهم." }, { en: "The fries are hot and salty.", fa: "سیب‌زمینی‌های سرخ‌کرده داغ و شور هستند." }, { en: "She likes fries with ketchup.", fa: "او سیب‌زمینی سرخ‌کرده با کetchup دوست دارد." }] },
      { word: "soda", meaning: "نوشابه", en: "I drink soda with my meal.", fa: "من با غذایم نوشابه می‌نوشم.", icon: "🥤", examples: [{ en: "I drink soda with my meal.", fa: "من با غذایم نوشابه می‌نوشم." }, { en: "This soda is very cold.", fa: "این نوشابه خیلی سرد است." }, { en: "She orders a soda at the restaurant.", fa: "او در رستوران نوشابه سفارش می‌دهد." }] },
      { word: "toast", meaning: "نان تست", en: "I eat toast with butter for breakfast.", fa: "من برای صبحانه نان تست با کره می‌خورم.", icon: "🍞", examples: [{ en: "I eat toast with butter for breakfast.", fa: "من برای صبحانه نان تست با کره می‌خورم." }, { en: "The toast is ready.", fa: "نان تست آماده است." }, { en: "She makes toast every morning.", fa: "او هر صبح نان تست درست می‌کند." }] },
      { word: "beef", meaning: "گوشت گاو، گوشت گوساله", en: "We bought some fresh beef for dinner.", fa: "ما برای شام مقداری گوشت گوساله تازه خریدیم.", icon: "🥩", examples: [{ en: "We bought some fresh beef for dinner.", fa: "ما برای شام مقداری گوشت گوساله تازه خریدیم." }, { en: "Do you eat beef or only chicken?", fa: "آیا گوشت گاو می‌خوری یا فقط مرغ؟" }, { en: "Beef is a common ingredient in burgers.", fa: "گوشت گاو یک ماده اولیه رایج در برگرها است." }] },
      { word: "pork", meaning: "گوشت خوک", en: "He does not eat pork for dinner.", fa: "او برای شام گوشت خوک نمی‌خورد.", icon: "🥓", examples: [{ en: "He does not eat pork for dinner.", fa: "او برای شام گوشت خوک نمی‌خورد." }, { en: "This soup has small pieces of pork.", fa: "این سوپ تکه‌های کوچکی از گوشت خوک دارد." }, { en: "Many restaurants serve grilled pork.", fa: "رستوران‌های زیادی گوشت خوک کبابی سرو می‌کنند." }] },
      { word: "seafood", meaning: "غذای دریایی", en: "This restaurant is famous for fresh seafood.", fa: "این رستوران به خاطر غذای دریایی تازه معروف است.", icon: "🦞", examples: [{ en: "This restaurant is famous for fresh seafood.", fa: "این رستوران به خاطر غذای دریایی تازه معروف است." }, { en: "I love seafood, especially grilled fish.", fa: "من عاشق غذای دریایی هستم، مخصوصاً ماهی کبابی." }, { en: "We ordered seafood for lunch today.", fa: "ما امروز برای ناهار غذای دریایی سفارش دادیم." }] },
      { word: "shrimp", meaning: "میگو", en: "She ordered fried shrimp with rice.", fa: "او میگوی سرخ‌شده با برنج سفارش داد.", icon: "🦐", examples: [{ en: "She ordered fried shrimp with rice.", fa: "او میگوی سرخ‌شده با برنج سفارش داد." }, { en: "I like to put shrimp in my salad.", fa: "من دوست دارم در سالادم میگو بریزم." }, { en: "Fresh shrimp cooks very fast.", fa: "میگوی تازه خیلی سریع می‌پزد." }] },
      { word: "tuna", meaning: "ماهی تن، تن ماهی", en: "I made a tuna sandwich for lunch.", fa: "من برای ناهار یک ساندویچ تن ماهی درست کردم.", icon: "🐟", examples: [{ en: "I made a tuna sandwich for lunch.", fa: "من برای ناهار یک ساندویچ تن ماهی درست کردم." }, { en: "We have two cans of tuna in the kitchen.", fa: "ما دو قوطی تن ماهی در آشپزخانه داریم." }, { en: "Tuna is a healthy choice for dinner.", fa: "ماهی تن یک انتخاب سالم برای شام است." }] },
      { word: "pasta sauce", meaning: "سس پاستا", en: "She makes pasta sauce with fresh tomatoes.", fa: "او سس پاستا را با گوجه‌فرنگی‌های تازه درست می‌کند.", icon: "🥫", examples: [{ en: "She makes pasta sauce with fresh tomatoes.", fa: "او سس پاستا را با گوجه‌فرنگی‌های تازه درست می‌کند." }, { en: "We need more pasta sauce for dinner.", fa: "ما برای شام به سس پاستای بیشتری نیاز داریم." }, { en: "This pasta sauce smells delicious.", fa: "این سس پاستا بوی خوشمزه‌ای می‌دهد." }] },
      { word: "garlic", meaning: "سیر", en: "I always add garlic to pasta sauce.", fa: "من همیشه به سس پاستا سیر اضافه می‌کنم.", icon: "🧄", examples: [{ en: "I always add garlic to pasta sauce.", fa: "من همیشه به سس پاستا سیر اضافه می‌کنم." }, { en: "Garlic gives this soup a great flavor.", fa: "سیر طعم فوق‌العاده‌ای به این سوپ می‌دهد." }, { en: "She chopped two cloves of garlic.", fa: "او دو حبه سیر خرد کرد." }] },
      { word: "pepper", meaning: "فلفل", en: "Please pass the salt and pepper.", fa: "لطفاً نمک و فلفل را بدهید.", icon: "🌶️", examples: [{ en: "Please pass the salt and pepper.", fa: "لطفاً نمک و فلفل را بدهید." }, { en: "I like black pepper in my soup.", fa: "من فلفل سیاه را در سوپم دوست دارم." }, { en: "This dish has too much pepper.", fa: "این غذا فلفل خیلی زیادی دارد." }] },
      { word: "flour", meaning: "آرد", en: "We need two cups of flour for the cake.", fa: "ما برای کیک به دو پیمانه آرد نیاز داریم.", icon: "🌾", examples: [{ en: "We need two cups of flour for the cake.", fa: "ما برای کیک به دو پیمانه آرد نیاز داریم." }, { en: "She bought a bag of white flour.", fa: "او یک کیسه آرد سفید خرید." }, { en: "Mix the flour and sugar together in a bowl.", fa: "آرد و شکر را در یک کاسه با هم مخلوط کن." }] },
      { word: "sauce", meaning: "سس", en: "I like tomato sauce on my pasta.", fa: "من سس گوجه‌فرنگی روی پاستایم را دوست دارم.", icon: "🥫", examples: [{ en: "I like tomato sauce on my pasta.", fa: "من سس گوجه‌فرنگی روی پاستایم را دوست دارم." }, { en: "Would you like extra sauce with your food?", fa: "آیا سس اضافه همراه با غذایتان می‌خواهید؟" }, { en: "This sauce tastes sweet and spicy.", fa: "این سس طعم شیرین و تندی دارد." }] },
      { word: "ketchup", meaning: "سس کچاپ، سس گوجه", en: "Do you want ketchup on your burger?", fa: "آیا روی برگرت سس کچاپ می‌خواهی؟", icon: "🥫", examples: [{ en: "Do you want ketchup on your burger?", fa: "آیا روی برگرت سس کچاپ می‌خواهی؟" }, { en: "Children love fries with ketchup.", fa: "بچه‌ها سیب‌زمینی سرخ‌کرده با کچاپ را خیلی دوست دارند." }, { en: "The bottle of ketchup is on the table.", fa: "بطری سس کچاپ روی میز است." }] },
      { word: "mayonnaise", meaning: "سس مایونز", en: "I put mayonnaise on my chicken sandwich.", fa: "من روی ساندویچ مرغم سس مایونز می‌زنم.", icon: "🥗", examples: [{ en: "I put mayonnaise on my chicken sandwich.", fa: "من روی ساندویچ مرغم سس مایونز می‌زنم." }, { en: "We keep the mayonnaise in the fridge.", fa: "ما سس مایونز را در یخچال نگه می‌داریم." }, { en: "This salad has too much mayonnaise.", fa: "این سالاد سس مایونز خیلی زیادی دارد." }] },
      { word: "mustard", meaning: "خردل، سس خردل", en: "She likes mustard on her hot dog.", fa: "او سس خردل روی هات‌داگش را دوست دارد.", icon: "🌭", examples: [{ en: "She likes mustard on her hot dog.", fa: "او سس خردل روی هات‌داگش را دوست دارد." }, { en: "This mustard has a strong spicy taste.", fa: "این خردل طعم تند و تیزی دارد." }, { en: "We ran out of yellow mustard.", fa: "خردل زرد ما تمام شد." }] },
      { word: "hot dog", meaning: "هات‌داگ", en: "We ate hot dogs at the park.", fa: "ما در پارک هات‌داگ خوردیم.", icon: "🌭", examples: [{ en: "We ate hot dogs at the park.", fa: "ما در پارک هات‌داگ خوردیم." }, { en: "He put mustard and ketchup on his hot dog.", fa: "او روی هات‌داگش خردل و کچاپ ریخت." }, { en: "Hot dogs are quick and easy to make.", fa: "درست کردن هات‌داگ‌ها سریع و آسان است." }] },
      { word: "sausage", meaning: "سوسیس", en: "I eat eggs and sausage for breakfast.", fa: "من برای صبحانه تخم‌مرغ و سوسیس می‌خورم.", icon: "🌭", examples: [{ en: "I eat eggs and sausage for breakfast.", fa: "من برای صبحانه تخم‌مرغ و سوسیس می‌خورم." }, { en: "She grilled sausages for dinner.", fa: "او برای شام سوسیس‌ها را کباب کرد." }, { en: "This spicy sausage tastes great.", fa: "این سوسیس تند طعم عالی دارد." }] },
      { word: "bacon", meaning: "بیکن", en: "I like crispy bacon with my eggs.", fa: "من بیکن برشته را با تخم‌مرغم دوست دارم.", icon: "🥓", examples: [{ en: "I like crispy bacon with my eggs.", fa: "من بیکن برشته را با تخم‌مرغم دوست دارم." }, { en: "The smell of bacon filled the kitchen.", fa: "بوی بیکن آشپزخانه را پر کرد." }, { en: "He cooked three slices of bacon for breakfast.", fa: "او برای صبحانه سه ورقه بیکن پخت." }] },
      { word: "jam", meaning: "مربا", en: "I like strawberry jam on my toast.", fa: "من مربای توت‌فرنگی روی نان تستم را دوست دارم.", icon: "🍯", examples: [{ en: "I like strawberry jam on my toast.", fa: "من مربای توت‌فرنگی روی نان تستم را دوست دارم." }, { en: "She bought a jar of sweet jam.", fa: "او یک شیشه مربای شیرین خرید." }, { en: "We make homemade jam every summer.", fa: "ما هر تابستان مربای خانگی درست می‌کنیم." }] },
      { word: "cereal", meaning: "غلات صبحانه، کورن‌فلکس", en: "The kids eat cereal with cold milk every morning.", fa: "بچه‌ها هر روز صبح غلات صبحانه با شیر سرد می‌خورند.", icon: "🥣", examples: [{ en: "The kids eat cereal with cold milk every morning.", fa: "بچه‌ها هر روز صبح غلات صبحانه با شیر سرد می‌خورند." }, { en: "I bought a box of cereal from the grocery store.", fa: "من یک جعبه غلات صبحانه از خواربارفروشی خریدم." }, { en: "Cereal is a very fast breakfast option.", fa: "غلات صبحانه یک گزینه صبحانه بسیار سریع است." }] },
      { word: "pancake", meaning: "پنکیک", en: "My mom makes delicious pancakes on Sunday mornings.", fa: "مادرم صبح‌های یکشنبه پنکیک‌های خوشمزه‌ای درست می‌کند.", icon: "🥞", examples: [{ en: "My mom makes delicious pancakes on Sunday mornings.", fa: "مادرم صبح‌های یکشنبه پنکیک‌های خوشمزه‌ای درست می‌کند." }, { en: "We eat pancakes with syrup and fresh fruit.", fa: "ما پنکیک‌ها را با شربت و میوه تازه می‌خوریم." }, { en: "I want two warm pancakes for breakfast.", fa: "من برای صبحانه دو عدد پنکیک گرم می‌خواهم." }] },
      { word: "lemonade", meaning: "لیموناد، آب‌لیمو شیرین", en: "We drink cold lemonade on hot summer days.", fa: "ما در روزهای گرم تابستان لیموناد خنک می‌نوشیم.", icon: "🍋", examples: [{ en: "We drink cold lemonade on hot summer days.", fa: "ما در روزهای گرم تابستان لیموناد خنک می‌نوشیم." }, { en: "She made fresh lemonade for the guests.", fa: "او برای مهمان‌ها لیموناد تازه درست کرد." }, { en: "This lemonade tastes sweet and refreshing.", fa: "این لیموناد طعم شیرین و باطراوتی دارد." }] },
      { word: "hot chocolate", meaning: "هات‌چاکلت، شکلات داغ", en: "I drink hot chocolate in the winter.", fa: "من در زمستان هات‌چاکلت می‌نوشم.", icon: "☕", examples: [{ en: "I drink hot chocolate in the winter.", fa: "من در زمستان هات‌چاکلت می‌نوشم." }, { en: "The children love warm hot chocolate with milk.", fa: "بچه‌ها شکلات داغ گرم با شیر را خیلی دوست دارند." }, { en: "This cafe serves the best hot chocolate in town.", fa: "این کافه بهترین شکلات داغ شهر را سرو می‌کند." }] },
      { word: "vegetable oil", meaning: "روغن مایع، روغن گیاهی", en: "Use vegetable oil to fry the potatoes.", fa: "برای سرخ کردن سیب‌زمینی‌ها از روغن مایع استفاده کن.", icon: "🫒", examples: [{ en: "Use vegetable oil to fry the potatoes.", fa: "برای سرخ کردن سیب‌زمینی‌ها از روغن مایع استفاده کن." }, { en: "We need a bottle of vegetable oil from the store.", fa: "ما به یک بطری روغن مایع از فروشگاه نیاز داریم." }, { en: "She cooked the chicken in vegetable oil.", fa: "او مرغ را در روغن گیاهی پخت." }] },
      { word: "olive", meaning: "زیتون", en: "I like black olives on my pizza.", fa: "من زیتون سیاه روی پیتزایم را دوست دارم.", icon: "🫒", examples: [{ en: "I like black olives on my pizza.", fa: "من زیتون سیاه روی پیتزایم را دوست دارم." }, { en: "We bought a jar of green olives from the market.", fa: "ما یک شیشه زیتون سبز از بازار خریدیم." }, { en: "She put fresh olives into the salad bowl.", fa: "او زیتون‌های تازه را داخل کاسه سالاد ریخت." }] },
      { word: "corn", meaning: "ذرت، بلال", en: "We boiled fresh sweet corn for dinner.", fa: "ما برای شام ذرت شیرین تازه آبپز کردیم.", icon: "🌽", examples: [{ en: "We boiled fresh sweet corn for dinner.", fa: "ما برای شام ذرت شیرین تازه آبپز کردیم." }, { en: "I like corn in my vegetable soup.", fa: "من ذرت را در سوپ سبزیجاتم دوست دارم." }, { en: "She bought three ears of corn at the grocery store.", fa: "او سه بلال ذرت از خواربارفروشی خرید." }] },
      { word: "spinach", meaning: "اسفناج", en: "Spinach is very healthy and full of iron.", fa: "اسفناج بسیار سالم و سرشار از آهن است.", icon: "🥬", examples: [{ en: "Spinach is very healthy and full of iron.", fa: "اسفناج بسیار سالم و سرشار از آهن است." }, { en: "She cooked spinach with eggs for breakfast.", fa: "او برای صبحانه اسفناج را با تخم‌مرغ درست کرد." }, { en: "I like fresh spinach leaves in my salad.", fa: "من برگ‌های اسفناج تازه را در سالادم دوست دارم." }] },
      { word: "pear", meaning: "گلابی", en: "This yellow pear is sweet and juicy.", fa: "این گلابی زرد شیرین و آبدار است.", icon: "🍐", examples: [{ en: "This yellow pear is sweet and juicy.", fa: "این گلابی زرد شیرین و آبدار است." }, { en: "She packed a pear for her afternoon snack.", fa: "او یک گلابی برای میان‌وعده عصرش بسته‌بندی کرد." }, { en: "We picked fresh pears from the tree.", fa: "ما گلابی‌های تازه از درخت چیدیم." }] },
      { word: "peach", meaning: "هلو", en: "I bought fresh peaches at the fruit market.", fa: "من از بازار میوه هلوهای تازه خریدم.", icon: "🍑", examples: [{ en: "I bought fresh peaches at the fruit market.", fa: "من از بازار میوه هلوهای تازه خریدم." }, { en: "The peach is sweet and soft.", fa: "هلو شیرین و نرم است." }, { en: "She made a delicious dessert with peaches.", fa: "او با هلوها یک دسر خوشمزه درست کرد." }] },
      { word: "pineapple", meaning: "آناناس", en: "She cut the pineapple into small pieces.", fa: "او آناناس را به تکه‌های کوچک برش داد.", icon: "🍍", examples: [{ en: "She cut the pineapple into small pieces.", fa: "او آناناس را به تکه‌های کوچک برش داد." }, { en: "Pineapple juice is very sweet and refreshing.", fa: "آب آناناس بسیار شیرین و باطراوت است." }, { en: "Some people like pineapple on their pizza.", fa: "بعضی افراد آناناس را روی پیتزایشان دوست دارند." }] },
      { word: "grill", meaning: "کباب کردن، گریل کردن", en: "We grill chicken outside in the summer.", fa: "ما در تابستان بیرون مرغ کباب می‌کنیم.", icon: "🥩", examples: [{ en: "We grill chicken outside in the summer.", fa: "ما در تابستان بیرون مرغ کباب می‌کنیم." }, { en: "He likes to grill burgers for his friends.", fa: "او دوست دارد برای دوستانش برگر کباب کند." }, { en: "She grilled fresh fish for dinner.", fa: "او برای شام ماهی تازه گریل کرد." }] },
      { word: "slice", meaning: "تکه، برش، ورقه", en: "Can I have a slice of bread, please?", fa: "می‌شود لطفاً یک برش نان به من بدهید؟", icon: "🍕", examples: [{ en: "Can I have a slice of bread, please?", fa: "می‌شود لطفاً یک برش نان به من بدهید؟" }, { en: "She ate a slice of chocolate cake.", fa: "او یک تکه کیک شکلاتی خورد." }, { en: "Put a slice of cheese in the sandwich.", fa: "یک ورقه پنیر در ساندویچ بگذار." }] },
      { word: "sour", meaning: "ترش", en: "This fresh lemon is very sour.", fa: "این لیموی تازه خیلی ترش است.", icon: "🍋", examples: [{ en: "This fresh lemon is very sour.", fa: "این لیموی تازه خیلی ترش است." }, { en: "She likes sour candy after lunch.", fa: "او بعد از ناهار آبنبات ترش دوست دارد." }, { en: "The green apple has a sour taste.", fa: "سیب سبز طعم ترشی دارد." }] },
      { word: "fresh", meaning: "تازه", en: "We bought fresh fruit at the morning market.", fa: "ما از بازار صبحگاهی میوه تازه خریدیم.", icon: "🥗", examples: [{ en: "We bought fresh fruit at the morning market.", fa: "ما از بازار صبحگاهی میوه تازه خریدیم." }, { en: "This fresh bread smells amazing.", fa: "این نان تازه بوی فوق‌العاده‌ای می‌دهد." }, { en: "Always drink fresh water during the day.", fa: "همیشه در طول روز آب تازه بنوشید." }] },
      { word: "hot", meaning: "داغ، گرم", en: "Be careful, the soup is very hot.", fa: "مراقب باش، سوپ خیلی داغ است.", icon: "🔥", examples: [{ en: "Be careful, the soup is very hot.", fa: "مراقب باش، سوپ خیلی داغ است." }, { en: "I like a cup of hot tea in the morning.", fa: "من یک فنجان چای داغ در صبح را دوست دارم." }, { en: "The food came to our table hot and fresh.", fa: "غذا داغ و تازه به میز ما آمد." }] },
      { word: "cold", meaning: "سرد، خنک", en: "I drink cold water after running.", fa: "من بعد از دویدن آب سرد می‌نوشم.", icon: "🧊", examples: [{ en: "I drink cold water after running.", fa: "من بعد از دویدن آب سرد می‌نوشم." }, { en: "She prefers cold milk with her cereal.", fa: "او شیر سرد را با غلات صبحانه‌اش ترجیح می‌دهد." }, { en: "Put the juice in the fridge to keep it cold.", fa: "آبمیوه را در یخچال بگذار تا سرد بماند." }] },
      { word: "fast food", meaning: "فست‌فود، غذای حاضری", en: "We eat fast food on busy days.", fa: "ما در روزهای شلوغ فست‌فود می‌خوریم.", icon: "🍔", examples: [{ en: "We eat fast food on busy days.", fa: "ما در روزهای شلوغ فست‌فود می‌خوریم." }, { en: "Too much fast food is not healthy.", fa: "فست‌فود بیش از حد سالم نیست." }, { en: "There is a new fast food place near my school.", fa: "یک فست‌فودی جدید نزدیک مدرسه من هست." }] },
      { word: "napkin", meaning: "دستمال سفره", en: "Please take a clean napkin from the table.", fa: "لطفاً یک دستمال سفره تمیز از روی میز بردارید.", icon: "🧻", examples: [{ en: "Please take a clean napkin from the table.", fa: "لطفاً یک دستمال سفره تمیز از روی میز بردارید." }, { en: "She wiped her hands with a paper napkin.", fa: "او دست‌هایش را با یک دستمال سفره کاغذی پاک کرد." }, { en: "Can we have more napkins for our table?", fa: "می‌توانیم دستمال سفره‌های بیشتری برای میزمان داشته باشیم؟" }] },
      { word: "pan", meaning: "ماهیتابه، تابه", en: "Heat the oil in the pan before frying.", fa: "قبل از سرخ کردن، روغن را در ماهیتابه داغ کن.", icon: "🍳", examples: [{ en: "Heat the oil in the pan before frying.", fa: "قبل از سرخ کردن، روغن را در ماهیتابه داغ کن." }, { en: "She washed the dirty pan in the kitchen sink.", fa: "او ماهیتابه کثیف را در سینک آشپزخانه شست." }, { en: "Put the eggs into the hot pan.", fa: "تخم‌مرغ‌ها را داخل ماهیتابه داغ بریز." }] },
      { word: "pot", meaning: "قابلمه، دیگ", en: "She filled the pot with clean water for pasta.", fa: "او قابلمه را برای پاستا با آب تمیز پر کرد.", icon: "🍲", examples: [{ en: "She filled the pot with clean water for pasta.", fa: "او قابلمه را برای پاستا با آب تمیز پر کرد." }, { en: "The soup is boiling in the pot.", fa: "سوپ در قابلمه در حال جوشیدن است." }, { en: "Put the lid on the pot to keep it warm.", fa: "در قابلمه را بگذار تا گرم بماند." }] },
      { word: "grocery store", meaning: "خواربارفروشی، سوپرمارکت", en: "I buy fresh milk at the grocery store every week.", fa: "من هر هفته از خواربارفروشی شیر تازه می‌خرم.", icon: "🛒", examples: [{ en: "I buy fresh milk at the grocery store every week.", fa: "من هر هفته از خواربارفروشی شیر تازه می‌خرم." }, { en: "The grocery store is very busy on weekends.", fa: "خواربارفروشی در آخر هفته‌ها بسیار شلوغ است." }, { en: "We made a shopping list before going to the grocery store.", fa: "ما قبل از رفتن به خواربارفروشی یک لیست خرید درست کردیم." }] },
      { word: "picnic", meaning: "پیکنیک، گردش در طبیعت", en: "We packed sandwiches and fruit for a family picnic.", fa: "ما برای یک پیکنیک خانوادگی ساندویچ و میوه بسته‌بندی کردیم.", icon: "🧺", examples: [{ en: "We packed sandwiches and fruit for a family picnic.", fa: "ما برای یک پیکنیک خانوادگی ساندویچ و میوه بسته‌بندی کردیم." }, { en: "They had a lovely picnic in the sunny park.", fa: "آن‌ها یک پیکنیک دلپذیر در پارک آفتابی داشتند." }, { en: "We spread a blanket on the grass for our picnic.", fa: "ما برای پیکنیک‌مان یک پتو روی چمن‌ها پهن کردیم." }] }
    ]
  },
  work: {
    name: "کار و اداره",
    words: [
      { word: "office", meaning: "اداره", en: "I work in a big office.", fa: "من در یک اداره بزرگ کار می‌کنم.", icon: "🏢", examples: [{ en: "I work in a big office.", fa: "من در یک اداره بزرگ کار می‌کنم." }, { en: "The office opens at nine.", fa: "اداره ساعت نه باز می‌شود." }, { en: "Her office is on the second floor.", fa: "اداره‌اش در طبقه دوم است." }] },
      { word: "job", meaning: "شغل", en: "She has a good job.", fa: "او شغل خوبی دارد.", icon: "💼", examples: [{ en: "She has a good job.", fa: "او شغل خوبی دارد." }, { en: "I love my new job.", fa: "من عاشق شغل جدیدم هستم." }, { en: "He found a job near home.", fa: "او یک شغل نزدیک خانه پیدا کرد." }] },
      { word: "meeting", meaning: "جلسه", en: "We have a meeting at 10 AM.", fa: "ما ساعت ۱۰ صبح جلسه داریم.", icon: "🗣️", examples: [{ en: "We have a meeting at 10 AM.", fa: "ما ساعت ۱۰ صبح جلسه داریم." }, { en: "The meeting was very short.", fa: "جلسه خیلی کوتاه بود." }, { en: "Do not be late for the meeting.", fa: "برای جلسه دیر نکن." }] },
      { word: "boss", meaning: "رئیس", en: "My boss is very kind.", fa: "رئیس من خیلی مهربان است.", icon: "🧑‍💼", examples: [{ en: "My boss is very kind.", fa: "رئیس من خیلی مهربان است." }, { en: "The boss called me this morning.", fa: "رئیس امروز صبح به من زنگ زد." }, { en: "Her boss travels a lot.", fa: "رئیسش زیاد سفر می‌کند." }] },
      { word: "colleague", meaning: "همکار", en: "He is my colleague.", fa: "او همکار من است.", icon: "🧑‍🤝‍🧑", examples: [{ en: "He is my colleague.", fa: "او همکار من است." }, { en: "My colleagues helped me today.", fa: "همکارانم امروز به من کمک کردند." }, { en: "She had lunch with a colleague.", fa: "او با یک همکار ناهار خورد." }] },
      { word: "email", meaning: "ایمیل", en: "Please send me an email.", fa: "لطفاً برای من ایمیل بفرست.", icon: "📧", examples: [{ en: "Please send me an email.", fa: "لطفاً برای من ایمیل بفرست." }, { en: "I check my email twice a day.", fa: "من روزی دو بار ایمیلم را چک می‌کنم." }, { en: "The email arrived an hour ago.", fa: "ایمیل یک ساعت پیش رسید." }] },
      { word: "laptop", meaning: "لپ‌تاپ", en: "I use my laptop for work.", fa: "من از لپ‌تاپم برای کار استفاده می‌کنم.", icon: "💻", examples: [{ en: "I use my laptop for work.", fa: "من از لپ‌تاپم برای کار استفاده می‌کنم." }, { en: "My laptop is charging.", fa: "لپ‌تاپم در حال شارژ است." }, { en: "She carries her laptop everywhere.", fa: "او لپ‌تاپش را همه‌جا می‌برد." }] },
      { word: "desk", meaning: "میز کار", en: "There is a lamp on my desk.", fa: "روی میز کارم یک چراغ هست.", icon: "🗂️", examples: [{ en: "There is a lamp on my desk.", fa: "روی میز کارم یک چراغ هست." }, { en: "My desk is next to the window.", fa: "میز کارم کنار پنجره است." }, { en: "Keep your desk clean.", fa: "میز کارت را تمیز نگه دار." }] },
      { word: "printer", meaning: "پرینتر", en: "The printer is out of paper.", fa: "پرینتر کاغذ ندارد.", icon: "🖨️", examples: [{ en: "The printer is out of paper.", fa: "پرینتر کاغذ ندارد." }, { en: "The printer works again.", fa: "پرینتر دوباره کار می‌کند." }, { en: "She bought a new printer.", fa: "او یک پرینتر جدید خرید." }] },
      { word: "call", meaning: "تماس", en: "I need to make a phone call.", fa: "من باید یک تماس تلفنی بگیرم.", icon: "📞", examples: [{ en: "I need to make a phone call.", fa: "من باید یک تماس تلفنی بگیرم." }, { en: "The call lasted ten minutes.", fa: "تماس ده دقیقه طول کشید." }, { en: "I missed your call, sorry.", fa: "تماست را از دست دادم، ببخشید." }] }
    ]
  },
  idiomEveryday: {
    name: "اصطلاحات روزمره",
    words: [
      { word: "a piece of cake", meaning: "مثل آب خوردن", en: "The test was a piece of cake.", fa: "امتحان مثل آب خوردن بود.", icon: "🍰", examples: [{ en: "The test was a piece of cake.", fa: "امتحان مثل آب خوردن بود." }, { en: "For her, cooking is a piece of cake.", fa: "آشپزی برای او مثل آب خوردن است." }, { en: "Do not worry, it is a piece of cake!", fa: "نگران نباش، خیلی راحته!" }] },
      { word: "hit the hay", meaning: "زدن به رختخواب", en: "I hit the hay early on weekdays.", fa: "روزهای هفته زود می‌رم رختخواب.", icon: "😴", examples: [{ en: "I hit the hay early on weekdays.", fa: "روزهای هفته زود می‌رم رختخواب." }, { en: "I am so tired; time to hit the hay.", fa: "خیلی خسته‌ام؛ وقت رفتن به رختخوابه." }, { en: "He always hits the hay after dinner.", fa: "او همیشه بعد از شام می‌ره رختخواب." }] },
      { word: "call it a day", meaning: "برای امروز کافیه", en: "Let us call it a day and go home.", fa: "بیا برای امروز تمومش کنیم و بریم خونه.", icon: "🌇", examples: [{ en: "Let us call it a day and go home.", fa: "بیا برای امروز تمومش کنیم و بریم خونه." }, { en: "We worked hard; let us call it a day.", fa: "سخت کار کردیم؛ برای امروز کافیه." }, { en: "After ten hours, I called it a day.", fa: "بعد از ده ساعت کار، گفتم برای امروز کافیه." }] },
      { word: "under the weather", meaning: "حالش بد است", en: "I am feeling under the weather today.", fa: "امروز حالم خوب نیست.", icon: "🤒", examples: [{ en: "I am feeling under the weather today.", fa: "امروز حالم خوب نیست." }, { en: "She stayed home; she is under the weather.", fa: "خونه موند؛ حالش بد بود." }, { en: "You look under the weather; rest a little.", fa: "کم‌حال به نظر می‌رسی؛ کمی استراحت کن." }] },
      { word: "break a leg", meaning: "موفق باشی!", en: "Break a leg in your show tonight!", fa: "امشب توی اجرات موفق باشی!", icon: "🍀", examples: [{ en: "Break a leg in your show tonight!", fa: "امشب توی اجرات موفق باشی!" }, { en: "Before my test, she said break a leg.", fa: "قبل از امتحانم بهم گفت موفق باشی." }, { en: "He said break a leg before my interview.", fa: "قبل از مصاحبه‌ام گفت موفق باشی." }] }
    ]
  },
  idiomFeelings: {
    name: "اصطلاحات احساسات",
    words: [
      { word: "on cloud nine", meaning: "بی‌نهایت خوشحال", en: "She is on cloud nine today.", fa: "امروز سر از پا نمی‌شناسه.", icon: "☁️", examples: [{ en: "She is on cloud nine today.", fa: "امروز سر از پا نمی‌شناسه." }, { en: "I was on cloud nine when I got the job.", fa: "وقتی کار رو گرفتم سر از پا نمی‌شناختم." }, { en: "He is on cloud nine about the news.", fa: "از این خبر خیلی ذوق کرده." }] },
      { word: "butterflies in my stomach", meaning: "دل‌شوره داشتن", en: "I get butterflies in my stomach before a speech.", fa: "قبل از سخنرانی دل‌شوره می‌گیرم.", icon: "🦋", examples: [{ en: "I get butterflies in my stomach before a speech.", fa: "قبل از سخنرانی دل‌شوره می‌گیرم." }, { en: "Thinking about it gives me butterflies in my stomach.", fa: "فکر کردن بهش بهم دل‌شوره می‌ده." }, { en: "I had butterflies in my stomach on the first day.", fa: "روز اولش دل‌شوره داشتم." }] },
      { word: "over the moon", meaning: "سر از پا نمی‌شناختن", en: "He was over the moon when he heard the news.", fa: "وقتی خبر رو شنید سر از پا نمی‌شناخت.", icon: "🌙", examples: [{ en: "He was over the moon when he heard the news.", fa: "وقتی خبر رو شنید سر از پا نمی‌شناخت." }, { en: "She is over the moon about her new puppy.", fa: "برای توله‌سگ جدیدش خیلی ذوق کرده." }, { en: "We were over the moon after the win.", fa: "بعد از برد سر از پا نمی‌شناختیم." }] },
      { word: "cold feet", meaning: "پا پس کشیدن", en: "She got cold feet before the big speech.", fa: "قبل از سخنرانی بزرگ پا پس کشید.", icon: "🥶", examples: [{ en: "She got cold feet before the big speech.", fa: "قبل از سخنرانی بزرگ پا پس کشید." }, { en: "Do not get cold feet now; you are ready!", fa: "الان پا پس نکش؛ آماده‌ای!" }, { en: "He got cold feet the night before the trip.", fa: "شب قبل از سفر پا پس کشید." }] },
      { word: "down in the dumps", meaning: "دلگیر و غمگین", en: "He is down in the dumps today.", fa: "امروز دلگیره.", icon: "😞", examples: [{ en: "He is down in the dumps today.", fa: "امروز دلگیره." }, { en: "She was down in the dumps after the news.", fa: "بعد از اون خبر غمگین شد." }, { en: "When I feel down in the dumps, I call a friend.", fa: "وقتی دلگیرم، به یک دوست زنگ می‌زنم." }] }
    ]
  },
  idiomEffort: {
    name: "اصطلاحات کار و تلاش",
    words: [
      { word: "burn the midnight oil", meaning: "تا دیروقت کار کردن", en: "I burn the midnight oil before exams.", fa: "قبل از امتحان‌ها تا دیروقت درس می‌خونم.", icon: "🕯️", examples: [{ en: "I burn the midnight oil before exams.", fa: "قبل از امتحان‌ها تا دیروقت درس می‌خونم." }, { en: "She burns the midnight oil for her project.", fa: "برای پروژه‌اش تا دیروقت کار می‌کنه." }, { en: "Do not burn the midnight oil too often.", fa: "زیاد تا دیروقت بیدار نمون." }] },
      { word: "think outside the box", meaning: "خلاقانه فکر کردن", en: "We need to think outside the box.", fa: "باید خلاقانه فکر کنیم.", icon: "📦", examples: [{ en: "We need to think outside the box.", fa: "باید خلاقانه فکر کنیم." }, { en: "She always thinks outside the box at work.", fa: "او سر کار همیشه خلاقانه فکر می‌کنه." }, { en: "Think outside the box to solve this.", fa: "برای حلش، خارج از چارچوب فکر کن." }] },
      { word: "get the ball rolling", meaning: "کار را شروع کردن", en: "Let us get the ball rolling with a quick game.", fa: "بیا با یک بازی سریع کار رو شروع کنیم.", icon: "⚽", examples: [{ en: "Let us get the ball rolling with a quick game.", fa: "بیا با یک بازی سریع کار رو شروع کنیم." }, { en: "He got the ball rolling on the new project.", fa: "او پروژه جدید رو شروع کرد." }, { en: "I will get the ball rolling tomorrow morning.", fa: "فردا صبح کار رو شروع می‌کنم." }] },
      { word: "on the ball", meaning: "هوشیار و آماده", en: "The new assistant is really on the ball.", fa: "دستیار جدید واقعاً هوشیاره.", icon: "🎯", examples: [{ en: "The new assistant is really on the ball.", fa: "دستیار جدید واقعاً هوشیاره." }, { en: "You must stay on the ball in this job.", fa: "توی این کار باید هوشیار بمونی." }, { en: "She is always on the ball with deadlines.", fa: "توی مهلت‌ها همیشه سر وقت عمل می‌کنه." }] },
      { word: "hit the nail on the head", meaning: "دقیقاً درست گفتن", en: "You hit the nail on the head with that answer.", fa: "با اون جواب دقیقاً زدی تو خال.", icon: "🔨", examples: [{ en: "You hit the nail on the head with that answer.", fa: "با اون جواب دقیقاً زدی تو خال." }, { en: "She hit the nail on the head about the problem.", fa: "درباره مشکل کاملاً درست گفت." }, { en: "His comment hit the nail on the head.", fa: "حرفش دقیقاً درست بود." }] }
    ]
  },
  idiomBehavior: {
    name: "اصطلاحات رفتار و آداب",
    words: [
      { word: "spill the beans", meaning: "راز را لو دادن", en: "Do not spill the beans about the party!", fa: "راز مهمونی رو لو نده!", icon: "🤫", examples: [{ en: "Do not spill the beans about the party!", fa: "راز مهمونی رو لو نده!" }, { en: "He spilled the beans about the gift.", fa: "راز هدیه رو لو داد." }, { en: "Who spilled the beans to her?", fa: "کی بهش راز رو لو داد؟" }] },
      { word: "let the cat out of the bag", meaning: "راز را ناخواسته لو دادن", en: "He let the cat out of the bag about the surprise.", fa: "راز سورپرایز رو ناخواسته لو داد.", icon: "🐈", examples: [{ en: "He let the cat out of the bag about the surprise.", fa: "راز سورپرایز رو ناخواسته لو داد." }, { en: "Do not let the cat out of the bag yet!", fa: "هنوز راز رو فاش نکن!" }, { en: "She let the cat out of the bag by mistake.", fa: "اشتباهاً راز رو فاش کرد." }] },
      { word: "beat around the bush", meaning: "طفره رفتن", en: "Do not beat around the bush; tell me the truth.", fa: "طفره نرو؛ حقیقت رو بگو.", icon: "🌳", examples: [{ en: "Do not beat around the bush; tell me the truth.", fa: "طفره نرو؛ حقیقت رو بگو." }, { en: "He always beats around the bush in meetings.", fa: "تو جلسه‌ها همیشه طفره می‌ره." }, { en: "I beat around the bush too much.", fa: "من زیادی طفره می‌رم." }] },
      { word: "a blessing in disguise", meaning: "توفیق اجباری", en: "Losing that job was a blessing in disguise.", fa: "اون بیکار شدن یه توفیق اجباری بود.", icon: "🙏", examples: [{ en: "Losing that job was a blessing in disguise.", fa: "اون بیکار شدن یه توفیق اجباری بود." }, { en: "The delay was a blessing in disguise.", fa: "اون تاخیر به نفعمون تموم شد." }, { en: "Sometimes rain is a blessing in disguise.", fa: "بعضی وقتا بارون به نفعه، فقط نمی‌دونی." }] },
      { word: "a couch potato", meaning: "آدم تنبل (لم‌ده)", en: "My brother is a couch potato on weekends.", fa: "برادرم آخر هفته‌ها فقط لم می‌ده.", icon: "🛋️", examples: [{ en: "My brother is a couch potato on weekends.", fa: "برادرم آخر هفته‌ها فقط لم می‌ده." }, { en: "Do not be a couch potato; come with us!", fa: "تنبلی نکن؛ بیا با ما!" }, { en: "He became a couch potato after the holidays.", fa: "بعد از تعطیلات تنبل شده." }] }
    ]
  },
  teenLife: {
    name: "حال‌وهوای من",
    words: [
      { word: "mood", meaning: "حال‌و‌هوا", en: "I am in a good mood today.", fa: "امروز حال‌وهوای خوبی دارم.", icon: "🌤️", examples: [{ en: "I am in a good mood today.", fa: "امروز حال‌وهوای خوبی دارم." }, { en: "Music changes my mood.", fa: "موسیقی حال‌وهوایم را عوض می‌کند." }, { en: "She woke up in a bad mood.", fa: "او با حال‌وهوای بدی بیدار شد." }] },
      { word: "confident", meaning: "بااعتمادبه‌نفس", en: "She feels confident in class.", fa: "او در کلاس بااعتمادبه‌نفس است.", icon: "✨", examples: [{ en: "She feels confident in class.", fa: "او در کلاس بااعتمادبه‌نفس است." }, { en: "I feel more confident now.", fa: "الان اعتمادبه‌نفس بیشتری دارم." }, { en: "Practice makes you confident.", fa: "تمرین تو را بااعتمادبه‌نفس می‌کند." }] },
      { word: "shy", meaning: "خجالتی", en: "I am shy with new people.", fa: "من با آدم‌های جدید خجالتی هستم.", icon: "🙈", examples: [{ en: "I am shy with new people.", fa: "من با آدم‌های جدید خجالتی هستم." }, { en: "She gave a shy smile.", fa: "او یک لبخند خجالتی زد." }, { en: "Don't be shy; ask your question.", fa: "خجالت نکش؛ سؤالت را بپرس." }] },
      { word: "proud", meaning: "مفتخر", en: "I am proud of my progress.", fa: "من به پیشرفتم افتخار می‌کنم.", icon: "🌟", examples: [{ en: "I am proud of my progress.", fa: "من به پیشرفتم افتخار می‌کنم." }, { en: "Her family is proud of her.", fa: "خانواده‌اش به او افتخار می‌کنند." }, { en: "We are proud of our team.", fa: "ما به تیم‌مان افتخار می‌کنیم." }] },
      { word: "kind", meaning: "مهربان", en: "My friend is kind to everyone.", fa: "دوستم با همه مهربان است.", icon: "💜", examples: [{ en: "My friend is kind to everyone.", fa: "دوستم با همه مهربان است." }, { en: "That was a kind message.", fa: "آن یک پیام مهربانانه بود." }, { en: "Always be kind to others.", fa: "همیشه با دیگران مهربان باش." }] }
    ]
  },
  a2everyday: {
    name: "روزمره (A2)",
    words: [
      { word: "appointment", meaning: "قرار ملاقات، نوبت", en: "I have a doctor's appointment today.", fa: "امروز یک قرار ملاقات با پزشک دارم.", icon: "📅", examples: [{ en: "I have a doctor's appointment today.", fa: "امروز یک قرار ملاقات با پزشک دارم." }, { en: "Can we make an appointment for Monday?", fa: "می‌شود برای دوشنبه قرار بگذاریم؟" }, { en: "She canceled her appointment.", fa: "او قرار ملاقاتش را لغو کرد." }] },
      { word: "borrow", meaning: "قرض گرفتن", en: "Can I borrow your pen?", fa: "می‌شود خودکارت را قرض بگیرم؟", icon: "✏️", examples: [{ en: "Can I borrow your pen?", fa: "می‌شود خودکارت را قرض بگیرم؟" }, { en: "I borrowed a book from the library.", fa: "یک کتاب از کتابخانه قرض گرفتم." }, { en: "You can borrow my umbrella.", fa: "می‌توانی چترم را قرض بگیری." }] },
      { word: "decide", meaning: "تصمیم گرفتن", en: "We decided to stay home.", fa: "تصمیم گرفتیم در خانه بمانیم.", icon: "🤔", examples: [{ en: "We decided to stay home.", fa: "تصمیم گرفتیم در خانه بمانیم." }, { en: "I cannot decide what to wear.", fa: "نمی‌توانم تصمیم بگیرم چه بپوشم." }, { en: "She decides quickly.", fa: "او سریع تصمیم می‌گیرد." }] },
      { word: "neighborhood", meaning: "محله", en: "Our neighborhood is very quiet.", fa: "محله‌ی ما خیلی ساکت است.", icon: "🏘️", examples: [{ en: "Our neighborhood is very quiet.", fa: "محله‌ی ما خیلی ساکت است." }, { en: "There is a nice park in our neighborhood.", fa: "در محله‌ی ما یک پارک قشنگ هست." }, { en: "Everyone knows everyone in this neighborhood.", fa: "در این محله همه همدیگر را می‌شناسند." }] },
      { word: "routine", meaning: "روتین، رویه روزانه", en: "My morning routine is simple.", fa: "روتین صبحگاهی من ساده است.", icon: "🔁", examples: [{ en: "My morning routine is simple.", fa: "روتین صبحگاهی من ساده است." }, { en: "Exercise is part of my daily routine.", fa: "ورزش بخشی از روتین روزانه‌ی من است." }, { en: "She follows the same routine every day.", fa: "او هر روز همان روتین را دنبال می‌کند." }] }
    ]
  },
  a2travel: {
    name: "سفر (A2)",
    words: [
      { word: "flight", meaning: "پرواز", en: "Our flight leaves at eight.", fa: "پرواز ما ساعت هشت حرکت می‌کند.", icon: "✈️", examples: [{ en: "Our flight leaves at eight.", fa: "پرواز ما ساعت هشت حرکت می‌کند." }, { en: "The flight was short and smooth.", fa: "پرواز کوتاه و آرام بود." }, { en: "I read a book during the flight.", fa: "در طول پرواز کتاب خواندم." }] },
      { word: "luggage", meaning: "چمدان، بار مسافر", en: "My luggage is heavy.", fa: "چمدانم سنگین است.", icon: "🧳", examples: [{ en: "My luggage is heavy.", fa: "چمدانم سنگین است." }, { en: "We collected our luggage at the airport.", fa: "بارمان را در فرودگاه تحویل گرفتیم." }, { en: "Do not forget your luggage in the taxi.", fa: "چمدانت را در تاکسی جا نگذار." }] },
      { word: "passenger", meaning: "مسافر", en: "The passengers are waiting at the gate.", fa: "مسافرها پشت گیت منتظرند.", icon: "💺", examples: [{ en: "The passengers are waiting at the gate.", fa: "مسافرها پشت گیت منتظرند." }, { en: "Every passenger needs a ticket.", fa: "هر مسافر به بلیط نیاز دارد." }, { en: "The passenger next to me slept all the way.", fa: "مسافر کنار من تمام مسیر خوابید." }] },
      { word: "itinerary", meaning: "برنامه سفر", en: "Our itinerary is very full.", fa: "برنامه سفر ما خیلی پر است.", icon: "🗓️", examples: [{ en: "Our itinerary is very full.", fa: "برنامه سفر ما خیلی پر است." }, { en: "The itinerary includes two museums.", fa: "برنامه سفر شامل دو موزه است." }, { en: "I changed the itinerary a little.", fa: "برنامه سفر را کمی عوض کردم." }] },
      { word: "destination", meaning: "مقصد", en: "Our destination is Rome.", fa: "مقصد ما رم است.", icon: "🎯", examples: [{ en: "Our destination is Rome.", fa: "مقصد ما رم است." }, { en: "We reached our destination.", fa: "به مقصد رسیدیم." }, { en: "Enjoy the journey to your destination.", fa: "از مسیر تا مقصدت لذت ببر." }] }
    ]
  },
  a2food: {
    name: "غذا و رستوران (A2)",
    words: [
      { word: "recipe", meaning: "دستور پخت", en: "This recipe is my grandmother's.", fa: "این دستور پخت متعلق به مادربزرگم است.", icon: "📖", examples: [{ en: "This recipe is my grandmother's.", fa: "این دستور پخت متعلق به مادربزرگم است." }, { en: "The recipe is very easy to follow.", fa: "این دستور پخت خیلی ساده است." }, { en: "I found a great recipe online.", fa: "یک دستور پخت عالی آنلاین پیدا کردم." }] },
      { word: "dessert", meaning: "دسر", en: "Ice cream is my favorite dessert.", fa: "بستنی دسر مورد علاقه‌ی من است.", icon: "🍨", examples: [{ en: "Ice cream is my favorite dessert.", fa: "بستنی دسر مورد علاقه‌ی من است." }, { en: "We ordered dessert after dinner.", fa: "بعد از شام دسر سفارش دادیم." }, { en: "This dessert is not too sweet.", fa: "این دسر خیلی شیرین نیست." }] },
      { word: "bill", meaning: "صورتحساب", en: "Can we have the bill, please?", fa: "می‌شود صورت‌حساب را بیاورید؟", icon: "🧾", examples: [{ en: "Can we have the bill, please?", fa: "می‌شود صورت‌حساب را بیاورید؟" }, { en: "The bill is on the table.", fa: "صورت‌حساب روی میز است." }, { en: "Let me pay the bill tonight.", fa: "امشب بگذار من صورت‌حساب را پرداخت کنم." }] },
      { word: "appetizer", meaning: "پیش‌غذا", en: "We ordered an appetizer.", fa: "یک پیش‌غذا سفارش دادیم.", icon: "🥗", examples: [{ en: "We ordered an appetizer.", fa: "یک پیش‌غذا سفارش دادیم." }, { en: "The appetizer was delicious.", fa: "پیش‌غذا خوشمزه بود." }, { en: "Soup is a nice appetizer.", fa: "سوپ پیش‌غذای خوبی است." }] },
      { word: "ingredient", meaning: "مواد اولیه", en: "Flour is an important ingredient in bread.", fa: "آرد یکی از مواد اولیه مهم در نان است.", icon: "🥣", examples: [{ en: "Flour is an important ingredient in bread.", fa: "آرد یکی از مواد اولیه مهم در نان است." }, { en: "Check the ingredients before cooking.", fa: "قبل از آشپزی مواد اولیه را بررسی کن." }, { en: "This soup has simple ingredients.", fa: "این سوپ مواد اولیه ساده‌ای دارد." }] }
    ]
  },
  a2work: {
    name: "کار و اداره (A2)",
    words: [
      { word: "salary", meaning: "حقوق، دستمزد", en: "He gets his salary every month.", fa: "او هر ماه حقوقش را می‌گیرد.", icon: "💵", examples: [{ en: "He gets his salary every month.", fa: "او هر ماه حقوقش را می‌گیرد." }, { en: "The salary is paid on the first of the month.", fa: "حقوق اول ماه پرداخت می‌شود." }, { en: "She saved part of her salary.", fa: "او بخشی از حقوقش را پس‌انداز کرد." }] },
      { word: "manager", meaning: "مدیر", en: "She is the new manager.", fa: "او مدیر جدید است.", icon: "🧑‍💼", examples: [{ en: "She is the new manager.", fa: "او مدیر جدید است." }, { en: "The manager approved my request.", fa: "مدیر درخواستم را تأیید کرد." }, { en: "Our manager listens to everyone.", fa: "مدیر ما به همه گوش می‌دهد." }] },
      { word: "interview", meaning: "مصاحبه", en: "I have a job interview tomorrow.", fa: "فردا مصاحبه‌ی شغلی دارم.", icon: "📝", examples: [{ en: "I have a job interview tomorrow.", fa: "فردا مصاحبه‌ی شغلی دارم." }, { en: "The interview took about an hour.", fa: "مصاحبه حدود یک ساعت طول کشید." }, { en: "She prepared for the interview all week.", fa: "او تمام هفته برای مصاحبه آماده شد." }] },
      { word: "deadline", meaning: "ضرب‌الاجل، مهلت", en: "We must finish before the deadline.", fa: "باید قبل از ضرب‌الاجل تمام کنیم.", icon: "⏳", examples: [{ en: "We must finish before the deadline.", fa: "باید قبل از ضرب‌الاجل تمام کنیم." }, { en: "The deadline for this project is close.", fa: "مهلت این پروژه نزدیک است." }, { en: "I worked late to meet the deadline.", fa: "برای رسیدن به مهلت، تا دیروقت کار کردم." }] },
      { word: "coworker", meaning: "همکار", en: "My coworkers are friendly.", fa: "همکارانم صمیمی هستند.", icon: "🧑‍🤝‍🧑", examples: [{ en: "My coworkers are friendly.", fa: "همکارانم صمیمی هستند." }, { en: "I had lunch with a coworker.", fa: "با یک همکار ناهار خوردم." }, { en: "She asked a coworker for help.", fa: "او از یک همکار کمک خواست." }] }
    ]
  }
};

var TEEN_DIALOGUES = [
  {
    scene: "مدرسه",
    lines: [
      { who: "A", en: "Hi! How are you today?", fa: "سلام! امروز حالت چطوره؟" },
      { who: "B", en: "I am a little shy, but I am okay.", fa: "کمی خجالتی‌ام، ولی خوبم." },
      { who: "A", en: "You are doing great.", fa: "داری عالی پیش می‌ری." }
    ],
    question: "دوستت می‌گه خجالتیه. چی جواب می‌دی؟",
    options: [
      { text: "You are doing great.", fa: "داری عالی پیش می‌ری.", good: true },
      { text: "Go away.", fa: "برو کنار.", good: false },
      { text: "I do not care.", fa: "برایم مهم نیست.", good: false }
    ]
  },
  {
    scene: "پیام دوستانه",
    lines: [
      { who: "A", en: "I like your style.", fa: "از استایلت خوشم می‌آید." },
      { who: "B", en: "Thank you! That is kind.", fa: "ممنون! خیلی مهربانانه بود." },
      { who: "A", en: "You look confident today.", fa: "امروز بااعتمادبه‌نفس به نظر می‌رسی." }
    ],
    question: "یکی ازت تعریف می‌کنه. جواب بهتر چیه؟",
    options: [
      { text: "Thank you!", fa: "ممنون!", good: true },
      { text: "No, never.", fa: "نه، هرگز.", good: false },
      { text: "Stop talking.", fa: "حرف نزن.", good: false }
    ]
  },
  {
    scene: "حال‌و‌هوا",
    lines: [
      { who: "A", en: "What is your mood today?", fa: "امروز حال‌وهوایت چطوره؟" },
      { who: "B", en: "I feel calm and proud.", fa: "احساس آرامش و افتخار دارم." },
      { who: "A", en: "That is beautiful.", fa: "این خیلی قشنگه." }
    ],
    question: "می‌خوای حال خوبت رو بگی. کدوم بهتره؟",
    options: [
      { text: "I feel calm and proud.", fa: "احساس آرامش و افتخار دارم.", good: true },
      { text: "I am a table.", fa: "من یک میز هستم.", good: false },
      { text: "The bus is old.", fa: "اتوبوس قدیمی است.", good: false }
    ]
  }
];

var dialogueIndex = 0;
var SENTENCE_WORDS = [
  { words: ["I", "feel", "confident", "today"], fa: "امروز احساس اعتمادبه‌نفس دارم." },
  { words: ["My", "friend", "is", "kind"], fa: "دوست من مهربان است." },
  { words: ["I", "like", "your", "style"], fa: "من استایل تو را دوست دارم." }
];

var currentSentenceWords = [];
var sentenceIndex = 0;
var currentCategoryKey = "everyday";
var appOrigin = null;
var WORDS = CATEGORIES[currentCategoryKey].words;
var PROGRESS_KEY = "lughatyar_progress_v1";
var LEARNING_PATH_KEY = "lughatyar_learning_path_v1";

function isPlainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function makeDefaultProgress() {
  return {
    words: {},
    days: {},
    pos: {},
    settings: {
      reminder: false,
      reminderTime: "20:00",
      sound: true,
      avatar: "student",
      theme: "default"
    },
    missions: null,
    quiz: {
      plays: 0,
      best: 0,
      byLevel: {
        A1: { plays: 0, best: 0 },
        A2: { plays: 0, best: 0 }
      }
    },
    appVersion: APP_VERSION
  };
}

function normalizeProgress(data) {
  var safe = makeDefaultProgress();
  if (isPlainObject(data)) {
    for (var key in data) {
      safe[key] = data[key];
    }
  }
  if (!isPlainObject(safe.words)) safe.words = {};
  if (!isPlainObject(safe.days)) safe.days = {};
  if (!isPlainObject(safe.pos)) safe.pos = {};
  if (!isPlainObject(safe.settings)) safe.settings = {};
  safe.settings.reminder = !!safe.settings.reminder;
  safe.settings.reminderTime = typeof safe.settings.reminderTime === "string" ? safe.settings.reminderTime : "20:00";
  if (safe.settings.sound === undefined) safe.settings.sound = true;
  if (typeof safe.settings.avatar !== "string") safe.settings.avatar = "student";
  safe.settings.theme = "default";
  var allowedAvatars = ["student", "flower", "star", "cat"];
  if (allowedAvatars.indexOf(safe.settings.avatar) === -1) {
    safe.settings.avatar = "student";
  }
  if (!isPlainObject(safe.quiz)) safe.quiz = { plays: 0, best: 0, byLevel: {} };
  if (!isPlainObject(safe.quiz.byLevel)) safe.quiz.byLevel = {};
  if (!isPlainObject(safe.quiz.byLevel.A1)) safe.quiz.byLevel.A1 = { plays: 0, best: 0 };
  if (!isPlainObject(safe.quiz.byLevel.A2)) safe.quiz.byLevel.A2 = { plays: 0, best: 0 };
  safe.appVersion = APP_VERSION;
  return safe;
}

var progress = normalizeProgress(null);
try {
  var rawProgress = localStorage.getItem(PROGRESS_KEY);
  if (rawProgress) progress = normalizeProgress(JSON.parse(rawProgress));
} catch (e) {
  progress = normalizeProgress(null);
}

var AVATAR_OPTIONS = {
  student: { icon: "🧑‍🎓", name: "تمرکز بالا", note: "یادگیری متمرکز و هدفمند." },
  flower: { icon: "✨", name: "یادگیری خلاق", note: "روش یادگیری مناسب خودت را پیدا کن." },
  star: { icon: "🌍", name: "کشف و یادگیری", note: "هر لغت، یک مهارت جدید است." },
  cat: { icon: "🌿", name: "یادگیری متعادل", note: "با سرعت مناسب خودت ادامه بده." }
};

function applyPersonalTheme() {
  document.body.removeAttribute("data-theme");
  if (progress.settings) progress.settings.theme = "default";
}

function toEnglishDigits(s) { return String(s).replace(/[۰-۹]/g, function (d) { return "۰۱۲۳۴۵۶۷۸۹".indexOf(d); }); }
function toPersianDigits(n) {
  var p = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(n).replace(/[0-9]/g, function (d) { return p[+d]; });
}

function syncPersonalizationUI() {
  if (!progress.settings) return;
  var avatarKey = progress.settings.avatar || "student";
  var avatar = AVATAR_OPTIONS[avatarKey] || AVATAR_OPTIONS.student;
  var avatarEl = document.getElementById("profileAvatar");
  var nameEl = document.getElementById("profileName");
  var noteEl = document.getElementById("profileCompanionNote");
  var avatarSub = document.getElementById("avatarSub");
  if (avatarEl) avatarEl.textContent = avatar.icon;
  if (nameEl) nameEl.textContent = avatar.name;
  if (noteEl) noteEl.textContent = avatar.note;
  if (avatarSub) avatarSub.textContent = avatar.name;
  var avatarBtns = document.querySelectorAll(".avatar-choice");
  for (var i = 0; i < avatarBtns.length; i++) {
    avatarBtns[i].classList.toggle("active", avatarBtns[i].getAttribute("data-avatar") === avatarKey);
  }
  applyPersonalTheme();
}

function syncReminderUI() {
  var reminderSwitch = document.getElementById("reminderSwitch");
  var reminderTime = document.getElementById("reminderTime");
  var reminderSub = document.getElementById("reminderSub");
  if (!reminderSwitch) return;
  reminderSwitch.checked = !!progress.settings.reminder;
  reminderTime.value = progress.settings.reminderTime;
  reminderTime.disabled = !progress.settings.reminder;
  reminderSub.textContent = progress.settings.reminder ? ("فعال • ساعت " + toPersianDigits(progress.settings.reminderTime)) : "غیرفعال";
}

function todayStr() {
  var d = new Date();
  var m = String(d.getMonth() + 1).padStart(2, "0");
  var day = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + m + "-" + day;
}

function saveProgress() {
  try {
    progress = normalizeProgress(progress);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (e) { }
}

function currentWordKey() { return (WORDS[idx].__cat || currentCategoryKey) + "|" + WORDS[idx].word; }
var SRS_LADDER = [2, 4, 7, 15, 30];
function daysBetween(a, b) {
  return Math.round((new Date(b + "T00:00:00") - new Date(a + "T00:00:00")) / 86400000);
}

function dueWords() {
  var out = [];
  var today = todayStr();
  for (var cat in CATEGORIES) {
    if (cat.indexOf("__") === 0) continue;
    var ws = CATEGORIES[cat].words;
    for (var i = 0; i < ws.length; i++) {
      var w = ws[i];
      var rec = progress.words[cat + "|" + w.word];
      if (!rec || !rec.s) continue;
      if (rec.s === "u") { out.push({ w: w, cat: cat }); continue; }
      if (rec.s === "k" && rec.d) {
        var nextN = (rec.n || 1) + 1;
        var interval = SRS_LADDER[Math.min(nextN - 2, SRS_LADDER.length - 1)];
        if (daysBetween(rec.d, today) >= interval) out.push({ w: w, cat: cat });
      }
    }
  }
  return out;
}

function markWord(state) {
  var k = currentWordKey();
  var rec = progress.words[k] || { s: "", n: 0 };
  rec.s = state;
  rec.n = (rec.n || 0) + 1;
  rec.d = todayStr();
  progress.words[k] = rec;
  trackMissionWord(state);
  saveProgress();
  updateMarkUI();
  updateTileProgress();
  updateVocabularyA1Progress();
  renderDailyMissions();
  renderAchievements();
}

function knownCount(catKey) {
  var c = 0, ws = CATEGORIES[catKey] ? CATEGORIES[catKey].words : [];
  for (var i = 0; i < ws.length; i++) {
    var r = progress.words[catKey + "|" + ws[i].word];
    if (r && r.s === "k") c++;
  }
  return c;
}

function totalKnown() {
  var t = 0;
  for (var k in CATEGORIES) {
    if (k.indexOf("__") === 0) continue;
    t += knownCount(k);
  }
  return t;
}

function studyDays() { var n = 0; for (var d in progress.days) n++; return n; }

function ensureDailyMissions() {
  var today = todayStr();
  if (!progress.missions || progress.missions.date !== today) {
    progress.missions = { date: today, words: 0, reviews: 0, quizzes: 0 };
  }
  if (progress.missions.words === undefined) progress.missions.words = 0;
  if (progress.missions.reviews === undefined) progress.missions.reviews = 0;
  if (progress.missions.quizzes === undefined) progress.missions.quizzes = 0;
}

function missionPercent(value, target) {
  return Math.min(100, Math.round((value / target) * 100));
}

function renderDailyMissions() {
  var box = document.getElementById("dailyMissions");
  if (!box) return;
  ensureDailyMissions();
  var missions = [
    { key: "words", icon: "🌱", title: "۵ لغت تمرین کن", value: progress.missions.words, target: 5 },
    { key: "reviews", icon: "🔁", title: "۳ لغت را مرور کن", value: progress.missions.reviews, target: 3 },
    { key: "quizzes", icon: "🎮", title: "یک تمرین کوتاه انجام بده", value: progress.missions.quizzes, target: 1 }
  ];
  var html = "";
  var allDone = true;
  for (var i = 0; i < missions.length; i++) {
    var m = missions[i];
    var safeValue = Math.min(m.value || 0, m.target);
    var done = safeValue >= m.target;
    if (!done) allDone = false;
    var pct = missionPercent(safeValue, m.target);
    html += '<div class="mission-card ' + (done ? "done" : "") + '">' +
      '<div class="mission-icon">' + (done ? "✅" : m.icon) + '</div>' +
      '<div class="mission-info">' +
      '<div class="mission-title">' + m.title + '</div>' +
      '<div class="mission-track"><div class="mission-fill" style="width:' + pct + '%"></div></div>' +
      '</div><div class="mission-count">' + toPersianDigits(safeValue) + " / " + toPersianDigits(m.target) + '</div></div>';
  }
  box.innerHTML = html;
  var doneNote = document.getElementById("missionsDoneNote");
  if (doneNote) {
    doneNote.classList.toggle("show", allDone);
  }
}

function knownCountMany(keys) {
  var total = 0;
  for (var i = 0; i < keys.length; i++) {
    total += knownCount(keys[i]);
  }
  return total;
}

function updateVocabularyA1Progress() {
  var buttons = document.querySelectorAll("[data-vocab-category]");
  for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    var key = btn.getAttribute("data-vocab-category");
    if (!key || !CATEGORIES[key] || !CATEGORIES[key].words) continue;
    var total = CATEGORIES[key].words.length;
    var pos = progress.pos && typeof progress.pos[key] === "number" ? progress.pos[key] : 0;
    var known = knownCount(key);
    var shown = Math.max(pos, known);
    if (shown > total) shown = total;
    var countEl = btn.querySelector(".category-count");
    var statusEl = btn.querySelector(".category-status");
    if (countEl) countEl.textContent = toPersianDigits(shown) + " از " + toPersianDigits(total) + " لغت";
    if (statusEl) {
      if (shown <= 0) statusEl.textContent = "شروع نشده";
      else if (shown >= total) statusEl.textContent = "کامل شده";
      else statusEl.textContent = "در حال یادگیری";
    }
    btn.classList.toggle("is-started", shown > 0 && shown < total);
    btn.classList.toggle("is-complete", shown >= total && total > 0);
  }
}

function updateProfileLevelBadge() {
  var el = document.getElementById("profileLevel");
  if (!el) return;
  var a2Known = knownCountMany(["a2everyday", "a2travel", "a2food", "a2work"]);
  el.textContent = a2Known > 0 ? "A2" : "A1";
}

function renderAchievements() {
  var box = document.getElementById("achievementBadges");
  if (!box) return;
  var a2Known = knownCountMany(["a2everyday", "a2travel", "a2food", "a2work"]);
  var idiomKnown = knownCountMany(["idiomEveryday", "idiomFeelings", "idiomEffort", "idiomBehavior"]);
  var badges = [
    { icon: "🌱", label: "شروع مسیر", unlocked: knownCount("everyday") > 0 },
    { icon: "✈️", label: "یادگیرنده فعال", unlocked: knownCount("travel") > 0 },
    { icon: "🍓", label: "گسترش واژگان", unlocked: knownCount("food") > 0 },
    { icon: "💼", label: "پیشرفت پیوسته", unlocked: knownCount("work") > 0 },
    { icon: "🎓", label: "ورود به A2", unlocked: a2Known > 0 },
    { icon: "💬", label: "آمادگی مکالمه", unlocked: idiomKnown > 0 }
  ];
  var html = "";
  for (var i = 0; i < badges.length; i++) {
    var b = badges[i];
    html += '<div class="badge-item"><div class="hex-badge ' + (b.unlocked ? "unlocked" : "locked") + '">' +
      (b.unlocked ? b.icon : "🔒") + '</div><span class="badge-label">' + b.label + '</span></div>';
  }
  box.innerHTML = html;
  updateProfileLevelBadge();
}

function trackMissionWord(state) {
  ensureDailyMissions();
  if (state === "k" || state === "u") {
    progress.missions.words = Math.min((progress.missions.words || 0) + 1, 5);
  }
  if (currentCategoryKey === "__review" || currentCategoryKey === "__today") {
    progress.missions.reviews = Math.min((progress.missions.reviews || 0) + 1, 3);
  }
}

function trackMissionQuiz() {
  ensureDailyMissions();
  progress.missions.quizzes = Math.min(progress.missions.quizzes + 1, 1);
}

function updateMarkUI() {
  var rec = progress.words[currentWordKey()];
  var knownBtn = document.getElementById("knownBtn");
  var unknownBtn = document.getElementById("unknownBtn");
  if (knownBtn) knownBtn.classList.toggle("active", !!(rec && rec.s === "k"));
  if (unknownBtn) unknownBtn.classList.toggle("active", !!(rec && rec.s === "u"));
}

function updateTileProgress() {
  var subMap = {
    idiomEveryday: "idiomMetaEveryday",
    idiomFeelings: "idiomMetaFeelings",
    idiomEffort: "idiomMetaEffort",
    idiomBehavior: "idiomMetaBehavior",
    a2everyday: "a2MetaEveryday",
    a2travel: "a2MetaTravel",
    a2food: "a2MetaFood",
    a2work: "a2MetaWork",
    everyday: "a1MetaEveryday",
    travel: "a1MetaTravel",
    food: "a1MetaFood",
    work: "a1MetaWork",
    teenLife: "a1MetaTeenLife"
  };
  for (var skey in subMap) {
    var sel = document.getElementById(subMap[skey]);
    if (sel && CATEGORIES[skey]) {
      var stotal = CATEGORIES[skey].words.length;
      var spct = Math.round(knownCount(skey) / stotal * 100);
      sel.textContent = toPersianDigits(stotal) + " لغت • " + toPersianDigits(spct) + "٪";
    }
  }
}

var CATEGORY = CATEGORIES[currentCategoryKey].name;
var idx = 0;
var chipColors = ["#FFE1E7", "#E1F3EA", "#FFF3D6", "#E3F9E5", "#FFF6D6", "#FFEFB3"];

var card = document.getElementById("card");
var iconChip = document.getElementById("iconChip");
var iconFront = document.getElementById("iconFront");
var wordFront = document.getElementById("wordFront");
var meaningBack = document.getElementById("meaningBack");
var infoBtn = document.getElementById("infoBtn");
var screenExamples = document.getElementById("screenExamples");
var screenIdioms = document.getElementById("screenIdioms");
var examplesWordTitle = document.getElementById("examplesWordTitle");
var examplesList = document.getElementById("examplesList");
var backFromExamplesBtn = document.getElementById("backFromExamplesBtn");
var counter = document.getElementById("counter");
var progressFill = document.getElementById("progressFill");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var speakBtn = document.getElementById("speakBtn");
var levelBadge = document.getElementById("levelBadge");
var categoryBadge = document.getElementById("categoryBadge");
var streakCount = document.getElementById("streakCount");
var celebrateOverlay = document.getElementById("celebrateOverlay");
var restartBtn = document.getElementById("restartBtn");

var confettiColors = ["#0E7A5C", "#013E37", "#FFB86B", "#E8973E", "#FFF1DE", "#E1F3EA", "#FFFFFF"];

function clearConfetti() {
  var old = celebrateOverlay.querySelector(".confetti-container");
  if (old && old.parentNode) old.parentNode.removeChild(old);
}

function launchConfetti() {
  clearConfetti();
  var container = document.createElement("div");
  container.className = "confetti-container";
  for (var i = 0; i < 32; i++) {
    var piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background = confettiColors[i % confettiColors.length];
    piece.style.animationDelay = Math.random() * 0.35 + "s";
    piece.style.animationDuration = (1.5 + Math.random() * 1) + "s";
    piece.style.setProperty("--drift", Math.round(Math.random() * 100 - 50) + "px");
    piece.style.setProperty("--rot", Math.round(320 + Math.random() * 440) + "deg");
    container.appendChild(piece);
  }
  celebrateOverlay.appendChild(container);
  setTimeout(clearConfetti, 2700);
}

function updateStreak() {
  try {
    var today = new Date();
    var todayStr = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    var lastDate = localStorage.getItem("lughatyar_lastDate");
    var streak = parseInt(localStorage.getItem("lughatyar_streak") || "0", 10);
    if (lastDate !== todayStr) {
      var yesterday = new Date(today);
      yesterday.setDate(today.getDate() - 1);
      var yesterdayStr = yesterday.getFullYear() + "-" + (yesterday.getMonth() + 1) + "-" + yesterday.getDate();
      streak = (lastDate === yesterdayStr) ? streak + 1 : 1;
      localStorage.setItem("lughatyar_streak", String(streak));
      localStorage.setItem("lughatyar_lastDate", todayStr);
    }
    if (streakCount) streakCount.textContent = toPersianDigits(streak || 1);
    var profileStreakEl = document.getElementById("profileStreak");
    if (profileStreakEl) profileStreakEl.textContent = toPersianDigits(streak || 1);
  } catch (err) {
    if (streakCount) streakCount.textContent = "۱";
  }
}

function levelOfCategory(key) {
  if (!key) return "A1";
  var cleanKey = String(key).replace(/\s+/g, '');
  return (cleanKey.indexOf("a2") === 0) ? "A2" : "A1";
}

function updateLevelBadge() {
  var w = WORDS[idx];
  var key = (w && w.__cat) ? w.__cat : currentCategoryKey;
  var badge = document.getElementById("levelBadge");
  if (badge) badge.textContent = levelOfCategory(key);
}

function render() {
  var w = WORDS[idx];
  if (!w) return;
  card.classList.add("no-anim");
  card.classList.remove("flipped");
  void card.offsetWidth;
  iconChip.style.background = chipColors[idx % chipColors.length];
  iconFront.textContent = w.icon || "📘";
  wordFront.textContent = w.word;
  wordFront.classList.toggle("phrase", w.word.length > 12);
  wordFront.classList.toggle("phrase-xl", w.word.length > 22);
  meaningBack.textContent = w.meaning;
  updateLevelBadge();
  updateMarkUI();
  if (document.getElementById("screenApp").classList.contains("active")) {
    progress.pos[currentCategoryKey] = idx;
    saveLearningPath(currentCategoryKey, idx);
  }
  progress.days[todayStr()] = 1;
  saveProgress();
  if (w.examples && w.examples.length) infoBtn.classList.remove("hidden");
  else infoBtn.classList.add("hidden");
  counter.textContent = toPersianDigits(idx + 1) + " / " + toPersianDigits(WORDS.length);
  progressFill.style.width = (((idx + 1) / WORDS.length) * 100) + "%";
  prevBtn.disabled = idx === 0;
  nextBtn.textContent = (idx === WORDS.length - 1) ? "دوره تمام شد" : "بعدی";
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      card.classList.remove("no-anim");
    });
  });
}

if (card) {
  card.addEventListener("click", function (e) {
    if (e.target === speakBtn || e.target === infoBtn) return;
    if (e.target.closest && e.target.closest(".mark-btn")) return;
    card.classList.toggle("flipped");
  });
}

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function underlineWord(sentence, word) {
  var safeSentence = escapeHtml(sentence);
  var re = new RegExp("(\\b" + word.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&") + "\\w*\\b)", "gi");
  return safeSentence.replace(re, "<u>$1</u>");
}

if (infoBtn) {
  infoBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var w = WORDS[idx];
    if (!w.examples || !w.examples.length) return;
    examplesWordTitle.textContent = w.word;
    document.getElementById("examplesSubTitle").textContent = (currentCategoryKey.indexOf("idiom") === 0) ? "چند مثال واقعی از کاربرد این اصطلاح" : "چند مثال واقعی از کاربرد این کلمه";
    var html = "";
    for (var i = 0; i < w.examples.length; i++) {
      var ex = w.examples[i];
      html += '<div class="example-card"><div class="en">' + underlineWord(ex.en, w.word) + '</div><div class="fa">' + escapeHtml(ex.fa) + '</div></div>';
    }
    examplesList.innerHTML = html;
    showScreen("examples");
  });
}

if (backFromExamplesBtn) {
  backFromExamplesBtn.addEventListener("click", function () { showScreen("app"); });
}

function speakWord(text) {
  if (!progress.settings || progress.settings.sound === false) return;
  try {
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.9;
    speechSynthesis.speak(u);
  } catch (e) { }
}

if (speakBtn) {
  speakBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    speakWord(WORDS[idx].word);
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", function () {
    if (idx > 0) { idx--; render(); }
  });
}

var knownBtnEl = document.getElementById("knownBtn");
if (knownBtnEl) knownBtnEl.addEventListener("click", function (e) { e.stopPropagation(); markWord("k"); });
var unknownBtnEl = document.getElementById("unknownBtn");
if (unknownBtnEl) unknownBtnEl.addEventListener("click", function (e) { e.stopPropagation(); markWord("u"); });

if (nextBtn) {
  nextBtn.addEventListener("click", function () {
    if (idx < WORDS.length - 1) { idx++; render(); }
    else {
      var celebrateText = document.getElementById("celebrateText");
      if (celebrateText) {
        if (currentCategoryKey === "__review") {
          celebrateText.textContent = toPersianDigits(WORDS.length) + " لغت رو با موفقیت مرور کردی.";
        } else {
          celebrateText.textContent = toPersianDigits(WORDS.length) + " لغت از دسته «" + CATEGORY + "» رو کامل کردی.";
        }
      }
      celebrateOverlay.classList.add("show");
      launchConfetti();
    }
  });
}

if (restartBtn) {
  restartBtn.addEventListener("click", function () {
    celebrateOverlay.classList.remove("show");
    clearConfetti();
    idx = 0;
    render();
  });
}

var touchStartX = null;
if (card) {
  card.addEventListener("touchstart", function (e) { touchStartX = e.changedTouches[0].clientX; });
  card.addEventListener("touchend", function (e) {
    if (touchStartX === null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0 && idx < WORDS.length - 1) { idx++; render(); }
      else if (dx > 0 && idx > 0) { idx--; render(); }
    }
    touchStartX = null;
  });
}

function setAppHeight() {
  var tg = (window.Telegram && window.Telegram.WebApp) ? window.Telegram.WebApp : null;
  var h = 0;
  if (tg && tg.viewportStableHeight) h = tg.viewportStableHeight;
  else if (tg && tg.viewportHeight) h = tg.viewportHeight;
  if (!h) h = window.innerHeight;
  if (h) document.documentElement.style.setProperty("--app-height", h + "px");
}

window.addEventListener("resize", setAppHeight);
window.addEventListener("orientationchange", function () { setTimeout(setAppHeight, 200); });
setAppHeight();

var screenLoading = document.getElementById("screenLoading");
var screenCategory = document.getElementById("screenCategory");
var screenVocabularyLevels = document.getElementById("screenVocabularyLevels");
var screenVocabularyA1 = document.getElementById("screenVocabularyA1");
var screenStories = document.getElementById("screenStories");
var categoryDrawer = document.getElementById("categoryDrawer");
var categoryDrawerOverlay = document.getElementById("categoryDrawerOverlay");
var screenApp = document.getElementById("screenApp");
var screenProfile = document.getElementById("screenProfile");
var screenSettings = document.getElementById("screenSettings");
var screenQuiz = document.getElementById("screenQuiz");
var screenA2 = document.getElementById("screenA2");
var screenDialogue = document.getElementById("screenDialogue");
var backToCategoryBtn = document.getElementById("backToCategoryBtn");

function faDayLetter(jsDay) { return ["ی", "د", "س", "چ", "پ", "ج", "ش"][jsDay]; }
function renderWeekChart() {
  var box = document.getElementById("weekChart");
  if (!box) return;
  box.classList.remove("grown");
  box.innerHTML = "";
  var counts = [];
  var max = 1;
  var today = new Date();
  for (var i = 6; i >= 0; i--) {
    var d = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
    var key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
    var c = (progress.days && progress.days[key]) || 0;
    counts.push({ letter: faDayLetter(d.getDay()), count: c, isToday: i === 0 });
    if (c > max) max = c;
  }
  for (var k = 0; k < counts.length; k++) {
    var item = counts[k];
    var pct = item.count > 0 ? Math.max(8, Math.round(item.count / max * 100)) : 0;
    var bar = document.createElement("div");
    bar.className = "week-bar" + (item.isToday ? " today" : "");
    var track = document.createElement("div");
    track.className = "bar-track";
    var fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.height = pct + "%";
    track.appendChild(fill);
    if (item.count > 0) {
      var val = document.createElement("span");
      val.className = "bar-value";
      val.style.bottom = "calc(" + pct + "% + 3px)";
      val.textContent = toPersianDigits(item.count);
      track.appendChild(val);
    }
    if (item.isToday && item.count > 0) {
      var dot = document.createElement("span");
      dot.className = "today-dot";
      dot.style.bottom = "calc(" + pct + "% + 1px)";
      track.appendChild(dot);
    }
    bar.appendChild(track);
    var lab = document.createElement("span");
    lab.textContent = item.letter;
    bar.appendChild(lab);
    box.appendChild(bar);
  }
  setTimeout(function () { box.classList.add("grown"); }, 60);
}

function countUp(el, target, duration) {
  if (!el) return;
  var startTime = null;
  function step(ts) {
    if (!startTime) startTime = ts;
    var p = Math.min(1, (ts - startTime) / duration);
    var v = Math.floor(p * target);
    el.textContent = toPersianDigits(v);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = toPersianDigits(target);
  }
  requestAnimationFrame(step);
}

function triggerProfileAnimations() {
  countUp(document.getElementById('profileStreak'), parseInt(toEnglishDigits(document.getElementById('profileStreak')?.textContent || "1"), 10) || 1, 800);
  countUp(document.getElementById('profileWords'), totalKnown(), 1000);
  countUp(document.getElementById('profileDays'), studyDays(), 900);
  renderWeekChart();
}

function readLearningPath() {
  try {
    return JSON.parse(localStorage.getItem(LEARNING_PATH_KEY) || "null");
  } catch (e) {
    return null;
  }
}

function saveLearningPath(category, index) {
  if (!category || category.indexOf("__") === 0) return;
  if (!CATEGORIES[category]) return;
  try {
    localStorage.setItem(LEARNING_PATH_KEY, JSON.stringify({
      category: category,
      index: index || 0,
      total: CATEGORIES[category].words.length,
      updatedAt: todayStr()
    }));
  } catch (e) { }
}

function updateHomeDashboard() {
  var continueCard = document.getElementById("continueLearningCard");
  var continueTitle = document.getElementById("continueTitle");
  var continueMeta = document.getElementById("continueMeta");
  var path = readLearningPath();

  if (continueTitle && continueMeta) {
    if (path && path.category && CATEGORIES[path.category] && CATEGORIES[path.category].words) {
      var cat = CATEGORIES[path.category];
      var total = cat.words.length;
      var pos = progress.pos && typeof progress.pos[path.category] === "number" ? progress.pos[path.category] : path.index || 0;
      if (total && pos >= total) pos = 0;
      if (pos < 0) pos = 0;
      continueTitle.textContent = cat.name;
      continueMeta.textContent = total ? ("ادامه از لغت " + toPersianDigits(pos + 1) + " از " + toPersianDigits(total)) : "مسیر آماده ادامه است";
      if (continueCard) continueCard.classList.add("has-path");
    } else {
      continueTitle.textContent = "شروع اولین مسیر";
      continueMeta.textContent = "یک سطح و دسته را انتخاب کن";
      if (continueCard) continueCard.classList.remove("has-path");
    }
  }

  // Update Home Exercise Banners Meta
  var due = dueWords().length;
  var bannerReviewSub = document.getElementById("homeBannerReviewSub");
  if (bannerReviewSub) {
    bannerReviewSub.textContent = due > 0 ? (toPersianDigits(due) + " لغت آماده مرور") : "امروز همه‌چیز مرور شده 🎉";
  }

  var a1 = getQuizLevelStats("A1");
  var a2 = getQuizLevelStats("A2");
  var bannerQuizSub = document.getElementById("homeBannerQuizSub");
  if (bannerQuizSub) {
    bannerQuizSub.textContent = (a1.plays || a2.plays)
      ? ("۱۰ سؤال • رکورد A1: " + toPersianDigits(a1.best) + " | A2: " + toPersianDigits(a2.best))
      : "۱۰ سؤال چهارگزینه‌ای • انتخاب سطح A1 یا A2";
  }
}

function openCategoryDrawer() {
  if (!categoryDrawer) return;
  categoryDrawer.classList.add("open");
  categoryDrawer.setAttribute("aria-hidden", "false");
  if (categoryDrawerOverlay) categoryDrawerOverlay.classList.add("show");
}

function closeCategoryDrawer() {
  if (!categoryDrawer) return;
  categoryDrawer.classList.remove("open");
  categoryDrawer.setAttribute("aria-hidden", "true");
  if (categoryDrawerOverlay) categoryDrawerOverlay.classList.remove("show");
}

function showScreen(name) {
  if (name !== "category") closeCategoryDrawer();
  screenLoading?.classList.remove("active");
  screenCategory?.classList.remove("active");
  screenVocabularyLevels?.classList.remove("active");
  screenStories?.classList.remove("active");
  screenVocabularyA1?.classList.remove("active");
  screenApp?.classList.remove("active");
  screenProfile?.classList.remove("active");
  screenSettings?.classList.remove("active");
  screenExamples?.classList.remove("active");
  screenIdioms?.classList.remove("active");
  screenQuiz?.classList.remove("active");
  screenA2?.classList.remove("active");
  screenDialogue?.classList.remove("active");

  if (name === "loading") screenLoading?.classList.add("active");
  if (name === "category") screenCategory?.classList.add("active");
  if (name === "vocabularyLevels") screenVocabularyLevels?.classList.add("active");
  if (name === "vocabularyA1") {
    screenVocabularyA1?.classList.add("active");
    updateTileProgress();
  }
  if (name === "stories") screenStories?.classList.add("active");
  if (name === "app") screenApp?.classList.add("active");
  if (name === "profile") screenProfile?.classList.add("active");
  if (name === "settings") screenSettings?.classList.add("active");
  if (name === "examples") screenExamples?.classList.add("active");
  if (name === "idioms") screenIdioms?.classList.add("active");
  if (name === "quiz") screenQuiz?.classList.add("active");
  if (name === "a2") screenA2?.classList.add("active");
  if (name === "dialogue") {
    renderDialogue();
    screenDialogue?.classList.add("active");
  }

  if (name === "profile") {
    syncPersonalizationUI();
    renderDailyMissions();
    renderAchievements();
    triggerProfileAnimations();
  }
  if (name === "category") {
    updateTileProgress();
    updateHomeDashboard();
  }
  if (name === "a2") { updateTileProgress(); }

  document.body.setAttribute("data-active", (name === "a2" || name === "vocabularyLevels" || name === "vocabularyA1") ? "category" : name);
  var navT = (name === "idioms" || name === "a2" || name === "dialogue" || name === "stories" || name === "vocabularyLevels" || name === "vocabularyA1") ? "category" : name;
  var allNavBtns = document.querySelectorAll("#sharedNav .nav-item");
  for (var nb = 0; nb < allNavBtns.length; nb++) {
    allNavBtns[nb].classList.toggle("active", allNavBtns[nb].getAttribute("data-target") === navT);
  }
}

function selectCategory(key, origin) {
  if (!CATEGORIES[key] || !CATEGORIES[key].words) return;
  closeCategoryDrawer();
  currentCategoryKey = key;
  appOrigin = origin || null;
  WORDS = CATEGORIES[key].words;
  CATEGORY = CATEGORIES[key].name;
  if (categoryBadge) categoryBadge.textContent = CATEGORY;
  idx = progress.pos[key] || 0;
  if (idx >= WORDS.length) idx = 0;
  saveLearningPath(key, idx);
  render();
  showScreen("app");
}

function startReviewSession() {
  var due = dueWords();
  if (!due.length) {
    var bannerReviewSub = document.getElementById("homeBannerReviewSub");
    if (bannerReviewSub) bannerReviewSub.textContent = "امروز همه‌چیز مرور شده 🎉";
    updateHomeDashboard();
    return;
  }
  CATEGORIES.__review = { name: "مرور امروز", words: due.map(function (x) { x.w.__cat = x.cat; return x.w; }) };
  selectCategory("__review");
}

function renderSentenceBuilder() {
  var box = document.getElementById("sentenceWords");
  var result = document.getElementById("sentenceResult");
  if (!box || !result) return;
  box.innerHTML = "";
  currentSentenceWords = [];
  var data = SENTENCE_WORDS[sentenceIndex];
  for (var i = 0; i < data.words.length; i++) {
    (function (word) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "sentence-word-btn";
      btn.textContent = word;
      btn.addEventListener("click", function () {
        currentSentenceWords.push(word);
        updateSentenceResult();
      });
      box.appendChild(btn);
    })(data.words[i]);
  }
  result.textContent = "هنوز جمله‌ای نساختی.";
}

function updateSentenceResult() {
  var result = document.getElementById("sentenceResult");
  if (!result) return;
  if (currentSentenceWords.length === 0) {
    result.textContent = "هنوز جمله‌ای نساختی.";
    return;
  }
  result.textContent = currentSentenceWords.join(" ");
}

function renderDialogue() {
  var data = TEEN_DIALOGUES[dialogueIndex] || TEEN_DIALOGUES[0];
  var sceneEl = document.getElementById("dialogueScene");
  var linesEl = document.getElementById("dialogueLines");
  var questionEl = document.getElementById("roleplayQuestion");
  var optionsEl = document.getElementById("roleplayOptions");
  var feedbackEl = document.getElementById("roleplayFeedback");
  if (!sceneEl || !linesEl || !questionEl || !optionsEl || !feedbackEl) return;
  sceneEl.textContent = data.scene;
  questionEl.textContent = data.question;
  feedbackEl.textContent = "";
  feedbackEl.className = "roleplay-feedback";
  linesEl.innerHTML = "";
  for (var i = 0; i < data.lines.length; i++) {
    var line = data.lines[i];
    var row = document.createElement("div");
    row.className = "dialogue-line";
    var who = document.createElement("span");
    who.className = "dialogue-who";
    who.textContent = line.who;
    var text = document.createElement("div");
    text.className = "dialogue-text";
    text.innerHTML = "<strong>" + line.en + "</strong><small>" + line.fa + "</small>";
    row.appendChild(who);
    row.appendChild(text);
    linesEl.appendChild(row);
  }
  renderSentenceBuilder();
  optionsEl.innerHTML = "";
  var shuffledOptions = data.options.slice().sort(function () { return Math.random() - 0.5; });
  for (var j = 0; j < shuffledOptions.length; j++) {
    (function (opt) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "roleplay-option";
      btn.innerHTML = "<span>" + opt.text + "</span><small>" + opt.fa + "</small>";
      btn.addEventListener("click", function () {
        var all = document.querySelectorAll(".roleplay-option");
        for (var k = 0; k < all.length; k++) all[k].classList.remove("picked");
        btn.classList.add("picked");
        if (opt.good) {
          feedbackEl.textContent = "آفرین 🌸 این جواب هم مهربونه، هم طبیعی.";
          feedbackEl.className = "roleplay-feedback good";
        } else {
          feedbackEl.textContent = "این یکی خیلی مناسب نیست. جواب مهربان‌تر رو انتخاب کن.";
          feedbackEl.className = "roleplay-feedback soft";
        }
      });
      optionsEl.appendChild(btn);
    })(shuffledOptions[j]);
  }
}

var QUIZ_LEN = 10;
var quizLevel = "A1";
var quiz = { qs: [], i: 0, correct: 0, level: quizLevel, mode: "meaning" };

function shuffleArr(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

function categoryMatchesQuizLevel(cat, level) {
  if (cat.indexOf("__") === 0) return false;
  var isA2 = cat.indexOf("a2") === 0;
  if (level === "A2") return isA2;
  return !isA2 && cat.indexOf("idiom") !== 0;
}

function getQuizLevelStats(level) {
  if (!progress.quiz) progress.quiz = { plays: 0, best: 0 };
  if (!progress.quiz.byLevel) progress.quiz.byLevel = {};
  if (!progress.quiz.byLevel[level]) progress.quiz.byLevel[level] = { plays: 0, best: 0 };
  return progress.quiz.byLevel[level];
}

function setQuizLevel(level) {
  quizLevel = level === "A2" ? "A2" : "A1";
  var levelBtns = document.querySelectorAll(".quiz-level-btn");
  for (var i = 0; i < levelBtns.length; i++) {
    levelBtns[i].classList.toggle("active", levelBtns[i].getAttribute("data-quiz-level") === quizLevel);
  }
}

function makeClozePrompt(w) {
  var sent = (w.en || "").trim();
  var word = (w.word || "").trim();
  if (!sent || !word) return "____";
  var safe = word.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&");
  var re = new RegExp("\\b" + safe + "\\w*\\b", "i");
  if (re.test(sent)) return sent.replace(re, "____");
  var first = word.split(/\s+/)[0].replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&");
  var re2 = new RegExp("\\b" + first + "\\w*\\b", "i");
  if (re2.test(sent)) return sent.replace(re2, "____");
  return sent + " (____)";
}

function buildCloze(level) {
  level = level === "A2" ? "A2" : "A1";
  var all = [];
  for (var cat in CATEGORIES) {
    if (!categoryMatchesQuizLevel(cat, level)) continue;
    var ws = CATEGORIES[cat].words;
    for (var i = 0; i < ws.length; i++) {
      if (ws[i].en) all.push({ w: ws[i], cat: cat });
    }
  }
  shuffleArr(all);
  var picked = all.slice(0, QUIZ_LEN);
  quiz.qs = [];
  for (var p = 0; p < picked.length; p++) {
    var item = picked[p];
    var pool = CATEGORIES[item.cat].words.filter(function (x) { return x.word !== item.w.word; });
    shuffleArr(pool);
    var opts = [];
    for (var d = 0; d < 3 && d < pool.length; d++) opts.push(pool[d].word);
    opts.push(item.w.word);
    shuffleArr(opts);
    quiz.qs.push({
      word: item.w.word,
      answer: item.w.word,
      options: opts,
      cat: item.cat,
      level: level,
      prompt: makeClozePrompt(item.w),
      hint: item.w.meaning || item.w.fa || ""
    });
  }
  quiz.i = 0;
  quiz.correct = 0;
  quiz.level = level;
  quiz.mode = "cloze";
}

function startCloze(level) {
  if (typeof level === "string") setQuizLevel(level);
  else setQuizLevel(quizLevel);
  buildCloze(quizLevel);
  document.getElementById("quizResults").style.display = "none";
  document.getElementById("quizPlayArea").style.display = "";
  var title = document.querySelector(".quiz-level-title");
  var sub = document.querySelector(".quiz-level-sub");
  if (title) title.textContent = "سطح جای خالی را انتخاب کن";
  if (sub) sub.textContent = "جمله می‌آید؛ لغت انگلیسی درست را انتخاب کن.";
  renderQuiz();
  showScreen("quiz");
}

function buildQuiz(level) {
  level = level === "A2" ? "A2" : "A1";
  var all = [];
  for (var cat in CATEGORIES) {
    if (!categoryMatchesQuizLevel(cat, level)) continue;
    var ws = CATEGORIES[cat].words;
    for (var i = 0; i < ws.length; i++) {
      all.push({ w: ws[i], cat: cat });
    }
  }
  shuffleArr(all);
  var picked = all.slice(0, QUIZ_LEN);
  quiz.qs = [];
  for (var p = 0; p < picked.length; p++) {
    var pool = CATEGORIES[picked[p].cat].words.filter(function (x) { return x.word !== picked[p].w.word; });
    shuffleArr(pool);
    var opts = [];
    for (var d = 0; d < 3 && d < pool.length; d++) opts.push(pool[d].fa);
    opts.push(picked[p].w.fa);
    shuffleArr(opts);
    quiz.qs.push({
      word: picked[p].w.word,
      answer: picked[p].w.fa,
      options: opts,
      cat: picked[p].cat,
      level: level
    });
  }
  quiz.i = 0;
  quiz.correct = 0;
  quiz.level = level;
  quiz.mode = "meaning";
}

function renderQuiz() {
  var q = quiz.qs[quiz.i];
  var wordEl = document.getElementById("quizWord");
  var hintEl = document.getElementById("quizHint");
  if (quiz.mode === "cloze") {
    wordEl.textContent = q.prompt || "____";
    wordEl.classList.add("cloze-sentence");
    if (hintEl) hintEl.textContent = q.hint ? ("معنی: " + q.hint) : "لغت انگلیسی مناسب را انتخاب کن";
  } else {
    wordEl.textContent = q.word;
    wordEl.classList.remove("cloze-sentence");
    if (hintEl) hintEl.textContent = "معنی درست را انتخاب کن";
  }
  document.getElementById("quizCount").textContent = toPersianDigits(quiz.i + 1) + " / " + toPersianDigits(quiz.qs.length);
  document.getElementById("quizProgressFill").style.width = ((quiz.i) / quiz.qs.length * 100) + "%";
  var box = document.getElementById("quizOptions");
  box.innerHTML = "";
  for (var o = 0; o < q.options.length; o++) {
    (function (optText) {
      var b = document.createElement("button");
      b.className = "quiz-option";
      b.textContent = optText;
      b.addEventListener("click", function () { answerQuiz(optText, b, q); });
      box.appendChild(b);
    })(q.options[o]);
  }
}

function answerQuiz(picked, btn, q) {
  var opts = document.querySelectorAll("#quizOptions .quiz-option");
  for (var k = 0; k < opts.length; k++) {
    opts[k].classList.add("locked");
    if (opts[k].textContent === q.answer) opts[k].classList.add("correct");
  }
  if (picked === q.answer) {
    quiz.correct++;
  } else {
    btn.classList.add("wrong");
    var key = q.cat + "|" + q.word;
    var rec = progress.words[key];
    if (rec && rec.s === "k") { rec.s = "u"; rec.n = 0; rec.d = todayStr(); saveProgress(); }
  }
  setTimeout(function () {
    quiz.i++;
    if (quiz.i >= quiz.qs.length) showQuizResults();
    else renderQuiz();
  }, 900);
}

function showQuizResults() {
  if (!progress.quiz) progress.quiz = { plays: 0, best: 0 };
  var stats = getQuizLevelStats(quiz.level);
  stats.plays++;
  if (quiz.correct > stats.best) stats.best = quiz.correct;
  progress.quiz.plays = (progress.quiz.plays || 0) + 1;
  if (quiz.correct > (progress.quiz.best || 0)) progress.quiz.best = quiz.correct;
  trackMissionQuiz();
  saveProgress();
  var emoji = quiz.correct >= 9 ? "🏆" : quiz.correct >= 7 ? "🎉" : quiz.correct >= 5 ? "💪" : "📚";
  document.getElementById("quizResultEmoji").textContent = emoji;
  document.getElementById("quizResultText").textContent = toPersianDigits(quiz.correct) + " از " + toPersianDigits(quiz.qs.length) + " درست!";
  document.getElementById("quizResultBest").textContent = "بهترین رکورد " + quiz.level + ": " + toPersianDigits(stats.best) + " از " + toPersianDigits(QUIZ_LEN);
  document.getElementById("quizPlayArea").style.display = "none";
  document.getElementById("quizResults").style.display = "flex";
  updateHomeDashboard();
}

function startQuiz(level) {
  if (typeof level === "string") setQuizLevel(level);
  else setQuizLevel(quizLevel);
  quiz.mode = "meaning";
  buildQuiz(quizLevel);
  document.getElementById("quizResults").style.display = "none";
  document.getElementById("quizPlayArea").style.display = "";
  var title = document.querySelector(".quiz-level-title");
  var sub = document.querySelector(".quiz-level-sub");
  if (title) title.textContent = "سطح چالش رو انتخاب کن";
  if (sub) sub.textContent = "برای هر سطح، سؤال‌ها فقط از همان لغت‌ها ساخته می‌شن.";
  renderQuiz();
  showScreen("quiz");
}

function showHomeComingSoon(title) {
  var msg = title + " به‌زودی به لغت‌یار اضافه می‌شود.";
  var t = document.getElementById("reminderToast");
  if (t) {
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(function () { t.classList.remove("show"); }, 2800);
    return;
  }
  try { alert(msg); } catch (e) { }
}

// Bind Home buttons
function bindHomeEvents() {
  document.getElementById("homeRouteVocabulary")?.addEventListener("click", function () { showScreen("vocabularyLevels"); });
  document.getElementById("homeRouteIdioms")?.addEventListener("click", function () { showScreen("idioms"); });
  document.getElementById("homeRouteStories")?.addEventListener("click", function () { showScreen("stories"); });
  document.getElementById("homeRoutePodcast")?.addEventListener("click", function () { showHomeComingSoon("پادکست"); });

  // Home Exercise Banners
  document.getElementById("homeBannerReview")?.addEventListener("click", function () { startReviewSession(); });
  document.getElementById("homeBannerQuiz")?.addEventListener("click", function () { startQuiz("A1"); });
  document.getElementById("homeBannerCloze")?.addEventListener("click", function () { startCloze("A1"); });
  document.getElementById("homeBannerDialogue")?.addEventListener("click", function () { showScreen("dialogue"); });

  // Vocab levels & sub screens
  document.getElementById("backToHomeFromVocabularyLevels")?.addEventListener("click", function () { showScreen("category"); });
  document.getElementById("backToVocabularyLevelsFromA1")?.addEventListener("click", function () { showScreen("vocabularyLevels"); });
  document.getElementById("backToHomeFromStories")?.addEventListener("click", function () { showScreen("category"); });
  document.getElementById("vocabLevelA1Btn")?.addEventListener("click", function () { showScreen("vocabularyA1"); });
  document.getElementById("vocabLevelA2Btn")?.addEventListener("click", function () { showScreen("a2"); });
  document.getElementById("storyA1First")?.addEventListener("click", function () { showHomeComingSoon("داستان A1"); });

  var lockedLevels = document.querySelectorAll(".vocab-level-lane[data-coming-soon]");
  for (var j = 0; j < lockedLevels.length; j++) {
    lockedLevels[j].addEventListener("click", function () {
      showHomeComingSoon("سطح " + this.getAttribute("data-coming-soon"));
    });
  }

  var vocabCategoryBtns = document.querySelectorAll("[data-vocab-category]");
  for (var v = 0; v < vocabCategoryBtns.length; v++) {
    vocabCategoryBtns[v].addEventListener("click", function () {
      selectCategory(this.getAttribute("data-vocab-category"));
    });
  }

  // Drawer
  document.getElementById("categoryMenuBtn")?.addEventListener("click", openCategoryDrawer);
  document.getElementById("closeCategoryDrawer")?.addEventListener("click", closeCategoryDrawer);
  document.getElementById("categoryDrawerOverlay")?.addEventListener("click", closeCategoryDrawer);

  var drawerBtns = document.querySelectorAll(".drawer-category-btn[data-category]");
  for (var d = 0; d < drawerBtns.length; d++) {
    drawerBtns[d].addEventListener("click", function () { selectCategory(this.getAttribute("data-category")); });
  }

  document.getElementById("drawerReviewBtn")?.addEventListener("click", function () { closeCategoryDrawer(); startReviewSession(); });
  document.getElementById("drawerIdiomsBtn")?.addEventListener("click", function () { closeCategoryDrawer(); showScreen("idioms"); });
  document.getElementById("drawerQuizBtn")?.addEventListener("click", function () { closeCategoryDrawer(); startQuiz("A1"); });
  document.getElementById("drawerClozeBtn")?.addEventListener("click", function () { closeCategoryDrawer(); startCloze("A1"); });
  document.getElementById("drawerDialogueBtn")?.addEventListener("click", function () { closeCategoryDrawer(); showScreen("dialogue"); });
  document.getElementById("drawerA2Btn")?.addEventListener("click", function () { closeCategoryDrawer(); showScreen("a2"); });

  // Continue learning card
  document.getElementById("continueLearningCard")?.addEventListener("click", function () {
    var path = readLearningPath();
    if (path && path.category && CATEGORIES[path.category] && CATEGORIES[path.category].words) {
      var total = CATEGORIES[path.category].words.length;
      var pos = progress.pos && typeof progress.pos[path.category] === "number" ? progress.pos[path.category] : path.index || 0;
      if (total && pos >= total) pos = 0;
      if (pos < 0) pos = 0;
      progress.pos[path.category] = pos;
      saveLearningPath(path.category, pos);
      selectCategory(path.category, "home");
      return;
    }
    showScreen("vocabularyLevels");
  });

  // A2 Categories
  document.getElementById("categoryA2Everyday")?.addEventListener("click", function () { selectCategory("a2everyday"); });
  document.getElementById("categoryA2Travel")?.addEventListener("click", function () { selectCategory("a2travel"); });
  document.getElementById("categoryA2Food")?.addEventListener("click", function () { selectCategory("a2food"); });
  document.getElementById("categoryA2Work")?.addEventListener("click", function () { selectCategory("a2work"); });

  // Idioms
  document.getElementById("idiomSubEveryday")?.addEventListener("click", function () { selectCategory("idiomEveryday"); });
  document.getElementById("idiomSubFeelings")?.addEventListener("click", function () { selectCategory("idiomFeelings"); });
  document.getElementById("idiomSubEffort")?.addEventListener("click", function () { selectCategory("idiomEffort"); });
  document.getElementById("idiomSubBehavior")?.addEventListener("click", function () { selectCategory("idiomBehavior"); });
  document.getElementById("backToHomeFromIdioms")?.addEventListener("click", function () { showScreen("category"); });

  // Dialogue
  document.getElementById("backToHomeFromDialogue")?.addEventListener("click", function () { showScreen("category"); });
  document.getElementById("dialogueNextBtn")?.addEventListener("click", function () {
    dialogueIndex = (dialogueIndex + 1) % TEEN_DIALOGUES.length;
    renderDialogue();
  });
  document.getElementById("dialogueLearnWordsBtn")?.addEventListener("click", function () { selectCategory("teenLife"); });
  document.getElementById("sentenceClearBtn")?.addEventListener("click", function () {
    currentSentenceWords = [];
    updateSentenceResult();
  });

  // Quiz back / again
  document.getElementById("quizBackBtn")?.addEventListener("click", function () { showScreen("category"); });
  document.getElementById("quizAgainBtn")?.addEventListener("click", function () {
    if (quiz.mode === "cloze") startCloze(quizLevel);
    else startQuiz(quizLevel);
  });
  document.getElementById("quizHomeBtn")?.addEventListener("click", function () { showScreen("category"); });
  document.getElementById("quizSpeak")?.addEventListener("click", function () { speakWord(quiz.qs[quiz.i].word); });

  var quizLevelBtns = document.querySelectorAll(".quiz-level-btn");
  for (var qlb = 0; qlb < quizLevelBtns.length; qlb++) {
    quizLevelBtns[qlb].addEventListener("click", function () {
      var lv = this.getAttribute("data-quiz-level");
      if (quiz.mode === "cloze") startCloze(lv);
      else startQuiz(lv);
    });
  }

  document.getElementById("backToHomeFromA2")?.addEventListener("click", function () { showScreen("vocabularyLevels"); });
  document.getElementById("backToCategoryBtn")?.addEventListener("click", function () {
    if (appOrigin === "home") {
      appOrigin = null;
      showScreen("category");
      return;
    }
    appOrigin = null;
    var t = "vocabularyA1";
    if (currentCategoryKey.indexOf("idiom") === 0) t = "idioms";
    else if (currentCategoryKey.indexOf("a2") === 0) t = "a2";
    showScreen(t);
  });

  // Navigation items
  var navItems = document.querySelectorAll(".nav-item");
  for (var ni = 0; ni < navItems.length; ni++) {
    navItems[ni].addEventListener("click", function () {
      showScreen(this.getAttribute("data-target"));
    });
  }

  // Settings
  var avatarBtns = document.querySelectorAll(".avatar-choice");
  for (var ac = 0; ac < avatarBtns.length; ac++) {
    avatarBtns[ac].addEventListener("click", function () {
      progress.settings.avatar = this.getAttribute("data-avatar") || "student";
      saveProgress();
      syncPersonalizationUI();
    });
  }

  var soundSwitch = document.getElementById("soundSwitch");
  if (soundSwitch) {
    soundSwitch.addEventListener("change", function () {
      progress.settings.sound = this.checked;
      saveProgress();
      document.getElementById("soundSub").textContent = this.checked ? "فعال" : "غیرفعال";
    });
  }

  var reminderSwitch = document.getElementById("reminderSwitch");
  var reminderTime = document.getElementById("reminderTime");
  if (reminderSwitch) {
    reminderSwitch.addEventListener("change", function () {
      progress.settings.reminder = this.checked;
      saveProgress();
      syncReminderUI();
    });
  }
  if (reminderTime) {
    reminderTime.addEventListener("change", function () {
      progress.settings.reminderTime = this.value || "20:00";
      saveProgress();
      syncReminderUI();
    });
  }

  var resetBtn = document.getElementById("resetProgressBtn");
  var resetConfirm = document.getElementById("resetConfirm");
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      resetBtn.style.display = "none";
      if (resetConfirm) resetConfirm.style.display = "flex";
    });
  }
  document.getElementById("resetCancel")?.addEventListener("click", function () {
    if (resetConfirm) resetConfirm.style.display = "none";
    if (resetBtn) resetBtn.style.display = "";
  });
  document.getElementById("resetYes")?.addEventListener("click", function () {
    try { localStorage.removeItem(PROGRESS_KEY); } catch (e) { }
    location.reload();
  });
}

// Run initial setups
(function init() {
  updateStreak();
  updateTileProgress();
  syncPersonalizationUI();
  syncReminderUI();
  updateHomeDashboard();
  bindHomeEvents();
  render();

  var screenLoadingEl = document.getElementById("screenLoading");
  setTimeout(function () {
    screenLoadingEl?.classList.remove("active");
    showScreen("category");
  }, 1800);
})();

// Vocabulary Audit function
function auditVocabularyData() {
  var report = {
    totalWords: 0,
    missingExamples: [],
    lessThanThreeExamples: [],
    invalidEntries: []
  };
  for (var catKey in CATEGORIES) {
    var category = CATEGORIES[catKey];
    if (!category.words || !Array.isArray(category.words)) {
      report.invalidEntries.push({ category: catKey, reason: "Missing words array" });
      continue;
    }
    for (var i = 0; i < category.words.length; i++) {
      var item = category.words[i];
      report.totalWords++;
      var location = { category: catKey, word: item.word || "(unknown)" };
      if (!item.word || !item.meaning) {
        report.invalidEntries.push({ category: catKey, word: item.word || "(unknown)", reason: "Missing word or meaning" });
      }
      if (!item.examples || !Array.isArray(item.examples)) {
        report.missingExamples.push(location);
      } else if (item.examples.length < 3) {
        report.lessThanThreeExamples.push({ category: catKey, word: item.word, count: item.examples.length });
      }
    }
  }
  return report;
}

if (typeof window !== "undefined") {
  window.auditVocabularyData = auditVocabularyData;
}
