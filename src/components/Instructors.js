import React, { Component } from 'react'
import Instructor from  './InstructorItem';

export class Instructors extends Component {
    state = {
        instructors: [
          {
            id: 16,
            title: 'Buket Doran',
            modalTitle: 'Buket Doran Modal Title',
            iconSrc: "e01.png",
            imgSrc: 'e01.png',
            modalText: 'Başlangıç ve ileri seviyeler olmak üzere farklı programların yer aldığı stüdyomuzda; haftada bir gün buluşuyor, birlikte, kişiye özel yoğunlukta ve içerikte bir çalışma programı hazırlıyoruz.<br/>Biraz yol aldıktan sonra, öğrendiklerimizi ve hissettiklerimizi hayata geçirmek üzere, farklı enstrümanlardan oluşan gruplar halinde stüdyomuzda birlikte çalıyor olacağız. Ayrıca HomeStudio olarak yılda iki kere düzenlediğimiz konser gecelerinde, bu çalışmaları sergilemek üzere tüm öğrencilerimiz sahne almaktalar.<br/>Armoni, teori bilgisi ve müzik kültürü, teknik çalışmalarla birlikte ilk günden itibaren parça çalabilme üzerine de yoğunlaşıyoruz. İyi bir dinleyici, istediğimiz gibi iyi bir katılımcı ve başarılı bir müzisyen olmaya doğru yola çıkıyoruz.'
          },
          {
            id: 17,
            title: 'Cenk Ünnü',
            modalTitle: 'Inst 2 Title',
            iconSrc: "e02.png",
            imgSrc: 'e02.png',
            modalText: 'Inst 2<br/> 3232  '
          },
          {
            id: 18,
            title: 'İlkay Özboyar',
            modalTitle: 'Inst 3 Modal Title',
            iconSrc: "e03.png",
            imgSrc: 'e03.png',
            modalText: 'Inst 3'
          },
          {
            id: 19,
            title: 'Can Bora Genç',
            modalTitle: 'Inst 3 Modal Title',
            iconSrc: "e04.png",
            imgSrc: 'e04.png',
            modalText: 'Inst 3'
          },
          {
            id: 20,
            title: 'Burak Karataş',
            modalTitle: 'Inst 3 Modal Title',
            iconSrc: "e05.png",
            imgSrc: 'e05.png',
            modalText: 'Inst 3'
          },
          {
            id: 21,
            title: 'Erdem Karaman',
            modalTitle: 'Inst 3 Modal Title',
            iconSrc: "e06.png",
            imgSrc: 'e06.png',
            modalText: 'Inst 3'
          },
          {
            id: 22,
            title: 'Murat İlkan',
            modalTitle: 'Inst 3 Modal Title',
            iconSrc: "e07.png",
            imgSrc: 'e07.png',
            modalText: 'Inst 3'
          },
          {
            id: 23,
            title: 'Ahmetcan Gökçeer',
            modalTitle: 'Inst 3 Modal Title',
            iconSrc: "e08.png",
            imgSrc: 'e08.png',
            modalText: 'Inst 3'
          },
          {
            id: 24,
            title: 'Cenk Sarkuş',
            modalTitle: 'Inst 3 Modal Title',
            iconSrc: "e09.png",
            imgSrc: 'e09.png',
            modalText: 'Inst 3'
          },
          {
            id: 25,
            title: 'Göksu Hazal Subaşı',
            modalTitle: 'Inst 3 Modal Title',
            iconSrc: "e10.png",
            imgSrc: 'e10.png',
            modalText: 'Inst 3'
          },
          {
            id: 26,
            title: 'Ceren Akyıldız',
            modalTitle: 'Inst 3 Modal Title',
            iconSrc: "e11.png",
            imgSrc: 'e11.png',
            modalText: 'Inst 3'
          },
          {
            id: 27,
            title: 'Beril Özortakcı',
            modalTitle: 'Inst 3 Modal Title',
            iconSrc: "e12.png",
            imgSrc: 'e12.png',
            modalText: 'Inst 3'
          }
        ] 
      }

    render() {
        return (
            <div id="sect03" className="container text-center rounded bg-light mt-4 pt-5">
                <h1 className="instructorsHeader">Eğitmenler</h1>
                <div className="row justify-content-center">
                    {this.renderInstructors()}
                </div>
            </div>
        )
    }

    renderInstructors() {
        return this.state.instructors.map((instructor) => (
            <Instructor key={instructor.id} instructor={instructor} />
        ));
    }
}

export default Instructors
