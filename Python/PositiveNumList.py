#To print positive numbers in List  
def print_positive_numbers(lst):
    positive_numbers = [num for num in lst if num > 0]
    if positive_numbers:
        print("Input:", lst)
        print("Output:", positive_numbers)
    else:
        print("There are no positive numbers in the input list.")


list1 = [12, -7, 5, 64, -14]
print_positive_numbers(list1)

list2 = [12, 14, -95, 3]
print_positive_numbers(list2)
