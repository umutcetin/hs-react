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
                imgSrc: 'davul1.jpg',
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
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            }, 
            {
                id: 9,
                title: 'Solfej ve Kulak Eğitimi',
                modalTitle: 'ÇELLO ATÖLYESİ',
                iconSrc: "icon-kulak.png",
                imgSrc: 'icon-cello.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            }, 
            {
                id: 10,
                title: 'Şarkı Yazma Atölyesi',
                modalTitle: 'ÇELLO ATÖLYESİ',
                iconSrc: "icon-yaz.png",
                imgSrc: 'icon-cello.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            }, 
            {
                id: 11,
                title: 'Repertuar Atölyesi ve Sahne Koçluğu',
                modalTitle: 'ÇELLO ATÖLYESİ',
                iconSrc: "icon-sahne.png",
                imgSrc: 'icon-cello.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            }, 
            {
                id: 12,
                title: 'Bilgisayar ile Müzik ve Prodüksiyon',
                modalTitle: 'ÇELLO ATÖLYESİ',
                iconSrc: "icon-prod.png",
                imgSrc: 'icon-cello.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            }, 
            {
                id: 13,
                title: 'Armoni ve Müzik Teorisi',
                modalTitle: 'ÇELLO ATÖLYESİ',
                iconSrc: "icon-armoni.png",
                imgSrc: 'icon-cello.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            }, 
            {
                id: 14,
                title: 'Ritim Atölyeleri',
                modalTitle: 'ÇELLO ATÖLYESİ',
                iconSrc: "icon-ritim.png",
                imgSrc: 'icon-cello.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            }, 
            {
                id: 15,
                title: 'Yetenek Sınavlarına Hazırlık',
                modalTitle: 'ÇELLO ATÖLYESİ',
                iconSrc: "icon-sinav.png",
                imgSrc: 'icon-cello.png',
                modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
            }
        ]
    }

    render() {
        return (
            <div id="sect01" className="container mt-4 pt-5">
                <h1 className="coursesHeader">Atölyeler</h1>
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
