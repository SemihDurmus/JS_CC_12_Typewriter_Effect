import sys, time

msg = "Her iş görüşmesinin sonunda mutlaka 'Sorunuz var mı' derler adaya. 'I ıh' diyenleri eler, kaliteli sorular soranlarla devam ederler. Soru sormayan ya merak etmiyordur, ya beynen yorulmuştur ve görüşme bitsin istiyordur, ya işe girmekten caymıştır ya da yeni mezundur, usûl bilmez.\nMülâkatta mutlaka soru sorun. Merak ettiğiniz en mühim birkaç şeyi sorun. Hiç birşey bulamıyorsanız 'Siz kaç senedir bu firmadasınız' deyin. Uzun zamandır ordaysa 'Desenize burası tam çalışılacak yer', yeniyse 'Desenize ben ilk sizinle arkadaş olacağım' gibi tatlı laflar söyleyin.\nHangi mülâkata girdiysem bu banko sorularımı sorarım.\n- Bu pozisyon kime raporlar, hiyerarşideki yeri nedir, firma içinde sürekli temasta olacağı pozisyon kimlerdir, genel müdürle aramda kaç basamak var, terfi sistemi nasıldır?\n- İşe alınacak kişi ben olduğumu farz edelim, ne zaman başlıyorum?\n- Yıllık pazarlama bütçem nedir? İşe kaç kişi alacağım? Ne kadarlık bütçe onaylama yetkim var?\n- Benle ilgili aklınızda en ufak şüphe kaldı mı? Kaldıysa müsaadenizle gidermek isterim.\n- Şu an size 'Evet, bu o' dedirtemediysem, diğer adayı işe almanızı rica edebilir miyim? Ben illâ ki iş bulurum ama o arkadaş böyle iş bulamaz bir daha. 'Bu o' dedirtmeden işe girmek bana göre değil. Sıradan algılanırsam mutsuz olurum mutsuz ederim."

speed = 0.01

def typewriter(msg, speed):
    for char in msg:
        sys.stdout.write(char)
        sys.stdout.flush()
        if char != "\n":
            time.sleep(speed)    
        else:
            time.sleep(0.5)    

typewriter(msg, speed)