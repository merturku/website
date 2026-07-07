---
title: "Navisworks ile Çok Disiplinli Koordinasyon Süreci"
description: "Mimari, statik ve mekanik tesisat modellerinin Navisworks'te birleştirilmesi; çok disiplinli koordinasyon toplantılarının nasıl yürütüldüğü."
date: 2026-03-01
tags: ["Navisworks", "BIM Koordinasyon"]
category: "bim"
draft: false
---

Büyük ölçekli bir projede mimari, statik ve mekanik tesisat modellerini aynı anda görmeden koordinasyon yapmaya çalışmak, sahada gördüğüm kadarıyla en sık karşılaşılan hatalardan biri. Navisworks ile çok disiplinli koordinasyon süreci kurduğumuzda, her disiplinin kendi yazılımında (Revit, Tekla, AutoCAD) ürettiği modeli tek bir ortamda birleştirip, çakışmaları imalat başlamadan önce görebiliyoruz. Bu yazıda, yıllar içinde şantiyelerde ve ofiste uyguladığım Navisworks tabanlı koordinasyon iş akışını paylaşıyorum.

## Navisworks'ün Çok Disiplinli Koordinasyondaki Yeri

Revit MEP, Tekla Structures ve mimari modelleme yazılımları kendi disiplinleri içinde güçlü araçlar sunsa da, farklı formatlardaki modelleri tek bir ortamda birleştirip gezinme, kesit alma ve çakışma tespiti yapma konusunda Navisworks'ün yerini tutan çok az araç var. Deneyimlerimde, özellikle üç veya daha fazla disiplinin (mimari, statik, mekanik, elektrik) aynı hacimde çalıştığı projelerde Navisworks olmadan koordinasyon toplantısı yürütmek neredeyse imkânsız hale geliyor.

Bu noktada Navisworks'ü [Revit MEP ile Modelleme](/blog/revit-mep-ile-mekanik-tesisat-modelleme) sürecinin bir devamı olarak düşünmek gerekiyor; Revit'te üretilen mekanik tesisat modeli, diğer disiplinlerin modelleriyle birleştirilmeden önce Navisworks'e aktarılıyor ve orada gerçek koordinasyon başlıyor.

## Model Birleştirme (Federasyon) Aşaması

İlk adım, her disiplinin modelini NWC formatına dönüştürüp merkezi bir NWF dosyasında birleştirmek. Burada dikkat ettiğim en önemli konu, tüm modellerin aynı koordinat sistemine ve aynı paylaşılan noktaya (shared coordinates) oturtulmuş olması. Koordinat kayması, koordinasyon sürecinde karşılaşılan en can sıkıcı ve fark edilmesi zor hatalardan biri; model içinde her şey doğru görünse de gerçekte iki disiplin farklı referans noktalarından çizilmiş olabiliyor. Bu yüzden her yeni model teslim alındığında ilk kontrolüm her zaman koordinat uyumluluğu oluyor.

## Çakışma Tespiti (Clash Detection) Kurgusu

Model birleştirildikten sonra Navisworks'ün Clash Detective modülü ile disiplinler arası çakışma testleri koşuyoruz. Burada mekanik tesisat açısından en kritik testler; kanal-boru ile statik elemanlar (kiriş, kolon, perde) arasındaki, kanal-boru ile mimari tavan/duvar arasındaki ve farklı tesisat disiplinleri (HVAC, sıhhi tesisat, yangın tesisatı) arasındaki çakışmalar. Bu konuyu daha detaylı olarak [Clash Detection: Mekanik Tesisatta Çakışma Tespiti](/blog/clash-detection-mekanik-tesisatta-cakisma-tespiti) başlıklı yazımda ele alıyorum ama burada vurgulamak istediğim nokta şu: çakışma testini bir kere koşup rapor almak yeterli değil, testleri projenin ilerleyişine paralel olarak düzenli aralıklarla tekrarlamak gerekiyor.

Sahada gördüğüm kadarıyla, çakışma testlerini sadece proje başında bir kez yapıp "koordinasyon tamamlandı" diyen ekipler, ilerleyen revizyonlarda yeni çakışmaların fark edilmemesi yüzünden ciddi saha sorunlarıyla karşılaşıyor. Benim uyguladığım pratik, her disiplin modelini güncellediğinde otomatik olarak yeniden çakışma testi koşmak ve sonuçları koordinasyon toplantısından önce dağıtmak.

## Çok Disiplinli Koordinasyon Toplantılarının Yürütülmesi

