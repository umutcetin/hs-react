import React, { Component } from 'react';
import Course from './CourseItem';

class Courses extends Component {
    state = {
        courses: [
            {
                id: 1,
                title: 'Davul',
                modalTitle: 'CENK ÜNNÜ VE BURAK KARATAŞ İLE BATERİ ATÖLYESİ',
                iconSrc: "icon-davul.png",
                imgSrc: 'davul02.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            },
            {
                id: 2,
                title: 'Bas',
                modalTitle: 'BUKET DORAN İLE BAS GİTAR ATÖLYESİ',
                iconSrc: "icon-bas.png",
                imgSrc: 'modalbas.jpg',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            },
            {
                id: 3,
                title: 'Gitar',
                modalTitle: 'GİTAR ATÖLYESİ - ELEKTRO - AKUSTİK - KLASİK - CAZ - POP',
                iconSrc: "icon-gitar.png",
                imgSrc: 'e06.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            },
            {
                id: 4,
                title: 'Piyano ve Rock Klavye',
                modalTitle: 'PİYANO VE ROCK KLAVYE ATÖLYESİ',
                iconSrc: "icon-piyano.png",
                imgSrc: 'e03.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            },
            {
                id: 5,
                title: 'Flüt',
                modalTitle: 'FLÜT ATÖLYESİ',
                iconSrc: "icon-flut.png",
                imgSrc: 'icon-flut.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            },
            {
                id: 6,
                title: 'Keman',
                modalTitle: 'KEMAN ATÖLYESİ',
                iconSrc: "icon-keman.png",
                imgSrc: 'icon-keman.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            },
            {
                id: 7,
                title: 'Çello',
                modalTitle: 'ÇELLO ATÖLYESİ',
                iconSrc: "icon-cello.png",
                imgSrc: 'icon-cello.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            },
            {
                id: 8,
                title: 'Şan ve Vokal Teknikleri',
                modalTitle: 'ÇELLO ATÖLYESİ',
                iconSrc: "icon-vokal.png",
                imgSrc: 'icon-vokal.png',
                modalText: 'Eğitim programı; farklı seviyeler için hazırlanmış uygun çalışma programları ve temel teknikler eşliğinde, öğrencinin vizyon, istek, algı, seviye ve yetenek durumuna göre kişiye özel olarak planlanırve uygulanır. Şan ve vokal dinamikleri üzerine çalışarak, herhangi bir tarz göz etmeden öncelikle doğru ve sağıklı bir ses tekniği edindirmek, var olan kapasite ve performansı arttırmak, sonrasında yapılan çalışma, bilgilendirme ve uygulamalar doğrultusunda, iyi bir vokal için gereken her konuda donanım kazandırmak hedeflenmektedir.<br/>Vokal ve stil anlamında, özellikle bir müzik tarzı (pop, rock, funk, r&b, müzikal...) üzerine yoğunlaşarak çalışmak, sahne ve stüdyo performanslarını geliştirmek isteyenler için de uygun çalışmalar yapılmaktadır.<br/>Atölyelerimiz, haftada bir gün bir saat olmak üzere aylık toplam 4 saattir, birebir özel ders şeklinde gerçekleşmektedir.'
            }, 
            {
                id: 9,
                title: 'Solfej ve Kulak Eğitimi',
                modalTitle: 'SOLFEJ VE KULAK EĞİTİMİ',
                iconSrc: "icon-kulak.png",
                imgSrc: 'icon-kulak.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda, her yaş grubundan katılımcılar hobi amaçlı olarak, amatör düzeyde veya profesyonel düzeyde eğitim alabilmektedir. Eğitim programı; farklı seviyeler için hazırlanmış uygun çalışma programları ve temel teknikler eşliğinde, öğrencinin vizyon, istek, algı, seviye ve yetenek durumuna göre kişiye özel olarak planlanır ve uygulanır.<br/>Solfej ve kulak eğitimi, her müzisyenin sahip olması gereken temel bilgi ve becerileri kazandırmayı amaçlamaktadır. Katılımcıların müzikal algılarını geliştirmek, nota okumayı ve yazmayı öğretmek, notalar arasındaki ilişkileri tanıtmak, bu ilişkilerin duyum yoluyla anlaşılabilir olmasını sağlamak, ritim duygusunu geliştirmek için gereken teorik ve pratik çalışmalar üzerine yoğunlaşılmaktadır. Konservatuar ve diğer kurumların müzik bölümleri yetenek sınavlarına hazırlanmak isteyenler için de, hedefledikleri bölümün güncel gereklilikleri doğrultusunda temel eğitim üzerine bir program hazırlanmakta, işitme, ses verme, nota okuma ve yazma, melodik ve ritmik hafızayı geliştirme üzerine solfej, dikte, deşifre çalışmaları yapılmaktadır.<br/>Haftada bir gün bir saat özel ders şeklinde gerçekleşen çalışmalarımız için talep doğrultusunda 2 veya 3 kişilik sınıflar da oluşturulabilmektedir'
            }, 
            {
                id: 10,
                title: 'Şarkı Yazma Atölyesi',
                modalTitle: 'ŞARKI YAZMA VE SÖYLEME ATÖLYESİ',
                iconSrc: "icon-yaz.png",
                imgSrc: 'icon-yaz.png',
                modalText: 'Bu atölyemizden enstrüman çalan, şarkı söyleyen, yaratıcılıklarını geliştirmek, biriktirdiklerini şarkı yazarak, beste yaparak paylaşmak ve kendilerini müzik ile ifade etmek isteyen tüm müzisyenler yararlanabilir.<br/>Bilindiği gibi dünyanın birçok sayılı konservatuarında eğitimi verilen atölye, temel müzik teorisi, armoni ve kompozisyon kurallarını öğretmenin yanında, öğrencilerin kısa yoldan kendi müziklerini yazmalarına, kayıt yapabilmelerine ve şarkı söylemelerine yöneliktir. Geniş bir müzikal yelpaze içerisinde (caz, rock, soul, klasik...) şarkıların temaları, melodik ve ritmik yapıları, sözleri, düzenlemeleri, formları üzerinde incelemeler ve analizler yaparken, duygu ve fikirlerin nasıl etkileyici bir şekilde biraraya getirilmesi gerektiği üzerine çalışılmaktadır. Kazanılan bilgi ve müzikal beceriler ile müziğe dair edinilen bu yeni perspektif üretim aşamasında yol gösterecek ve müziği şekillendirecektir.<br/>Çalışmalarımız haftada bir gün bir saat özel ders şeklinde gerçekleşmektedir.'
            }, 
            {
                id: 11,
                title: 'Repertuar Atölyesi ve Sahne Koçluğu',
                modalTitle: 'REPERTUAR ATÖLYESİ VE SAHNE KOÇLUĞU',
                iconSrc: "icon-sahne.png",
                imgSrc: 'icon-sahne.png',
                modalText: 'Bu atölyemizden kişisel bilgi ve becerilerini geliştirmek, diğer müzisyenlerle, bir grup içerisinde uyumlu bir birliktelik yakalamak isteyen, seçtikleri tarzlarda efektif ve kendilerine uygun olan geniş bir repertuar edinmek, sahne performanslarını geliştirmek isteyen, amatör veya profesyonel tüm müzisyenler yararlanabilir.<br/> Eğitmenlerimizin koçluğunda, enstrüman çalma ya da şarkı söyleme üzerine, var olan veya seçilen bireysel repertuarın icrasına yönelik teorik ve pratik çalışmalar, sahne performansı ile ilgili çok yönlü teknik uygulama ve bilgilendirmeler üzerine yoğunlaşılmaktadır. Katılımcılar kısa sürede kendi yetenekleri ve yapabileceklerinin farkına vararak, kendilerini daha rahat hissettikleri, doğru ve etkileyici bir müzikal ifade ve duruşa kavuşmakta, yorumlama ve duyguyu aktarabilme becerileri ve performansları gelişmekte, müzik yapmak ve paylaşmak hem onlar hem de dinleyenleri için daha keyifli ve etkileyici hale gelmektedir.<br/> Atölyelerimiz, haftada bir gün bir saat olmak üzere aylık toplam 4 saattir, birebir özel ders şeklinde gerçekleşmektedir.'
            }, 
            {
                id: 12,
                title: 'Bilgisayar ile Müzik ve Prodüksiyon',
                modalTitle: 'BİLGİSAYAR İLE MÜZİK VE PRODÜKSİYON',
                iconSrc: "icon-prod.png",
                imgSrc: 'icon-prod.png',
                modalText: 'Herhangi bir tür veya tarz ile sınırlandırmadan istenilen müziği  daha detayılı öğrenmek ve üretmek,  kayıt altına alma teknikleri ile ilgili çalışmalar yapmak isteyen amatör veya profesyonel her müzisyenin, ses mühendisliği ve müzik teknolojileri bölümleri giriş sınavlarına hazırlanmak isteyen adayların katılabileceği bir programdır. Katılımcıların gereksinim ve hedefleri doğrultusunda kişiye özel bir çalışma programı oluşturulmaktadır.<br/> Bu atölyemizde, müzik teori ve armoni, temel ses ve akustik bilgileri, müzik programları ve yazılımlarını kullanma, bilgisayar ile müzik yapımı ve düzenleme, proje geliştirme ve prodüksiyon, ekipman ve enstrüman seçimi, kullanımı  üzerine teorik ve pratik çalışmalar yapma imkanı sunularak herkesin hedeflediği proje üzerinde rahatlıkla çalışabilmesi, teknik süreci hızlandırarak üretim kalitesinin yükseltilmesi, vizyonlarının genişletilmesi ve kendi kendine yeterliliklerinin arttırılması hedeflenmiştir.<br/> Haftada bir gün bir saat özel ders şeklinde gerçekleşen çalışmalarımız için talep doğrultusunda 2 veya 3 kişilik sınıflar da oluşturulabilmektedir. <br/>CANLI ELEKTRONİK MÜZİK VE PRODÜKSİYON<br/>Başlangıç ve ileri seviyelerde canlı elektronik müzik, performans, prodüksiyon üzerine kişiye özel yoğunlukta ve içerikte bir programdır. Öğrencinin beklentilerine ve yapmak istediklerine göre esnek bir program olması yanında, bilgisayar müziği, prodüksiyon ve canli performans öğretileri  ile beraber temel müzik bilgisi, kültürü,  dinleme egzersizlerini beraberinde yürütür.<br/> Katılımcılarımızın kendi müzikleri ve performansları; yazılım kullanmayı öğrenmek ve müzik üzerine düşünmek ekseninde sürekli bir eşzamanlılıkta üretilmektedir.<br/> Canlı elektronikler kısmında, bilgisayarı bir enstruman olarak kullanmayı öğrenirken, ilerleyen zamanlarda stüdyomuzdaki diğer enstruman dersi alan öğrencilerle gruplar kurup beraber çalmak da hedefler arasındadır.'
            }, 
            {
                id: 13,
                title: 'Armoni ve Müzik Teorisi',
                modalTitle: 'ARMONİ VE MÜZİK TEORİSİ',
                iconSrc: "icon-armoni.png",
                imgSrc: 'icon-armoni.png',
                modalText: 'Müzikle farklı düzeylerde ilgilenmekte olup müzikal yetkinliklerini ve hakimiyetlerini geliştirmek isteyen herkesin katılabileceği bu atölyemizde, müzik teorisi ve armoni konularında katılımcıların ihtiyaçlarına uygun bir program hazırlanmaktadır. Müzikle ilgili bir bölümde okumakta olan, bir enstrüman çalmakta ancak bu konularda hiç bilgisi olmayan müzisyenler, müzik bölümleri özel yetenek sınavlarına hazırlanmak isteyen ya da temel bilgi ve becerilerini ilerletmek, müzikle ilgilenme yöntemlerini geliştirmek, aranjman ve kompozisyona yönelik çalışmalar yapmak isteyen katılımcılar ile haftada bir gün bir saat özel ders şeklinde çalışılmaktadır. Talep doğrultusunda 2 veya 3 kişilik sınıflar da oluşturulabilmektedir.'
            }, 
            {
                id: 14,
                title: 'Ritim Atölyeleri',
                modalTitle: 'RİTİM ATÖLYELERİ',
                iconSrc: "icon-ritim.png",
                imgSrc: 'icon-ritim.png',
                modalText: 'Müzik, insanların bireysel gelişimine, kendilerini farklı şekillerde ifade etmelerine, ilerlemelerine, fiziksel ve duygusal anlamda iyi hissetmelerine yardımcı olarak hayatımızda önemli yer kaplamaktadır. Bu çalışmaları bir grup içerisinde gerçekleştirmek, beraber aynı hedefe ulaşmaya çalışmak, koordine olmak ve ortaya çıkan sonucu ve duyguyu gruptakilerle ve sonunda izleyenlerle paylaşmak apayrı bir keyif ve çok değişik bir tecrübe olacaktır. Sonuçları gördükçe bırakmak istemeyeceğiniz bir birliktelik.<br/> Ritim; farkında olmasak bile hayatın her anında önemli bir yer kaplayanan, kendini hissettiren, müziğin ve bedenimizin en temel unsurlarından biridir. Kendi bedenimizin ritmini tanımak, farklı kültürlere ait duygu ve ritmlerle tanışmak, bedenimizi ve çeşitli vurmalı çalgıları kullanmayı öğrenerek beraberce ortaya bir müzik çıkarmak hem çok rahatlatıcı ve eğlencelidir hem de ritm duygusunu geliştirecektir.<br/> Bu çalışmalar, farklı insanları bir araya getirerek uyum içerisinde güzel bir paylaşım yaşamalarına, yaratıcılıklarını geliştirerek kendilerini ifade etmelerine olanak sağlayacaktır. Ritm duygusunu keşfettikten sonra ritme ayak uydurarak içinde yer almak, beraber eşlik edebilmek fiziksel ve ruhsal açılardan dengeliyici ve dinlendirici olacaktir.<br/> Haftada bir gün olan çalışmalar için, kendi oluşturduğunuz gruplar ile stüdyomuza gelebilir, bizim oluşturacağımız gruplara katılabilir ya da sizin yerinize gelen eğitimcilerimiz ile yapacağınız çalışmalarla stresten uzak size ait özel bir zaman geçirebilir, özel performanslara hazırlanabilirsiniz.'
            }, 
            {
                id: 15,
                title: 'Yetenek Sınavlarına Hazırlık',
                modalTitle: 'YETENEK SINAVLARINA HAZIRLIK',
                iconSrc: "icon-sinav.png",
                imgSrc: 'icon-sinav.png',
                modalText: 'Bu eğitim programı, müziğin herhangi bir dalında eğitim almak için tercih ettikleri kurumların özel yetenek sınavlarına hazırlanmak isteyen tüm adaylar içindir. Devlet konservatuarları ve özel konservatuarlar, müzik eğitim fakülteleri, güzel sanatlar ve sahne sanatları fakülteleri, özel öğretim kurumları ve anadolu güzel sanatlar liseleri gibi farklı kurumların ilk,orta öğretim ve lisans düzeylerinde, tam veya yarı zamanlı değişik programları bulunmaktadır. Sınırlı kontenjanları bulunan bu kurumlar farklı yönetmelikleri doğrultusunda içerikleri değişiklik gösteren yetenek sınavları hazırlamaktadırlar.<br/> İlgilenen adaylar piyano, klasik gitar, flüt, keman gibi çeşitli enstrümanlara yönelik çalgı eğitimi, şan eğitimi, opera, müzikal, ses mühendisliği ve müzik teknolojileri, duysal sanatlar tasarımı, temel bilimler, müzik bilimleri, müzik öğretmenliği gibi farklı bölümler arasından tercihlerini yaptıktan sonra giriş sınavı için yeterlilik kazanmak üzere eğitmenlerimiz tarafından hazırlanmaktadır. Adayların ilgilendiği bölümlerin sınav gereklilikleri doğrultusunda temel müzik bilgileri, kulak eğitimi, şan, solfej, deşifre, dikte, ritim ve melodi hafızaları, müzik tarihi ve form bilgisi, müzik teorisi ve armoni üzerine, teorik ve uygulamalı çalışmalar yapmak üzere özel ders olarak gerçekleşen kişiye özel bir eğitim programı hazırlanmaktadır.'
            }
        ]
    }

    render() {
        return (
            <div id="sect01" className="container mt-4 pt-5">
                <h1 className="coursesHeader mt-3 pt-3 pb-2">Atölyeler</h1>
                <div className="row">
                    {this.renderCourses()}
                </div>
            </div>
        )
    }

    renderCourses() {
        return this.state.courses.map((course) => (
            <Course key={course.id} course={course} />
        ));
    }
}

export default Courses;
