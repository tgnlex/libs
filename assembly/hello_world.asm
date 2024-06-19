section .text
	global _start
_start:
	mov  edx,len  ;msg length
	mov  ecx,msg  ;msg to write
	mov  ebx,1  ;system call numnber 
	mov  eax,4  ;call kernel

	mov  eax,1	;system call number
	int  0x80	;call kernel

section .data 
msg db 'Hello, world!', 0xa
len equ $ - msg
