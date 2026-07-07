---
title: "Yangın Tesisatı (Sprinkler) Sistemlerinin BIM ile Koordinasyonu"
description: "Sprinkler ve yangın söndürme sistemlerinin BIM modelinde koordinasyonu; yönetmelik gereksinimleri ve sık karşılaşılan çakışma noktaları."
date: 2026-03-29
tags: ["Yangın Tesisatı", "BIM Koordinasyon"]
category: "bim"
draft: false
---

Yangın tesisatı, mekanik tesisat disiplinleri arasında en az tolerans tanıyan sistemlerden biri. Sprinkler başlıklarının konumu, boru eğimleri ve kapsama alanları yönetmeliklerle sıkı sıkıya belirlenmiş durumda; birkaç santimlik bir sapma bile sistemin onay almasını engelleyebiliyor. Sahada yıllardır gördüğüm kadarıyla, yangın tesisatı sprinkler sistemlerinin BIM ile koordinasyonu, diğer mekanik sistemlere göre çok daha disiplinli bir yaklaşım gerektiriyor çünkü burada estetik ya da işlevsel bir tercih değil, can güvenliği söz konusu.

## Yangın Tesisatında BIM Koordinasyonu Neden Farklı?

HVAC kanalı birkaç derece eğik gitse ya da bir sıhhi tesisat borusu planlanandan biraz farklı bir güzergahtan geçse, çoğu zaman işlevsellik açısından büyük bir sorun oluşmuyor. Ama sprinkler sisteminde durum farklı. Başlıkların tavana olan mesafesi, birbirlerine olan uzaklıkları ve kapsama açıları yönetmelikte (NFPA 13 ve benzeri standartlarda referans alınan ulusal düzenlemelerde) net olarak tanımlanmış. Bu yüzden BIM modelinde yangın tesisatını kurgularken önce yönetmelik gereksinimlerini parametrik kurallar haline getirmek, sonra koordinasyona geçmek gerekiyor.

Deneyimlerimde, yangın tesisatı modelini geç aşamada devreye almak en sık yapılan hatalardan biri. Diğer disiplinler (HVAC, elektrik kablo tavaları, asma tavan) güzergahlarını netleştirdikten sonra sprinkler hattı "sıkışan yerlere" yerleştirilmeye çalışılıyor ve bu da hem estetik hem de yönetmelik açısından uygun olmayan çözümler doğuruyor. Bu noktada [clash detection ile mekanik tesisatta çakışma tespiti](/blog/clash-detection-mekanik-tesisatta-cakisma-tespiti) sürecini erken devreye almak, yangın tesisatının da diğer sistemlerle eş zamanlı koordine edilmesini sağlıyor.

## Sık Karşılaşılan Çakışma Noktaları

Sahada ve model üzerinde en sık karşılaştığım çakışma tipleri şöyle sıralanabilir:

- **Kanal ve kablo tavası ile sprinkler borusu çakışması:** Asma tavan boşluğu daraldıkça, büyük kesitli HVAC kanalları sprinkler ana hatlarının güzergahını bloke edebiliyor.
- **Başlık konumu ile mimari eleman çakışması:** Işık armatürleri, hoparlörler, duman dedektörleri ile sprinkler başlıkları aynı tavan bölgesinde konumlanmaya çalışıyor; asma tavan modülasyonu ile başlık aralıkları uyuşmadığında estetik ve teknik sorunlar ortaya çıkıyor.
- **Yapısal elemanlarla çakışma:** Kiriş altlarından geçmesi gereken ana dağıtım hatları, kiriş yüksekliği ve döşeme kotu netleşmeden modellenirse sonradan ciddi revizyon gerektiriyor.
- **Şaft içi yoğunluk:** Düşey sprinkler hatlarının diğer düşey tesisatlarla (sıhhi tesisat, yağmur suyu, elektrik) aynı şaftı paylaştığı durumlarda, montaj sırası ve bakım erişimi göz ardı edilebiliyor. Çok katlı yapılarda bu tür şaft koordinasyonu ayrı bir uzmanlık alanı haline geliyor.

