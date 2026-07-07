---
title: "Mekanik Tesisat Şartnamelerinde BIM Gereksinimleri"
description: "İhale ve sözleşme şartnamelerinde mekanik tesisat için istenen BIM gereksinimleri nasıl tanımlanır ve karşılanır?"
date: 2026-04-12
tags: ["BIM Şartname", "Mekanik Tesisat"]
category: "bim"
draft: false
---

Son yıllarda özellikle kamu ve büyük ölçekli özel sektör projelerinde ihale şartnamelerine BIM gereksinimlerinin eklendiğini sıkça görüyorum. Ancak sahada karşılaştığım tabloya bakınca, mekanik tesisat şartnamelerinde yer alan BIM maddelerinin çoğu zaman muğlak yazıldığını, ya çok genel geçtiğini ya da uygulanabilir olmayan detaylar içerdiğini söyleyebilirim. Bu yazıda hem şartname hazırlayan hem de şartnameyi karşılamak zorunda olan taraf açısından mekanik tesisat şartnamelerinde BIM gereksinimlerinin nasıl tanımlanması ve karşılanması gerektiğini ele alacağım.

## Şartnamelerde BIM Gereksinimi Neden Belirsiz Kalıyor?

Birçok şartnamede "proje BIM ile yürütülecektir" ya da "3 boyutlu koordineli model teslim edilecektir" gibi genel ifadeler görüyorum. Bu tür ifadeler, hangi yazılımın kullanılacağını, modelin hangi detay seviyesinde (LOD) teslim edileceğini, koordinasyon sürecinin nasıl yürütüleceğini ve teslim formatının ne olacağını belirtmiyor. Sonuç olarak yüklenici ile işveren arasında farklı beklentiler oluşuyor; işveren "koordineli, çakışmasız bir model" beklerken yüklenici sadece görsel bir 3D model sunmakla yetinebiliyor.

Bu belirsizliğin en sık ortaya çıktığı alan LOD (Level of Development) tanımı. Mekanik tesisat için LOD seviyelerinin ne anlama geldiğini [LOD nedir, mekanik tesisat LOD seviyeleri](/blog/lod-nedir-mekanik-tesisat-lod-seviyeleri) yazımda detaylı ele almıştım; şartnamede bu seviyelerin proje aşamalarına (ön tasarım, kesin proje, uygulama projesi, imalat/atölye) göre net olarak eşleştirilmesi gerekiyor.

## Mekanik Tesisat Şartnamesinde Yer Alması Gereken Temel Maddeler

Deneyimlerimde, iyi hazırlanmış bir mekanik tesisat BIM şartnamesi en azından şu başlıkları içermeli:

- **Yazılım ve dosya formatı gereksinimleri:** Hangi modelleme yazılımının kullanılacağı, hangi dosya formatlarında (IFC, RVT, NWD gibi) teslim yapılacağı.
- **LOD tanımı ve aşama bazlı eşleştirme:** Her proje aşamasında beklenen detay seviyesinin net tanımı.
- **Koordinasyon süreci ve sıklığı:** Çakışma tespiti hangi araçla, ne sıklıkla yapılacak, koordinasyon toplantıları kimler katılımıyla düzenlenecek.
- **Sistem sınıflandırması ve parametre standardı:** Isıtma, soğutma, sıhhi tesisat, yangın gibi sistemlerin model içinde nasıl adlandırılıp sınıflandırılacağı.
- **Miktar metraj (quantity takeoff) gereksinimleri:** Modelden alınacak metraj çıktılarının hangi formatta ve hangi detayda olacağı; bu konuyu [BIM ile miktar metraj](/blog/bim-ile-miktar-metraj-quantity-takeoff) yazımda ayrıca ele alıyorum.
- **As-built model teslim gereksinimleri:** İnşaat tamamlandıktan sonra sahada yapılan revizyonların modele nasıl işleneceği ve teslim edileceği.

Bu maddelerin her biri, taraflar arasında sonradan çıkabilecek anlaşmazlıkları büyük ölçüde önlüyor çünkü beklenti baştan somut hale geliyor.

## BIM Uygulama Planı ile Şartname İlişkisi

