<template>
  <div class="about">
    <center>
      <img id="logo" src="@/assets/ysc-1.png" />
    </center>
    <h1>APA ITU YOUNG STAR CHAMPIONSHIP</h1>
    <p id="p-1">
      Pandemi Covid 19 bukan hanya menimbulkan dampak serius terhadap Kesehatan,
      tetapi dunia pendidikan menerima pukulan berat karena keriuhan dunia
      pelajar terhenti seketika dan digantikan dengan KBM daring. Perubahan
      mendadak ini ditakutkan akan menghasilkan generasi rebahan di masa depan.
      Terhentinya aktivitas KBM juga menghentikan aktivitas ekstra kurikuler dan
      ajang kompetisi di kalangan Pelajar. Young Star Championship adalah
      platform kompetisi digital yang memfasilitasi perlombaan olahraga, seni
      dan e-sport antar pelajar yang dilakukan dalam panggung virtual. YSC
      menyelenggarakan berbagai lomba seni, seperti: Baca Puisi, Pidato, Speech
      Contest, Story Telling, Nyanyi, Monolog, Acting, Pantomim, tari
      Tradisional, Modern dance atau lomba koreografi bebas. YSC
      menyelenggarakan lomba keagamaan, seperti: Musabaqoh Tilawatil Qur’an,
      Sholawat, Musikaliasai Mazmur, Lomba Membaca Kitab Suci atau Lektor. YSC
      juga menjadi ajang perlombaan olah raga seperti: Keindahan jurus-jurus
      karate/Kata, Taekwondo/ Poomsae, Free style, Juggling. YSC juga
      memfasilitasi perlombaan e-sport, seperti PUBG dan Mobile Legend. YSC akan
      bekerjasama dengan lembaga Pemerintah baik tingkat pusat maupun daerah
      agar pemenang mendapatkan piagam/sertifikat resmi dari Pemerintah (Jenis
      lomba akan disesuaikan dengan kebutuhan masing-masing Pemerintah Daerah).
      YSC membuka peluang sponsorship untuk dunia swasta untuk bersama-sama
      membangun jiwa generasi muda Indonesia untuk sehat dan kompetitif.
    </p>
    <h1>Untuk Siapa?</h1>
    <p id="p-2">
      YSC didedikasikan bagi pelajar seluruh Indonesia untuk tetap bergerak,
      berkompetisi dan meraih prestasi secara sehat di masa pandemi.
    </p>
    <h1>Visi & Misi</h1>
    <h1 id="visi">Visi</h1>
    <h3>PELAJAR INDONESIA TETAP BERPRESTASI DI MASA PANDEMI</h3>
    <h1 id="misi">Misi</h1>
    <p id="isi-misi">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages
    </p>
    <ul>
      <li>1. Memfasilitasi tugas Pemerintah di bidang pendidikan</li>
      <li>
        2. Menyediakan ajang/panggung virtual bagi pelajar untuk berkompetisi
      </li>
      <li>
        3. Membangun kolaborasi Pemerintah-Dunia Usaha-Masyarakat untuk bersama
        meningkatkan kualitas generasi muda Indonesia
      </li>
      <li>
        4. Berperan aktif membangun generasi muda Indonesia yang sehat dan
        kompetitif
      </li>
    </ul>
    <div class="bg-img">
      <div class=" footer">
        <div class="container-flex">
          <h1 id="location">LOCATION</h1>
          <img
            id="location-img "
            src="@/assets/location.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="div-find">
          <h1 id="find">FIND WE AT</h1>
          <div class="div-img">
            <div class="img-class">
              <img
                id="instagram"
                src="@/assets/Rectangle 46.png"
                alt=""
                srcset=""
              />
              <img
                id="youtube"
                src="@/assets/Rectangle 47.png"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  created() {
    this.$emit("change-active", 0);
  },
  mounted() {
    this.$emit("changeRoute", this.$route.name);
  },
};
</script>

<style scoped>
.about {
  background-image: url(~@/assets/Rectangle-48.png);
}
#logo {
  justify-content: center;
  width: 712px;
  height: 566px;
}

.about h1 {
  font-size: 40px;
  font-weight: 700;
  text-align: center;
}

#p-2 {
  margin: auto;
  text-align: center;
}

.about p {
  font-size: 18px;
}

.about h3 {
  width: 80%;
}

.about li {
  width: 82%;
  margin: auto;
}
.about h1,
h3,
p {
  padding-top: 35px;
  width: 80%;
  margin: auto;
}
ul {
  padding-bottom: 2rem;
}
#visi,
#misi {
  text-align: start;
}
#isi-misi {
  padding-bottom: 2rem;
}

#location {
  padding-bottom: 2rem;

  grid-area: location;
  font-weight: 400;
}
#find {
  font-weight: 400;
}

#location-img {
}
.location-class {
  width: 80%;
  margin: auto;
}

.footer {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: row;
  background-repeat: no-repeat;
  background-size: cover;
}

.container-flex {
  display: flex;
  flex-direction: column;
}

.bg-img {
  background-image: url("~@/assets/Rectangle-16.png");
}

.div-find {
  display: flex;
  flex-direction: column;
}
#instagram {
  width: 69.85px;
  margin-left: 2rem;
  height: 45px;
}

#youtube {
  width: 36.44px;
  height: 23px;
  margin-left: 3rem;
  margin-top: -2.5rem;
}

#find {
  margin-left: 38rem;
  margin-bottom: 17rem;
}
.div-img {
  display: flex;
  flex-direction: row;
}
.img-class {
  margin-left: 55rem;
  margin-top: -16rem;
}
</style>
