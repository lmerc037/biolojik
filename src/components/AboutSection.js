import React from "react";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="about_img">
              <img src="assets/images/about.jpg" alt="about" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about_item_tb">
              <div className="about_item_tbcell">
                <div className="base-header base_header_left">
                  <small>Notre Raison d'être</small>
                  <h3>Planifier, acheter et cuisiner des aliments sains.</h3>
                </div>
                <div className="about_item">
                  <p>
                    Une bonne alimentation joue un rôle essentiel sur notre
                    santé. Elle diminue le risque de développer certaines
                    maladies chroniques et augmente ainsi l'espérance de vie. En
                    effet, les aliments apportent l'énergie nécessaire au bon
                    fonctionnement de nos cellules et permettent le
                    développement harmonieux de notre corps C’est pourquoi il
                    est essentiel de surveiller ce que l’on mange, tant en
                    termes de qualité que de quantité. (Alexana A.).
                  </p>

                  <p>
                    Biolojik se donne pour mission de faire la promotion de la
                    santé et du bien-être en imprégnant nos fidèles abonnés
                    d’une «Logique BIO».
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*about_wrp*/}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default AboutSection;
