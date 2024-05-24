import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            tr: {
                translations: {
                    "Home": "Ana Sayfa",
                    "Shopping": "Alışveriş",
                    "Campaign": "Kampanyalar",
                    "about": "Hakkımızda",
                    "service": "Hizmetlerimiz",
                    "contact": "İletişim",
                    "car": "Araç Parkuru",
                    "info": "Daha Fazla Bilgi Almak İçin",
                    "sektör": "Sektörün Önde Gelenlerinden",
                    "faaliyet": "Faaliyet Alanları",
                    "oztopcular": "Öztopçular Hafriyat Olarak",
                    "building": "İnşaat",
                    "activity": "Faaliyetleri",
                    "energy": "Enerji",
                    "oz1": "Oztopcular akaryakıt satış ve işletmeciliği, sigorta ve aracılık hizmetleri, danışmanlık ve ticaret alanlarında faaliyet gostermekteyiz.",
                    "oz2": "Dünya ve ülkemizin giderek artan enerji ihtiyacına yönelik Uluslar arası ve bölgesel çalışmaların değerlendirilmesi alanlarında calısmaktayız.",
                    "oz3": "Oztopcular Akaryakıt alanında da sizler için en güvenilir hizmetini İstanbul bölgelerimizde çalışma faailiyetleri göstermekteyiz.",
                    "oz4": "Oztopcular olarak çeşitli araçlarımız ve iş makinelerimiz ile sizler için en pratik ve iyi hizmeti verip bu alanda sektörde sayılı faliyetler göstermekteyiz.",
                    "yakit": "Akaryakıt Dagılım",
                    "merak": "Merak Ettikleriniz İçin",
                    "mail": "Bize Mail Atabilirsiniz",
                    "gönder": "Gönder",
                    "mark": "Hafriyat Sektöründe Önde Gelen Bir Markayız",
                    "mailsuc": "Mailiniz başarıyla gönderilmiştir...",
                    "close": "Kapat",
                    "title": "a",
                    "karayolu": "Karayolları ve Köprüler",
                    "karayoludesc": "Karayolları Köprü ve Tünel projelerimiz ile hizmetinizdeyiz !",
                    "metro": "Metro Projeleri",
                    "metrodesc": "Metro projelerimiz ile hizmetinizdeyiz !",
                    "hava": "Havaalanı Projeleri",
                    "havadesc": "Havaalanı projelerimiz ile hizmetinizdeyiz !",
                    "reference": "Referanslarımız",
                    "ozex1": "İnşaat bölgesinde yapacağımız çalışmalarda bölge halkına zarar vermeyecek şekilde ve en üst seviyede güvenlik ortamında gerçekleştirmek, yasal gerekliliklerden taviz vermeden insanlara ve çevreye saygılı temeller oluşturmak , müşterilerimize daima dürüst olmak ve onların isteklerinden sapma yapmamak temel ilkemizdir. Öztopçular Hafriyat’ın geleceğe dair vizyonu’nu oluşturmaktadır.",
                    "gayrimenkul": "Gayrimenkul",
                    "nakliyat": "Nakliyat",
                    "beton": "Beton",
                    "ozgex2": "İnşaat bölgesinde yapacağımız çalışmalarda bölge halkına zarar vermeyecek şekilde ve en üst seviyede güvenlik ortamında gerçekleştirmek, yasal gerekliliklerden taviz vermeden insanlara ve çevreye saygılı temeller oluşturmak , müşterilerimize daima dürüst olmak ve onların isteklerinden sapma yapmamak temel ilkemizdir. Öztopçular Hafriyat’ın geleceğe dair vizyonu’nu oluşturmaktadır.",
                    "abouts": "Hafriyat sektöründe önde gelen firmalarından Öztopçular Hafriyat 1983 yılında sektöre adım attı. Bağcılar merkezde kurulan firma 1995 yılında Öztopçular Hafriyat adıyla limited şirkete dönüştü. Dünya standartlarına uygun iş makineleriyle performansını daima en üst seviyede tuttu. Hafriyat sektörü ile ilgili dünyadaki tüm yenilik ve gelişmeleri yakından takip edip, etkin bir biçimde sistemlerini entegre eden Öztopçular Hafriyat, kalite, etkinlik süreklilik ve ekonomik olmayı çizgisinin vazgeçilmez ana usunusu kabul etmektedir. Kaliteli, özenli hizmet ve müşteri memnuniyeti ilkeleri ile kısa sürede önemli mesafeler kaydeden Öztopçular Hafriyat büyük projelere imza attı. Kısa zamanda yakalanan bu başarının sırrı ise firmanın referanslarıdır. Öztopçular sektörün önde gelen isimlerinden biridir.Misyonumuz ve Vizyonumuz İnşaat bölgesinde yapacağımız çalışmalarda bölge halkına zarar vermeyecek şekilde ve en üst seviyede güvenlik ortamında gerçekleştirmek, yasal gerekliliklerden taviz vermeden insalara ve çevreye saygılı temeller oluşturmak , Müşterilerimize daima dürüst olmak ve onların isteklerinden sapma yapmamak temel ilkemizdir. “Öztopçular Hafriyat’ın geleceğe dair vizyonu’nu oluşturmaktadır.",
                    "tel": "Telefon",
                    "adres": "Adres",
                    "ad": "Ad & Soyad",
                    "subject": "Konu",
                    "mesaj": "Mesaj",
                }
            },
            en: {
                translations: {
                    "Home": "Home",
                    "Shopping": "Shopping",
                    "Campaign": "Campaign",
                    "about": "About Us",
                    "service": "Services",
                    "contact": "Contact Us",
                    "car": "Vehicle Track",
                    "info": "To Get More Information",
                    "sektör": "One of the Leaders in the Industry",
                    "faaliyet": "Fields of Activity",
                    "oztopcular": "Öztopçular as Excavating",
                    "building": "Building",
                    "activity": "Activities",
                    "energy": "Energy",
                    "oz1": "Oztopcular, we operate in the fields of fuel sales and management, insurance and brokerage services, consultancy and trade.",
                    "oz2": "We work in the fields of evaluating international and regional studies for the increasing energy needs of the world and our country.",
                    "oz3": "We provide the most reliable service for you in the field of Oztopcular Fuel Oil, operating in our Istanbul regions.",
                    "oz4": "As Oztopcular, we provide you with the most practical and best service with our various vehicles and work machines, and we have a number of activities in this field in the sector.",
                    "yakit": "Fuel Distribution",
                    "merak": "For Your Questions",
                    "mail": "You can send us an e-mail",
                    "gönder": "Send",
                    "mark": "We are a Leading Brand in the Excavation Industry",
                    "mailsuc": "Your email has been sent successfully...",
                    "close": "Close",
                    "title": "b",
                    "karayolu": "Highways and Bridges",
                    "karayoludesc": "We're at your service with our Highway Bridge and Tunnel projects!",
                    "metro": "Metro Projects",
                    "metrodesc": "We're at your service with our Metro projects!",
                    "hava": "Airport Projects",
                    "havadesc": "We're at your service with our Airport projects!",
                    "reference": "Our References",
                    "ozex1": "Our basic principle is to carry out the work we will do in the construction zone in a way that does not harm the people of the region and in the highest level of safety environment, to create foundations that respect people and the environment without compromising legal requirements, to always be honest with our customers and not to deviate from their wishes. Öztopçular constitutes Hafriyat's vision for the future.",
                    "gayrimenkul": "Real estate",
                    "nakliyat": "Transportation",
                    "beton": "Concrete",
                    "ozgex2": "Our basic principle is to carry out the work we will do in the construction zone in a way that does not harm the people of the region and in the highest level of safety environment, to create foundations that respect people and the environment without compromising legal requirements, to always be honest with our customers and not to deviate from their wishes. Öztopçular constitutes Hafriyat's vision for the future.",
                    "abouts": "Oztopçular Hafriyat, one of the leading companies in the excavation sector, stepped into the sector in 1983. The company, which was established in the center of Bağcılar, turned into a limited company under the name Öztopçular Hafriyat in 1995. It has always kept its performance at the highest level with work machines that comply with world standards. All the innovations in the world regarding the excavation sector Öztopçular Hafriyat, which closely follows the developments and integrates its systems effectively, accepts quality, efficiency, continuity and economy as the indispensable main principles of its line. Öztopçular Hafriyat, which has made significant progress in a short time with the principles of quality, attentive service and customer satisfaction, has undertaken major projects. The secret of this success achieved in a short time is the references of the company. Öztopçular is one of the leading names in the sector. Our Mission and Vision: To carry out the works we will do in the construction area in a way that does not harm the people of the region and in the highest level of safety environment, to create foundations that respect people and the environment without compromising legal requirements, to always serve our customers. Our basic principle is to be honest and not deviate from their wishes. Öztopçular constitutes Hafriyat's vision for the future.",
                    "tel": "Phone",
                    "adres": "Address",
                    "ad": "Name & Surname",
                    "subject": "Subject",
                    "mesaj": "Message",
                }
            }
        },
        lng: "tr",
        fallbackLng: "tr",
        debug: false,

        ns: ["translations"],
        defaultNS: "translations",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;