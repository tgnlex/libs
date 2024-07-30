section  .data 
          num1   dd  30000
				  num2   dd  40000
				  mult   dq  0 
section  .text 
				  global _start 

_start:   
				  mov eaz, dword[num1]
				  mul dword[num2]
				  mov dword[mult+0], eax
				  mov dword[mult+4], edx

				  mov rax, 60 
				  mov rdi, 0
				  syscall r

				  

