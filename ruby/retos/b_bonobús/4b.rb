class Bonobus
    def initialize
        @viajes = 10
    end

    def muestraViajes
        puts @viajes
    end
end

b = Bonobus.new
b.muestraViajes
