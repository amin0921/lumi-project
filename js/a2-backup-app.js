var APP_VERSION = "v2.18.1";
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
      { word: "table", meaning: "میز", en: "The table is in the kitchen.", fa: "میز در آشپزخانه است.", icon: "🛋️", examples: [{ en: "The table is in the kitchen.", fa: "میز در آشپزخانه است." }, { en: "Put the book on the table.", fa: "کتاب را روی میز بگذار." }, { en: "We sat at the table.", fa: "دور میز نشستیم." }] },
      { word: "chair", meaning: "صندلی", en: "Please sit on the chair.", fa: "لطفاً روی صندلی بنشین.", icon: "🪑", examples: [{ en: "Please sit on the chair.", fa: "لطفاً روی صندلی بنشین." }, { en: "This chair is very comfortable.", fa: "این صندلی خیلی راحت است." }, { en: "There are four chairs.", fa: "چهار صندلی هست." }] },
      { word: "bed", meaning: "تخت", en: "I sleep in my bed.", fa: "من روی تختم می‌خوابم.", icon: "🛏️", examples: [{ en: "I sleep in my bed.", fa: "من روی تختم می‌خوابم." }, { en: "The bed is very soft.", fa: "تخت خیلی نرم است." }, { en: "She reads in bed.", fa: "او روی تخت کتاب می‌خواند." }] },
      { word: "window", meaning: "پنجره", en: "Open the window, please.", fa: "لطفاً پنجره را باز کن.", icon: "🖼️", examples: [{ en: "Open the window, please.", fa: "لطفاً پنجره را باز کن." }, { en: "The window is dirty.", fa: "پنجره کثیف است." }, { en: "I looked out of the window.", fa: "از پنجره به بیرون نگاه کردم." }] },
      { word: "kitchen", meaning: "آشپزخانه", en: "My mother cooks in the kitchen.", fa: "مادرم در آشپزخانه غذا می‌پزد.", icon: "🍳", examples: [{ en: "My mother cooks in the kitchen.", fa: "مادرم در آشپزخانه غذا می‌پزد." }, { en: "The kitchen smells nice.", fa: "آشپزخانه بوی خوبی می‌دهد." }, { en: "We eat in the kitchen.", fa: "ما در آشپزخانه غذا می‌خوریم." }] },
      { word: "bathroom", meaning: "حمام", en: "The bathroom is clean.", fa: "حمام تمیز است.", icon: "🚿", examples: [{ en: "The bathroom is clean.", fa: "حمام تمیز است." }, { en: "Where is the bathroom?", fa: "حمام کجاست؟" }, { en: "He is in the bathroom.", fa: "او در حمام است." }] },
      { word: "garden", meaning: "باغچه", en: "There are flowers in the garden.", fa: "در باغچه گل هست.", icon: "🌷", examples: [{ en: "There are flowers in the garden.", fa: "در باغچه گل هست." }, { en: "We play in the garden.", fa: "ما در باغچه بازی می‌کنیم." }, { en: "Her garden is beautiful.", fa: "باغچه‌اش زیباست." }] },
      { word: "mother", meaning: "مادر", en: "My mother is kind.", fa: "مادرم مهربان است.", icon: "👩", examples: [{ en: "My mother is kind.", fa: "مادرم مهربان است." }, { en: "I call my mother every day.", fa: "من هر روز به مادرم زنگ می‌زنم." }, { en: "Her mother is a doctor.", fa: "مادرش دکتر است." }] },
      { word: "father", meaning: "پدر", en: "My father works every day.", fa: "پدرم هر روز کار می‌کند.", icon: "👨", examples: [{ en: "My father works every day.", fa: "پدرم هر روز کار می‌کند." }, { en: "His father drives a taxi.", fa: "پدرش تاکسی رانندگی می‌کند." }, { en: "I look like my father.", fa: "من شبیه پدرم هستم." }] },
      { word: "brother", meaning: "برادر", en: "I have one brother.", fa: "من یک برادر دارم.", icon: "👦", examples: [{ en: "I have one brother.", fa: "من یک برادر دارم." }, { en: "My brother plays soccer.", fa: "برادرم فوتبال بازی می‌کند." }, { en: "Her brother is tall.", fa: "برادرش قد بلند است." }] },
      { word: "sister", meaning: "خواهر", en: "My sister is younger than me.", fa: "خواهرم از من کوچک‌تر است.", icon: "👧", examples: [{ en: "My sister is younger than me.", fa: "خواهرم از من کوچک‌تر است." }, { en: "Her sister lives abroad.", fa: "خواهرش در خارج از کشور زندگی می‌کند." }, { en: "I walk with my sister.", fa: "من با خواهرم قدم می‌زنم." }] },
      { word: "baby", meaning: "نوزاد", en: "The baby is sleeping.", fa: "نوزاد خوابیده است.", icon: "👶", examples: [{ en: "The baby is sleeping.", fa: "نوزاد خوابیده است." }, { en: "The baby smiled at me.", fa: "نوزاد به من لبخند زد." }, { en: "She holds the baby gently.", fa: "او نوزاد را آرام نگه داشته است." }] },
      { word: "dog", meaning: "سگ", en: "The dog is playing outside.", fa: "سگ بیرون بازی می‌کند.", icon: "🐶", examples: [{ en: "The dog is playing outside.", fa: "سگ بیرون بازی می‌کند." }, { en: "My dog runs fast.", fa: "سگ من سریع می‌دود." }, { en: "She feeds the dog twice a day.", fa: "او روزی دو بار به سگ غذا می‌دهد." }] },
      { word: "cat", meaning: "گربه", en: "My cat likes milk.", fa: "گربه‌ی من شیر دوست دارد.", icon: "🐱", examples: [{ en: "My cat likes milk.", fa: "گربه‌ی من شیر دوست دارد." }, { en: "The cat sleeps on the sofa.", fa: "گربه روی مبل می‌خوابد." }, { en: "Her cat is very quiet.", fa: "گربه‌اش خیلی ساکت است." }] },
      { word: "bird", meaning: "پرنده", en: "The bird is singing.", fa: "پرنده آواز می‌خواند.", icon: "🐦", examples: [{ en: "The bird is singing.", fa: "پرنده آواز می‌خواند." }, { en: "A small bird sat on the tree.", fa: "یک پرنده کوچک روی درخت نشست." }, { en: "I saw a bird in the sky.", fa: "یک پرنده در آسمان دیدم." }] },
      { word: "tree", meaning: "درخت", en: "There is a tree in front of the house.", fa: "جلوی خانه یک درخت هست.", icon: "🌳", examples: [{ en: "There is a tree in front of the house.", fa: "جلوی خانه یک درخت هست." }, { en: "The tree gives us shade.", fa: "درخت به ما سایه می‌دهد." }, { en: "They planted a tree.", fa: "آن‌ها یک درخت کاشتند." }] },
      { word: "flower", meaning: "گل", en: "She likes red flowers.", fa: "او گل‌های قرمز را دوست دارد.", icon: "🌸", examples: [{ en: "She likes red flowers.", fa: "او گل‌های قرمز را دوست دارد." }, { en: "I gave her a flower.", fa: "من به او یک گل دادم." }, { en: "The flowers smell sweet.", fa: "گل‌ها بوی شیرینی می‌دهند." }] },
      { word: "sun", meaning: "خورشید", en: "The sun is very bright today.", fa: "امروز خورشید خیلی روشن است.", icon: "🌞", examples: [{ en: "The sun is very bright today.", fa: "امروز خورشید خیلی روشن است." }, { en: "The sun sets at seven.", fa: "خورشید ساعت هفت غروب می‌کند." }, { en: "Do not look at the sun.", fa: "به خورشید نگاه نکن." }] },
      { word: "moon", meaning: "ماه", en: "The moon is full tonight.", fa: "امشب ماه کامل است.", icon: "🌕", examples: [{ en: "The moon is full tonight.", fa: "امشب ماه کامل است." }, { en: "The moon looks beautiful.", fa: "ماه زیبا به نظر می‌رسد." }, { en: "We watched the moon together.", fa: "ما با هم ماه را تماشا کردیم." }] },
      { word: "star", meaning: "ستاره", en: "I can see many stars.", fa: "من می‌توانم ستاره‌های زیادی ببینم.", icon: "⭐", examples: [{ en: "I can see many stars.", fa: "من می‌توانم ستاره‌های زیادی ببینم." }, { en: "That star is very bright.", fa: "آن ستاره خیلی روشن است." }, { en: "Count the stars with me.", fa: "با من ستاره‌ها را بشمار." }] },
      { word: "rain", meaning: "باران", en: "It is raining outside.", fa: "بیرون باران می‌بارد.", icon: "🌧️", examples: [{ en: "It is raining outside.", fa: "بیرون باران می‌بارد." }, { en: "I like the sound of rain.", fa: "من صدای باران را دوست دارم." }, { en: "The rain stopped an hour ago.", fa: "باران یک ساعت پیش بند آمد." }] },
      { word: "snow", meaning: "برف", en: "The snow is white.", fa: "برف سفید است.", icon: "❄️", examples: [{ en: "The snow is white.", fa: "برف سفید است." }, { en: "Children play in the snow.", fa: "بچه‌ها در برف بازی می‌کنند." }, { en: "It snowed last night.", fa: "دیشب برف آمد." }] },
      { word: "wind", meaning: "باد", en: "The wind is strong today.", fa: "امروز باد قوی است.", icon: "💨", examples: [{ en: "The wind is strong today.", fa: "امروز باد قوی است." }, { en: "The wind moves the trees.", fa: "باد درختان را تکان می‌دهد." }, { en: "I heard the wind at night.", fa: "شب صدای باد را شنیدم." }] },
      { word: "cloud", meaning: "ابر", en: "There are many clouds in the sky.", fa: "ابرهای زیادی در آسمان هست.", icon: "☁️", examples: [{ en: "There are many clouds in the sky.", fa: "ابرهای زیادی در آسمان هست." }, { en: "That cloud looks like a cat.", fa: "آن ابر شبیه یک گربه است." }, { en: "The sun is behind a cloud.", fa: "خورشید پشت یک ابر است." }] },
      { word: "coffee", meaning: "قهوه", en: "I drink coffee in the morning.", fa: "من صبح‌ها قهوه می‌نوشم.", icon: "☕", examples: [{ en: "I drink coffee in the morning.", fa: "من صبح‌ها قهوه می‌نوشم." }, { en: "This coffee is too hot.", fa: "این قهوه خیلی داغ است." }, { en: "Do you want some coffee?", fa: "قهوه می‌خواهی؟" }] },
      { word: "tea", meaning: "چای", en: "She drinks tea every afternoon.", fa: "او هر بعدازظهر چای می‌نوشد.", icon: "🍵", examples: [{ en: "She drinks tea every afternoon.", fa: "او هر بعدازظهر چای می‌نوشد." }, { en: "Would you like a cup of tea?", fa: "یک فنجان چای میل داری؟" }, { en: "The tea is getting cold.", fa: "چای دارد سرد می‌شود." }] },
      { word: "milk", meaning: "شیر", en: "Children need milk.", fa: "بچه‌ها به شیر نیاز دارند.", icon: "🥛", examples: [{ en: "Children need milk.", fa: "بچه‌ها به شیر نیاز دارند." }, { en: "The milk is in the fridge.", fa: "شیر در یخچال است." }, { en: "She drinks warm milk at night.", fa: "او شب‌ها شیر گرم می‌نوشد." }] },
      { word: "bread", meaning: "نان", en: "We eat bread for breakfast.", fa: "ما برای صبحانه نان می‌خوریم.", icon: "🍞", examples: [{ en: "We eat bread for breakfast.", fa: "ما برای صبحانه نان می‌خوریم." }, { en: "The bread is fresh today.", fa: "نان امروز تازه است." }, { en: "He bought two loaves of bread.", fa: "او دو نان خرید." }] },
      { word: "egg", meaning: "تخم‌مرغ", en: "I eat an egg every morning.", fa: "من هر روز صبح یک تخم‌مرغ می‌خورم.", icon: "🥚", examples: [{ en: "I eat an egg every morning.", fa: "من هر روز صبح یک تخم‌مرغ می‌خورم." }, { en: "She boiled two eggs.", fa: "او دو تخم‌مرغ آب‌پز کرد." }, { en: "The egg is in the pan.", fa: "تخم‌مرغ در ماهیتابه است." }] },
      { word: "apple", meaning: "سیب", en: "She eats an apple every day.", fa: "او هر روز یک سیب می‌خورد.", icon: "🍎", examples: [{ en: "She eats an apple every day.", fa: "او هر روز یک سیب می‌خورد." }, { en: "These apples are sweet.", fa: "این سیب‌ها شیرین هستند." }, { en: "I packed an apple for lunch.", fa: "برای ناهار یک سیب گذاشتم." }] },
      { word: "banana", meaning: "موز", en: "The banana is yellow.", fa: "موز زرد است.", icon: "🍌", examples: [{ en: "The banana is yellow.", fa: "موز زرد است." }, { en: "She eats a banana after running.", fa: "او بعد از دویدن یک موز می‌خورد." }, { en: "The bananas are ripe.", fa: "موزها رسیده‌اند." }] },
      { word: "orange", meaning: "پرتقال", en: "I like orange juice.", fa: "من آب‌پرتقال دوست دارم.", icon: "🍊", examples: [{ en: "I like orange juice.", fa: "من آب‌پرتقال دوست دارم." }, { en: "This orange is very juicy.", fa: "این پرتقال خیلی آبدار است." }, { en: "She peeled an orange for me.", fa: "او برایم یک پرتقال پوست کند." }] },
      { word: "rice", meaning: "برنج", en: "We eat rice for lunch.", fa: "ما برای ناهار برنج می‌خوریم.", icon: "🍚", examples: [{ en: "We eat rice for lunch.", fa: "ما برای ناهار برنج می‌خوریم." }, { en: "The rice is still hot.", fa: "برنج هنوز داغ است." }, { en: "She cooks rice very well.", fa: "او برنج را خیلی خوب می‌پزد." }] },
      { word: "sugar", meaning: "شکر", en: "Please pass the sugar.", fa: "لطفاً شکر را بده.", icon: "🍬", examples: [{ en: "Please pass the sugar.", fa: "لطفاً شکر را بده." }, { en: "Do you take sugar in your tea?", fa: "توی چای‌ات شکر می‌ریزی؟" }, { en: "The sugar is next to the cups.", fa: "شکر کنار فنجان‌هاست." }] },
      { word: "salt", meaning: "نمک", en: "This food needs more salt.", fa: "این غذا نمک بیشتری نیاز دارد.", icon: "🧂", examples: [{ en: "This food needs more salt.", fa: "این غذا نمک بیشتری نیاز دارد." }, { en: "There is salt on the table.", fa: "نمک روی میز است." }, { en: "She added a little salt.", fa: "او کمی نمک اضافه کرد." }] },
      { word: "breakfast", meaning: "صبحانه", en: "I eat breakfast at 7 AM.", fa: "من ساعت ۷ صبح صبحانه می‌خورم.", icon: "🍳", examples: [{ en: "I eat breakfast at 7 AM.", fa: "من ساعت ۷ صبح صبحانه می‌خورم." }, { en: "Breakfast is the most important meal.", fa: "صبحانه مهم‌ترین وعده است." }, { en: "We had breakfast together.", fa: "ما با هم صبحانه خوردیم." }] },
      { word: "lunch", meaning: "ناهار", en: "We have lunch at noon.", fa: "ما ظهر ناهار می‌خوریم.", icon: "🍱", examples: [{ en: "We have lunch at noon.", fa: "ما ظهر ناهار می‌خوریم." }, { en: "What is for lunch today?", fa: "امروز ناهار چی داریم؟" }, { en: "She packed her lunch.", fa: "او ناهارش را بسته‌بندی کرد." }] },
      { word: "dinner", meaning: "شام", en: "Dinner is ready.", fa: "شام آماده است.", icon: "🍽️", examples: [{ en: "Dinner is ready.", fa: "شام آماده است." }, { en: "We are having dinner at eight.", fa: "ما ساعت هشت شام می‌خوریم." }, { en: "He cooked dinner for us.", fa: "او برایمان شام پخت." }] },
      { word: "cup", meaning: "فنجان", en: "This is my coffee cup.", fa: "این فنجان قهوه‌ی من است.", icon: "🥤", examples: [{ en: "This is my coffee cup.", fa: "این فنجان قهوه‌ی من است." }, { en: "The cup is empty.", fa: "فنجان خالی است." }, { en: "She broke her favorite cup.", fa: "او فنجان محبوبش را شکست." }] },
      { word: "plate", meaning: "بشقاب", en: "Put the food on the plate.", fa: "غذا را در بشقاب بگذار.", icon: "🥣", examples: [{ en: "Put the food on the plate.", fa: "غذا را در بشقاب بگذار." }, { en: "Wash the plates after dinner.", fa: "بعد از شام بشقاب‌ها را بشور." }, { en: "There is rice on your plate.", fa: "روی بشقابت برنج هست." }] },
      { word: "spoon", meaning: "قاشق", en: "I need a spoon.", fa: "من به یک قاشق نیاز دارم.", icon: "🥄", examples: [{ en: "I need a spoon.", fa: "من به یک قاشق نیاز دارم." }, { en: "The baby eats with a small spoon.", fa: "نوزاد با قاشق کوچک غذا می‌خورد." }, { en: "Where is the sugar spoon?", fa: "قاشق شکر کجاست؟" }] },
      { word: "fork", meaning: "چنگال", en: "Use a fork to eat.", fa: "برای غذا خوردن از چنگال استفاده کن.", icon: "🍴", examples: [{ en: "Use a fork to eat.", fa: "برای غذا خوردن از چنگال استفاده کن." }, { en: "Put the fork next to the plate.", fa: "چنگال را کنار بشقاب بگذار." }, { en: "This fork is clean.", fa: "این چنگال تمیز است." }] },
      { word: "knife", meaning: "چاقو", en: "Be careful with the knife.", fa: "با چاقو مراقب باش.", icon: "🔪", examples: [{ en: "Be careful with the knife.", fa: "با چاقو مراقب باش." }, { en: "The knife is very sharp.", fa: "چاقو خیلی تیز است." }, { en: "Cut the bread with a knife.", fa: "نان را با چاقو برش بزن." }] },
      { word: "bag", meaning: "کیف", en: "She has a blue bag.", fa: "او یک کیف آبی دارد.", icon: "👜", examples: [{ en: "She has a blue bag.", fa: "او یک کیف آبی دارد." }, { en: "My bag is heavy today.", fa: "کیفم امروز سنگین است." }, { en: "He put his bag on the chair.", fa: "او کیفش را روی صندلی گذاشت." }] },
      { word: "key", meaning: "کلید", en: "I lost my key.", fa: "من کلیدم را گم کردم.", icon: "🔑", examples: [{ en: "I lost my key.", fa: "من کلیدم را گم کردم." }, { en: "The keys are on the hook.", fa: "کلیدها روی قلاب هستند." }, { en: "Give me the car key, please.", fa: "لطفاً کلید ماشین را به من بده." }] },
      { word: "wallet", meaning: "کیف پول", en: "My wallet is in my bag.", fa: "کیف پولم در کیفم است.", icon: "👛", examples: [{ en: "My wallet is in my bag.", fa: "کیف پولم در کیفم است." }, { en: "There is no money in my wallet.", fa: "در کیف پولم پول نیست." }, { en: "He found a wallet on the street.", fa: "او در خیابان یک کیف پول پیدا کرد." }] },
      { word: "watch", meaning: "ساعت مچی", en: "He is wearing a nice watch.", fa: "او یک ساعت مچی قشنگ پوشیده است.", icon: "⌚", examples: [{ en: "He is wearing a nice watch.", fa: "او یک ساعت مچی قشنگ پوشیده است." }, { en: "My watch is five minutes fast.", fa: "ساعت مچی‌ام پنج دقیقه جلو است." }, { en: "She bought a watch for her father.", fa: "او برای پدرش یک ساعت مچی خرید." }] },
      { word: "clock", meaning: "ساعت دیواری", en: "The clock is on the wall.", fa: "ساعت دیواری روی دیوار است.", icon: "🕐", examples: [{ en: "The clock is on the wall.", fa: "ساعت دیواری روی دیوار است." }, { en: "The clock shows nine thirty.", fa: "ساعت دیواری نه و نیم را نشان می‌دهد." }, { en: "That clock is older than me.", fa: "آن ساعت از من پیرتر است." }] },
      { word: "mirror", meaning: "آینه", en: "She looks in the mirror.", fa: "او در آینه نگاه می‌کند.", icon: "👀", examples: [{ en: "She looks in the mirror.", fa: "او در آینه نگاه می‌کند." }, { en: "The mirror is above the sink.", fa: "آینه بالای سینک است." }, { en: "He fixed his hair in the mirror.", fa: "او جلوی آینه موهایش را مرتب کرد." }] },
      { word: "soap", meaning: "صابون", en: "Wash your hands with soap.", fa: "دست‌هایت را با صابون بشور.", icon: "🧼", examples: [{ en: "Wash your hands with soap.", fa: "دست‌هایت را با صابون بشور." }, { en: "The soap smells like lavender.", fa: "صابون بوی اسطوخودوس می‌دهد." }, { en: "There is no soap in the bathroom.", fa: "در حمام صابون نیست." }] },
      { word: "towel", meaning: "حوله", en: "The towel is clean.", fa: "حوله تمیز است.", icon: "🧺", examples: [{ en: "The towel is clean.", fa: "حوله تمیز است." }, { en: "Hang your towel here.", fa: "حوله‌ات را اینجا آویزان کن." }, { en: "She dried her hands with a towel.", fa: "او دست‌هایش را با حوله خشک کرد." }] },
      { word: "shoes", meaning: "کفش", en: "I need new shoes.", fa: "من به کفش جدید نیاز دارم.", icon: "👟", examples: [{ en: "I need new shoes.", fa: "من به کفش جدید نیاز دارم." }, { en: "Take off your shoes at the door.", fa: "سر در کفش‌هایت را دربیاور." }, { en: "Her shoes are very comfortable.", fa: "کفش‌هایش خیلی راحت است." }] },
      { word: "shirt", meaning: "پیراهن", en: "He is wearing a white shirt.", fa: "او پیراهن سفید پوشیده است.", icon: "👕", examples: [{ en: "He is wearing a white shirt.", fa: "او پیراهن سفید پوشیده است." }, { en: "This shirt is too big for me.", fa: "این پیراهن برای من خیلی بزرگ است." }, { en: "He washed his shirt yesterday.", fa: "او دیروز پیراهنش را شست." }] },
      { word: "pants", meaning: "شلوار", en: "These pants are new.", fa: "این شلوار جدید است.", icon: "👖", examples: [{ en: "These pants are new.", fa: "این شلوار جدید است." }, { en: "Where are my black pants?", fa: "شلوار مشکی‌ام کجاست؟" }, { en: "She bought new pants.", fa: "او یک شلوار جدید خرید." }] },
      { word: "dress", meaning: "لباس", en: "She is wearing a beautiful dress.", fa: "او یک لباس زیبا پوشیده است.", icon: "👗", examples: [{ en: "She is wearing a beautiful dress.", fa: "او یک لباس زیبا پوشیده است." }, { en: "This dress is perfect for summer.", fa: "این لباس برای تابستان عالی است." }, { en: "Her dress is light blue.", fa: "لباسش آبی روشن است." }] },
      { word: "hat", meaning: "کلاه", en: "He always wears a hat.", fa: "او همیشه کلاه می‌گذارد.", icon: "🧢", examples: [{ en: "He always wears a hat.", fa: "او همیشه کلاه می‌گذارد." }, { en: "The hat protects you from the sun.", fa: "کلاه تو را از آفتاب محافظت می‌کند." }, { en: "I like your red hat.", fa: "کلاه قرمزت را دوست دارم." }] },
      { word: "coat", meaning: "پالتو", en: "Wear your coat, it's cold.", fa: "پالتوت را بپوش، هوا سرد است.", icon: "🧥", examples: [{ en: "Wear your coat, it's cold.", fa: "پالتوت را بپوش، هوا سرد است." }, { en: "His coat keeps him warm.", fa: "پالتویش او را گرم نگه می‌دارد." }, { en: "Hang your coat here.", fa: "پالتویت را اینجا آویزان کن." }] },
      { word: "umbrella", meaning: "چتر", en: "Take your umbrella, it's raining.", fa: "چترت را بردار، باران می‌بارد.", icon: "☂️", examples: [{ en: "Take your umbrella, it's raining.", fa: "چترت را بردار، باران می‌بارد." }, { en: "My umbrella is broken.", fa: "چترم خراب است." }, { en: "She shared her umbrella with me.", fa: "او چترش را با من شریک شد." }] },
      { word: "bicycle", meaning: "دوچرخه", en: "I ride my bicycle to school.", fa: "من با دوچرخه به مدرسه می‌روم.", icon: "🚲", examples: [{ en: "I ride my bicycle to school.", fa: "من با دوچرخه به مدرسه می‌روم." }, { en: "His bicycle is red.", fa: "دوچرخه‌اش قرمز است." }, { en: "We ride bicycles in the park.", fa: "ما در پارک دوچرخه سواری می‌کنیم." }] },
      { word: "bus", meaning: "اتوبوس", en: "We go by bus.", fa: "ما با اتوبوس می‌رویم.", icon: "🚌", examples: [{ en: "We go by bus.", fa: "ما با اتوبوس می‌رویم." }, { en: "The bus is late today.", fa: "اتوبوس امروز دیر کرده است." }, { en: "She waits for the bus here.", fa: "او اینجا منتظر اتوبوس می‌ماند." }] },
      { word: "train", meaning: "قطار", en: "The train is fast.", fa: "قطار سریع است.", icon: "🚆", examples: [{ en: "The train is fast.", fa: "قطار سریع است." }, { en: "We take the train to the north.", fa: "ما با قطار به شمال می‌رویم." }, { en: "The train leaves at six.", fa: "قطار ساعت شش حرکت می‌کند." }] },
      { word: "taxi", meaning: "تاکسی", en: "We took a taxi home.", fa: "ما با تاکسی به خانه رفتیم.", icon: "🚕", examples: [{ en: "We took a taxi home.", fa: "ما با تاکسی به خانه رفتیم." }, { en: "Call a taxi for me, please.", fa: "لطفاً برایم تاکسی بگیر." }, { en: "The taxi is waiting outside.", fa: "تاکسی بیرون منتظر است." }] },
      { word: "road", meaning: "جاده", en: "This road is very long.", fa: "این جاده خیلی طولانی است.", icon: "🚦", examples: [{ en: "This road is very long.", fa: "این جاده خیلی طولانی است." }, { en: "The road is wet after the rain.", fa: "جاده بعد از باران خیس است." }, { en: "Be careful on the road.", fa: "در جاده مراقب باش." }] },
      { word: "bridge", meaning: "پل", en: "The bridge is over the river.", fa: "پل روی رودخانه است.", icon: "🌉", examples: [{ en: "The bridge is over the river.", fa: "پل روی رودخانه است." }, { en: "We walked across the bridge.", fa: "ما از روی پل رد شدیم." }, { en: "The old bridge is beautiful.", fa: "پل قدیمی زیباست." }] },
      { word: "park", meaning: "پارک", en: "Children play in the park.", fa: "بچه‌ها در پارک بازی می‌کنند.", icon: "🏞️", examples: [{ en: "Children play in the park.", fa: "بچه‌ها در پارک بازی می‌کنند." }, { en: "We walk in the park every evening.", fa: "ما هر عصر در پارک قدم می‌زنیم." }, { en: "The park is full of flowers.", fa: "پارک پر از گل است." }] },
      { word: "market", meaning: "بازار", en: "We buy food at the market.", fa: "ما در بازار غذا می‌خریم.", icon: "🛒", examples: [{ en: "We buy food at the market.", fa: "ما در بازار غذا می‌خریم." }, { en: "The market is crowded on Fridays.", fa: "بازار جمعه‌ها شلوغ است." }, { en: "She went to the market early.", fa: "او زود به بازار رفت." }] },
      { word: "store", meaning: "مغازه", en: "The store is open.", fa: "مغازه باز است.", icon: "🏬", examples: [{ en: "The store is open.", fa: "مغازه باز است." }, { en: "This store sells fresh bread.", fa: "این مغازه نان تازه می‌فروشد." }, { en: "The store closes at ten.", fa: "مغازه ساعت ده بسته می‌شود." }] },
      { word: "hospital", meaning: "بیمارستان", en: "The hospital is near my house.", fa: "بیمارستان نزدیک خانه‌ی من است.", icon: "🏥", examples: [{ en: "The hospital is near my house.", fa: "بیمارستان نزدیک خانه‌ی من است." }, { en: "She works at the hospital.", fa: "او در بیمارستان کار می‌کند." }, { en: "They took him to the hospital.", fa: "آن‌ها او را به بیمارستان بردند." }] },
      { word: "bank", meaning: "بانک", en: "I need to go to the bank.", fa: "من باید به بانک بروم.", icon: "🏦", examples: [{ en: "I need to go to the bank.", fa: "من باید به بانک بروم." }, { en: "The bank opens at nine.", fa: "بانک ساعت نه باز می‌شود." }, { en: "She works at a bank.", fa: "او در یک بانک کار می‌کند." }] },
      { word: "post office", meaning: "اداره پست", en: "I sent a letter from the post office.", fa: "من از اداره پست یک نامه فرستادم.", icon: "📮", examples: [{ en: "I sent a letter from the post office.", fa: "من از اداره پست یک نامه فرستادم." }, { en: "The post office is closed today.", fa: "اداره پست امروز تعطیل است." }, { en: "There is a post office nearby.", fa: "یک اداره پست این نزدیکی هست." }] },
      { word: "library", meaning: "کتابخانه", en: "She studies in the library.", fa: "او در کتابخانه درس می‌خواند.", icon: "📚", examples: [{ en: "She studies in the library.", fa: "او در کتابخانه درس می‌خواند." }, { en: "The library is quiet.", fa: "کتابخانه ساکت است." }, { en: "I borrowed two books from the library.", fa: "من از کتابخانه دو کتاب قرض گرفتم." }] },
      { word: "restaurant", meaning: "رستوران", en: "We ate dinner at a restaurant.", fa: "ما شام را در رستوران خوردیم.", icon: "🍜", examples: [{ en: "We ate dinner at a restaurant.", fa: "ما شام را در رستوران خوردیم." }, { en: "This restaurant is famous for its rice.", fa: "این رستوران به برنجش معروف است." }, { en: "The restaurant opens at noon.", fa: "رستوران ظهر باز می‌شود." }] },
      { word: "hotel", meaning: "هتل", en: "We stayed at a nice hotel.", fa: "ما در یک هتل خوب ماندیم.", icon: "🏨", examples: [{ en: "We stayed at a nice hotel.", fa: "ما در یک هتل خوب ماندیم." }, { en: "The hotel has a big pool.", fa: "هتل یک استخر بزرگ دارد." }, { en: "Our hotel is near the sea.", fa: "هتل ما نزدیک دریاست." }] },
      { word: "museum", meaning: "موزه", en: "We visited a museum yesterday.", fa: "ما دیروز به موزه رفتیم.", icon: "🏛️", examples: [{ en: "We visited a museum yesterday.", fa: "ما دیروز به موزه رفتیم." }, { en: "The museum is free on Mondays.", fa: "موزه دوشنبه‌ها رایگان است." }, { en: "She learned a lot at the museum.", fa: "او در موزه چیزهای زیادی یاد گرفت." }] },
      { word: "church", meaning: "کلیسا", en: "The church is very old.", fa: "کلیسا خیلی قدیمی است.", icon: "⛪", examples: [{ en: "The church is very old.", fa: "کلیسا خیلی قدیمی است." }, { en: "There is a small church in our street.", fa: "در خیابان ما یک کلیسای کوچک هست." }, { en: "We saw an old church in the city.", fa: "ما در شهر یک کلیسای قدیمی دیدیم." }] },
      { word: "neighbor", meaning: "همسایه", en: "My neighbor is friendly.", fa: "همسایه‌ی من دوست‌داشتنی است.", icon: "🏘️", examples: [{ en: "My neighbor is friendly.", fa: "همسایه‌ی من دوست‌داشتنی است." }, { en: "Our neighbors helped us move.", fa: "همسایه‌هایمان به ما در اسباب‌کشی کمک کردند." }, { en: "Say hello to your neighbor.", fa: "به همسایه‌ات سلام کن." }] },
      { word: "guest", meaning: "مهمان", en: "We have a guest today.", fa: "ما امروز یک مهمان داریم.", icon: "🤝", examples: [{ en: "We have a guest today.", fa: "ما امروز یک مهمان داریم." }, { en: "The guests arrived at seven.", fa: "مهمان‌ها ساعت هفت رسیدند." }, { en: "We prepared tea for our guests.", fa: "برای مهمان‌هایمان چای آماده کردیم." }] },
      { word: "name", meaning: "اسم", en: "What is your name?", fa: "اسم شما چیست؟", icon: "🏷️", examples: [{ en: "What is your name?", fa: "اسم شما چیست؟" }, { en: "She wrote her name on the paper.", fa: "او اسمش را روی کاغذ نوشت." }, { en: "I forgot his name.", fa: "اسم او را فراموش کردم." }] },
      { word: "address", meaning: "آدرس", en: "Please write your address.", fa: "لطفاً آدرست را بنویس.", icon: "📍", examples: [{ en: "Please write your address.", fa: "لطفاً آدرست را بنویس." }, { en: "What is your home address?", fa: "آدرس خانه‌ات چیست؟" }, { en: "He gave me his address.", fa: "او آدرسش را به من داد." }] },
      { word: "letter", meaning: "نامه", en: "I wrote a letter to my friend.", fa: "من برای دوستم یک نامه نوشتم.", icon: "✉️", examples: [{ en: "I wrote a letter to my friend.", fa: "من برای دوستم یک نامه نوشتم." }, { en: "The letter arrived yesterday.", fa: "نامه دیروز رسید." }, { en: "She opened the letter slowly.", fa: "او نامه را آرام باز کرد." }] }
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
      { word: "flight", meaning: "پرواز", en: "Our flight was delayed.", fa: "پرواز ما تاخیر داشت.", icon: "✈️", examples: [{ en: "Our flight was delayed.", fa: "پرواز ما تاخیر داشت." }, { en: "The flight takes two hours.", fa: "پرواز دو ساعت طول می‌کشد." }, { en: "I slept during the flight.", fa: "من در طول پرواز خوابیدم." }] },
      { word: "taxi", meaning: "تاکسی", en: "We took a taxi to the hotel.", fa: "ما با تاکسی به هتل رفتیم.", icon: "🚕", examples: [{ en: "We took a taxi to the hotel.", fa: "ما با تاکسی به هتل رفتیم." }, { en: "The taxi driver knows the city well.", fa: "راننده تاکسی شهر را خوب می‌شناسد." }, { en: "We shared a taxi with friends.", fa: "ما با دوستان یک تاکسی گرفتیم." }] },
      { word: "backpack", meaning: "کیف پشتی", en: "He packed his backpack quickly.", fa: "او سریع کیف پشتی‌اش را بست.", icon: "🎒", examples: [{ en: "He packed his backpack quickly.", fa: "او سریع کیف پشتی‌اش را بست." }, { en: "My backpack has three pockets.", fa: "کیف پشتی‌ام سه جیب دارد." }, { en: "She carried the backpack all day.", fa: "او تمام روز کیف پشتی را حمل کرد." }] },
      { word: "souvenir", meaning: "سوغاتی", en: "I bought a souvenir for my mom.", fa: "من یک سوغاتی برای مادرم خریدم.", icon: "🎁", examples: [{ en: "I bought a souvenir for my mom.", fa: "من یک سوغاتی برای مادرم خریدم." }, { en: "This shop sells nice souvenirs.", fa: "این مغازه سوغاتی‌های قشنگ می‌فروشد." }, { en: "She chose a small souvenir.", fa: "او یک سوغاتی کوچک انتخاب کرد." }] },
      { word: "guide", meaning: "راهنمای تور", en: "Our guide spoke three languages.", fa: "راهنمای ما به سه زبان صحبت می‌کرد.", icon: "🧭", examples: [{ en: "Our guide spoke three languages.", fa: "راهنمای ما به سه زبان صحبت می‌کرد." }, { en: "The guide showed us the museum.", fa: "راهنما موزه را به ما نشان داد." }, { en: "Ask the guide for a map.", fa: "از راهنما یک نقشه بخواه." }] },
      { word: "reservation", meaning: "رزرو", en: "I made a reservation online.", fa: "من یک رزرو آنلاین انجام دادم.", icon: "📅", examples: [{ en: "I made a reservation online.", fa: "من یک رزرو آنلاین انجام دادم." }, { en: "Can you check my reservation?", fa: "می‌توانی رزرو من را چک کنی؟" }, { en: "The reservation is for two nights.", fa: "رزرو برای دو شب است." }] },
      { word: "visa", meaning: "ویزا", en: "You need a visa for this country.", fa: "برای این کشور به ویزا نیاز داری.", icon: "📄", examples: [{ en: "You need a visa for this country.", fa: "برای این کشور به ویزا نیاز داری." }, { en: "My visa is ready.", fa: "ویزای من آماده است." }, { en: "She applied for a visa last week.", fa: "او هفته پیش برای ویزا درخواست داد." }] },
      { word: "currency", meaning: "ارز", en: "We changed our currency at the airport.", fa: "ما ارزمان را در فرودگاه تبدیل کردیم.", icon: "💱", examples: [{ en: "We changed our currency at the airport.", fa: "ما ارزمان را در فرودگاه تبدیل کردیم." }, { en: "What currency do they use here?", fa: "اینجا چه ارزی استفاده می‌کنند؟" }, { en: "I need some local currency.", fa: "من به کمی ارز محلی نیاز دارم." }] },
      { word: "island", meaning: "جزیره", en: "This island is very beautiful.", fa: "این جزیره خیلی زیباست.", icon: "🏝️", examples: [{ en: "This island is very beautiful.", fa: "این جزیره خیلی زیباست." }, { en: "We took a boat to the island.", fa: "ما با قایق به جزیره رفتیم." }, { en: "The island has a small village.", fa: "جزیره یک روستای کوچک دارد." }] },
      { word: "journey", meaning: "سفر", en: "It was a long journey.", fa: "آن یک سفر طولانی بود.", icon: "🛤️", examples: [{ en: "It was a long journey.", fa: "آن یک سفر طولانی بود." }, { en: "The journey took three days.", fa: "سفر سه روز طول کشید." }, { en: "Enjoy every journey you take.", fa: "از هر سفری که می‌روی لذت ببر." }] },
      { word: "trip", meaning: "سفر کوتاه", en: "We had a great trip.", fa: "ما یک سفر خوب داشتیم.", icon: "📍", examples: [{ en: "We had a great trip.", fa: "ما یک سفر خوب داشتیم." }, { en: "The trip starts tomorrow.", fa: "سفر فردا شروع می‌شود." }, { en: "She planned the trip alone.", fa: "او سفر را تنها برنامه‌ریزی کرد." }] },
      { word: "plane", meaning: "هواپیما", en: "The plane is in the sky.", fa: "هواپیما در آسمان است.", icon: "🛩️", examples: [{ en: "The plane is in the sky.", fa: "هواپیما در آسمان است." }, { en: "The plane landed safely.", fa: "هواپیما با امنیت فرود آمد." }, { en: "I watched the plane from the window.", fa: "از پنجره به هواپیما نگاه کردم." }] },
      { word: "boat", meaning: "قایق", en: "We went by boat.", fa: "ما با قایق رفتیم.", icon: "⛵", examples: [{ en: "We went by boat.", fa: "ما با قایق رفتیم." }, { en: "The boat moves slowly.", fa: "قایق آهسته حرکت می‌کند." }, { en: "They rented a boat for a day.", fa: "آن‌ها برای یک روز قایق اجاره کردند." }] },
      { word: "ship", meaning: "کشتی", en: "The ship is very big.", fa: "کشتی خیلی بزرگ است.", icon: "🚢", examples: [{ en: "The ship is very big.", fa: "کشتی خیلی بزرگ است." }, { en: "The ship left the port at dawn.", fa: "کشتی سحرگاه بندر را ترک کرد." }, { en: "We watched the ship from the beach.", fa: "از ساحل به کشتی نگاه کردیم." }] },
      { word: "station", meaning: "ایستگاه", en: "I will meet you at the station.", fa: "من در ایستگاه منتظرت می‌مانم.", icon: "🚉", examples: [{ en: "I will meet you at the station.", fa: "من در ایستگاه منتظرت می‌مانم." }, { en: "The station is near my house.", fa: "ایستگاه نزدیک خانه‌ام است." }, { en: "We waited at the station.", fa: "در ایستگاه منتظر ماندیم." }] },
      { word: "driver", meaning: "راننده", en: "The driver is very careful.", fa: "راننده خیلی محتاط است.", icon: "🚶", examples: [{ en: "The driver is very careful.", fa: "راننده خیلی محتاط است." }, { en: "The driver opened the door for us.", fa: "راننده در را برایمان باز کرد." }, { en: "Thank the driver when you leave.", fa: "وقتی پیاده می‌شوی از راننده تشکر کن." }] },
      { word: "passenger", meaning: "مسافر", en: "The passenger has a ticket.", fa: "مسافر بلیط دارد.", icon: "👥", examples: [{ en: "The passenger has a ticket.", fa: "مسافر بلیط دارد." }, { en: "The passenger is reading a book.", fa: "مسافر دارد کتاب می‌خواند." }, { en: "Every passenger needs a ticket.", fa: "هر مسافر به بلیط نیاز دارد." }] },
      { word: "luggage", meaning: "بار", en: "My luggage is in the car.", fa: "بار من در ماشین است.", icon: "📦", examples: [{ en: "My luggage is in the car.", fa: "بار من در ماشین است." }, { en: "The luggage is too heavy for me.", fa: "بار برای من خیلی سنگین است." }, { en: "Leave your luggage in the car.", fa: "بارت را در ماشین بگذار." }] },
      { word: "gate", meaning: "گیت", en: "The gate is over there.", fa: "گیت آن‌جاست.", icon: "📋", examples: [{ en: "The gate is over there.", fa: "گیت آن‌جاست." }, { en: "Our gate is number twelve.", fa: "گیت ما شماره دوازده است." }, { en: "She waited at the gate.", fa: "او پشت گیت منتظر ماند." }] },
      { word: "boarding pass", meaning: "کارت سوار شدن", en: "Show your boarding pass, please.", fa: "لطفاً کارت سوار شدن‌تان را نشان بدهید.", icon: "🎟️", examples: [{ en: "Show your boarding pass, please.", fa: "لطفاً کارت سوار شدن‌تان را نشان بدهید." }, { en: "I lost my boarding pass.", fa: "من کارت سوار شدنم را گم کردم." }, { en: "The boarding pass is on my phone.", fa: "کارت سوار شدن روی تلفنم است." }] },
      { word: "departure", meaning: "حرکت", en: "The departure time is 10 AM.", fa: "ساعت حرکت ۱۰ صبح است.", icon: "📤", examples: [{ en: "The departure time is 10 AM.", fa: "ساعت حرکت ۱۰ صبح است." }, { en: "Check the departure time again.", fa: "زمان حرکت را دوباره چک کن." }, { en: "The departure was on time.", fa: "حرکت سر وقت بود." }] },
      { word: "arrival", meaning: "ورود", en: "The arrival time is 3 PM.", fa: "ساعت ورود ۳ بعدازظهر است.", icon: "🛬", examples: [{ en: "The arrival time is 3 PM.", fa: "ساعت ورود ۳ بعدازظهر است." }, { en: "Our arrival is at eight.", fa: "ورود ما ساعت هشت است." }, { en: "She waited for my arrival.", fa: "او منتظر رسیدن من بود." }] },
      { word: "delay", meaning: "تاخیر", en: "There is a delay of one hour.", fa: "یک ساعت تاخیر وجود دارد.", icon: "🕰️", examples: [{ en: "There is a delay of one hour.", fa: "یک ساعت تاخیر وجود دارد." }, { en: "The delay made us tired.", fa: "تاخیر ما را خسته کرد." }, { en: "They announced a two-hour delay.", fa: "آن‌ها دو ساعت تاخیر اعلام کردند." }] },
      { word: "tourist", meaning: "توریست", en: "Many tourists visit this city.", fa: "توریست‌های زیادی از این شهر دیدن می‌کنند.", icon: "🤳", examples: [{ en: "Many tourists visit this city.", fa: "توریست‌های زیادی از این شهر دیدن می‌کنند." }, { en: "The tourist asked for help.", fa: "توریست کمک خواست." }, { en: "I took a photo with a tourist.", fa: "من با یک توریست عکس گرفتم." }] },
      { word: "vacation", meaning: "تعطیلات", en: "I love my vacation.", fa: "من تعطیلاتم را دوست دارم.", icon: "🌴", examples: [{ en: "I love my vacation.", fa: "من تعطیلاتم را دوست دارم." }, { en: "Our vacation starts in June.", fa: "تعطیلات ما از ژوئن شروع می‌شود." }, { en: "She spent her vacation at the sea.", fa: "او تعطیلاتش را کنار دریا گذراند." }] },
      { word: "holiday", meaning: "روز تعطیل", en: "Monday is a holiday.", fa: "دوشنبه روز تعطیل است.", icon: "🎉", examples: [{ en: "Monday is a holiday.", fa: "دوشنبه روز تعطیل است." }, { en: "We travel on holidays.", fa: "ما در روزهای تعطیل سفر می‌کنیم." }, { en: "The office is closed on the holiday.", fa: "اداره در روز تعطیل بسته است." }] },
      { word: "summer", meaning: "تابستان", en: "Summer is my favorite season.", fa: "تابستان فصل مورد علاقه‌ی من است.", icon: "🌻", examples: [{ en: "Summer is my favorite season.", fa: "تابستان فصل مورد علاقه‌ی من است." }, { en: "We swim a lot in summer.", fa: "ما تابستان زیاد شنا می‌کنیم." }, { en: "The summer here is very hot.", fa: "تابستان اینجا خیلی گرم است." }] },
      { word: "winter", meaning: "زمستان", en: "Winter is very cold here.", fa: "زمستان اینجا خیلی سرد است.", icon: "⛄", examples: [{ en: "Winter is very cold here.", fa: "زمستان اینجا خیلی سرد است." }, { en: "It snows a lot in winter.", fa: "زمستان زیاد برف می‌آید." }, { en: "I wear warm clothes in winter.", fa: "زمستان لباس گرم می‌پوشم." }] },
      { word: "spring", meaning: "بهار", en: "Spring is a beautiful season.", fa: "بهار فصل زیبایی است.", icon: "🌱", examples: [{ en: "Spring is a beautiful season.", fa: "بهار فصل زیبایی است." }, { en: "Flowers open in spring.", fa: "گل‌ها در بهار باز می‌شوند." }, { en: "We travel every spring.", fa: "ما هر بهار سفر می‌کنیم." }] },
      { word: "fall", meaning: "پاییز", en: "The leaves fall in fall.", fa: "برگ‌ها در پاییز می‌ریزند.", icon: "🍂", examples: [{ en: "The leaves fall in fall.", fa: "برگ‌ها در پاییز می‌ریزند." }, { en: "Fall is windy here.", fa: "پاییز اینجا بادی است." }, { en: "I love the colors of fall.", fa: "من رنگ‌های پاییز را دوست دارم." }] },
      { word: "sea", meaning: "دریا", en: "The sea is blue and wide.", fa: "دریا آبی و پهناور است.", icon: "🌊", examples: [{ en: "The sea is blue and wide.", fa: "دریا آبی و پهناور است." }, { en: "We swam in the sea.", fa: "ما در دریا شنا کردیم." }, { en: "The sea was calm this morning.", fa: "دریا امروز صبح آرام بود." }] },
      { word: "lake", meaning: "دریاچه", en: "We swam in the lake.", fa: "ما در دریاچه شنا کردیم.", icon: "🏞️", examples: [{ en: "We swam in the lake.", fa: "ما در دریاچه شنا کردیم." }, { en: "The lake is cold and clean.", fa: "دریاچه سرد و تمیز است." }, { en: "We had lunch by the lake.", fa: "کنار دریاچه ناهار خوردیم." }] },
      { word: "river", meaning: "رودخانه", en: "The river is very long.", fa: "رودخانه خیلی طولانی است.", icon: "🚣", examples: [{ en: "The river is very long.", fa: "رودخانه خیلی طولانی است." }, { en: "A small bridge crosses the river.", fa: "یک پل کوچک از رودخانه رد می‌شود." }, { en: "We walked along the river.", fa: "کنار رودخانه قدم زدیم." }] },
      { word: "forest", meaning: "جنگل", en: "The forest is dark and quiet.", fa: "جنگل تاریک و آرام است.", icon: "🌲", examples: [{ en: "The forest is dark and quiet.", fa: "جنگل تاریک و آرام است." }, { en: "We heard birds in the forest.", fa: "در جنگل صدای پرندگان را شنیدیم." }, { en: "The forest is full of trees.", fa: "جنگل پر از درخت است." }] },
      { word: "desert", meaning: "بیابان", en: "The desert is hot and dry.", fa: "بیابان گرم و خشک است.", icon: "🐪", examples: [{ en: "The desert is hot and dry.", fa: "بیابان گرم و خشک است." }, { en: "The desert gets cold at night.", fa: "بیابان شب‌ها سرد می‌شود." }, { en: "We rode camels in the desert.", fa: "ما در بیابان شتر سواری کردیم." }] },
      { word: "country", meaning: "کشور", en: "This country is beautiful.", fa: "این کشور زیباست.", icon: "🌍", examples: [{ en: "This country is beautiful.", fa: "این کشور زیباست." }, { en: "I want to visit every country.", fa: "من می‌خواهم از هر کشوری دیدن کنم." }, { en: "Which country are you from?", fa: "تو اهل کدام کشوری؟" }] },
      { word: "world", meaning: "دنیا", en: "The world is very big.", fa: "دنیا خیلی بزرگ است.", icon: "🌎", examples: [{ en: "The world is very big.", fa: "دنیا خیلی بزرگ است." }, { en: "I want to see the world.", fa: "می‌خواهم دنیا را ببینم." }, { en: "She traveled around the world.", fa: "او دور دنیا سفر کرد." }] },
      { word: "north", meaning: "شمال", en: "The north is colder than the south.", fa: "شمال از جنوب سردتر است.", icon: "⬆️", examples: [{ en: "The north is colder than the south.", fa: "شمال از جنوب سردتر است." }, { en: "The north has cold winters.", fa: "شمال زمستان‌های سردی دارد." }, { en: "They moved to the north.", fa: "آن‌ها به شمال نقل مکان کردند." }] },
      { word: "south", meaning: "جنوب", en: "We drove to the south.", fa: "ما به سمت جنوب رانندگی کردیم.", icon: "⬇️", examples: [{ en: "We drove to the south.", fa: "ما به سمت جنوب رانندگی کردیم." }, { en: "The south is warm in winter.", fa: "جنوب در زمستان گرم است." }, { en: "She comes from the south.", fa: "او اهل جنوب است." }] },
      { word: "east", meaning: "شرق", en: "The sun rises in the east.", fa: "خورشید از شرق طلوع می‌کند.", icon: "➡️", examples: [{ en: "The sun rises in the east.", fa: "خورشید از شرق طلوع می‌کند." }, { en: "We drove east for two hours.", fa: "دو ساعت به سمت شرق رانندگی کردیم." }, { en: "The east of the country is dry.", fa: "شرق کشور خشک است." }] },
      { word: "west", meaning: "غرب", en: "The sun sets in the west.", fa: "خورشید در غرب غروب می‌کند.", icon: "🌇", examples: [{ en: "The sun sets in the west.", fa: "خورشید در غرب غروب می‌کند." }, { en: "The west has beautiful sunsets.", fa: "غرب غروب‌های زیبایی دارد." }, { en: "They traveled west by car.", fa: "آن‌ها با ماشین به سمت غرب سفر کردند." }] },
      { word: "sign", meaning: "تابلو", en: "Read the sign on the wall.", fa: "تابلو روی دیوار را بخوان.", icon: "🚏", examples: [{ en: "Read the sign on the wall.", fa: "تابلو روی دیوار را بخوان." }, { en: "The sign says stop.", fa: "روی تابلو نوشته است: ایست." }, { en: "Follow the signs to the gate.", fa: "تابلوها را تا گیت دنبال کن." }] },
      { word: "way", meaning: "راه", en: "Can you show me the way?", fa: "می‌توانی راه را به من نشان بدهی؟", icon: "🗾", examples: [{ en: "Can you show me the way?", fa: "می‌توانی راه را به من نشان بدهی؟" }, { en: "This way is shorter.", fa: "این راه کوتاه‌تر است." }, { en: "I know the way to the beach.", fa: "من راه ساحل را بلدم." }] },
      { word: "path", meaning: "مسیر", en: "This path goes to the river.", fa: "این مسیر به رودخانه می‌رود.", icon: "🐾", examples: [{ en: "This path goes to the river.", fa: "این مسیر به رودخانه می‌رود." }, { en: "The path is easy to walk.", fa: "این مسیر پیاده‌روی‌اش آسان است." }, { en: "Stay on the path, please.", fa: "لطفاً در مسیر بمان." }] },
      { word: "distance", meaning: "فاصله", en: "The distance is not far.", fa: "فاصله زیاد نیست.", icon: "📏", examples: [{ en: "The distance is not far.", fa: "فاصله زیاد نیست." }, { en: "The distance looks short on the map.", fa: "فاصله روی نقشه کوتاه به نظر می‌رسد." }, { en: "We walked a long distance.", fa: "ما فاصله زیادی راه رفتیم." }] },
      { word: "near", meaning: "نزدیک", en: "The hotel is near here.", fa: "هتل نزدیک اینجاست.", icon: "🎯", examples: [{ en: "The hotel is near here.", fa: "هتل نزدیک اینجاست." }, { en: "Is there a bank near here?", fa: "این نزدیکی بانک هست؟" }, { en: "The beach is near our hotel.", fa: "ساحل نزدیک هتل ماست." }] },
      { word: "far", meaning: "دور", en: "The airport is far from here.", fa: "فرودگاه از اینجا دور است.", icon: "🔭", examples: [{ en: "The airport is far from here.", fa: "فرودگاه از اینجا دور است." }, { en: "How far is the museum?", fa: "موزه چقدر دور است؟" }, { en: "The station is not far.", fa: "ایستگاه دور نیست." }] },
      { word: "fast", meaning: "سریع", en: "The train is very fast.", fa: "قطار خیلی سریع است.", icon: "⚡", examples: [{ en: "The train is very fast.", fa: "قطار خیلی سریع است." }, { en: "The taxi drives too fast.", fa: "تاکسی خیلی سریع می‌رود." }, { en: "I like fast trains.", fa: "من قطارهای سریع را دوست دارم." }] },
      { word: "slow", meaning: "آهسته", en: "The bus is slow today.", fa: "اتوبوس امروز آهسته است.", icon: "🐌", examples: [{ en: "The bus is slow today.", fa: "اتوبوس امروز آهسته است." }, { en: "The slow boat is relaxing.", fa: "قایق آهسته آرام‌بخش است." }, { en: "Traffic is slow this morning.", fa: "ترافیک امروز صبح کند است." }] },
      { word: "stop", meaning: "توقف", en: "The bus will stop here.", fa: "اتوبوس اینجا توقف می‌کند.", icon: "✋", examples: [{ en: "The bus will stop here.", fa: "اتوبوس اینجا توقف می‌کند." }, { en: "The train makes one stop here.", fa: "قطار اینجا یک توقف دارد." }, { en: "Where is the next stop?", fa: "توقف بعدی کجاست؟" }] },
      { word: "leave", meaning: "رفتن", en: "We leave at six in the morning.", fa: "ما ساعت شش صبح حرکت می‌کنیم.", icon: "👋", examples: [{ en: "We leave at six in the morning.", fa: "ما ساعت شش صبح حرکت می‌کنیم." }, { en: "Do not leave your bag here.", fa: "کیفت را اینجا نگذار (ترک نکن)." }, { en: "The bus leaves in ten minutes.", fa: "اتوبوس ده دقیقه دیگر حرکت می‌کند." }] },
      { word: "arrive", meaning: "رسیدن", en: "We arrive at the hotel at night.", fa: "ما شب به هتل می‌رسیم.", icon: "🏁", examples: [{ en: "We arrive at the hotel at night.", fa: "ما شب به هتل می‌رسیم." }, { en: "We arrive early in the morning.", fa: "ما صبح زود می‌رسیم." }, { en: "When does the train arrive?", fa: "قطار کی می‌رسد؟" }] },
      { word: "stay", meaning: "ماندن", en: "We stay at a small hotel.", fa: "ما در یک هتل کوچک می‌مانیم.", icon: "🛎️", examples: [{ en: "We stay at a small hotel.", fa: "ما در یک هتل کوچک می‌مانیم." }, { en: "Stay with me, please.", fa: "لطفاً با من بمان." }, { en: "They stayed three nights.", fa: "آن‌ها سه شب ماندند." }] },
      { word: "visit", meaning: "دیدن", en: "I want to visit my friend.", fa: "من می‌خواهم از دوستم دیدن کنم.", icon: "🏘️", examples: [{ en: "I want to visit my friend.", fa: "من می‌خواهم از دوستم دیدن کنم." }, { en: "We visit the museum every year.", fa: "ما هر سال از موزه دیدن می‌کنیم." }, { en: "She wants to visit Paris.", fa: "او می‌خواهد از پاریس دیدن کند." }] },
      { word: "tour", meaning: "تور", en: "We took a tour of the city.", fa: "ما یک تور از شهر گرفتیم.", icon: "🚌", examples: [{ en: "We took a tour of the city.", fa: "ما یک تور از شهر گرفتیم." }, { en: "The tour starts at ten.", fa: "تور ساعت ده شروع می‌شود." }, { en: "Our tour guide was funny.", fa: "راهنمای تور ما بامزه بود." }] },
      { word: "price", meaning: "قیمت", en: "The price is very good.", fa: "قیمت خیلی خوب است.", icon: "💲", examples: [{ en: "The price is very good.", fa: "قیمت خیلی خوب است." }, { en: "The price includes breakfast.", fa: "قیمت شامل صبحانه است." }, { en: "Ask about the price first.", fa: "اول درباره قیمت بپرس." }] },
      { word: "cheap", meaning: "ارزان", en: "This ticket is cheap.", fa: "این بلیط ارزان است.", icon: "🏷️", examples: [{ en: "This ticket is cheap.", fa: "این بلیط ارزان است." }, { en: "The food here is cheap.", fa: "غذای اینجا ارزان است." }, { en: "She found a cheap hotel.", fa: "او یک هتل ارزان پیدا کرد." }] },
      { word: "expensive", meaning: "گران", en: "That hotel is expensive.", fa: "آن هتل گران است.", icon: "💎", examples: [{ en: "That hotel is expensive.", fa: "آن هتل گران است." }, { en: "This camera is too expensive for me.", fa: "این دوربین برای من خیلی گران است." }, { en: "The tickets were expensive.", fa: "بلیط‌ها گران بود." }] },
      { word: "buy", meaning: "خریدن", en: "I want to buy a ticket.", fa: "من می‌خواهم یک بلیط بخرم.", icon: "🛒", examples: [{ en: "I want to buy a ticket.", fa: "من می‌خواهم یک بلیط بخرم." }, { en: "She wants to buy souvenirs.", fa: "او می‌خواهد سوغاتی بخرد." }, { en: "We bought water at the store.", fa: "ما از مغازه آب خریدیم." }] },
      { word: "card", meaning: "کارت", en: "I pay with my card.", fa: "من با کارتم پرداخت می‌کنم.", icon: "💳", examples: [{ en: "I pay with my card.", fa: "من با کارتم پرداخت می‌کنم." }, { en: "The card does not work here.", fa: "کارت اینجا کار نمی‌کند." }, { en: "She paid with her card.", fa: "او با کارتش پرداخت کرد." }] },
      { word: "pay", meaning: "پرداخت", en: "I pay for the ticket.", fa: "من برای بلیط پرداخت می‌کنم.", icon: "💵", examples: [{ en: "I pay for the ticket.", fa: "من برای بلیط پرداخت می‌کنم." }, { en: "Can I pay by card?", fa: "می‌توانم با کارت پرداخت کنم؟" }, { en: "He paid for both tickets.", fa: "او برای هر دو بلیط پرداخت کرد." }] },
      { word: "cash", meaning: "پول نقد", en: "I pay with cash.", fa: "من با پول نقد پرداخت می‌کنم.", icon: "💴", examples: [{ en: "I pay with cash.", fa: "من با پول نقد پرداخت می‌کنم." }, { en: "I have no cash with me.", fa: "من پول نقد همراه ندارم." }, { en: "The taxi only takes cash.", fa: "تاکسی فقط نقد قبول می‌کند." }] },
      { word: "receipt", meaning: "رسید", en: "Keep your receipt, please.", fa: "رسیدت را نگه دار، لطفاً.", icon: "🧾", examples: [{ en: "Keep your receipt, please.", fa: "رسیدت را نگه دار، لطفاً." }, { en: "The receipt is in the bag.", fa: "رسید در کیف است." }, { en: "Can I have a receipt, please?", fa: "می‌توانم رسید داشته باشم، لطفاً؟" }] },
      { word: "gift", meaning: "هدیه", en: "I bought a gift for my mother.", fa: "من یک هدیه برای مادرم خریدم.", icon: "🎀", examples: [{ en: "I bought a gift for my mother.", fa: "من یک هدیه برای مادرم خریدم." }, { en: "She wrapped the gift nicely.", fa: "او هدیه را قشنگ بسته‌بندی کرد." }, { en: "This gift is for you.", fa: "این هدیه برای توست." }] },
      { word: "photo", meaning: "عکس", en: "I took a photo of the beach.", fa: "من از ساحل عکس گرفتم.", icon: "📸", examples: [{ en: "I took a photo of the beach.", fa: "من از ساحل عکس گرفتم." }, { en: "This photo is from our trip.", fa: "این عکس از سفر ماست." }, { en: "She showed me her photos.", fa: "او عکس‌هایش را به من نشان داد." }] },
      { word: "view", meaning: "منظره", en: "The view from the hotel is beautiful.", fa: "منظره از هتل زیباست.", icon: "🌅", examples: [{ en: "The view from the hotel is beautiful.", fa: "منظره از هتل زیباست." }, { en: "I love this view.", fa: "من این منظره را دوست دارم." }, { en: "The room has a sea view.", fa: "اتاق منظره دریا دارد." }] },
      { word: "beautiful", meaning: "زیبا", en: "This place is very beautiful.", fa: "این مکان خیلی زیباست.", icon: "💐", examples: [{ en: "This place is very beautiful.", fa: "این مکان خیلی زیباست." }, { en: "The sunset was beautiful.", fa: "غروب زیبا بود." }, { en: "What a beautiful island!", fa: "چه جزیره زیبایی!" }] },
      { word: "fun", meaning: "جالب", en: "The trip was a lot of fun.", fa: "سفر خیلی جالب بود.", icon: "🎮", examples: [{ en: "The trip was a lot of fun.", fa: "سفر خیلی جالب بود." }, { en: "We had fun at the beach.", fa: "ما در ساحل خوش گذراندیدم." }, { en: "The tour was fun.", fa: "تور جالب بود." }] },
      { word: "tired", meaning: "خسته", en: "I am tired after the trip.", fa: "من بعد از سفر خسته‌ام.", icon: "😴", examples: [{ en: "I am tired after the trip.", fa: "من بعد از سفر خسته‌ام." }, { en: "The kids are tired from walking.", fa: "بچه‌ها از راه رفتن خسته‌اند." }, { en: "I feel tired today.", fa: "من امروز خسته‌ام." }] },
      { word: "lost", meaning: "گم‌شده", en: "I am lost in the city.", fa: "من در شهر گم شده‌ام.", icon: "❓", examples: [{ en: "I am lost in the city.", fa: "من در شهر گم شده‌ام." }, { en: "She was lost in the market.", fa: "او در بازار گم شده بود." }, { en: "We are lost; let us ask someone.", fa: "ما گم شدیم؛ بذار از یکی بپرسیم." }] },
      { word: "find", meaning: "پیدا کردن", en: "I cannot find my hotel.", fa: "من هتلم را پیدا نمی‌کنم.", icon: "🔍", examples: [{ en: "I cannot find my hotel.", fa: "من هتلم را پیدا نمی‌کنم." }, { en: "Did you find your passport?", fa: "گذرنامه‌ات را پیدا کردی؟" }, { en: "I found a nice café near here.", fa: "یک کافه قشنگ این نزدیکی پیدا کردم." }] },
      { word: "ask", meaning: "پرسیدن", en: "I need to ask for directions.", fa: "من باید آدرس بپرسم.", icon: "🙋", examples: [{ en: "I need to ask for directions.", fa: "من باید آدرس بپرسم." }, { en: "Ask the guide about the city.", fa: "از راهنما درباره شهر بپرس." }, { en: "Can I ask a question?", fa: "می‌توانم یک سؤال بپرسم؟" }] },
      { word: "help", meaning: "کمک", en: "Can you help me, please?", fa: "می‌توانی به من کمک کنی، لطفاً؟", icon: "🆘", examples: [{ en: "Can you help me, please?", fa: "می‌توانی به من کمک کنی، لطفاً؟" }, { en: "Thanks for your help.", fa: "از کمکت ممنونم." }, { en: "I need help with my luggage.", fa: "برای بارم به کمک نیاز دارم." }] },
      { word: "language", meaning: "زبان", en: "I speak two languages.", fa: "من به دو زبان صحبت می‌کنم.", icon: "🔤", examples: [{ en: "I speak two languages.", fa: "من به دو زبان صحبت می‌کنم." }, { en: "English is a useful language.", fa: "انگلیسی زبان کاربردی است." }, { en: "What language do they speak here?", fa: "اینجا چه زبانی صحبت می‌کنند؟" }] },
      { word: "tent", meaning: "چادر", en: "We put up the tent in the forest.", fa: "ما چادر را در جنگل برپا کردیم.", icon: "⛺", examples: [{ en: "We put up the tent in the forest.", fa: "ما چادر را در جنگل برپا کردیم." }, { en: "The tent is big enough for two.", fa: "چادر برای دو نفر به اندازه کافی بزرگ است." }, { en: "We slept in a tent.", fa: "ما در چادر خوابیدیم." }] },
      { word: "camp", meaning: "کمپ", en: "We made a camp near the river.", fa: "ما نزدیک رودخانه کمپ زدیم.", icon: "🔥", examples: [{ en: "We made a camp near the river.", fa: "ما نزدیک رودخانه کمپ زدیم." }, { en: "The camp is near the lake.", fa: "کمپ نزدیک دریاچه است." }, { en: "We left the camp at sunrise.", fa: "ما هنگام طلوع کمپ را ترک کردیم." }] },
      { word: "fire", meaning: "آتش", en: "We made a small fire.", fa: "ما یک آتش کوچک روشن کردیم.", icon: "🕯️", examples: [{ en: "We made a small fire.", fa: "ما یک آتش کوچک روشن کردیم." }, { en: "The fire keeps us warm.", fa: "آتش ما را گرم نگه می‌دارد." }, { en: "Sit near the fire.", fa: "کنار آتش بنشین." }] },
      { word: "nature", meaning: "طبیعت", en: "I love nature.", fa: "من طبیعت را دوست دارم.", icon: "🌿", examples: [{ en: "I love nature.", fa: "من طبیعت را دوست دارم." }, { en: "The nature here is amazing.", fa: "طبیعت اینجا شگفت‌انگیز است." }, { en: "We spent the day in nature.", fa: "روز را در طبیعت گذراندیم." }] },
      { word: "animal", meaning: "حیوان", en: "We saw many animals in the forest.", fa: "ما حیوانات زیادی در جنگل دیدیم.", icon: "🦁", examples: [{ en: "We saw many animals in the forest.", fa: "ما حیوانات زیادی در جنگل دیدیم." }, { en: "The animal ran into the forest.", fa: "حیوان به جنگل دوید." }, { en: "My favorite animal is the fox.", fa: "حیوان محبوب من روباه است." }] },
      { word: "sky", meaning: "آسمان", en: "The sky is very blue today.", fa: "آسمان امروز خیلی آبی است.", icon: "🌈", examples: [{ en: "The sky is very blue today.", fa: "آسمان امروز خیلی آبی است." }, { en: "The sky turned pink at sunset.", fa: "آسمان هنگام غروب صورتی شد." }, { en: "There is not a cloud in the sky.", fa: "در آسمان ابری نیست." }] },
      { word: "sand", meaning: "ماسه", en: "The sand on the beach is warm.", fa: "ماسه روی ساحل گرم است.", icon: "🏜️", examples: [{ en: "The sand on the beach is warm.", fa: "ماسه روی ساحل گرم است." }, { en: "The children played with sand.", fa: "بچه‌ها با ماسه بازی کردند." }, { en: "I have sand in my shoes.", fa: "در کفش‌هایم ماسه هست." }] },
      { word: "wave", meaning: "موج", en: "The waves in the sea are big.", fa: "موج‌های دریا بزرگ هستند.", icon: "🏄", examples: [{ en: "The waves in the sea are big.", fa: "موج‌های دریا بزرگ هستند." }, { en: "The wave was bigger than me.", fa: "موج از من بزرگ‌تر بود." }, { en: "Listen to the waves at night.", fa: "شب به صدای موج‌ها گوش بده." }] },
      { word: "fish", meaning: "ماهی", en: "I saw a fish in the river.", fa: "من در رودخانه ماهی دیدم.", icon: "🐟", examples: [{ en: "I saw a fish in the river.", fa: "من در رودخانه ماهی دیدم." }, { en: "The fish swam away quickly.", fa: "ماهی سریع دور شنا کرد." }, { en: "We caught two fish today.", fa: "ما امروز دو ماهی گرفتیم." }] },
      { word: "swim", meaning: "شنا", en: "We swim in the sea every day.", fa: "ما هر روز در دریا شنا می‌کنیم.", icon: "🏊", examples: [{ en: "We swim in the sea every day.", fa: "ما هر روز در دریا شنا می‌کنیم." }, { en: "She taught me to swim.", fa: "او به من شنا یاد داد." }, { en: "It is safe to swim here.", fa: "اینجا شنا امن است." }] },
      { word: "ocean", meaning: "اقیانوس", en: "The ocean is very deep.", fa: "اقیانوس خیلی عمیق است.", icon: "🐋", examples: [{ en: "The ocean is very deep.", fa: "اقیانوس خیلی عمیق است." }, { en: "We flew over the ocean.", fa: "ما از روی اقیانوس پرواز کردیم." }, { en: "The ocean water is salty.", fa: "آب اقیانوس شور است." }] },
      { word: "coast", meaning: "ساحل", en: "We drove along the coast.", fa: "ما در امتداد ساحل رانندگی کردیم.", icon: "🛥️", examples: [{ en: "We drove along the coast.", fa: "ما در امتداد ساحل رانندگی کردیم." }, { en: "The coast is famous for its waves.", fa: "ساحل به موج‌هایش معروف است." }, { en: "We live near the coast.", fa: "ما نزدیک ساحل زندگی می‌کنیم." }] },
      { word: "hill", meaning: "تپه", en: "The hill is green and small.", fa: "تپه سبز و کوچک است.", icon: "🗻", examples: [{ en: "The hill is green and small.", fa: "تپه سبز و کوچک است." }, { en: "We climbed the small hill.", fa: "ما از تپه کوچک بالا رفتیم." }, { en: "The house sits on a hill.", fa: "خانه روی یک تپه است." }] },
      { word: "valley", meaning: "دره", en: "The valley is between two mountains.", fa: "دره بین دو کوه است.", icon: "🏕️", examples: [{ en: "The valley is between two mountains.", fa: "دره بین دو کوه است." }, { en: "The valley is green in spring.", fa: "دره در بهار سبز است." }, { en: "A river runs through the valley.", fa: "یک رودخانه از میان دره می‌گذرد." }] },
      { word: "waterfall", meaning: "آبشار", en: "The waterfall is very tall.", fa: "آبشار خیلی بلند است.", icon: "💦", examples: [{ en: "The waterfall is very tall.", fa: "آبشار خیلی بلند است." }, { en: "We heard the waterfall from far.", fa: "صدای آبشار را از دور شنیدیم." }, { en: "The waterfall is beautiful in winter.", fa: "آبشار در زمستان زیباست." }] },
      { word: "sunny", meaning: "آفتابی", en: "It is sunny and warm today.", fa: "امروز آفتابی و گرم است.", icon: "🌞", examples: [{ en: "It is sunny and warm today.", fa: "امروز آفتابی و گرم است." }, { en: "We had a sunny day at the beach.", fa: "روزی آفتابی در ساحل داشتیم." }, { en: "I love sunny mornings.", fa: "من صبح‌های آفتابی را دوست دارم." }] }
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
      { word: "tea", meaning: "چای", en: "Would you like some tea?", fa: "چای میل داری؟", icon: "🍵", examples: [{ en: "Would you like some tea?", fa: "چای میل داری؟" }, { en: "The tea is too sweet for me.", fa: "چای برای من خیلی شیرین است." }, { en: "We drink tea after dinner.", fa: "ما بعد از شام چای می‌نوشیم." }] },
      { word: "soup", meaning: "سوپ", en: "The soup was very hot.", fa: "سوپ خیلی داغ بود.", icon: "🍲", examples: [{ en: "The soup was very hot.", fa: "سوپ خیلی داغ بود." }, { en: "This soup needs more salt.", fa: "این سوپ نمک بیشتری نیاز دارد." }, { en: "She made chicken soup.", fa: "او سوپ مرغ درست کرد." }] },
      { word: "cake", meaning: "کیک", en: "We made a cake for her birthday.", fa: "ما برای تولدش کیک درست کردیم.", icon: "🍰", examples: [{ en: "We made a cake for her birthday.", fa: "ما برای تولدش کیک درست کردیم." }, { en: "The cake has ten candles.", fa: "کیک ده شمع دارد." }, { en: "This cake tastes wonderful.", fa: "این کیک مزه فوق‌العاده‌ای دارد." }] },
      { word: "spoon", meaning: "قاشق", en: "I need a spoon for the soup.", fa: "برای سوپ به قاشق نیاز دارم.", icon: "🥄", examples: [{ en: "I need a spoon for the soup.", fa: "برای سوپ به قاشق نیاز دارم." }, { en: "He ate the soup with a spoon.", fa: "او سوپ را با قاشق خورد." }, { en: "This spoon is made of wood.", fa: "این قاشق از چوب ساخته شده است." }] },
      { word: "fork", meaning: "چنگال", en: "Please pass me the fork.", fa: "لطفاً چنگال را به من بده.", icon: "🍴", examples: [{ en: "Please pass me the fork.", fa: "لطفاً چنگال را به من بده." }, { en: "She eats salad with a fork.", fa: "او سالاد را با چنگال می‌خورد." }, { en: "The fork fell on the floor.", fa: "چنگال روی زمین افتاد." }] },
      { word: "plate", meaning: "بشقاب", en: "Put the food on the plate.", fa: "غذا را در بشقاب بگذار.", icon: "🥘", examples: [{ en: "Put the food on the plate.", fa: "غذا را در بشقاب بگذار." }, { en: "She washed all the plates.", fa: "او همه بشقاب‌ها را شست." }, { en: "The plate is too hot to touch.", fa: "بشقاب آن‌قدر داغ است که نمی‌شود دست زد." }] },
      { word: "bill", meaning: "صورت‌حساب", en: "Can we have the bill, please?", fa: "می‌شود صورت‌حساب را بیاورید؟", icon: "🧾", examples: [{ en: "Can we have the bill, please?", fa: "می‌شود صورت‌حساب را بیاورید؟" }, { en: "The bill is fifty dollars.", fa: "صورت‌حساب پنجاه دلار است." }, { en: "He paid the bill with cash.", fa: "او صورت‌حساب را نقدی پرداخت کرد." }] },
      { word: "delicious", meaning: "خوشمزه", en: "This food is delicious.", fa: "این غذا خوشمزه است.", icon: "😋", examples: [{ en: "This food is delicious.", fa: "این غذا خوشمزه است." }, { en: "The soup smells delicious.", fa: "سوپ بوی خوشمزه‌ای می‌دهد." }, { en: "Your cookies are delicious.", fa: "کوکی‌هایت خوشمزه هستند." }] },
      { word: "hungry", meaning: "گرسنه", en: "I am very hungry now.", fa: "من الان خیلی گرسنه‌ام.", icon: "🤤", examples: [{ en: "I am very hungry now.", fa: "من الان خیلی گرسنه‌ام." }, { en: "The kids are always hungry.", fa: "بچه‌ها همیشه گرسنه هستند." }, { en: "Are you hungry? Let's eat.", fa: "گرسنه‌ای؟ بزن بریم غذا بخوریم." }] },
      { word: "thirsty", meaning: "تشنه", en: "I am thirsty, can I have some water?", fa: "من تشنه‌ام، می‌شود کمی آب داشته باشم؟", icon: "🥤", examples: [{ en: "I am thirsty, can I have some water?", fa: "من تشنه‌ام، می‌شود کمی آب داشته باشم؟" }, { en: "I get thirsty after running.", fa: "بعد از دویدن تشنه می‌شوم." }, { en: "She was thirsty after work.", fa: "او بعد از کار تشنه بود." }] },
      { word: "cheese", meaning: "پنیر", en: "I like cheese on my bread.", fa: "من نان با پنیر دوست دارم.", icon: "🧀", examples: [{ en: "I like cheese on my bread.", fa: "من نان با پنیر دوست دارم." }, { en: "This cheese is from France.", fa: "این پنیر از فرانسه است." }, { en: "Add some cheese to the salad.", fa: "کمی پنیر به سالاد اضافه کن." }] },
      { word: "butter", meaning: "کره", en: "She spreads butter on toast.", fa: "او کره روی نان تست می‌مالد.", icon: "🧈", examples: [{ en: "She spreads butter on toast.", fa: "او کره روی نان تست می‌مالد." }, { en: "The butter is too hard.", fa: "کره خیلی سفت است." }, { en: "We need butter for the cake.", fa: "برای کیک کره لازم داریم." }] },
      { word: "chicken", meaning: "مرغ", en: "We had chicken for dinner.", fa: "ما شام مرغ خوردیم.", icon: "🍗", examples: [{ en: "We had chicken for dinner.", fa: "ما شام مرغ خوردیم." }, { en: "The chicken smells great.", fa: "مرغ بوی عالی می‌دهد." }, { en: "She grilled the chicken outside.", fa: "او مرغ را بیرون کباب کرد." }] },
      { word: "shrimp", meaning: "میگو", en: "The shrimp is very fresh.", fa: "میگو خیلی تازه است.", icon: "🍤", examples: [{ en: "The shrimp is very fresh.", fa: "میگو خیلی تازه است." }, { en: "I tried shrimp for the first time.", fa: "برای اولین بار میگو امتحان کردم." }, { en: "The shrimp pasta is famous here.", fa: "پاستای میگوی اینجا معروف است." }] },
      { word: "salad", meaning: "سالاد", en: "I eat salad every day.", fa: "من هر روز سالاد می‌خورم.", icon: "🥗", examples: [{ en: "I eat salad every day.", fa: "من هر روز سالاد می‌خورم." }, { en: "This salad has five vegetables.", fa: "این سالاد پنج سبزی دارد." }, { en: "She made a salad for lunch.", fa: "او برای ناهار سالاد درست کرد." }] },
      { word: "pizza", meaning: "پیتزا", en: "Let's order a pizza.", fa: "بیا پیتزا سفارش بدهیم.", icon: "🍕", examples: [{ en: "Let's order a pizza.", fa: "بیا پیتزا سفارش بدهیم." }, { en: "The pizza arrived hot.", fa: "پیتزا داغ رسید." }, { en: "We shared a large pizza.", fa: "ما یک پیتزای بزرگ را تقسیم کردیم." }] },
      { word: "sandwich", meaning: "ساندویچ", en: "He made a sandwich for lunch.", fa: "او برای ناهار ساندویچ درست کرد.", icon: "🥪", examples: [{ en: "He made a sandwich for lunch.", fa: "او برای ناهار ساندویچ درست کرد." }, { en: "This sandwich has cheese and tomato.", fa: "این ساندویچ پنیر و گوجه‌فرنگی دارد." }, { en: "She packed a sandwich for work.", fa: "او برای سر کار یک ساندویچ برداشت." }] },
      { word: "snack", meaning: "میان‌وعده", en: "I want a small snack.", fa: "من یک میان‌وعده‌ی کوچک می‌خوام.", icon: "🍿", examples: [{ en: "I want a small snack.", fa: "من یک میان‌وعده‌ی کوچک می‌خوام." }, { en: "What snack do you want?", fa: "چه میان‌وعده‌ای می‌خواهی؟" }, { en: "He eats a snack at four.", fa: "او ساعت چهار یک میان‌وعده می‌خورد." }] },
      { word: "dessert", meaning: "دسر", en: "What's for dessert tonight?", fa: "امشب دسر چیست؟", icon: "🍦", examples: [{ en: "What's for dessert tonight?", fa: "امشب دسر چیست؟" }, { en: "The dessert looks beautiful.", fa: "دسر قشنگ به نظر می‌رسد." }, { en: "We ordered dessert after dinner.", fa: "بعد از شام دسر سفارش دادیم." }] },
      { word: "chocolate", meaning: "شکلات", en: "She loves dark chocolate.", fa: "او شکلات تلخ را دوست دارد.", icon: "🍫", examples: [{ en: "She loves dark chocolate.", fa: "او شکلات تلخ را دوست دارد." }, { en: "This chocolate is from Switzerland.", fa: "این شکلات از سوئیس است." }, { en: "He gave her a box of chocolate.", fa: "او به او یک جعبه شکلات داد." }] },
      { word: "cookie", meaning: "کوکی", en: "My mom bakes cookies.", fa: "مامانم کوکی می‌پزد.", icon: "🍪", examples: [{ en: "My mom bakes cookies.", fa: "مامانم کوکی می‌پزد." }, { en: "The cookie is still warm.", fa: "کوکی هنوز گرم است." }, { en: "She ate two cookies with milk.", fa: "او دو کوکی با شیر خورد." }] },
      { word: "honey", meaning: "عسل", en: "Honey is very sweet.", fa: "عسل خیلی شیرین است.", icon: "🍯", examples: [{ en: "Honey is very sweet.", fa: "عسل خیلی شیرین است." }, { en: "I put honey in my tea.", fa: "من در چای‌ام عسل می‌ریزم." }, { en: "This honey is from the mountains.", fa: "این عسل از کوهستان است." }] },
      { word: "jam", meaning: "مربا", en: "I put jam on my bread.", fa: "من مربا روی نانم می‌گذارم.", icon: "🍊", examples: [{ en: "I put jam on my bread.", fa: "من مربا روی نانم می‌گذارم." }, { en: "The jam is homemade.", fa: "مربا خانگی است." }, { en: "She made strawberry jam.", fa: "او مربای توت‌فرنگی درست کرد." }] },
      { word: "yogurt", meaning: "ماست", en: "I eat yogurt for breakfast.", fa: "من صبحانه ماست می‌خورم.", icon: "🥛", examples: [{ en: "I eat yogurt for breakfast.", fa: "من صبحانه ماست می‌خورم." }, { en: "The yogurt is cold and fresh.", fa: "ماست سرد و تازه است." }, { en: "She adds fruit to her yogurt.", fa: "او به ماستش میوه اضافه می‌کند." }] },
      { word: "lemon", meaning: "لیمو", en: "The lemon is very sour.", fa: "لیمو خیلی ترش است.", icon: "🍋", examples: [{ en: "The lemon is very sour.", fa: "لیمو خیلی ترش است." }, { en: "Add a little lemon to the tea.", fa: "کمی لیمو به چای اضافه کن." }, { en: "She squeezed the lemon.", fa: "او لیمو را آب گرفت." }] },
      { word: "onion", meaning: "پیاز", en: "He cuts the onion.", fa: "او پیاز را برش می‌کند.", icon: "🧅", examples: [{ en: "He cuts the onion.", fa: "او پیاز را برش می‌کند." }, { en: "The onion made me cry.", fa: "پیاز مرا به گریه انداخت." }, { en: "Fry the onion first.", fa: "اول پیاز را سرخ کن." }] },
      { word: "tomato", meaning: "گوجه‌فرنگی", en: "Tomatoes are red.", fa: "گوجه‌فرنگی قرمز است.", icon: "🍅", examples: [{ en: "Tomatoes are red.", fa: "گوجه‌فرنگی قرمز است." }, { en: "This tomato is from our garden.", fa: "این گوجه‌فرنگی از باغچه ماست." }, { en: "She sliced the tomato for the salad.", fa: "او گوجه‌فرنگی را برای سالاد ورقه کرد." }] },
      { word: "potato", meaning: "سیب‌زمینی", en: "I like fried potatoes.", fa: "من سیب‌زمینی سرخ‌کرده دوست دارم.", icon: "🥔", examples: [{ en: "I like fried potatoes.", fa: "من سیب‌زمینی سرخ‌کرده دوست دارم." }, { en: "The potato is still hot.", fa: "سیب‌زمینی هنوز داغ است." }, { en: "We planted potatoes this year.", fa: "امسال سیب‌زمینی کاشتیم." }] },
      { word: "carrot", meaning: "هویج", en: "Rabbits eat carrots.", fa: "خرگوش‌ها هویج می‌خورند.", icon: "🥕", examples: [{ en: "Rabbits eat carrots.", fa: "خرگوش‌ها هویج می‌خورند." }, { en: "The carrot is good for your eyes.", fa: "هویج برای چشم‌هایت خوب است." }, { en: "She grated the carrot.", fa: "او هویج را رنده کرد." }] },
      { word: "pepper", meaning: "فلفل", en: "Add some pepper to the soup.", fa: "کمی فلفل به سوپ اضافه کن.", icon: "🌶️", examples: [{ en: "Add some pepper to the soup.", fa: "کمی فلفل به سوپ اضافه کن." }, { en: "This pepper is very hot.", fa: "این فلفل خیلی تند است." }, { en: "The soup needs more pepper.", fa: "سوپ فلفل بیشتری نیاز دارد." }] },
      { word: "corn", meaning: "ذرت", en: "Corn is yellow and sweet.", fa: "ذرت زرد و شیرین است.", icon: "🌽", examples: [{ en: "Corn is yellow and sweet.", fa: "ذرت زرد و شیرین است." }, { en: "The corn is ready to eat.", fa: "ذرت آماده خوردن است." }, { en: "We bought corn at the market.", fa: "ما از بازار ذرت خریدیم." }] },
      { word: "flour", meaning: "آرد", en: "We need flour to make bread.", fa: "ما برای نان پختن آرد نیاز داریم.", icon: "🌾", examples: [{ en: "We need flour to make bread.", fa: "ما برای نان پختن آرد نیاز داریم." }, { en: "The flour is in the big jar.", fa: "آرد در شیشه بزرگ است." }, { en: "She bought a bag of flour.", fa: "او یک کیسه آرد خرید." }] },
      { word: "noodle", meaning: "رشته", en: "I eat noodle soup when I'm sick.", fa: "وقتی مریضم سوپ رشته می‌خورم.", icon: "🍜", examples: [{ en: "I eat noodle soup when I'm sick.", fa: "وقتی مریضم سوپ رشته می‌خورم." }, { en: "The noodles are ready in five minutes.", fa: "رشته‌ها پنج دقیقه دیگر آماده است." }, { en: "Add the noodles to the soup.", fa: "رشته‌ها را به سوپ اضافه کن." }] },
      { word: "pancake", meaning: "پنکیک", en: "She makes pancakes on Sundays.", fa: "او یکشنبه‌ها پنکیک درست می‌کند.", icon: "🥞", examples: [{ en: "She makes pancakes on Sundays.", fa: "او یکشنبه‌ها پنکیک درست می‌کند." }, { en: "I put honey on my pancake.", fa: "روی پنکیکم عسل می‌ریزم." }, { en: "The pancakes smell wonderful.", fa: "پنکیک‌ها بوی فوق‌العاده‌ای می‌دهند." }] },
      { word: "pie", meaning: "پای", en: "My favorite pie is apple pie.", fa: "پای مورد علاقه‌ام پای سیب است.", icon: "🥧", examples: [{ en: "My favorite pie is apple pie.", fa: "پای مورد علاقه‌ام پای سیب است." }, { en: "The pie is in the oven.", fa: "پای در فر است." }, { en: "We ate pie with tea.", fa: "ما پای را با چای خوردیم." }] },
      { word: "biscuit", meaning: "بیسکویت", en: "I dip my biscuit in tea.", fa: "من بیسکویتم را در چای فرو می‌کنم.", icon: "🍘", examples: [{ en: "I dip my biscuit in tea.", fa: "من بیسکویتم را در چای فرو می‌کنم." }, { en: "The biscuits are in the tin.", fa: "بیسکویت‌ها در قوطی هستند." }, { en: "She gave me a biscuit.", fa: "او به من یک بیسکویت داد." }] },
      { word: "candy", meaning: "آبنبات", en: "The kids love candy.", fa: "بچه‌ها آبنبات دوست دارند.", icon: "🍬", examples: [{ en: "The kids love candy.", fa: "بچه‌ها آبنبات دوست دارند." }, { en: "Too much candy is bad for you.", fa: "آبنبات زیاد برایت بد است." }, { en: "She keeps candy in her bag.", fa: "او در کیفش آبنبات نگه می‌دارد." }] },
      { word: "nut", meaning: "آجیل", en: "Nuts are healthy snacks.", fa: "آجیل میان‌وعده‌های سالمی است.", icon: "🥜", examples: [{ en: "Nuts are healthy snacks.", fa: "آجیل میان‌وعده‌های سالمی است." }, { en: "I eat nuts every morning.", fa: "من هر صبح آجیل می‌خورم." }, { en: "This cake has nuts in it.", fa: "این کیک آجیل دارد." }] },
      { word: "grape", meaning: "انگور", en: "These grapes are very sweet.", fa: "این انگورها خیلی شیرین هستند.", icon: "🍇", examples: [{ en: "These grapes are very sweet.", fa: "این انگورها خیلی شیرین هستند." }, { en: "I washed the grapes.", fa: "من انگورها را شستم." }, { en: "She put grapes on the table.", fa: "او انگور را روی میز گذاشت." }] },
      { word: "cherry", meaning: "گیلاس", en: "The cherries are ripe.", fa: "گیلاس‌ها رسیده‌اند.", icon: "🍒", examples: [{ en: "The cherries are ripe.", fa: "گیلاس‌ها رسیده‌اند." }, { en: "The cherry on the cake is red.", fa: "گیلاس روی کیک قرمز است." }, { en: "I ate a sweet cherry.", fa: "من یک گیلاس شیرین خوردم." }] },
      { word: "strawberry", meaning: "توت‌فرنگی", en: "Strawberries are my favorite fruit.", fa: "توت‌فرنگی میوه‌ی مورد علاقه‌ام است.", icon: "🍓", examples: [{ en: "Strawberries are my favorite fruit.", fa: "توت‌فرنگی میوه‌ی مورد علاقه‌ام است." }, { en: "The strawberries smell sweet.", fa: "توت‌فرنگی‌ها بوی شیرینی می‌دهند." }, { en: "She put a strawberry on the cake.", fa: "او یک توت‌فرنگی روی کیک گذاشت." }] },
      { word: "peach", meaning: "هلو", en: "The peach is soft and juicy.", fa: "هلو نرم و آبدار است.", icon: "🍑", examples: [{ en: "The peach is soft and juicy.", fa: "هلو نرم و آبدار است." }, { en: "I ate a peach after lunch.", fa: "بعد از ناهار یک هلو خوردم." }, { en: "The peaches are from our tree.", fa: "هلوها از درخت ماست." }] },
      { word: "pear", meaning: "گلابی", en: "She eats a green pear.", fa: "او یک گلابی سبز می‌خورد.", icon: "🍐", examples: [{ en: "She eats a green pear.", fa: "او یک گلابی سبز می‌خورد." }, { en: "The pear is soft and sweet.", fa: "گلابی نرم و شیرین است." }, { en: "He picked a pear from the tree.", fa: "او یک گلابی از درخت چید." }] },
      { word: "melon", meaning: "خربزه", en: "The melon is sweet inside.", fa: "خربزه از داخل شیرین است.", icon: "🍈", examples: [{ en: "The melon is sweet inside.", fa: "خربزه از داخل شیرین است." }, { en: "Cut the melon into pieces.", fa: "خربزه را تکه‌تکه کن." }, { en: "We ate melon in the afternoon.", fa: "بعدازظهر خربزه خوردیم." }] },
      { word: "watermelon", meaning: "هندوانه", en: "Watermelon is good in summer.", fa: "هندوانه در تابستان خوب است.", icon: "🍉", examples: [{ en: "Watermelon is good in summer.", fa: "هندوانه در تابستان خوب است." }, { en: "The watermelon is very heavy.", fa: "هندوانه خیلی سنگین است." }, { en: "She cut the watermelon in half.", fa: "او هندوانه را نصف کرد." }] },
      { word: "pineapple", meaning: "آناناس", en: "Pineapple grows in warm places.", fa: "آناناس در جاهای گرم رشد می‌کند.", icon: "🍍", examples: [{ en: "Pineapple grows in warm places.", fa: "آناناس در جاهای گرم رشد می‌کند." }, { en: "The pineapple juice is cold.", fa: "آب‌آناناس سرد است." }, { en: "I like pineapple on pizza.", fa: "من آناناس روی پیتزا دوست دارم." }] },
      { word: "coconut", meaning: "نارگیل", en: "The coconut has water inside.", fa: "نارگیل از داخل آب دارد.", icon: "🥥", examples: [{ en: "The coconut has water inside.", fa: "نارگیل از داخل آب دارد." }, { en: "She opened the coconut carefully.", fa: "او نارگیل را با احتیاط باز کرد." }, { en: "Coconut milk is sweet.", fa: "شیر نارگیل شیرین است." }] },
      { word: "kiwi", meaning: "کیوی", en: "Kiwi is a small green fruit.", fa: "کیوی یک میوه‌ی سبز کوچک است.", icon: "🥝", examples: [{ en: "Kiwi is a small green fruit.", fa: "کیوی یک میوه‌ی سبز کوچک است." }, { en: "The kiwi is soft and ready.", fa: "کیوی نرم و رسیده است." }, { en: "I eat kiwi with a spoon.", fa: "من کیوی را با قاشق می‌خورم." }] },
      { word: "avocado", meaning: "آووکادو", en: "Avocado is good for you.", fa: "آووکادو برای شما خوب است.", icon: "🥑", examples: [{ en: "Avocado is good for you.", fa: "آووکادو برای شما خوب است." }, { en: "She made avocado toast.", fa: "او تست آووکادو درست کرد." }, { en: "The avocado is ripe today.", fa: "آووکادو امروز رسیده است." }] },
      { word: "broccoli", meaning: "کلم بروکلی", en: "Broccoli is a green vegetable.", fa: "کلم بروکلی یک سبزی سبز است.", icon: "🥦", examples: [{ en: "Broccoli is a green vegetable.", fa: "کلم بروکلی یک سبزی سبز است." }, { en: "Steam the broccoli for five minutes.", fa: "کلم بروکلی را پنج دقیقه بخار بده." }, { en: "Kids often hate broccoli.", fa: "بچه‌ها اغلب از کلم بروکلی متنفرند." }] },
      { word: "cucumber", meaning: "خیار", en: "I put cucumber in my salad.", fa: "من خیار در سالادم می‌گذارم.", icon: "🥒", examples: [{ en: "I put cucumber in my salad.", fa: "من خیار در سالادم می‌گذارم." }, { en: "The cucumber is cold and crisp.", fa: "خیار سرد و ترد است." }, { en: "She sliced the cucumber thin.", fa: "او خیار را نازک ورقه کرد." }] },
      { word: "pumpkin", meaning: "کدو", en: "We made a pumpkin pie.", fa: "ما پای کدو درست کردیم.", icon: "🎃", examples: [{ en: "We made a pumpkin pie.", fa: "ما پای کدو درست کردیم." }, { en: "The pumpkin is orange and big.", fa: "کدو نارنجی و بزرگ است." }, { en: "We made soup from the pumpkin.", fa: "از کدو سوپ درست کردیم." }] },
      { word: "mushroom", meaning: "قارچ", en: "I don't like mushrooms.", fa: "من قارچ دوست ندارم.", icon: "🍄", examples: [{ en: "I don't like mushrooms.", fa: "من قارچ دوست ندارم." }, { en: "The mushrooms are fresh today.", fa: "قارچ‌ها امروز تازه هستند." }, { en: "She put mushrooms on the pizza.", fa: "او روی پیتزا قارچ گذاشت." }] },
      { word: "garlic", meaning: "سیر", en: "Garlic has a strong smell.", fa: "سیر بوی تندی دارد.", icon: "🧄", examples: [{ en: "Garlic has a strong smell.", fa: "سیر بوی تندی دارد." }, { en: "Add two cloves of garlic.", fa: "دو حبه سیر اضافه کن." }, { en: "The garlic is in the kitchen drawer.", fa: "سیر در کشوی آشپزخانه است." }] },
      { word: "ginger", meaning: "زنجبیل", en: "Ginger tea is good for a cold.", fa: "چای زنجبیل برای سرماخوردگی خوب است.", icon: "🌱", examples: [{ en: "Ginger tea is good for a cold.", fa: "چای زنجبیل برای سرماخوردگی خوب است." }, { en: "Fresh ginger is very spicy.", fa: "زنجبیل تازه خیلی تند است." }, { en: "She put ginger in the soup.", fa: "او در سوپ زنجبیل گذاشت." }] },
      { word: "cream", meaning: "خامه", en: "I want cream in my coffee.", fa: "من در قهوه‌ام خامه می‌خوام.", icon: "🍶", examples: [{ en: "I want cream in my coffee.", fa: "من در قهوه‌ام خامه می‌خوام." }, { en: "The cake has too much cream.", fa: "کیک خامه زیادی دارد." }, { en: "She whipped the cream herself.", fa: "او خامه را خودش زد." }] },
      { word: "ice", meaning: "یخ", en: "Put ice in my drink.", fa: "در نوشیدنی‌ام یخ بگذار.", icon: "🧊", examples: [{ en: "Put ice in my drink.", fa: "در نوشیدنی‌ام یخ بگذار." }, { en: "The ice melted quickly.", fa: "یخ سریع آب شد." }, { en: "She put ice in the juice.", fa: "او در آب‌میوه یخ گذاشت." }] },
      { word: "cold", meaning: "سرد", en: "The soup is not cold.", fa: "سوپ سرد نیست.", icon: "🌡️", examples: [{ en: "The soup is not cold.", fa: "سوپ سرد نیست." }, { en: "I like my milk cold.", fa: "من شیرم را سرد دوست دارم." }, { en: "The drink is cold enough.", fa: "نوشیدنی به اندازه کافی سرد است." }] },
      { word: "hot", meaning: "داغ", en: "Be careful, the food is hot.", fa: "مراقب باش، غذا داغ است.", icon: "🔥", examples: [{ en: "Be careful, the food is hot.", fa: "مراقب باش، غذا داغ است." }, { en: "The tea is too hot to drink.", fa: "چای آن‌قدر داغ است که نمی‌شود نوشید." }, { en: "Serve the soup hot.", fa: "سوپ را داغ سرو کن." }] },
      { word: "sweet", meaning: "شیرین", en: "This cake is very sweet.", fa: "این کیک خیلی شیرین است.", icon: "🍭", examples: [{ en: "This cake is very sweet.", fa: "این کیک خیلی شیرین است." }, { en: "The melon is sweet and soft.", fa: "خربزه شیرین و نرم است." }, { en: "I do not like sweet coffee.", fa: "من قهوه شیرین دوست ندارم." }] },
      { word: "sour", meaning: "ترش", en: "The lemon tastes sour.", fa: "لیمو ترش مزه می‌دهد.", icon: "😖", examples: [{ en: "The lemon tastes sour.", fa: "لیمو ترش مزه می‌دهد." }, { en: "This yogurt is a little sour.", fa: "این ماست کمی ترش است." }, { en: "The cherries taste sour.", fa: "گیلاس‌ها ترش مزه می‌دهند." }] },
      { word: "spicy", meaning: "تند", en: "I like spicy food.", fa: "من غذا تند دوست دارم.", icon: "😤", examples: [{ en: "I like spicy food.", fa: "من غذا تند دوست دارم." }, { en: "This sauce is very spicy.", fa: "این سس خیلی تند است." }, { en: "She made spicy chicken.", fa: "او مرغ تند درست کرد." }] },
      { word: "bitter", meaning: "تلخ", en: "Black coffee is bitter.", fa: "قهوه‌ی تلخ سیاه است.", icon: "😷", examples: [{ en: "Black coffee is bitter.", fa: "قهوه‌ی تلخ سیاه است." }, { en: "The medicine tastes bitter.", fa: "دارو تلخ مزه می‌دهد." }, { en: "I do not like bitter tea.", fa: "من چای تلخ دوست ندارم." }] },
      { word: "fresh", meaning: "تازه", en: "The bread is still fresh.", fa: "نان هنوز تازه است.", icon: "🌿", examples: [{ en: "The bread is still fresh.", fa: "نان هنوز تازه است." }, { en: "The vegetables are fresh from the farm.", fa: "سبزیجات تازه از مزرعه هستند." }, { en: "I want fresh orange juice.", fa: "آب‌پرتقال تازه می‌خواهم." }] },
      { word: "raw", meaning: "خام", en: "You can't eat raw meat.", fa: "نمی‌توانی گوشت خام بخوری.", icon: "🥬", examples: [{ en: "You can't eat raw meat.", fa: "نمی‌توانی گوشت خام بخوری." }, { en: "She washed the raw vegetables.", fa: "او سبزیجات خام را شست." }, { en: "I prefer raw carrots.", fa: "من هویج خام ترجیح می‌دهم." }] },
      { word: "boiled", meaning: "آب‌پز", en: "I like boiled eggs.", fa: "من تخم‌مرغ آب‌پز دوست دارم.", icon: "♨️", examples: [{ en: "I like boiled eggs.", fa: "من تخم‌مرغ آب‌پز دوست دارم." }, { en: "The boiled potatoes are soft.", fa: "سیب‌زمینی‌های آب‌پز نرم هستند." }, { en: "She made boiled rice.", fa: "او برنج آب‌پز درست کرد." }] },
      { word: "fried", meaning: "سرخ‌کرده", en: "Fried chicken is delicious.", fa: "مرغ سرخ‌کرده خوشمزه است.", icon: "🍳", examples: [{ en: "Fried chicken is delicious.", fa: "مرغ سرخ‌کرده خوشمزه است." }, { en: "The fried potatoes are crispy.", fa: "سیب‌زمینی‌های سرخ‌کرده ترد هستند." }, { en: "I like fried eggs for breakfast.", fa: "من برای صبحانه تخم‌مرغ سرخ‌کرده دوست دارم." }] },
      { word: "baked", meaning: "پخته", en: "She baked fresh bread.", fa: "او نان تازه پخت.", icon: "🥖", examples: [{ en: "She baked fresh bread.", fa: "او نان تازه پخت." }, { en: "The baked potatoes smell great.", fa: "سیب‌زمینی‌های پخته بوی عالی می‌دهند." }, { en: "She baked a cake yesterday.", fa: "او دیروز یک کیک پخت." }] },
      { word: "grill", meaning: "کباب", en: "We grill meat outside.", fa: "ما بیرون کباب می‌کنیم.", icon: "🍢", examples: [{ en: "We grill meat outside.", fa: "ما بیرون کباب می‌کنیم." }, { en: "The grill is hot now.", fa: "گریل (منقل) الان داغ است." }, { en: "Dad grills chicken every Friday.", fa: "بابا هر جمعه مرغ کباب می‌کند." }] },
      { word: "recipe", meaning: "دستور پخت", en: "This recipe is very easy.", fa: "این دستور پخت خیلی آسان است.", icon: "📖", examples: [{ en: "This recipe is very easy.", fa: "این دستور پخت خیلی آسان است." }, { en: "She follows the recipe exactly.", fa: "او دقیقاً از دستور پخت پیروی می‌کند." }, { en: "I found a recipe online.", fa: "من آنلاین یک دستور پخت پیدا کردم." }] },
      { word: "ingredient", meaning: "مواد اولیه", en: "We need five ingredients.", fa: "ما به پنج ماده‌ی اولیه نیاز داریم.", icon: "🧺", examples: [{ en: "We need five ingredients.", fa: "ما به پنج ماده‌ی اولیه نیاز داریم." }, { en: "Salt is the main ingredient here.", fa: "نمک ماده اصلی اینجاست." }, { en: "Read the ingredients first.", fa: "اول مواد اولیه را بخوان." }] },
      { word: "taste", meaning: "مزه", en: "The taste is amazing.", fa: "مزه‌اش شگفت‌انگیز است.", icon: "👅", examples: [{ en: "The taste is amazing.", fa: "مزه‌اش شگفت‌انگیز است." }, { en: "I love the taste of fresh bread.", fa: "من عاشق مزه نان تازه هستم." }, { en: "The soup has a strange taste.", fa: "سوپ مزه عجیبی دارد." }] },
      { word: "smell", meaning: "بویایی", en: "The smell of coffee is nice.", fa: "بوی قهوه خوب است.", icon: "👃", examples: [{ en: "The smell of coffee is nice.", fa: "بوی قهوه خوب است." }, { en: "The smell of bread fills the kitchen.", fa: "بوی نان آشپزخانه را پر کرده است." }, { en: "This fish has a strong smell.", fa: "این ماهی بوی تندی دارد." }] },
      { word: "bite", meaning: "گاز گرفتن", en: "Take a small bite first.", fa: "اول یک گاز کوچک بزن.", icon: "🦷", examples: [{ en: "Take a small bite first.", fa: "اول یک گاز کوچک بزن." }, { en: "He took a big bite of the burger.", fa: "او یک گاز بزرگ از برگر گرفت." }, { en: "Every bite tastes better.", fa: "هر گاز مزه بهتری دارد." }] },
      { word: "chew", meaning: "جویدن", en: "Chew your food slowly.", fa: "غذایت را آرام بجو.", icon: "😬", examples: [{ en: "Chew your food slowly.", fa: "غذایت را آرام بجو." }, { en: "Chew well before you swallow.", fa: "قبل از قورت دادن خوب بجو." }, { en: "The meat is hard to chew.", fa: "گوشت سخت جویده می‌شود." }] },
      { word: "swallow", meaning: "قورت دادن", en: "Swallow the pill with water.", fa: "قرص را با آب قورت بده.", icon: "💧", examples: [{ en: "Swallow the pill with water.", fa: "قرص را با آب قورت بده." }, { en: "Do not swallow too fast.", fa: "خیلی سریع قورت نده." }, { en: "He swallowed the water quickly.", fa: "او آب را سریع قورت داد." }] },
      { word: "sip", meaning: "جرعه نوشیدن", en: "She sips her tea slowly.", fa: "او چایش را آرام جرعه می‌نوشد.", icon: "🥃", examples: [{ en: "She sips her tea slowly.", fa: "او چایش را آرام جرعه می‌نوشد." }, { en: "Take a small sip first.", fa: "اول یک جرعه کوچک بکش." }, { en: "He sipped his coffee quietly.", fa: "او قهوه‌اش را به‌آرامی جرعه کشید." }] },
      { word: "cook", meaning: "آشپزی کردن", en: "I cook dinner every night.", fa: "من هر شب شام می‌پزم.", icon: "👨‍🍳", examples: [{ en: "I cook dinner every night.", fa: "من هر شب شام می‌پزم." }, { en: "She learned to cook from her mom.", fa: "او آشپزی را از مادرش یاد گرفت." }, { en: "We cook together on Fridays.", fa: "ما جمعه‌ها با هم آشپزی می‌کنیم." }] },
      { word: "chef", meaning: "سرآشپز", en: "The chef makes great food.", fa: "سرآشپز غذای عالی درست می‌کند.", icon: "👩‍🍳", examples: [{ en: "The chef makes great food.", fa: "سرآشپز غذای عالی درست می‌کند." }, { en: "The chef worked in Paris.", fa: "سرآشپز در پاریس کار کرده است." }, { en: "Ask the chef for the recipe.", fa: "از سرآشپز دستور پخت را بخواه." }] },
      { word: "bottle", meaning: "بطری", en: "The bottle is full of water.", fa: "بطری پر از آب است.", icon: "🍼", examples: [{ en: "The bottle is full of water.", fa: "بطری پر از آب است." }, { en: "She drank from the bottle.", fa: "او از بطری نوشید." }, { en: "Bring two bottles of water.", fa: "دو بطری آب بیاور." }] },
      { word: "bowl", meaning: "کاسه", en: "Put the soup in a bowl.", fa: "سوپ را در کاسه بگذار.", icon: "🥣", examples: [{ en: "Put the soup in a bowl.", fa: "سوپ را در کاسه بگذار." }, { en: "She filled the bowl with salad.", fa: "او کاسه را با سالاد پر کرد." }, { en: "The bowl is too small for soup.", fa: "کاسه برای سوپ خیلی کوچک است." }] },
      { word: "napkin", meaning: "دستمال سفره", en: "I need a napkin please.", fa: "من یک دستمال سفره لطفاً می‌خوام.", icon: "🧻", examples: [{ en: "I need a napkin please.", fa: "من یک دستمال سفره لطفاً می‌خوام." }, { en: "There are napkins on the table.", fa: "دستمال سفره روی میز هست." }, { en: "She folded the napkin nicely.", fa: "او دستمال سفره را قشنگ تا کرد." }] },
      { word: "herb", meaning: "سبزی", en: "Fresh herbs make food better.", fa: "سبزی تازه غذا را بهتر می‌کند.", icon: "🍃", examples: [{ en: "Fresh herbs make food better.", fa: "سبزی تازه غذا را بهتر می‌کند." }, { en: "She grows herbs on the balcony.", fa: "او در بالکن سبزی پرورش می‌دهد." }, { en: "Add fresh herbs at the end.", fa: "در آخر سبزی تازه اضافه کن." }] },
      { word: "bean", meaning: "لوبیا", en: "Beans are good for you.", fa: "لوبیا برای شما خوب است.", icon: "🥫", examples: [{ en: "Beans are good for you.", fa: "لوبیا برای شما خوب است." }, { en: "The beans need more time to cook.", fa: "لوبیا به زمان بیشتری برای پخت نیاز دارد." }, { en: "She made bean soup.", fa: "او سوپ لوبیا درست کرد." }] },
      { word: "sausage", meaning: "سوسیس", en: "I had a sausage for breakfast.", fa: "من صبحانه سوسیس خوردم.", icon: "🌭", examples: [{ en: "I had a sausage for breakfast.", fa: "من صبحانه سوسیس خوردم." }, { en: "The sausages are on the grill.", fa: "سوسیس‌ها روی گریل هستند." }, { en: "He bought sausages from the store.", fa: "او از مغازه سوسیس خرید." }] },
      { word: "bacon", meaning: "بیکن", en: "He likes bacon and eggs.", fa: "او بیکن و تخم‌مرغ دوست دارد.", icon: "🥓", examples: [{ en: "He likes bacon and eggs.", fa: "او بیکن و تخم‌مرغ دوست دارد." }, { en: "The bacon smells smoky.", fa: "بیکن بوی دودی می‌دهد." }, { en: "She cooked bacon for breakfast.", fa: "او برای صبحانه بیکن پخت." }] },
      { word: "burger", meaning: "برگر", en: "The burger is very big.", fa: "برگر خیلی بزرگ است.", icon: "🍔", examples: [{ en: "The burger is very big.", fa: "برگر خیلی بزرگ است." }, { en: "She made burgers at home.", fa: "او در خانه برگر درست کرد." }, { en: "The burger comes with fries.", fa: "برگر با سیب‌زمینی سرخ‌کرده سرو می‌شود." }] },
      { word: "fries", meaning: "سیب‌زمینی سرخ‌کرده", en: "I want fries with that.", fa: "من با آن سیب‌زمینی سرخ‌کرده می‌خوام.", icon: "🍟", examples: [{ en: "I want fries with that.", fa: "من با آن سیب‌زمینی سرخ‌کرده می‌خوام." }, { en: "The fries are still hot.", fa: "سیب‌زمینی‌های سرخ‌کرده هنوز داغ هستند." }, { en: "Kids always order fries.", fa: "بچه‌ها همیشه سیب‌زمینی سرخ‌کرده سفارش می‌دهند." }] },
      { word: "taco", meaning: "تاکو", en: "Tacos are from Mexico.", fa: "تاکو از مکزیک است.", icon: "🌮", examples: [{ en: "Tacos are from Mexico.", fa: "تاکو از مکزیک است." }, { en: "I ate three tacos for lunch.", fa: "برای ناهار سه تاکو خوردم." }, { en: "The taco has beef and cheese.", fa: "تاکو گوشت گاو و پنیر دارد." }] },
      { word: "burrito", meaning: "بوریتو", en: "The burrito has beans and rice.", fa: "بوریتو لوبیا و برنج دارد.", icon: "🌯", examples: [{ en: "The burrito has beans and rice.", fa: "بوریتو لوبیا و برنج دارد." }, { en: "She ordered a chicken burrito.", fa: "او یک بوریتوی مرغ سفارش داد." }, { en: "The burrito is very filling.", fa: "بوریتو خیلی سیرکننده است." }] },
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
      { word: "call", meaning: "تماس", en: "I need to make a phone call.", fa: "من باید یک تماس تلفنی بگیرم.", icon: "📞", examples: [{ en: "I need to make a phone call.", fa: "من باید یک تماس تلفنی بگیرم." }, { en: "The call lasted ten minutes.", fa: "تماس ده دقیقه طول کشید." }, { en: "I missed your call, sorry.", fa: "تماست را از دست دادم، ببخشید." }] },
      { word: "salary", meaning: "حقوق", en: "He gets his salary every month.", fa: "او هر ماه حقوقش را می‌گیرد.", icon: "💵", examples: [{ en: "He gets his salary every month.", fa: "او هر ماه حقوقش را می‌گیرد." }, { en: "The salary goes to my bank account.", fa: "حقوق به حساب بانکی‌ام می‌رود." }, { en: "She is happy with her salary.", fa: "او از حقوقش راضی است." }] },
      { word: "schedule", meaning: "برنامه", en: "Check your schedule for tomorrow.", fa: "برنامه‌ی فردایت را بررسی کن.", icon: "🗓️", examples: [{ en: "Check your schedule for tomorrow.", fa: "برنامه‌ی فردایت را بررسی کن." }, { en: "My schedule is full this week.", fa: "برنامه‌ام این هفته پر است." }, { en: "The schedule changed today.", fa: "برنامه امروز عوض شد." }] },
      { word: "deadline", meaning: "مهلت", en: "The deadline is next Friday.", fa: "مهلت تا جمعه آینده است.", icon: "⏳", examples: [{ en: "The deadline is next Friday.", fa: "مهلت تا جمعه آینده است." }, { en: "We must finish before the deadline.", fa: "ما باید قبل از مهلت تمام کنیم." }, { en: "The deadline makes me nervous.", fa: "مهلت من را نگران می‌کند." }] },
      { word: "project", meaning: "پروژه", en: "We finished the project on time.", fa: "ما پروژه را به‌موقع تمام کردیم.", icon: "📊", examples: [{ en: "We finished the project on time.", fa: "ما پروژه را به‌موقع تمام کردیم." }, { en: "This project needs two more weeks.", fa: "این پروژه به دو هفته دیگر نیاز دارد." }, { en: "She leads the new project.", fa: "او پروژه جدید را رهبری می‌کند." }] },
      { word: "document", meaning: "سند", en: "Please sign this document.", fa: "لطفاً این سند را امضا کن.", icon: "📄", examples: [{ en: "Please sign this document.", fa: "لطفاً این سند را امضا کن." }, { en: "The document is on your desk.", fa: "سند روی میزت است." }, { en: "Read the document carefully.", fa: "سند را با دقت بخوان." }] },
      { word: "interview", meaning: "مصاحبه", en: "She has a job interview tomorrow.", fa: "او فردا مصاحبه‌ی شغلی دارد.", icon: "📝", examples: [{ en: "She has a job interview tomorrow.", fa: "او فردا مصاحبه‌ی شغلی دارد." }, { en: "The interview went very well.", fa: "مصاحبه خیلی خوب پیش رفت." }, { en: "He prepared for the interview all week.", fa: "او تمام هفته برای مصاحبه آماده شد." }] },
      { word: "contract", meaning: "قرارداد", en: "They signed the contract yesterday.", fa: "آنها دیروز قرارداد را امضا کردند.", icon: "✍️", examples: [{ en: "They signed the contract yesterday.", fa: "آنها دیروز قرارداد را امضا کردند." }, { en: "The contract is for one year.", fa: "قرارداد برای یک سال است." }, { en: "Read the contract before you sign.", fa: "قبل از امضا قرارداد را بخوان." }] },
      { word: "break", meaning: "استراحت", en: "Let's take a short break.", fa: "بیایید یک استراحت کوتاه بکنیم.", icon: "☕", examples: [{ en: "Let's take a short break.", fa: "بیایید یک استراحت کوتاه بکنیم." }, { en: "I drink tea on my break.", fa: "من در استراحت چای می‌نوشم." }, { en: "The break is only fifteen minutes.", fa: "استراحت فقط پانزده دقیقه است." }] },
      { word: "team", meaning: "تیم", en: "Our team works very well together.", fa: "تیم ما خیلی خوب با هم کار می‌کند.", icon: "🤝", examples: [{ en: "Our team works very well together.", fa: "تیم ما خیلی خوب با هم کار می‌کند." }, { en: "Our team won the award.", fa: "تیم ما جایزه را برد." }, { en: "She joined the team last year.", fa: "او سال پیش به تیم پیوست." }] },
      { word: "promotion", meaning: "ارتقا", en: "He got a promotion last month.", fa: "او ماه گذشته ترفیع گرفت.", icon: "📈", examples: [{ en: "He got a promotion last month.", fa: "او ماه گذشته ترفیع گرفت." }, { en: "The promotion made him happy.", fa: "ارتقا او را خوشحال کرد." }, { en: "She worked hard for the promotion.", fa: "او برای ارتقا سخت کار کرد." }] },
      { word: "computer", meaning: "کامپیوتر", en: "I use a computer at work.", fa: "من در محل کار از کامپیوتر استفاده می‌کنم.", icon: "🖥️", examples: [{ en: "I use a computer at work.", fa: "من در محل کار از کامپیوتر استفاده می‌کنم." }, { en: "The computer needs an update.", fa: "کامپیوتر به به‌روزرسانی نیاز دارد." }, { en: "He works on the computer all day.", fa: "او تمام روز با کامپیوتر کار می‌کند." }] },
      { word: "phone", meaning: "تلفن", en: "My phone is on the desk.", fa: "تلفن من روی میز است.", icon: "📱", examples: [{ en: "My phone is on the desk.", fa: "تلفن من روی میز است." }, { en: "The phone rang twice.", fa: "تلفن دو بار زنگ زد." }, { en: "Put your phone on silent in meetings.", fa: "در جلسه‌ها تلفنت را بی‌صدا کن." }] },
      { word: "paper", meaning: "کاغذ", en: "I need more paper for the printer.", fa: "من برای پرینتر کاغذ بیشتری لازم دارم.", icon: "📃", examples: [{ en: "I need more paper for the printer.", fa: "من برای پرینتر کاغذ بیشتری لازم دارم." }, { en: "The paper is next to the printer.", fa: "کاغذ کنار پرینتر است." }, { en: "Write your name on the paper.", fa: "اسمت را روی کاغذ بنویس." }] },
      { word: "pen", meaning: "خودکار", en: "Can I borrow your pen?", fa: "می‌توانم خودکارت را قرض بگیرم؟", icon: "🖊️", examples: [{ en: "Can I borrow your pen?", fa: "می‌توانم خودکارت را قرض بگیرم؟" }, { en: "The pen writes smoothly.", fa: "این خودکار روان می‌نویسد." }, { en: "She keeps a pen in her bag.", fa: "او در کیفش یک خودکار نگه می‌دارد." }] },
      { word: "pencil", meaning: "مداد", en: "I write with a pencil.", fa: "من با مداد می‌نویسم.", icon: "✏️", examples: [{ en: "I write with a pencil.", fa: "من با مداد می‌نویسم." }, { en: "The pencil needs a sharpener.", fa: "مداد به تراش نیاز دارد." }, { en: "Draw it with a pencil first.", fa: "اول آن را با مداد بکش." }] },
      { word: "folder", meaning: "پوشه", en: "Put the papers in the folder.", fa: "کاغذها را داخل پوشه بگذار.", icon: "📁", examples: [{ en: "Put the papers in the folder.", fa: "کاغذها را داخل پوشه بگذار." }, { en: "The blue folder has the contracts.", fa: "پوشه آبی قراردادها را دارد." }, { en: "She labeled the folder carefully.", fa: "او پوشه را با دقت برچسب زد." }] },
      { word: "file", meaning: "پرونده", en: "She opened the file on her computer.", fa: "او پرونده را روی کامپیوترش باز کرد.", icon: "🗃️", examples: [{ en: "She opened the file on her computer.", fa: "او پرونده را روی کامپیوترش باز کرد." }, { en: "The file is too big to send.", fa: "پرونده (فایل) برای فرستادن خیلی بزرگ است." }, { en: "Save the file before closing.", fa: "قبل از بستن فایل را ذخیره کن." }] },
      { word: "chair", meaning: "صندلی", en: "This chair is very comfortable.", fa: "این صندلی خیلی راحت است.", icon: "🪑", examples: [{ en: "This chair is very comfortable.", fa: "این صندلی خیلی راحت است." }, { en: "The office chair spins around.", fa: "صندلی اداره می‌چرخد." }, { en: "He sat on the chair all day.", fa: "او تمام روز روی صندلی نشست." }] },
      { word: "table", meaning: "میز", en: "We sat around the table.", fa: "ما دور میز نشستیم.", icon: "🍽️", examples: [{ en: "We sat around the table.", fa: "ما دور میز نشستیم." }, { en: "The meeting table is round.", fa: "میز جلسه گرد است." }, { en: "Put the files on the table.", fa: "پرونده‌ها را روی میز بگذار." }] },
      { word: "window", meaning: "پنجره", en: "Please open the window.", fa: "لطفاً پنجره را باز کن.", icon: "🪟", examples: [{ en: "Please open the window.", fa: "لطفاً پنجره را باز کن." }, { en: "The window faces the street.", fa: "پنجره رو به خیابان است." }, { en: "Rain hit the window all day.", fa: "باران تمام روز به پنجره زد." }] },
      { word: "door", meaning: "در", en: "Close the door, please.", fa: "لطفاً در را ببند.", icon: "🚪", examples: [{ en: "Close the door, please.", fa: "لطفاً در را ببند." }, { en: "The door was locked.", fa: "در قفل بود." }, { en: "Knock on the door first.", fa: "اول در را بزن." }] },
      { word: "building", meaning: "ساختمان", en: "Our office is in a tall building.", fa: "دفتر ما در یک ساختمان بلند است.", icon: "🏙️", examples: [{ en: "Our office is in a tall building.", fa: "دفتر ما در یک ساختمان بلند است." }, { en: "The building has twenty floors.", fa: "ساختمان بیست طبقه دارد." }, { en: "They work in the same building.", fa: "آن‌ها در یک ساختمان کار می‌کنند." }] },
      { word: "company", meaning: "شرکت", en: "I work for a big company.", fa: "من برای یک شرکت بزرگ کار می‌کنم.", icon: "🏬", examples: [{ en: "I work for a big company.", fa: "من برای یک شرکت بزرگ کار می‌کنم." }, { en: "The company has fifty workers.", fa: "شرکت پنجاه کارگر دارد." }, { en: "She started her own company.", fa: "او شرکت خودش را راه انداخت." }] },
      { word: "business", meaning: "کسب‌وکار", en: "She has her own business.", fa: "او کسب‌وکار خودش را دارد.", icon: "💰", examples: [{ en: "She has her own business.", fa: "او کسب‌وکار خودش را دارد." }, { en: "Business is slow this month.", fa: "کسب‌وکار این ماه کند است." }, { en: "He wants to grow his business.", fa: "او می‌خواهد کسب‌وکارش را بزرگ کند." }] },
      { word: "manager", meaning: "مدیر", en: "The manager is in a meeting.", fa: "مدیر در جلسه است.", icon: "🧑‍💼", examples: [{ en: "The manager is in a meeting.", fa: "مدیر در جلسه است." }, { en: "The manager approved my vacation.", fa: "مدیر مرخصی‌ام را تأیید کرد." }, { en: "Talk to your manager first.", fa: "اول با مدیرت صحبت کن." }] },
      { word: "employee", meaning: "کارمند", en: "Every employee has a badge.", fa: "هر کارمندی یک کارت شناسایی دارد.", icon: "👩‍💻", examples: [{ en: "Every employee has a badge.", fa: "هر کارمندی یک کارت شناسایی دارد." }, { en: "The new employee started today.", fa: "کارمند جدید امروز شروع کرد." }, { en: "Every employee gets a laptop.", fa: "هر کارمند یک لپ‌تاپ می‌گیرد." }] },
      { word: "employer", meaning: "کارفرما", en: "My employer pays a good salary.", fa: "کارفرمای من حقوق خوبی می‌دهد.", icon: "🤵", examples: [{ en: "My employer pays a good salary.", fa: "کارفرمای من حقوق خوبی می‌دهد." }, { en: "The employer offers free lunch.", fa: "کارفرما ناهار رایگان می‌دهد." }, { en: "A good employer listens to workers.", fa: "یک کارفرمای خوب به کارگران گوش می‌دهد." }] },
      { word: "customer", meaning: "مشتری", en: "The customer is waiting outside.", fa: "مشتری بیرون منتظر است.", icon: "🙋", examples: [{ en: "The customer is waiting outside.", fa: "مشتری بیرون منتظر است." }, { en: "The customer asked for a refund.", fa: "مشتری درخواست بازپرداخت کرد." }, { en: "Be polite to every customer.", fa: "به هر مشتری مؤدب باش." }] },
      { word: "client", meaning: "مشتری", en: "We have a new client this week.", fa: "ما این هفته یک مشتری جدید داریم.", icon: "👤", examples: [{ en: "We have a new client this week.", fa: "ما این هفته یک مشتری جدید داریم." }, { en: "The client liked our presentation.", fa: "مشتری از ارائه ما خوشش آمد." }, { en: "We call our clients every week.", fa: "ما هر هفته به مشتریانمان زنگ می‌زنیم." }] },
      { word: "staff", meaning: "کارکنان", en: "All staff must wear an ID card.", fa: "همه کارکنان باید کارت شناسایی داشته باشند.", icon: "👥", examples: [{ en: "All staff must wear an ID card.", fa: "همه کارکنان باید کارت شناسایی داشته باشند." }, { en: "The staff meets every Monday.", fa: "کارکنان هر دوشنبه جلسه دارند." }, { en: "Our staff is very friendly.", fa: "کارکنان ما خیلی صمیمی هستند." }] },
      { word: "worker", meaning: "کارگر", en: "The workers start at 8 AM.", fa: "کارگران ساعت ۸ صبح شروع می‌کنند.", icon: "👷", examples: [{ en: "The workers start at 8 AM.", fa: "کارگران ساعت ۸ صبح شروع می‌کنند." }, { en: "Each worker has a desk.", fa: "هر کارگر یک میز دارد." }, { en: "The workers finished early today.", fa: "کارگران امروز زود تمام کردند." }] },
      { word: "task", meaning: "وظیفه", en: "I have three tasks to finish today.", fa: "من امروز سه وظیفه دارم که باید تمام کنم.", icon: "✅", examples: [{ en: "I have three tasks to finish today.", fa: "من امروز سه وظیفه دارم که باید تمام کنم." }, { en: "Finish this task by noon.", fa: "این وظیفه را تا ظهر تمام کن." }, { en: "The task was easier than I thought.", fa: "وظیفه از آنچه فکر می‌کردم آسان‌تر بود." }] },
      { word: "report", meaning: "گزارش", en: "Please write a report about the project.", fa: "لطفاً درباره پروژه یک گزارش بنویس.", icon: "📊", examples: [{ en: "Please write a report about the project.", fa: "لطفاً درباره پروژه یک گزارش بنویس." }, { en: "The report is ten pages long.", fa: "گزارش ده صفحه است." }, { en: "She sent the report yesterday.", fa: "او گزارش را دیروز فرستاد." }] },
      { word: "plan", meaning: "برنامه", en: "We need a new plan for next month.", fa: "ما برای ماه آینده به یک برنامه جدید نیاز داریم.", icon: "🗺️", examples: [{ en: "We need a new plan for next month.", fa: "ما برای ماه آینده به یک برنامه جدید نیاز داریم." }, { en: "The plan worked perfectly.", fa: "برنامه کاملاً خوب جواب داد." }, { en: "Tell me about your plan.", fa: "درباره برنامه‌ات به من بگو." }] },
      { word: "idea", meaning: "ایده", en: "That's a great idea!", fa: "این ایده عالی‌ای است!", icon: "💡", examples: [{ en: "That's a great idea!", fa: "این ایده عالی‌ای است!" }, { en: "She shared her idea with the team.", fa: "او ایده‌اش را با تیم در میان گذاشت." }, { en: "I like your idea a lot.", fa: "من ایده‌ات را خیلی دوست دارم." }] },
      { word: "problem", meaning: "مشکل", en: "We found a problem with the schedule.", fa: "ما یک مشکل در برنامه پیدا کردیم.", icon: "❗", examples: [{ en: "We found a problem with the schedule.", fa: "ما یک مشکل در برنامه پیدا کردیم." }, { en: "We solved the problem together.", fa: "ما مشکل را با هم حل کردیم." }, { en: "Tell me about the problem.", fa: "درباره مشکل به من بگو." }] },
      { word: "solution", meaning: "راه‌حل", en: "He found a good solution.", fa: "او یک راه‌حل خوب پیدا کرد.", icon: "🧩", examples: [{ en: "He found a good solution.", fa: "او یک راه‌حل خوب پیدا کرد." }, { en: "The solution was simple.", fa: "راه‌حل ساده بود." }, { en: "We need a solution by Friday.", fa: "ما تا جمعه به یک راه‌حل نیاز داریم." }] },
      { word: "decision", meaning: "تصمیم", en: "The manager made a fast decision.", fa: "مدیر یک تصمیم سریع گرفت.", icon: "⚖️", examples: [{ en: "The manager made a fast decision.", fa: "مدیر یک تصمیم سریع گرفت." }, { en: "The decision was hard to make.", fa: "تصمیم گرفتن سخت بود." }, { en: "I agree with your decision.", fa: "من با تصمیم تو موافقم." }] },
      { word: "answer", meaning: "پاسخ", en: "I don't know the answer.", fa: "من پاسخ را نمی‌دانم.", icon: "💬", examples: [{ en: "I don't know the answer.", fa: "من پاسخ را نمی‌دانم." }, { en: "Her answer was correct.", fa: "پاسخ او درست بود." }, { en: "Nobody knew the answer.", fa: "هیچ‌کس پاسخ را نمی‌دانست." }] },
      { word: "question", meaning: "سؤال", en: "Do you have a question?", fa: "سؤالی داری؟", icon: "❓", examples: [{ en: "Do you have a question?", fa: "سؤالی داری؟" }, { en: "He asked a good question.", fa: "او یک سؤال خوب پرسید." }, { en: "The question was easy.", fa: "سؤال آسان بود." }] },
      { word: "message", meaning: "پیام", en: "I got a message from my boss.", fa: "من از رئیسم پیامی دریافت کردم.", icon: "✉️", examples: [{ en: "I got a message from my boss.", fa: "من از رئیسم پیامی دریافت کردم." }, { en: "She sent me a short message.", fa: "او برایم یک پیام کوتاه فرستاد." }, { en: "Did you read my message?", fa: "پیامم را خواندی؟" }] },
      { word: "letter", meaning: "نامه", en: "She wrote a letter to the manager.", fa: "او به مدیر نامه‌ای نوشت.", icon: "💌", examples: [{ en: "She wrote a letter to the manager.", fa: "او به مدیر نامه‌ای نوشت." }, { en: "The letter has good news.", fa: "نامه خبرهای خوبی دارد." }, { en: "He mailed the letter today.", fa: "او امروز نامه را پست کرد." }] },
      { word: "envelope", meaning: "پاکت‌نامه", en: "Put the letter in the envelope.", fa: "نامه را داخل پاکت بگذار.", icon: "📩", examples: [{ en: "Put the letter in the envelope.", fa: "نامه را داخل پاکت بگذار." }, { en: "The envelope is white.", fa: "پاکت‌نامه سفید است." }, { en: "She wrote the address on the envelope.", fa: "او آدرس را روی پاکت‌نامه نوشت." }] },
      { word: "address", meaning: "آدرس", en: "What is the office address?", fa: "آدرس دفتر چیست؟", icon: "🏠", examples: [{ en: "What is the office address?", fa: "آدرس دفتر چیست؟" }, { en: "Send it to my work address.", fa: "آن را به آدرس محل کارم بفرست." }, { en: "I wrote down his address.", fa: "من آدرس او را یادداشت کردم." }] },
      { word: "copy", meaning: "کپی", en: "Can you make a copy of this?", fa: "می‌توانی از این یک کپی بگیری؟", icon: "📋", examples: [{ en: "Can you make a copy of this?", fa: "می‌توانی از این یک کپی بگیری؟" }, { en: "The copy is not clear.", fa: "کپی واضح نیست." }, { en: "She made three copies of the report.", fa: "او از گزارش سه کپی گرفت." }] },
      { word: "scanner", meaning: "اسکنر", en: "The scanner is next to the printer.", fa: "اسکنر کنار پرینتر است.", icon: "🖨️", examples: [{ en: "The scanner is next to the printer.", fa: "اسکنر کنار پرینتر است." }, { en: "The scanner is broken today.", fa: "اسکنر امروز خراب است." }, { en: "Use the scanner for this document.", fa: "برای این سند از اسکنر استفاده کن." }] },
      { word: "keyboard", meaning: "صفحه‌کلید", en: "My keyboard is not working.", fa: "صفحه‌کلید من کار نمی‌کند.", icon: "⌨️", examples: [{ en: "My keyboard is not working.", fa: "صفحه‌کلید من کار نمی‌کند." }, { en: "The keyboard is new and fast.", fa: "صفحه‌کلید نو و سریع است." }, { en: "She types fast on the keyboard.", fa: "او روی صفحه‌کلید سریع تایپ می‌کند." }] },
      { word: "mouse", meaning: "ماوس", en: "The mouse is under the desk.", fa: "ماوس زیر میز است.", icon: "🖱️", examples: [{ en: "The mouse is under the desk.", fa: "ماوس زیر میز است." }, { en: "The mouse stopped working.", fa: "ماوس از کار افتاد." }, { en: "Click the mouse twice.", fa: "دو بار با ماوس کلیک کن." }] },
      { word: "screen", meaning: "صفحه‌نمایش", en: "The screen is too small.", fa: "صفحه‌نمایش خیلی کوچک است.", icon: "🖥️", examples: [{ en: "The screen is too small.", fa: "صفحه‌نمایش خیلی کوچک است." }, { en: "The screen shows the report.", fa: "صفحه‌نمایش گزارش را نشان می‌دهد." }, { en: "Do not touch the screen.", fa: "به صفحه‌نمایش دست نزن." }] },
      { word: "internet", meaning: "اینترنت", en: "The internet is very slow today.", fa: "اینترنت امروز خیلی کند است.", icon: "🌐", examples: [{ en: "The internet is very slow today.", fa: "اینترنت امروز خیلی کند است." }, { en: "We need internet for the meeting.", fa: "برای جلسه به اینترنت نیاز داریم." }, { en: "The internet is fast here.", fa: "اینترنت اینجا سریع است." }] },
      { word: "password", meaning: "رمز عبور", en: "I forgot my password.", fa: "رمز عبورم را فراموش کردم.", icon: "🔑", examples: [{ en: "I forgot my password.", fa: "رمز عبورم را فراموش کردم." }, { en: "Change your password every month.", fa: "رمز عبورت را هر ماه عوض کن." }, { en: "The password is too short.", fa: "رمز عبور خیلی کوتاه است." }] },
      { word: "cabinet", meaning: "کمد", en: "The files are in the cabinet.", fa: "پرونده‌ها داخل کمد هستند.", icon: "🗄️", examples: [{ en: "The files are in the cabinet.", fa: "پرونده‌ها داخل کمد هستند." }, { en: "The cabinet is locked.", fa: "کمد قفل است." }, { en: "Put the folders in the cabinet.", fa: "پوشه‌ها را در کمد بگذار." }] },
      { word: "stapler", meaning: "منگنه", en: "Can I use your stapler?", fa: "می‌توانم از منگنه‌ات استفاده کنم؟", icon: "🗜️", examples: [{ en: "Can I use your stapler?", fa: "می‌توانم از منگنه‌ات استفاده کنم؟" }, { en: "The stapler is on my desk.", fa: "منگنه روی میزم است." }, { en: "She stapled the papers together.", fa: "او کاغذها را با منگنه به هم دوخت." }] },
      { word: "clip", meaning: "گیره کاغذ", en: "Use a clip for these papers.", fa: "برای این کاغذها از یک گیره استفاده کن.", icon: "📎", examples: [{ en: "Use a clip for these papers.", fa: "برای این کاغذها از یک گیره استفاده کن." }, { en: "The clip holds the papers.", fa: "گیره کاغذها را نگه می‌دارد." }, { en: "I need a bigger clip.", fa: "به یک گیره بزرگ‌تر نیاز دارم." }] },
      { word: "calendar", meaning: "تقویم", en: "Check the calendar for the meeting date.", fa: "برای تاریخ جلسه تقویم را چک کن.", icon: "📅", examples: [{ en: "Check the calendar for the meeting date.", fa: "برای تاریخ جلسه تقویم را چک کن." }, { en: "The calendar shows the holidays.", fa: "تقویم تعطیلات را نشان می‌دهد." }, { en: "Mark the date on the calendar.", fa: "تاریخ را روی تقویم علامت بزن." }] },
      { word: "clock", meaning: "ساعت", en: "The clock on the wall is broken.", fa: "ساعت روی دیوار خراب است.", icon: "🕐", examples: [{ en: "The clock on the wall is broken.", fa: "ساعت روی دیوار خراب است." }, { en: "The clock says three fifteen.", fa: "ساعت سه و ربع را نشان می‌دهد." }, { en: "A new clock hangs in the office.", fa: "یک ساعت جدید در اداره آویزان است." }] },
      { word: "time", meaning: "زمان", en: "We don't have much time.", fa: "ما زمان زیادی نداریم.", icon: "⏰", examples: [{ en: "We don't have much time.", fa: "ما زمان زیادی نداریم." }, { en: "Time flies at work.", fa: "زمان سر کار می‌گذرد." }, { en: "What time is the meeting?", fa: "جلسه چه ساعتی است؟" }] },
      { word: "morning", meaning: "صبح", en: "I check my email every morning.", fa: "من هر روز صبح ایمیلم را چک می‌کنم.", icon: "🌅", examples: [{ en: "I check my email every morning.", fa: "من هر روز صبح ایمیلم را چک می‌کنم." }, { en: "The office is quiet in the morning.", fa: "اداره صبح‌ها ساکت است." }, { en: "I arrive early every morning.", fa: "من هر صبح زود می‌رسم." }] },
      { word: "afternoon", meaning: "بعدازظهر", en: "The meeting is in the afternoon.", fa: "جلسه بعدازظهر است.", icon: "🌇", examples: [{ en: "The meeting is in the afternoon.", fa: "جلسه بعدازظهر است." }, { en: "We drink coffee in the afternoon.", fa: "بعدازظهر قهوه می‌نوشیم." }, { en: "The afternoon is very busy.", fa: "بعدازظهر خیلی شلوغ است." }] },
      { word: "lunch", meaning: "ناهار", en: "Let's have lunch together.", fa: "بیایید با هم ناهار بخوریم.", icon: "🍱", examples: [{ en: "Let's have lunch together.", fa: "بیایید با هم ناهار بخوریم." }, { en: "Lunch is at twelve thirty.", fa: "ناهار ساعت دوازده و نیم است." }, { en: "She eats lunch at her desk.", fa: "او سر میزش ناهار می‌خورد." }] },
      { word: "coffee", meaning: "قهوه", en: "I need a cup of coffee.", fa: "من به یک فنجان قهوه نیاز دارم.", icon: "☕", examples: [{ en: "I need a cup of coffee.", fa: "من به یک فنجان قهوه نیاز دارم." }, { en: "The office coffee is strong.", fa: "قهوه اداره قوی است." }, { en: "We talked over coffee.", fa: "ما سر قهوه صحبت کردیم." }] },
      { word: "tea", meaning: "چای", en: "Would you like some tea?", fa: "چای میل داری؟", icon: "🍵", examples: [{ en: "Would you like some tea?", fa: "چای میل داری؟" }, { en: "She drinks green tea at work.", fa: "او سر کار چای سبز می‌نوشد." }, { en: "Make some tea for the guests.", fa: "برای مهمان‌ها چای درست کن." }] },
      { word: "week", meaning: "هفته", en: "I work five days a week.", fa: "من پنج روز در هفته کار می‌کنم.", icon: "📆", examples: [{ en: "I work five days a week.", fa: "من پنج روز در هفته کار می‌کنم." }, { en: "The week starts on Saturday here.", fa: "هفته اینجا شنبه شروع می‌شود." }, { en: "Next week is very busy.", fa: "هفته بعد خیلی شلوغ است." }] },
      { word: "month", meaning: "ماه", en: "The report is due next month.", fa: "گزارش باید ماه آینده تحویل داده شود.", icon: "🌙", examples: [{ en: "The report is due next month.", fa: "گزارش باید ماه آینده تحویل داده شود." }, { en: "This month has thirty days.", fa: "این ماه سی روز دارد." }, { en: "She gets paid every month.", fa: "او هر ماه حقوق می‌گیرد." }] },
      { word: "year", meaning: "سال", en: "She has worked here for one year.", fa: "او یک سال است اینجا کار می‌کند.", icon: "📆", examples: [{ en: "She has worked here for one year.", fa: "او یک سال است اینجا کار می‌کند." }, { en: "The company is ten years old.", fa: "شرکت ده ساله است." }, { en: "Happy New Year to the team!", fa: "سال نو مبارک تیم!" }] },
      { word: "holiday", meaning: "تعطیلات", en: "The office is closed on holidays.", fa: "دفتر در تعطیلات بسته است.", icon: "🏖️", examples: [{ en: "The office is closed on holidays.", fa: "دفتر در تعطیلات بسته است." }, { en: "We get two holidays this month.", fa: "این ماه دو روز تعطیل داریم." }, { en: "She plans a trip for the holiday.", fa: "او برای تعطیلات سفر برنامه‌ریزی می‌کند." }] },
      { word: "vacation", meaning: "مرخصی", en: "I'm going on vacation next week.", fa: "من هفته آینده به مرخصی می‌روم.", icon: "✈️", examples: [{ en: "I'm going on vacation next week.", fa: "من هفته آینده به مرخصی می‌روم." }, { en: "My vacation is in August.", fa: "مرخصی من در اوت است." }, { en: "He needs a long vacation.", fa: "او به یک مرخصی طولانی نیاز دارد." }] },
      { word: "overtime", meaning: "اضافه‌کاری", en: "He worked overtime yesterday.", fa: "او دیروز اضافه‌کاری کرد.", icon: "🕰️", examples: [{ en: "He worked overtime yesterday.", fa: "او دیروز اضافه‌کاری کرد." }, { en: "The overtime pays extra.", fa: "اضافه‌کاری اضافه پرداخت می‌شود." }, { en: "She does overtime on Fridays.", fa: "او جمعه‌ها اضافه‌کاری می‌کند." }] },
      { word: "bonus", meaning: "پاداش", en: "We got a bonus this year.", fa: "ما امسال پاداش گرفتیم.", icon: "🎁", examples: [{ en: "We got a bonus this year.", fa: "ما امسال پاداش گرفتیم." }, { en: "The bonus was a nice surprise.", fa: "پاداش یک سورپرایز قشنگ بود." }, { en: "He saved his bonus.", fa: "او پاداشش را پس‌انداز کرد." }] },
      { word: "raise", meaning: "افزایش حقوق", en: "She asked for a raise.", fa: "او درخواست افزایش حقوق کرد.", icon: "💲", examples: [{ en: "She asked for a raise.", fa: "او درخواست افزایش حقوق کرد." }, { en: "The raise starts next month.", fa: "افزایش حقوق از ماه بعد شروع می‌شود." }, { en: "He got a raise for his hard work.", fa: "او برای کار سختش افزایش حقوق گرفت." }] },
      { word: "training", meaning: "آموزش", en: "New employees need training.", fa: "کارمندان جدید به آموزش نیاز دارند.", icon: "🎓", examples: [{ en: "New employees need training.", fa: "کارمندان جدید به آموزش نیاز دارند." }, { en: "The training lasts two weeks.", fa: "آموزش دو هفته طول می‌کشد." }, { en: "I learned a lot in training.", fa: "در آموزش چیزهای زیادی یاد گرفتم." }] },
      { word: "skill", meaning: "مهارت", en: "Communication is an important skill.", fa: "ارتباط یک مهارت مهم است.", icon: "🛠️", examples: [{ en: "Communication is an important skill.", fa: "ارتباط یک مهارت مهم است." }, { en: "Typing is a useful skill.", fa: "تایپ کردن مهارت کاربردی است." }, { en: "She improves her skills every year.", fa: "او هر سال مهارت‌هایش را بهبود می‌دهد." }] },
      { word: "experience", meaning: "تجربه", en: "He has five years of experience.", fa: "او پنج سال تجربه دارد.", icon: "⭐", examples: [{ en: "He has five years of experience.", fa: "او پنج سال تجربه دارد." }, { en: "This job needs no experience.", fa: "این شغل تجربه نیاز ندارد." }, { en: "Tell me about your experience.", fa: "درباره تجربه‌ات به من بگو." }] },
      { word: "resume", meaning: "رزومه", en: "Send your resume by email.", fa: "رزومه‌ات را با ایمیل بفرست.", icon: "📜", examples: [{ en: "Send your resume by email.", fa: "رزومه‌ات را با ایمیل بفرست." }, { en: "Her resume looks professional.", fa: "رزومه‌اش حرفه‌ای به نظر می‌رسد." }, { en: "Update your resume regularly.", fa: "رزومه‌ات را مرتب به‌روز کن." }] },
      { word: "application", meaning: "درخواست", en: "I sent my job application yesterday.", fa: "من دیروز درخواست شغلی‌ام را فرستادم.", icon: "📥", examples: [{ en: "I sent my job application yesterday.", fa: "من دیروز درخواست شغلی‌ام را فرستادم." }, { en: "The application was accepted.", fa: "درخواست پذیرفته شد." }, { en: "Fill out the application online.", fa: "درخواست را آنلاین پر کن." }] },
      { word: "position", meaning: "سمت شغلی", en: "This position is open now.", fa: "این سمت شغلی الان خالی است.", icon: "🎯", examples: [{ en: "This position is open now.", fa: "این سمت شغلی الان خالی است." }, { en: "She got the manager position.", fa: "او سمت مدیر را گرفت." }, { en: "This position needs experience.", fa: "این سمت به تجربه نیاز دارد." }] },
      { word: "department", meaning: "بخش", en: "She works in the sales department.", fa: "او در بخش فروش کار می‌کند.", icon: "🏷️", examples: [{ en: "She works in the sales department.", fa: "او در بخش فروش کار می‌کند." }, { en: "Our department has ten people.", fa: "بخش ما ده نفر دارد." }, { en: "Which department do you work in?", fa: "تو در کدام بخش کار می‌کنی؟" }] },
      { word: "floor", meaning: "طبقه", en: "Our office is on the third floor.", fa: "دفتر ما در طبقه سوم است.", icon: "🏢", examples: [{ en: "Our office is on the third floor.", fa: "دفتر ما در طبقه سوم است." }, { en: "The meeting is on the fifth floor.", fa: "جلسه در طبقه پنجم است." }, { en: "This floor is very quiet.", fa: "این طبقه خیلی ساکت است." }] },
      { word: "elevator", meaning: "آسانسور", en: "Let's take the elevator.", fa: "بیایید با آسانسور برویم.", icon: "🛗", examples: [{ en: "Let's take the elevator.", fa: "بیایید با آسانسور برویم." }, { en: "The elevator is fast.", fa: "آسانسور سریع است." }, { en: "She waits for the elevator.", fa: "او منتظر آسانسور است." }] },
      { word: "lobby", meaning: "لابی", en: "Wait for me in the lobby.", fa: "در لابی منتظرم بمان.", icon: "🛎️", examples: [{ en: "Wait for me in the lobby.", fa: "در لابی منتظرم بمان." }, { en: "The lobby has new chairs.", fa: "لابی صندلی‌های جدید دارد." }, { en: "Meet me in the lobby at six.", fa: "ساعت شش در لابی بهت می‌رسم." }] },
      { word: "receptionist", meaning: "منشی", en: "The receptionist answered the phone.", fa: "منشی به تلفن جواب داد.", icon: "👩‍💼", examples: [{ en: "The receptionist answered the phone.", fa: "منشی به تلفن جواب داد." }, { en: "The receptionist greets everyone.", fa: "منشی به همه خوش‌آمد می‌گوید." }, { en: "Ask the receptionist for the key.", fa: "از منشی کلید را بخواه." }] },
      { word: "assistant", meaning: "دستیار", en: "I need an assistant for this project.", fa: "من برای این پروژه به یک دستیار نیاز دارم.", icon: "🙋‍♀️", examples: [{ en: "I need an assistant for this project.", fa: "من برای این پروژه به یک دستیار نیاز دارم." }, { en: "The assistant answers all emails.", fa: "دستیار به همه ایمیل‌ها جواب می‌دهد." }, { en: "Her assistant is very organized.", fa: "دستیارش خیلی منظم است." }] },
      { word: "director", meaning: "مدیرعامل", en: "The director is out of the office today.", fa: "مدیرعامل امروز خارج از دفتر است.", icon: "👔", examples: [{ en: "The director is out of the office today.", fa: "مدیرعامل امروز خارج از دفتر است." }, { en: "The director gave a speech.", fa: "مدیرعامل سخنرانی کرد." }, { en: "She became a director last year.", fa: "او سال پیش مدیرعامل شد." }] },
      { word: "presentation", meaning: "ارائه", en: "I have a presentation tomorrow.", fa: "من فردا یک ارائه دارم.", icon: "📽️", examples: [{ en: "I have a presentation tomorrow.", fa: "من فردا یک ارائه دارم." }, { en: "The presentation was clear.", fa: "ارائه واضح بود." }, { en: "Practice your presentation tonight.", fa: "امشب ارائه‌ات را تمرین کن." }] },
      { word: "conference", meaning: "کنفرانس", en: "The conference starts at 9 AM.", fa: "کنفرانس ساعت ۹ صبح شروع می‌شود.", icon: "🎤", examples: [{ en: "The conference starts at 9 AM.", fa: "کنفرانس ساعت ۹ صبح شروع می‌شود." }, { en: "She spoke at the conference.", fa: "او در کنفرانس صحبت کرد." }, { en: "The conference room is big.", fa: "اتاق کنفرانس بزرگ است." }] },
      { word: "whiteboard", meaning: "وایت‌برد", en: "Write the plan on the whiteboard.", fa: "برنامه را روی وایت‌برد بنویس.", icon: "🗒️", examples: [{ en: "Write the plan on the whiteboard.", fa: "برنامه را روی وایت‌برد بنویس." }, { en: "The whiteboard is full of notes.", fa: "وایت‌برد پر از یادداشت است." }, { en: "Clean the whiteboard after the meeting.", fa: "بعد از جلسه وایت‌برد را پاک کن." }] },
      { word: "marker", meaning: "ماژیک", en: "Give me a marker, please.", fa: "لطفاً یک ماژیک به من بده.", icon: "🖍️", examples: [{ en: "Give me a marker, please.", fa: "لطفاً یک ماژیک به من بده." }, { en: "The marker is blue.", fa: "ماژیک آبی است." }, { en: "This marker does not write well.", fa: "این ماژیک خوب نمی‌نویسد." }] },
      { word: "notebook", meaning: "دفترچه یادداشت", en: "I write ideas in my notebook.", fa: "من ایده‌ها را در دفترچه‌ام می‌نویسم.", icon: "📓", examples: [{ en: "I write ideas in my notebook.", fa: "من ایده‌ها را در دفترچه‌ام می‌نویسم." }, { en: "The notebook is full of ideas.", fa: "دفترچه پر از ایده است." }, { en: "She carries a notebook to meetings.", fa: "او به جلسه‌ها دفترچه می‌برد." }] },
      { word: "list", meaning: "لیست", en: "Make a list of tasks for today.", fa: "برای امروز یک لیست از وظایف بساز.", icon: "📋", examples: [{ en: "Make a list of tasks for today.", fa: "برای امروز یک لیست از وظایف بساز." }, { en: "The list has five items.", fa: "لیست پنج مورد دارد." }, { en: "Check the list before you go.", fa: "قبل از رفتن لیست را چک کن." }] },
      { word: "form", meaning: "فرم", en: "Please fill out this form.", fa: "لطفاً این فرم را پر کن.", icon: "🧾", examples: [{ en: "Please fill out this form.", fa: "لطفاً این فرم را پر کن." }, { en: "The form needs your signature.", fa: "فرم به امضای تو نیاز دارد." }, { en: "Hand in the form by Friday.", fa: "فرم را تا جمعه تحویل بده." }] }
    ]
  },
  idiomEveryday: {
    name: "اصطلاحات روزمره", words: [
      { word: "a piece of cake", meaning: "مثل آب خوردن", en: "The test was a piece of cake.", fa: "امتحان مثل آب خوردن بود.", icon: "🍰", examples: [{ en: "The test was a piece of cake.", fa: "امتحان مثل آب خوردن بود." }, { en: "For her, cooking is a piece of cake.", fa: "آشپزی برای او مثل آب خوردن است." }, { en: "Do not worry, it is a piece of cake!", fa: "نگران نباش، خیلی راحته!" }] },
      { word: "hit the hay", meaning: "زدن به رختخواب", en: "I hit the hay early on weekdays.", fa: "روزهای هفته زود می‌رم رختخواب.", icon: "😴", examples: [{ en: "I hit the hay early on weekdays.", fa: "روزهای هفته زود می‌رم رختخواب." }, { en: "I am so tired; time to hit the hay.", fa: "خیلی خسته‌ام؛ وقت رفتن به رختخوابه." }, { en: "He always hits the hay after dinner.", fa: "او همیشه بعد از شام می‌ره رختخواب." }] },
      { word: "call it a day", meaning: "برای امروز کافیه", en: "Let us call it a day and go home.", fa: "بیا برای امروز تمومش کنیم و بریم خونه.", icon: "🌇", examples: [{ en: "Let us call it a day and go home.", fa: "بیا برای امروز تمومش کنیم و بریم خونه." }, { en: "We worked hard; let us call it a day.", fa: "سخت کار کردیم؛ برای امروز کافیه." }, { en: "After ten hours, I called it a day.", fa: "بعد از ده ساعت کار، گفتم برای امروز کافیه." }] },
      { word: "under the weather", meaning: "حالش بد است", en: "I am feeling under the weather today.", fa: "امروز حالم خوب نیست.", icon: "🤒", examples: [{ en: "I am feeling under the weather today.", fa: "امروز حالم خوب نیست." }, { en: "She stayed home; she is under the weather.", fa: "خونه موند؛ حالش بد بود." }, { en: "You look under the weather; rest a little.", fa: "کم‌حال به نظر می‌رسی؛ کمی استراحت کن." }] },
      { word: "break a leg", meaning: "موفق باشی!", en: "Break a leg in your show tonight!", fa: "امشب توی اجرات موفق باشی!", icon: "🍀", examples: [{ en: "Break a leg in your show tonight!", fa: "امشب توی اجرات موفق باشی!" }, { en: "Before my test, she said break a leg.", fa: "قبل از امتحانم بهم گفت موفق باشی." }, { en: "He said break a leg before my interview.", fa: "قبل از مصاحبه‌ام گفت موفق باشی." }] }
    ]
  },
  idiomFeelings: {
    name: "اصطلاحات احساسات", words: [
      { word: "on cloud nine", meaning: "بی‌نهایت خوشحال", en: "She is on cloud nine today.", fa: "امروز سر از پا نمی‌شناسه.", icon: "☁️", examples: [{ en: "She is on cloud nine today.", fa: "امروز سر از پا نمی‌شناسه." }, { en: "I was on cloud nine when I got the job.", fa: "وقتی کار رو گرفتم سر از پا نمی‌شناختم." }, { en: "He is on cloud nine about the news.", fa: "از این خبر خیلی ذوق کرده." }] },
      { word: "butterflies in my stomach", meaning: "دل‌شوره داشتن", en: "I get butterflies in my stomach before a speech.", fa: "قبل از سخنرانی دل‌شوره می‌گیرم.", icon: "🦋", examples: [{ en: "I get butterflies in my stomach before a speech.", fa: "قبل از سخنرانی دل‌شوره می‌گیرم." }, { en: "Thinking about it gives me butterflies in my stomach.", fa: "فکر کردن بهش بهم دل‌شوره می‌ده." }, { en: "I had butterflies in my stomach on the first day.", fa: "روز اولش دل‌شوره داشتم." }] },
      { word: "over the moon", meaning: "سر از پا نمی‌شناختن", en: "He was over the moon when he heard the news.", fa: "وقتی خبر رو شنید سر از پا نمی‌شناخت.", icon: "🌙", examples: [{ en: "He was over the moon when he heard the news.", fa: "وقتی خبر رو شنید سر از پا نمی‌شناخت." }, { en: "She is over the moon about her new puppy.", fa: "برای توله‌سگ جدیدش خیلی ذوق کرده." }, { en: "We were over the moon after the win.", fa: "بعد از برد سر از پا نمی‌شناختیم." }] },
      { word: "cold feet", meaning: "پا پس کشیدن", en: "She got cold feet before the big speech.", fa: "قبل از سخنرانی بزرگ پا پس کشید.", icon: "🥶", examples: [{ en: "She got cold feet before the big speech.", fa: "قبل از سخنرانی بزرگ پا پس کشید." }, { en: "Do not get cold feet now; you are ready!", fa: "الان پا پس نکش؛ آماده‌ای!" }, { en: "He got cold feet the night before the trip.", fa: "شب قبل از سفر پا پس کشید." }] },
      { word: "down in the dumps", meaning: "دلگیر و غمگین", en: "He is down in the dumps today.", fa: "امروز دلگیره.", icon: "😞", examples: [{ en: "He is down in the dumps today.", fa: "امروز دلگیره." }, { en: "She was down in the dumps after the news.", fa: "بعد از اون خبر غمگین شد." }, { en: "When I feel down in the dumps, I call a friend.", fa: "وقتی دلگیرم، به یک دوست زنگ می‌زنم." }] }
    ]
  },
  idiomEffort: {
    name: "اصطلاحات کار و تلاش", words: [
      { word: "burn the midnight oil", meaning: "تا دیروقت کار کردن", en: "I burn the midnight oil before exams.", fa: "قبل از امتحان‌ها تا دیروقت درس می‌خونم.", icon: "🕯️", examples: [{ en: "I burn the midnight oil before exams.", fa: "قبل از امتحان‌ها تا دیروقت درس می‌خونم." }, { en: "She burns the midnight oil for her project.", fa: "برای پروژه‌اش تا دیروقت کار می‌کنه." }, { en: "Do not burn the midnight oil too often.", fa: "زیاد تا دیروقت بیدار نمون." }] },
      { word: "think outside the box", meaning: "خلاقانه فکر کردن", en: "We need to think outside the box.", fa: "باید خلاقانه فکر کنیم.", icon: "📦", examples: [{ en: "We need to think outside the box.", fa: "باید خلاقانه فکر کنیم." }, { en: "She always thinks outside the box at work.", fa: "او سر کار همیشه خلاقانه فکر می‌کنه." }, { en: "Think outside the box to solve this.", fa: "برای حلش، خارج از چارچوب فکر کن." }] },
      { word: "get the ball rolling", meaning: "کار را شروع کردن", en: "Let us get the ball rolling with a quick game.", fa: "بیا با یک بازی سریع کار رو شروع کنیم.", icon: "⚽", examples: [{ en: "Let us get the ball rolling with a quick game.", fa: "بیا با یک بازی سریع کار رو شروع کنیم." }, { en: "He got the ball rolling on the new project.", fa: "او پروژه جدید رو شروع کرد." }, { en: "I will get the ball rolling tomorrow morning.", fa: "فردا صبح کار رو شروع می‌کنم." }] },
      { word: "on the ball", meaning: "هوشیار و آماده", en: "The new assistant is really on the ball.", fa: "دستیار جدید واقعاً هوشیاره.", icon: "🎯", examples: [{ en: "The new assistant is really on the ball.", fa: "دستیار جدید واقعاً هوشیاره." }, { en: "You must stay on the ball in this job.", fa: "توی این کار باید هوشیار بمونی." }, { en: "She is always on the ball with deadlines.", fa: "توی مهلت‌ها همیشه سر وقت عمل می‌کنه." }] },
      { word: "hit the nail on the head", meaning: "دقیقاً درست گفتن", en: "You hit the nail on the head with that answer.", fa: "با اون جواب دقیقاً زدی تو خال.", icon: "🔨", examples: [{ en: "You hit the nail on the head with that answer.", fa: "با اون جواب دقیقاً زدی تو خال." }, { en: "She hit the nail on the head about the problem.", fa: "درباره مشکل کاملاً درست گفت." }, { en: "His comment hit the nail on the head.", fa: "حرفش دقیقاً درست بود." }] }
    ]
  },
  idiomBehavior: {
    name: "اصطلاحات رفتار و آداب", words: [
      { word: "spill the beans", meaning: "راز را لو دادن", en: "Do not spill the beans about the party!", fa: "راز مهمونی رو لو نده!", icon: "🤫", examples: [{ en: "Do not spill the beans about the party!", fa: "راز مهمونی رو لو نده!" }, { en: "He spilled the beans about the gift.", fa: "راز هدیه رو لو داد." }, { en: "Who spilled the beans to her?", fa: "کی بهش راز رو لو داد؟" }] },
      { word: "let the cat out of the bag", meaning: "راز را ناخواسته لو دادن", en: "He let the cat out of the bag about the surprise.", fa: "راز سورپرایز رو ناخواسته لو داد.", icon: "🐈", examples: [{ en: "He let the cat out of the bag about the surprise.", fa: "راز سورپرایز رو ناخواسته لو داد." }, { en: "Do not let the cat out of the bag yet!", fa: "هنوز راز رو فاش نکن!" }, { en: "She let the cat out of the bag by mistake.", fa: "اشتباهاً راز رو فاش کرد." }] },
      { word: "beat around the bush", meaning: "طفره رفتن", en: "Do not beat around the bush; tell me the truth.", fa: "طفره نرو؛ حقیقت رو بگو.", icon: "🌳", examples: [{ en: "Do not beat around the bush; tell me the truth.", fa: "طفره نرو؛ حقیقت رو بگو." }, { en: "He always beats around the bush in meetings.", fa: "تو جلسه‌ها همیشه طفره می‌ره." }, { en: "I beat around the bush too much.", fa: "من زیادی طفره می‌رم." }] },
      { word: "a blessing in disguise", meaning: "توفیق اجباری", en: "Losing that job was a blessing in disguise.", fa: "اون بیکار شدن یه توفیق اجباری بود.", icon: "🙏", examples: [{ en: "Losing that job was a blessing in disguise.", fa: "اون بیکار شدن یه توفیق اجباری بود." }, { en: "The delay was a blessing in disguise.", fa: "اون تاخیر به نفعمون تموم شد." }, { en: "Sometimes rain is a blessing in disguise.", fa: "بعضی وقتا بارون به نفعه، فقط نمی‌دونی." }] },
      { word: "a couch potato", meaning: "آدم تنبل (لم‌ده)", en: "My brother is a couch potato on weekends.", fa: "برادرم آخر هفته‌ها فقط لم می‌ده.", icon: "🛋️", examples: [{ en: "My brother is a couch potato on weekends.", fa: "برادرم آخر هفته‌ها فقط لم می‌ده." }, { en: "Do not be a couch potato; come with us!", fa: "تنبلی نکن؛ بیا با ما!" }, { en: "He became a couch potato after the holidays.", fa: "بعد از تعطیلات تنبل شده." }] }
    ]
  }
};

CATEGORIES.a2everyday = {
  name: "روزمره (A2)", words: [
    { word: "appointment", meaning: "قرار ملاقات، نوبت", en: "I have a doctor's appointment today.", fa: "امروز یک قرار ملاقات با پزشک دارم.", icon: "📅", examples: [{ en: "I have a doctor's appointment today.", fa: "امروز یک قرار ملاقات با پزشک دارم." }, { en: "Can we make an appointment for Monday?", fa: "می‌شود برای دوشنبه قرار بگذاریم؟" }, { en: "She canceled her appointment.", fa: "او قرار ملاقاتش را لغو کرد." }] },
    { word: "borrow", meaning: "قرض گرفتن", en: "Can I borrow your pen?", fa: "می‌شود خودکارت را قرض بگیرم؟", icon: "✏️", examples: [{ en: "Can I borrow your pen?", fa: "می‌شود خودکارت را قرض بگیرم؟" }, { en: "I borrowed a book from the library.", fa: "یک کتاب از کتابخانه قرض گرفتم." }, { en: "You can borrow my umbrella.", fa: "می‌توانی چترم را قرض بگیری." }] },
    { word: "decide", meaning: "تصمیم گرفتن", en: "We decided to stay home.", fa: "تصمیم گرفتیم در خانه بمانیم.", icon: "🤔", examples: [{ en: "We decided to stay home.", fa: "تصمیم گرفتیم در خانه بمانیم." }, { en: "I cannot decide what to wear.", fa: "نمی‌توانم تصمیم بگیرم چه بپوشم." }, { en: "She decides quickly.", fa: "او سریع تصمیم می‌گیرد." }] },
    { word: "neighborhood", meaning: "محله", en: "Our neighborhood is very quiet.", fa: "محله‌ی ما خیلی ساکت است.", icon: "🏘️", examples: [{ en: "Our neighborhood is very quiet.", fa: "محله‌ی ما خیلی ساکت است." }, { en: "There is a nice park in our neighborhood.", fa: "در محله‌ی ما یک پارک قشنگ هست." }, { en: "Everyone knows everyone in this neighborhood.", fa: "در این محله همه همدیگر را می‌شناسند." }] },
    { word: "purse", meaning: "کیف دستی زنانه", en: "She keeps her keys in her purse.", fa: "او کلیدهایش را در کیف دستی‌اش نگه می‌دارد.", icon: "👛", examples: [{ en: "She keeps her keys in her purse.", fa: "او کلیدهایش را در کیف دستی‌اش نگه می‌دارد." }, { en: "My purse is in the bag.", fa: "کیف دستی‌ام داخل کیفم است." }, { en: "She opened her purse and paid.", fa: "او کیف دستی‌اش را باز کرد و پرداخت کرد." }] },
    { word: "routine", meaning: "روتین، رویه روزانه", en: "My morning routine is simple.", fa: "روتین صبحگاهی من ساده است.", icon: "🔁", examples: [{ en: "My morning routine is simple.", fa: "روتین صبحگاهی من ساده است." }, { en: "Exercise is part of my daily routine.", fa: "ورزش بخشی از روتین روزانه‌ی من است." }, { en: "She follows the same routine every day.", fa: "او هر روز همان روتین را دنبال می‌کند." }] },
    { word: "chore", meaning: "کار خانه", en: "I do the chores on Fridays.", fa: "جمعه‌ها کارهای خانه را انجام می‌دهم.", icon: "🧹", examples: [{ en: "I do the chores on Fridays.", fa: "جمعه‌ها کارهای خانه را انجام می‌دهم." }, { en: "Washing dishes is my least favorite chore.", fa: "ظرف شستن کم‌علاقه‌ترین کار خانه‌ی من است." }, { en: "The kids help with small chores.", fa: "بچه‌ها در کارهای کوچک خانه کمک می‌کنند." }] },
    { word: "alarm", meaning: "زنگ ساعت", en: "My alarm rings at six.", fa: "ساعت زنگدارم ساعت شش زنگ می‌زند.", icon: "⏰", examples: [{ en: "My alarm rings at six.", fa: "ساعت زنگدارم ساعت شش زنگ می‌زند." }, { en: "I set two alarms for tomorrow.", fa: "برای فردا دو زنگ تنظیم کردم." }, { en: "Did you hear the alarm this morning?", fa: "امروز صبح صدای زنگ را شنیدی؟" }] },
    { word: "errand", meaning: "کار بیرون", en: "I have a few errands to run.", fa: "چند کار بیرون باید انجام بدهم.", icon: "🏃", examples: [{ en: "I have a few errands to run.", fa: "چند کار بیرون باید انجام بدهم." }, { en: "She ran errands all afternoon.", fa: "او تمام بعدازظهر کارهای بیرون را انجام داد." }, { en: "Can you do this errand for me?", fa: "می‌شود این کار را برایم انجام بدهی؟" }] },
    { word: "habit", meaning: "عادت", en: "Reading is a good habit.", fa: "کتاب خواندن عادت خوبی است.", icon: "🌀", examples: [{ en: "Reading is a good habit.", fa: "کتاب خواندن عادت خوبی است." }, { en: "He has a habit of waking up early.", fa: "او عادت دارد زود بیدار شود." }, { en: "Good habits make life easier.", fa: "عادت‌های خوب زندگی را آسان‌تر می‌کنند." }] },
    { word: "grocery", meaning: "خواربار", en: "I bought groceries at the market.", fa: "خواربار را از بازار خریدم.", icon: "🛒", examples: [{ en: "I bought groceries at the market.", fa: "خواربار را از بازار خریدم." }, { en: "The grocery bag is heavy.", fa: "کیسه خواربار سنگین است." }, { en: "She writes a grocery list.", fa: "او یک لیست خواربار می‌نویسد." }] },
    { word: "laundry", meaning: "رخت‌شویی", en: "I do the laundry on Saturdays.", fa: "شنبه‌ها رخت‌ها را می‌شویم.", icon: "🧺", examples: [{ en: "I do the laundry on Saturdays.", fa: "شنبه‌ها رخت‌ها را می‌شویم." }, { en: "The laundry is dry now.", fa: "رخت‌ها الان خشک شده‌اند." }, { en: "He took the laundry downstairs.", fa: "او رخت‌ها را پایین برد." }] },
    { word: "mailbox", meaning: "صندوق پست", en: "The mailbox is full of letters.", fa: "صندوق پست پر از نامه است.", icon: "📬", examples: [{ en: "The mailbox is full of letters.", fa: "صندوق پست پر از نامه است." }, { en: "Check the mailbox, please.", fa: "لطفاً صندوق پست را چک کن." }, { en: "She put the key under the mailbox.", fa: "او کلید را زیر صندوق پست گذاشت." }] },
    { word: "sidewalk", meaning: "پیاده‌رو", en: "Walk on the sidewalk.", fa: "روی پیاده‌رو راه برو.", icon: "🚶", examples: [{ en: "Walk on the sidewalk.", fa: "روی پیاده‌رو راه برو." }, { en: "The sidewalk is wet after the rain.", fa: "پیاده‌رو بعد از باران خیس است." }, { en: "Kids ride bikes on the sidewalk.", fa: "بچه‌ها روی پیاده‌رو دوچرخه می‌رانند." }] },
    { word: "trash", meaning: "زباله", en: "Take out the trash, please.", fa: "لطفاً زباله‌ها را بیرون ببر.", icon: "🗑️", examples: [{ en: "Take out the trash, please.", fa: "لطفاً زباله‌ها را بیرون ببر." }, { en: "The trash bin is full.", fa: "سطل زباله پر است." }, { en: "Do not throw trash on the ground.", fa: "زباله را روی زمین نریز." }] }
  ]
};
CATEGORIES.a2travel = {
  name: "سفر (A2)", words: [
    { word: "flight", meaning: "پرواز", en: "Our flight leaves at eight.", fa: "پرواز ما ساعت هشت حرکت می‌کند.", icon: "✈️", examples: [{ en: "Our flight leaves at eight.", fa: "پرواز ما ساعت هشت حرکت می‌کند." }, { en: "The flight was short and smooth.", fa: "پرواز کوتاه و آرام بود." }, { en: "I read a book during the flight.", fa: "در طول پرواز کتاب خواندم." }] },
    { word: "luggage", meaning: "چمدان، بار مسافر", en: "My luggage is heavy.", fa: "چمدانم سنگین است.", icon: "🧳", examples: [{ en: "My luggage is heavy.", fa: "چمدانم سنگین است." }, { en: "We collected our luggage at the airport.", fa: "بارمان را در فرودگاه تحویل گرفتیم." }, { en: "Do not forget your luggage in the taxi.", fa: "چمدانت را در تاکسی جا نگذار." }] },
    { word: "souvenir", meaning: "سوغاتی، یادگاری", en: "I bought a souvenir for my mother.", fa: "برای مادرم یک سوغاتی خریدم.", icon: "🎁", examples: [{ en: "I bought a souvenir for my mother.", fa: "برای مادرم یک سوغاتی خریدم." }, { en: "This shop sells nice souvenirs.", fa: "این مغازه سوغاتی‌های قشنگ می‌فروشد." }, { en: "Keep this as a souvenir of our trip.", fa: "این را به یادگار سفرمان نگه دار." }] },
    { word: "passenger", meaning: "مسافر", en: "The passengers are waiting at the gate.", fa: "مسافرها پشت گیت منتظرند.", icon: "💺", examples: [{ en: "The passengers are waiting at the gate.", fa: "مسافرها پشت گیت منتظرند." }, { en: "Every passenger needs a ticket.", fa: "هر مسافر به بلیط نیاز دارد." }, { en: "The passenger next to me slept all the way.", fa: "مسافر کنار من تمام مسیر خوابید." }] },
    { word: "abroad", meaning: "خارج از کشور", en: "She wants to study abroad.", fa: "او می‌خواهد در خارج از کشور درس بخواند.", icon: "🌍", examples: [{ en: "She wants to study abroad.", fa: "او می‌خواهد در خارج از کشور درس بخواند." }, { en: "He travels abroad every year.", fa: "او هر سال به خارج از کشور سفر می‌کند." }, { en: "Living abroad is a new experience.", fa: "زندگی در خارج از کشور یک تجربه‌ی جدید است." }] },
    { word: "itinerary", meaning: "برنامه سفر", en: "Our itinerary is very full.", fa: "برنامه سفر ما خیلی پر است.", icon: "🗓️", examples: [{ en: "Our itinerary is very full.", fa: "برنامه سفر ما خیلی پر است." }, { en: "The itinerary includes two museums.", fa: "برنامه سفر شامل دو موزه است." }, { en: "I changed the itinerary a little.", fa: "برنامه سفر را کمی عوض کردم." }] },
    { word: "customs", meaning: "گمرک", en: "We passed customs quickly.", fa: "به‌سرعت از گمرک رد شدیم.", icon: "🛃", examples: [{ en: "We passed customs quickly.", fa: "به‌سرعت از گمرک رد شدیم." }, { en: "Customs checked our bags.", fa: "گمرک کیف‌هایمان را بررسی کرد." }, { en: "Declare these items at customs.", fa: "این وسایل را در گمرک اظهار کن." }] },
    { word: "hostel", meaning: "مهمان‌پذیر", en: "The hostel is cheap and clean.", fa: "مهمان‌پذیر ارزان و تمیز است.", icon: "🛏️", examples: [{ en: "The hostel is cheap and clean.", fa: "مهمان‌پذیر ارزان و تمیز است." }, { en: "We stayed in a hostel for two nights.", fa: "دو شب در یک مهمان‌پذیر ماندیم." }, { en: "The hostel has a shared kitchen.", fa: "مهمان‌پذیر آشپزخانه مشترک دارد." }] },
    { word: "sightseeing", meaning: "گشت‌وگذار", en: "We went sightseeing yesterday.", fa: "دیروز به گشت‌وگذار رفتیم.", icon: "📸", examples: [{ en: "We went sightseeing yesterday.", fa: "دیروز به گشت‌وگذار رفتیم." }, { en: "Sightseeing is the best part of the trip.", fa: "گشت‌وگذار بهترین بخش سفر است." }, { en: "They did some sightseeing in the old town.", fa: "آن‌ها در شهر قدیمی گشت‌وگذار کردند." }] },
    { word: "platform", meaning: "سکو", en: "The train leaves from platform two.", fa: "قطار از سکوی دو حرکت می‌کند.", icon: "🚉", examples: [{ en: "The train leaves from platform two.", fa: "قطار از سکوی دو حرکت می‌کند." }, { en: "Wait for me on the platform.", fa: "روی سکو منتظرم بمان." }, { en: "The platform is crowded today.", fa: "سکو امروز شلوغ است." }] },
    { word: "embassy", meaning: "سفارت", en: "The embassy opens at nine.", fa: "سفارت ساعت نه باز می‌شود.", icon: "🏛️", examples: [{ en: "The embassy opens at nine.", fa: "سفارت ساعت نه باز می‌شود." }, { en: "I called the embassy for my visa.", fa: "برای ویزا به سفارت زنگ زدم." }, { en: "The embassy is near the park.", fa: "سفارت نزدیک پارک است." }] },
    { word: "exchange", meaning: "صرافی، تبدیل", en: "Where is the exchange office?", fa: "صرافی کجاست؟", icon: "🔄", examples: [{ en: "Where is the exchange office?", fa: "صرافی کجاست؟" }, { en: "The exchange rate is good today.", fa: "نرخ تبدیل امروز خوب است." }, { en: "I changed money at the exchange.", fa: "پولم را در صرافی عوض کردم." }] },
    { word: "round trip", meaning: "سفر رفت‌وبرگشت", en: "A round trip ticket is cheaper.", fa: "بلیط رفت‌وبرگشت ارزان‌تر است.", icon: "🎫", examples: [{ en: "A round trip ticket is cheaper.", fa: "بلیط رفت‌وبرگشت ارزان‌تر است." }, { en: "I booked a round trip to Rome.", fa: "یک رفت‌وبرگشت به رم رزرو کردم." }, { en: "Is this one way or round trip?", fa: "یک‌طرفه است یا رفت‌وبرگشت؟" }] },
    { word: "postcard", meaning: "کارت‌پستال", en: "I sent a postcard from Paris.", fa: "از پاریس کارت‌پستال فرستادم.", icon: "💌", examples: [{ en: "I sent a postcard from Paris.", fa: "از پاریس کارت‌پستال فرستادم." }, { en: "She collects postcards.", fa: "او کارت‌پستال جمع می‌کند." }, { en: "This postcard has a beautiful view.", fa: "این کارت‌پستال منظره زیبایی دارد." }] },
    { word: "window seat", meaning: "صندلی کنار پنجره", en: "I prefer the window seat.", fa: "صندلی کنار پنجره را ترجیح می‌دهم.", icon: "🪟", examples: [{ en: "I prefer the window seat.", fa: "صندلی کنار پنجره را ترجیح می‌دهم." }, { en: "The window seat has a nice view.", fa: "صندلی کنار پنجره منظره خوبی دارد." }, { en: "She slept in the window seat.", fa: "او روی صندلی کنار پنجره خوابید." }] }
  ]
};
CATEGORIES.a2food = {
  name: "غذا و رستوران (A2)", words: [
    { word: "recipe", meaning: "دستور پخت", en: "This recipe is my grandmother's.", fa: "این دستور پخت متعلق به مادربزرگم است.", icon: "📖", examples: [{ en: "This recipe is my grandmother's.", fa: "این دستور پخت متعلق به مادربزرگم است." }, { en: "The recipe is very easy to follow.", fa: "این دستور پخت خیلی ساده است." }, { en: "I found a great recipe online.", fa: "یک دستور پخت عالی آنلاین پیدا کردم." }] },
    { word: "dessert", meaning: "دسر", en: "Ice cream is my favorite dessert.", fa: "بستنی دسر مورد علاقه‌ی من است.", icon: "🍨", examples: [{ en: "Ice cream is my favorite dessert.", fa: "بستنی دسر مورد علاقه‌ی من است." }, { en: "We ordered dessert after dinner.", fa: "بعد از شام دسر سفارش دادیم." }, { en: "This dessert is not too sweet.", fa: "این دسر خیلی شیرین نیست." }] },
    { word: "bill", meaning: "صورتحساب", en: "Can we have the bill, please?", fa: "می‌شود صورت‌حساب را بیاورید؟", icon: "🧾", examples: [{ en: "Can we have the bill, please?", fa: "می‌شود صورت‌حساب را بیاورید؟" }, { en: "The bill is on the table.", fa: "صورت‌حساب روی میز است." }, { en: "Let me pay the bill tonight.", fa: "امشب بگذار من صورت‌حساب را پرداخت کنم." }] },
    { word: "taste", meaning: "مزه، چشیدن", en: "This soup tastes great.", fa: "این سوپ مزه‌ی فوق‌العاده‌ای دارد.", icon: "👅", examples: [{ en: "This soup tastes great.", fa: "این سوپ مزه‌ی فوق‌العاده‌ای دارد." }, { en: "The cake has a strange taste.", fa: "کیک مزه‌ی عجیبی دارد." }, { en: "Taste the sauce before adding salt.", fa: "قبل از اضافه‌کردن نمک، سس را بچش." }] },
    { word: "fresh", meaning: "تازه", en: "I buy fresh bread every morning.", fa: "هر روز صبح نان تازه می‌خرم.", icon: "🥬", examples: [{ en: "I buy fresh bread every morning.", fa: "هر روز صبح نان تازه می‌خرم." }, { en: "The vegetables are fresh and crispy.", fa: "سبزیجات تازه و ترد هستند." }, { en: "Open the window for some fresh air.", fa: "پنجره را باز کن تا هوای تازه بیاید." }] },
    { word: "appetizer", meaning: "پیش‌غذا", en: "We ordered an appetizer.", fa: "یک پیش‌غذا سفارش دادیم.", icon: "🥗", examples: [{ en: "We ordered an appetizer.", fa: "یک پیش‌غذا سفارش دادیم." }, { en: "The appetizer was delicious.", fa: "پیش‌غذا خوشمزه بود." }, { en: "Soup is a nice appetizer.", fa: "سوپ پیش‌غذای خوبی است." }] },
    { word: "beverage", meaning: "نوشیدنی", en: "The meal comes with a beverage.", fa: "این وعده با یک نوشیدنی است.", icon: "🥤", examples: [{ en: "The meal comes with a beverage.", fa: "این وعده با یک نوشیدنی است." }, { en: "Choose your favorite beverage.", fa: "نوشیدنی مورد علاقه‌ات را انتخاب کن." }, { en: "Cold beverages are on the menu.", fa: "نوشیدنی‌های سرد در منو هستند." }] },
    { word: "portion", meaning: "پرس، مقدار غذا", en: "The portions here are big.", fa: "پرس‌های اینجا بزرگ است.", icon: "🍽️", examples: [{ en: "The portions here are big.", fa: "پرس‌های اینجا بزرگ است." }, { en: "I ordered a small portion.", fa: "یک پرس کوچک سفارش دادم." }, { en: "Share a portion with me.", fa: "یک پرس را با من تقسیم کن." }] },
    { word: "takeaway", meaning: "غذای بیرون‌بر", en: "Let's get takeaway tonight.", fa: "امشب غذای بیرون‌بر بگیریم.", icon: "🥡", examples: [{ en: "Let's get takeaway tonight.", fa: "امشب غذای بیرون‌بر بگیریم." }, { en: "The takeaway arrives in twenty minutes.", fa: "غذای بیرون‌بر بیست دقیقه دیگر می‌رسد." }, { en: "She ordered takeaway for the family.", fa: "او برای خانواده غذای بیرون‌بر سفارش داد." }] },
    { word: "ripe", meaning: "رسیده", en: "The bananas are ripe.", fa: "موزها رسیده‌اند.", icon: "🍌", examples: [{ en: "The bananas are ripe.", fa: "موزها رسیده‌اند." }, { en: "This mango is not ripe yet.", fa: "این انبه هنوز نرسیده است." }, { en: "Eat the ripe apples first.", fa: "اول سیب‌های رسیده را بخور." }] },
    { word: "oven", meaning: "فر", en: "The oven is very hot.", fa: "فر خیلی داغ است.", icon: "🔥", examples: [{ en: "The oven is very hot.", fa: "فر خیلی داغ است." }, { en: "Put the cake in the oven.", fa: "کیک را در فر بگذار." }, { en: "The oven needs cleaning.", fa: "فر باید تمیز شود." }] },
    { word: "fridge", meaning: "یخچال", en: "Put the leftovers in the fridge.", fa: "باقی‌مانده غذا را در یخچال بگذار.", icon: "🧊", examples: [{ en: "Put the leftovers in the fridge.", fa: "باقی‌مانده غذا را در یخچال بگذار." }, { en: "The fridge is almost empty.", fa: "یخچال تقریباً خالی است." }, { en: "Close the fridge door, please.", fa: "لطفاً در یخچال را ببند." }] },
    { word: "stir", meaning: "هم زدن", en: "Stir the soup slowly.", fa: "سوپ را آرام هم بزن.", icon: "🥄", examples: [{ en: "Stir the soup slowly.", fa: "سوپ را آرام هم بزن." }, { en: "Stir the sauce for two minutes.", fa: "سس را دو دقیقه هم بزن." }, { en: "She stirred the tea with a spoon.", fa: "او چای را با قاشق هم زد." }] },
    { word: "slice", meaning: "برش، ورقه", en: "Cut a slice of bread.", fa: "یک برش نان ببر.", icon: "🍞", examples: [{ en: "Cut a slice of bread.", fa: "یک برش نان ببر." }, { en: "She ate a slice of cake.", fa: "او یک برش کیک خورد." }, { en: "I want a thin slice, please.", fa: "یک برش نازک لطفاً می‌خواهم." }] },
    { word: "peel", meaning: "پوست کندن", en: "Peel the apple, please.", fa: "لطفاً سیب را پوست بکن.", icon: "🍊", examples: [{ en: "Peel the apple, please.", fa: "لطفاً سیب را پوست بکن." }, { en: "He peeled a banana for the baby.", fa: "او برای نوزاد موز پوست کند." }, { en: "Peel the potatoes before cooking.", fa: "قبل از پخت، سیب‌زمینی‌ها را پوست بکن." }] }
  ]
};
CATEGORIES.a2work = {
  name: "کار و اداره (A2)", words: [
    { word: "salary", meaning: "حقوق، دستمزد", en: "He gets his salary every month.", fa: "او هر ماه حقوقش را می‌گیرد.", icon: "💵", examples: [{ en: "He gets his salary every month.", fa: "او هر ماه حقوقش را می‌گیرد." }, { en: "The salary is paid on the first of the month.", fa: "حقوق اول ماه پرداخت می‌شود." }, { en: "She saved part of her salary.", fa: "او بخشی از حقوقش را پس‌انداز کرد." }] },
    { word: "meeting", meaning: "جلسه", en: "The meeting starts at ten.", fa: "جلسه ساعت ده شروع می‌شود.", icon: "🗣️", examples: [{ en: "The meeting starts at ten.", fa: "جلسه ساعت ده شروع می‌شود." }, { en: "We have a team meeting on Monday.", fa: "دوشنبه جلسه‌ی تیمی داریم." }, { en: "The meeting was shorter than expected.", fa: "جلسه کوتاه‌تر از انتظار بود." }] },
    { word: "manager", meaning: "مدیر", en: "She is the new manager.", fa: "او مدیر جدید است.", icon: "🧑‍", examples: [{ en: "She is the new manager.", fa: "او مدیر جدید است." }, { en: "The manager approved my request.", fa: "مدیر درخواستم را تأیید کرد." }, { en: "Our manager listens to everyone.", fa: "مدیر ما به همه گوش می‌دهد." }] },
    { word: "interview", meaning: "مصاحبه", en: "I have a job interview tomorrow.", fa: "فردا مصاحبه‌ی شغلی دارم.", icon: "📝", examples: [{ en: "I have a job interview tomorrow.", fa: "فردا مصاحبه‌ی شغلی دارم." }, { en: "The interview took about an hour.", fa: "مصاحبه حدود یک ساعت طول کشید." }, { en: "She prepared for the interview all week.", fa: "او تمام هفته برای مصاحبه آماده شد." }] },
    { word: "deadline", meaning: "ضرب‌الاجل، مهلت", en: "We must finish before the deadline.", fa: "باید قبل از ضرب‌الاجل تمام کنیم.", icon: "⏳", examples: [{ en: "We must finish before the deadline.", fa: "باید قبل از ضرب‌الاجل تمام کنیم." }, { en: "The deadline for this project is close.", fa: "مهلت این پروژه نزدیک است." }, { en: "I worked late to meet the deadline.", fa: "برای رسیدن به مهلت، تا دیروقت کار کردم." }] },
    { word: "coworker", meaning: "همکار", en: "My coworkers are friendly.", fa: "همکارانم صمیمی هستند.", icon: "🧑‍", examples: [{ en: "My coworkers are friendly.", fa: "همکارانم صمیمی هستند." }, { en: "I had lunch with a coworker.", fa: "با یک همکار ناهار خوردم." }, { en: "She asked a coworker for help.", fa: "او از یک همکار کمک خواست." }] },
    { word: "workload", meaning: "حجم کار", en: "My workload is heavy this week.", fa: "حجم کارم این هفته زیاد است.", icon: "📚", examples: [{ en: "My workload is heavy this week.", fa: "حجم کارم این هفته زیاد است." }, { en: "The workload is lighter on Fridays.", fa: "جمعه‌ها حجم کار کمتر است." }, { en: "We shared the workload fairly.", fa: "حجم کار را منصفانه تقسیم کردیم." }] },
    { word: "shift", meaning: "شیفت کاری", en: "I work the night shift.", fa: "شیفت شب کار می‌کنم.", icon: "🕘", examples: [{ en: "I work the night shift.", fa: "شیفت شب کار می‌کنم." }, { en: "Her shift starts at eight.", fa: "شیفت او ساعت هشت شروع می‌شود." }, { en: "Can we swap shifts tomorrow?", fa: "می‌شود فردا شیفت‌ها را عوض کنیم؟" }] },
    { word: "hire", meaning: "استخدام کردن", en: "They hired a new designer.", fa: "یک طراح جدید استخدام کردند.", icon: "🤝", examples: [{ en: "They hired a new designer.", fa: "یک طراح جدید استخدام کردند." }, { en: "The company plans to hire ten people.", fa: "شرکت قصد دارد ده نفر استخدام کند." }, { en: "She was hired last month.", fa: "او ماه پیش استخدام شد." }] },
    { word: "resign", meaning: "استعفا دادن", en: "He resigned from his job.", fa: "او از کارش استعفا داد.", icon: "🚪", examples: [{ en: "He resigned from his job.", fa: "او از کارش استعفا داد." }, { en: "She plans to resign next month.", fa: "او قصد دارد ماه بعد استعفا بدهد." }, { en: "Why did you resign?", fa: "چرا استعفا دادی؟" }] },
    { word: "intern", meaning: "کارآموز", en: "The intern learns very fast.", fa: "کارآموز خیلی سریع یاد می‌گیرد.", icon: "🎓", examples: [{ en: "The intern learns very fast.", fa: "کارآموز خیلی سریع یاد می‌گیرد." }, { en: "We hired a new intern.", fa: "یک کارآموز جدید استخدام کردیم." }, { en: "The intern helps the design team.", fa: "کارآموز به تیم طراحی کمک می‌کند." }] },
    { word: "apply", meaning: "درخواست دادن", en: "I applied for two jobs.", fa: "برای دو شغل درخواست دادم.", icon: "📝", examples: [{ en: "I applied for two jobs.", fa: "برای دو شغل درخواست دادم." }, { en: "She applied to the marketing team.", fa: "او برای تیم بازاریابی درخواست داد." }, { en: "Apply online before Friday.", fa: "قبل از جمعه آنلاین درخواست بده." }] },
    { word: "earn", meaning: "درآمد کسب کردن", en: "She earns a good salary.", fa: "او حقوق خوبی کسب می‌کند.", icon: "💰", examples: [{ en: "She earns a good salary.", fa: "او حقوق خوبی کسب می‌کند." }, { en: "He earns money by teaching.", fa: "او با تدریس پول درمی‌آورد." }, { en: "They earn more this year.", fa: "آن‌ها امسال بیشتر درآمد دارند." }] },
    { word: "part-time", meaning: "پاره‌وقت", en: "She has a part-time job.", fa: "او یک شغل پاره‌وقت دارد.", icon: "⏰", examples: [{ en: "She has a part-time job.", fa: "او یک شغل پاره‌وقت دارد." }, { en: "I work part-time on Fridays.", fa: "جمعه‌ها پاره‌وقت کار می‌کنم." }, { en: "Part-time work fits my schedule.", fa: "کار پاره‌وقت با برنامه‌ام جور است." }] },
    { word: "full-time", meaning: "تمام‌وقت", en: "He found a full-time job.", fa: "او یک شغل تمام‌وقت پیدا کرد.", icon: "🕘", examples: [{ en: "He found a full-time job.", fa: "او یک شغل تمام‌وقت پیدا کرد." }, { en: "Full-time work starts at eight.", fa: "کار تمام‌وقت ساعت هشت شروع می‌شود." }, { en: "She prefers full-time to part-time.", fa: "او تمام‌وقت را به پاره‌وقت ترجیح می‌دهد." }] }
  ]
};

var currentCategoryKey = "everyday";
var WORDS = CATEGORIES[currentCategoryKey].words;
var PROGRESS_KEY = "lughatyar_progress_v1";
var progress = { words: {}, days: {}, pos: {} };
try {
  var rawProgress = localStorage.getItem(PROGRESS_KEY);
  if (rawProgress) { var parsedProgress = JSON.parse(rawProgress); if (parsedProgress && parsedProgress.words) progress = parsedProgress; }
} catch (e) { }
if (!progress.settings) progress.settings = { reminder: false, reminderTime: "20:00" };
var reminderSwitch = document.getElementById("reminderSwitch");
var reminderTime = document.getElementById("reminderTime");
var reminderSub = document.getElementById("reminderSub");
function syncReminderUI() {
  if (!reminderSwitch) return;
  reminderSwitch.checked = !!progress.settings.reminder;
  reminderTime.value = progress.settings.reminderTime;
  reminderTime.disabled = !progress.settings.reminder;
  reminderSub.textContent = progress.settings.reminder ? ("فعال • ساعت " + toPersianDigits(progress.settings.reminderTime)) : "غیرفعال";
}
if (reminderSwitch) {
  reminderSwitch.addEventListener("change", function () {
    progress.settings.reminder = this.checked;
    saveProgress();
    syncReminderUI();
  });
  reminderTime.addEventListener("change", function () {
    progress.settings.reminderTime = this.value || "20:00";
    saveProgress();
    syncReminderUI();
  });
  syncReminderUI();
}
var resetBtn = document.getElementById("resetProgressBtn");
var resetConfirm = document.getElementById("resetConfirm");
if (resetBtn) {
  resetBtn.addEventListener("click", function () {
    resetBtn.style.display = "none";
    resetConfirm.style.display = "flex";
  });
  document.getElementById("resetCancel").addEventListener("click", function () {
    resetConfirm.style.display = "none";
    resetBtn.style.display = "";
  });
  document.getElementById("resetYes").addEventListener("click", function () {
    try { localStorage.removeItem(PROGRESS_KEY); } catch (e) { }
    location.reload();
  });
}
function todayStr() {
  var d = new Date();
  var m = String(d.getMonth() + 1).padStart(2, "0");
  var day = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + m + "-" + day;
}
function saveProgress() { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch (e) { } }
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
  renderDailyMissions();
  renderAchievements();
}
function knownCount(catKey) {
  var c = 0, ws = CATEGORIES[catKey].words;
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
    progress.missions = {
      date: today,
      words: 0,
      reviews: 0,
      quizzes: 0
    };
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
    {
      key: "words",
      icon: "📚",
      title: "۵ لغت رو تمرین کن",
      value: progress.missions.words,
      target: 5
    },
    {
      key: "reviews",
      icon: "🔁",
      title: "۳ لغت از مرور امروز رو انجام بده",
      value: progress.missions.reviews,
      target: 3
    },
    {
      key: "quizzes",
      icon: "🎮",
      title: "۱ چالش رو کامل کن",
      value: progress.missions.quizzes,
      target: 1
    }
  ];

  var html = "";
  var allDone = true;

  for (var i = 0; i < missions.length; i++) {
    var m = missions[i];

    var safeValue = Math.min(m.value || 0, m.target);
    var done = safeValue >= m.target;

    if (!done) {
      allDone = false;
    }

    var pct = missionPercent(safeValue, m.target);

    html +=
      '<div class="mission-card ' + (done ? "done" : "") + '">' +
      '<div class="mission-icon">' + (done ? "✅" : m.icon) + '</div>' +
      '<div class="mission-info">' +
      '<div class="mission-title">' + m.title + '</div>' +
      '<div class="mission-track">' +
      '<div class="mission-fill" style="width:' + pct + '%"></div>' +
      '</div>' +
      '</div>' +
      '<div class="mission-count">' +
      toPersianDigits(safeValue) + " / " + toPersianDigits(m.target) +
      '</div>' +
      '</div>';
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

function updateProfileLevelBadge() {
  var el = document.getElementById("profileLevel");
  if (!el) return;

  var a2Known = knownCountMany([
    "a2everyday",
    "a2travel",
    "a2food",
    "a2work"
  ]);

  el.textContent = a2Known > 0 ? "A2" : "A1";
}

function renderAchievements() {
  var box = document.getElementById("achievementBadges");
  if (!box) return;

  var a2Known = knownCountMany([
    "a2everyday",
    "a2travel",
    "a2food",
    "a2work"
  ]);

  var idiomKnown = knownCountMany([
    "idiomEveryday",
    "idiomFeelings",
    "idiomEffort",
    "idiomBehavior"
  ]);

  var badges = [
    {
      icon: "🏠",
      label: "روزمره",
      unlocked: knownCount("everyday") > 0
    },
    {
      icon: "✈️",
      label: "سفر",
      unlocked: knownCount("travel") > 0
    },
    {
      icon: "🍽️",
      label: "غذا",
      unlocked: knownCount("food") > 0
    },
    {
      icon: "💼",
      label: "کار",
      unlocked: knownCount("work") > 0
    },
    {
      icon: "🎓",
      label: "سطح A2",
      unlocked: a2Known > 0
    },
    {
      icon: "💬",
      label: "اصطلاحات",
      unlocked: idiomKnown > 0
    }
  ];

  var html = "";

  for (var i = 0; i < badges.length; i++) {
    var b = badges[i];

    html +=
      '<div class="badge-item">' +
      '<div class="hex-badge ' + (b.unlocked ? "unlocked" : "locked") + '">' +
      (b.unlocked ? b.icon : "🔒") +
      '</div>' +
      '<span class="badge-label">' + b.label + '</span>' +
      '</div>';
  }

  box.innerHTML = html;

  updateProfileLevelBadge();
}
function trackMissionWord(state) {
  ensureDailyMissions();

  if (state === "k") {
    progress.missions.words = Math.min(progress.missions.words + 1, 5);
  }

  if (currentCategoryKey === "__review") {
    progress.missions.reviews = Math.min(progress.missions.reviews + 1, 3);
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
  knownBtn.classList.toggle("active", !!(rec && rec.s === "k"));
  unknownBtn.classList.toggle("active", !!(rec && rec.s === "u"));
}
function updateTileProgress() {
  var homeMap = { everyday: "categoryMetaEveryday", travel: "categoryMetaTravel", food: "categoryMetaFood", work: "categoryMetaWork" };
  for (var key in homeMap) {
    var el = document.getElementById(homeMap[key]);
    if (el && CATEGORIES[key]) {
      var total = CATEGORIES[key].words.length;
      var pct = Math.round(knownCount(key) / total * 100);
      el.textContent = toPersianDigits(total) + " لغت • " + toPersianDigits(pct) + "٪ بلد";
    }
  }
  var a2Map = { a2everyday: "a2MetaEveryday", a2travel: "a2MetaTravel", a2food: "a2MetaFood", a2work: "a2MetaWork" };
  for (var akey in a2Map) {
    var ael = document.getElementById(a2Map[akey]);
    if (ael && CATEGORIES[akey]) {
      var atotal = CATEGORIES[akey].words.length;
      var apct = Math.round(knownCount(akey) / atotal * 100);
      ael.textContent = toPersianDigits(atotal) + " لغت • " + toPersianDigits(apct) + "٪ بلد";
    }
  }
  var subMap = { idiomEveryday: "idiomMetaEveryday", idiomFeelings: "idiomMetaFeelings", idiomEffort: "idiomMetaEffort", idiomBehavior: "idiomMetaBehavior" };
  for (var skey in subMap) {
    var sel = document.getElementById(subMap[skey]);
    if (sel && CATEGORIES[skey]) {
      var stotal = CATEGORIES[skey].words.length;
      var spct = Math.round(knownCount(skey) / stotal * 100);
      sel.textContent = toPersianDigits(stotal) + " اصطلاح • " + toPersianDigits(spct) + "٪";
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
  var pieceCount = 32;
  for (var i = 0; i < pieceCount; i++) {
    var piece = document.createElement("span");
    piece.className = "confetti-piece";
    var left = Math.random() * 100;
    var delay = Math.random() * 0.35;
    var duration = 1.5 + Math.random() * 1;
    var drift = Math.round(Math.random() * 100 - 50) + "px";
    var rot = Math.round(320 + Math.random() * 440) + "deg";
    piece.style.left = left + "%";
    piece.style.background = confettiColors[i % confettiColors.length];
    piece.style.animationDelay = delay + "s";
    piece.style.animationDuration = duration + "s";
    piece.style.setProperty("--drift", drift);
    piece.style.setProperty("--rot", rot);
    if (i % 3 === 0) {
      piece.style.width = "10px";
      piece.style.height = "10px";
      piece.style.borderRadius = "50%";
    }
    container.appendChild(piece);
  }
  celebrateOverlay.appendChild(container);
  setTimeout(function () { clearConfetti(); }, 2700);
}



updateLevelBadge();
categoryBadge.textContent = CATEGORY;

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
    streakCount.textContent = toPersianDigits(streak || 1);
    var profileStreakEl = document.getElementById("profileStreak");
    if (profileStreakEl) profileStreakEl.textContent = toPersianDigits(streak || 1);
  } catch (err) {
    streakCount.textContent = "۱";
  }
}
updateStreak();
function levelOfCategory(key) {
  if (!key) return "A1";
  var cleanKey = String(key).replace(/\s+/g, '');
  return (cleanKey.indexOf("a2") === 0) ? "A2" : "A1";
}

function updateLevelBadge() {
  var w = WORDS[idx];
  var key = (w && w.__cat) ? w.__cat : currentCategoryKey;
  var badge = document.getElementById("levelBadge");
  if (badge) {
    badge.textContent = levelOfCategory(key);
  }
}
function render() {
  var w = WORDS[idx];
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
  }
  progress.days[todayStr()] = 1;
  saveProgress();
  if (w.examples && w.examples.length) {
    infoBtn.classList.remove("hidden");
  } else {
    infoBtn.classList.add("hidden");
  }
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

card.addEventListener("click", function (e) {
  if (e.target === speakBtn || e.target === infoBtn) return;
  if (e.target.closest && e.target.closest(".mark-btn")) return;
  card.classList.toggle("flipped");
});

function escapeHtml(str) {
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function underlineWord(sentence, word) {
  var safeSentence = escapeHtml(sentence);
  var re = new RegExp("(\\b" + word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\w*\\b)", "gi");
  return safeSentence.replace(re, "<u>$1</u>");
}

infoBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  var w = WORDS[idx];
  if (!w.examples || !w.examples.length) return;
  examplesWordTitle.textContent = w.word;
  document.getElementById("examplesSubTitle").textContent = (currentCategoryKey.indexOf("idiom") === 0) ? "چند مثال واقعی از کاربرد این اصطلاح" : "چند مثال واقعی از کاربرد این کلمه";
  var allDone = true;
  var html = "";
  for (var i = 0; i < w.examples.length; i++) {
    var ex = w.examples[i];
    html += '<div class="example-card"><div class="en">' + underlineWord(ex.en, w.word) + '</div><div class="fa">' + escapeHtml(ex.fa) + '</div></div>';
  }
  examplesList.innerHTML = html;
  showScreen("examples");
});

backFromExamplesBtn.addEventListener("click", function () {
  showScreen("app");
});

speakBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  try {
    var u = new SpeechSynthesisUtterance(WORDS[idx].word);
    u.lang = "en-US";
    u.rate = 0.5;
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  } catch (err) { }
});

prevBtn.addEventListener("click", function () {
  if (idx > 0) { idx--; render(); }
});
document.getElementById("knownBtn").addEventListener("click", function (e) { e.stopPropagation(); markWord("k"); });
document.getElementById("unknownBtn").addEventListener("click", function (e) { e.stopPropagation(); markWord("u"); });

nextBtn.addEventListener("click", function () {
  if (idx < WORDS.length - 1) { idx++; render(); }
  else {
    var celebrateText = document.getElementById("celebrateText");

    if (celebrateText) {
      if (currentCategoryKey === "__review") {
        celebrateText.textContent =
          toPersianDigits(WORDS.length) + " لغت رو با موفقیت مرور کردی.";
      } else {
        celebrateText.textContent =
          toPersianDigits(WORDS.length) + " لغت از دسته «" + CATEGORY + "» رو کامل کردی.";
      }
    }

    celebrateOverlay.classList.add("show");
    launchConfetti();
  }
});

restartBtn.addEventListener("click", function () {
  celebrateOverlay.classList.remove("show");
  clearConfetti();
  idx = 0;
  render();
});

var touchStartX = null;
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

var tg = (window.Telegram && window.Telegram.WebApp) ? window.Telegram.WebApp : null;

function setAppHeight() {
  var h = 0;
  if (tg && tg.viewportStableHeight) h = tg.viewportStableHeight;
  else if (tg && tg.viewportHeight) h = tg.viewportHeight;
  if (!h) h = window.innerHeight;
  if (h) document.documentElement.style.setProperty("--app-height", h + "px");
}

if (tg) {
  tg.ready();
  tg.expand();
  setAppHeight();
  if (tg.onEvent) {
    tg.onEvent("viewportChanged", setAppHeight);
  }
} else {
  setAppHeight();
}

window.addEventListener("resize", setAppHeight);
window.addEventListener("orientationchange", function () {
  setTimeout(setAppHeight, 200);
});

render();

var screenLoading = document.getElementById("screenLoading");
var screenCategory = document.getElementById("screenCategory");
var screenApp = document.getElementById("screenApp");
var screenProfile = document.getElementById("screenProfile");
var screenSettings = document.getElementById("screenSettings");
var screenQuiz = document.getElementById("screenQuiz");
var screenA2 = document.getElementById("screenA2");
var loadingPercent = document.getElementById("loadingPercent");
var categoryEverydayBtn = document.getElementById("categoryEveryday");
var categoryTravelBtn = document.getElementById("categoryTravel");
var categoryFoodBtn = document.getElementById("categoryFood");
var categoryWorkBtn = document.getElementById("categoryWork");
var backToCategoryBtn = document.getElementById("backToCategoryBtn");

updateTileProgress();
(function () {
  try {
    if (!progress.settings || !progress.settings.reminder) return;
    var now = new Date();
    var hm = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");
    if (hm < (progress.settings.reminderTime || "20:00")) return;
    var due = dueWords().length;
    if (due === 0) return;
    var t = document.getElementById("reminderToast");
    t.innerHTML = "🔔 وقت مروره! " + toPersianDigits(due) + " لغت موعد مروره";
    t.classList.add("show");
    t.addEventListener("click", function () { t.classList.remove("show"); });
    setTimeout(function () { t.classList.remove("show"); }, 6000);
  } catch (e) { }
})();
updateReviewCard();
updateQuizMeta();


// === UI ENHANCEMENT FUNCTIONS ===

// Convert number to Persian digits
function toEnglishDigits(s) { return String(s).replace(/[۰-۹]/g, function (d) { return "۰۱۲۳۴۵۶۷۸۹".indexOf(d); }); }
function toPersianDigits(n) {
  var p = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(n).replace(/[0-9]/g, function (d) { return p[+d]; });
}
function syncAppVersionUI() {
  var versionEls = document.querySelectorAll(".version-badge, #appVersionTag");

  for (var i = 0; i < versionEls.length; i++) {
    versionEls[i].textContent = APP_VERSION;
  }
}
// Count-up animation
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

// Profile animation targets
var profileStreakTarget = 1;
var profileWordsTarget = totalKnown();
var profileDaysTarget = studyDays();
var profileTargetsRead = false;

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
function triggerProfileAnimations() {
  if (!profileTargetsRead) {
    var se = document.getElementById('profileStreak');
    if (se) {
      var s = parseInt(toEnglishDigits(se.textContent), 10);
      if (!isNaN(s) && s > 0) profileStreakTarget = s;
    }
    profileTargetsRead = true;
  }
  countUp(document.getElementById('profileStreak'), profileStreakTarget, 800);
  countUp(document.getElementById('profileWords'), profileWordsTarget, 1000);
  countUp(document.getElementById('profileDays'), profileDaysTarget, 900);
  renderWeekChart();
}

function showScreen(name) {
  screenLoading.classList.remove("active");
  screenCategory.classList.remove("active");
  screenApp.classList.remove("active");
  screenProfile.classList.remove("active");
  screenSettings.classList.remove("active");
  screenExamples.classList.remove("active");
  screenIdioms.classList.remove("active");
  screenQuiz.classList.remove("active");
  screenA2.classList.remove("active");
  if (name === "loading") screenLoading.classList.add("active");
  if (name === "category") screenCategory.classList.add("active");
  if (name === "app") screenApp.classList.add("active");
  if (name === "profile") screenProfile.classList.add("active");
  if (name === "settings") screenSettings.classList.add("active");
  if (name === "examples") screenExamples.classList.add("active");
  if (name === "idioms") screenIdioms.classList.add("active");
  if (name === "quiz") screenQuiz.classList.add("active");
  if (name === "a2") screenA2.classList.add("active");
  if (name === "profile") {
    renderDailyMissions();
    renderAchievements();
    triggerProfileAnimations();
  }
  if (name === "category") { updateTileProgress(); updateReviewCard(); }
  if (name === "a2") { updateTileProgress(); }
  document.body.setAttribute("data-active", (name === "a2") ? "category" : name);
  var navT = (name === "idioms" || name === "a2") ? "category" : name;
  var allNavBtns = document.querySelectorAll("#sharedNav .nav-item");
  for (var nb = 0; nb < allNavBtns.length; nb++) {
    allNavBtns[nb].classList.toggle("active", allNavBtns[nb].getAttribute("data-target") === navT);
  }
}

(function runLoading() {
  var start = Date.now();
  var minDuration = 2200;
  var fontsDone = false;
  var pct = 0;

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { fontsDone = true; });
  } else {
    fontsDone = true;
  }

  function tick() {
    var elapsed = Date.now() - start;
    var timeRatio = Math.min(1, elapsed / minDuration);
    var target = Math.round(timeRatio * (fontsDone ? 100 : 92));
    if (target > pct) pct = target;
    loadingPercent.textContent = toPersianDigits(pct) + "٪";
    if (pct >= 100) {
      loadingPercent.textContent = "۱۰۰٪";
      setTimeout(function () {
        syncAppVersionUI();
        showScreen("category");
        maybeShowOnboarding();
      }, 250);
      return;
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

function selectCategory(key) {
  currentCategoryKey = key;
  WORDS = CATEGORIES[key].words;
  CATEGORY = CATEGORIES[key].name;
  categoryBadge.textContent = CATEGORY;
  idx = progress.pos[key] || 0;
  if (idx >= WORDS.length) idx = 0;
  render();
  showScreen("app");
}

categoryEverydayBtn.addEventListener("click", function () { selectCategory("everyday"); });
categoryTravelBtn.addEventListener("click", function () { selectCategory("travel"); });
categoryFoodBtn.addEventListener("click", function () { selectCategory("food"); });
categoryWorkBtn.addEventListener("click", function () { selectCategory("work"); });
document.getElementById("categoryA2Everyday").addEventListener("click", function () { selectCategory("a2everyday"); });
document.getElementById("categoryA2Travel").addEventListener("click", function () { selectCategory("a2travel"); });
document.getElementById("categoryA2Food").addEventListener("click", function () { selectCategory("a2food"); });
document.getElementById("categoryA2Work").addEventListener("click", function () { selectCategory("a2work"); });
document.getElementById("categoryIdioms").addEventListener("click", function () { showScreen("idioms"); });
document.getElementById("categoryReview").addEventListener("click", function () {
  var due = dueWords();
  if (!due.length) {
    var rm = document.getElementById("reviewMeta");
    if (rm) rm.textContent = "امروز همه‌چیز مرور شده 🎉";
    return;
  }
  CATEGORIES.__review = { name: "مرور امروز", words: due.map(function (x) { x.w.__cat = x.cat; return x.w; }) };
  selectCategory("__review");
});
function updateReviewCard() {
  var el = document.getElementById("reviewMeta");
  if (!el) return;
  var due = dueWords().length;
  el.textContent = due === 0 ? "امروز همه‌چیز مرور شده 🎉" : (toPersianDigits(due) + " لغت موعد مروره");
}
function shuffleArr(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
var QUIZ_LEN = 10;
var quizLevel = "A1";
var quiz = { qs: [], i: 0, correct: 0, level: quizLevel };

if (!progress.quiz) progress.quiz = { plays: 0, best: 0 };

if (!progress.quiz.byLevel) {
  progress.quiz.byLevel = {
    A1: { plays: progress.quiz.plays || 0, best: progress.quiz.best || 0 },
    A2: { plays: 0, best: 0 }
  };
}

if (!progress.quiz.byLevel.A1) progress.quiz.byLevel.A1 = { plays: 0, best: 0 };
if (!progress.quiz.byLevel.A2) progress.quiz.byLevel.A2 = { plays: 0, best: 0 };
if (progress.settings.sound === undefined) progress.settings.sound = true;
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
var soundSwitch = document.getElementById("soundSwitch");
var soundSub = document.getElementById("soundSub");
function syncSoundUI() {
  if (!soundSwitch) return;
  soundSwitch.checked = progress.settings.sound !== false;
  soundSub.textContent = progress.settings.sound !== false ? "فعال" : "غیرفعال";
}
if (soundSwitch) {
  soundSwitch.addEventListener("change", function () {
    progress.settings.sound = this.checked;
    saveProgress();
    syncSoundUI();
    if (!this.checked) { try { speechSynthesis.cancel(); } catch (e) { } }
  });
  syncSoundUI();
}
var speakBtnEl = document.getElementById("speakBtn");
if (speakBtnEl) speakBtnEl.addEventListener("click", function () { speakWord(WORDS[idx].word); });
function categoryMatchesQuizLevel(cat, level) {
  if (cat.indexOf("__") === 0) return false;

  var isA2 = cat.indexOf("a2") === 0;

  if (level === "A2") {
    return isA2;
  }

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
    levelBtns[i].classList.toggle(
      "active",
      levelBtns[i].getAttribute("data-quiz-level") === quizLevel
    );
  }
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
    var pool = CATEGORIES[picked[p].cat].words.filter(function (x) {
      return x.word !== picked[p].w.word;
    });

    shuffleArr(pool);

    var opts = [];

    for (var d = 0; d < 3 && d < pool.length; d++) {
      opts.push(pool[d].fa);
    }

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
}
function renderQuiz() {
  var q = quiz.qs[quiz.i];
  document.getElementById("quizWord").textContent = q.word;
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

  if (quiz.correct > stats.best) {
    stats.best = quiz.correct;
  }

  progress.quiz.plays = (progress.quiz.plays || 0) + 1;

  if (quiz.correct > (progress.quiz.best || 0)) {
    progress.quiz.best = quiz.correct;
  }
  trackMissionQuiz();
  saveProgress();

  var emoji = quiz.correct >= 9 ? "🏆" : quiz.correct >= 7 ? "🎉" : quiz.correct >= 5 ? "💪" : "📚";

  document.getElementById("quizResultEmoji").textContent = emoji;

  document.getElementById("quizResultText").textContent =
    toPersianDigits(quiz.correct) + " از " + toPersianDigits(quiz.qs.length) + " درست!";

  document.getElementById("quizResultBest").textContent =
    "بهترین رکورد " + quiz.level + ": " + toPersianDigits(stats.best) + " از " + toPersianDigits(QUIZ_LEN);

  document.getElementById("quizPlayArea").style.display = "none";
  document.getElementById("quizResults").style.display = "flex";

  updateQuizMeta();
}
function startQuiz(level) {
  if (typeof level === "string") {
    setQuizLevel(level);
  } else {
    setQuizLevel(quizLevel);
  }

  buildQuiz(quizLevel);

  document.getElementById("quizResults").style.display = "none";
  document.getElementById("quizPlayArea").style.display = "";

  renderQuiz();
  showScreen("quiz");
}
function updateQuizMeta() {
  var el = document.getElementById("quizMeta");
  if (!el) return;

  if (!progress.quiz) progress.quiz = { plays: 0, best: 0 };

  var a1 = getQuizLevelStats("A1");
  var a2 = getQuizLevelStats("A2");

  el.textContent = (a1.plays || a2.plays)
    ? ("A1: " + toPersianDigits(a1.best) + " • A2: " + toPersianDigits(a2.best))
    : "۱۰ سؤال • انتخاب سطح A1 یا A2";
}

document.getElementById("categoryQuiz").addEventListener("click", function () {
  startQuiz("A1");
});

var quizLevelBtns = document.querySelectorAll(".quiz-level-btn");

for (var qlb = 0; qlb < quizLevelBtns.length; qlb++) {
  quizLevelBtns[qlb].addEventListener("click", function () {
    startQuiz(this.getAttribute("data-quiz-level"));
  });
}

setQuizLevel(quizLevel);
document.getElementById("categoryA2").addEventListener("click", function () { showScreen("a2"); });
document.getElementById("quizBackBtn").addEventListener("click", function () { showScreen("category"); });
document.getElementById("quizAgainBtn").addEventListener("click", function () {
  startQuiz(quizLevel);
});
document.getElementById("quizHomeBtn").addEventListener("click", function () { showScreen("category"); });
document.getElementById("quizSpeak").addEventListener("click", function () { speakWord(quiz.qs[quiz.i].word); });
document.getElementById("idiomSubEveryday").addEventListener("click", function () { selectCategory("idiomEveryday"); });
document.getElementById("idiomSubFeelings").addEventListener("click", function () { selectCategory("idiomFeelings"); });
document.getElementById("idiomSubEffort").addEventListener("click", function () { selectCategory("idiomEffort"); });
document.getElementById("idiomSubBehavior").addEventListener("click", function () { selectCategory("idiomBehavior"); });
document.getElementById("backToHomeFromIdioms").addEventListener("click", function () { showScreen("category"); });
var backA2Btn = document.getElementById("backToHomeFromA2");
if (backA2Btn) backA2Btn.addEventListener("click", function () { showScreen("category"); });

backToCategoryBtn.addEventListener("click", function () {
  var t = "category";
  if (currentCategoryKey.indexOf("idiom") === 0) t = "idioms";
  else if (currentCategoryKey.indexOf("a2") === 0) t = "a2";
  showScreen(t);
});
var ONBOARD_KEY = "lughatyar_onboard_v1";
var onboardSlides = [
  { e: "👋", t: "به لغت‌یار خوش اومدی!", x: "اینجا با فلش‌کارت، لغت‌های انگلیسی رو سریع یاد می‌گیری و با مرور هوشمند، هیچ‌وقت فراموششون نمی‌کنی." },
  { e: "🃏", t: "فلش‌کارت هوشمند", x: "روی کارت بزن تا معنی فارسیش رو ببینی؛ با ℹ️ مثال‌های واقعی رو ببین و با 🔊 تلفظش رو بشنو." },
  { e: "🧠", t: "مرور هوشمند (SRS)", x: "با دکمه‌های «بلدم» و «هنوز نه»، زمان مرور هر لغت خودش تنظیم می‌شه؛ هر روز بنر «مرور امروز» رو چک کن." },
  { e: "🏆", t: "پروفایل، کوئیز و سطح A2", x: "استریک روزانه و نمودار هفتگی رو در پروفایل ببین، با کوئیز ۱۰ سؤالی خودت رو بسنج و از بنر «سطح A2» وارد درس‌های جدید شو." }
];
var onboardIdx = 0;
function onboardRender(animate) {
  var s = onboardSlides[onboardIdx];
  var cardEl = document.getElementById("onboardCard");
  document.getElementById("onboardEmoji").textContent = s.e;
  document.getElementById("onboardTitle").textContent = s.t;
  document.getElementById("onboardText").textContent = s.x;
  var dots = document.getElementById("onboardDots");
  dots.innerHTML = "";
  for (var i = 0; i < onboardSlides.length; i++) {
    var d = document.createElement("span");
    if (i === onboardIdx) d.className = "on";
    dots.appendChild(d);
  }
  document.getElementById("onboardNextBtn").textContent = (onboardIdx === onboardSlides.length - 1) ? "بزن بریم! 🚀" : "بزن بریم بعدی";
  if (animate) {
    cardEl.classList.remove("onboard-slide-anim");
    void cardEl.offsetWidth;
    cardEl.classList.add("onboard-slide-anim");
  }
}
function onboardClose() {
  document.getElementById("onboardOverlay").classList.remove("show");
  try { localStorage.setItem(ONBOARD_KEY, "1"); } catch (e) { }
}
function maybeShowOnboarding() {
  var done = null;
  try { done = localStorage.getItem(ONBOARD_KEY); } catch (e) { }
  if (done) return;
  onboardIdx = 0;
  onboardRender(false);
  document.getElementById("onboardOverlay").classList.add("show");
}
document.getElementById("onboardNextBtn").addEventListener("click", function () {
  if (onboardIdx < onboardSlides.length - 1) { onboardIdx++; onboardRender(true); }
  else onboardClose();
});
document.getElementById("onboardSkipBtn").addEventListener("click", onboardClose);
var navItems = document.querySelectorAll(".nav-item");
for (var ni = 0; ni < navItems.length; ni++) {
  navItems[ni].addEventListener("click", function () {
    showScreen(this.getAttribute("data-target"));
  });
}
// === A2 batch 1: +5 per category (toward 200) ===
CATEGORIES.a2everyday.words.push(
  { word: "pillow", meaning: "بالش", en: "The pillow is soft.", fa: "بالش نرم است.", icon: "🛏️", examples: [{ en: "The pillow is soft.", fa: "بالش نرم است." }, { en: "I need a new pillow.", fa: "به یک بالش جدید نیاز دارم." }] },
  { word: "blanket", meaning: "پتو", en: "The blanket is warm.", fa: "پتو گرم است.", icon: "🧣", examples: [{ en: "The blanket is warm.", fa: "پتو گرم است." }, { en: "She folded the blanket.", fa: "او پتو را تا کرد." }] },
  { word: "shelf", meaning: "قفسه", en: "The book is on the shelf.", fa: "کتاب روی قفسه است.", icon: "🗄️", examples: [{ en: "The book is on the shelf.", fa: "کتاب روی قفسه است." }, { en: "The shelf is full.", fa: "قفسه پر است." }] },
  { word: "curtain", meaning: "پرده", en: "Open the curtain, please.", fa: "لطفاً پرده را باز کن.", icon: "🪟", examples: [{ en: "Open the curtain, please.", fa: "لطفاً پرده را باز کن." }, { en: "The curtain is blue.", fa: "پرده آبی است." }] },
  { word: "lamp", meaning: "چراغ", en: "The lamp is bright.", fa: "چراغ روشن است.", icon: "💡", examples: [{ en: "The lamp is bright.", fa: "چراغ روشن است." }, { en: "Turn off the lamp.", fa: "چراغ را خاموش کن." }] }
);
CATEGORIES.a2travel.words.push(
  { word: "compass", meaning: "قطب‌نما", en: "The compass shows north.", fa: "قطب‌نما شمال را نشان می‌دهد.", icon: "🧭", examples: [{ en: "The compass shows north.", fa: "قطب‌نما شمال را نشان می‌دهد." }, { en: "I use a compass.", fa: "از قطب‌نما استفاده می‌کنم." }] },
  { word: "cruise", meaning: "سفر دریایی", en: "We went on a cruise.", fa: "به سفر دریایی رفتیم.", icon: "🛳️", examples: [{ en: "We went on a cruise.", fa: "به سفر دریایی رفتیم." }, { en: "The cruise was fun.", fa: "سفر دریایی جالب بود." }] },
  { word: "destination", meaning: "مقصد", en: "Our destination is Rome.", fa: "مقصد ما رم است.", icon: "🎯", examples: [{ en: "Our destination is Rome.", fa: "مقصد ما رم است." }, { en: "We reached our destination.", fa: "به مقصد رسیدیم." }] },
  { word: "adventure", meaning: "ماجراجویی", en: "The trip was an adventure.", fa: "سفر یک ماجراجویی بود.", icon: "🗺️", examples: [{ en: "The trip was an adventure.", fa: "سفر یک ماجراجویی بود." }, { en: "I love adventure.", fa: "ماجراجویی را دوست دارم." }] },
  { word: "route", meaning: "مسیر", en: "This route is fast.", fa: "این مسیر سریع است.", icon: "🛣️", examples: [{ en: "This route is fast.", fa: "این مسیر سریع است." }, { en: "We changed the route.", fa: "مسیر را عوض کردیم." }] }
);
CATEGORIES.a2food.words.push(
  { word: "bake", meaning: "پختن", en: "She bakes bread.", fa: "او نان می‌پزد.", icon: "🥐", examples: [{ en: "She bakes bread.", fa: "او نان می‌پزد." }, { en: "We bake on Sundays.", fa: "یکشنبه‌ها می‌پزیم." }] },
  { word: "roast", meaning: "کبابی/بریان", en: "We roast chicken.", fa: "مرغ را بریان می‌کنیم.", icon: "🍗", examples: [{ en: "We roast chicken.", fa: "مرغ را بریان می‌کنیم." }, { en: "The roast is ready.", fa: "بریان آماده است." }] },
  { word: "spice", meaning: "ادویه", en: "Add a little spice.", fa: "کمی ادویه اضافه کن.", icon: "🌶️", examples: [{ en: "Add a little spice.", fa: "کمی ادویه اضافه کن." }, { en: "This spice is strong.", fa: "این ادویه تند است." }] },
  { word: "flavor", meaning: "طعم", en: "The flavor is great.", fa: "طعم عالی است.", icon: "👅", examples: [{ en: "The flavor is great.", fa: "طعم عالی است." }, { en: "I love this flavor.", fa: "این طعم را دوست دارم." }] },
  { word: "meal", meaning: "وعده غذایی", en: "The meal is ready.", fa: "وعده آماده است.", icon: "🍽️", examples: [{ en: "The meal is ready.", fa: "وعده آماده است." }, { en: "We had a big meal.", fa: "یک وعده بزرگ خوردیم." }] }
);
CATEGORIES.a2work.words.push(
  { word: "career", meaning: "حرفه", en: "She has a good career.", fa: "او حرفه خوبی دارد.", icon: "📈", examples: [{ en: "She has a good career.", fa: "او حرفه خوبی دارد." }, { en: "He plans his career.", fa: "او حرفه‌اش را برنامه‌ریزی می‌کند." }] },
  { word: "workplace", meaning: "محل کار", en: "The workplace is clean.", fa: "محل کار تمیز است.", icon: "🏢", examples: [{ en: "The workplace is clean.", fa: "محل کار تمیز است." }, { en: "My workplace is near.", fa: "محل کارم نزدیک است." }] },
  { word: "assignment", meaning: "تکلیف/محول‌شده", en: "The assignment is due Friday.", fa: "تکلیف تا جمعه است.", icon: "📋", examples: [{ en: "The assignment is due Friday.", fa: "تکلیف تا جمعه است." }, { en: "I finished the assignment.", fa: "تکلیف را تمام کردم." }] },
  { word: "workforce", meaning: "نیروی کار", en: "The workforce is skilled.", fa: "نیروی کار ماهر است.", icon: "👷", examples: [{ en: "The workforce is skilled.", fa: "نیروی کار ماهر است." }, { en: "The workforce grew.", fa: "نیروی کار بیشتر شد." }] },
  { word: "workshop", meaning: "کارگاه", en: "We had a workshop.", fa: "یک کارگاه داشتیم.", icon: "🛠️", examples: [{ en: "We had a workshop.", fa: "یک کارگاه داشتیم." }, { en: "The workshop was useful.", fa: "کارگاه مفید بود." }] }
);
// === A2 batch 1: +5 per category ===
CATEGORIES.a2everyday.words.push(
  { word: "shower", meaning: "دوش", en: "I take a shower every morning.", fa: "هر صبح دوش می‌گیرم.", icon: "🚿", examples: [{ en: "I take a shower every morning.", fa: "هر صبح دوش می‌گیرم." }, { en: "The shower is warm.", fa: "دوش گرم است." }] },
  { word: "toothbrush", meaning: "مسواک", en: "I brush my teeth with a toothbrush.", fa: "با مسواک دندان‌هایم را مسواک می‌زنم.", icon: "🪥", examples: [{ en: "I brush my teeth with a toothbrush.", fa: "با مسواک دندان‌هایم را مسواک می‌زنم." }, { en: "My toothbrush is blue.", fa: "مسواکم آبی است." }] },
  { word: "wardrobe", meaning: "کمد لباس", en: "My clothes are in the wardrobe.", fa: "لباس‌هایم در کمد لباس است.", icon: "🚪", examples: [{ en: "My clothes are in the wardrobe.", fa: "لباس‌هایم در کمد لباس است." }, { en: "The wardrobe is big.", fa: "کمد لباس بزرگ است." }] },
  { word: "ceiling", meaning: "سقف", en: "The ceiling is white.", fa: "سقف سفید است.", icon: "⬆️", examples: [{ en: "The ceiling is white.", fa: "سقف سفید است." }, { en: "The light is on the ceiling.", fa: "چراغ روی سقف است." }] },
  { word: "stair", meaning: "پله", en: "We walk up the stairs.", fa: "از پله‌ها بالا می‌رویم.", icon: "🪜", examples: [{ en: "We walk up the stairs.", fa: "از پله‌ها بالا می‌رویم." }, { en: "The stair is steep.", fa: "پله تند است." }] }
);
CATEGORIES.a2travel.words.push(
  { word: "terminal", meaning: "ترمینال", en: "The bus terminal is busy.", fa: "ترمینال اتوبوس شلوغ است.", icon: "🚌", examples: [{ en: "The bus terminal is busy.", fa: "ترمینال اتوبوس شلوغ است." }, { en: "The terminal is near the airport.", fa: "ترمینال نزدیک فرودگاه است." }] },
  { word: "aisle", meaning: "راهرو", en: "My seat is by the aisle.", fa: "صندلی‌ام کنار راهرو است.", icon: "🚶", examples: [{ en: "My seat is by the aisle.", fa: "صندلی‌ام کنار راهرو است." }, { en: "Walk down the aisle.", fa: "از راهرو رد شو." }] },
  { word: "layover", meaning: "توقف بین پرواز", en: "We have a layover in Dubai.", fa: "در دبی توقف بین پرواز داریم.", icon: "", examples: [{ en: "We have a layover in Dubai.", fa: "در دبی توقف بین پرواز داریم." }, { en: "The layover is two hours.", fa: "توقف دو ساعت است." }] },
  { word: "compass", meaning: "قطب‌نما", en: "The compass shows north.", fa: "قطب‌نما شمال را نشان می‌دهد.", icon: "🧭", examples: [{ en: "The compass shows north.", fa: "قطب‌نما شمال را نشان می‌دهد." }, { en: "I use a compass.", fa: "از قطب‌نما استفاده می‌کنم." }] },
  { word: "voyage", meaning: "سفر دریایی طولانی", en: "The voyage took ten days.", fa: "سفر دریایی ده روز طول کشید.", icon: "🚢", examples: [{ en: "The voyage took ten days.", fa: "سفر دریایی ده روز طول کشید." }, { en: "The voyage was smooth.", fa: "سفر دریایی آرام بود." }] }
);
CATEGORIES.a2food.words.push(
  { word: "apron", meaning: "پیش‌بند", en: "She wears an apron.", fa: "او پیش‌بند می‌پوشد.", icon: "👩‍🍳", examples: [{ en: "She wears an apron.", fa: "او پیش‌بند می‌پوشد." }, { en: "The apron is clean.", fa: "پیش‌بند تمیز است." }] },
  { word: "skillet", meaning: "ماهیتابه", en: "The skillet is hot.", fa: "ماهیتابه داغ است.", icon: "🍳", examples: [{ en: "The skillet is hot.", fa: "ماهیتابه داغ است." }, { en: "The skillet is heavy.", fa: "ماهیتابه سنگین است." }] },
  { word: "spatula", meaning: "کفگیر", en: "I use a spatula.", fa: "از کفگیر استفاده می‌کنم.", icon: "🥄", examples: [{ en: "I use a spatula.", fa: "از کفگیر استفاده می‌کنم." }, { en: "The spatula is clean.", fa: "کفگیر تمیز است." }] },
  { word: "broth", meaning: "آب گوشت", en: "The broth is hot.", fa: "آب گوشت داغ است.", icon: "🍲", examples: [{ en: "The broth is hot.", fa: "آب گوشت داغ است." }, { en: "The broth is tasty.", fa: "آب گوشت خوشمزه است." }] },
  { word: "dough", meaning: "خمیر", en: "The dough is soft.", fa: "خمیر نرم است.", icon: "🥖", examples: [{ en: "The dough is soft.", fa: "خمیر نرم است." }, { en: "The dough is ready.", fa: "خمیر آماده است." }] }
);
CATEGORIES.a2work.words.push(
  { word: "payroll", meaning: "فهرست حقوق", en: "The payroll is ready.", fa: "فهرست حقوق آماده است.", icon: "💵", examples: [{ en: "The payroll is ready.", fa: "فهرست حقوق آماده است." }, { en: "The payroll is on Friday.", fa: "فهرست حقوق جمعه است." }] },
  { word: "cubicle", meaning: "غرفه کار", en: "My cubicle is small.", fa: "غرفه کارم کوچک است.", icon: "🏢", examples: [{ en: "My cubicle is small.", fa: "غرفه کارم کوچک است." }, { en: "The cubicle is quiet.", fa: "غرفه ساکت است." }] },
  { word: "memo", meaning: "یادداشت اداری", en: "I read the memo.", fa: "یادداشت اداری را خواندم.", icon: "📝", examples: [{ en: "I read the memo.", fa: "یادداشت اداری را خواندم." }, { en: "The memo is short.", fa: "یادداشت کوتاه است." }] },
  { word: "commute", meaning: "رفت‌وآمد به کار", en: "My commute is short.", fa: "رفت‌وآمدم کوتاه است.", icon: "🚗", examples: [{ en: "My commute is short.", fa: "رفت‌وآمدم کوتاه است." }, { en: "My commute is one hour.", fa: "رفت‌وآمدم یک ساعت است." }] },
  { word: "freelance", meaning: "آزادکاری", en: "She works freelance.", fa: "او آزادکار است.", icon: "💻", examples: [{ en: "She works freelance.", fa: "او آزادکار است." }, { en: "He does freelance work.", fa: "او کار آزاد انجام می‌دهد." }] }
);
// === A2 expansion batch 1: +10 everyday, +10 travel ===
CATEGORIES.a2everyday.words.push(
  {
    word: "receipt",
    meaning: "رسید خرید",
    en: "Keep the receipt after shopping.",
    fa: "بعد از خرید رسید را نگه دار.",
    icon: "🧾",
    examples: [
      { en: "Keep the receipt after shopping.", fa: "بعد از خرید رسید را نگه دار." },
      { en: "Can I have a receipt, please?", fa: "می‌شود لطفاً رسید بدهید؟" },
      { en: "She checked the receipt at home.", fa: "او رسید را در خانه بررسی کرد." }
    ]
  },
  {
    word: "wallet",
    meaning: "کیف پول",
    en: "I keep my cards in my wallet.",
    fa: "کارت‌هایم را در کیف پولم نگه می‌دارم.",
    icon: "👛",
    examples: [
      { en: "I keep my cards in my wallet.", fa: "کارت‌هایم را در کیف پولم نگه می‌دارم." },
      { en: "He forgot his wallet at home.", fa: "او کیف پولش را در خانه جا گذاشت." },
      { en: "My wallet is in my bag.", fa: "کیف پولم داخل کیفم است." }
    ]
  },
  {
    word: "mirror",
    meaning: "آینه",
    en: "There is a mirror in the hallway.",
    fa: "در راهرو یک آینه هست.",
    icon: "🪞",
    examples: [
      { en: "There is a mirror in the hallway.", fa: "در راهرو یک آینه هست." },
      { en: "She looked in the mirror.", fa: "او در آینه نگاه کرد." },
      { en: "The mirror is clean.", fa: "آینه تمیز است." }
    ]
  },
  {
    word: "drawer",
    meaning: "کشو",
    en: "The keys are in the drawer.",
    fa: "کلیدها داخل کشو هستند.",
    icon: "🗄️",
    examples: [
      { en: "The keys are in the drawer.", fa: "کلیدها داخل کشو هستند." },
      { en: "Open the top drawer.", fa: "کشوی بالایی را باز کن." },
      { en: "This drawer is stuck.", fa: "این کشو گیر کرده است." }
    ]
  },
  {
    word: "charger",
    meaning: "شارژر",
    en: "I need my phone charger.",
    fa: "به شارژر گوشی‌ام نیاز دارم.",
    icon: "🔌",
    examples: [
      { en: "I need my phone charger.", fa: "به شارژر گوشی‌ام نیاز دارم." },
      { en: "Where is the charger?", fa: "شارژر کجاست؟" },
      { en: "The charger is on the desk.", fa: "شارژر روی میز است." }
    ]
  },
  {
    word: "remote",
    meaning: "کنترل از راه دور",
    en: "The remote is under the sofa.",
    fa: "کنترل زیر مبل است.",
    icon: "📺",
    examples: [
      { en: "The remote is under the sofa.", fa: "کنترل زیر مبل است." },
      { en: "Pass me the remote, please.", fa: "لطفاً کنترل را بده." },
      { en: "I cannot find the remote.", fa: "نمی‌توانم کنترل را پیدا کنم." }
    ]
  },
  {
    word: "calendar",
    meaning: "تقویم",
    en: "Mark the date on the calendar.",
    fa: "تاریخ را روی تقویم علامت بزن.",
    icon: "📅",
    examples: [
      { en: "Mark the date on the calendar.", fa: "تاریخ را روی تقویم علامت بزن." },
      { en: "The calendar is on the wall.", fa: "تقویم روی دیوار است." },
      { en: "I checked my calendar.", fa: "تقویمم را چک کردم." }
    ]
  },
  {
    word: "schedule",
    meaning: "برنامه زمانی",
    en: "My schedule is full today.",
    fa: "برنامه امروز من پر است.",
    icon: "🗓️",
    examples: [
      { en: "My schedule is full today.", fa: "برنامه امروز من پر است." },
      { en: "Check your schedule before calling.", fa: "قبل از تماس برنامه‌ات را چک کن." },
      { en: "We changed the schedule.", fa: "برنامه زمانی را تغییر دادیم." }
    ]
  },
  {
    word: "neighbor",
    meaning: "همسایه",
    en: "Our neighbor is very kind.",
    fa: "همسایه ما خیلی مهربان است.",
    icon: "🏘️",
    examples: [
      { en: "Our neighbor is very kind.", fa: "همسایه ما خیلی مهربان است." },
      { en: "I talked to my neighbor.", fa: "با همسایه‌ام صحبت کردم." },
      { en: "The neighbor has a small dog.", fa: "همسایه یک سگ کوچک دارد." }
    ]
  },
  {
    word: "entrance",
    meaning: "ورودی",
    en: "The entrance is on the left.",
    fa: "ورودی سمت چپ است.",
    icon: "🚪",
    examples: [
      { en: "The entrance is on the left.", fa: "ورودی سمت چپ است." },
      { en: "Wait near the entrance.", fa: "نزدیک ورودی منتظر بمان." },
      { en: "The main entrance is closed.", fa: "ورودی اصلی بسته است." }
    ]
  }
);

CATEGORIES.a2travel.words.push(
  {
    word: "boarding pass",
    meaning: "کارت پرواز",
    en: "Show your boarding pass at the gate.",
    fa: "کارت پروازت را در گیت نشان بده.",
    icon: "🎫",
    examples: [
      { en: "Show your boarding pass at the gate.", fa: "کارت پروازت را در گیت نشان بده." },
      { en: "I printed my boarding pass.", fa: "کارت پروازم را چاپ کردم." },
      { en: "She lost her boarding pass.", fa: "او کارت پروازش را گم کرد." }
    ]
  },
  {
    word: "customs",
    meaning: "گمرک",
    en: "We waited at customs for an hour.",
    fa: "یک ساعت در گمرک منتظر ماندیم.",
    icon: "🛂",
    examples: [
      { en: "We waited at customs for an hour.", fa: "یک ساعت در گمرک منتظر ماندیم." },
      { en: "Customs checked our bags.", fa: "گمرک کیف‌های ما را بررسی کرد." },
      { en: "Go through customs after landing.", fa: "بعد از فرود از گمرک عبور کن." }
    ]
  },
  {
    word: "departure",
    meaning: "حرکت، خروج",
    en: "The departure time is 9 a.m.",
    fa: "زمان حرکت ساعت ۹ صبح است.",
    icon: "🛫",
    examples: [
      { en: "The departure time is 9 a.m.", fa: "زمان حرکت ساعت ۹ صبح است." },
      { en: "Our departure was delayed.", fa: "حرکت ما تأخیر داشت." },
      { en: "Check the departure board.", fa: "تابلوی خروج را چک کن." }
    ]
  },
  {
    word: "arrival",
    meaning: "رسیدن، ورود",
    en: "Our arrival time is 6 p.m.",
    fa: "زمان رسیدن ما ساعت ۶ عصر است.",
    icon: "🛬",
    examples: [
      { en: "Our arrival time is 6 p.m.", fa: "زمان رسیدن ما ساعت ۶ عصر است." },
      { en: "The arrival gate changed.", fa: "گیت ورود تغییر کرد." },
      { en: "We waited for her arrival.", fa: "منتظر رسیدن او بودیم." }
    ]
  },
  {
    word: "luggage claim",
    meaning: "محل دریافت چمدان",
    en: "Go to luggage claim after the flight.",
    fa: "بعد از پرواز به محل دریافت چمدان برو.",
    icon: "🧳",
    examples: [
      { en: "Go to luggage claim after the flight.", fa: "بعد از پرواز به محل دریافت چمدان برو." },
      { en: "The luggage claim area is crowded.", fa: "محل دریافت چمدان شلوغ است." },
      { en: "I waited at luggage claim.", fa: "در محل دریافت چمدان منتظر ماندم." }
    ]
  },
  {
    word: "reservation",
    meaning: "رزرو",
    en: "We have a hotel reservation.",
    fa: "ما رزرو هتل داریم.",
    icon: "🏨",
    examples: [
      { en: "We have a hotel reservation.", fa: "ما رزرو هتل داریم." },
      { en: "Can you check my reservation?", fa: "می‌توانید رزرو من را بررسی کنید؟" },
      { en: "The reservation is for two nights.", fa: "رزرو برای دو شب است." }
    ]
  },
  {
    word: "sightseeing",
    meaning: "بازدید از دیدنی‌ها",
    en: "We went sightseeing in the old city.",
    fa: "در شهر قدیمی از دیدنی‌ها بازدید کردیم.",
    icon: "🏛️",
    examples: [
      { en: "We went sightseeing in the old city.", fa: "در شهر قدیمی از دیدنی‌ها بازدید کردیم." },
      { en: "Sightseeing is fun in spring.", fa: "بازدید از دیدنی‌ها در بهار لذت‌بخش است." },
      { en: "They planned a sightseeing tour.", fa: "آن‌ها یک تور بازدید از دیدنی‌ها برنامه‌ریزی کردند." }
    ]
  },
  {
    word: "souvenir",
    meaning: "سوغاتی",
    en: "I bought a souvenir for my friend.",
    fa: "برای دوستم یک سوغاتی خریدم.",
    icon: "🎁",
    examples: [
      { en: "I bought a souvenir for my friend.", fa: "برای دوستم یک سوغاتی خریدم." },
      { en: "This magnet is a souvenir.", fa: "این آهنربا یک سوغاتی است." },
      { en: "She collects souvenirs.", fa: "او سوغاتی جمع می‌کند." }
    ]
  },
  {
    word: "tour guide",
    meaning: "راهنمای تور",
    en: "The tour guide explained the history.",
    fa: "راهنمای تور تاریخچه را توضیح داد.",
    icon: "🧭",
    examples: [
      { en: "The tour guide explained the history.", fa: "راهنمای تور تاریخچه را توضیح داد." },
      { en: "Our tour guide was friendly.", fa: "راهنمای تور ما خوش‌برخورد بود." },
      { en: "Ask the tour guide for help.", fa: "از راهنمای تور کمک بخواه." }
    ]
  },
  {
    word: "travel insurance",
    meaning: "بیمه سفر",
    en: "Travel insurance is useful for long trips.",
    fa: "بیمه سفر برای سفرهای طولانی مفید است.",
    icon: "🛡️",
    examples: [
      { en: "Travel insurance is useful for long trips.", fa: "بیمه سفر برای سفرهای طولانی مفید است." },
      { en: "We bought travel insurance online.", fa: "بیمه سفر را آنلاین خریدیم." },
      { en: "Check your travel insurance before leaving.", fa: "قبل از رفتن بیمه سفرت را بررسی کن." }
    ]
  }
);
// === A2 expansion patch 2: +10 food, +10 work ===
CATEGORIES.a2food.words.push(
  {
    word: "ingredient",
    meaning: "مواد اولیه",
    en: "Flour is an important ingredient in bread.",
    fa: "آرد یکی از مواد اولیه مهم در نان است.",
    icon: "🥣",
    examples: [
      { en: "Flour is an important ingredient in bread.", fa: "آرد یکی از مواد اولیه مهم در نان است." },
      { en: "Check the ingredients before cooking.", fa: "قبل از آشپزی مواد اولیه را بررسی کن." },
      { en: "This soup has simple ingredients.", fa: "این سوپ مواد اولیه ساده‌ای دارد." }
    ]
  },
  {
    word: "recipe",
    meaning: "دستور پخت",
    en: "This recipe is easy to follow.",
    fa: "این دستور پخت راحت قابل انجام است.",
    icon: "📖",
    examples: [
      { en: "This recipe is easy to follow.", fa: "این دستور پخت راحت قابل انجام است." },
      { en: "I found a new recipe online.", fa: "یک دستور پخت جدید آنلاین پیدا کردم." },
      { en: "She wrote the recipe in her notebook.", fa: "او دستور پخت را در دفترش نوشت." }
    ]
  },
  {
    word: "stir",
    meaning: "هم زدن",
    en: "Stir the soup slowly.",
    fa: "سوپ را آرام هم بزن.",
    icon: "🥄",
    examples: [
      { en: "Stir the soup slowly.", fa: "سوپ را آرام هم بزن." },
      { en: "Stir the sauce for two minutes.", fa: "سس را دو دقیقه هم بزن." },
      { en: "Do not forget to stir the rice.", fa: "فراموش نکن برنج را هم بزنی." }
    ]
  },
  {
    word: "boil",
    meaning: "جوشاندن",
    en: "Boil the water before making tea.",
    fa: "قبل از درست کردن چای آب را بجوشان.",
    icon: "♨️",
    examples: [
      { en: "Boil the water before making tea.", fa: "قبل از درست کردن چای آب را بجوشان." },
      { en: "The soup began to boil.", fa: "سوپ شروع به جوشیدن کرد." },
      { en: "Boil the eggs for ten minutes.", fa: "تخم‌مرغ‌ها را ده دقیقه بجوشان." }
    ]
  },
  {
    word: "grill",
    meaning: "کباب کردن",
    en: "We grill fish on weekends.",
    fa: "آخر هفته‌ها ماهی کباب می‌کنیم.",
    icon: "🔥",
    examples: [
      { en: "We grill fish on weekends.", fa: "آخر هفته‌ها ماهی کباب می‌کنیم." },
      { en: "He grilled vegetables for dinner.", fa: "او برای شام سبزیجات کباب کرد." },
      { en: "The chicken is on the grill.", fa: "مرغ روی کباب‌پز است." }
    ]
  },
  {
    word: "leftovers",
    meaning: "غذای باقی‌مانده",
    en: "We ate leftovers for lunch.",
    fa: "برای ناهار غذای باقی‌مانده خوردیم.",
    icon: "🍱",
    examples: [
      { en: "We ate leftovers for lunch.", fa: "برای ناهار غذای باقی‌مانده خوردیم." },
      { en: "Put the leftovers in the fridge.", fa: "غذای باقی‌مانده را در یخچال بگذار." },
      { en: "There are no leftovers today.", fa: "امروز غذای باقی‌مانده‌ای نیست." }
    ]
  },
  {
    word: "portion",
    meaning: "سهم غذا، پرس",
    en: "The portion is too small.",
    fa: "این پرس غذا خیلی کوچک است.",
    icon: "🍽️",
    examples: [
      { en: "The portion is too small.", fa: "این پرس غذا خیلی کوچک است." },
      { en: "I ordered a large portion.", fa: "من یک پرس بزرگ سفارش دادم." },
      { en: "One portion is enough for me.", fa: "یک پرس برای من کافی است." }
    ]
  },
  {
    word: "appetizer",
    meaning: "پیش‌غذا",
    en: "We ordered soup as an appetizer.",
    fa: "ما سوپ را به عنوان پیش‌غذا سفارش دادیم.",
    icon: "🥗",
    examples: [
      { en: "We ordered soup as an appetizer.", fa: "ما سوپ را به عنوان پیش‌غذا سفارش دادیم." },
      { en: "The appetizer was delicious.", fa: "پیش‌غذا خوشمزه بود." },
      { en: "Do you want an appetizer?", fa: "پیش‌غذا می‌خواهی؟" }
    ]
  },
  {
    word: "main course",
    meaning: "غذای اصلی",
    en: "Fish is the main course tonight.",
    fa: "امشب ماهی غذای اصلی است.",
    icon: "🍛",
    examples: [
      { en: "Fish is the main course tonight.", fa: "امشب ماهی غذای اصلی است." },
      { en: "The main course was very filling.", fa: "غذای اصلی خیلی سیرکننده بود." },
      { en: "We chose pasta as the main course.", fa: "ما پاستا را به عنوان غذای اصلی انتخاب کردیم." }
    ]
  },
  {
    word: "dessert",
    meaning: "دسر",
    en: "We had ice cream for dessert.",
    fa: "برای دسر بستنی خوردیم.",
    icon: "🍨",
    examples: [
      { en: "We had ice cream for dessert.", fa: "برای دسر بستنی خوردیم." },
      { en: "This restaurant has great desserts.", fa: "این رستوران دسرهای عالی دارد." },
      { en: "I am too full for dessert.", fa: "برای دسر خیلی سیرم." }
    ]
  }
);

CATEGORIES.a2work.words.push(
  {
    word: "deadline",
    meaning: "مهلت انجام کار",
    en: "The deadline is tomorrow.",
    fa: "مهلت انجام کار فرداست.",
    icon: "⏰",
    examples: [
      { en: "The deadline is tomorrow.", fa: "مهلت انجام کار فرداست." },
      { en: "We finished before the deadline.", fa: "قبل از مهلت کار را تمام کردیم." },
      { en: "Do not miss the deadline.", fa: "مهلت را از دست نده." }
    ]
  },
  {
    word: "task",
    meaning: "وظیفه، کار",
    en: "This task is easy.",
    fa: "این کار آسان است.",
    icon: "✅",
    examples: [
      { en: "This task is easy.", fa: "این کار آسان است." },
      { en: "I have three tasks today.", fa: "امروز سه کار دارم." },
      { en: "She completed the task quickly.", fa: "او کار را سریع کامل کرد." }
    ]
  },
  {
    word: "manager",
    meaning: "مدیر",
    en: "The manager called a meeting.",
    fa: "مدیر یک جلسه برگزار کرد.",
    icon: "🧑‍💼",
    examples: [
      { en: "The manager called a meeting.", fa: "مدیر یک جلسه برگزار کرد." },
      { en: "My manager is very helpful.", fa: "مدیر من خیلی کمک‌کننده است." },
      { en: "Ask the manager for permission.", fa: "از مدیر اجازه بگیر." }
    ]
  },
  {
    word: "coworker",
    meaning: "همکار",
    en: "My coworker helped me with the report.",
    fa: "همکارم در گزارش به من کمک کرد.",
    icon: "🤝",
    examples: [
      { en: "My coworker helped me with the report.", fa: "همکارم در گزارش به من کمک کرد." },
      { en: "She is a friendly coworker.", fa: "او همکار خوش‌برخوردی است." },
      { en: "I had lunch with my coworkers.", fa: "با همکارانم ناهار خوردم." }
    ]
  },
  {
    word: "meeting room",
    meaning: "اتاق جلسه",
    en: "The meeting room is on the second floor.",
    fa: "اتاق جلسه در طبقه دوم است.",
    icon: "🏢",
    examples: [
      { en: "The meeting room is on the second floor.", fa: "اتاق جلسه در طبقه دوم است." },
      { en: "We booked the meeting room.", fa: "اتاق جلسه را رزرو کردیم." },
      { en: "The meeting room is full.", fa: "اتاق جلسه پر است." }
    ]
  },
  {
    word: "presentation",
    meaning: "ارائه",
    en: "I have a presentation at work.",
    fa: "در محل کار یک ارائه دارم.",
    icon: "📊",
    examples: [
      { en: "I have a presentation at work.", fa: "در محل کار یک ارائه دارم." },
      { en: "Her presentation was clear.", fa: "ارائه او واضح بود." },
      { en: "We prepared the presentation together.", fa: "ما ارائه را با هم آماده کردیم." }
    ]
  },
  {
    word: "report",
    meaning: "گزارش",
    en: "Please send me the report.",
    fa: "لطفاً گزارش را برایم بفرست.",
    icon: "📄",
    examples: [
      { en: "Please send me the report.", fa: "لطفاً گزارش را برایم بفرست." },
      { en: "The report is almost ready.", fa: "گزارش تقریباً آماده است." },
      { en: "I read the report last night.", fa: "دیشب گزارش را خواندم." }
    ]
  },
  {
    word: "client",
    meaning: "مشتری، کارفرما",
    en: "The client liked our idea.",
    fa: "مشتری از ایده ما خوشش آمد.",
    icon: "🧾",
    examples: [
      { en: "The client liked our idea.", fa: "مشتری از ایده ما خوشش آمد." },
      { en: "We called the client this morning.", fa: "امروز صبح با مشتری تماس گرفتیم." },
      { en: "The client asked for changes.", fa: "مشتری درخواست تغییرات داد." }
    ]
  },
  {
    word: "contract",
    meaning: "قرارداد",
    en: "He signed the contract yesterday.",
    fa: "او دیروز قرارداد را امضا کرد.",
    icon: "📝",
    examples: [
      { en: "He signed the contract yesterday.", fa: "او دیروز قرارداد را امضا کرد." },
      { en: "Read the contract carefully.", fa: "قرارداد را با دقت بخوان." },
      { en: "The contract is for one year.", fa: "قرارداد برای یک سال است." }
    ]
  },
  {
    word: "salary",
    meaning: "حقوق",
    en: "She receives her salary every month.",
    fa: "او هر ماه حقوقش را دریافت می‌کند.",
    icon: "💰",
    examples: [
      { en: "She receives her salary every month.", fa: "او هر ماه حقوقش را دریافت می‌کند." },
      { en: "The salary is good for this job.", fa: "حقوق این شغل خوب است." },
      { en: "He asked about the salary.", fa: "او درباره حقوق پرسید." }
    ]
  }
);
// === A2 expansion patch 3: +10 everyday, +10 travel ===
CATEGORIES.a2everyday.words.push(
  {
    word: "appointment card",
    meaning: "کارت نوبت",
    en: "I put the appointment card in my wallet.",
    fa: "کارت نوبت را داخل کیف پولم گذاشتم.",
    icon: "🪪",
    examples: [
      { en: "I put the appointment card in my wallet.", fa: "کارت نوبت را داخل کیف پولم گذاشتم." },
      { en: "Bring your appointment card tomorrow.", fa: "فردا کارت نوبتت را بیاور." },
      { en: "The appointment card has the time on it.", fa: "زمان روی کارت نوبت نوشته شده است." }
    ]
  },
  {
    word: "doorbell",
    meaning: "زنگ در",
    en: "The doorbell rang twice.",
    fa: "زنگ در دو بار زنگ خورد.",
    icon: "🔔",
    examples: [
      { en: "The doorbell rang twice.", fa: "زنگ در دو بار زنگ خورد." },
      { en: "I heard the doorbell.", fa: "صدای زنگ در را شنیدم." },
      { en: "The doorbell is broken.", fa: "زنگ در خراب است." }
    ]
  },
  {
    word: "balcony",
    meaning: "بالکن",
    en: "We drink tea on the balcony.",
    fa: "ما در بالکن چای می‌نوشیم.",
    icon: "🏡",
    examples: [
      { en: "We drink tea on the balcony.", fa: "ما در بالکن چای می‌نوشیم." },
      { en: "The balcony has a nice view.", fa: "بالکن منظره خوبی دارد." },
      { en: "She put flowers on the balcony.", fa: "او روی بالکن گل گذاشت." }
    ]
  },
  {
    word: "elevator",
    meaning: "آسانسور",
    en: "The elevator is slow today.",
    fa: "آسانسور امروز کند است.",
    icon: "🛗",
    examples: [
      { en: "The elevator is slow today.", fa: "آسانسور امروز کند است." },
      { en: "Take the elevator to the fifth floor.", fa: "با آسانسور به طبقه پنجم برو." },
      { en: "The elevator doors opened.", fa: "درهای آسانسور باز شدند." }
    ]
  },
  {
    word: "basement",
    meaning: "زیرزمین",
    en: "The washing machine is in the basement.",
    fa: "ماشین لباس‌شویی در زیرزمین است.",
    icon: "🏠",
    examples: [
      { en: "The washing machine is in the basement.", fa: "ماشین لباس‌شویی در زیرزمین است." },
      { en: "The basement is cold.", fa: "زیرزمین سرد است." },
      { en: "We store old boxes in the basement.", fa: "جعبه‌های قدیمی را در زیرزمین نگه می‌داریم." }
    ]
  },
  {
    word: "laundry basket",
    meaning: "سبد لباس چرک",
    en: "Put your clothes in the laundry basket.",
    fa: "لباس‌هایت را داخل سبد لباس چرک بگذار.",
    icon: "🧺",
    examples: [
      { en: "Put your clothes in the laundry basket.", fa: "لباس‌هایت را داخل سبد لباس چرک بگذار." },
      { en: "The laundry basket is full.", fa: "سبد لباس چرک پر است." },
      { en: "I carried the laundry basket upstairs.", fa: "سبد لباس چرک را به طبقه بالا بردم." }
    ]
  },
  {
    word: "vacuum cleaner",
    meaning: "جاروبرقی",
    en: "I used the vacuum cleaner in the living room.",
    fa: "در اتاق نشیمن از جاروبرقی استفاده کردم.",
    icon: "🧹",
    examples: [
      { en: "I used the vacuum cleaner in the living room.", fa: "در اتاق نشیمن از جاروبرقی استفاده کردم." },
      { en: "The vacuum cleaner is noisy.", fa: "جاروبرقی پر سر و صداست." },
      { en: "Where is the vacuum cleaner?", fa: "جاروبرقی کجاست؟" }
    ]
  },
  {
    word: "faucet",
    meaning: "شیر آب",
    en: "Turn off the faucet, please.",
    fa: "لطفاً شیر آب را ببند.",
    icon: "🚰",
    examples: [
      { en: "Turn off the faucet, please.", fa: "لطفاً شیر آب را ببند." },
      { en: "The faucet is leaking.", fa: "شیر آب چکه می‌کند." },
      { en: "I washed my hands at the faucet.", fa: "دست‌هایم را کنار شیر آب شستم." }
    ]
  },
  {
    word: "electric bill",
    meaning: "قبض برق",
    en: "The electric bill is higher this month.",
    fa: "قبض برق این ماه بیشتر است.",
    icon: "💡",
    examples: [
      { en: "The electric bill is higher this month.", fa: "قبض برق این ماه بیشتر است." },
      { en: "I paid the electric bill online.", fa: "قبض برق را آنلاین پرداخت کردم." },
      { en: "Check the electric bill carefully.", fa: "قبض برق را با دقت بررسی کن." }
    ]
  },
  {
    word: "daily routine",
    meaning: "برنامه روزانه",
    en: "My daily routine starts at seven.",
    fa: "برنامه روزانه من ساعت هفت شروع می‌شود.",
    icon: "🔁",
    examples: [
      { en: "My daily routine starts at seven.", fa: "برنامه روزانه من ساعت هفت شروع می‌شود." },
      { en: "Exercise is part of my daily routine.", fa: "ورزش بخشی از برنامه روزانه من است." },
      { en: "Her daily routine is very organized.", fa: "برنامه روزانه او خیلی منظم است." }
    ]
  }
);

CATEGORIES.a2travel.words.push(
  {
    word: "connecting flight",
    meaning: "پرواز بعدی، پرواز اتصال",
    en: "We have a connecting flight in Istanbul.",
    fa: "در استانبول یک پرواز اتصال داریم.",
    icon: "✈️",
    examples: [
      { en: "We have a connecting flight in Istanbul.", fa: "در استانبول یک پرواز اتصال داریم." },
      { en: "My connecting flight leaves at noon.", fa: "پرواز بعدی من ظهر حرکت می‌کند." },
      { en: "I missed my connecting flight.", fa: "پرواز اتصالم را از دست دادم." }
    ]
  },
  {
    word: "passport control",
    meaning: "کنترل گذرنامه",
    en: "Passport control was very fast.",
    fa: "کنترل گذرنامه خیلی سریع بود.",
    icon: "🛂",
    examples: [
      { en: "Passport control was very fast.", fa: "کنترل گذرنامه خیلی سریع بود." },
      { en: "Show your passport at passport control.", fa: "در کنترل گذرنامه پاسپورتت را نشان بده." },
      { en: "There was a line at passport control.", fa: "در کنترل گذرنامه صف بود." }
    ]
  },
  {
    word: "travel agency",
    meaning: "آژانس مسافرتی",
    en: "We booked the trip through a travel agency.",
    fa: "سفر را از طریق آژانس مسافرتی رزرو کردیم.",
    icon: "🏢",
    examples: [
      { en: "We booked the trip through a travel agency.", fa: "سفر را از طریق آژانس مسافرتی رزرو کردیم." },
      { en: "The travel agency gave us a discount.", fa: "آژانس مسافرتی به ما تخفیف داد." },
      { en: "Call the travel agency for details.", fa: "برای جزئیات با آژانس مسافرتی تماس بگیر." }
    ]
  },
  {
    word: "single room",
    meaning: "اتاق یک‌نفره",
    en: "I booked a single room for one night.",
    fa: "برای یک شب یک اتاق یک‌نفره رزرو کردم.",
    icon: "🛏️",
    examples: [
      { en: "I booked a single room for one night.", fa: "برای یک شب یک اتاق یک‌نفره رزرو کردم." },
      { en: "A single room is cheaper.", fa: "اتاق یک‌نفره ارزان‌تر است." },
      { en: "Do you have a single room available?", fa: "اتاق یک‌نفره خالی دارید؟" }
    ]
  },
  {
    word: "double room",
    meaning: "اتاق دونفره",
    en: "We need a double room.",
    fa: "ما یک اتاق دونفره لازم داریم.",
    icon: "🛌",
    examples: [
      { en: "We need a double room.", fa: "ما یک اتاق دونفره لازم داریم." },
      { en: "The double room has a balcony.", fa: "اتاق دونفره بالکن دارد." },
      { en: "They stayed in a double room.", fa: "آن‌ها در یک اتاق دونفره ماندند." }
    ]
  },
  {
    word: "check-in desk",
    meaning: "میز پذیرش",
    en: "Go to the check-in desk first.",
    fa: "اول به میز پذیرش برو.",
    icon: "🧾",
    examples: [
      { en: "Go to the check-in desk first.", fa: "اول به میز پذیرش برو." },
      { en: "The check-in desk opens at six.", fa: "میز پذیرش ساعت شش باز می‌شود." },
      { en: "I waited at the check-in desk.", fa: "کنار میز پذیرش منتظر ماندم." }
    ]
  },
  {
    word: "city center",
    meaning: "مرکز شهر",
    en: "Our hotel is near the city center.",
    fa: "هتل ما نزدیک مرکز شهر است.",
    icon: "🏙️",
    examples: [
      { en: "Our hotel is near the city center.", fa: "هتل ما نزدیک مرکز شهر است." },
      { en: "The city center is crowded.", fa: "مرکز شهر شلوغ است." },
      { en: "We walked around the city center.", fa: "در مرکز شهر قدم زدیم." }
    ]
  },
  {
    word: "map app",
    meaning: "اپلیکیشن نقشه",
    en: "Use a map app to find the hotel.",
    fa: "برای پیدا کردن هتل از اپلیکیشن نقشه استفاده کن.",
    icon: "🗺️",
    examples: [
      { en: "Use a map app to find the hotel.", fa: "برای پیدا کردن هتل از اپلیکیشن نقشه استفاده کن." },
      { en: "The map app shows traffic.", fa: "اپلیکیشن نقشه ترافیک را نشان می‌دهد." },
      { en: "I opened the map app.", fa: "اپلیکیشن نقشه را باز کردم." }
    ]
  },
  {
    word: "road trip",
    meaning: "سفر جاده‌ای",
    en: "We went on a road trip last summer.",
    fa: "تابستان گذشته به سفر جاده‌ای رفتیم.",
    icon: "🚗",
    examples: [
      { en: "We went on a road trip last summer.", fa: "تابستان گذشته به سفر جاده‌ای رفتیم." },
      { en: "A road trip can be exciting.", fa: "سفر جاده‌ای می‌تواند هیجان‌انگیز باشد." },
      { en: "They planned a road trip to the north.", fa: "آن‌ها یک سفر جاده‌ای به شمال برنامه‌ریزی کردند." }
    ]
  },
  {
    word: "travel bag",
    meaning: "ساک سفر",
    en: "My travel bag is small but strong.",
    fa: "ساک سفرم کوچک ولی محکم است.",
    icon: "👜",
    examples: [
      { en: "My travel bag is small but strong.", fa: "ساک سفرم کوچک ولی محکم است." },
      { en: "Put your clothes in the travel bag.", fa: "لباس‌هایت را داخل ساک سفر بگذار." },
      { en: "She bought a new travel bag.", fa: "او یک ساک سفر جدید خرید." }
    ]
  }
);
// === A2 expansion patch 4: +10 food, +10 work ===
CATEGORIES.a2food.words.push(
  {
    word: "vegetarian",
    meaning: "گیاه‌خوار",
    en: "My sister is vegetarian.",
    fa: "خواهرم گیاه‌خوار است.",
    icon: "🥦",
    examples: [
      { en: "My sister is vegetarian.", fa: "خواهرم گیاه‌خوار است." },
      { en: "Do you have vegetarian food?", fa: "غذای گیاه‌خواری دارید؟" },
      { en: "This soup is vegetarian.", fa: "این سوپ گیاه‌خواری است." }
    ]
  },
  {
    word: "homemade",
    meaning: "خانگی",
    en: "This cake is homemade.",
    fa: "این کیک خانگی است.",
    icon: "🍰",
    examples: [
      { en: "This cake is homemade.", fa: "این کیک خانگی است." },
      { en: "I prefer homemade food.", fa: "غذای خانگی را ترجیح می‌دهم." },
      { en: "The jam is homemade.", fa: "مربا خانگی است." }
    ]
  },
  {
    word: "takeaway",
    meaning: "غذای بیرون‌بر",
    en: "We ordered takeaway for dinner.",
    fa: "برای شام غذای بیرون‌بر سفارش دادیم.",
    icon: "🥡",
    examples: [
      { en: "We ordered takeaway for dinner.", fa: "برای شام غذای بیرون‌بر سفارش دادیم." },
      { en: "This restaurant has takeaway.", fa: "این رستوران بیرون‌بر دارد." },
      { en: "I bought takeaway after work.", fa: "بعد از کار غذای بیرون‌بر خریدم." }
    ]
  },
  {
    word: "buffet",
    meaning: "بوفه، سلف سرویس",
    en: "The hotel has a breakfast buffet.",
    fa: "هتل بوفه صبحانه دارد.",
    icon: "🍳",
    examples: [
      { en: "The hotel has a breakfast buffet.", fa: "هتل بوفه صبحانه دارد." },
      { en: "The buffet was full of fresh food.", fa: "بوفه پر از غذای تازه بود." },
      { en: "We ate at the buffet.", fa: "ما در بوفه غذا خوردیم." }
    ]
  },
  {
    word: "napkin",
    meaning: "دستمال سفره",
    en: "Can I have a napkin, please?",
    fa: "می‌شود لطفاً یک دستمال سفره بدهید؟",
    icon: "🧻",
    examples: [
      { en: "Can I have a napkin, please?", fa: "می‌شود لطفاً یک دستمال سفره بدهید؟" },
      { en: "The napkins are on the table.", fa: "دستمال‌ها روی میز هستند." },
      { en: "She used a napkin after eating.", fa: "او بعد از غذا از دستمال استفاده کرد." }
    ]
  },
  {
    word: "fork",
    meaning: "چنگال",
    en: "I need a fork for the salad.",
    fa: "برای سالاد به چنگال نیاز دارم.",
    icon: "🍴",
    examples: [
      { en: "I need a fork for the salad.", fa: "برای سالاد به چنگال نیاز دارم." },
      { en: "The fork is next to the plate.", fa: "چنگال کنار بشقاب است." },
      { en: "She dropped her fork.", fa: "او چنگالش را انداخت." }
    ]
  },
  {
    word: "knife",
    meaning: "چاقو",
    en: "Use a knife to cut the bread.",
    fa: "برای بریدن نان از چاقو استفاده کن.",
    icon: "🔪",
    examples: [
      { en: "Use a knife to cut the bread.", fa: "برای بریدن نان از چاقو استفاده کن." },
      { en: "The knife is sharp.", fa: "چاقو تیز است." },
      { en: "Put the knife on the table.", fa: "چاقو را روی میز بگذار." }
    ]
  },
  {
    word: "spoon",
    meaning: "قاشق",
    en: "I eat soup with a spoon.",
    fa: "سوپ را با قاشق می‌خورم.",
    icon: "🥄",
    examples: [
      { en: "I eat soup with a spoon.", fa: "سوپ را با قاشق می‌خورم." },
      { en: "The spoon is clean.", fa: "قاشق تمیز است." },
      { en: "Give me a spoon, please.", fa: "لطفاً یک قاشق به من بده." }
    ]
  },
  {
    word: "plate",
    meaning: "بشقاب",
    en: "Put the food on the plate.",
    fa: "غذا را روی بشقاب بگذار.",
    icon: "🍽️",
    examples: [
      { en: "Put the food on the plate.", fa: "غذا را روی بشقاب بگذار." },
      { en: "The plate is hot.", fa: "بشقاب داغ است." },
      { en: "She washed the plates.", fa: "او بشقاب‌ها را شست." }
    ]
  },
  {
    word: "bowl",
    meaning: "کاسه",
    en: "Pour the soup into the bowl.",
    fa: "سوپ را داخل کاسه بریز.",
    icon: "🥣",
    examples: [
      { en: "Pour the soup into the bowl.", fa: "سوپ را داخل کاسه بریز." },
      { en: "The bowl is full of rice.", fa: "کاسه پر از برنج است." },
      { en: "I need a small bowl.", fa: "به یک کاسه کوچک نیاز دارم." }
    ]
  }
);

CATEGORIES.a2work.words.push(
  {
    word: "promotion",
    meaning: "ارتقای شغلی",
    en: "She got a promotion last month.",
    fa: "او ماه گذشته ارتقای شغلی گرفت.",
    icon: "📈",
    examples: [
      { en: "She got a promotion last month.", fa: "او ماه گذشته ارتقای شغلی گرفت." },
      { en: "He worked hard for the promotion.", fa: "او برای ارتقای شغلی سخت کار کرد." },
      { en: "The promotion made her happy.", fa: "ارتقا او را خوشحال کرد." }
    ]
  },
  {
    word: "training",
    meaning: "آموزش کاری",
    en: "New employees have training today.",
    fa: "کارمندان جدید امروز آموزش دارند.",
    icon: "🎓",
    examples: [
      { en: "New employees have training today.", fa: "کارمندان جدید امروز آموزش دارند." },
      { en: "The training was useful.", fa: "آموزش مفید بود." },
      { en: "We need more training.", fa: "ما به آموزش بیشتری نیاز داریم." }
    ]
  },
  {
    word: "experience",
    meaning: "تجربه",
    en: "She has five years of experience.",
    fa: "او پنج سال تجربه دارد.",
    icon: "⭐",
    examples: [
      { en: "She has five years of experience.", fa: "او پنج سال تجربه دارد." },
      { en: "Experience is important for this job.", fa: "تجربه برای این شغل مهم است." },
      { en: "I gained experience at my last job.", fa: "در شغل قبلی‌ام تجربه به دست آوردم." }
    ]
  },
  {
    word: "skill",
    meaning: "مهارت",
    en: "Communication is an important skill.",
    fa: "ارتباط برقرار کردن یک مهارت مهم است.",
    icon: "🧠",
    examples: [
      { en: "Communication is an important skill.", fa: "ارتباط برقرار کردن یک مهارت مهم است." },
      { en: "She has strong computer skills.", fa: "او مهارت‌های کامپیوتری قوی دارد." },
      { en: "You can improve this skill.", fa: "می‌توانی این مهارت را بهتر کنی." }
    ]
  },
  {
    word: "teamwork",
    meaning: "کار گروهی",
    en: "Teamwork helps us finish faster.",
    fa: "کار گروهی کمک می‌کند سریع‌تر تمام کنیم.",
    icon: "👥",
    examples: [
      { en: "Teamwork helps us finish faster.", fa: "کار گروهی کمک می‌کند سریع‌تر تمام کنیم." },
      { en: "Good teamwork is important.", fa: "کار گروهی خوب مهم است." },
      { en: "This project needs teamwork.", fa: "این پروژه به کار گروهی نیاز دارد." }
    ]
  },
  {
    word: "responsibility",
    meaning: "مسئولیت",
    en: "This task is my responsibility.",
    fa: "این کار مسئولیت من است.",
    icon: "📌",
    examples: [
      { en: "This task is my responsibility.", fa: "این کار مسئولیت من است." },
      { en: "She has a lot of responsibility.", fa: "او مسئولیت زیادی دارد." },
      { en: "Responsibility is part of the job.", fa: "مسئولیت بخشی از شغل است." }
    ]
  },
  {
    word: "position",
    meaning: "موقعیت شغلی",
    en: "He applied for a new position.",
    fa: "او برای یک موقعیت شغلی جدید درخواست داد.",
    icon: "💼",
    examples: [
      { en: "He applied for a new position.", fa: "او برای یک موقعیت شغلی جدید درخواست داد." },
      { en: "This position needs experience.", fa: "این موقعیت شغلی به تجربه نیاز دارد." },
      { en: "The position is full-time.", fa: "این موقعیت تمام‌وقت است." }
    ]
  },
  {
    word: "application",
    meaning: "درخواست، فرم درخواست",
    en: "I sent my job application yesterday.",
    fa: "دیروز درخواست شغلی‌ام را فرستادم.",
    icon: "📨",
    examples: [
      { en: "I sent my job application yesterday.", fa: "دیروز درخواست شغلی‌ام را فرستادم." },
      { en: "Fill out the application form.", fa: "فرم درخواست را پر کن." },
      { en: "Her application was accepted.", fa: "درخواست او پذیرفته شد." }
    ]
  },
  {
    word: "interview",
    meaning: "مصاحبه",
    en: "I have a job interview on Monday.",
    fa: "دوشنبه یک مصاحبه شغلی دارم.",
    icon: "🎙️",
    examples: [
      { en: "I have a job interview on Monday.", fa: "دوشنبه یک مصاحبه شغلی دارم." },
      { en: "The interview went well.", fa: "مصاحبه خوب پیش رفت." },
      { en: "Prepare before the interview.", fa: "قبل از مصاحبه آماده شو." }
    ]
  },
  {
    word: "resume",
    meaning: "رزومه",
    en: "Update your resume before applying.",
    fa: "قبل از درخواست دادن رزومه‌ات را به‌روز کن.",
    icon: "📄",
    examples: [
      { en: "Update your resume before applying.", fa: "قبل از درخواست دادن رزومه‌ات را به‌روز کن." },
      { en: "I attached my resume to the email.", fa: "رزومه‌ام را به ایمیل پیوست کردم." },
      { en: "Her resume is very strong.", fa: "رزومه او خیلی قوی است." }
    ]
  }
);
// === A2 expansion patch 5: +10 everyday, +10 travel ===
CATEGORIES.a2everyday.words.push(
  {
    word: "repair",
    meaning: "تعمیر کردن، تعمیر",
    en: "We need to repair the kitchen sink.",
    fa: "باید سینک آشپزخانه را تعمیر کنیم.",
    icon: "🛠️",
    examples: [
      { en: "We need to repair the kitchen sink.", fa: "باید سینک آشپزخانه را تعمیر کنیم." },
      { en: "The repair was not expensive.", fa: "تعمیر گران نبود." }
    ]
  },
  {
    word: "plumber",
    meaning: "لوله‌کش",
    en: "The plumber fixed the bathroom pipe.",
    fa: "لوله‌کش لوله حمام را درست کرد.",
    icon: "🔧",
    examples: [
      { en: "The plumber fixed the bathroom pipe.", fa: "لوله‌کش لوله حمام را درست کرد." },
      { en: "Call a plumber, please.", fa: "لطفاً به لوله‌کش زنگ بزن." }
    ]
  },
  {
    word: "electrician",
    meaning: "برق‌کار",
    en: "An electrician checked the lights.",
    fa: "یک برق‌کار چراغ‌ها را بررسی کرد.",
    icon: "💡",
    examples: [
      { en: "An electrician checked the lights.", fa: "یک برق‌کار چراغ‌ها را بررسی کرد." },
      { en: "We need an electrician today.", fa: "امروز به برق‌کار نیاز داریم." }
    ]
  },
  {
    word: "landlord",
    meaning: "صاحب‌خانه",
    en: "The landlord fixed the door.",
    fa: "صاحب‌خانه در را تعمیر کرد.",
    icon: "🏠",
    examples: [
      { en: "The landlord fixed the door.", fa: "صاحب‌خانه در را تعمیر کرد." },
      { en: "I called the landlord about the rent.", fa: "درباره اجاره با صاحب‌خانه تماس گرفتم." }
    ]
  },
  {
    word: "rent",
    meaning: "اجاره",
    en: "We pay rent every month.",
    fa: "ما هر ماه اجاره پرداخت می‌کنیم.",
    icon: "💵",
    examples: [
      { en: "We pay rent every month.", fa: "ما هر ماه اجاره پرداخت می‌کنیم." },
      { en: "The rent is high in this area.", fa: "اجاره در این منطقه بالاست." }
    ]
  },
  {
    word: "apartment",
    meaning: "آپارتمان",
    en: "They live in a small apartment.",
    fa: "آن‌ها در یک آپارتمان کوچک زندگی می‌کنند.",
    icon: "🏢",
    examples: [
      { en: "They live in a small apartment.", fa: "آن‌ها در یک آپارتمان کوچک زندگی می‌کنند." },
      { en: "Our apartment has two bedrooms.", fa: "آپارتمان ما دو اتاق خواب دارد." }
    ]
  },
  {
    word: "furniture",
    meaning: "وسایل خانه، مبلمان",
    en: "We bought new furniture for the living room.",
    fa: "برای اتاق نشیمن مبلمان جدید خریدیم.",
    icon: "🛋️",
    examples: [
      { en: "We bought new furniture for the living room.", fa: "برای اتاق نشیمن مبلمان جدید خریدیم." },
      { en: "This furniture is comfortable.", fa: "این مبلمان راحت است." }
    ]
  },
  {
    word: "dishwasher",
    meaning: "ماشین ظرف‌شویی",
    en: "The dishwasher is full.",
    fa: "ماشین ظرف‌شویی پر است.",
    icon: "🍽️",
    examples: [
      { en: "The dishwasher is full.", fa: "ماشین ظرف‌شویی پر است." },
      { en: "Put the plates in the dishwasher.", fa: "بشقاب‌ها را داخل ماشین ظرف‌شویی بگذار." }
    ]
  },
  {
    word: "microwave",
    meaning: "مایکروویو",
    en: "Heat the food in the microwave.",
    fa: "غذا را در مایکروویو گرم کن.",
    icon: "📦",
    examples: [
      { en: "Heat the food in the microwave.", fa: "غذا را در مایکروویو گرم کن." },
      { en: "The microwave is on the counter.", fa: "مایکروویو روی کانتر است." }
    ]
  },
  {
    word: "outlet",
    meaning: "پریز برق",
    en: "Plug the charger into the outlet.",
    fa: "شارژر را به پریز برق وصل کن.",
    icon: "🔌",
    examples: [
      { en: "Plug the charger into the outlet.", fa: "شارژر را به پریز برق وصل کن." },
      { en: "This outlet does not work.", fa: "این پریز کار نمی‌کند." }
    ]
  }
);

CATEGORIES.a2travel.words.push(
  {
    word: "itinerary",
    meaning: "برنامه سفر",
    en: "Our itinerary includes three cities.",
    fa: "برنامه سفر ما شامل سه شهر است.",
    icon: "🗓️",
    examples: [
      { en: "Our itinerary includes three cities.", fa: "برنامه سفر ما شامل سه شهر است." },
      { en: "Check the itinerary before leaving.", fa: "قبل از رفتن برنامه سفر را چک کن." }
    ]
  },
  {
    word: "hostel",
    meaning: "هاستل، اقامتگاه ارزان",
    en: "We stayed in a small hostel.",
    fa: "ما در یک هاستل کوچک ماندیم.",
    icon: "🏨",
    examples: [
      { en: "We stayed in a small hostel.", fa: "ما در یک هاستل کوچک ماندیم." },
      { en: "The hostel was clean and cheap.", fa: "هاستل تمیز و ارزان بود." }
    ]
  },
  {
    word: "guided tour",
    meaning: "تور با راهنما",
    en: "We joined a guided tour of the museum.",
    fa: "ما در تور با راهنمای موزه شرکت کردیم.",
    icon: "🧭",
    examples: [
      { en: "We joined a guided tour of the museum.", fa: "ما در تور با راهنمای موزه شرکت کردیم." },
      { en: "The guided tour starts at ten.", fa: "تور با راهنما ساعت ده شروع می‌شود." }
    ]
  },
  {
    word: "landmark",
    meaning: "جای دیدنی معروف",
    en: "This tower is a famous landmark.",
    fa: "این برج یک جای دیدنی معروف است.",
    icon: "🗼",
    examples: [
      { en: "This tower is a famous landmark.", fa: "این برج یک جای دیدنی معروف است." },
      { en: "We visited several landmarks.", fa: "از چند جای دیدنی معروف بازدید کردیم." }
    ]
  },
  {
    word: "currency exchange",
    meaning: "صرافی، تبدیل ارز",
    en: "There is a currency exchange near the hotel.",
    fa: "نزدیک هتل یک صرافی هست.",
    icon: "💱",
    examples: [
      { en: "There is a currency exchange near the hotel.", fa: "نزدیک هتل یک صرافی هست." },
      { en: "We used currency exchange at the airport.", fa: "در فرودگاه ارز تبدیل کردیم." }
    ]
  },
  {
    word: "travel pillow",
    meaning: "بالش سفر",
    en: "A travel pillow helps on long flights.",
    fa: "بالش سفر در پروازهای طولانی کمک می‌کند.",
    icon: "🛏️",
    examples: [
      { en: "A travel pillow helps on long flights.", fa: "بالش سفر در پروازهای طولانی کمک می‌کند." },
      { en: "I packed my travel pillow.", fa: "بالش سفرم را در کیف گذاشتم." }
    ]
  },
  {
    word: "backpacker",
    meaning: "کوله‌گرد",
    en: "The backpacker traveled across Europe.",
    fa: "آن کوله‌گرد در اروپا سفر کرد.",
    icon: "🎒",
    examples: [
      { en: "The backpacker traveled across Europe.", fa: "آن کوله‌گرد در اروپا سفر کرد." },
      { en: "Many backpackers stay in hostels.", fa: "بسیاری از کوله‌گردها در هاستل می‌مانند." }
    ]
  },
  {
    word: "visa",
    meaning: "ویزا",
    en: "You need a visa for this country.",
    fa: "برای این کشور به ویزا نیاز داری.",
    icon: "🛂",
    examples: [
      { en: "You need a visa for this country.", fa: "برای این کشور به ویزا نیاز داری." },
      { en: "My visa is valid for three months.", fa: "ویزای من سه ماه اعتبار دارد." }
    ]
  },
  {
    word: "embassy",
    meaning: "سفارت",
    en: "The embassy is in the city center.",
    fa: "سفارت در مرکز شهر است.",
    icon: "🏛️",
    examples: [
      { en: "The embassy is in the city center.", fa: "سفارت در مرکز شهر است." },
      { en: "Call the embassy for help.", fa: "برای کمک با سفارت تماس بگیر." }
    ]
  },
  {
    word: "delayed flight",
    meaning: "پرواز تأخیردار",
    en: "We had a delayed flight last night.",
    fa: "دیشب پروازمان تأخیر داشت.",
    icon: "⏳",
    examples: [
      { en: "We had a delayed flight last night.", fa: "دیشب پروازمان تأخیر داشت." },
      { en: "A delayed flight can be stressful.", fa: "پرواز تأخیردار می‌تواند استرس‌زا باشد." }
    ]
  }
);
// === A2 expansion patch 6: +10 food, +10 work ===
CATEGORIES.a2food.words.push(
  {
    word: "menu",
    meaning: "منو",
    en: "Can I see the menu, please?",
    fa: "می‌شود لطفاً منو را ببینم؟",
    icon: "📋",
    examples: [
      { en: "Can I see the menu, please?", fa: "می‌شود لطفاً منو را ببینم؟" },
      { en: "The menu has many choices.", fa: "منو انتخاب‌های زیادی دارد." }
    ]
  },
  {
    word: "waiter",
    meaning: "گارسون مرد",
    en: "The waiter brought our food.",
    fa: "گارسون غذای ما را آورد.",
    icon: "🤵",
    examples: [
      { en: "The waiter brought our food.", fa: "گارسون غذای ما را آورد." },
      { en: "Ask the waiter for water.", fa: "از گارسون آب بخواه." }
    ]
  },
  {
    word: "waitress",
    meaning: "گارسون زن",
    en: "The waitress was very polite.",
    fa: "گارسون خیلی مؤدب بود.",
    icon: "🙋",
    examples: [
      { en: "The waitress was very polite.", fa: "گارسون خیلی مؤدب بود." },
      { en: "The waitress took our order.", fa: "گارسون سفارش ما را گرفت." }
    ]
  },
  {
    word: "bill",
    meaning: "صورت‌حساب",
    en: "Can we have the bill, please?",
    fa: "می‌شود لطفاً صورت‌حساب را بیاورید؟",
    icon: "🧾",
    examples: [
      { en: "Can we have the bill, please?", fa: "می‌شود لطفاً صورت‌حساب را بیاورید؟" },
      { en: "The bill was higher than I expected.", fa: "صورت‌حساب بیشتر از چیزی بود که انتظار داشتم." }
    ]
  },
  {
    word: "tip",
    meaning: "انعام",
    en: "We left a tip on the table.",
    fa: "روی میز انعام گذاشتیم.",
    icon: "💵",
    examples: [
      { en: "We left a tip on the table.", fa: "روی میز انعام گذاشتیم." },
      { en: "The tip is not included.", fa: "انعام حساب نشده است." }
    ]
  },
  {
    word: "order",
    meaning: "سفارش دادن، سفارش",
    en: "I want to order a sandwich.",
    fa: "می‌خواهم یک ساندویچ سفارش بدهم.",
    icon: "🥪",
    examples: [
      { en: "I want to order a sandwich.", fa: "می‌خواهم یک ساندویچ سفارش بدهم." },
      { en: "Our order is ready.", fa: "سفارش ما آماده است." }
    ]
  },
  {
    word: "fresh",
    meaning: "تازه",
    en: "The bread is fresh.",
    fa: "نان تازه است.",
    icon: "🥖",
    examples: [
      { en: "The bread is fresh.", fa: "نان تازه است." },
      { en: "We bought fresh vegetables.", fa: "سبزیجات تازه خریدیم." }
    ]
  },
  {
    word: "frozen",
    meaning: "یخ‌زده",
    en: "This is frozen food.",
    fa: "این غذای یخ‌زده است.",
    icon: "🧊",
    examples: [
      { en: "This is frozen food.", fa: "این غذای یخ‌زده است." },
      { en: "The frozen fish is in the freezer.", fa: "ماهی یخ‌زده در فریزر است." }
    ]
  },
  {
    word: "spicy",
    meaning: "تند",
    en: "This soup is too spicy.",
    fa: "این سوپ خیلی تند است.",
    icon: "🌶️",
    examples: [
      { en: "This soup is too spicy.", fa: "این سوپ خیلی تند است." },
      { en: "I like spicy food.", fa: "غذای تند دوست دارم." }
    ]
  },
  {
    word: "mild",
    meaning: "ملایم، کم‌تند",
    en: "I prefer mild sauce.",
    fa: "من سس ملایم را ترجیح می‌دهم.",
    icon: "🥣",
    examples: [
      { en: "I prefer mild sauce.", fa: "من سس ملایم را ترجیح می‌دهم." },
      { en: "This curry is mild.", fa: "این کاری کم‌تند است." }
    ]
  }
);

CATEGORIES.a2work.words.push(
  {
    word: "hire",
    meaning: "استخدام کردن",
    en: "The company wants to hire new people.",
    fa: "شرکت می‌خواهد افراد جدید استخدام کند.",
    icon: "➕",
    examples: [
      { en: "The company wants to hire new people.", fa: "شرکت می‌خواهد افراد جدید استخدام کند." },
      { en: "They hired a new designer.", fa: "آن‌ها یک طراح جدید استخدام کردند." }
    ]
  },
  {
    word: "resign",
    meaning: "استعفا دادن",
    en: "He decided to resign from his job.",
    fa: "او تصمیم گرفت از شغلش استعفا بدهد.",
    icon: "📤",
    examples: [
      { en: "He decided to resign from his job.", fa: "او تصمیم گرفت از شغلش استعفا بدهد." },
      { en: "She resigned last week.", fa: "او هفته پیش استعفا داد." }
    ]
  },
  {
    word: "office hours",
    meaning: "ساعت کاری",
    en: "Our office hours are from nine to five.",
    fa: "ساعت کاری ما از نه تا پنج است.",
    icon: "🕘",
    examples: [
      { en: "Our office hours are from nine to five.", fa: "ساعت کاری ما از نه تا پنج است." },
      { en: "Call during office hours.", fa: "در ساعت کاری تماس بگیر." }
    ]
  },
  {
    word: "shift",
    meaning: "شیفت کاری",
    en: "I work the night shift.",
    fa: "من شیفت شب کار می‌کنم.",
    icon: "🌙",
    examples: [
      { en: "I work the night shift.", fa: "من شیفت شب کار می‌کنم." },
      { en: "Her shift starts at noon.", fa: "شیفت او ظهر شروع می‌شود." }
    ]
  },
  {
    word: "overtime",
    meaning: "اضافه‌کاری",
    en: "He worked overtime yesterday.",
    fa: "او دیروز اضافه‌کاری کرد.",
    icon: "⏱️",
    examples: [
      { en: "He worked overtime yesterday.", fa: "او دیروز اضافه‌کاری کرد." },
      { en: "Overtime can be tiring.", fa: "اضافه‌کاری می‌تواند خسته‌کننده باشد." }
    ]
  },
  {
    word: "department",
    meaning: "بخش، دپارتمان",
    en: "She works in the sales department.",
    fa: "او در بخش فروش کار می‌کند.",
    icon: "🏢",
    examples: [
      { en: "She works in the sales department.", fa: "او در بخش فروش کار می‌کند." },
      { en: "The department has ten employees.", fa: "این بخش ده کارمند دارد." }
    ]
  },
  {
    word: "supervisor",
    meaning: "سرپرست",
    en: "My supervisor checked the report.",
    fa: "سرپرستم گزارش را بررسی کرد.",
    icon: "👔",
    examples: [
      { en: "My supervisor checked the report.", fa: "سرپرستم گزارش را بررسی کرد." },
      { en: "Ask your supervisor first.", fa: "اول از سرپرستت بپرس." }
    ]
  },
  {
    word: "intern",
    meaning: "کارآموز",
    en: "The intern joined our team today.",
    fa: "کارآموز امروز به تیم ما پیوست.",
    icon: "🧑‍🎓",
    examples: [
      { en: "The intern joined our team today.", fa: "کارآموز امروز به تیم ما پیوست." },
      { en: "I worked as an intern last summer.", fa: "تابستان گذشته به عنوان کارآموز کار کردم." }
    ]
  },
  {
    word: "colleague",
    meaning: "همکار",
    en: "My colleague sent me the file.",
    fa: "همکارم فایل را برایم فرستاد.",
    icon: "👥",
    examples: [
      { en: "My colleague sent me the file.", fa: "همکارم فایل را برایم فرستاد." },
      { en: "She is a helpful colleague.", fa: "او همکار کمک‌کننده‌ای است." }
    ]
  },
  {
    word: "project",
    meaning: "پروژه",
    en: "This project is almost finished.",
    fa: "این پروژه تقریباً تمام شده است.",
    icon: "📁",
    examples: [
      { en: "This project is almost finished.", fa: "این پروژه تقریباً تمام شده است." },
      { en: "We started a new project.", fa: "ما یک پروژه جدید شروع کردیم." }
    ]
  }
);
// === A2 expansion patch 7: +10 everyday, +10 travel ===
CATEGORIES.a2everyday.words.push(
  {
    word: "insurance",
    meaning: "بیمه",
    en: "Car insurance is important.",
    fa: "بیمه ماشین مهم است.",
    icon: "🛡️",
    examples: [
      { en: "Car insurance is important.", fa: "بیمه ماشین مهم است." },
      { en: "Do you have health insurance?", fa: "بیمه درمانی داری؟" }
    ]
  },
  {
    word: "pharmacy",
    meaning: "داروخانه",
    en: "There is a pharmacy near my house.",
    fa: "نزدیک خانه من یک داروخانه هست.",
    icon: "💊",
    examples: [
      { en: "There is a pharmacy near my house.", fa: "نزدیک خانه من یک داروخانه هست." },
      { en: "I bought medicine at the pharmacy.", fa: "از داروخانه دارو خریدم." }
    ]
  },
  {
    word: "medicine",
    meaning: "دارو",
    en: "Take this medicine after lunch.",
    fa: "این دارو را بعد از ناهار بخور.",
    icon: "💊",
    examples: [
      { en: "Take this medicine after lunch.", fa: "این دارو را بعد از ناهار بخور." },
      { en: "The medicine helped me feel better.", fa: "دارو کمک کرد حالم بهتر شود." }
    ]
  },
  {
    word: "prescription",
    meaning: "نسخه پزشک",
    en: "The doctor gave me a prescription.",
    fa: "دکتر به من نسخه داد.",
    icon: "📄",
    examples: [
      { en: "The doctor gave me a prescription.", fa: "دکتر به من نسخه داد." },
      { en: "You need a prescription for this medicine.", fa: "برای این دارو به نسخه نیاز داری." }
    ]
  },
  {
    word: "clinic",
    meaning: "کلینیک",
    en: "The clinic opens at eight.",
    fa: "کلینیک ساعت هشت باز می‌شود.",
    icon: "🏥",
    examples: [
      { en: "The clinic opens at eight.", fa: "کلینیک ساعت هشت باز می‌شود." },
      { en: "I visited a clinic near work.", fa: "به یک کلینیک نزدیک محل کار رفتم." }
    ]
  },
  {
    word: "patient",
    meaning: "بیمار",
    en: "The patient waited for the doctor.",
    fa: "بیمار منتظر دکتر ماند.",
    icon: "🤒",
    examples: [
      { en: "The patient waited for the doctor.", fa: "بیمار منتظر دکتر ماند." },
      { en: "The nurse helped the patient.", fa: "پرستار به بیمار کمک کرد." }
    ]
  },
  {
    word: "temperature",
    meaning: "دما، تب",
    en: "The nurse checked my temperature.",
    fa: "پرستار دمای بدنم را چک کرد.",
    icon: "🌡️",
    examples: [
      { en: "The nurse checked my temperature.", fa: "پرستار دمای بدنم را چک کرد." },
      { en: "His temperature is high.", fa: "تب او بالاست." }
    ]
  },
  {
    word: "headache",
    meaning: "سردرد",
    en: "I have a headache today.",
    fa: "امروز سردرد دارم.",
    icon: "🤕",
    examples: [
      { en: "I have a headache today.", fa: "امروز سردرد دارم." },
      { en: "This medicine is for headaches.", fa: "این دارو برای سردرد است." }
    ]
  },
  {
    word: "sore throat",
    meaning: "گلودرد",
    en: "She has a sore throat.",
    fa: "او گلودرد دارد.",
    icon: "😷",
    examples: [
      { en: "She has a sore throat.", fa: "او گلودرد دارد." },
      { en: "Drink warm tea for a sore throat.", fa: "برای گلودرد چای گرم بنوش." }
    ]
  },
  {
    word: "exercise",
    meaning: "ورزش، تمرین",
    en: "Regular exercise is good for health.",
    fa: "ورزش منظم برای سلامتی خوب است.",
    icon: "🏃",
    examples: [
      { en: "Regular exercise is good for health.", fa: "ورزش منظم برای سلامتی خوب است." },
      { en: "I do exercise every morning.", fa: "هر صبح ورزش می‌کنم." }
    ]
  }
);

CATEGORIES.a2travel.words.push(
  {
    word: "platform",
    meaning: "سکو، پلتفرم قطار",
    en: "The train leaves from platform three.",
    fa: "قطار از سکوی سه حرکت می‌کند.",
    icon: "🚉",
    examples: [
      { en: "The train leaves from platform three.", fa: "قطار از سکوی سه حرکت می‌کند." },
      { en: "Wait on the platform.", fa: "روی سکو منتظر بمان." }
    ]
  },
  {
    word: "carriage",
    meaning: "واگن",
    en: "Our seats are in the first carriage.",
    fa: "صندلی‌های ما در واگن اول است.",
    icon: "🚆",
    examples: [
      { en: "Our seats are in the first carriage.", fa: "صندلی‌های ما در واگن اول است." },
      { en: "This carriage is quiet.", fa: "این واگن ساکت است." }
    ]
  },
  {
    word: "round trip",
    meaning: "سفر رفت‌وبرگشت",
    en: "I bought a round trip ticket.",
    fa: "یک بلیت رفت‌وبرگشت خریدم.",
    icon: "🔁",
    examples: [
      { en: "I bought a round trip ticket.", fa: "یک بلیت رفت‌وبرگشت خریدم." },
      { en: "A round trip is cheaper.", fa: "بلیت رفت‌وبرگشت ارزان‌تر است." }
    ]
  },
  {
    word: "one-way ticket",
    meaning: "بلیت یک‌طرفه",
    en: "She bought a one-way ticket to Paris.",
    fa: "او یک بلیت یک‌طرفه به پاریس خرید.",
    icon: "🎫",
    examples: [
      { en: "She bought a one-way ticket to Paris.", fa: "او یک بلیت یک‌طرفه به پاریس خرید." },
      { en: "I only need a one-way ticket.", fa: "فقط یک بلیت یک‌طرفه لازم دارم." }
    ]
  },
  {
    word: "timetable",
    meaning: "جدول زمانی",
    en: "Check the train timetable.",
    fa: "جدول زمانی قطار را چک کن.",
    icon: "🕘",
    examples: [
      { en: "Check the train timetable.", fa: "جدول زمانی قطار را چک کن." },
      { en: "The timetable changed today.", fa: "جدول زمانی امروز تغییر کرد." }
    ]
  },
  {
    word: "delay",
    meaning: "تأخیر",
    en: "There was a delay at the airport.",
    fa: "در فرودگاه تأخیر وجود داشت.",
    icon: "⏳",
    examples: [
      { en: "There was a delay at the airport.", fa: "در فرودگاه تأخیر وجود داشت." },
      { en: "The delay was only ten minutes.", fa: "تأخیر فقط ده دقیقه بود." }
    ]
  },
  {
    word: "gate",
    meaning: "گیت، دروازه",
    en: "Our gate is number twelve.",
    fa: "گیت ما شماره دوازده است.",
    icon: "🚪",
    examples: [
      { en: "Our gate is number twelve.", fa: "گیت ما شماره دوازده است." },
      { en: "The gate closes soon.", fa: "گیت به‌زودی بسته می‌شود." }
    ]
  },
  {
    word: "security check",
    meaning: "بازرسی امنیتی",
    en: "Security check took twenty minutes.",
    fa: "بازرسی امنیتی بیست دقیقه طول کشید.",
    icon: "🛃",
    examples: [
      { en: "Security check took twenty minutes.", fa: "بازرسی امنیتی بیست دقیقه طول کشید." },
      { en: "Remove your belt at security check.", fa: "در بازرسی امنیتی کمربندت را دربیاور." }
    ]
  },
  {
    word: "boarding",
    meaning: "سوار شدن به هواپیما",
    en: "Boarding starts at 7:30.",
    fa: "سوار شدن ساعت ۷:۳۰ شروع می‌شود.",
    icon: "🛫",
    examples: [
      { en: "Boarding starts at 7:30.", fa: "سوار شدن ساعت ۷:۳۰ شروع می‌شود." },
      { en: "We are waiting for boarding.", fa: "منتظر سوار شدن هستیم." }
    ]
  },
  {
    word: "baggage allowance",
    meaning: "میزان بار مجاز",
    en: "Check the baggage allowance before packing.",
    fa: "قبل از بستن چمدان، میزان بار مجاز را چک کن.",
    icon: "⚖️",
    examples: [
      { en: "Check the baggage allowance before packing.", fa: "قبل از بستن چمدان، میزان بار مجاز را چک کن." },
      { en: "The baggage allowance is twenty kilos.", fa: "میزان بار مجاز بیست کیلو است." }
    ]
  }
);
// === A2 expansion patch 8: +10 food, +10 work ===
CATEGORIES.a2food.words.push(
  {
    word: "breakfast",
    meaning: "صبحانه",
    en: "Breakfast is served from seven.",
    fa: "صبحانه از ساعت هفت سرو می‌شود.",
    icon: "🍳",
    examples: [
      { en: "Breakfast is served from seven.", fa: "صبحانه از ساعت هفت سرو می‌شود." },
      { en: "I had eggs for breakfast.", fa: "برای صبحانه تخم‌مرغ خوردم." }
    ]
  },
  {
    word: "lunch",
    meaning: "ناهار",
    en: "We had lunch at a small cafe.",
    fa: "در یک کافه کوچک ناهار خوردیم.",
    icon: "🍛",
    examples: [
      { en: "We had lunch at a small cafe.", fa: "در یک کافه کوچک ناهار خوردیم." },
      { en: "Lunch is ready.", fa: "ناهار آماده است." }
    ]
  },
  {
    word: "dinner",
    meaning: "شام",
    en: "Dinner starts at eight.",
    fa: "شام ساعت هشت شروع می‌شود.",
    icon: "🍽️",
    examples: [
      { en: "Dinner starts at eight.", fa: "شام ساعت هشت شروع می‌شود." },
      { en: "We invited them for dinner.", fa: "آن‌ها را برای شام دعوت کردیم." }
    ]
  },
  {
    word: "snack",
    meaning: "میان‌وعده",
    en: "I ate a small snack before class.",
    fa: "قبل از کلاس یک میان‌وعده کوچک خوردم.",
    icon: "🍪",
    examples: [
      { en: "I ate a small snack before class.", fa: "قبل از کلاس یک میان‌وعده کوچک خوردم." },
      { en: "Fruit is a healthy snack.", fa: "میوه یک میان‌وعده سالم است." }
    ]
  },
  {
    word: "beverage",
    meaning: "نوشیدنی",
    en: "Tea is my favorite beverage.",
    fa: "چای نوشیدنی مورد علاقه من است.",
    icon: "☕",
    examples: [
      { en: "Tea is my favorite beverage.", fa: "چای نوشیدنی مورد علاقه من است." },
      { en: "The menu has hot beverages.", fa: "منو نوشیدنی‌های گرم دارد." }
    ]
  },
  {
    word: "tap water",
    meaning: "آب لوله‌کشی",
    en: "Is tap water safe to drink here?",
    fa: "آب لوله‌کشی اینجا برای نوشیدن امن است؟",
    icon: "🚰",
    examples: [
      { en: "Is tap water safe to drink here?", fa: "آب لوله‌کشی اینجا برای نوشیدن امن است؟" },
      { en: "We drank tap water at home.", fa: "در خانه آب لوله‌کشی نوشیدیم." }
    ]
  },
  {
    word: "mineral water",
    meaning: "آب معدنی",
    en: "I ordered mineral water.",
    fa: "من آب معدنی سفارش دادم.",
    icon: "💧",
    examples: [
      { en: "I ordered mineral water.", fa: "من آب معدنی سفارش دادم." },
      { en: "A bottle of mineral water, please.", fa: "یک بطری آب معدنی لطفاً." }
    ]
  },
  {
    word: "soft drink",
    meaning: "نوشابه",
    en: "He ordered a soft drink.",
    fa: "او یک نوشابه سفارش داد.",
    icon: "🥤",
    examples: [
      { en: "He ordered a soft drink.", fa: "او یک نوشابه سفارش داد." },
      { en: "I do not drink soft drinks often.", fa: "من زیاد نوشابه نمی‌خورم." }
    ]
  },
  {
    word: "dessert menu",
    meaning: "منوی دسر",
    en: "Can we see the dessert menu?",
    fa: "می‌شود منوی دسر را ببینیم؟",
    icon: "🍰",
    examples: [
      { en: "Can we see the dessert menu?", fa: "می‌شود منوی دسر را ببینیم؟" },
      { en: "The dessert menu has cheesecake.", fa: "منوی دسر چیزکیک دارد." }
    ]
  },
  {
    word: "chef",
    meaning: "سرآشپز",
    en: "The chef made a special dish.",
    fa: "سرآشپز یک غذای ویژه درست کرد.",
    icon: "👨‍🍳",
    examples: [
      { en: "The chef made a special dish.", fa: "سرآشپز یک غذای ویژه درست کرد." },
      { en: "The chef is famous in this city.", fa: "سرآشپز در این شهر معروف است." }
    ]
  }
);

CATEGORIES.a2work.words.push(
  {
    word: "workload",
    meaning: "حجم کار",
    en: "My workload is heavy this week.",
    fa: "حجم کارم این هفته زیاد است.",
    icon: "📚",
    examples: [
      { en: "My workload is heavy this week.", fa: "حجم کارم این هفته زیاد است." },
      { en: "We need to reduce the workload.", fa: "باید حجم کار را کمتر کنیم." }
    ]
  },
  {
    word: "priority",
    meaning: "اولویت",
    en: "This task is a priority.",
    fa: "این کار اولویت دارد.",
    icon: "⭐",
    examples: [
      { en: "This task is a priority.", fa: "این کار اولویت دارد." },
      { en: "Set your priorities for today.", fa: "اولویت‌هایت را برای امروز مشخص کن." }
    ]
  },
  {
    word: "schedule a meeting",
    meaning: "زمان جلسه گذاشتن",
    en: "Let's schedule a meeting for Monday.",
    fa: "بیایید برای دوشنبه جلسه بگذاریم.",
    icon: "📅",
    examples: [
      { en: "Let's schedule a meeting for Monday.", fa: "بیایید برای دوشنبه جلسه بگذاریم." },
      { en: "Can you schedule a meeting with the team?", fa: "می‌توانی با تیم جلسه تنظیم کنی؟" }
    ]
  },
  {
    word: "follow up",
    meaning: "پیگیری کردن",
    en: "I will follow up by email.",
    fa: "از طریق ایمیل پیگیری می‌کنم.",
    icon: "📧",
    examples: [
      { en: "I will follow up by email.", fa: "از طریق ایمیل پیگیری می‌کنم." },
      { en: "Please follow up with the client.", fa: "لطفاً موضوع را با مشتری پیگیری کن." }
    ]
  },
  {
    word: "feedback",
    meaning: "بازخورد",
    en: "Thanks for your feedback.",
    fa: "ممنون بابت بازخوردت.",
    icon: "💬",
    examples: [
      { en: "Thanks for your feedback.", fa: "ممنون بابت بازخوردت." },
      { en: "The manager gave useful feedback.", fa: "مدیر بازخورد مفیدی داد." }
    ]
  },
  {
    word: "progress",
    meaning: "پیشرفت",
    en: "We made good progress today.",
    fa: "امروز پیشرفت خوبی داشتیم.",
    icon: "📈",
    examples: [
      { en: "We made good progress today.", fa: "امروز پیشرفت خوبی داشتیم." },
      { en: "Track your progress every week.", fa: "هر هفته پیشرفتت را دنبال کن." }
    ]
  },
  {
    word: "goal",
    meaning: "هدف",
    en: "Our goal is to finish this project.",
    fa: "هدف ما تمام کردن این پروژه است.",
    icon: "🎯",
    examples: [
      { en: "Our goal is to finish this project.", fa: "هدف ما تمام کردن این پروژه است." },
      { en: "Set a clear goal.", fa: "یک هدف واضح تعیین کن." }
    ]
  },
  {
    word: "plan",
    meaning: "برنامه",
    en: "We need a clear plan.",
    fa: "ما به یک برنامه واضح نیاز داریم.",
    icon: "🗒️",
    examples: [
      { en: "We need a clear plan.", fa: "ما به یک برنامه واضح نیاز داریم." },
      { en: "The plan worked well.", fa: "برنامه خوب جواب داد." }
    ]
  },
  {
    word: "problem",
    meaning: "مشکل",
    en: "We found a problem in the system.",
    fa: "ما یک مشکل در سیستم پیدا کردیم.",
    icon: "⚠️",
    examples: [
      { en: "We found a problem in the system.", fa: "ما یک مشکل در سیستم پیدا کردیم." },
      { en: "Let's solve the problem together.", fa: "بیایید مشکل را با هم حل کنیم." }
    ]
  },
  {
    word: "solution",
    meaning: "راه‌حل",
    en: "We need a simple solution.",
    fa: "ما به یک راه‌حل ساده نیاز داریم.",
    icon: "💡",
    examples: [
      { en: "We need a simple solution.", fa: "ما به یک راه‌حل ساده نیاز داریم." },
      { en: "This solution saves time.", fa: "این راه‌حل زمان را ذخیره می‌کند." }
    ]
  }
);
// === A2 expansion patch 9: +10 everyday, +10 travel ===
CATEGORIES.a2everyday.words.push(
  {
    word: "monthly payment",
    meaning: "پرداخت ماهانه",
    en: "The monthly payment is due today.",
    fa: "پرداخت ماهانه امروز موعد دارد.",
    icon: "💳",
    examples: [
      { en: "The monthly payment is due today.", fa: "پرداخت ماهانه امروز موعد دارد." },
      { en: "I made the monthly payment online.", fa: "پرداخت ماهانه را آنلاین انجام دادم." }
    ]
  },
  {
    word: "bank account",
    meaning: "حساب بانکی",
    en: "I opened a bank account last year.",
    fa: "سال گذشته یک حساب بانکی باز کردم.",
    icon: "🏦",
    examples: [
      { en: "I opened a bank account last year.", fa: "سال گذشته یک حساب بانکی باز کردم." },
      { en: "The money is in my bank account.", fa: "پول در حساب بانکی من است." }
    ]
  },
  {
    word: "cash",
    meaning: "پول نقد",
    en: "I do not have enough cash.",
    fa: "پول نقد کافی ندارم.",
    icon: "💵",
    examples: [
      { en: "I do not have enough cash.", fa: "پول نقد کافی ندارم." },
      { en: "Do you want to pay in cash?", fa: "می‌خواهی نقدی پرداخت کنی؟" }
    ]
  },
  {
    word: "credit card",
    meaning: "کارت اعتباری",
    en: "She paid with a credit card.",
    fa: "او با کارت اعتباری پرداخت کرد.",
    icon: "💳",
    examples: [
      { en: "She paid with a credit card.", fa: "او با کارت اعتباری پرداخت کرد." },
      { en: "My credit card is in my wallet.", fa: "کارت اعتباری‌ام در کیف پولم است." }
    ]
  },
  {
    word: "discount",
    meaning: "تخفیف",
    en: "This store has a discount today.",
    fa: "این فروشگاه امروز تخفیف دارد.",
    icon: "🏷️",
    examples: [
      { en: "This store has a discount today.", fa: "این فروشگاه امروز تخفیف دارد." },
      { en: "I got a discount on the shoes.", fa: "برای کفش‌ها تخفیف گرفتم." }
    ]
  },
  {
    word: "price",
    meaning: "قیمت",
    en: "The price is too high.",
    fa: "قیمت خیلی بالاست.",
    icon: "💲",
    examples: [
      { en: "The price is too high.", fa: "قیمت خیلی بالاست." },
      { en: "Check the price before buying.", fa: "قبل از خرید قیمت را چک کن." }
    ]
  },
  {
    word: "expensive",
    meaning: "گران",
    en: "This jacket is expensive.",
    fa: "این کت گران است.",
    icon: "💎",
    examples: [
      { en: "This jacket is expensive.", fa: "این کت گران است." },
      { en: "Hotels are expensive in summer.", fa: "هتل‌ها در تابستان گران هستند." }
    ]
  },
  {
    word: "cheap",
    meaning: "ارزان",
    en: "This phone case is cheap.",
    fa: "این قاب گوشی ارزان است.",
    icon: "🪙",
    examples: [
      { en: "This phone case is cheap.", fa: "این قاب گوشی ارزان است." },
      { en: "We found a cheap hotel.", fa: "یک هتل ارزان پیدا کردیم." }
    ]
  },
  {
    word: "save money",
    meaning: "پول پس‌انداز کردن",
    en: "I want to save money this month.",
    fa: "می‌خواهم این ماه پول پس‌انداز کنم.",
    icon: "🐷",
    examples: [
      { en: "I want to save money this month.", fa: "می‌خواهم این ماه پول پس‌انداز کنم." },
      { en: "Cooking at home helps save money.", fa: "آشپزی در خانه کمک می‌کند پول پس‌انداز کنی." }
    ]
  },
  {
    word: "spend money",
    meaning: "پول خرج کردن",
    en: "Do not spend money on things you do not need.",
    fa: "برای چیزهایی که لازم نداری پول خرج نکن.",
    icon: "🛍️",
    examples: [
      { en: "Do not spend money on things you do not need.", fa: "برای چیزهایی که لازم نداری پول خرج نکن." },
      { en: "We spent money on travel.", fa: "برای سفر پول خرج کردیم." }
    ]
  }
);
CATEGORIES.a2everyday.words.push(
  {
    word: "housework",
    meaning: "کارهای خانه",
    en: "I do the housework every Saturday.",
    fa: "من هر شنبه کارهای خانه را انجام می‌دهم.",
    icon: "🏠",
    examples: [
      { en: "I do the housework every Saturday.", fa: "من هر شنبه کارهای خانه را انجام می‌دهم." },
      { en: "Housework takes about two hours.", fa: "کارهای خانه حدود دو ساعت طول می‌کشد." }
    ]
  },
  {
    word: "tidy up",
    meaning: "مرتب کردن",
    en: "Please tidy up your room.",
    fa: "لطفاً اتاقت را مرتب کن.",
    icon: "✨",
    examples: [
      { en: "Please tidy up your room.", fa: "لطفاً اتاقت را مرتب کن." },
      { en: "I tidied up before the guests arrived.", fa: "قبل از آمدن مهمان‌ها همه را مرتب کردم." }
    ]
  },
  {
    word: "messy",
    meaning: "به‌هم‌ریخته",
    en: "My desk is messy today.",
    fa: "میز کارم امروز به‌هم‌ریخته است.",
    icon: "🌪️",
    examples: [
      { en: "My desk is messy today.", fa: "میز کارم امروز به‌هم‌ریخته است." },
      { en: "Don't leave the kitchen messy.", fa: "آشپزخانه را به‌هم‌ریخته نگذار." }
    ]
  },
  {
    word: "clean up",
    meaning: "تمیز کردن / جمع کردن",
    en: "We should clean up after dinner.",
    fa: "باید بعد از شام تمیز کنیم.",
    icon: "🧽",
    examples: [
      { en: "We should clean up after dinner.", fa: "باید بعد از شام تمیز کنیم." },
      { en: "The kids cleaned up their toys.", fa: "بچه‌ها اسباب‌بازی‌هایشان را جمع کردند." }
    ]
  },
  {
    word: "roommate",
    meaning: "هم‌خانه",
    en: "My roommate is very quiet.",
    fa: "هم‌خانه‌ام خیلی ساکت است.",
    icon: "🧑‍🤝‍🧑",
    examples: [
      { en: "My roommate is very quiet.", fa: "هم‌خانه‌ام خیلی ساکت است." },
      { en: "I found a new roommate online.", fa: "یک هم‌خانه جدید به‌صورت آنلاین پیدا کردم." }
    ]
  },
  {
    word: "utilities",
    meaning: "هزینه آب و برق و گاز",
    en: "Utilities are not included in the rent.",
    fa: "هزینه آب و برق و گاز داخل اجاره نیست.",
    icon: "🔌",
    examples: [
      { en: "Utilities are not included in the rent.", fa: "هزینه آب و برق و گاز داخل اجاره نیست." },
      { en: "I pay the utilities every month.", fa: "هر ماه هزینه آب و برق و گاز را می‌دهم." }
    ]
  },
  {
    word: "gas bill",
    meaning: "قبض گاز",
    en: "The gas bill is high this month.",
    fa: "قبض گاز این ماه بالاست.",
    icon: "🔥",
    examples: [
      { en: "The gas bill is high this month.", fa: "قبض گاز این ماه بالاست." },
      { en: "I paid the gas bill online.", fa: "قبض گاز را آنلاین پرداخت کردم." }
    ]
  },
  {
    word: "water bill",
    meaning: "قبض آب",
    en: "Did you receive the water bill?",
    fa: "قبض آب به دستت رسید؟",
    icon: "💧",
    examples: [
      { en: "Did you receive the water bill?", fa: "قبض آب به دستت رسید؟" },
      { en: "Our water bill went down.", fa: "قبض آب‌مان کم شد." }
    ]
  },
  {
    word: "internet bill",
    meaning: "قبض اینترنت",
    en: "The internet bill arrives on the first day.",
    fa: "قبض اینترنت روز اول ماه می‌آید.",
    icon: "🌐",
    examples: [
      { en: "The internet bill arrives on the first day.", fa: "قبض اینترنت روز اول ماه می‌آید." },
      { en: "I set a reminder for the internet bill.", fa: "برای قبض اینترنت یادآور گذاشتم." }
    ]
  },
  {
    word: "package",
    meaning: "بسته پستی",
    en: "A package arrived for you.",
    fa: "یک بسته پستی برای تو آمده است.",
    icon: "📦",
    examples: [
      { en: "A package arrived for you.", fa: "یک بسته پستی برای تو آمده است." },
      { en: "I tracked my package online.", fa: "بسته‌ام را آنلاین پیگیری کردم." }
    ]
  },
  {
    word: "delivery",
    meaning: "تحویل",
    en: "Delivery takes two days.",
    fa: "تحویل دو روز طول می‌کشد.",
    icon: "🚚",
    examples: [
      { en: "Delivery takes two days.", fa: "تحویل دو روز طول می‌کشد." },
      { en: "Is free delivery available?", fa: "آیا تحویل رایگان دارید؟" }
    ]
  }
);

CATEGORIES.a2everyday.words.push(
  {
    word: "courier",
    meaning: "پیک",
    en: "The courier is at the door.",
    fa: "پیک دم در است.",
    icon: "🛵",
    examples: [
      { en: "The courier is at the door.", fa: "پیک دم در است." },
      { en: "Please send it by courier today.", fa: "لطفاً امروز با پیک بفرستید." }
    ]
  },
  {
    word: "queue",
    meaning: "صف",
    en: "There was a long queue at the bank.",
    fa: "در بانک صف طولانی بود.",
    icon: "🧍",
    examples: [
      { en: "There was a long queue at the bank.", fa: "در بانک صف طولانی بود." },
      { en: "Please wait in the queue.", fa: "لطفاً در صف منتظر بمانید." }
    ]
  },
  {
    word: "busy",
    meaning: "مشغول؛ شلوغ",
    en: "Sorry, I am busy right now.",
    fa: "ببخشید، الان مشغولم.",
    icon: "😣",
    examples: [
      { en: "Sorry, I am busy right now.", fa: "ببخشید، الان مشغولم." },
      { en: "The street is busy at rush hour.", fa: "این خیابان در ساعت شلوغی پرترافیک است." }
    ]
  },
  {
    word: "free time",
    meaning: "وقت آزاد",
    en: "I read books in my free time.",
    fa: "در وقت آزادم کتاب می‌خوانم.",
    icon: "⏰",
    examples: [
      { en: "I read books in my free time.", fa: "در وقت آزادم کتاب می‌خوانم." },
      { en: "We have little free time this week.", fa: "این هفته وقت آزاد کمی داریم." }
    ]
  },
  {
    word: "weekday",
    meaning: "روز عادی هفته",
    en: "I work hard on weekdays.",
    fa: "در روزهای عادی هفته سخت کار می‌کنم.",
    icon: "📅",
    examples: [
      { en: "I work hard on weekdays.", fa: "در روزهای عادی هفته سخت کار می‌کنم." },
      { en: "The store is quieter on weekdays.", fa: "فروشگاه در روزهای هفته خلوت‌تر است." }
    ]
  },
  {
    word: "weekend",
    meaning: "آخر هفته",
    en: "We stay home on the weekend.",
    fa: "آخر هفته در خانه می‌مانیم.",
    icon: "🎉",
    examples: [
      { en: "We stay home on the weekend.", fa: "آخر هفته در خانه می‌مانیم." },
      { en: "What are your weekend plans?", fa: "برنامه آخر هفته‌ات چیست؟" }
    ]
  },
  {
    word: "public holiday",
    meaning: "تعطیل رسمی",
    en: "Tomorrow is a public holiday.",
    fa: "فردا تعطیل رسمی است.",
    icon: "🏛️",
    examples: [
      { en: "Tomorrow is a public holiday.", fa: "فردا تعطیل رسمی است." },
      { en: "Banks close on public holidays.", fa: "بانک‌ها در تعطیلات رسمی بسته‌اند." }
    ]
  },
  {
    word: "traffic",
    meaning: "ترافیک",
    en: "Traffic is heavy this morning.",
    fa: "ترافیک امروز صبح سنگین است.",
    icon: "🚗",
    examples: [
      { en: "Traffic is heavy this morning.", fa: "ترافیک امروز صبح سنگین است." },
      { en: "I left early to avoid traffic.", fa: "زود رفتم تا به ترافیک نخورم." }
    ]
  },
  {
    word: "traffic jam",
    meaning: "راه‌بندان",
    en: "We were stuck in a traffic jam.",
    fa: "در راه‌بندان گیر افتادیم.",
    icon: "🚦",
    examples: [
      { en: "We were stuck in a traffic jam.", fa: "در راه‌بندان گیر افتادیم." },
      { en: "A traffic jam delayed the bus.", fa: "راه‌بندان باعث تأخیر اتوبوس شد." }
    ]
  },
  {
    word: "crosswalk",
    meaning: "خط عابر پیاده",
    en: "Always use the crosswalk.",
    fa: "همیشه از خط عابر پیاده رد شو.",
    icon: "🚶",
    examples: [
      { en: "Always use the crosswalk.", fa: "همیشه از خط عابر پیاده رد شو." },
      { en: "Cars must stop at the crosswalk.", fa: "ماشین‌ها باید پای خط عابر بایستند." }
    ]
  },
  {
    word: "traffic light",
    meaning: "چراغ راهنمایی",
    en: "Turn left at the traffic light.",
    fa: "سر چراغ راهنمایی به چپ بپیچ.",
    icon: "🚥",
    examples: [
      { en: "Turn left at the traffic light.", fa: "سر چراغ راهنمایی به چپ بپیچ." },
      { en: "The traffic light turned red.", fa: "چراغ راهنمایی قرمز شد." }
    ]
  }
);

CATEGORIES.a2everyday.words.push(
  {
    word: "subway",
    meaning: "مترو",
    en: "I take the subway to work.",
    fa: "با مترو سر کار می‌روم.",
    icon: "🚇",
    examples: [
      { en: "I take the subway to work.", fa: "با مترو سر کار می‌روم." },
      { en: "The subway is faster than the bus.", fa: "مترو از اتوبوس سریع‌تر است." }
    ]
  },
  {
    word: "bus stop",
    meaning: "ایستگاه اتوبوس",
    en: "The bus stop is across the street.",
    fa: "ایستگاه اتوبوس آن طرف خیابان است.",
    icon: "🚌",
    examples: [
      { en: "The bus stop is across the street.", fa: "ایستگاه اتوبوس آن طرف خیابان است." },
      { en: "Wait for me at the bus stop.", fa: "سر ایستگاه اتوبوس منتظرم باش." }
    ]
  },
  {
    word: "fare",
    meaning: "کرایه",
    en: "How much is the bus fare?",
    fa: "کرایه اتوبوس چقدر است؟",
    icon: "🎟️",
    examples: [
      { en: "How much is the bus fare?", fa: "کرایه اتوبوس چقدر است؟" },
      { en: "I paid the fare with my card.", fa: "کرایه را با کارتم دادم." }
    ]
  },
  {
    word: "small change",
    meaning: "پول خرد",
    en: "Do you have any small change?",
    fa: "پول خرد داری؟",
    icon: "🪙",
    examples: [
      { en: "Do you have any small change?", fa: "پول خرد داری؟" },
      { en: "I need small change for the machine.", fa: "برای دستگاه به پول خرد نیاز دارم." }
    ]
  },
  {
    word: "ATM",
    meaning: "عابربانک",
    en: "There is an ATM near the mall.",
    fa: "نزدیک پاساژ یک عابربانک هست.",
    icon: "🏧",
    examples: [
      { en: "There is an ATM near the mall.", fa: "نزدیک پاساژ یک عابربانک هست." },
      { en: "I took money out of the ATM.", fa: "از عابربانک پول گرفتم." }
    ]
  },
  {
    word: "withdraw",
    meaning: "برداشت کردن (پول)",
    en: "I want to withdraw some cash.",
    fa: "می‌خواهم مقداری پول نقد بردارم.",
    icon: "💵",
    examples: [
      { en: "I want to withdraw some cash.", fa: "می‌خواهم مقداری پول نقد بردارم." },
      { en: "You can withdraw money at the bank.", fa: "می‌توانی از بانک پول برداشت کنی." }
    ]
  },
  {
    word: "deposit",
    meaning: "واریز کردن",
    en: "I deposited my salary today.",
    fa: "امروز حقوقم را واریز کردم.",
    icon: "🏦",
    examples: [
      { en: "I deposited my salary today.", fa: "امروز حقوقم را واریز کردم." },
      { en: "Please deposit this check.", fa: "لطفاً این چک را واریز کن." }
    ]
  },
  {
    word: "password",
    meaning: "رمز عبور",
    en: "Don't share your password.",
    fa: "رمز عبورت را به کسی نگو.",
    icon: "🔐",
    examples: [
      { en: "Don't share your password.", fa: "رمز عبورت را به کسی نگو." },
      { en: "I forgot my email password.", fa: "رمز ایمیلم را فراموش کردم." }
    ]
  },
  {
    word: "username",
    meaning: "نام کاربری",
    en: "Enter your username and password.",
    fa: "نام کاربری و رمز عبور را وارد کن.",
    icon: "👤",
    examples: [
      { en: "Enter your username and password.", fa: "نام کاربری و رمز عبور را وارد کن." },
      { en: "My username is easy to remember.", fa: "نام کاربریم راحت به خاطر سپرده می‌شود." }
    ]
  },
  {
    word: "notification",
    meaning: "اعلان",
    en: "I turned off app notifications.",
    fa: "اعلان برنامه‌ها را خاموش کردم.",
    icon: "🔔",
    examples: [
      { en: "I turned off app notifications.", fa: "اعلان برنامه‌ها را خاموش کردم." },
      { en: "A notification came from the bank.", fa: "یک اعلان از طرف بانک آمد." }
    ]
  },
  {
    word: "power bank",
    meaning: "پاوربانک",
    en: "My power bank is fully charged.",
    fa: "پاوربانکم کامل شارژ است.",
    icon: "🔋",
    examples: [
      { en: "My power bank is fully charged.", fa: "پاوربانکم کامل شارژ است." },
      { en: "Can I borrow your power bank?", fa: "می‌شود پاوربانکت را قرض بگیرم؟" }
    ]
  }
);

CATEGORIES.a2everyday.words.push(
  {
    word: "headphones",
    meaning: "هدفون",
    en: "These headphones have good sound.",
    fa: "این هدفون صدای خوبی دارد.",
    icon: "🎧",
    examples: [
      { en: "These headphones have good sound.", fa: "این هدفون صدای خوبی دارد." },
      { en: "I left my headphones at home.", fa: "هدفونم را خانه جا گذاشتم." }
    ]
  },
  {
    word: "earphones",
    meaning: "هندزفری / ایرپاد",
    en: "I listen to podcasts with earphones.",
    fa: "با هندزفری پادکست گوش می‌دهم.",
    icon: "🎶",
    examples: [
      { en: "I listen to podcasts with earphones.", fa: "با هندزفری پادکست گوش می‌دهم." },
      { en: "Don't wear earphones in traffic.", fa: "در ترافیک هندزفری نگذار." }
    ]
  },
  {
    word: "volume",
    meaning: "میزان صدا",
    en: "Please turn down the volume.",
    fa: "لطفاً صدا را کم کن.",
    icon: "🔊",
    examples: [
      { en: "Please turn down the volume.", fa: "لطفاً صدا را کم کن." },
      { en: "The volume is too high.", fa: "میزان صدا خیلی بالاست." }
    ]
  },
  {
    word: "brightness",
    meaning: "روشنایی صفحه",
    en: "Increase the screen brightness.",
    fa: "روشنایی صفحه را زیاد کن.",
    icon: "🔆",
    examples: [
      { en: "Increase the screen brightness.", fa: "روشنایی صفحه را زیاد کن." },
      { en: "Low brightness saves battery.", fa: "روشنایی کم باتری را ذخیره می‌کند." }
    ]
  },
  {
    word: "lock screen",
    meaning: "صفحه قفل",
    en: "I put a photo on my lock screen.",
    fa: "روی صفحه قفلم یک عکس گذاشتم.",
    icon: "📱",
    examples: [
      { en: "I put a photo on my lock screen.", fa: "روی صفحه قفلم یک عکس گذاشتم." },
      { en: "The lock screen shows the time.", fa: "صفحه قفل ساعت را نشان می‌دهد." }
    ]
  },
  {
    word: "laundry detergent",
    meaning: "پودر / مایع لباسشویی",
    en: "We ran out of laundry detergent.",
    fa: "مایع لباسشویی‌مان تمام شد.",
    icon: "🧴",
    examples: [
      { en: "We ran out of laundry detergent.", fa: "مایع لباسشویی‌مان تمام شد." },
      { en: "Use less laundry detergent.", fa: "مایع لباسشویی کمتری استفاده کن." }
    ]
  },
  {
    word: "fabric softener",
    meaning: "نرم‌کننده لباس",
    en: "Add fabric softener to the wash.",
    fa: "نرم‌کننده لباس را به شستشو اضافه کن.",
    icon: "🫧",
    examples: [
      { en: "Add fabric softener to the wash.", fa: "نرم‌کننده لباس را به شستشو اضافه کن." },
      { en: "This fabric softener smells nice.", fa: "این نرم‌کننده لباس بوی خوبی دارد." }
    ]
  },
  {
    word: "hang clothes",
    meaning: "آویزان کردن لباس",
    en: "I hang clothes on the balcony.",
    fa: "لباس‌ها را در بالکن آویزان می‌کنم.",
    icon: "👕",
    examples: [
      { en: "I hang clothes on the balcony.", fa: "لباس‌ها را در بالکن آویزان می‌کنم." },
      { en: "Hang the clothes to dry.", fa: "لباس‌ها را برای خشک شدن آویزان کن." }
    ]
  },
  {
    word: "fold clothes",
    meaning: "تا کردن لباس",
    en: "She folds clothes every evening.",
    fa: "او هر عصر لباس‌ها را تا می‌کند.",
    icon: "🧺",
    examples: [
      { en: "She folds clothes every evening.", fa: "او هر عصر لباس‌ها را تا می‌کند." },
      { en: "Help me fold the clothes.", fa: "کمک کن لباس‌ها را تا کنیم." }
    ]
  },
  {
    word: "iron clothes",
    meaning: "اتو کردن لباس",
    en: "I need to iron my shirt.",
    fa: "باید پیراهنم را اتو کنم.",
    icon: "👔",
    examples: [
      { en: "I need to iron my shirt.", fa: "باید پیراهنم را اتو کنم." },
      { en: "He irons clothes on Sundays.", fa: "او یکشنبه‌ها لباس اتو می‌کند." }
    ]
  },
  {
    word: "dustpan",
    meaning: "خاک‌انداز",
    en: "Bring the dustpan and broom.",
    fa: "خاک‌انداز و جارو را بیاور.",
    icon: "🧹",
    examples: [
      { en: "Bring the dustpan and broom.", fa: "خاک‌انداز و جارو را بیاور." },
      { en: "Sweep the dirt into the dustpan.", fa: "خاک را داخل خاک‌انداز جارو کن." }
    ]
  }
);

CATEGORIES.a2everyday.words.push(
  {
    word: "mop",
    meaning: "تی زمین‌شوی",
    en: "The mop is in the bathroom.",
    fa: "تی داخل حمام است.",
    icon: "🪣",
    examples: [
      { en: "The mop is in the bathroom.", fa: "تی داخل حمام است." },
      { en: "I mopped the floor this morning.", fa: "امروز صبح زمین را تی کشیدم." }
    ]
  },
  {
    word: "broom",
    meaning: "جارو",
    en: "The broom is behind the door.",
    fa: "جارو پشت در است.",
    icon: "🧹",
    examples: [
      { en: "The broom is behind the door.", fa: "جارو پشت در است." },
      { en: "Use a broom on the balcony.", fa: "بالکن را با جارو جارو کن." }
    ]
  },
  {
    word: "sponge",
    meaning: "اسفنج",
    en: "Clean the sink with a sponge.",
    fa: "سینک را با اسفنج تمیز کن.",
    icon: "🧽",
    examples: [
      { en: "Clean the sink with a sponge.", fa: "سینک را با اسفنج تمیز کن." },
      { en: "This sponge is too old.", fa: "این اسفنج خیلی کهنه است." }
    ]
  },
  {
    word: "dish soap",
    meaning: "مایع ظرفشویی",
    en: "We need more dish soap.",
    fa: "به مایع ظرفشویی بیشتری نیاز داریم.",
    icon: "🍽️",
    examples: [
      { en: "We need more dish soap.", fa: "به مایع ظرفشویی بیشتری نیاز داریم." },
      { en: "Don't use too much dish soap.", fa: "مایع ظرفشویی زیاد نریز." }
    ]
  },
  {
    word: "garbage bag",
    meaning: "کیسه زباله",
    en: "Put a new garbage bag in the bin.",
    fa: "یک کیسه زباله جدید داخل سطل بگذار.",
    icon: "🗑️",
    examples: [
      { en: "Put a new garbage bag in the bin.", fa: "یک کیسه زباله جدید داخل سطل بگذار." },
      { en: "The garbage bag is full.", fa: "کیسه زباله پر است." }
    ]
  },
  {
    word: "recycle",
    meaning: "بازیافت کردن",
    en: "We recycle plastic bottles.",
    fa: "بطری‌های پلاستیکی را بازیافت می‌کنیم.",
    icon: "♻️",
    examples: [
      { en: "We recycle plastic bottles.", fa: "بطری‌های پلاستیکی را بازیافت می‌کنیم." },
      { en: "Please recycle this paper.", fa: "لطفاً این کاغذ را بازیافت کن." }
    ]
  },
  {
    word: "recycling bin",
    meaning: "سطل بازیافت",
    en: "Throw glass into the recycling bin.",
    fa: "شیشه را داخل سطل بازیافت بینداز.",
    icon: "♻️",
    examples: [
      { en: "Throw glass into the recycling bin.", fa: "شیشه را داخل سطل بازیافت بینداز." },
      { en: "The recycling bin is outside.", fa: "سطل بازیافت بیرون است." }
    ]
  },
  {
    word: "doormat",
    meaning: "پادری",
    en: "Wipe your shoes on the doormat.",
    fa: "کفش‌هایت را روی پادری پاک کن.",
    icon: "🚪",
    examples: [
      { en: "Wipe your shoes on the doormat.", fa: "کفش‌هایت را روی پادری پاک کن." },
      { en: "We bought a new doormat.", fa: "یک پادری جدید خریدیم." }
    ]
  },
  {
    word: "hallway",
    meaning: "راهرو",
    en: "The hallway light is broken.",
    fa: "چراغ راهرو خراب است.",
    icon: "🚪",
    examples: [
      { en: "The hallway light is broken.", fa: "چراغ راهرو خراب است." },
      { en: "Leave your shoes in the hallway.", fa: "کفش‌هایت را در راهرو بگذار." }
    ]
  },
  {
    word: "living room",
    meaning: "اتاق نشیمن",
    en: "We watch TV in the living room.",
    fa: "در اتاق نشیمن تلویزیون می‌بینیم.",
    icon: "🛋️",
    examples: [
      { en: "We watch TV in the living room.", fa: "در اتاق نشیمن تلویزیون می‌بینیم." },
      { en: "The living room is bright and cozy.", fa: "اتاق نشیمن روشن و دنج است." }
    ]
  },
  {
    word: "dining room",
    meaning: "اتاق ناهارخوری",
    en: "Dinner is ready in the dining room.",
    fa: "شام در اتاق ناهارخوری آماده است.",
    icon: "🍽️",
    examples: [
      { en: "Dinner is ready in the dining room.", fa: "شام در اتاق ناهارخوری آماده است." },
      { en: "They painted the dining room.", fa: "اتاق ناهارخوری را رنگ کردند." }
    ]
  }
);

CATEGORIES.a2everyday.words.push(
  {
    word: "closet",
    meaning: "کمد لباس",
    en: "My coats are in the closet.",
    fa: "پالتوهایم داخل کمد لباس است.",
    icon: "🚪",
    examples: [
      { en: "My coats are in the closet.", fa: "پالتوهایم داخل کمد لباس است." },
      { en: "Clean out your closet this weekend.", fa: "این آخر هفته کمدت را خلوت کن." }
    ]
  },
  {
    word: "bed sheet",
    meaning: "ملحفه",
    en: "I changed the bed sheets today.",
    fa: "امروز ملحفه‌ها را عوض کردم.",
    icon: "🛏️",
    examples: [
      { en: "I changed the bed sheets today.", fa: "امروز ملحفه‌ها را عوض کردم." },
      { en: "These bed sheets are soft.", fa: "این ملحفه‌ها نرم هستند." }
    ]
  },
  {
    word: "duvet",
    meaning: "لحاف",
    en: "It is cold, so I need a thicker duvet.",
    fa: "هوا سرد است، برای همین به لحاف ضخیم‌تر نیاز دارم.",
    icon: "🛏️",
    examples: [
      { en: "It is cold, so I need a thicker duvet.", fa: "هوا سرد است، برای همین به لحاف ضخیم‌تر نیاز دارم." },
      { en: "She washed the duvet cover.", fa: "او روکش لحاف را شست." }
    ]
  },
  {
    word: "mattress",
    meaning: "تشک",
    en: "This mattress is very comfortable.",
    fa: "این تشک خیلی راحت است.",
    icon: "🛏️",
    examples: [
      { en: "This mattress is very comfortable.", fa: "این تشک خیلی راحت است." },
      { en: "We bought a new mattress.", fa: "یک تشک جدید خریدیم." }
    ]
  },
  {
    word: "alarm clock",
    meaning: "ساعت زنگ‌دار",
    en: "My alarm clock rings at six.",
    fa: "ساعت زنگ‌دارم ساعت شش زنگ می‌زند.",
    icon: "⏰",
    examples: [
      { en: "My alarm clock rings at six.", fa: "ساعت زنگ‌دارم ساعت شش زنگ می‌زند." },
      { en: "I set two alarm clocks.", fa: "دو تا ساعت زنگ‌دار کوک کردم." }
    ]
  },
  {
    word: "snooze",
    meaning: "به تعویق انداختن زنگ",
    en: "I pressed snooze three times.",
    fa: "سه بار زنگ را snooze کردم.",
    icon: "😴",
    examples: [
      { en: "I pressed snooze three times.", fa: "سه بار زنگ را snooze کردم." },
      { en: "Try not to hit snooze every morning.", fa: "سعی کن هر صبح snooze نزنی." }
    ]
  },
  {
    word: "oversleep",
    meaning: "بیش از حد خوابیدن؛ دیر بیدار شدن",
    en: "I overslept and missed the bus.",
    fa: "زیاد خوابیدم و اتوبوس را از دست دادم.",
    icon: "😴",
    examples: [
      { en: "I overslept and missed the bus.", fa: "زیاد خوابیدم و اتوبوس را از دست دادم." },
      { en: "Don't oversleep tomorrow.", fa: "فردا دیر بیدار نشو." }
    ]
  },
  {
    word: "get dressed",
    meaning: "لباس پوشیدن",
    en: "Hurry up and get dressed.",
    fa: "زود باش و لباست را بپوش.",
    icon: "👗",
    examples: [
      { en: "Hurry up and get dressed.", fa: "زود باش و لباست را بپوش." },
      { en: "I get dressed after breakfast.", fa: "بعد از صبحانه لباس می‌پوشم." }
    ]
  },
  {
    word: "comb",
    meaning: "شانه؛ شانه کردن",
    en: "I can't find my comb.",
    fa: "شانه‌ام را پیدا نمی‌کنم.",
    icon: "💇",
    examples: [
      { en: "I can't find my comb.", fa: "شانه‌ام را پیدا نمی‌کنم." },
      { en: "Comb your hair before school.", fa: "قبل از مدرسه موهایت را شانه کن." }
    ]
  },
  {
    word: "hairbrush",
    meaning: "برس مو",
    en: "She bought a new hairbrush.",
    fa: "او یک برس موی جدید خرید.",
    icon: "💇‍♀️",
    examples: [
      { en: "She bought a new hairbrush.", fa: "او یک برس موی جدید خرید." },
      { en: "This hairbrush is gentle.", fa: "این برس مو ملایم است." }
    ]
  },
  {
    word: "toothpaste",
    meaning: "خمیر دندان",
    en: "We need toothpaste from the store.",
    fa: "از فروشگاه خمیر دندان لازم داریم.",
    icon: "🪥",
    examples: [
      { en: "We need toothpaste from the store.", fa: "از فروشگاه خمیر دندان لازم داریم." },
      { en: "Don't squeeze the toothpaste in the middle.", fa: "خمیر دندان را از وسط فشار نده." }
    ]
  }
);

CATEGORIES.a2everyday.words.push(
  {
    word: "mouthwash",
    meaning: "دهانشویه",
    en: "Use mouthwash after brushing.",
    fa: "بعد از مسواک از دهانشویه استفاده کن.",
    icon: "🧴",
    examples: [
      { en: "Use mouthwash after brushing.", fa: "بعد از مسواک از دهانشویه استفاده کن." },
      { en: "This mouthwash is minty.", fa: "این دهانشویه نعنایی است." }
    ]
  },
  {
    word: "bath mat",
    meaning: "پادری حمام",
    en: "Put the bath mat by the shower.",
    fa: "پادری حمام را کنار دوش بگذار.",
    icon: "🛁",
    examples: [
      { en: "Put the bath mat by the shower.", fa: "پادری حمام را کنار دوش بگذار." },
      { en: "The bath mat is wet.", fa: "پادری حمام خیس است." }
    ]
  },
  {
    word: "shampoo",
    meaning: "شامپو",
    en: "This shampoo is good for dry hair.",
    fa: "این شامپو برای موی خشک خوب است.",
    icon: "🧴",
    examples: [
      { en: "This shampoo is good for dry hair.", fa: "این شامپو برای موی خشک خوب است." },
      { en: "I washed my hair with shampoo.", fa: "مویم را با شامپو شستم." }
    ]
  },
  {
    word: "conditioner",
    meaning: "نرم‌کننده مو",
    en: "Apply conditioner after shampoo.",
    fa: "بعد از شامپو نرم‌کننده بزن.",
    icon: "🧴",
    examples: [
      { en: "Apply conditioner after shampoo.", fa: "بعد از شامپو نرم‌کننده بزن." },
      { en: "Leave the conditioner on for two minutes.", fa: "نرم‌کننده را دو دقیقه روی مو بگذار." }
    ]
  },
  {
    word: "deodorant",
    meaning: "دئودورانت",
    en: "Don't forget your deodorant.",
    fa: "دئودورانت را فراموش نکن.",
    icon: "🧴",
    examples: [
      { en: "Don't forget your deodorant.", fa: "دئودورانت را فراموش نکن." },
      { en: "This deodorant lasts all day.", fa: "این دئودورانت تمام روز دوام دارد." }
    ]
  },
  {
    word: "skincare",
    meaning: "مراقبت از پوست",
    en: "Skincare is part of my routine.",
    fa: "مراقبت از پوست بخشی از روتین من است.",
    icon: "🪞",
    examples: [
      { en: "Skincare is part of my routine.", fa: "مراقبت از پوست بخشی از روتین من است." },
      { en: "She spends time on skincare at night.", fa: "او شب‌ها برای مراقبت پوست وقت می‌گذارد." }
    ]
  },
  {
    word: "bandage",
    meaning: "باند / چسب زخم",
    en: "I need a bandage for my finger.",
    fa: "برای انگشتم به چسب زخم نیاز دارم.",
    icon: "🩹",
    examples: [
      { en: "I need a bandage for my finger.", fa: "برای انگشتم به چسب زخم نیاز دارم." },
      { en: "Put a bandage on the cut.", fa: "روی بریدگی باند بگذار." }
    ]
  },
  {
    word: "first aid kit",
    meaning: "جعبه کمک‌های اولیه",
    en: "Every home should have a first aid kit.",
    fa: "هر خانه‌ای باید جعبه کمک‌های اولیه داشته باشد.",
    icon: "⛑️",
    examples: [
      { en: "Every home should have a first aid kit.", fa: "هر خانه‌ای باید جعبه کمک‌های اولیه داشته باشد." },
      { en: "The first aid kit is in the kitchen.", fa: "جعبه کمک‌های اولیه در آشپزخانه است." }
    ]
  },
  {
    word: "vitamin",
    meaning: "ویتامین",
    en: "I take a vitamin every morning.",
    fa: "هر صبح یک ویتامین می‌خورم.",
    icon: "💊",
    examples: [
      { en: "I take a vitamin every morning.", fa: "هر صبح یک ویتامین می‌خورم." },
      { en: "Oranges are rich in vitamin C.", fa: "پرتقال ویتامین C زیادی دارد." }
    ]
  },
  {
    word: "allergy",
    meaning: "آلرژی / حساسیت",
    en: "I have a dust allergy.",
    fa: "به گرد و خاک آلرژی دارم.",
    icon: "🤧",
    examples: [
      { en: "I have a dust allergy.", fa: "به گرد و خاک آلرژی دارم." },
      { en: "Spring allergies are common.", fa: "آلرژی بهاری شایع است." }
    ]
  },
  {
    word: "cough",
    meaning: "سرفه",
    en: "He has a bad cough today.",
    fa: "او امروز سرفه بدی دارد.",
    icon: "😷",
    examples: [
      { en: "He has a bad cough today.", fa: "او امروز سرفه بدی دارد." },
      { en: "Drink tea if you have a cough.", fa: "اگر سرفه داری چای بنوش." }
    ]
  }
);

CATEGORIES.a2everyday.words.push(
  {
    word: "fever",
    meaning: "تب",
    en: "She stayed home because of a fever.",
    fa: "به‌خاطر تب در خانه ماند.",
    icon: "🤒",
    examples: [
      { en: "She stayed home because of a fever.", fa: "به‌خاطر تب در خانه ماند." },
      { en: "The child has a slight fever.", fa: "کودک کمی تب دارد." }
    ]
  },
  {
    word: "waiting room",
    meaning: "اتاق انتظار",
    en: "Please sit in the waiting room.",
    fa: "لطفاً در اتاق انتظار بنشینید.",
    icon: "🪑",
    examples: [
      { en: "Please sit in the waiting room.", fa: "لطفاً در اتاق انتظار بنشینید." },
      { en: "The waiting room was crowded.", fa: "اتاق انتظار شلوغ بود." }
    ]
  },
  {
    word: "health insurance",
    meaning: "بیمه درمان",
    en: "Does your job include health insurance?",
    fa: "آیا کارت بیمه درمان دارد؟",
    icon: "🩺",
    examples: [
      { en: "Does your job include health insurance?", fa: "آیا کارت بیمه درمان دارد؟" },
      { en: "I renewed my health insurance.", fa: "بیمه درمانم را تمدید کردم." }
    ]
  },
  {
    word: "ID card",
    meaning: "کارت شناسایی",
    en: "Bring your ID card to the office.",
    fa: "کارت شناسایی‌ات را به اداره بیاور.",
    icon: "🪪",
    examples: [
      { en: "Bring your ID card to the office.", fa: "کارت شناسایی‌ات را به اداره بیاور." },
      { en: "I lost my ID card yesterday.", fa: "دیروز کارت شناسایی‌ام را گم کردم." }
    ]
  },
  {
    word: "application form",
    meaning: "فرم درخواست",
    en: "Please fill out this application form.",
    fa: "لطفاً این فرم درخواست را پر کنید.",
    icon: "📝",
    examples: [
      { en: "Please fill out this application form.", fa: "لطفاً این فرم درخواست را پر کنید." },
      { en: "I submitted the application form online.", fa: "فرم درخواست را آنلاین ارسال کردم." }
    ]
  },
  {
    word: "signature",
    meaning: "امضا",
    en: "I need your signature here.",
    fa: "اینجا به امضای شما نیاز دارم.",
    icon: "✍️",
    examples: [
      { en: "I need your signature here.", fa: "اینجا به امضای شما نیاز دارم." },
      { en: "Put your signature at the bottom.", fa: "امضایت را پایین صفحه بگذار." }
    ]
  },
  {
    word: "photocopy",
    meaning: "کپی / فتوکپی",
    en: "Can you make a photocopy of this?",
    fa: "می‌توانی از این یک فتوکپی بگیری؟",
    icon: "📄",
    examples: [
      { en: "Can you make a photocopy of this?", fa: "می‌توانی از این یک فتوکپی بگیری؟" },
      { en: "I need two photocopies.", fa: "به دو برگ کپی نیاز دارم." }
    ]
  },
  {
    word: "envelope",
    meaning: "پاکت نامه",
    en: "Put the letter in an envelope.",
    fa: "نامه را داخل پاکت بگذار.",
    icon: "✉️",
    examples: [
      { en: "Put the letter in an envelope.", fa: "نامه را داخل پاکت بگذار." },
      { en: "I bought large envelopes.", fa: "پاکت‌های بزرگ خریدم." }
    ]
  },
  {
    word: "stamp",
    meaning: "تمبر؛ مهر",
    en: "This letter needs a stamp.",
    fa: "این نامه به تمبر نیاز دارد.",
    icon: "🔏",
    examples: [
      { en: "This letter needs a stamp.", fa: "این نامه به تمبر نیاز دارد." },
      { en: "The form needs an official stamp.", fa: "فرم به مهر رسمی نیاز دارد." }
    ]
  },
  {
    word: "front door",
    meaning: "درِ ورودی",
    en: "Lock the front door at night.",
    fa: "شب درِ ورودی را قفل کن.",
    icon: "🚪",
    examples: [
      { en: "Lock the front door at night.", fa: "شب درِ ورودی را قفل کن." },
      { en: "Someone is at the front door.", fa: "کسی پشت درِ ورودی است." }
    ]
  },
  {
    word: "doorbell camera",
    meaning: "دوربین آیفون / در",
    en: "We installed a doorbell camera.",
    fa: "یک دوربین آیفون نصب کردیم.",
    icon: "📹",
    examples: [
      { en: "We installed a doorbell camera.", fa: "یک دوربین آیفون نصب کردیم." },
      { en: "The doorbell camera sent an alert.", fa: "دوربین در یک هشدار فرستاد." }
    ]
  }
);

CATEGORIES.a2travel.words.push(
  {
    word: "travel budget",
    meaning: "بودجه سفر",
    en: "Our travel budget is small this year.",
    fa: "بودجه سفر ما امسال کم است.",
    icon: "💰",
    examples: [
      { en: "Our travel budget is small this year.", fa: "بودجه سفر ما امسال کم است." },
      { en: "Make a travel budget before booking.", fa: "قبل از رزرو، بودجه سفر درست کن." }
    ]
  },
  {
    word: "tourist attraction",
    meaning: "جاذبه گردشگری",
    en: "This museum is a popular tourist attraction.",
    fa: "این موزه یک جاذبه گردشگری محبوب است.",
    icon: "🏛️",
    examples: [
      { en: "This museum is a popular tourist attraction.", fa: "این موزه یک جاذبه گردشگری محبوب است." },
      { en: "We visited many tourist attractions.", fa: "از جاذبه‌های گردشگری زیادی بازدید کردیم." }
    ]
  },
  {
    word: "local food",
    meaning: "غذای محلی",
    en: "We tried local food in the village.",
    fa: "در روستا غذای محلی امتحان کردیم.",
    icon: "🍲",
    examples: [
      { en: "We tried local food in the village.", fa: "در روستا غذای محلی امتحان کردیم." },
      { en: "Local food is part of travel.", fa: "غذای محلی بخشی از سفر است." }
    ]
  },
  {
    word: "travel plan",
    meaning: "برنامه سفر",
    en: "Our travel plan changed suddenly.",
    fa: "برنامه سفر ما ناگهان تغییر کرد.",
    icon: "🗺️",
    examples: [
      { en: "Our travel plan changed suddenly.", fa: "برنامه سفر ما ناگهان تغییر کرد." },
      { en: "Write your travel plan clearly.", fa: "برنامه سفر را واضح بنویس." }
    ]
  },
  {
    word: "camping",
    meaning: "کمپینگ، چادر زدن",
    en: "We went camping near the lake.",
    fa: "کنار دریاچه کمپینگ کردیم.",
    icon: "⛺",
    examples: [
      { en: "We went camping near the lake.", fa: "کنار دریاچه کمپینگ کردیم." },
      { en: "Camping can be fun in spring.", fa: "کمپینگ در بهار می‌تواند لذت‌بخش باشد." }
    ]
  },
  {
    word: "tent",
    meaning: "چادر مسافرتی",
    en: "We slept in a tent.",
    fa: "ما در چادر خوابیدیم.",
    icon: "⛺",
    examples: [
      { en: "We slept in a tent.", fa: "ما در چادر خوابیدیم." },
      { en: "The tent is easy to carry.", fa: "چادر راحت قابل حمل است." }
    ]
  },
  {
    word: "campfire",
    meaning: "آتش کمپ",
    en: "We sat around the campfire.",
    fa: "دور آتش کمپ نشستیم.",
    icon: "🔥",
    examples: [
      { en: "We sat around the campfire.", fa: "دور آتش کمپ نشستیم." },
      { en: "The campfire kept us warm.", fa: "آتش کمپ ما را گرم نگه داشت." }
    ]
  },
  {
    word: "hiking trail",
    meaning: "مسیر پیاده‌روی کوهستانی",
    en: "This hiking trail is beautiful.",
    fa: "این مسیر پیاده‌روی کوهستانی زیباست.",
    icon: "🥾",
    examples: [
      { en: "This hiking trail is beautiful.", fa: "این مسیر پیاده‌روی کوهستانی زیباست." },
      { en: "The hiking trail takes two hours.", fa: "مسیر پیاده‌روی دو ساعت طول می‌کشد." }
    ]
  },
  {
    word: "viewpoint",
    meaning: "نقطه دید، چشم‌انداز",
    en: "The viewpoint is at the top of the hill.",
    fa: "نقطه دید بالای تپه است.",
    icon: "🌄",
    examples: [
      { en: "The viewpoint is at the top of the hill.", fa: "نقطه دید بالای تپه است." },
      { en: "We took photos at the viewpoint.", fa: "در نقطه دید عکس گرفتیم." }
    ]
  },
  {
    word: "travel journal",
    meaning: "دفترچه سفر",
    en: "She writes in her travel journal every night.",
    fa: "او هر شب در دفترچه سفرش می‌نویسد.",
    icon: "📔",
    examples: [
      { en: "She writes in her travel journal every night.", fa: "او هر شب در دفترچه سفرش می‌نویسد." },
      { en: "My travel journal is full of memories.", fa: "دفترچه سفرم پر از خاطره است." }
    ]
  }
);
CATEGORIES.a2travel.words.push(
  {
    word: "travel light",
    meaning: "سبک سفر کردن",
    en: "I prefer to travel light.",
    fa: "ترجیح می‌دهم سبک سفر کنم.",
    icon: "🎒",
    examples: [
      { en: "I prefer to travel light.", fa: "ترجیح می‌دهم سبک سفر کنم." },
      { en: "Travel light if you use budget airlines.", fa: "اگر هواپیمایی ارزان سوار می‌شوی سبک سفر کن." }
    ]
  },
  {
    word: "checked baggage",
    meaning: "بار تحویلی هواپیما",
    en: "Checked baggage can be expensive.",
    fa: "بار تحویلی ممکن است گران باشد.",
    icon: "🧳",
    examples: [
      { en: "Checked baggage can be expensive.", fa: "بار تحویلی ممکن است گران باشد." },
      { en: "How many checked baggage pieces are free?", fa: "چند بار تحویلی رایگان است؟" }
    ]
  },
  {
    word: "carry-on bag",
    meaning: "کیف یا چمدان کابین",
    en: "My carry-on bag is under the seat.",
    fa: "کیف کابین‌ام زیر صندلی است.",
    icon: "🎒",
    examples: [
      { en: "My carry-on bag is under the seat.", fa: "کیف کابین‌ام زیر صندلی است." },
      { en: "This carry-on bag fits the size limit.", fa: "این کیف کابین در محدودیت اندازه جا می‌شود." }
    ]
  },
  {
    word: "overhead bin",
    meaning: "جای بار بالای صندلی",
    en: "Put your bag in the overhead bin.",
    fa: "کیفت را در جای بار بالای سرت بگذار.",
    icon: "🧳",
    examples: [
      { en: "Put your bag in the overhead bin.", fa: "کیفت را در جای بار بالای سرت بگذار." },
      { en: "The overhead bin is full.", fa: "جای بار بالا پر است." }
    ]
  },
  {
    word: "seat belt",
    meaning: "کمربند صندلی",
    en: "Please fasten your seat belt.",
    fa: "لطفاً کمربند صندلی‌ات را ببند.",
    icon: "✈️",
    examples: [
      { en: "Please fasten your seat belt.", fa: "لطفاً کمربند صندلی‌ات را ببند." },
      { en: "Keep your seat belt fastened.", fa: "کمربند صندلی را بسته نگه دار." }
    ]
  },
  {
    word: "tray table",
    meaning: "میز تاشو صندلی",
    en: "Fold up your tray table.",
    fa: "میز تاشو را بالا بده.",
    icon: "🍽️",
    examples: [
      { en: "Fold up your tray table.", fa: "میز تاشو را بالا بده." },
      { en: "Don't put heavy things on the tray table.", fa: "روی میز تاشو وسیله سنگین نگذار." }
    ]
  },
  {
    word: "aisle seat",
    meaning: "صندلی کنار راهرو",
    en: "I booked an aisle seat.",
    fa: "صندلی کنار راهرو رزرو کردم.",
    icon: "💺",
    examples: [
      { en: "I booked an aisle seat.", fa: "صندلی کنار راهرو رزرو کردم." },
      { en: "An aisle seat is easier for walking.", fa: "صندلی کنار راهرو برای راه رفتن راحت‌تر است." }
    ]
  },
  {
    word: "middle seat",
    meaning: "صندلی وسط",
    en: "Nobody likes the middle seat.",
    fa: "هیچ‌کس صندلی وسط را دوست ندارد.",
    icon: "💺",
    examples: [
      { en: "Nobody likes the middle seat.", fa: "هیچ‌کس صندلی وسط را دوست ندارد." },
      { en: "I got stuck with the middle seat.", fa: "به صندلی وسط گیر افتادم." }
    ]
  },
  {
    word: "exit row",
    meaning: "ردیف خروجی اضطراری",
    en: "Exit row seats have more legroom.",
    fa: "صندلی‌های ردیف خروجی جای پا بیشتری دارند.",
    icon: "🚪",
    examples: [
      { en: "Exit row seats have more legroom.", fa: "صندلی‌های ردیف خروجی جای پا بیشتری دارند." },
      { en: "You must be able to help in an exit row.", fa: "در ردیف خروجی باید بتوانی کمک کنی." }
    ]
  },
  {
    word: "legroom",
    meaning: "فضای پا",
    en: "This seat has great legroom.",
    fa: "این صندلی فضای پای عالی دارد.",
    icon: "🦵",
    examples: [
      { en: "This seat has great legroom.", fa: "این صندلی فضای پای عالی دارد." },
      { en: "I need more legroom on long flights.", fa: "در پروازهای طولانی به فضای پای بیشتری نیاز دارم." }
    ]
  },
  {
    word: "turbulence",
    meaning: "تلاطم هوا",
    en: "We hit some turbulence over the sea.",
    fa: "روی دریا کمی تلاطم هوا داشتیم.",
    icon: "🌪️",
    examples: [
      { en: "We hit some turbulence over the sea.", fa: "روی دریا کمی تلاطم هوا داشتیم." },
      { en: "Turbulence made the ride bumpy.", fa: "تلاطم هوا سفر را پرتکان کرد." }
    ]
  }
);

CATEGORIES.a2travel.words.push(
  {
    word: "air pressure",
    meaning: "فشار هوا",
    en: "My ears hurt from the air pressure.",
    fa: "از فشار هوا گوش‌هایم درد گرفت.",
    icon: "👂",
    examples: [
      { en: "My ears hurt from the air pressure.", fa: "از فشار هوا گوش‌هایم درد گرفت." },
      { en: "Yawning helps with air pressure.", fa: "خمیازه برای فشار هوا کمک می‌کند." }
    ]
  },
  {
    word: "jet lag",
    meaning: "اختلال خواب بعد از پرواز طولانی",
    en: "I have bad jet lag today.",
    fa: "امروز جت‌لگ شدیدی دارم.",
    icon: "😴",
    examples: [
      { en: "I have bad jet lag today.", fa: "امروز جت‌لگ شدیدی دارم." },
      { en: "Jet lag makes mornings hard.", fa: "جت‌لگ صبح‌ها را سخت می‌کند." }
    ]
  },
  {
    word: "time zone",
    meaning: "منطقه زمانی",
    en: "We crossed three time zones.",
    fa: "از سه منطقه زمانی عبور کردیم.",
    icon: "🌍",
    examples: [
      { en: "We crossed three time zones.", fa: "از سه منطقه زمانی عبور کردیم." },
      { en: "Check the time zone before you call.", fa: "قبل از تماس منطقه زمانی را چک کن." }
    ]
  },
  {
    word: "boarding time",
    meaning: "ساعت سوار شدن",
    en: "Boarding time is 9:40.",
    fa: "ساعت سوار شدن ۹:۴۰ است.",
    icon: "🕘",
    examples: [
      { en: "Boarding time is 9:40.", fa: "ساعت سوار شدن ۹:۴۰ است." },
      { en: "Don't miss the boarding time.", fa: "ساعت سوار شدن را از دست نده." }
    ]
  },
  {
    word: "gate number",
    meaning: "شماره گیت",
    en: "What's the gate number?",
    fa: "شماره گیت چند است؟",
    icon: "🔢",
    examples: [
      { en: "What's the gate number?", fa: "شماره گیت چند است؟" },
      { en: "The gate number changed.", fa: "شماره گیت عوض شد." }
    ]
  },
  {
    word: "flight attendant",
    meaning: "مهماندار هواپیما",
    en: "Ask the flight attendant for water.",
    fa: "از مهماندار هواپیما آب بخواه.",
    icon: "👩‍✈️",
    examples: [
      { en: "Ask the flight attendant for water.", fa: "از مهماندار هواپیما آب بخواه." },
      { en: "The flight attendant was very kind.", fa: "مهماندار هواپیما خیلی مهربان بود." }
    ]
  },
  {
    word: "pilot",
    meaning: "خلبان",
    en: "The pilot made an announcement.",
    fa: "خلبان اعلامیه داد.",
    icon: "👨‍✈️",
    examples: [
      { en: "The pilot made an announcement.", fa: "خلبان اعلامیه داد." },
      { en: "The pilot welcomed us on board.", fa: "خلبان به ما خوش‌آمد گفت." }
    ]
  },
  {
    word: "runway",
    meaning: "باند فرودگاه",
    en: "The plane is on the runway.",
    fa: "هواپیما روی باند است.",
    icon: "🛬",
    examples: [
      { en: "The plane is on the runway.", fa: "هواپیما روی باند است." },
      { en: "We waited on the runway for ten minutes.", fa: "ده دقیقه روی باند منتظر ماندیم." }
    ]
  },
  {
    word: "takeoff",
    meaning: "پرواز / بلند شدن هواپیما",
    en: "Please stay seated during takeoff.",
    fa: "لطفاً هنگام بلند شدن هواپیما نشسته بمانید.",
    icon: "🛫",
    examples: [
      { en: "Please stay seated during takeoff.", fa: "لطفاً هنگام بلند شدن هواپیما نشسته بمانید." },
      { en: "Takeoff was smooth today.", fa: "امروز بلند شدن هواپیما نرم بود." }
    ]
  },
  {
    word: "landing",
    meaning: "فرود",
    en: "We will begin our landing soon.",
    fa: "به‌زودی فرود را شروع می‌کنیم.",
    icon: "🛬",
    examples: [
      { en: "We will begin our landing soon.", fa: "به‌زودی فرود را شروع می‌کنیم." },
      { en: "The landing was a bit rough.", fa: "فرود کمی سخت بود." }
    ]
  },
  {
    word: "stopover",
    meaning: "توقف میانی",
    en: "We have a two-hour stopover in Doha.",
    fa: "در دوحه دو ساعت توقف میانی داریم.",
    icon: "⏱️",
    examples: [
      { en: "We have a two-hour stopover in Doha.", fa: "در دوحه دو ساعت توقف میانی داریم." },
      { en: "A long stopover can be tiring.", fa: "توقف میانی طولانی ممکن است خسته‌کننده باشد." }
    ]
  }
);

CATEGORIES.a2travel.words.push(
  {
    word: "transit area",
    meaning: "بخش ترانزیت",
    en: "Stay in the transit area.",
    fa: "در بخش ترانزیت بمان.",
    icon: "🛂",
    examples: [
      { en: "Stay in the transit area.", fa: "در بخش ترانزیت بمان." },
      { en: "Shops in the transit area are open.", fa: "فروشگاه‌های بخش ترانزیت باز هستند." }
    ]
  },
  {
    word: "duty-free",
    meaning: "فروشگاه معاف از مالیات",
    en: "I bought perfume at duty-free.",
    fa: "از فروشگاه معاف از مالیات عطر خریدم.",
    icon: "🛍️",
    examples: [
      { en: "I bought perfume at duty-free.", fa: "از فروشگاه معاف از مالیات عطر خریدم." },
      { en: "Duty-free is after security.", fa: "فروشگاه معاف از مالیات بعد از بازرسی است." }
    ]
  },
  {
    word: "immigration",
    meaning: "اداره مهاجرت / کنترل ورود",
    en: "Immigration took twenty minutes.",
    fa: "مهاجرت بیست دقیقه طول کشید.",
    icon: "🛂",
    examples: [
      { en: "Immigration took twenty minutes.", fa: "مهاجرت بیست دقیقه طول کشید." },
      { en: "Have your passport ready for immigration.", fa: "برای مهاجرت پاسپورتت را آماده داشته باش." }
    ]
  },
  {
    word: "customs declaration",
    meaning: "اظهارنامه گمرک",
    en: "Fill out the customs declaration form.",
    fa: "فرم اظهارنامه گمرک را پر کن.",
    icon: "📝",
    examples: [
      { en: "Fill out the customs declaration form.", fa: "فرم اظهارنامه گمرک را پر کن." },
      { en: "I had nothing to write on the customs declaration.", fa: "در اظهارنامه گمرک چیزی برای نوشتن نداشتم." }
    ]
  },
  {
    word: "nothing to declare",
    meaning: "چیزی برای اظهار ندارم",
    en: "I have nothing to declare.",
    fa: "چیزی برای اظهار ندارم.",
    icon: "✅",
    examples: [
      { en: "I have nothing to declare.", fa: "چیزی برای اظهار ندارم." },
      { en: "Choose the green channel if you have nothing to declare.", fa: "اگر چیزی برای اظهار نداری مسیر سبز را انتخاب کن." }
    ]
  },
  {
    word: "travel documents",
    meaning: "مدارک سفر",
    en: "Keep your travel documents together.",
    fa: "مدارک سفرت را یک‌جا نگه دار.",
    icon: "📄",
    examples: [
      { en: "Keep your travel documents together.", fa: "مدارک سفرت را یک‌جا نگه دار." },
      { en: "I checked my travel documents twice.", fa: "دو بار مدارک سفرم را چک کردم." }
    ]
  },
  {
    word: "visa application",
    meaning: "درخواست ویزا",
    en: "My visa application is still pending.",
    fa: "درخواست ویزایم هنوز در حال بررسی است.",
    icon: "📋",
    examples: [
      { en: "My visa application is still pending.", fa: "درخواست ویزایم هنوز در حال بررسی است." },
      { en: "The visa application needs photos.", fa: "درخواست ویزا به عکس نیاز دارد." }
    ]
  },
  {
    word: "entry stamp",
    meaning: "مهر ورود",
    en: "The officer put an entry stamp in my passport.",
    fa: "افسر یک مهر ورود در پاسپورتم زد.",
    icon: "📕",
    examples: [
      { en: "The officer put an entry stamp in my passport.", fa: "افسر یک مهر ورود در پاسپورتم زد." },
      { en: "I looked for the entry stamp.", fa: "دنبال مهر ورود گشتم." }
    ]
  },
  {
    word: "exit stamp",
    meaning: "مهر خروج",
    en: "There is no exit stamp in my passport.",
    fa: "در پاسپورتم مهر خروج نیست.",
    icon: "📕",
    examples: [
      { en: "There is no exit stamp in my passport.", fa: "در پاسپورتم مهر خروج نیست." },
      { en: "Some countries don't use exit stamps.", fa: "بعضی کشورها مهر خروج نمی‌زنند." }
    ]
  },
  {
    word: "hotel booking",
    meaning: "رزرو هتل",
    en: "I confirmed my hotel booking by email.",
    fa: "رزرو هتلم را با ایمیل تأیید کردم.",
    icon: "🏨",
    examples: [
      { en: "I confirmed my hotel booking by email.", fa: "رزرو هتلم را با ایمیل تأیید کردم." },
      { en: "Do you have a hotel booking for tonight?", fa: "برای امشب رزرو هتل داری؟" }
    ]
  },
  {
    word: "booking confirmation",
    meaning: "تأییدیه رزرو",
    en: "Show your booking confirmation at the desk.",
    fa: "تأییدیه رزرو را در پذیرش نشان بده.",
    icon: "📧",
    examples: [
      { en: "Show your booking confirmation at the desk.", fa: "تأییدیه رزرو را در پذیرش نشان بده." },
      { en: "I saved the booking confirmation on my phone.", fa: "تأییدیه رزرو را در گوشی‌ام ذخیره کردم." }
    ]
  }
);

CATEGORIES.a2travel.words.push(
  {
    word: "check-in time",
    meaning: "ساعت ورود به هتل",
    en: "Check-in time is after 2 p.m.",
    fa: "ساعت ورود به هتل بعد از ساعت ۲ بعدازظهر است.",
    icon: "🕑",
    examples: [
      { en: "Check-in time is after 2 p.m.", fa: "ساعت ورود به هتل بعد از ساعت ۲ بعدازظهر است." },
      { en: "We arrived before check-in time.", fa: "قبل از ساعت ورود رسیدیم." }
    ]
  },
  {
    word: "check-out time",
    meaning: "ساعت تخلیه اتاق",
    en: "Check-out time is at noon.",
    fa: "ساعت تخلیه اتاق ۱۲ ظهر است.",
    icon: "🕛",
    examples: [
      { en: "Check-out time is at noon.", fa: "ساعت تخلیه اتاق ۱۲ ظهر است." },
      { en: "We asked for a late check-out time.", fa: "درخواست ساعت تخلیه دیرتر دادیم." }
    ]
  },
  {
    word: "late check-out",
    meaning: "تخلیه دیرهنگام",
    en: "Late check-out costs extra.",
    fa: "تخلیه دیرهنگام هزینه اضافه دارد.",
    icon: "🕒",
    examples: [
      { en: "Late check-out costs extra.", fa: "تخلیه دیرهنگام هزینه اضافه دارد." },
      { en: "I requested a late check-out.", fa: "درخواست تخلیه دیرهنگام دادم." }
    ]
  },
  {
    word: "room key",
    meaning: "کلید / کارت اتاق",
    en: "Don't lose your room key.",
    fa: "کارت اتاقت را گم نکن.",
    icon: "🔑",
    examples: [
      { en: "Don't lose your room key.", fa: "کارت اتاقت را گم نکن." },
      { en: "The room key stopped working.", fa: "کارت اتاق از کار افتاد." }
    ]
  },
  {
    word: "key card",
    meaning: "کارت کلید",
    en: "Tap the key card on the door.",
    fa: "کارت کلید را روی در بزن.",
    icon: "💳",
    examples: [
      { en: "Tap the key card on the door.", fa: "کارت کلید را روی در بزن." },
      { en: "I need a new key card.", fa: "به یک کارت کلید جدید نیاز دارم." }
    ]
  },
  {
    word: "front desk",
    meaning: "پذیرش هتل",
    en: "Ask the front desk for a map.",
    fa: "از پذیرش هتل نقشه بخواه.",
    icon: "🏨",
    examples: [
      { en: "Ask the front desk for a map.", fa: "از پذیرش هتل نقشه بخواه." },
      { en: "The front desk is open 24 hours.", fa: "پذیرش هتل ۲۴ ساعته باز است." }
    ]
  },
  {
    word: "concierge",
    meaning: "کنسیِرژ / راهنمای هتل",
    en: "The concierge booked a taxi for us.",
    fa: "کنسیِرژ برایمان تاکسی گرفت.",
    icon: "🛎️",
    examples: [
      { en: "The concierge booked a taxi for us.", fa: "کنسیِرژ برایمان تاکسی گرفت." },
      { en: "Ask the concierge about local tours.", fa: "درباره تورهای محلی از کنسیِرژ بپرس." }
    ]
  },
  {
    word: "housekeeping",
    meaning: "خدمات نظافت اتاق",
    en: "Housekeeping comes in the morning.",
    fa: "خدمات نظافت صبح می‌آید.",
    icon: "🧹",
    examples: [
      { en: "Housekeeping comes in the morning.", fa: "خدمات نظافت صبح می‌آید." },
      { en: "Please tell housekeeping we need towels.", fa: "لطفاً به نظافت بگویید به حوله نیاز داریم." }
    ]
  },
  {
    word: "room service",
    meaning: "سرویس اتاق",
    en: "We ordered breakfast from room service.",
    fa: "صبحانه را از سرویس اتاق سفارش دادیم.",
    icon: "🛎️",
    examples: [
      { en: "We ordered breakfast from room service.", fa: "صبحانه را از سرویس اتاق سفارش دادیم." },
      { en: "Room service is available until midnight.", fa: "سرویس اتاق تا نیمه‌شب در دسترس است." }
    ]
  },
  {
    word: "minibar",
    meaning: "مینی‌بار",
    en: "The minibar snacks are expensive.",
    fa: "تنقلات مینی‌بار گران است.",
    icon: "🍫",
    examples: [
      { en: "The minibar snacks are expensive.", fa: "تنقلات مینی‌بار گران است." },
      { en: "I didn't use the minibar.", fa: "از مینی‌بار استفاده نکردم." }
    ]
  },
  {
    word: "safe box",
    meaning: "صندوق امانات اتاق",
    en: "Put your passport in the safe box.",
    fa: "پاسپورتت را در صندوق امانات بگذار.",
    icon: "🔒",
    examples: [
      { en: "Put your passport in the safe box.", fa: "پاسپورتت را در صندوق امانات بگذار." },
      { en: "I forgot the safe box code.", fa: "رمز صندوق امانات را فراموش کردم." }
    ]
  }
);

CATEGORIES.a2travel.words.push(
  {
    word: "wake-up call",
    meaning: "تماس بیدارباش",
    en: "I asked for a wake-up call at six.",
    fa: "برای ساعت شش تماس بیدارباش خواستم.",
    icon: "☎️",
    examples: [
      { en: "I asked for a wake-up call at six.", fa: "برای ساعت شش تماس بیدارباش خواستم." },
      { en: "The wake-up call came on time.", fa: "تماس بیدارباش به‌موقع آمد." }
    ]
  },
  {
    word: "luggage storage",
    meaning: "امانت بار",
    en: "Is there luggage storage here?",
    fa: "اینجا امانت بار دارید؟",
    icon: "🧳",
    examples: [
      { en: "Is there luggage storage here?", fa: "اینجا امانت بار دارید؟" },
      { en: "We used luggage storage at the station.", fa: "در ایستگاه از امانت بار استفاده کردیم." }
    ]
  },
  {
    word: "porter",
    meaning: "باربر هتل",
    en: "The porter helped with our bags.",
    fa: "باربر در حمل چمدان‌ها کمک کرد.",
    icon: "🛎️",
    examples: [
      { en: "The porter helped with our bags.", fa: "باربر در حمل چمدان‌ها کمک کرد." },
      { en: "Tip the porter if you like.", fa: "اگر خواستی به باربر انعام بده." }
    ]
  },
  {
    word: "shuttle bus",
    meaning: "اتوبوس رفت‌وآمد هتل/فرودگاه",
    en: "The hotel shuttle bus is free.",
    fa: "اتوبوس رفت‌وآمد هتل رایگان است.",
    icon: "🚌",
    examples: [
      { en: "The hotel shuttle bus is free.", fa: "اتوبوس رفت‌وآمد هتل رایگان است." },
      { en: "Take the shuttle bus to the airport.", fa: "با اتوبوس رفت‌وآمد به فرودگاه برو." }
    ]
  },
  {
    word: "airport transfer",
    meaning: "ترانسفر فرودگاه",
    en: "Airport transfer is included.",
    fa: "ترانسفر فرودگاه شامل می‌شود.",
    icon: "🚐",
    examples: [
      { en: "Airport transfer is included.", fa: "ترانسفر فرودگاه شامل می‌شود." },
      { en: "We booked a private airport transfer.", fa: "یک ترانسفر خصوصی فرودگاه رزرو کردیم." }
    ]
  },
  {
    word: "ride-hailing app",
    meaning: "اپ درخواست خودرو",
    en: "I called a car with a ride-hailing app.",
    fa: "با اپ درخواست خودرو یک ماشین گرفتم.",
    icon: "📱",
    examples: [
      { en: "I called a car with a ride-hailing app.", fa: "با اپ درخواست خودرو یک ماشین گرفتم." },
      { en: "Ride-hailing apps are common in this city.", fa: "در این شهر اپ‌های درخواست خودرو رایج‌اند." }
    ]
  },
  {
    word: "taxi stand",
    meaning: "ایستگاه تاکسی",
    en: "The taxi stand is outside the station.",
    fa: "ایستگاه تاکسی بیرون ایستگاه است.",
    icon: "🚕",
    examples: [
      { en: "The taxi stand is outside the station.", fa: "ایستگاه تاکسی بیرون ایستگاه است." },
      { en: "Wait in line at the taxi stand.", fa: "در ایستگاه تاکسی صف بایست." }
    ]
  },
  {
    word: "meter",
    meaning: "تاکسی‌متر",
    en: "Please turn on the meter.",
    fa: "لطفاً تاکسی‌متر را روشن کن.",
    icon: "⏱️",
    examples: [
      { en: "Please turn on the meter.", fa: "لطفاً تاکسی‌متر را روشن کن." },
      { en: "The meter shows the fare.", fa: "تاکسی‌متر کرایه را نشان می‌دهد." }
    ]
  },
  {
    word: "fare estimate",
    meaning: "برآورد کرایه",
    en: "What's the fare estimate to the hotel?",
    fa: "برآورد کرایه تا هتل چقدر است؟",
    icon: "💰",
    examples: [
      { en: "What's the fare estimate to the hotel?", fa: "برآورد کرایه تا هتل چقدر است؟" },
      { en: "The app shows a fare estimate.", fa: "اپ یک برآورد کرایه نشان می‌دهد." }
    ]
  },
  {
    word: "public transport",
    meaning: "حمل‌ونقل عمومی",
    en: "Public transport is cheap here.",
    fa: "حمل‌ونقل عمومی اینجا ارزان است.",
    icon: "🚇",
    examples: [
      { en: "Public transport is cheap here.", fa: "حمل‌ونقل عمومی اینجا ارزان است." },
      { en: "I use public transport every day when I travel.", fa: "وقتی سفر می‌کنم هر روز از حمل‌ونقل عمومی استفاده می‌کنم." }
    ]
  },
  {
    word: "day pass",
    meaning: "بلیت روزانه",
    en: "A day pass is good for tourists.",
    fa: "بلیت روزانه برای گردشگرها خوب است.",
    icon: "🎫",
    examples: [
      { en: "A day pass is good for tourists.", fa: "بلیت روزانه برای گردشگرها خوب است." },
      { en: "I bought a subway day pass.", fa: "یک بلیت روزانه مترو خریدم." }
    ]
  }
);

CATEGORIES.a2travel.words.push(
  {
    word: "travel card",
    meaning: "کارت سفر",
    en: "Top up your travel card here.",
    fa: "کارت سفرت را اینجا شارژ کن.",
    icon: "💳",
    examples: [
      { en: "Top up your travel card here.", fa: "کارت سفرت را اینجا شارژ کن." },
      { en: "I lost my travel card.", fa: "کارت سفرم را گم کردم." }
    ]
  },
  {
    word: "ticket machine",
    meaning: "دستگاه بلیت",
    en: "The ticket machine only takes cards.",
    fa: "دستگاه بلیت فقط کارت می‌گیرد.",
    icon: "🤖",
    examples: [
      { en: "The ticket machine only takes cards.", fa: "دستگاه بلیت فقط کارت می‌گیرد." },
      { en: "I bought a ticket from the ticket machine.", fa: "از دستگاه بلیت، بلیت خریدم." }
    ]
  },
  {
    word: "platform number",
    meaning: "شماره سکو",
    en: "Check the platform number on the board.",
    fa: "شماره سکو را از تابلو ببین.",
    icon: "🔢",
    examples: [
      { en: "Check the platform number on the board.", fa: "شماره سکو را از تابلو ببین." },
      { en: "Platform number 4 is downstairs.", fa: "سکو شماره ۴ پایین است." }
    ]
  },
  {
    word: "departure board",
    meaning: "تابلوی پرواز/حرکت",
    en: "Look at the departure board.",
    fa: "به تابلوی حرکت نگاه کن.",
    icon: "📺",
    examples: [
      { en: "Look at the departure board.", fa: "به تابلوی حرکت نگاه کن." },
      { en: "The departure board shows a delay.", fa: "تابلوی حرکت تأخیر را نشان می‌دهد." }
    ]
  },
  {
    word: "arrival hall",
    meaning: "سالن ورود",
    en: "Meet me in the arrival hall.",
    fa: "در سالن ورود منتظرم باش.",
    icon: "🚪",
    examples: [
      { en: "Meet me in the arrival hall.", fa: "در سالن ورود منتظرم باش." },
      { en: "The arrival hall was crowded.", fa: "سالن ورود شلوغ بود." }
    ]
  },
  {
    word: "lost luggage",
    meaning: "بار گم‌شده",
    en: "I reported my lost luggage.",
    fa: "بار گم‌شده‌ام را گزارش دادم.",
    icon: "🧳",
    examples: [
      { en: "I reported my lost luggage.", fa: "بار گم‌شده‌ام را گزارش دادم." },
      { en: "Lost luggage was delivered the next day.", fa: "بار گم‌شده روز بعد تحویل شد." }
    ]
  },
  {
    word: "baggage tag",
    meaning: "برچسب بار",
    en: "Keep your baggage tag safe.",
    fa: "برچسب بارت را جایی امن نگه دار.",
    icon: "🏷️",
    examples: [
      { en: "Keep your baggage tag safe.", fa: "برچسب بارت را جایی امن نگه دار." },
      { en: "The baggage tag number is on your ticket.", fa: "شماره برچسب بار روی بلیت است." }
    ]
  },
  {
    word: "claim check",
    meaning: "رسید دریافت بار",
    en: "Show your claim check at the counter.",
    fa: "رسید دریافت بار را در باجه نشان بده.",
    icon: "🧾",
    examples: [
      { en: "Show your claim check at the counter.", fa: "رسید دریافت بار را در باجه نشان بده." },
      { en: "I can't find my claim check.", fa: "رسید دریافت بارم را پیدا نمی‌کنم." }
    ]
  },
  {
    word: "travel adapter",
    meaning: "مبدل برق سفر",
    en: "I forgot my travel adapter.",
    fa: "مبدل برق سفرم را فراموش کردم.",
    icon: "🔌",
    examples: [
      { en: "I forgot my travel adapter.", fa: "مبدل برق سفرم را فراموش کردم." },
      { en: "This travel adapter works in Europe.", fa: "این مبدل برق برای اروپا کار می‌کند." }
    ]
  },
  {
    word: "power outlet type",
    meaning: "نوع پریز برق",
    en: "Check the power outlet type before you go.",
    fa: "قبل از رفتن نوع پریز برق را چک کن.",
    icon: "🔌",
    examples: [
      { en: "Check the power outlet type before you go.", fa: "قبل از رفتن نوع پریز برق را چک کن." },
      { en: "The power outlet type is different here.", fa: "نوع پریز برق اینجا فرق دارد." }
    ]
  },
  {
    word: "voltage",
    meaning: "ولتاژ برق",
    en: "Check the voltage of your devices.",
    fa: "ولتاژ وسایلت را چک کن.",
    icon: "⚡",
    examples: [
      { en: "Check the voltage of your devices.", fa: "ولتاژ وسایلت را چک کن." },
      { en: "The voltage here is 220.", fa: "ولتاژ اینجا ۲۲۰ است." }
    ]
  }
);

CATEGORIES.a2travel.words.push(
  {
    word: "SIM card",
    meaning: "سیم‌کارت",
    en: "I bought a local SIM card.",
    fa: "یک سیم‌کارت محلی خریدم.",
    icon: "📲",
    examples: [
      { en: "I bought a local SIM card.", fa: "یک سیم‌کارت محلی خریدم." },
      { en: "The airport sells tourist SIM cards.", fa: "فرودگاه سیم‌کارت توریستی می‌فروشد." }
    ]
  },
  {
    word: "roaming",
    meaning: "رومینگ",
    en: "Turn off roaming to save money.",
    fa: "برای صرفه‌جویی رومینگ را خاموش کن.",
    icon: "📡",
    examples: [
      { en: "Turn off roaming to save money.", fa: "برای صرفه‌جویی رومینگ را خاموش کن." },
      { en: "Roaming charges can be high.", fa: "هزینه رومینگ ممکن است بالا باشد." }
    ]
  },
  {
    word: "offline map",
    meaning: "نقشه آفلاین",
    en: "Download an offline map before the trip.",
    fa: "قبل از سفر یک نقشه آفلاین دانلود کن.",
    icon: "🗺️",
    examples: [
      { en: "Download an offline map before the trip.", fa: "قبل از سفر یک نقشه آفلاین دانلود کن." },
      { en: "Offline maps help without internet.", fa: "نقشه آفلاین بدون اینترنت کمک می‌کند." }
    ]
  },
  {
    word: "navigation app",
    meaning: "اپ مسیریابی",
    en: "The navigation app saved us time.",
    fa: "اپ مسیریابی در وقتمان صرفه‌جویی کرد.",
    icon: "🧭",
    examples: [
      { en: "The navigation app saved us time.", fa: "اپ مسیریابی در وقتمان صرفه‌جویی کرد." },
      { en: "I follow the navigation app carefully.", fa: "با دقت اپ مسیریابی را دنبال می‌کنم." }
    ]
  },
  {
    word: "walking tour",
    meaning: "تور پیاده",
    en: "We joined a free walking tour.",
    fa: "به یک تور پیاده رایگان پیوستیم.",
    icon: "🚶",
    examples: [
      { en: "We joined a free walking tour.", fa: "به یک تور پیاده رایگان پیوستیم." },
      { en: "The walking tour starts at ten.", fa: "تور پیاده ساعت ده شروع می‌شود." }
    ]
  },
  {
    word: "city pass",
    meaning: "کارت توریستی شهر",
    en: "A city pass includes many museums.",
    fa: "کارت توریستی شهر چند موزه را شامل می‌شود.",
    icon: "🎫",
    examples: [
      { en: "A city pass includes many museums.", fa: "کارت توریستی شهر چند موزه را شامل می‌شود." },
      { en: "Is the city pass worth it?", fa: "آیا کارت توریستی شهر می‌ارزد؟" }
    ]
  },
  {
    word: "opening hours",
    meaning: "ساعات کاری / بازدید",
    en: "Check the opening hours online.",
    fa: "ساعات بازدید را آنلاین چک کن.",
    icon: "🕒",
    examples: [
      { en: "Check the opening hours online.", fa: "ساعات بازدید را آنلاین چک کن." },
      { en: "Opening hours are shorter on Sundays.", fa: "یکشنبه‌ها ساعات بازدید کوتاه‌تر است." }
    ]
  },
  {
    word: "closing time",
    meaning: "ساعت تعطیلی",
    en: "Closing time is 6 p.m.",
    fa: "ساعت تعطیلی ۶ عصر است.",
    icon: "🕕",
    examples: [
      { en: "Closing time is 6 p.m.", fa: "ساعت تعطیلی ۶ عصر است." },
      { en: "We arrived near closing time.", fa: "نزدیک ساعت تعطیلی رسیدیم." }
    ]
  },
  {
    word: "ticket office",
    meaning: "باجه بلیت",
    en: "The ticket office opens at nine.",
    fa: "باجه بلیت ساعت نه باز می‌شود.",
    icon: "🎟️",
    examples: [
      { en: "The ticket office opens at nine.", fa: "باجه بلیت ساعت نه باز می‌شود." },
      { en: "Buy tickets at the ticket office.", fa: "بلیت را از باجه بلیت بخر." }
    ]
  },
  {
    word: "skip-the-line ticket",
    meaning: "بلیت بدون صف",
    en: "A skip-the-line ticket saves time.",
    fa: "بلیت بدون صف وقت را ذخیره می‌کند.",
    icon: "⚡",
    examples: [
      { en: "A skip-the-line ticket saves time.", fa: "بلیت بدون صف وقت را ذخیره می‌کند." },
      { en: "We bought skip-the-line tickets online.", fa: "بلیت‌های بدون صف را آنلاین خریدیم." }
    ]
  },
  {
    word: "audio guide",
    meaning: "راهنمای صوتی",
    en: "Rent an audio guide at the entrance.",
    fa: "دم در یک راهنمای صوتی اجاره کن.",
    icon: "🎧",
    examples: [
      { en: "Rent an audio guide at the entrance.", fa: "دم در یک راهنمای صوتی اجاره کن." },
      { en: "The audio guide is available in English.", fa: "راهنمای صوتی به انگلیسی موجود است." }
    ]
  }
);

CATEGORIES.a2travel.words.push(
  {
    word: "souvenir shop",
    meaning: "فروشگاه سوغاتی",
    en: "The souvenir shop is near the exit.",
    fa: "فروشگاه سوغاتی نزدیک خروجی است.",
    icon: "🎁",
    examples: [
      { en: "The souvenir shop is near the exit.", fa: "فروشگاه سوغاتی نزدیک خروجی است." },
      { en: "I bought magnets at the souvenir shop.", fa: "از فروشگاه سوغاتی مگنت خریدم." }
    ]
  },
  {
    word: "local market",
    meaning: "بازار محلی",
    en: "Try fruit at the local market.",
    fa: "در بازار محلی میوه امتحان کن.",
    icon: "🏪",
    examples: [
      { en: "Try fruit at the local market.", fa: "در بازار محلی میوه امتحان کن." },
      { en: "The local market is busy in the morning.", fa: "بازار محلی صبح‌ها شلوغ است." }
    ]
  },
  {
    word: "street food",
    meaning: "غذای خیابانی",
    en: "Street food here is delicious.",
    fa: "غذای خیابانی اینجا خوشمزه است.",
    icon: "🌮",
    examples: [
      { en: "Street food here is delicious.", fa: "غذای خیابانی اینجا خوشمزه است." },
      { en: "Be careful with street food if your stomach is sensitive.", fa: "اگر معده‌ات حساس است با غذای خیابانی مراقب باش." }
    ]
  },
  {
    word: "food stall",
    meaning: "دکه غذا",
    en: "That food stall sells noodles.",
    fa: "آن دکه غذا نودل می‌فروشد.",
    icon: "🍜",
    examples: [
      { en: "That food stall sells noodles.", fa: "آن دکه غذا نودل می‌فروشد." },
      { en: "We waited at the food stall for ten minutes.", fa: "ده دقیقه دم دکه غذا منتظر ماندیم." }
    ]
  },
  {
    word: "tipping",
    meaning: "انعام دادن",
    en: "Tipping is common in this country.",
    fa: "در این کشور انعام دادن رایج است.",
    icon: "💵",
    examples: [
      { en: "Tipping is common in this country.", fa: "در این کشور انعام دادن رایج است." },
      { en: "Is tipping expected at restaurants?", fa: "آیا در رستوران‌ها انعام انتظار می‌رود؟" }
    ]
  },
  {
    word: "service charge",
    meaning: "حق سرویس",
    en: "A service charge is already included.",
    fa: "حق سرویس از قبل لحاظ شده است.",
    icon: "🧾",
    examples: [
      { en: "A service charge is already included.", fa: "حق سرویس از قبل لحاظ شده است." },
      { en: "Check if the bill has a service charge.", fa: "ببین صورتحساب حق سرویس دارد یا نه." }
    ]
  },
  {
    word: "exchange rate",
    meaning: "نرخ ارز",
    en: "What's the exchange rate today?",
    fa: "نرخ ارز امروز چند است؟",
    icon: "💱",
    examples: [
      { en: "What's the exchange rate today?", fa: "نرخ ارز امروز چند است؟" },
      { en: "The exchange rate is better at the bank.", fa: "نرخ ارز در بانک بهتر است." }
    ]
  },
  {
    word: "currency exchange office",
    meaning: "صرافی",
    en: "The currency exchange office is closed.",
    fa: "صرافی بسته است.",
    icon: "💱",
    examples: [
      { en: "The currency exchange office is closed.", fa: "صرافی بسته است." },
      { en: "I changed money at a currency exchange office.", fa: "در یک صرافی پول رد و بدل کردم." }
    ]
  },
  {
    word: "travel insurance claim",
    meaning: "ادعا / درخواست خسارت بیمه سفر",
    en: "I filed a travel insurance claim.",
    fa: "یک درخواست خسارت بیمه سفر ثبت کردم.",
    icon: "📑",
    examples: [
      { en: "I filed a travel insurance claim.", fa: "یک درخواست خسارت بیمه سفر ثبت کردم." },
      { en: "Keep receipts for a travel insurance claim.", fa: "برای درخواست خسارت بیمه سفر رسیدها را نگه دار." }
    ]
  },
  {
    word: "emergency number",
    meaning: "شماره اضطراری",
    en: "Save the local emergency number.",
    fa: "شماره اضطراری محلی را ذخیره کن.",
    icon: "🆘",
    examples: [
      { en: "Save the local emergency number.", fa: "شماره اضطراری محلی را ذخیره کن." },
      { en: "112 is an emergency number in many places.", fa: "در خیلی جاها ۱۱۲ شماره اضطراری است." }
    ]
  }
);

// === A2 expansion patch 10: +10 food, +10 work ===
CATEGORIES.a2food.words.push(
  {
    word: "bakery",
    meaning: "نانوایی، شیرینی‌فروشی",
    en: "The bakery sells fresh bread.",
    fa: "نانوایی نان تازه می‌فروشد.",
    icon: "🥖",
    examples: [
      { en: "The bakery sells fresh bread.", fa: "نانوایی نان تازه می‌فروشد." },
      { en: "I bought cake from the bakery.", fa: "از شیرینی‌فروشی کیک خریدم." }
    ]
  },
  {
    word: "butcher",
    meaning: "قصابی، قصاب",
    en: "The butcher cut the meat.",
    fa: "قصاب گوشت را برید.",
    icon: "🥩",
    examples: [
      { en: "The butcher cut the meat.", fa: "قصاب گوشت را برید." },
      { en: "We bought chicken from the butcher.", fa: "از قصابی مرغ خریدیم." }
    ]
  },
  {
    word: "seafood",
    meaning: "غذای دریایی",
    en: "This restaurant is famous for seafood.",
    fa: "این رستوران به غذای دریایی معروف است.",
    icon: "🦐",
    examples: [
      { en: "This restaurant is famous for seafood.", fa: "این رستوران به غذای دریایی معروف است." },
      { en: "I like fresh seafood.", fa: "غذای دریایی تازه را دوست دارم." }
    ]
  },
  {
    word: "grilled chicken",
    meaning: "مرغ کبابی",
    en: "I ordered grilled chicken with rice.",
    fa: "مرغ کبابی با برنج سفارش دادم.",
    icon: "🍗",
    examples: [
      { en: "I ordered grilled chicken with rice.", fa: "مرغ کبابی با برنج سفارش دادم." },
      { en: "The grilled chicken smells good.", fa: "مرغ کبابی بوی خوبی دارد." }
    ]
  },
  {
    word: "fried rice",
    meaning: "برنج سرخ‌شده",
    en: "Fried rice is easy to make.",
    fa: "درست کردن برنج سرخ‌شده آسان است.",
    icon: "🍚",
    examples: [
      { en: "Fried rice is easy to make.", fa: "درست کردن برنج سرخ‌شده آسان است." },
      { en: "We had fried rice for dinner.", fa: "برای شام برنج سرخ‌شده خوردیم." }
    ]
  },
  {
    word: "side dish",
    meaning: "غذای جانبی",
    en: "Salad is a good side dish.",
    fa: "سالاد یک غذای جانبی خوب است.",
    icon: "🥗",
    examples: [
      { en: "Salad is a good side dish.", fa: "سالاد یک غذای جانبی خوب است." },
      { en: "We ordered two side dishes.", fa: "دو غذای جانبی سفارش دادیم." }
    ]
  },
  {
    word: "table for two",
    meaning: "میز دو نفره",
    en: "We need a table for two.",
    fa: "یک میز دو نفره لازم داریم.",
    icon: "🍽️",
    examples: [
      { en: "We need a table for two.", fa: "یک میز دو نفره لازم داریم." },
      { en: "A table for two, please.", fa: "یک میز دو نفره لطفاً." }
    ]
  },
  {
    word: "reservation time",
    meaning: "زمان رزرو",
    en: "Our reservation time is eight.",
    fa: "زمان رزرو ما ساعت هشت است.",
    icon: "🕗",
    examples: [
      { en: "Our reservation time is eight.", fa: "زمان رزرو ما ساعت هشت است." },
      { en: "Please check the reservation time.", fa: "لطفاً زمان رزرو را بررسی کنید." }
    ]
  },
  {
    word: "food delivery",
    meaning: "تحویل غذا",
    en: "Food delivery is fast in this area.",
    fa: "تحویل غذا در این منطقه سریع است.",
    icon: "🛵",
    examples: [
      { en: "Food delivery is fast in this area.", fa: "تحویل غذا در این منطقه سریع است." },
      { en: "We used a food delivery app.", fa: "از اپ تحویل غذا استفاده کردیم." }
    ]
  },
  {
    word: "food court",
    meaning: "فودکورت",
    en: "The mall has a large food court.",
    fa: "مرکز خرید یک فودکورت بزرگ دارد.",
    icon: "🏬",
    examples: [
      { en: "The mall has a large food court.", fa: "مرکز خرید یک فودکورت بزرگ دارد." },
      { en: "Let's eat at the food court.", fa: "بیا در فودکورت غذا بخوریم." }
    ]
  }
);

CATEGORIES.a2work.words.push(
  {
    word: "team leader",
    meaning: "سرگروه، رهبر تیم",
    en: "The team leader explained the plan.",
    fa: "رهبر تیم برنامه را توضیح داد.",
    icon: "🧑‍💼",
    examples: [
      { en: "The team leader explained the plan.", fa: "رهبر تیم برنامه را توضیح داد." },
      { en: "Ask the team leader for help.", fa: "از رهبر تیم کمک بخواه." }
    ]
  },
  {
    word: "work email",
    meaning: "ایمیل کاری",
    en: "I checked my work email this morning.",
    fa: "امروز صبح ایمیل کاری‌ام را چک کردم.",
    icon: "📧",
    examples: [
      { en: "I checked my work email this morning.", fa: "امروز صبح ایمیل کاری‌ام را چک کردم." },
      { en: "Send it to my work email.", fa: "آن را به ایمیل کاری من بفرست." }
    ]
  },
  {
    word: "online meeting",
    meaning: "جلسه آنلاین",
    en: "We have an online meeting at three.",
    fa: "ساعت سه یک جلسه آنلاین داریم.",
    icon: "💻",
    examples: [
      { en: "We have an online meeting at three.", fa: "ساعت سه یک جلسه آنلاین داریم." },
      { en: "The online meeting was short.", fa: "جلسه آنلاین کوتاه بود." }
    ]
  },
  {
    word: "work schedule",
    meaning: "برنامه کاری",
    en: "My work schedule changes every week.",
    fa: "برنامه کاری من هر هفته تغییر می‌کند.",
    icon: "🗓️",
    examples: [
      { en: "My work schedule changes every week.", fa: "برنامه کاری من هر هفته تغییر می‌کند." },
      { en: "Check your work schedule.", fa: "برنامه کاری‌ات را چک کن." }
    ]
  },
  {
    word: "job offer",
    meaning: "پیشنهاد کاری",
    en: "She received a job offer.",
    fa: "او یک پیشنهاد کاری دریافت کرد.",
    icon: "💼",
    examples: [
      { en: "She received a job offer.", fa: "او یک پیشنهاد کاری دریافت کرد." },
      { en: "The job offer is from a big company.", fa: "پیشنهاد کاری از یک شرکت بزرگ است." }
    ]
  },
  {
    word: "work permit",
    meaning: "مجوز کار",
    en: "He needs a work permit.",
    fa: "او به مجوز کار نیاز دارد.",
    icon: "🪪",
    examples: [
      { en: "He needs a work permit.", fa: "او به مجوز کار نیاز دارد." },
      { en: "The work permit is valid for one year.", fa: "مجوز کار برای یک سال معتبر است." }
    ]
  },
  {
    word: "annual leave",
    meaning: "مرخصی سالانه",
    en: "I used my annual leave in July.",
    fa: "مرخصی سالانه‌ام را در جولای استفاده کردم.",
    icon: "🏖️",
    examples: [
      { en: "I used my annual leave in July.", fa: "مرخصی سالانه‌ام را در جولای استفاده کردم." },
      { en: "Annual leave must be approved.", fa: "مرخصی سالانه باید تأیید شود." }
    ]
  },
  {
    word: "sick leave",
    meaning: "مرخصی استعلاجی",
    en: "She took sick leave yesterday.",
    fa: "او دیروز مرخصی استعلاجی گرفت.",
    icon: "🤒",
    examples: [
      { en: "She took sick leave yesterday.", fa: "او دیروز مرخصی استعلاجی گرفت." },
      { en: "I need sick leave for two days.", fa: "برای دو روز مرخصی استعلاجی لازم دارم." }
    ]
  },
  {
    word: "workplace rules",
    meaning: "قوانین محل کار",
    en: "Read the workplace rules carefully.",
    fa: "قوانین محل کار را با دقت بخوان.",
    icon: "📜",
    examples: [
      { en: "Read the workplace rules carefully.", fa: "قوانین محل کار را با دقت بخوان." },
      { en: "Workplace rules keep everyone safe.", fa: "قوانین محل کار همه را ایمن نگه می‌دارد." }
    ]
  },
  {
    word: "company policy",
    meaning: "سیاست شرکت",
    en: "This is against company policy.",
    fa: "این برخلاف سیاست شرکت است.",
    icon: "🏢",
    examples: [
      { en: "This is against company policy.", fa: "این برخلاف سیاست شرکت است." },
      { en: "Company policy is written in the handbook.", fa: "سیاست شرکت در دفترچه راهنما نوشته شده است." }
    ]
  }
);
function updateA2Counts() {
  var total = 0;
  for (var k in CATEGORIES) { if (k.indexOf("a2") === 0) total += CATEGORIES[k].words.length; }
  var fa = toPersianDigits(total);
  var all = document.querySelectorAll("body *");
  for (var i = 0; i < all.length; i++) {
    var el = all[i];
    if (el.textContent.indexOf("لغت جدید") < 0) continue;
    var inner = false;
    for (var c = 0; c < el.children.length; c++) {
      if (el.children[c].textContent.indexOf("لغت جدید") > -1) { inner = true; break; }
    }
    if (inner) continue;
    el.textContent = el.textContent.replace(/[۰-۹]+/, fa);
  }
}
updateA2Counts();