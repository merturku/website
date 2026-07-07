---
title: "Tekla ile Yapısal-Mekanik Koordinasyon Farkları"
description: "Tekla Structures ve Revit MEP arasındaki iş akışı farkları; yapısal ve mekanik disiplinler arası model koordinasyonu nasıl yürütülür?"
date: 2026-06-14
tags: ["Tekla", "Revit MEP", "BIM Koordinasyon"]
category: "bim"
draft: false
---

Revit MEP tarafında çalışan bir BIM uzmanı olarak, çelik veya betonarme taşıyıcı sistemi Tekla Structures ile modellenen projelerde koordinasyon yürütmek, alışılmış Revit-Revit iş akışından belirgin şekilde farklı. Tekla ile yapısal-mekanik koordinasyon farkları, çoğu zaman yazılımların kendi mantığından değil, iki disiplinin farklı önceliklerle çalışmasından kaynaklanıyor. Özellikle çelik konstrüksiyonlu endüstriyel tesislerde ve yüksek katlı yapılarda bu iki dünyanın kesişimi, projenin en kritik koordinasyon aşamalarından birini oluşturuyor. Bu yazıda sahada ve model ortamında karşılaştığım temel farkları ve bu farkları yönetmenin yollarını anlatacağım.

## İki Farklı Modelleme Felsefesi

Tekla Structures, özellikle çelik yapılarda imalat detayına kadar inen, bağlantı elemanlarını, kaynak detaylarını ve montaj sıralamasını önceliklendiren bir yazılım. Revit MEP ise sistem bazlı düşünüyor; kanal, boru ve kablo tavası gibi elemanları bir ağ (network) mantığıyla ele alıyor. Bu felsefe farkı, LOD beklentilerinin de birbirinden ayrışmasına yol açıyor: yapısal ekip genellikle LOD 400'e yakın imalat detayı üretirken, mekanik ekip koordinasyon aşamasında LOD 300 civarında kalabiliyor. Bu farkı projeye başlarken netleştirmemek, ilerleyen aşamada "hangi model referans alınacak" tartışmasına dönüşüyor.

## Dosya Formatı ve Veri Aktarımı

Deneyimlerimde en çok zaman kaybettiren nokta, Tekla ile Revit arasındaki veri aktarımı. Doğrudan bir eklenti kullanılmadığında IFC üzerinden aktarım yapılıyor ve bu süreçte bazı parametrik bilgiler kayboluyor; özellikle kesit profilleri ve bağlantı detayları basitleşmiş geometriye dönüşebiliyor. Bunun önüne geçmek için proje başında ortak bir IFC dışa aktarma standardı (hangi sınıfların, hangi seviyede aktarılacağı) belirlemek gerekiyor. Ayrıca paylaşılan koordinat sisteminin her iki yazılımda da birebir eşleşmesi kritik; birkaç santimetrelik bir kayma bile clash detection sonuçlarını anlamsız hale getirebiliyor.

## Koordinasyon Ortamının Buluşma Noktası

Tekla ve Revit modelleri genellikle Navisworks gibi ortak bir koordinasyon platformunda bir araya geliyor. Bu noktada yapısal-mekanik koordinasyon farkları daha somut hale geliyor: yapısal model kiriş, kolon ve döşeme gibi büyük ölçekli elemanları içerirken, mekanik model çok sayıda küçük ölçekli ve sık güncellenen eleman barındırıyor. Bu nedenle koordinasyon toplantılarında öncelik sırası netleştirilmeli — önce büyük yapısal elemanlarla mekanik ana hatların (ana kanallar, kolektör hatları) çakışmaları çözülmeli, sonra detay seviyesine inilmeli. Navisworks üzerinden yürüttüğüm çok disiplinli koordinasyon süreçlerini [bu yazıda](/blog/navisworks-ile-cok-disiplinli-koordinasyon) daha detaylı ele almıştım.

## Revizyon Hızı Farkı

Sahada gördüğüm kadarıyla, yapısal model genellikle mekanik modele kıyasla daha az sıklıkla ama daha büyük kapsamlı revizyonlarla güncelleniyor; çelik detaylandırma aşamasına geçildiğinde ise değişiklik sıklığı artabiliyor. Mekanik taraf ise ekipman seçimleri, saha kısıtları ve mimari değişiklikler nedeniyle sürekli küçük revizyonlar yapıyor. Bu asenkron revizyon ritmi, hangi model versiyonunun "güncel" kabul edileceği konusunda karışıklık yaratabiliyor. Benim önerim, her iki taraf için de haftalık sabit bir model yayın günü belirlemek ve yayın öncesi kısa bir değişiklik özeti paylaşmak.

