/* Реализуйте программу, которая выводит список отфильтрованных по расширению
  файлов в заданой директории. Имя директории ('/path/to/dir/') будет
  передано в качестве первого аргумента к вашей программе, а расширение
  файла для фильтрации во втором аргументе.

  Например, если Вы получили 'txt' в качестве второго аргумента, то Вы
  должны вывести только те файлы, которые оканчиваются на .txt в заданой
  директории. Помните о том, что второй аргумент не будет иметь '.' в
  начале.

  Список файлов должен быть выведен в консоль построчно (каждый файл на
  новой строке). Так же необходимо использовать асинхронный I/O. */

var fs = require('fs'),
  path = require('path'),
   dir = process.argv[2],
   ext = process.argv[3];

function targetExt (ext, subject) {
   return path.extname(subject).slice(1) === ext
  }
  
  fs.readdir(dir, function (err, files) {
    if(err) {
      console.error('Error: ', err)
    } else {
      var filteredArr = targetExt.bind(null, ext);
      console.log(files.filter(filteredArr).join('\n'));
    }
  })