n = int(input("Dame un número: "))
try:
    print( 100 / n )
except ZeroDivisionError:
    print("no se puede dividir entre 0")