import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fafacebook } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
    return (
        <div id="footer">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-2 mx-2">
                        <h4>
                            Dimsum Ibukota
                        </h4>
                        <p>Hubungi Kami</p>
                        <p>Tentang Kami</p>
                        <p>News</p>
                    </div>
                    <div className="col-2 mx-3">
                        <p>Layanan</p>
                        <p>Syarat dan Ketentuan</p>
                    </div>
                    <div className="col-3">
                    {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                        <p>Instagram:</p>
                        <p>Facebook:</p>
                        <p>Twitter:</p>
                    </div>
                    <div className="col-4">
                        <h3>
                            Berlangganan newsletter Dimsum Ibukota
                        </h3>
                        <div className="mb-3 d-flex">
                            <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="Masukkan email" />
                            <button type="button" className="btn btn-danger">Daftar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 py-1 bg-dark text-light">
                <div className="container">
                    <p>2021 Dimsum Ibukota</p>
                </div>
            </div>
        </div>
    )
}
