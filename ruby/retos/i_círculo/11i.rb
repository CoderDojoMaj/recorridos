class Circulo
    def initialize(radio)
        @radio = radio
    end

    def area
        return Math::PI * @radio ** 2
    end

    def perimetro
        return 2 * Math::PI * @radio
    end
end


print "Radio: "
r = gets.chomp.to_f

c = Circulo.new(r)
puts "Área: #{c.area}"
puts "Perímetro: #{c.perimetro}"
