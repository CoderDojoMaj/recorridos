22est-media. Media
La media de un conjunto de valores es el resultado de sumarlos y dividir dicha suma entre el número de valores (https://edu.gcfglobal.org/es/estadistica-basica/media-mediana-y-moda/1/).
Implementa la clase ListaEnteros que se construya recibiendo una lista de enteros y añade un método que calcule la media.


lista = ListaEnteros.new( [8,14,9,12,14,12,15,11,12,8,10,14,12,9,12] )
puts lista.media.round(2)

puts ListaEnteros.new([1]).media
puts ListaEnteros.new([2,2,2,4,5]).media
$ ruby 22est-media.rb
11.47
1.0
3.0

