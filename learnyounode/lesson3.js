/*  file://C:\Users\serge\AppData\Roaming\npm\node_modules\learnyounode\node_a
  pidoc\fs.html

  Объекты типа Buffer используются Node для эффективного представления
  массивов данных, будь это ascii, бинарный или любой другой формат. Эти
  объекты могут быть конвертированы в строки путем вызовом метода toString()
  над ними, например var str = buf.toString().

  Документацию для Buffer вы сможете найти набрав в браузере:
  file://C:\Users\serge\AppData\Roaming\npm\node_modules\learnyounode\node_a
  pidoc\buffer.html

  Если Вы ищите простой способ посчитать строк в строке, то Вы можете
  использовать .split() с разделителем \n для разбиения этой строки на
  массив подстрок. Примите во внимание то, что тестовый файл не содержит
  символ \n в конце последней строки, таки образом у вас получится массив
  который содержит на один элемент больше чем число строк в файле.*/

const fs = require('fs');

const buf = fs.readFile(process.argv[2], function(err, buf) {
  if (err) {
    console.log(err);
  }
  var str = buf.toString()
  console.log(str.split('\n').length - 1);
});