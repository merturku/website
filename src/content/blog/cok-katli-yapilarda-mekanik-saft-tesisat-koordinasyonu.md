---
title: "Çok Katlı Yapılarda Mekanik Şaft ve Tesisat Koordinasyonu"
description: "Yüksek katlı yapılarda düşey mekanik şaftların planlanması ve kat bazlı tesisat dağılımının BIM ile koordinasyonu."
date: 2026-05-31
tags: ["Mekanik Tesisat", "Yüksek Yapı", "BIM"]
category: "bim"
draft: false
---

Çok katlı bir yapıda mekanik tesisatın en kritik noktası, tek bir kattaki koordinasyon değil, katlar arasında dikey olarak ilerleyen şaftların doğru planlanmasıdır. Bir şaftta yapılan boyutlandırma hatası, o şaftı kullanan tüm katları etkiler; bu yüzden yüksek yapı projelerinde mekanik şaft koordinasyonu, projenin en erken ve en özenli çalışılması gereken konularından biridir. Yıllardır sahada gördüğüm kadarıyla, şaft boyutlandırması ve yerleşimi doğru yapılmayan projelerde ilerleyen fazlarda ciddi maliyetli revizyonlar kaçınılmaz oluyor. Bu yazıda, çok katlı yapılarda mekanik şaft planlamasını ve kat bazlı tesisat dağılımının BIM ile nasıl koordine edildiğini anlatacağım.

## Mekanik Şaft Planlamasının Önemi

Mekanik şaft, HVAC kanallarının, sıhhi tesisat ve yangın tesisatı borularının, bazen de elektrik hatlarının katlar arası dikey geçiş yaptığı sınırlı hacimli alanlardır. Yüksek yapılarda bu şaftların sayısı ve konumu, mimari planlama aşamasında belirlense de, gerçek boyutlandırma çoğu zaman mekanik tesisat disiplini tarafından, ilerleyen tasarım aşamalarında netleştirilir. Bu da mimari ile mekanik tesisat arasında sürekli bir denge kurma ihtiyacı doğurur; şaft ne kadar büyük olursa mekanik sistemler o kadar rahat çalışır, ama kullanılabilir alan o kadar azalır.

BIM ortamında şaft planlaması yaparken erken aşamada 3 boyutlu hacim çalışmaları yapmak büyük fayda sağlıyor. [HVAC Sistemlerinin BIM ile 3 Boyutlu Modellenmesi](/blog/hvac-sistemlerinin-bim-ile-3-boyutlu-modellenmesi) yazısında bahsettiğim gibi, kanalların gerçek boyutları ve izolasyon kalınlıklarıyla birlikte modellenmesi, şaft boyutlandırmasının gerçekçi yapılmasını sağlıyor. Sahada gördüğüm en yaygın hata, şaft boyutunun sadece kanal net kesitine göre belirlenip izolasyon, destek elemanları ve montaj toleranslarının hesaba katılmaması.

## Kat Bazlı Tesisat Dağılımının Koordinasyonu

Şaftlardan çıkan tesisat hatlarının her katta doğru şekilde dağıtılması, ayrı bir koordinasyon problemi oluşturuyor. Özellikle standart kat tipolojisine sahip yüksek yapılarda (konut kuleleri, ofis binaları gibi) her katın benzer ama birebir aynı olmayan yerleşim ihtiyaçları olabiliyor; bu da şablon bir çözümün doğrudan her kata uygulanmasını riskli hale getiriyor.

Bu konuda izlediğim pratik yaklaşım şöyle:

**Tipik Kat Modeli Oluşturma**: Standart katlar için önce bir "tipik kat" modeli hazırlanıyor ve bu model, şaft çıkışlarındaki bağlantı noktalarıyla birlikte koordine ediliyor.

**İstisna Katların Ayrıca İşlenmesi**: Mekanik oda katları, teknik katlar, zemin kat gibi standart dışı katlar ayrı olarak detaylı modelleniyor; çünkü bu katlarda genellikle şaftlardan ana dağıtım hatları çıkıyor ve yoğunluk çok daha fazla oluyor.

