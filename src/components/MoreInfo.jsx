export default function MoreInfo(){
    return (
      <>
        <div className={`container h-[100vh] py-20`}>
          <h1 className="text-[#02063D] lg:text-6xl md:text-5xl text-4xl font-bold underline">
            More Info
          </h1>
          <div className="mt-10">
            <p className="text-justify lg:w-[1200px]">
              Warung Makan Bahari adalah tempat kuliner yang menawarkan beragam
              hidangan segar dengan cita rasa autentik dan harga terjangkau.
              Berlokasi di Beberapa kota di Indonesia. Warung Makan Bahari menyajikan
              menu favorit, semuanya disiapkan dengan bahan berkualitas dan
              bumbu khas. Kami mengutamakan pelayanan ramah dan suasana santai,
              cocok untuk makan bersama keluarga maupun teman-teman. Nikmati
              pengalaman makan yang berbeda di Warung Makan Bahari, di mana
              kesegaran laut hadir di meja Anda.
            </p>
            <div className="mt-16">
              <h1 className="text-4xl font-bold text-[#02063D]">Alamat</h1>
              <div className="ms-2 mt-5 flex gap-16">
                <div>
                  <div className="text-[18px] py-5">
                    <p className="font-bold text-[23px] text-[#EB8317]">
                      Warung Makan Bahari - Malang
                    </p>
                    <p>Jl. Jend. Sudirman No. 5, Malang</p>
                    <p>08123456789</p>
                  </div>
                  <div className="text-[18px] py-5">
                    <p className="font-bold text-[23px] text-[#EB8317]">
                      Warung Makan Bahari - Sidoarjo
                    </p>
                    <p>Jl. Jend. Sudirman No. 5, Sidoarjo</p>
                    <p>09123456789</p>
                  </div>
                  <div className="text-[18px] py-5">
                    <p className="font-bold text-[23px] text-[#EB8317]">
                      Warung Makan Bahari - Purworejo
                    </p>
                    <p>Jl. Ahmad Yani No. 5, Purworejo</p>
                    <p>087123456789</p>
                  </div>
                </div>
                <div>
                  <div className="text-[18px] py-5">
                    <p className="font-bold text-[23px] text-[#EB8317]">
                      Warung Makan Bahari - Tulungagung
                    </p>
                    <p>Jl. kyai Hasyim Ashari No. 5, Tulungagung</p>
                    <p>088123456789</p>
                  </div>
                  <div className="text-[18px] py-5">
                    <p className="font-bold text-[23px] text-[#EB8317]">
                      Warung Makan Bahari - Surabaya
                    </p>
                    <p>Jl. Tunjungan No. 5, Surabaya</p>
                    <p>083123456789</p>
                  </div>
                  <div className="text-[18px] py-5">
                    <p className="font-bold text-[23px] text-[#EB8317]">
                      Warung Makan Bahari - Semarang
                    </p>
                    <p>Jl. Pahlawan No. 5, Semarang</p>
                    <p>089123456789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}