---
title: "Revit'te Family Oluşturma: Mekanik Ekipman Modelleme Rehberi"
description: "Revit'te özel mekanik ekipman family'leri (klima santrali, pompa, fan) oluşturma adımları ve parametrik aile tasarımı ipuçları."
date: 2026-04-26
tags: ["Revit MEP", "Family"]
category: "bim"
draft: false
---

Revit MEP ile çalışan herkesin er ya da geç karşılaştığı bir gerçek var: hazır kütüphanedeki family'ler, sahada kullanılan gerçek ekipmanların özelliklerini nadiren tam karşılıyor. Klima santrali, pompa, fan gibi mekanik ekipmanların üretici kataloglarındaki gerçek ölçüleri ve bağlantı noktaları farklılık gösterdiği için, projeye özel Revit'te family oluşturma neredeyse kaçınılmaz hale geliyor. Bu yazıda, deneyimlerimde en çok işe yarayan mekanik ekipman modelleme adımlarını ve parametrik aile tasarımı konusunda dikkat ettiğim noktaları paylaşacağım.

## Neden Hazır Family'ler Yetmiyor?

Revit'in standart kütüphanesi genel amaçlı family'ler sunuyor, ama her projede farklı üretici ve model seçilebiliyor. Bir klima santralinin gövde ölçüleri, filtre bölmesi uzunluğu, bağlantı flanş konumları üreticiden üreticiye değişiyor. Sahada gördüğüm kadarıyla, hazır bir family'yi "yaklaşık olarak uyar" diyerek kullanmak, ilerleyen aşamalarda ciddi koordinasyon hatalarına yol açıyor; özellikle bağlantı noktalarının (connector) yanlış konumlandığı durumlarda kanal ve boru güzergahları da yanlış hesaplanmış oluyor.

Bu yüzden özellikle kritik ekipmanlar (klima santralleri, pompa grupları, büyük fanlar) için projeye özel family oluşturmak, hem koordinasyon doğruluğu hem de metraj güvenilirliği açısından önemli. Bu ekipmanların model içindeki doğru konumlandırılması, [clash detection ile mekanik tesisatta çakışma tespiti](/blog/clash-detection-mekanik-tesisatta-cakisma-tespiti) sürecinin de sağlıklı çalışmasını sağlıyor.

## Family Oluşturmaya Başlamadan Önce

Family oluşturmaya geçmeden önce üretici kataloğundan veya teknik şartnameden şu bilgileri toplamam gerekiyor:

- Gövde ölçüleri (uzunluk, genişlik, yükseklik) ve varsa farklı kapasite seçeneklerine göre ölçü tablosu
- Bağlantı noktalarının (giriş/çıkış hava kanalı, su giriş/çıkış boruları, elektrik bağlantısı) konumu ve ölçüleri
- Ekipmanın ağırlığı, bakım için gereken servis alanı
- Performans parametreleri (debi, basınç, güç) — bunlar genelde metraj ve hesap raporlarında kullanılıyor

Bu bilgiler eksik toplandığında, family oluşturma sürecinin ortasında sürekli geri dönüp bilgi tamamlamak gerekiyor; bu da zaman kaybı yaratıyor. Bu yüzden önce veri toplama, sonra modelleme adımını izlemek daha verimli oluyor.

## Doğru Family Şablonunu Seçmek

Revit'te mekanik ekipman modellemesi için doğru şablon (template) seçimi kritik bir adım. Klima santrali ya da pompa gibi mekanik ekipmanlar için genelde "Mechanical Equipment" şablonu kullanılıyor; bu şablon, ekipmanın sistemler arasında doğru sınıflandırılmasını ve MEP bağlantılarının (connector) tanınmasını sağlıyor. Yanlış şablon seçimi (örneğin genel bir "Generic Model" şablonu kullanmak), family'nin sistem taraması, filtreleme ve programlarda doğru kategoride görünmesini engelliyor.

## Parametrik Aile Tasarımının Temel Adımları

Mekanik ekipman family'si oluştururken izlediğim adımlar şöyle:

1. **Referans düzlemler ve boyutlandırma:** Ekipmanın ana gövde ölçülerini referans düzlemler üzerinden tanımlıyorum; bu, farklı kapasite tiplerinde ölçülerin parametrik olarak değişebilmesini sağlıyor.
2. **Parametre tanımlama:** Uzunluk, genişlik, yükseklik gibi ölçüleri "type parameter" olarak tanımlayarak, aynı family içinde farklı ekipman tiplerinin (örneğin farklı kapasitelerdeki klima santralleri) tek bir dosyada yönetilmesini sağlıyorum.
3. **Bağlantı noktalarının (connector) yerleştirilmesi:** Hava kanalı, su borusu ve elektrik bağlantı noktalarını doğru konum ve boyutta yerleştirmek, family'nin en kritik adımı. Bir connector yanlış konumlandırılırsa, sistem bu ekipmana bağlanan kanal ya da boruyu doğru güzergahtan geçiremiyor.
4. **Görsel detay seviyesinin ayarlanması:** Family'nin farklı detay seviyelerinde (kaba/orta/ince) nasıl görüneceğini tanımlıyorum; bu, model performansını korumak açısından önemli çünkü her ekipmanın en ince detaya kadar modellenmesi gerekmiyor.
5. **Paylaşılan parametreler (shared parameters) ile veri zenginleştirme:** Metraj ve hesap raporlarında kullanılacak üretici, model numarası, kapasite gibi bilgileri shared parameter olarak ekliyorum; böylece bu veriler programlar (schedule) üzerinden kolayca listelenebiliyor.

