---
title: "Dynamo ile Mekanik Tesisat Otomasyonu: Parametrik Tasarım"
description: "Dynamo görsel programlama ile mekanik tesisat modellemesinde tekrarlayan işlemleri otomatikleştirme ve parametrik tasarım örnekleri."
date: 2026-03-15
tags: ["Dynamo", "Revit MEP", "Otomasyon"]
category: "bim"
draft: false
---

Mekanik tesisat modellemesinde en çok zaman kaybettiğimiz işler genellikle en tekrarlayan olanlar: yüzlerce sprinkler başlığının yerleştirilmesi, kanal askılarının düzenli aralıklarla dizilmesi veya parametrik boru çaplarının hesaplanması gibi. Dynamo ile mekanik tesisat otomasyonu, bu tür tekrarlayan işleri görsel programlama mantığıyla otomatikleştirerek hem zamandan tasarruf sağlıyor hem de insan hatasını azaltıyor. Deneyimlerimde, Revit MEP'in standart araçlarıyla saatler süren işlemleri Dynamo ile dakikalar içinde tamamlayabiliyoruz.

## Dynamo Nedir ve Neden Mekanik Tesisatta Kullanılır

Dynamo, Revit içinde çalışan, node tabanlı (kod yazmadan, görsel bloklarla) bir programlama ortamı. Mekanik tesisat mühendisleri ve modelleyicileri için değerli olmasının nedeni, Revit'in kullanıcı arayüzünde manuel olarak yapılması saatler süren işlemleri script mantığıyla otomatikleştirebilmesi. Örneğin bir binadaki tüm odalara, oda alanına göre otomatik olarak doğru sayıda sprinkler başlığı yerleştirmek, elle yapıldığında hem zaman alıyor hem de insan hatasına açık; Dynamo ile bu işlem tek bir script çalıştırılarak tüm proje genelinde tutarlı şekilde yapılabiliyor.

Bu otomasyon yaklaşımı, [Revit MEP ile Mekanik Tesisat Modelleme](/blog/revit-mep-ile-mekanik-tesisat-modelleme) sürecinin doğal bir uzantısı olarak düşünülmeli; Dynamo, Revit'in yerleşik araçlarının yetersiz kaldığı noktalarda devreye giriyor.

## Parametrik Tasarım Mantığı

Parametrik tasarım, elemanların birbirine bağımlı kurallarla tanımlanması anlamına geliyor. Mekanik tesisatta bunun en somut örneği, boru çaplarının debiye göre otomatik hesaplanması veya kanal boyutlarının hava debisine göre parametrik olarak belirlenmesi. Dynamo'da bir script yazdığınızda, örneğin bir odanın hacmine ve kullanım tipine göre gereken hava debisini hesaplayıp buna uygun kanal kesitini otomatik atayabiliyorsunuz. Bu, özellikle çok sayıda benzer mekânın (otel odaları, ofis katları, hastane koğuşları gibi) bulunduğu projelerde inanılmaz zaman kazandırıyor.

Sahada gördüğüm kadarıyla, parametrik tasarım yaklaşımı sadece modelleme hızını artırmıyor, aynı zamanda tasarım değişikliklerine karşı da esneklik sağlıyor. Bir oda tipinin debisi değiştiğinde, tüm projede o oda tipine bağlı kanal boyutlarını script'i yeniden çalıştırarak güncelleyebiliyorsunuz; manuel yöntemde bu, yüzlerce elemanın tek tek düzeltilmesi anlamına gelir.

## Tekrarlayan İşlemlerin Otomatikleştirilmesi

Dynamo'yu en sık kullandığım alanlardan biri, kanal ve boru askılarının otomatik yerleştirilmesi. Standart bir proje, kilometrelerce kanal ve boru güzergahı içerebiliyor; her metrede belirli aralıklarla askı yerleştirmek manuel olarak yapıldığında hem yorucu hem de hataya açık bir iş. Dynamo scriptleri ile güzergah boyunca belirlenen aralıklarla otomatik askı yerleştirme, bu işi saatlerden dakikalara indiriyor.