## Şaft ve Geçiş Noktalarında Ortak Çalışma

Özellikle çok katlı yapılarda düşey şaftlar, mekanik ve yapısal disiplinlerin en yoğun kesiştiği noktalar. Kiriş altı boşlukları, döşeme delik konumları ve şaft ölçüleri, iki disiplinin birlikte karar vermesi gereken kritik detaylar. Tekla tarafında döşeme delikleri genellikle yapısal ekip tarafından yerleştiriliyor ama mekanik ihtiyaçlara göre boyutlandırılması gerekiyor; bu da erken aşamada net bir delik listesi (sleeve list) paylaşımını zorunlu kılıyor. Şaft koordinasyonu konusundaki deneyimlerimi [çok katlı yapılarda şaft koordinasyonu yazısında](/blog/cok-katli-yapilarda-mekanik-saft-tesisat-koordinasyonu) daha kapsamlı işlemiştim.

## İletişim Dili Farkı

Son olarak gözden kaçırılmaması gereken bir nokta da terminoloji farkı. Yapısal ekip "eleman", "profil", "bağlantı detayı" gibi terimlerle konuşurken mekanik ekip "hat", "debi", "kesit" gibi kavramlarla ilerliyor. Koordinasyon toplantılarında bu terminolojik farkın yarattığı yanlış anlamaları en aza indirmek için, ortak bir çakışma raporu şablonu kullanmak ve her çakışma kaydına görsel (ekran görüntüsü) eklemek büyük fark yaratıyor.

## LOD Seviyesi Eşleştirmesinin Zorluğu

Tekla ile yapısal-mekanik koordinasyon farkları arasında en teknik olanı, iki disiplinin LOD anlayışının birbirine tam karşılık gelmemesi. Tekla'da genellikle imalat aşamasına özgü bir detay seviyesi kültürü var; profil, kaynak ve bağlantı detayları erken aşamada bile oldukça yüksek olgunlukta modellenebiliyor. Revit MEP tarafında ise LOD, koordinasyon aşamasına göre kademeli olarak artıyor ve genellikle imalat detayına (LOD 400) sadece kritik bölgelerde çıkılıyor. Bu farkı yönetmek için, koordinasyon başlamadan önce her iki disiplinin LOD tanımlarını ortak bir referans tabloya oturtmak faydalı oluyor; bu konudaki genel LOD çerçevesini [LOD seviyeleri yazısında](/blog/lod-nedir-mekanik-tesisat-lod-seviyeleri) detaylandırmıştım.

## Model Boyutu ve Performans Farkı

Pratikte az konuşulan ama sahada sıkça karşılaştığım bir konu da dosya boyutu ve performans farkı. Tekla modelleri, çelik yapılarda çok sayıda küçük bağlantı elemanı (bulon, plaka, kaynak detayı) içerdiği için oldukça ağır hale gelebiliyor; Revit MEP modelleri ise sistem uzunluğu ve ekipman sayısı arttıkça benzer şekilde ağırlaşıyor. İki ağır modelin aynı koordinasyon ortamında bir araya gelmesi, özellikle düşük performanslı iş istasyonlarında ciddi yavaşlamalara yol açabiliyor. Bu nedenle koordinasyon toplantılarında genellikle her iki modelin de belirli bir detay seviyesinde (imalat detayları gizlenmiş, sadeleştirilmiş) sunulan bir "koordinasyon görünümü" kullanılması, hem toplantı akıcılığını hem de katılımcı odağını koruyor.

## Sonuç

Tekla ile yapısal-mekanik koordinasyon farkları, doğru yönetildiğinde bir engel değil, projenin sağlıklı ilerlemesi için bir fırsat haline geliyor. Pratikte işe yarayan yaklaşımları özetlemek gerekirse:

- Proje başında ortak LOD ve IFC aktarım standartlarını yazılı hale getirin.
- Paylaşılan koordinat sistemini her iki yazılımda da düzenli olarak doğrulayın.
- Koordinasyon önceliğini büyük ölçekli elemanlardan detaya doğru kademelendirin.
- Model yayın takvimini sabitleyip değişiklik özetlerini paylaşın.
- Şaft ve geçiş noktalarında erken aşamada ortak bir delik/sleeve listesi oluşturun.
- LOD tanımlarını her iki disiplin için ortak bir referans tabloya oturtun.
- Koordinasyon toplantılarında sadeleştirilmiş "koordinasyon görünümü" kullanarak performans sorunlarını azaltın.

Bu adımlar, iki farklı yazılım dünyasının aynı proje üzerinde uyumlu çalışmasını sağlıyor ve sahada yaşanacak sürpriz çakışmaları büyük ölçüde azaltıyor.