## Model Şişmesinden Kaçınmak

Sık yapılan bir hata, family'yi gereğinden fazla geometrik detayla modellemek. Klima santralinin içindeki her filtre, her vida gerçekçi şekilde modellenirse, dosya boyutu şişiyor ve tüm proje modelinin performansı düşüyor. Benim yaklaşımım, koordinasyon ve çakışma tespiti için gerekli olan dış gövde geometrisini ve bağlantı noktalarını doğru modellemek, iç detayları ise gerekmedikçe basitleştirmek. Bu denge, hem model performansını koruyor hem de koordinasyon açısından yeterli doğruluğu sağlıyor.

## Family Kütüphanesi Oluşturmak

Tek seferlik bir family oluşturmak yerine, sık kullanılan ekipman tiplerini (klima santrali, pompa, fan, boyler gibi) bir kütüphane haline getirmek uzun vadede büyük zaman kazandırıyor. Şirket içinde standart bir family kütüphanesi oluşturulduğunda, her projede sıfırdan modelleme yapmak yerine mevcut family'ler üzerinde küçük parametre ayarlamalarıyla ihtiyaç karşılanabiliyor. Bu yaklaşım aynı zamanda projeler arası tutarlılığı da artırıyor.

## Family Testi ve Doğrulama

Bir family'yi tamamladıktan sonra doğrudan proje modeline dahil etmek yerine, önce ayrı bir test dosyasında denemekten yanayım. Bu testte kontrol ettiğim noktalar: farklı tip parametrelerinin (örneğin kapasite varyasyonlarının) geometriyi doğru şekilde değiştirip değiştirmediği, connector'ların sistem tanımlarken doğru kanal/boru tipini önerip önermediği ve family'nin farklı görünüm açılarında (plan, kesit, 3D) beklenen şekilde göründüğü. Sahada birkaç kez, bir tip parametresi değiştirildiğinde geometrinin beklenmedik şekilde bozulduğunu ya da connector'ın ekipmanla birlikte doğru yönde dönmediğini gördüm; bu tür hatalar, family proje moduna aktarıldıktan ve onlarca kez yerleştirildikten sonra fark edilirse düzeltmesi çok daha zahmetli oluyor.

Ayrıca family'nin dosya boyutunu ve açılma performansını da test etmekte fayda var. Özellikle karmaşık geometrili ekipmanlarda (örneğin çok sayıda bileşenden oluşan bir klima santrali), gereksiz iç içe geçmiş (nested) family kullanımı performansı ciddi şekilde etkileyebiliyor. Bu yüzden test aşamasında family'nin tek başına açılma ve yerleştirilme hızını da değerlendiriyorum.

## Üretici Verisiyle Model Verisini Güncel Tutmak

Projeler ilerledikçe, seçilen ekipmanın üretici ya da modeli değişebiliyor; bu durumda family'nin de güncellenmesi gerekiyor. Deneyimlerimde, ekipman değişikliklerinin family'ye yansıtılmaması, model ile saha arasında ciddi tutarsızlıklara yol açan en sık nedenlerden biri. Bu yüzden proje sürecinde ekipman onayları (malzeme onay formları, teknik doküman incelemeleri) ile BIM model güncellemelerini birbirine bağlı bir süreç olarak yürütmek gerekiyor; bir ekipman onaylandığında, bu bilginin BIM ekibine geri bildirilmesi ve family'nin gerekiyorsa revize edilmesi standart bir iş akışı haline getirilmeli. Bu tutarlılık, ilerleyen aşamalarda özellikle metraj ve satın alma süreçlerinde ciddi karışıklıkları önlüyor.

## Sık Karşılaşılan Hatalar

- **Connector tiplerinin yanlış seçilmesi:** Hava kanalı connector'ı yerine boru connector'ı kullanmak, sistemin ekipmanı tanımamasına yol açıyor.
- **Parametre isimlendirmesinde tutarsızlık:** Farklı family'lerde aynı bilgi için farklı parametre isimleri kullanmak, metraj raporlarında karışıklık yaratıyor.
- **Ölçek dışı modelleme:** Gerçek katalog ölçüleri yerine "yaklaşık" ölçülerle modelleme yapmak, sahada uyumsuzluğa yol açıyor.
- **Kategori yanlış seçimi:** Ekipmanın yanlış kategoride (örneğin "Generic Model" yerine "Mechanical Equipment" olması gerekirken) oluşturulması, filtreleme ve programlarda sorun çıkarıyor.

## Pratik Öneriler

Revit'te mekanik ekipman family oluştururken önerilerim:

1. **Katalog verisini eksiksiz toplayın**, modellemeye başlamadan önce tüm ölçü ve bağlantı bilgilerini hazırlayın.
2. **Doğru şablonu seçin** ve ekipmanı doğru MEP kategorisinde oluşturun.
3. **Connector'ları özenle yerleştirin**, bunlar modelin sistem mantığının temelini oluşturuyor.
4. **Gereksiz geometrik detaydan kaçının**, model performansını koruyun.
5. **Kurumsal bir family kütüphanesi oluşturun**, tekrar eden modelleme işlerini azaltın.

Sonuç olarak, doğru oluşturulmuş bir mekanik ekipman family'si, sadece görsel bir 3D obje değil, projenin koordinasyon, metraj ve saha uygulaması süreçlerinin güvenilir bir temel taşı haline geliyor. Bu adıma yeterince zaman ayırmak, ilerleyen aşamalarda çok daha büyük zaman kazandırıyor.
