import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div id="about" className="about m-4 p-4">
                <p>
                    <h1 className="coursesHeader mt-3 pt-3 pb-1">
                        HomeStudio Sahnede
                    </h1>
                </p>
                <p className="p-4 m-4">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ZbeL-tY8O5I?rel=0" allowfullscreen></iframe>
                    </div>
                    <br/>
                    <h5>
                        Stüdyomuz İstanbul'un sevilen mekanlarında konser etkinlikleri düzenlemektedir. Bireysel Atölyelere devam eden öğrencilerimizden seviyelerine uygun olarak oluşturduğumuz gruplarımız ve Grup Koçluğu Atölyesi katılımcılarımız, beraber gerçekleştirdiğimiz hazırlık ve prova süreci sonunda, bu konserlerde ve kendi özel performans etkinliklerinde sahne almaktadır.
                    </h5>
                </p>
            </div>
        )
    }
}

export default About
