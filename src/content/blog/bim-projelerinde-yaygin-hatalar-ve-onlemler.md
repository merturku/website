---
title: "BIM Projelerinde Yaygın Hatalar ve Nasıl Önlenir?"
description: "BIM koordinasyon sürecinde sık yapılan hatalar — eksik LOD, geç koordinasyon, veri kaybı — ve bunları önlemenin pratik yolları."
date: 2026-06-07
tags: ["BIM", "Proje Yönetimi"]
category: "bim"
draft: false
---

2015'ten bu yana sahada ve ofiste yürüttüğüm onlarca projede, BIM projelerinde yaygın hatalar aslında büyük çoğunlukla tekrar eden birkaç başlık altında toplanıyor. Yazılım seçimi ya da donanım gücü nadiren asıl sorun oluyor; asıl mesele süreç, iletişim ve disiplin. Bu yazıda deneyimlerimde en sık karşılaştığım hataları ve bunları önlemek için sahada işe yarayan yöntemleri paylaşacağım.

## Eksik veya Belirsiz LOD Tanımı

Projeye başlarken LOD (Level of Development) seviyesinin net tanımlanmaması, gördüğüm en yaygın hatalardan biri. Ekipler "detaylı model" gibi muğlak ifadelerle işe başlıyor, ilerleyen aşamada mimari LOD 300 beklerken mekanik ekip LOD 200'de kalmış oluyor. Bu uyumsuzluk hem miktar metrajını hem de clash detection sonuçlarını güvenilmez hale getiriyor. Konuyu daha detaylı ele aldığım [LOD seviyeleri yazısında](/blog/lod-nedir-mekanik-tesisat-lod-seviyeleri) her aşamada hangi disiplinin ne kadar detay üretmesi gerektiğini açıklamıştım; projeye başlamadan önce bu tabloyu ekiple birlikte gözden geçirmek, ilerleyen aylarda ciddi zaman kaybını önlüyor.

## Koordinasyonun Çok Geç Başlaması

Sahada gördüğüm kadarıyla ekipler genellikle koordinasyonu "model biraz daha olgunlaşsın" diyerek erteliyor. Oysa geç başlayan koordinasyon, çakışmaların inşaat aşamasına kadar fark edilmemesi anlamına geliyor ki bu da en pahalı hata türü. İmalat başladıktan sonra tespit edilen bir kanal-kiriş çakışması, tasarım aşamasında saatler içinde çözülebilecek bir sorunu günler süren saha revizyonuna çeviriyor. Benim önerim, model olgunluğu ne olursa olsun haftalık koordinasyon toplantılarını proje başından itibaren takvime almak. Bu toplantıların nasıl verimli yürütüleceğine dair pratik notlarımı [koordinasyon toplantıları yazısında](/blog/bim-koordinasyon-toplantilari-nasil-yonetilir) paylaşmıştım.

## Veri Kaybı ve Format Uyumsuzlukları

BIM projelerinde yaygın hatalar arasında en sinsi olanı, disiplinler arası model paylaşımında yaşanan veri kaybı. Bir yazılımdan diğerine aktarımda parametrelerin, malzeme bilgilerinin ya da paylaşılan koordinatların bozulması, koordinasyonun temelini sarsıyor. Özellikle Revit'ten IFC'ye, oradan da başka bir platforma geçişlerde bu kayıplar sık yaşanıyor. Çözüm olarak her proje başında ortak bir koordinat sistemi ve dosya adlandırma standardı belirlemek, ayrıca her paylaşımdan sonra rastgele birkaç elemanı kontrol ederek veri bütünlüğünü doğrulamak işe yarıyor.

## Yetersiz BEP (BIM Uygulama Planı)

Birçok projede BIM Uygulama Planı (BEP) ya hiç hazırlanmıyor ya da sadece formalite gereği hazırlanıp bir kenara konuluyor. Oysa BEP, kimin hangi modeli, hangi detay seviyesinde, hangi tarihte teslim edeceğini netleştiren canlı bir belge olmalı. Yetersiz BEP, projenin ilerleyen aşamalarında "bu kimin sorumluluğuydu" tartışmalarına yol açıyor. BEP hazırlığı konusunda daha kapsamlı bir rehberi [BEP nasıl hazırlanır yazısında](/blog/bim-uygulama-plani-bep-nasil-hazirlanir) bulabilirsiniz.

## Disiplinler Arası İletişim Kopukluğu

Teknik araçlar ne kadar güçlü olursa olsun, insan faktörü hâlâ en büyük risk. Mimari, statik ve mekanik ekiplerin birbirinden habersiz revizyon yapması, model versiyonlarının senkronize kalmamasına neden oluyor. Deneyimlerimde bu sorunun kökeninde genellikle net bir revizyon takvimi ve paylaşım protokolünün olmayışı yatıyor. Ortak bir bulut platformu üzerinden çalışmak (BIM 360 gibi) ve her revizyonu açıklama notuyla birlikte yayınlamak, bu kopukluğu büyük ölçüde azaltıyor.

