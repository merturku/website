---
title: "Sıhhi Tesisat (Plumbing) Modellemesinde BIM Kullanımı"
description: "Sıhhi tesisat sistemlerinin BIM ile modellenmesi: boru hattı yönlendirme, eğim hesapları ve diğer disiplinlerle koordinasyon."
date: 2026-03-22
tags: ["Sıhhi Tesisat", "BIM"]
category: "bim"
draft: false
---

Mekanik tesisat denince genellikle akla önce HVAC sistemleri gelse de, sıhhi tesisat (plumbing) modellemesi hem karmaşıklığı hem de eğim gereksinimleri açısından BIM sürecinde ayrı bir uzmanlık gerektiriyor. Sıhhi tesisat modellemesinde BIM kullanımı, özellikle çok katlı yapılarda pis su, temiz su ve yağmur suyu hatlarının doğru yönlendirilmesi ve diğer disiplinlerle çakışmadan yerleştirilmesi açısından kritik bir rol oynuyor. Sahada yıllar içinde edindiğim deneyimlerde, sıhhi tesisat hatalarının büyük bölümünün aslında tasarım aşamasında BIM ile önlenebilecek nitelikte olduğunu gördüm.

## Sıhhi Tesisatın BIM ile Modellenmesinin Önemi

Sıhhi tesisat sistemleri, HVAC kanallarının aksine, çoğu zaman yerçekimiyle çalışan pasif sistemler. Bu da onları statik olarak "esnek" gibi gösterse de, aslında eğim gereksinimleri yüzünden en az esnek disiplinlerden biri haline getiriyor. Bir pis su hattının eğimi bozulduğunda, sistem bütünüyle işlevsiz kalabiliyor. BIM ortamında bu hatları 3D modelleyerek, hem eğim hem de diğer disiplinlerle olan ilişkiyi tasarım aşamasında görebilmek, sahada karşılaşılacak ciddi sorunları önceden engelliyor.

Bu konu, genel olarak [Mekanik Tesisatta BIM Faydaları](/blog/mekanik-tesisatta-bim-faydalari) yazımda bahsettiğim faydaların özel bir uygulama alanı olarak düşünülebilir; sıhhi tesisat, BIM'in en somut değer kattığı disiplinlerden biri.

## Boru Hattı Yönlendirme Stratejileri

Sıhhi tesisat güzergahlarını planlarken en çok dikkat ettiğim nokta, pis su hatlarının mümkün olduğunca kısa ve doğrudan güzergahlarla ana dikey şaftlara ulaştırılması. Uzun ve dolambaçlı güzergahlar hem eğim kaybına hem de tıkanma riskinin artmasına yol açıyor. BIM modelinde güzergahı 3D olarak kurgularken, aynı zamanda temiz su, yağmur suyu ve atık su hatlarının birbirinden ve elektrik tesisatından yeterli mesafede tutulmasına da özen gösteriyorum.

Kanal ve boru yönlendirme stratejileri konusunu genel hatlarıyla [Mekanik Tesisatta Kanal/Boru Yönlendirme Stratejileri](/blog/mekanik-tesisatta-kanal-boru-yonlendirme-stratejileri) yazımda ele alıyorum; sıhhi tesisat özelinde ek olarak dikkat edilmesi gereken en önemli fark, yönlendirmenin sadece geometrik uygunluk değil, aynı zamanda hidrolik performans (eğim, akış yönü) açısından da doğru olması gerekliliği.

## Eğim Hesaplarının BIM Modeline Entegrasyonu

Sıhhi tesisat modellemesinde en kritik teknik detay, boru eğimlerinin doğru parametrelerle tanımlanması. Revit MEP gibi araçlarda boru sistemleri için eğim değeri yüzdesel veya oran olarak tanımlanabiliyor ve model içinde otomatik olarak yükseklik farkını hesaplayabiliyor. Ben modelleme sürecinde her pis su hattı için eğim değerini proje şartnamesine uygun şekilde (genellikle yatay mesafeye bağlı belirli bir yüzde aralığında) tanımlıyorum ve modelin bu eğimi otomatik hesaplayıp doğru kotları üretmesini sağlıyorum.

