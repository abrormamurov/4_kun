import React from "react";
import "./home.css";

function Home() {
  return (
    <div>
      <main className="container">
        <div className="text-img-1">
          {" "}
          <div className="text">
            <h3>Biznesingizni keyingi bosqichga olib chiqing</h3>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.{" "}
              <br /> Nam facilisis lacinia ex, eget sollicitudin massa
              pellentesque <br /> in. Vivamus mattis eros at sem pulvinar
            </p>
            <button>Xizmatlar bilan tanishish</button>
          </div>
          <div className="img">
            <img src="./images/qizdi.png" alt="" width={458} height={258} />
          </div>
        </div>
        <div className="hizmatlar">
          <h4>Xizmatlar</h4>
          <p>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget <br /> sollicitudin massa pellentesque
            in. Vivamus mattis eros at sem pulvinar
          </p>
        </div>
        <div className="rek">
          <div className="rek-2">
            <div className="img-1">
              <img src="./images/main-1.png" alt="" width={203} height={130} />
              <h5>Vebsayt tuzish</h5>
              <p className="img-1__p">lorem ipsum</p>
            </div>
            <div className="img-1">
              <img src="./images/main-2.png" alt="" width={203} height={130} />
              <h5>Telegram bot </h5>
              <p className="img-1__p">lorem ipsum</p>
            </div>
            <div className="img-1">
              <img src="./images/main-3.png" alt="" width={203} height={130} />
              <h5>SMM </h5>
              <p className="img-1__p">lorem ipsum</p>
            </div>
          </div>
          <div className="rek-3">
            {" "}
            <div className="img-1">
              <img src="./images/main-4.png" alt="" width={203} height={130} />
              <h5>Grafik dizayn</h5>
              <p className="img-1__p">lorem ipsum</p>
            </div>
            <div className="img-1">
              <img src="./images/main-5.png" alt="" width={203} height={130} />
              <h5>CRM tizimlar </h5>
              <p className="img-1__p">lorem ipsum</p>
            </div>
          </div>
          <button>Buyurtma berish</button>
          <a href="">Xizmatlar sahifasiga o’tish</a>
        </div>
        <div className="hizmatlar-1">
          <h4 className="biz">Biz qanday ishlaymiz?</h4>
          <p>
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
            facilisis lacinia ex, eget <br /> sollicitudin massa pellentesque
            in. Vivamus mattis eros at sem pulvinar
          </p>
        </div>
        <div className="text-img">
          <img src="./images/2-1.png" alt="" width={300} height={278} />
          <div className="text-1">
            <h3>Talablarni aniqlab chiqamiz</h3>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.{" "}
              <br /> Nam facilisis
            </p>
          </div>
        </div>
        <div className="text-img">
          <div className="text-1 r-1">
            <h3> Bir necha yechimlarni taklif qilamiz</h3>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.{" "}
              <br /> Nam facilisis
            </p>
          </div>
          <img src="./images/2-2.png" alt="" width={300} height={224} />
        </div>
        <div className="text-img">
          <img src="./images/2-3.png" alt="" width={300} height={258} />
          <div className="text-1">
            <h3>Loyiha uchun vaqt belgilaymiz</h3>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis
            </p>
          </div>
        </div>
        <div className="text-img">
          <div className="text-1 r-1">
            <h3> A’lo sifat bilan bajarib topshiramiz</h3>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis
            </p>
          </div>
          <img src="./images/2-4.png" alt="" width={300} height={171} />
        </div>
        <div className="text-img">
          <img src="./images/2-5.png" alt="" width={300} height={232} />
          <div className="text-1">
            <h3>Qo’llab-quvvatlab boramiz</h3>
            <p>
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis
            </p>
          </div>
        </div>
        <button className="btn">Buyurtma berish</button>
        <div className="main-footer">
          <div className="hizmatlar-1">
            <h4 className="biz main-footer-text-1">Buyurtma berish</h4>
            <p className="main-footer-text-2">
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis lacinia ex, eget <br /> sollicitudin massa
              pellentesque in. Vivamus mattis eros at sem pulvinar
            </p>
          </div>
          <div className="card">
            <button className="btn-footer">Ismingiz</button>
            <button className="btn-footer">Telefon raqamingiz</button>
            <button className="btn-footer">Xizmat turi</button>
            <button className="btn-footer-2">Buyurtma berish</button>
          </div>
        </div>
        <div className="container footer">
          <div className="ob">
            <div className="null">
              <h4>Copyright 2020</h4>
              <p>
                Nullam laoreet nec turpis et ultrices. Duis <br /> sit amet quam
                arcu. Nam facilisis lacinia <br /> ex, eget sollicitudin massa
                pellentesque in. <br /> Vivamus mattis eros at sem pulvinar{" "}
                <br /> tincidunt.
              </p>
            </div>
            <div className="linklar">
              <h4>Sayt sahifalari</h4>
              <a href="">Bosh sahifa</a>
              <a href="">Xizmatlar</a>
              <a href="">Portfolio</a>
              <a href="">Jamoa</a>
              <a href="">Blog</a>
              <a href="">Kontaktlar</a>
            </div>
            <div className="internet">
              <h4>Biz internetda</h4>
              <a className="tg" href="">
                <div className="tg">
                  <img src="./images/telegram.svg" alt="" />
                  <p> telegaram</p>{" "}
                </div>
              </a>
              <a className="tg" href="">
                <div className="tg">
                  <img
                    src="./images/facebook.png"
                    alt=""
                    width={22}
                    height={24}
                  />
                  <p> facebook</p>{" "}
                </div>
              </a>
              <a className="tg" href="">
                <div className="tg">
                  <img src="./images/instagram.svg" alt="" />
                  <p> instagram</p>{" "}
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
