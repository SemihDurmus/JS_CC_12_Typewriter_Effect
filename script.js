const msg = `Her iş görüşmesinin sonunda mutlaka "Sorunuz var mı" derler adaya. "I ıh" diyenleri eler, kaliteli sorular soranlarla devam ederler. Soru sormayan ya merak etmiyordur, ya beynen yorulmuştur ve görüşme bitsin istiyordur, ya işe girmekten caymıştır ya da yeni mezundur, usûl bilmez.

Mülâkatta mutlaka soru sorun. Merak ettiğiniz en mühim birkaç şeyi sorun. Hiç birşey bulamıyorsanız "Siz kaç senedir bu firmadasınız" deyin. Uzun zamandır ordaysa "Desenize burası tam çalışılacak yer", yeniyse "Desenize ben ilk sizinle arkadaş olacağım" gibi tatlı laflar söyleyin.

Hangi mülâkata girdiysem bu banko sorularımı sorarım.

- Bu pozisyon kime raporlar, hiyerarşideki yeri nedir, firma içinde sürekli temasta olacağı pozisyon kimlerdir, genel müdürle aramda kaç basamak var, terfi sistemi nasıldır?

- İşe alınacak kişi ben olduğumu farz edelim, ne zaman başlıyorum?

- Yıllık pazarlama bütçem nedir? İşe kaç kişi alacağım? Ne kadarlık bütçe onaylama yetkim var?

- Benle ilgili aklınızda en ufak şüphe kaldı mı? Kaldıysa müsaadenizle gidermek isterim.

- Şu an size "Evet, bu o" dedirtemediysem, diğer adayı işe almanızı rica edebilir miyim? Ben illâ ki iş bulurum ama o arkadaş böyle iş bulamaz bir daha. "Bu o" dedirtmeden işe girmek bana göre değil. Sıradan algılanırsam mutsuz olurum mutsuz ederim.`;

const speed_inp = document.querySelector("#inp_speed");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

let i;

btn.addEventListener("click", () => {
  output.innerHTML = "";
  speed = speed_inp.value;
  i = 0;
  typeWriter();
});

function typeWriter() {
  if (i < msg.length) {
    output.innerHTML += msg.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
