import PyPDF2

file = open('file.pdf', 'rb')

pdf = PyPDF2.PdfFileReader(file)

pageObj = pdf.getPage(0)

texts = pageObj.extractText()

print(texts)