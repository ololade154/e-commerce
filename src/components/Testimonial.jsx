function Testimonial() {
  return (
    <div className="testimonial-section">
      <h1>testimonials</h1>
      <h2>Our Client Reviews</h2>
      <div className="testimonial-images">
        <div className="testimonial-image">
          <img src="/assets/testimonial-image1.svg" className="avatar-image" />
          <div className="testimonial-content">
            <img src="/assets/avatar1.svg" className="testimonial-avatar" />
            <div className="avatar-content">
              <h3>Bang Upin</h3>
              <span>Pedagang Asongan</span>
              <p>“Terimakasih banyak, kini ruanganku</p>
              <p>menjadi lebih mewah dan terlihat</p>
              <p>mehal"</p>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
        <div className="testimonial-image">
          <img src="/assets/testimonial-image2.svg" className="avatar-image" />
          <div className="testimonial-content">
            <img src="/assets/avatar2.svg" className="testimonial-avatar" />
            <div className="avatar-content">
              <h3>Ibuk Sukijan</h3>
              <span>Ibu Rumah Tangga</span>
              <p>"Makasih Panto, aku sekarang berasa</p>
              <p>tinggnal di apartment karena barang-</p>
              <p>barang yang terlihat mewah"</p>
              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
        <div className="testimonial-image">
          <img src="/assets/testimonial-image3.svg" className="avatar-image" />
          <div className="testimonial-content">
            <img src="/assets/avatar3.svg" className="testimonial-avatar" />
            <div className="avatar-content">
              <h3>Mpok Ina </h3>
              <span>Karyawan Swasta</span>
              <p>"Sangat terjangkau untuk kantong</p>
              <p>saya yang tidak terlalu banyak</p>
              <p>saya yang tidak terlalu banyak"</p>

              <div className="stars">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonial;