Koordinasyon toplantılarını yürütürken izlediğim yöntem şöyle: toplantıdan önce Clash Detective raporunu önceliklendiriyorum (kritik, orta, düşük öncelik), toplantıda ise sadece kritik ve orta öncelikli çakışmaları ekranda birleştirilmiş model üzerinden birlikte inceliyoruz. Her çakışma için hangi disiplinin çözüm üreteceği toplantı sırasında netleştiriliyor ve karar Navisworks'ün yorum (comment) özelliğiyle model üzerine not düşülüyor.

Bu toplantıları haftalık düzenli bir ritimde yapmak, projenin ilerleyen aşamalarında saha uygulamasına geçildiğinde sürprizlerle karşılaşma riskini büyük ölçüde azaltıyor. Toplantı yönetimiyle ilgili daha fazla pratik detay için [BIM Koordinasyon Toplantıları Nasıl Yönetilir](/blog/bim-koordinasyon-toplantilari-nasil-yonetilir) yazımı da öneririm.

## Navigasyon ve Simülasyon Araçlarının Katkısı

Navisworks'ün sadece çakışma tespiti değil, aynı zamanda TimeLiner ve Animator gibi araçlarla imalat sırasını simüle edebilme özelliği de çok disiplinli koordinasyonda değerli. Özellikle şaft içi geçişler veya tavan arası sıkışık bölgelerde, hangi disiplinin imalatının önce yapılması gerektiğini simülasyon üzerinden görsel olarak tartışmak, sahada yaşanacak "önce kim geçecek" tartışmalarını proje aşamasında çözüyor.

## Karşılaşılan Zorluklar

En sık karşılaştığım zorluk, disiplinlerin model teslim tarihlerinin senkronize olmaması. Mekanik tesisat modeli güncel olsa da statik model iki hafta gecikmeli geldiğinde, koordinasyon toplantısı güncel olmayan veriyle yürütülmek zorunda kalabiliyor. Bunu önlemek için proje başında tüm disiplinlerle ortak bir model teslim takvimi (BIM uygulama planı kapsamında) belirlemek kritik önem taşıyor.

Bir diğer sık karşılaşılan sorun, çakışma testlerinin gereğinden fazla sonuç üretmesi. Ayarları gevşek bırakılan bir Clash Detective testi, aynı boru güzergahı ile aynı askı arasında yüzlerce tekrar eden "sahte" çakışma raporu üretebiliyor. Bu durumda gerçekten kritik olan çakışmalar, gürültü içinde kayboluyor. Bu yüzden test kurallarını (tolerans mesafesi, hangi kategorilerin birbirine karşı test edileceği) proje başında dikkatli tanımlamak, koordinasyon ekibinin zamanını gerçek sorunlara ayırabilmesi için şart.

## Raporlama ve Takip Alışkanlıkları

Navisworks üzerinden çıkarılan çakışma raporlarını sadece toplantıda göstermek yeterli değil; bu raporların proje yönetim sistemine (ister BIM 360 ister başka bir platform olsun) aktarılıp, çözüm sürecinin takip edilmesi gerekiyor. Ben her koordinasyon toplantısı sonunda güncellenmiş bir "açık çakışma listesi" paylaşıyorum ve bir sonraki toplantıda önce bu listenin durumu gözden geçiriliyor. Bu basit alışkanlık, çözülmeden unutulan çakışmaların sahada sürpriz olarak ortaya çıkmasını önlüyor ve tüm disiplinlerin sorumluluğunu görünür kılıyor.

## Sonuç ve Pratik Öneriler

Navisworks ile çok disiplinli koordinasyon sürecini sağlıklı yürütmek için önerilerim:

- Tüm disiplin modellerinin aynı paylaşılan koordinat sistemine oturduğunu her teslimatta kontrol edin.
- Çakışma testlerini tek seferlik değil, düzenli ve tekrarlanan bir süreç olarak kurgulayın.
- Koordinasyon toplantılarını önceliklendirilmiş rapor üzerinden yürütün, her çakışma için sorumlu ve çözüm tarihi belirleyin.
- İmalat sırası tartışmalarında TimeLiner gibi simülasyon araçlarından yararlanın.
- Ortak bir model teslim takvimi oluşturarak disiplinler arası senkronizasyon kaybını önleyin.

Bu adımlar disiplinli şekilde uygulandığında, mekanik tesisat imalatları sahada çok daha az sürprizle ilerliyor ve koordinasyon toplantıları gerçek sorunları çözen verimli bir platforma dönüşüyor.
