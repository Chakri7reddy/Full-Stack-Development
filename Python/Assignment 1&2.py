# Task 1 to find area of circle using radius

r = float(input ("Input the radius of the circle : "))
pi=3.14;
calculateArea = str(pi * r**2);
print("The area of the circle with radius " + str(r) + " is: " + calculateArea)

# Task 2 to print the extension

filename = input("Input the Filename: ")
f_extns = filename.split(".")
print ("The extension of the file is : " + repr(f_extns[-1]))