Bu otomatik hesaplama, manuel 2D çizimle çalışıldığında sık yapılan bir hatayı önlüyor: uzun bir güzergah boyunca eğimin elle hesaplanması sırasında oluşan yuvarlama hataları, güzergahın sonunda kotun planlanandan farklı çıkmasına yol açabiliyor. BIM modelinde bu hesap otomatik ve tutarlı şekilde yapıldığı için, güzergahın başından sonuna kadar kot doğruluğu garanti altına alınıyor.

## Diğer Disiplinlerle Koordinasyon

Sıhhi tesisat hatları, özellikle asma tavan içi bölgelerde HVAC kanalları, elektrik kablo tavaları ve yangın tesisatı boruları ile aynı hacmi paylaşıyor. Bu yoğunluk, koordinasyonu zorlaştıran ana etken. Ben koordinasyon toplantılarında sıhhi tesisat hatlarını genellikle önceliklendirerek ele alıyorum, çünkü eğim gereksinimi olan bir hattın güzergahını değiştirmek, eğimsiz çalışan bir HVAC kanalını kaydırmaktan çok daha kısıtlayıcı. Pratik kural olarak, koordinasyon sırasında önce eğimli sistemlerin (pis su, yağmur suyu) güzergahını sabitliyor, sonra diğer disiplinleri bu güzergaha göre yönlendiriyoruz.

Çok katlı yapılarda dikey şaft içindeki sıhhi tesisat hatlarının diğer disiplinlerle koordinasyonu ayrı bir uzmanlık gerektiriyor; bu konuyu [Çok Katlı Yapılarda Mekanik Şaft Tesisat Koordinasyonu](/blog/cok-katli-yapilarda-mekanik-saft-tesisat-koordinasyonu) yazımda daha detaylı işliyorum.

## Sahada Karşılaşılan Tipik Sorunlar

Sahada en sık karşılaştığım sıhhi tesisat sorunu, modelde doğru tanımlanmış eğimin, imalat sırasında askı yüksekliklerinin yanlış uygulanması yüzünden bozulması. Bu yüzden sıhhi tesisat imalatı sırasında saha ekiplerine modelden alınan kot bilgilerini net şekilde iletmek ve askı yüksekliklerinin kontrolünü düzenli aralıklarla yapmak gerekiyor. Ayrıca, revizyon süreçlerinde bir hattın güzergahı değiştirildiğinde eğim değerinin yeniden kontrol edilmemesi de sık yapılan bir hata; her revizyonda eğim kontrolünü otomatik bir adım haline getirmek işe yarıyor.

## Sonuç ve Pratik Öneriler

Sıhhi tesisat modellemesinde BIM kullanımı, doğru uygulandığında sahada yaşanacak ciddi işlevsel sorunları tasarım aşamasında önlüyor. Pratik önerilerim:

- Pis su ve yağmur suyu hatlarını mümkün olduğunca kısa ve doğrudan güzergahlarla dikey şaftlara ulaştırın.
- Eğim değerlerini model parametrelerine tanımlayarak otomatik kot hesaplamasından yararlanın.
- Koordinasyon toplantılarında eğimli sistemleri önceliklendirin, diğer disiplinleri bu güzergahlara göre yönlendirin.
- Her revizyonda eğim kontrolünü rutin bir adım olarak tekrarlayın.
- Saha ekiplerine modelden alınan kot bilgilerini net ve anlaşılır şekilde iletin, askı yüksekliklerini düzenli denetleyin.

Bu disiplinli yaklaşım, sıhhi tesisat sistemlerinin hem tasarım hem de saha uygulaması aşamasında sorunsuz çalışmasını sağlıyor.