Bu çakışmaların çoğu, modelleme aşamasında yangın tesisatına diğer disiplinlerle eşdeğer bir öncelik verilmediğinde ortaya çıkıyor. Oysa yangın tesisatı, yönetmelik onayı gerektiren bir sistem olduğu için aslında koordinasyon önceliği listesinde en üst sıralarda yer almalı.

## Yönetmelik Gereksinimlerini Modele Nasıl Taşırım?

Pratikte izlediğim yöntem, önce ilgili yönetmelikteki başlık aralığı, duvara/köşeye mesafe ve tavana mesafe kurallarını bir kontrol listesine dönüştürmek, ardından bu kuralları model şablonlarına parametre olarak yerleştirmek. Böylece sprinkler ailesi (family) yerleştirilirken otomatik olarak minimum/maksimum mesafe kuralları kontrol edilebiliyor. Bu sayede modelleme aşamasında yapılan hatalar, koordinasyon toplantısına gelmeden önce büyük ölçüde elenmiş oluyor.

Ayrıca hidrolik hesap yazılımlarıyla BIM modeli arasında veri alışverişi kurmak da önemli bir adım. Boru çapı, uzunluk ve basınç kaybı hesapları model geometrisinden türetildiğinde, hem tasarım hem de saha uygulaması arasındaki tutarlılık artıyor.

## Koordinasyon Toplantılarında Yangın Tesisatına Öncelik Vermek

Çok disiplinli koordinasyon toplantılarında yangın tesisatı çoğu zaman "son sırada" ele alınıyor; oysa bu yaklaşım yanlış. Yönetmelik gereksinimi olan bir sistem olduğu için, diğer disiplinlerin (özellikle asma tavan ve aydınlatma) sprinkler başlık konumlarına göre kendini ayarlaması gerekiyor, tam tersi değil. Bu konuyu genel olarak nasıl ele aldığımı [BIM koordinasyon toplantıları nasıl yönetilir](/blog/bim-koordinasyon-toplantilari-nasil-yonetilir) yazımda daha detaylı anlatıyorum, ama yangın tesisatı özelinde şunu söyleyebilirim: toplantı gündeminde sprinkler başlık koordinasyonunu ayrı bir madde olarak tutmak, sonradan yaşanan revizyon trafiğini büyük ölçüde azaltıyor.

## Saha Uygulamasında Karşılaşılan Sorunlar

Model üzerinde koordineli görünen bir yangın tesisatı, sahada hâlâ sorun çıkarabiliyor. En sık gördüğüm durum, asma tavan uygulama toleransları ile model kotlarının tam örtüşmemesi. Bu yüzden özellikle kritik bölgelerde (yüksek tavanlı hacimler, atriyum çevreleri, otopark gibi geniş açıklıklı alanlar) sahaya çıkmadan önce mock-up yapılmasını öneriyorum. Böylece hem montaj ekibi güzergahı netleştiriyor hem de olası bir sorun, tüm kata yayılmadan tek bir noktada tespit edilebiliyor.

## Sonuç ve Pratik Öneriler

Yangın tesisatı sprinkler sistemlerinin BIM koordinasyonu, diğer mekanik disiplinlere göre daha az esneklik tanıyan, yönetmelik odaklı bir süreç. Bu alanda pratik önerilerim şöyle:

1. **Yönetmelik kurallarını en baştan parametrik hale getirin**, modelleme sırasında manuel kontrol yerine otomatik kısıtlar kullanın.
2. **Sprinkler koordinasyonuna toplantı gündeminde öncelik verin**, diğer disiplinlerin ona göre ayarlanmasını sağlayın.
3. **Şaft ve tavan boşluğu yoğunluğunu erken tespit edin**, düşey ve yatay dağıtım hatlarını ilk aşamada netleştirin.
4. **Kritik bölgelerde mock-up uygulaması yapın**, model ile saha arasındaki toleransları önceden test edin.

Sonuç olarak, yangın tesisatı BIM koordinasyonunda "yeterince iyi" bir çözüm kabul edilebilir değil; çünkü burada hem yönetmelik uyumu hem de gerçek bir acil durum senaryosunda sistemin çalışması söz konusu. Bu ciddiyetle yaklaşıldığında, BIM süreci hem tasarım hem de saha aşamasında büyük bir güvence sağlıyor.