Şartnamede tanımlanan BIM gereksinimlerinin nasıl hayata geçirileceği, genelde ayrı bir doküman olan BIM Uygulama Planı (BEP) üzerinden detaylandırılıyor. Şartname "ne istendiğini", BEP ise "nasıl yapılacağını" tanımlıyor. BEP hazırlama sürecini ayrı bir yazıda ele alacağım ama kısaca söylemek gerekirse, şartnamedeki her BIM maddesinin BEP içinde bir karşılığı olmalı; aksi halde şartname gereksinimleri kağıt üzerinde kalıyor.

## Türkiye'deki Duruma Kısa Bir Bakış

Türkiye'de kamu ihalelerinde BIM gereksinimi henüz her projede zorunlu değil, ancak büyük ölçekli altyapı ve kamu binası projelerinde şartnamelere giderek daha fazla BIM maddesi eklendiğini görüyorum. Bu konuyu ayrı bir yazıda daha geniş ele alacağım, ama mekanik tesisat özelinde söylemem gereken şu: şartnamede BIM gereksinimi olsun ya da olmasın, mekanik tesisatın karmaşıklığı düşünüldüğünde BIM kullanımı artık neredeyse bir zorunluluk haline geldi.

## Yüklenici Tarafında Şartname Nasıl Karşılanır?

Şartname gereksinimlerini karşılamaya çalışan bir yüklenici/taşeron olarak baktığımda, en kritik adım şartnameyi proje başlamadan önce satır satır incelemek ve belirsiz kalan maddeleri işverenle netleştirmektir. Örneğin "koordineli model" ifadesi geçiyorsa, bunun hangi tolerans değerleriyle (örneğin sıfır çakışma mı, yoksa belirli bir tolerans dahilinde kabul edilebilir çakışma mı) değerlendirileceği baştan sorulmalı.

Ayrıca şartnamede istenen teslim formatlarının, kullanılan yazılım ile uyumlu olup olmadığı kontrol edilmeli. Farklı yazılımlar arasında (Revit, Tekla, AutoCAD MEP) veri alışverişinde format kayıpları yaşanabiliyor; bu riski şartname aşamasında öngörmek, proje ilerledikçe ortaya çıkabilecek uyumsuzlukları azaltıyor.

## Sık Karşılaşılan Sorunlar

- **Ölçülemeyen gereksinimler:** "Yüksek kaliteli koordinasyon" gibi ifadeler denetlenebilir değil; somut ölçütlerle (örneğin çakışma sayısı, LOD seviyesi) ifade edilmeli.
- **Aşamalar arası tutarsızlık:** Ön tasarım için tanımlanan LOD seviyesi ile uygulama projesi için tanımlanan seviye arasında mantıklı bir ilerleme olmalı, aksi halde model aniden çok detaylı hale getirilmeye çalışılıp zaman kaybediliyor.
- **Denetim mekanizması eksikliği:** Şartnamede BIM gereksinimi var ama bunun kontrolünü kimin, ne sıklıkla yapacağı belirtilmemiş olabiliyor.

## Pratik Öneriler

Mekanik tesisat şartnamelerinde BIM gereksinimlerini hem hazırlarken hem karşılarken dikkat edilmesi gerekenler:

1. **Her gereksinimi ölçülebilir hale getirin.** Genel ifadeler yerine somut LOD, format ve süreç tanımları kullanın.
2. **Aşama bazlı LOD eşleştirmesi yapın.** Proje ilerledikçe detay seviyesinin nasıl artacağını netleştirin.
3. **BEP ile şartnameyi eşleştirin.** Şartnamedeki her madde, uygulama planında somut bir karşılık bulmalı.
4. **Şartnameyi proje başlamadan önce sorgulayın.** Belirsiz kalan noktaları işverenle yazılı olarak netleştirin.

Sonuç olarak, iyi tanımlanmış bir mekanik tesisat BIM şartnamesi, projenin ilerleyen aşamalarında yaşanabilecek birçok anlaşmazlığı ve gecikmeyi baştan önlüyor. Şartname ne kadar somut ve ölçülebilir yazılırsa, taraflar arasındaki beklenti farkı o kadar azalıyor.
