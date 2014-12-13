Wordlist = ['Асинхронность', 'Аномалия', 'Автомат', 'Ракета', 'Биология', 'Белок', 'Помощь', 'Лимонад', 'Дюшес', 'Язык', 'Таблетка',
            'Бильярд', 'Академия', 'Нация', 'Фашизм', 'Сатана', 'Сентябрь', 'Библия', 'Ислам', 'Принять', 'Декада', 'Ямб', 'Хорей',                     
            'Литература', 'Фильм', 'Грамота', 'Диплом', 'Телефон', 'Яблоко', 'Спасение', 'Картина', 'Валерьянка', 'Контакт', 'Альбом',                   
            'Игра', 'Эритроцит', 'Лейкоцит', 'Тромбоцит', 'Рак', 'Мозг', 'Желудок', 'Код', 'Кислота', 'Азот', 'Химия', 'Карбон', 'Воздух',               
            'Астрономия', 'Звезда', 'Земля', 'Сатурн', 'Нептун', 'Солнце', 'Марс', 'Венера', 'Луна', 'Меркурий', 'Андромеда', 'Вселенная',               
            'Туманность', 'НЛО', 'Город', 'Огород', 'Украина', 'Россия', 'Цыган', 'Ниггер', 'Телефон', 'Ручка', 'Тучка', 'Кучка', 'Случка',             
            'Время', 'Идет', 'Мы', 'Смерть', 'Нести', 'Дом', 'Комод', 'Стул', 'Стол', 'Магнитофон', 'Антресоль', 'Гардероб', 'Телевизор',               
            'Часы', 'Кукушка', 'Сигареты', 'Ночь', 'Бокал', 'Вино', 'Столетие', 'Девять', 'Этаж', 'Крыша', 'Любимый', 'Кровать', 'Шишка',               
            'Гематома', 'Работа', 'Раб', 'Владыка', 'Танк', 'Бита', 'Сердце', 'Человек', 'Зигзаг', 'Курица', 'Мартышка', 'Любовь',                       
            'Морковь', 'Зелень', 'Слон', 'Корова', 'Выигрыш', 'Пари', 'Булка', 'Кофе', 'Пирожок', 'Круасан', 'Торт', 'Интернет'];

		var select;
		var scores = 0;

		document.onkeyup = function(e) {

		    e = e || window.event;

		    if (e.keyCode === 13) {
		        check();
		    }
		    return false;
		};

		function Anagram() {

		    var arrangements = [];
		    var randomNumber = 0;
		    var temp = 0;
		    var anagramma = '';
		    select = Math.random() * Wordlist.length>>0;
		    for (var i = 0; i < Wordlist[select].length; i++) {

		        do {
		            randomNumber = (Math.random() * Wordlist[select].length)>>0;
		        } while (randomNumber == i);

		        if (arrangements[i] == undefined) {
		            arrangements[i] = i;
		        }

		        if (arrangements[randomNumber] == undefined) {
		            arrangements[randomNumber] = randomNumber;
		        }

		        temp = arrangements[i];
		        arrangements[i] = arrangements[randomNumber];
		        arrangements[randomNumber] = temp;

		    }

		    for (var i = 0; i < Wordlist[select].length; i++) {

		        anagramma += Wordlist[select][arrangements[i]];

		    };

		    document.getElementById("tvWord").innerText = anagramma.toUpperCase();

		}

		function check() {

		    if (Wordlist[select].toLowerCase() === document.getElementById("input").value.toLowerCase()) {
		        alert("Совершенно верно! +1");
		        document.getElementById("input").value = "";
		        scores++;
		        document.getElementById("tvScores").innerText = "Scores: " + scores;
		        Anagram();
		    } else {
		        alert("Ой,вы ошиблись.. \n Правильно слово: " + Wordlist[select]);
		        document.getElementById("input").value = "";
		        scores--;
		        document.getElementById("tvScores").innerText = "Scores: " + scores;
		        Anagram();
		    }
		}