**Şaft Kesitlerinin Kat Bazında Kontrolü**: Her kat geçişinde şaft içindeki kanal ve boru yerleşiminin değişip değişmediği kontrol edilmeli; bazı projelerde üst katlara çıkıldıkça debi azaldığı için kanal kesitleri küçülüyor, bu da şaft içi düzenin kat kat farklılaşmasına neden olabiliyor.

**Yangın Bölmeleri ve Şaft Duvarlarının Koordinasyonu**: Şaftların yangın kompartımanlarını kestiği noktalarda, yangın durdurucu (fire stopping) detaylarının model üzerinde işaretlenmesi, uygulama aşamasında unutulmaması açısından önemli.

## Clash Detection ve Şaft Koordinasyonu

Şaft alanları, dar hacimlerde çok sayıda sistemin bir arada bulunduğu noktalar olduğu için çakışma riski en yüksek bölgelerden biridir. Bu nedenle şaft bölgelerinde clash detection sürecinin özellikle titiz yürütülmesi gerekiyor. [Clash Detection: Mekanik Tesisatta Çakışma Tespiti](/blog/clash-detection-mekanik-tesisatta-cakisma-tespiti) yazısında anlattığım genel prensipler, şaft bölgelerinde daha da kritik hale geliyor; çünkü buradaki bir çakışmanın çözümü genellikle tüm şaft düzenini etkiliyor ve tek bir katta değil, şaftı paylaşan tüm katlarda tekrar kontrol gerektiriyor.

Şantiye aşamasında bu koordinasyonun sahaya doğru aktarılması için düzenli koordinasyon toplantıları ve bulut tabanlı model paylaşımı büyük katkı sağlıyor; bu konuyu [BIM 360 ile Şantiyede Mekanik Tesisat Koordinasyonu](/blog/bim-360-ile-santiyede-mekanik-tesisat-koordinasyonu) yazısında ele almıştım.

## Yüksek Yapılarda Özel Zorluklar

Yüksek yapılarda mekanik şaft koordinasyonunu diğer projelerden ayıran birkaç önemli fark var:

**Basınç Zonlaması**: Sıhhi tesisat ve yangın tesisatında, belirli kat aralıklarında basınç düşürücü veya pompa istasyonları gerekebiliyor; bu ekipmanların yerleşimi şaft ve teknik kat planlamasını doğrudan etkiliyor.

**Termal Genleşme**: Uzun dikey boru hatlarında termal genleşme payı bırakılması gerekiyor; bu detayın modele işlenmemesi, uygulamada ciddi sorunlara yol açabiliyor.

**Yapısal Esneklik**: Yüksek yapılarda rüzgar ve deprem yükleri nedeniyle yapının hareket etmesi bekleniyor; şaft içindeki tesisatın bu harekete izin verecek şekilde desteklenmesi ve bağlanması gerekiyor.

**Bakım Erişimi**: Şaftlar genellikle dar olduğu için, işletme döneminde ekipmanlara erişim ciddi bir sorun haline gelebiliyor; bu yüzden vana, temizleme kapağı gibi bakım noktalarının kat bazında erişilebilir olması planlama aşamasında düşünülmeli.

## Sonuç ve Pratik Öneriler

Çok katlı yapılarda mekanik şaft ve tesisat koordinasyonu, projenin en erken aşamalarında ciddiyetle ele alınması gereken bir konu. BIM, bu koordinasyonu hem görsel hem de veri bazında yönetmek için güçlü bir araç sunuyor, ama asıl başarı doğru planlama disipliniyle geliyor.

- Şaft boyutlandırmasını sadece net kesit üzerinden değil, izolasyon ve montaj toleranslarını da hesaba katarak yapın.
- Tipik kat ve istisna katları ayrı ayrı, özenle modelleyin.
- Şaft bölgelerinde clash detection sürecini özellikle titiz yürütün; buradaki çakışmalar tüm katları etkileyebilir.
- Basınç zonlaması, termal genleşme ve yapısal hareket gibi yüksek yapıya özgü konuları modelleme aşamasında gözden kaçırmayın.
- Bakım erişimini şaft tasarımının ayrılmaz bir parçası olarak planlayın.
