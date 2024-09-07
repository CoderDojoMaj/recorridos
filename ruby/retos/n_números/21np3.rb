class Entero
    def initialize(n)
        @n = n
    end

    def suma_divisores
        suma = 0
        (1 .. @n-1).each do |i|
            if @n % i == 0
                suma = suma + i
            end
        end
        return suma
    end
end


n1 = Entero.new(8)
puts "Divisores de 8: #{n1.suma_divisores}"

n2 = Entero.new(28)
puts "Divisores de 28: #{n2.suma_divisores}"
