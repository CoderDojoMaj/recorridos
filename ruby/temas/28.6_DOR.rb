# default with optional

def sponge(a=7,*o,b)
    puts "Valores: #{a}, #{o}, #{b}"
end

sponge(1,2)
sponge(1,2,3,4,5)
sponge(2)