## Model Denetiminin İhmal Edilmesi

Modelin sadece "görsel olarak doğru görünmesi" yeterli değil; düzenli aralıklarla clash detection ve model kalite kontrolü yapılmadığında küçük hatalar birikip büyük sorunlara dönüşüyor. Haftalık ya da en azından iki haftada bir yapılan sistematik çakışma taramaları, sahaya geçmeden önce sorunların büyük kısmını temizliyor. Bu konuda daha teknik detaylara girdiğim yazıya [clash detection üzerine yazımdan](/blog/clash-detection-mekanik-tesisatta-cakisma-tespiti) ulaşabilirsiniz.

## Personel ve Yetkinlik Eksikliği

Son olarak, BIM sürecinin başarısı büyük ölçüde ekibin yazılım ve süreç yetkinliğine bağlı. Sahada sıkça gördüğüm bir hata, deneyimli bir BIM modelleyicinin koordinasyon sorumluluğu da üstlenmesi beklenirken, bu kişinin aslında sadece modelleme eğitimi almış olması. Koordinasyon; iletişim, disiplinler arası teknik bilgi ve proje yönetimi becerisi gerektiriyor. Ekip kurarken bu ayrımı net yapmak, projenin ilerleyen aşamalarında darboğaz oluşmasını engelliyor. Bu ayrımın nasıl yapılması gerektiğini, hangi rolün hangi yetkinliği taşıması gerektiğini [BIM uzmanı olmak için gerekli yetkinlikler yazısında](/blog/bim-uzmani-olmak-icin-yetkinlikler-kariyer-yolu) daha kapsamlı ele almıştım.

## Sorumluluk Sınırlarının Belirsizliği

Bir diğer sık karşılaştığım hata, disiplinler arası sorumluluk sınırlarının net çizilmemesi. Örneğin bir kanal ile bir kiriş çakıştığında, çözümü kimin üreteceği (mekanik ekibin mi kanalı kaydıracağı yoksa yapısal ekibin mi kiriş altı boşluk bırakacağı) baştan tanımlanmazsa, her çakışma kaydı uzun tartışmalara dönüşüyor. Bu belirsizliği önlemek için proje başında bir "çözüm önceliği matrisi" oluşturmak işe yarıyor: hangi disiplinin hangi durumda öncelikli kabul edileceği, hangi durumlarda ortak çözüm arandığı yazılı hale getirilmeli. Bu matris, koordinasyon toplantılarının önemli bir kısmını gereksiz tartışmadan kurtarıyor ve toplantı süresini gerçek çözüm üretimine ayırmayı sağlıyor.

## As-Built Süreçte Model Güncellemesinin İhmali

Sahada sıkça gözlemlediğim bir başka hata, tasarım modelinin imalat sırasında yapılan revizyonlarla güncellenmemesi. Şantiyede bir boru hattı ya da kanal güzergâhı saha kısıtları nedeniyle değiştiğinde, bu değişiklik modele işlenmezse proje sonunda teslim edilen "as-built" model gerçek durumu yansıtmıyor. Bu durum, binanın işletme döneminde ciddi sorunlara yol açabiliyor çünkü tesis yönetimi ekipleri güvenilmeyen bir modelle çalışmak zorunda kalıyor. As-built sürecinin nasıl sağlıklı yürütüleceğine dair gözlemlerimi [saha-model aktarımı yazısında](/blog/santiyede-bim-modelinin-sahaya-aktarilmasi-as-built) paylaşmıştım; özetle, saha revizyonlarının düzenli aralıklarla modele işlenmesi için sorumlu bir kişi atamak, projenin sonunda büyük bir kurtarma operasyonuna dönüşmesini engelliyor.

## Sonuç ve Pratik Öneriler

BIM projelerinde yaygın hatalar aslında çoğunlukla önlenebilir nitelikte. Sahada ve ofiste edindiğim tecrübeye dayanarak özetlemek gerekirse:

- Proje başında LOD seviyelerini yazılı ve net şekilde tanımlayın.
- Koordinasyon toplantılarını model olgunluğunu beklemeden, proje başından itibaren düzenli yapın.
- Dosya paylaşımlarında ortak standartlar belirleyip veri bütünlüğünü periyodik olarak kontrol edin.
- BEP'i canlı bir belge olarak güncel tutun, sadece formalite belgesi haline getirmeyin.
- Model denetimini ve clash detection'ı düzenli bir rutine bağlayın.
- Ekipteki her kişinin yetkinliğini görevine uygun şekilde eşleştirin.
- Sorumluluk sınırlarını ve çözüm önceliklerini yazılı bir matrisle netleştirin.
- Saha revizyonlarını düzenli olarak modele işleyip as-built modelin güncel kalmasını sağlayın.

Bu adımların hiçbiri karmaşık teknoloji yatırımı gerektirmiyor; asıl gereken disiplin ve süreklilik. BIM'in sağladığı faydayı gerçek anlamda almak isteyen ekipler için bu önlemler, projenin başından sonuna kadar zaman ve maliyet tasarrufu sağlıyor.