Benzer şekilde, ekipman etiketleme (tagging), parametre kontrolü (örneğin tüm mekanik ekipmanların "üretici" parametresinin dolu olup olmadığını kontrol etme) ve model kalite kontrol scriptleri de sıkça kullandığım otomasyonlar arasında. Bu tür kontroller, teslim öncesi model kalitesini artırmak için manuel kontrolden çok daha güvenilir bir yöntem sunuyor.

## Dynamo ve Diğer BIM Süreçleriyle Entegrasyon

Dynamo'nun gücü sadece Revit içi işlemlerle sınırlı değil; Excel'den veri okuma/yazma, dış veritabanlarıyla bağlantı kurma veya modelden [Miktar Metraj (Quantity Takeoff)](/blog/bim-ile-miktar-metraj-quantity-takeoff) verisi çekip raporlama gibi işlemlerde de kullanılabiliyor. Örneğin, mekanik ekipman listesini Excel'den okuyup Revit modelindeki ilgili ailelerin parametrelerini otomatik güncelleyen bir script, mühendislik hesaplarıyla model arasındaki veri tutarlılığını korumamıza yardımcı oluyor.

## Öğrenme Eğrisi ve Ekip İçi Yaygınlaştırma

Dynamo'nun görsel programlama arayüzü, geleneksel kod yazmaya göre daha erişilebilir olsa da yine de bir öğrenme eğrisi gerektiriyor. Ekibimde Dynamo'yu yaygınlaştırırken izlediğim yöntem, önce basit ve somut problemlerle başlamak oldu: örneğin "tüm sprinkler başlıklarının yüksekliğini kontrol et" gibi tek adımlık scriptlerle başlayıp, zamanla daha karmaşık parametrik tasarım scriptlerine geçmek. Karmaşık bir script'i baştan öğretmeye çalışmak, ekip üyelerinin motivasyonunu kırabiliyor; küçük kazanımlarla ilerlemek daha sürdürülebilir oluyor.

## Karşılaşılan Sınırlamalar

Dynamo her sorunu çözen sihirli bir araç değil. Karmaşık scriptler, doğru test edilmeden büyük modellerde çalıştırıldığında beklenmedik sonuçlar (yanlış yerleştirilmiş elemanlar, bozulmuş parametreler gibi) doğurabiliyor. Bu yüzden her script'i önce küçük bir test modeli üzerinde deneyip, sonucu kontrol ettikten sonra ana projede kullanmayı prensip haline getirdim. Ayrıca script'lerin belgelenmesi (hangi script ne işe yarıyor, hangi varsayımlarla çalışıyor) önemli; aksi halde script'i yazan kişi projeden ayrıldığında ekip o otomasyonu sürdüremez hale gelebiliyor.

## Sonuç ve Pratik Öneriler

Dynamo ile mekanik tesisat otomasyonu, doğru kullanıldığında modelleme sürecini hem hızlandırıyor hem de tutarlılığını artırıyor. Pratik önerilerim:

- Otomasyona basit, somut ve sık tekrarlanan işlemlerden başlayın (askı yerleştirme, etiketleme gibi).
- Parametrik tasarım scriptlerini, tasarım değişikliklerine hızlı uyum sağlamak için özellikle çok tekrarlı mekânlarda (oteller, hastaneler) kullanın.
- Her script'i ana projede çalıştırmadan önce küçük bir test modelinde doğrulayın.
- Script'leri belgeleyin ki ekip içinde bilgi kaybı yaşanmasın.
- Model kalite kontrol scriptlerini teslim öncesi rutin bir adım haline getirin.

Bu yaklaşımla Dynamo, mekanik tesisat ekiplerinin en değerli zaman tasarrufu araçlarından biri haline geliyor.
