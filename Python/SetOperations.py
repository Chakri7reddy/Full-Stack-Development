# Different Set Operations.
#Defining the sets
E = {0, 2, 4, 6, 8}
N = {1, 2, 3, 4, 5}


union_result = E.union(N)
print(f"Union of E and N is {union_result}")


intersection_result = E.intersection(N)
print(f"Intersection of E and N is {intersection_result}")


difference_result = E.difference(N)
print(f"Difference of E and N is {difference_result}")


symmetric_difference_result = E.symmetric_difference(N)
print(f"Symmetric difference of E and N is {symmetric_difference_result}")
