import qrcode
qrImg = qrcode.make("welcome to to CMT 3rd semester.")
qrImg.save("qr_img.jpg")