import PyPDF2

pdfFileObj = open('file.pdf', 'rb')

pdfReader = PyPDF2.PdfFileReader(pdfFileObj)

pageObj = pdfReader.getPage(0)

texts = pageObj.extractText()

print(texts)