import csv
def write_into_csv(info_list):
       with open('student_info.csv','a',newline='') as csv_file:
         writer = csv.writer(csv_file)
        
         if csv_file.tell()==0:
           writer.writerow(["Name","Age","Contact_Number","E-mail"])
         writer.writerow(info_list)

if __name__ == '__main__':      
  con=True
  stu_num=1
  while(con):
    stu_info=input("Enter student information for student {} in the following format  (Name Age Contact_number E-mail Address) : ".format(stu_num))
    print("Entered information : "+stu_info)
    stu_info_list= stu_info.split()
    print("\nThe Entered Information is : \n Name : {} \n Cont.Num. : {} \n E-mail : {}\n Address : {} "
          .format( stu_info_list[0],stu_info_list[1],stu_info_list[2], stu_info_list[3]))
    check=input("Is the entered information correct ? (yes/no) :")
    if check=="yes":
      write_into_csv(stu_info_list)
    
      con_check = input("Enter (yes/no) if you want to enter information for another student :")
      if con_check=="yes":
        con =True
        stu_num=stu_num+1
      elif con_check=="no":
        con =False  
    elif check=="no":
        print("\nPlease re-enter data!!!")     
           